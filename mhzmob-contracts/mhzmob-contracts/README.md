# MHZ MOB — Sistema de Geração de Contratos

Sistema web interno para o time da MHZ MOB gerar, preencher e exportar em PDF os
dois contratos-modelo da empresa:

1. **Contrato de Compra, Venda e Instalação de Eletroposto**
2. **Contrato de Gestão de Eletropostos, Plataforma Atlas e Aplicativo**

O clausulado e os campos de cada modelo **não estão fixos no código** — vivem no
banco de dados (tabela `Template`) e podem ser editados pelo time em
`/templates/[id]/edit` (apenas usuários ADMIN), sem precisar de um programador.

---

## Stack

- **Next.js 14** (App Router) + TypeScript
- **PostgreSQL** via **Prisma** (schema em `prisma/schema.prisma`)
- **NextAuth** (login por e-mail/senha, sessão JWT) com 3 papéis: `ADMIN`, `EDITOR`, `VIEWER`
- **@react-pdf/renderer** — gera o PDF final no servidor, sem depender de um navegador headless (funciona bem em serverless/Vercel)
- **AES-256-GCM** (`src/lib/crypto.ts`) — os dados de cada contrato são cifrados em repouso
- Tailwind CSS

## Estrutura relevante

```
prisma/schema.prisma              modelos: User, Template, Contract, AuditLog
prisma/seed.ts                    cria os 2 templates + 1 usuário admin inicial
src/lib/templates/*.fields.ts     schema dos campos de cada contrato (o formulário nasce daqui)
src/lib/templates/*.clauses.ts    o clausulado de cada contrato, com {{placeholders}}
src/lib/placeholders.ts           motor que troca {{campo}} pelo valor preenchido
src/lib/pdf/                      geração do PDF (react-pdf)
src/components/DynamicForm.tsx    formulário 100% dirigido pelo fieldSchema (JSON)
src/app/templates/[id]/edit       tela onde o time edita o clausulado e os campos
src/app/contracts/new             preenche um contrato novo a partir de um modelo
src/app/contracts/[id]            visualiza/edita um contrato salvo e exporta o PDF
```

---

## Rodando localmente

### 1. Banco de dados

Mais simples para testar (sem instalar Postgres): troque o provider do Prisma para SQLite.

```prisma
// prisma/schema.prisma
datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}
```
```
DATABASE_URL="file:./dev.db"
```

Em produção, use PostgreSQL (Supabase, Neon, Railway, RDS...) — mantenha o provider `postgresql`.

### 2. Variáveis de ambiente

```bash
cp .env.example .env
```

Gere os segredos:

```bash
openssl rand -base64 32   # -> NEXTAUTH_SECRET
openssl rand -base64 32   # -> ENCRYPTION_KEY (guarde em um cofre de segredos, nunca no git)
```

### 3. Instalar, migrar e popular o banco

```bash
npm install
npx prisma migrate dev --name init
npm run db:seed
```

O seed cria o usuário administrador definido em `SEED_ADMIN_EMAIL` /
`SEED_ADMIN_PASSWORD` do `.env` (padrão: `admin@mhzmob.com.br` /
`TrocarSenha123!`) — **troque essa senha assim que possível** (ver seção de
gestão de usuários abaixo).

### 4. Rodar

```bash
npm run dev
```

Acesse `http://localhost:3000`.

---

## Deploy (hospedagem)

Este código está pronto para deploy, mas **eu não consigo hospedá-lo por vocês** —
isso precisa ser feito pelo seu time técnico ou por vocês seguindo os passos abaixo.

**Caminho recomendado (mais simples): Vercel + Neon/Supabase (Postgres gerenciado)**

