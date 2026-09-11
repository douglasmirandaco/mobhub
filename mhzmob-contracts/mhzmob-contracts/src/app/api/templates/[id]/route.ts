import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { logAudit } from "@/lib/audit";

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Não autenticado" }, { status: 401 });

  const template = await prisma.template.findUnique({ where: { id: params.id } });
  if (!template) return NextResponse.json({ error: "Template não encontrado" }, { status: 404 });

  return NextResponse.json(template);
}

// Edição do clausulado e do schema de campos — só ADMIN.
// É aqui que o time consegue alterar o texto do contrato sem tocar em código.
export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  const role = (session?.user as { role?: string } | undefined)?.role;
  if (!session) return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
  if (role !== "ADMIN") return NextResponse.json({ error: "Apenas administradores podem editar templates" }, { status: 403 });

  const body = await req.json();
  const updated = await prisma.template.update({
    where: { id: params.id },
    data: {
      name: body.name,
      description: body.description,
      fieldSchema: body.fieldSchema,
      clauses: body.clauses,
      version: { increment: 1 },
    },
  });

  await logAudit({
    action: "TEMPLATE_UPDATE",
    userId: (session.user as { id?: string }).id,
    metadata: { templateId: params.id },
  });

  return NextResponse.json(updated);
}
