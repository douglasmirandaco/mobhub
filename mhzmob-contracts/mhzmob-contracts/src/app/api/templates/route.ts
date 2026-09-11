import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Não autenticado" }, { status: 401 });

  const templates = await prisma.template.findMany({
    where: { isActive: true },
    select: { id: true, slug: true, name: true, description: true, version: true },
    orderBy: { name: "asc" },
  });

  return NextResponse.json(templates);
}