1. Suba este código para um repositório git (GitHub/GitLab).
2. Crie um banco Postgres no [Neon](https://neon.tech) ou [Supabase](https://supabase.com) (ambos têm plano gratuito).
3. Importe o repositório na [Vercel](https://vercel.com).
4. Configure as variáveis de ambiente do projeto na Vercel: `DATABASE_URL`, `NEXTAUTH_SECRET`, `NEXTAUTH_URL` (a URL pública do deploy), `ENCRYPTION_KEY`.
5. Rode as migrações contra o banco de produção uma vez (`npx prisma migrate deploy`) e o seed (`npm run db:seed`) — pode ser feito localmente apontando o `DATABASE_URL` para o banco de produção, ou via um passo de build/CI.
6. Deploy.

Alternativas equivalentes: Railway, Render ou uma VM própria com Docker (Postgres + Node).

---

## Gestão de usuários e permissões (RBAC)

| Papel | Pode |
|---|---|
| `ADMIN` | Tudo: criar/editar usuários (via `prisma studio` ou uma tela futura), editar o clausulado dos templates, ver/editar/excluir qualquer contrato |
| `EDITOR` | Preencher formulários, criar e editar contratos, exportar PDF |
| `VIEWER` | Apenas visualizar contratos já gerados |

Hoje a criação de usuários é feita via `npx prisma studio` (interface visual do
banco) ou por script — não há tela de "criar usuário" na versão inicial. Isso é
uma extensão simples caso o time queira (rota `/api/users` + tela em
`/settings/users`, seguindo o mesmo padrão dos outros CRUDs deste projeto).

---

## O que este sistema cobre de LGPD — e o que **não** cobre

Cobertura técnica implementada:

- **Criptografia em repouso** (`src/lib/crypto.ts`, AES-256-GCM): os dados
  preenchidos de cada contrato (CPF, dados bancários, endereços etc.) são
  cifrados antes de irem para o banco. A chave fica só na variável de ambiente
  `ENCRYPTION_KEY`, nunca no código-fonte ou no banco.
- **Controle de acesso** (RBAC de 3 papéis) e **autenticação** obrigatória em
  todas as rotas de contrato/template (`src/middleware.ts`).
- **Trilha de auditoria** (tabela `AuditLog`): login, criação/edição/exclusão
  de contrato, exportação de PDF e edição de template ficam registrados com
  usuário, ação, contrato afetado e IP.
- **Minimização de dados na listagem**: a tela de painel (`/dashboard`) nunca
  traz os dados cifrados — só metadados (título, status, datas). Os dados só
  são decifrados quando alguém abre um contrato específico ou pede o PDF, e
  isso gera um registro de auditoria (`CONTRACT_VIEW`).
- **Marcação de campos sensíveis** no próprio schema (`sensitive: true`) —
  usada hoje para sinalizar visualmente (🔒) no formulário; a função
  `maskSensitive()` em `crypto.ts` está pronta para ser usada em qualquer tela
  de listagem que precise exibir esses campos mascarados.

O que **fica fora do escopo de código** e depende de decisões da empresa:

- **Base legal e finalidade do tratamento** (arts. 7º/11 da LGPD) — isso é uma
  decisão jurídica, não técnica. O clausulado já traz uma cláusula de LGPD
  (editável) refletindo o que estava nos contratos originais.
- **Política de privacidade e nomeação de DPO/encarregado.**
- **Retenção e descarte automático de dados** — o schema tem os campos
  necessários (`createdAt`, `status`) para implementar uma rotina de expurgo
  automático (ex: anonimizar contratos `ARCHIVED` após X anos), mas essa
  rotina ainda não está implementada.
- **Atendimento a direitos do titular** (acesso, correção, eliminação) — os
  tipos `DATA_EXPORT_REQUEST` e `DATA_DELETE_REQUEST` já existem no enum de
  auditoria para quando esse fluxo for construído.
- **Certificação/auditoria formal de conformidade** — isso exige avaliação do
  jurídico/DPO da empresa, não algo que um sistema por si só garante.

---

## Adicionando um terceiro modelo de contrato

Você mencionou que vai precisar de mais modelos no futuro. O sistema já foi
pensado para isso:

1. Crie `src/lib/templates/novo-modelo.fields.ts` e `.clauses.ts` seguindo o
   padrão dos dois existentes.
2. Adicione um `template.upsert(...)` em `prisma/seed.ts` apontando para eles.
3. Rode `npm run db:seed` novamente.

Ou, sem tocar em código: duplique um template existente direto no banco
(`prisma studio`) e edite o clausulado pela tela `/templates/[id]/edit`.

---

## Limitações conhecidas desta primeira versão

- Não há tela de gestão de usuários (ver seção acima) — via `prisma studio` por enquanto.
- O JSON do schema de campos é editado como texto bruto na tela de admin (não há um "form builder" visual ainda).
- A rotina de retenção/expurgo automático de dados pessoais não está implementada.
- Testado com `tsc --noEmit`; o ambiente de geração deste projeto não teve acesso de rede ao serviço de binários do Prisma (`binaries.prisma.sh`) para rodar `prisma generate`/`next build` de ponta a ponta — isso deve funcionar normalmente no seu ambiente de desenvolvimento ou CI com acesso de rede padrão.
