"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { DynamicForm } from "@/components/DynamicForm";
import { FieldDef } from "@/types/template";

interface TemplateDetail {
  id: string;
  name: string;
  fieldSchema: FieldDef[];
}

export default function NewContractPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const templateId = searchParams.get("templateId");

  const [template, setTemplate] = useState<TemplateDetail | null>(null);
  const [title, setTitle] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!templateId) return;
    fetch(`/api/templates/${templateId}`)
      .then((r) => r.json())
      .then((t) => setTemplate(t));
  }, [templateId]);

  if (!templateId) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-10">
        <p>Selecione um modelo de contrato no painel.</p>
        <Link href="/dashboard" className="text-sm underline">
          Voltar ao painel
        </Link>
      </div>
    );
  }

  if (!template) {
    return <div className="max-w-2xl mx-auto px-4 py-10 text-sm text-slate-500">Carregando modelo...</div>;
  }

  async function handleSubmit(data: Record<string, unknown>) {
    if (!title.trim()) {
      setError("Dê um título interno para este contrato (ex: nome do cliente).");
      return;
    }
    setSubmitting(true);
    setError(null);
    const res = await fetch("/api/contracts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ templateId, title, data }),
    });
    setSubmitting(false);
    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      setError(body.error ?? "Erro ao salvar o contrato.");
      return;
    }
    const { id } = await res.json();
    router.push(`/contracts/${id}`);
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Link href="/dashboard" className="text-sm text-slate-500 hover:underline">
        ← Painel
      </Link>
      <h1 className="text-xl font-bold mt-2 mb-1">{template.name}</h1>
      <p className="text-sm text-slate-500 mb-6">Preencha os campos abaixo para gerar o contrato.</p>

      <div className="bg-white rounded-xl border p-5 mb-6">
        <label className="block text-xs font-medium text-slate-600 mb-1">Título interno do contrato *</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Ex: Contrato 014/2026 — João Silva"
          className="w-full border rounded-lg px-3 py-2 text-sm"
        />
      </div>

      {error && <p className="text-sm text-red-600 mb-4">{error}</p>}

      <DynamicForm fields={template.fieldSchema} onSubmit={handleSubmit} submitting={submitting} submitLabel="Salvar contrato" />
    </div>
  );
}
