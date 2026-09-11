import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { decryptJson, encryptJson } from "@/lib/crypto";
import { logAudit } from "@/lib/audit";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Não autenticado" }, { status: 401 });

  const contract = await prisma.contract.findUnique({
    where: { id: params.id },
    include: { template: true },
  });
  if (!contract) return NextResponse.json({ error: "Contrato não encontrado" }, { status: 404 });

  await logAudit({
    action: "CONTRACT_VIEW",
    userId: (session.user as { id: string }).id,
    contractId: contract.id,
    ipAddress: req.headers.get("x-forwarded-for"),
  });

  const data = decryptJson(contract.encryptedData);

  return NextResponse.json({
    id: contract.id,
    title: contract.title,
    status: contract.status,
    templateId: contract.templateId,
    template: { id: contract.template.id, name: contract.template.name, fieldSchema: contract.template.fieldSchema },
    data,
  });
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  const role = (session?.user as { role?: string } | undefined)?.role;
  if (!session) return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
  if (role === "VIEWER") return NextResponse.json({ error: "Sem permissão para editar" }, { status: 403 });

  const body = await req.json();
  const updated = await prisma.contract.update({
    where: { id: params.id },
    data: {
      title: body.title,
      encryptedData: body.data ? encryptJson(body.data) : undefined,
    },
  });

  await logAudit({
    action: "CONTRACT_UPDATE",
    userId: (session.user as { id: string }).id,
    contractId: updated.id,
  });

  return NextResponse.json({ id: updated.id });
}

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  const role = (session?.user as { role?: string } | undefined)?.role;
  if (!session) return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
  if (role !== "ADMIN") return NextResponse.json({ error: "Apenas administradores podem excluir" }, { status: 403 });

  await prisma.contract.delete({ where: { id: params.id } });
  await logAudit({ action: "CONTRACT_DELETE", userId: (session.user as { id: string }).id, contractId: params.id });

  return NextResponse.json({ ok: true });
}
