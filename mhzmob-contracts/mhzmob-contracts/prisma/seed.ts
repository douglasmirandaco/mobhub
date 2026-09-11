import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { vendaEletropostoFields } from "../src/lib/templates/venda-eletroposto.fields";
import { vendaEletropostoClauses } from "../src/lib/templates/venda-eletroposto.clauses";
import { gestaoEletropostosFields } from "../src/lib/templates/gestao-eletropostos.fields";
import { gestaoEletropostosClauses } from "../src/lib/templates/gestao-eletropostos.clauses";

const prisma = new PrismaClient();

async function main() {
  // --- Templates ---
  await prisma.template.upsert({
    where: { slug: "venda-eletroposto" },
    update: {
      fieldSchema: vendaEletropostoFields as unknown as object,
      clauses: vendaEletropostoClauses as unknown as object,
    },
    create: {
      slug: "venda-eletroposto",
      name: "Contrato de Compra, Venda e Instalação de Eletroposto",
      description: "Baseado em CONTRATO_MHZ_MOB_REVISADO.docx",
      fieldSchema: vendaEletropostoFields as unknown as object,
      clauses: vendaEletropostoClauses as unknown as object,
    },
  });

  await prisma.template.upsert({
    where: { slug: "gestao-eletropostos" },
    update: {
      fieldSchema: gestaoEletropostosFields as unknown as object,
      clauses: gestaoEletropostosClauses as unknown as object,
    },
    create: {
      slug: "gestao-eletropostos",
      name: "Contrato de Gestão de Eletropostos, Plataforma Atlas e Aplicativo",
      description: "Baseado em CONTRATO_GESTAO_ELETROPOSTOS_MHZMOB.docx",
      fieldSchema: gestaoEletropostosFields as unknown as object,
      clauses: gestaoEletropostosClauses as unknown as object,
    },
  });

  // --- Usuário administrador inicial ---
  // TROQUE a senha no primeiro acesso (Configurações > Usuários).
  const adminEmail = process.env.SEED_ADMIN_EMAIL ?? "admin@mhzmob.com.br";
  const adminPassword = process.env.SEED_ADMIN_PASSWORD ?? "TrocarSenha123!";

  const existingAdmin = await prisma.user.findUnique({ where: { email: adminEmail } });
  if (!existingAdmin) {
    await prisma.user.create({
      data: {
        name: "Administrador",
        email: adminEmail,
        passwordHash: await bcrypt.hash(adminPassword, 12),
        role: "ADMIN",
      },
    });
    console.log(`Usuário admin criado: ${adminEmail} / senha inicial: ${adminPassword} (troque no primeiro login)`);
  }

  console.log("Seed concluído.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
