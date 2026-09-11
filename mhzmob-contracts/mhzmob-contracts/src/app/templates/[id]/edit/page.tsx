"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Clause, FieldDef } from "@/types/template";

interface TemplateFull {
  id: string;
  name: string;
  description: string | null;
  version: number;
  fieldSchema: FieldDef[];
  clauses: Clause[];
}

export default function EditTemplatePage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const [template, setTemplate] = useState<TemplateFull | null>(null);
  const [fieldSchemaText, setFieldSchemaText] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch(`/api/templates/${params.id}`)
      .then((r) => r.json())
      .then((t: TemplateFull) => {
        setTemplate(t);
        setFieldSchemaText(JSON.stringify(t.fieldSchema, null, 2));
      });
  }, [params.id]);

  if (!template) {
    return <div className="max-w-4xl mx-auto px-4 py-10 text-sm text-slate-500">Carregando...</div>;
  }

  function updateClauseBody(idx: number, body: string) {
    setTemplate((prev) => {
      if (!prev) return prev;
      const clauses = prev.clauses.map((c, i) => (i === idx ? { ...c, body } : c));
      return { ...prev, clauses };
    });
  }

  function updateClauseTitle(idx: number, title: string) {
    setTemplate((prev) => {
      if (!prev) return prev;
      const clauses = prev.clauses.map((c, i) => (i === idx ? { ...c, title } : c));
      return { ...prev, clauses };
    });
  }

  async function handleSave() {
    if (!template) return;
    setSaving(true);
    setError(null);
    setSaved(false);

    let fieldSchema: FieldDef[];
    try {
      fieldSchema = JSON.parse(fieldSchemaText);
    } catch {
      setSaving(false);
      setError("O schema de campos (JSON) está com sintaxe inválida.");
      return;
    }

    const res = await fetch(`/api/templates/${template.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: template.name,
        description: template.description,
        fieldSchema,
        clauses: template.clauses,
      }),
    });
    setSaving(false);
    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      setError(body.error ?? "Erro ao salvar.");
      return;
    }
    setSaved(true);
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Link href="/dashboard" className="text-sm text-slate-500 hover:underline">
        ← Painel
      </Link>
      <h1 className="text-xl font-bold mt-2 mb-1">Editar modelo: {template.name}</h1>
      <p className="text-sm text-slate-500 mb-6">
        Alterações aqui mudam o texto e os campos que TODOS os novos contratos deste modelo vão usar. Versão atual: {template.version}.
      </p>

      {saved && <p className="text-sm text-emerald-600 mb-4">Modelo salvo com sucesso.</p>}
      {error && <p className="text-sm text-red-600 mb-4">{error}</p>}

      <section className="bg-white border rounded-xl p-5 mb-6">
        <h2 className="text-sm font-semibold mb-3">Clausulado</h2>
        <p className="text-xs text-slate-400 mb-4">
          Use <code>{"{{idDoCampo}}"}</code> para inserir um valor preenchido. <code>**texto**</code> vira negrito. Linhas começando com
          &quot;- &quot; viram lista.
        </p>
        <div className="space-y-4 max-h-[600px] overflow-y-auto pr-1">
          {template.clauses.map((clause, idx) => (
            <div key={clause.id} className="border rounded-lg p-3">
              <input
                value={clause.title}
                onChange={(e) => updateClauseTitle(idx, e.target.value)}
                className="w-full font-semibold text-sm border-b pb-2 mb-2 focus:outline-none"
              />
              <textarea
                value={clause.body}
                onChange={(e) => updateClauseBody(idx, e.target.value)}
                rows={6}
                className="w-full text-sm border rounded-lg px-3 py-2 font-mono"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white border rounded-xl p-5 mb-6">
        <h2 className="text-sm font-semibold mb-3">Schema de campos do formulário (JSON avançado)</h2>
        <p className="text-xs text-slate-400 mb-3">
          Cuidado: JSON inválido impede o salvamento. Cada campo precisa de <code>id</code>, <code>label</code>, <code>type</code> e{" "}
          <code>section</code>.
        </p>
        <textarea
          value={fieldSchemaText}
          onChange={(e) => setFieldSchemaText(e.target.value)}
          rows={16}
          className="w-full text-xs border rounded-lg px-3 py-2 font-mono"
        />
      </section>

      <button
        onClick={handleSave}
        disabled={saving}
        className="bg-slate-900 text-white rounded-lg px-5 py-2.5 text-sm font-medium disabled:opacity-50"
      >
        {saving ? "Salvando..." : "Salvar modelo"}
      </button>
    </div>
  );
}
