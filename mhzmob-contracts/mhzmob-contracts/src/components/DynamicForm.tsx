"use client";

import { useMemo, useState } from "react";
import { FieldDef } from "@/types/template";

interface DynamicFormProps {
  fields: FieldDef[];
  initialData?: Record<string, unknown>;
  onSubmit: (data: Record<string, unknown>) => void;
  submitLabel?: string;
  submitting?: boolean;
}

function defaultsFromFields(fields: FieldDef[]): Record<string, unknown> {
  const data: Record<string, unknown> = {};
  for (const f of fields) {
    if (f.type === "group") {
      data[f.id] = [];
    } else if (f.defaultValue !== undefined) {
      data[f.id] = f.defaultValue;
    }
  }
  return data;
}

export function DynamicForm({ fields, initialData, onSubmit, submitLabel = "Salvar", submitting }: DynamicFormProps) {
  const [data, setData] = useState<Record<string, unknown>>(() => ({ ...defaultsFromFields(fields), ...initialData }));

  const sections = useMemo(() => {
    const map = new Map<string, FieldDef[]>();
    for (const f of fields) {
      if (!map.has(f.section)) map.set(f.section, []);
      map.get(f.section)!.push(f);
    }
    return Array.from(map.entries());
  }, [fields]);

  function setValue(id: string, value: unknown) {
    setData((prev) => ({ ...prev, [id]: value }));
  }

  function isVisible(f: FieldDef): boolean {
    if (!f.showIf) return true;
    return data[f.showIf.field] === f.showIf.equals;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit(data);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {sections.map(([section, sectionFields]) => (
        <fieldset key={section} className="bg-white rounded-xl border p-5">
          <legend className="text-sm font-semibold text-slate-700 px-1">{section}</legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            {sectionFields.filter(isVisible).map((f) =>
              f.type === "group" ? (
                <div key={f.id} className="md:col-span-2">
                  <GroupField field={f} value={(data[f.id] as Array<Record<string, unknown>>) ?? []} onChange={(v) => setValue(f.id, v)} />
                </div>
              ) : (
                <div key={f.id} className={f.type === "textarea" ? "md:col-span-2" : undefined}>
                  <FieldInput field={f} value={data[f.id]} onChange={(v) => setValue(f.id, v)} />
                </div>
              )
            )}
          </div>
        </fieldset>
      ))}

      <button
        type="submit"
        disabled={submitting}
        className="bg-slate-900 text-white rounded-lg px-5 py-2.5 text-sm font-medium disabled:opacity-50"
      >
        {submitting ? "Salvando..." : submitLabel}
      </button>
    </form>
  );
}

function FieldInput({
  field,
  value,
  onChange,
}: {
  field: FieldDef;
  value: unknown;
  onChange: (v: unknown) => void;
}) {
  const commonProps = {
    id: field.id,
    required: field.required,
    placeholder: field.placeholder,
    className: "w-full border rounded-lg px-3 py-2 text-sm",
  };

  return (
    <div>
      <label htmlFor={field.id} className="block text-xs font-medium text-slate-600 mb-1">
        {field.label}
        {field.required && <span className="text-red-500"> *</span>}
        {field.sensitive && (
          <span className="ml-1 text-amber-600" title="Dado pessoal/sensível — protegido por criptografia (LGPD)">
            🔒
          </span>
        )}
      </label>

      {field.type === "textarea" && (
        <textarea {...commonProps} rows={3} value={(value as string) ?? ""} onChange={(e) => onChange(e.target.value)} />
      )}

      {field.type === "select" && (
        <select {...commonProps} value={(value as string) ?? ""} onChange={(e) => onChange(e.target.value)}>
          <option value="">Selecione...</option>
          {field.options?.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      )}

      {(field.type === "text" || field.type === "email" || field.type === "cpf_cnpj" || field.type === "date") && (
        <input
          {...commonProps}
          type={field.type === "email" ? "email" : field.type === "date" ? "date" : "text"}
          value={(value as string) ?? ""}
          onChange={(e) => onChange(e.target.value)}
        />
      )}

      {(field.type === "number" || field.type === "currency") && (
        <input
          {...commonProps}
          type="number"
          step="any"
          value={(value as number) ?? ""}
          onChange={(e) => onChange(e.target.value === "" ? "" : Number(e.target.value))}
        />
      )}

      {field.helpText && <p className="text-xs text-slate-400 mt-1">{field.helpText}</p>}
    </div>
  );
}

function GroupField({
  field,
  value,
  onChange,
}: {
  field: FieldDef;
  value: Array<Record<string, unknown>>;
  onChange: (v: Array<Record<string, unknown>>) => void;
}) {
  const itemFields = field.itemFields ?? [];

  function addItem() {
    onChange([...value, {}]);
  }
  function removeItem(idx: number) {
    onChange(value.filter((_, i) => i !== idx));
  }
  function updateItem(idx: number, fieldId: string, v: unknown) {
    const next = value.map((item, i) => (i === idx ? { ...item, [fieldId]: v } : item));
    onChange(next);
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label className="block text-xs font-medium text-slate-600">{field.label}</label>
        <button type="button" onClick={addItem} className="text-xs bg-slate-100 hover:bg-slate-200 rounded px-2 py-1">
          + adicionar
        </button>
      </div>
      {field.helpText && <p className="text-xs text-slate-400 mb-2">{field.helpText}</p>}

      <div className="space-y-3">
        {value.map((item, idx) => (
          <div key={idx} className="border rounded-lg p-3 bg-slate-50">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-semibold text-slate-500">Item {idx + 1}</span>
              <button type="button" onClick={() => removeItem(idx)} className="text-xs text-red-600">
                remover
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {itemFields.map((itemField) => (
                <FieldInput
                  key={itemField.id}
                  field={itemField}
                  value={item[itemField.id]}
                  onChange={(v) => updateItem(idx, itemField.id, v)}
                />
              ))}
            </div>
          </div>
        ))}
        {value.length === 0 && <p className="text-xs text-slate-400">Nenhum item adicionado ainda.</p>}
      </div>
    </div>
  );
}
