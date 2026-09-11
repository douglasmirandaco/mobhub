import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { SignOutButton } from "@/components/SignOutButton";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  const [templates, contracts] = await Promise.all([
    prisma.template.findMany({ where: { isActive: true }, orderBy: { name: "asc" } }),
    prisma.contract.findMany({
      orderBy: { createdAt: "desc" },
      take: 20,
      include: { template: { select: { name: true } }, createdBy: { select: { name: true } } },
    }),
  ]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <header className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">MHZ MOB — Contratos</h1>
          <p className="text-sm text-slate-500">
            Olá, {session?.user?.name} ({(session?.user as { role?: string } | undefined)?.role})
          </p>
        </div>
        <SignOutButton />
      </header>

      <section className="mb-10">
        <h2 className="text-sm font-semibold text-slate-600 mb-3">Novo contrato a partir de um modelo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {templates.map((t: (typeof templates)[number]) => (
            <Link
              key={t.id}
              href={`/contracts/new?templateId=${t.id}`}
              className="block bg-white border rounded-xl p-5 hover:border-slate-400 transition"
            >
              <p className="font-medium">{t.name}</p>
              <p className="text-xs text-slate-500 mt-1">{t.description}</p>
              <p className="text-xs text-slate-400 mt-2">versão {t.version}</p>
            </Link>
          ))}
        </div>
        {(session?.user as { role?: string } | undefined)?.role === "ADMIN" && (
          <div className="mt-3 flex gap-3">
            {templates.map((t: (typeof templates)[number]) => (
              <Link key={t.id} href={`/templates/${t.id}/edit`} className="text-xs text-slate-500 hover:underline">
                editar clausulado: {t.name}
              </Link>
            ))}
          </div>
        )}
      </section>

      <section>
        <h2 className="text-sm font-semibold text-slate-600 mb-3">Contratos recentes</h2>
        <div className="bg-white border rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-slate-100 text-slate-600 text-xs uppercase">
              <tr>
                <th className="text-left px-4 py-2">Título</th>
                <th className="text-left px-4 py-2">Modelo</th>
                <th className="text-left px-4 py-2">Status</th>
                <th className="text-left px-4 py-2">Criado por</th>
                <th className="text-left px-4 py-2">Data</th>
              </tr>
            </thead>
            <tbody>
              {contracts.map((c: (typeof contracts)[number]) => (
                <tr key={c.id} className="border-t hover:bg-slate-50">
                  <td className="px-4 py-2">
                    <Link href={`/contracts/${c.id}`} className="text-slate-900 font-medium hover:underline">
                      {c.title}
                    </Link>
                  </td>
                  <td className="px-4 py-2 text-slate-500">{c.template.name}</td>
                  <td className="px-4 py-2">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100">{c.status}</span>
                  </td>
                  <td className="px-4 py-2 text-slate-500">{c.createdBy.name}</td>
                  <td className="px-4 py-2 text-slate-500">{c.createdAt.toLocaleDateString("pt-BR")}</td>
                </tr>
              ))}
              {contracts.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-4 py-6 text-center text-slate-400">
                    Nenhum contrato gerado ainda.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
