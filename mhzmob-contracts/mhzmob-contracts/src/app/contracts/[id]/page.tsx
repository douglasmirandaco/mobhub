"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { DynamicForm } from "@/components/DynamicForm";
import { FieldDef } from "@/types/template";

interface ContractDetail {
  id: string;
  title: string;
  status: string;
  templateId: string;
  template: { id: string; name: string; fieldSchema: FieldDef[] };
  data: Record<string, unknown>;
}

export default function ContractDetailPage() {
  const params = useParams<{ id: string }>();
  const [contract, setContract] = useState<ContractDetail | null>(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`/api/contracts/${params.id}`)
      .then((r) => r.json())
      .then(setContract);
  }, [params.id]);

  if (!contract) {
    return <div className="max-w-4xl mx-auto px-4 py-10 text-sm text-slate-500">Carregando...</div>;
  }

  async function handleSave(data: Record<string, unknown>) {
    setSaving(true);
    setError(null);
    setSaved(false);
    const res = await fetch(`/api/contracts/${params.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: contract!.title, data }),
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

      <div className="flex items-center justify-between mt-2 mb-6">
        <div>
          <h1 className="text-xl font-bold">{contract.title}</h1>
          <p className="text-sm text-slate-500">{contract.template.name}</p>
        </div>
        <a
          href={`/api/contracts/${params.id}/pdf`}
          target="_blank"
          rel="noreferrer"
          className="bg-slate-900 text-white rounded-lg px-4 py-2 text-sm font-medium"
        >
          Exportar PDF
        </a>
      </div>

      {saved && <p className="text-sm text-emerald-600 mb-4">Alterações salvas.</p>}
      {error && <p className="text-sm text-red-600 mb-4">{error}</p>}

      <DynamicForm
        fields={contract.template.fieldSchema}
        initialData={contract.data}
        onSubmit={handleSave}
        submitting={saving}
        submitLabel="Salvar alterações"
      />
    </div>
  );
}
