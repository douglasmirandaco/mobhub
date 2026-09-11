import { prisma } from "@/lib/prisma";
import { AuditAction } from "@prisma/client";

interface AuditInput {
  action: AuditAction;
  userId?: string | null;
  contractId?: string | null;
  metadata?: Record<string, unknown>;
  ipAddress?: string | null;
}

/**
 * Registra uma entrada na trilha de auditoria. Nunca lança erro para não
 * interromper o fluxo principal — falha de log é registrada no console,
 * não deve derrubar a requisição do usuário.
 */
export async function logAudit(input: AuditInput): Promise<void> {
  try {
    await prisma.auditLog.create({
      data: {
        action: input.action,
        userId: input.userId ?? undefined,
        contractId: input.contractId ?? undefined,
        metadata: input.metadata ?? undefined,
        ipAddress: input.ipAddress ?? undefined,
      },
    });
  } catch (err) {
    console.error("[audit] falha ao gravar log de auditoria:", err);
  }
}
