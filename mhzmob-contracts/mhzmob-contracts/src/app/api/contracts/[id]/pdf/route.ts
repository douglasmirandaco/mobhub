import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { renderToBuffer } from "@react-pdf/renderer";
import React from "react";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { decryptJson } from "@/lib/crypto";
import { logAudit } from "@/lib/audit";
import { resolveClauses } from "@/lib/placeholders";
import { ContractDocument } from "@/lib/pdf/ContractDocument";
import { ContractData, FieldDef, Clause } from "@/types/template";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Não autenticado" }, { status: 401 });

  const contract = await prisma.contract.findUnique({
    where: { id: params.id },
    include: { template: true },
  });
  if (!contract) return NextResponse.json({ error: "Contrato não encontrado" }, { status: 404 });

  const data = decryptJson<ContractData>(contract.encryptedData);
  const fields = contract.template.fieldSchema as unknown as FieldDef[];
  const clauses = contract.template.clauses as unknown as Clause[];

  const resolved = resolveClauses(clauses, fields, data);

  const pdfElement = React.createElement(ContractDocument, {
    documentTitle: contract.template.name,
    contractLabel: contract.title,
    clauses: resolved,
    generatedAt: new Date(),
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- @react-pdf/renderer's types expect its own Document element
  const pdfBuffer = await renderToBuffer(pdfElement as any);

  await prisma.contract.update({
    where: { id: contract.id },
    data: { status: "GENERATED", pdfGeneratedAt: new Date() },
  });

  await logAudit({
    action: "CONTRACT_PDF_EXPORT",
    userId: (session.user as { id: string }).id,
    contractId: contract.id,
    ipAddress: req.headers.get("x-forwarded-for"),
  });

  return new NextResponse(new Uint8Array(pdfBuffer), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="${contract.title.replace(/[^\w-]+/g, "_")}.pdf"`,
    },
  });
}
