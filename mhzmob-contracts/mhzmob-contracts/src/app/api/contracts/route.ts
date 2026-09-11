import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { encryptJson } from "@/lib/crypto";
import { logAudit } from "@/lib/audit";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Não autenticado" }, { status: 401 });

  // Lista só metadados — nunca os dados cifrados/pessoais aqui.
  const contracts = await prisma.contract.findMany({
    select: {
      id: true,
      title: true,
      status: true,
      createdAt: true,
      pdfGeneratedAt: true,
      template: { select: { name: true, slug: true } },
      createdBy: { select: { name: true } },
    },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(contracts);
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  const role = (session?.user as { role?: string } | undefined)?.role;
  if (!session) return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
  if (role === "VIEWER") return NextResponse.json({ error: "Sem permissão para criar contratos" }, { status: 403 });

  const body = await req.json();
  const { templateId, title, data } = body as { templateId: string; title: string; data: Record<string, unknown> };

  if (!templateId || !title || !data) {
    return NextResponse.json({ error: "Campos obrigatórios: templateId, title, data" }, { status: 400 });
  }

  const contract = await prisma.contract.create({
    data: {
      templateId,
      title,
      createdById: (session.user as { id: string }).id,
      encryptedData: encryptJson(data),
      status: "DRAFT",
    },
  });

  await logAudit({
    action: "CONTRACT_CREATE",
    userId: (session.user as { id: string }).id,
    contractId: contract.id,
  });

  return NextResponse.json({ id: contract.id }, { status: 201 });
}
