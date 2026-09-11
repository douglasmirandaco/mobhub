import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { logAudit } from "@/lib/audit";

// Autenticação por e-mail/senha, sessão em JWT (sem estado sensível no cookie
// além do id/role do usuário). Senhas nunca são armazenadas em texto plano —
// apenas o hash bcrypt (custo 12).
export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt", maxAge: 8 * 60 * 60 }, // sessão expira em 8h
  pages: { signIn: "/login" },
  providers: [
    CredentialsProvider({
      name: "Credenciais",
      credentials: {
        email: { label: "E-mail", type: "email" },
        password: { label: "Senha", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = await prisma.user.findUnique({ where: { email: credentials.email } });
        const ip = (req?.headers as Record<string, string> | undefined)?.["x-forwarded-for"] ?? null;

        if (!user || !user.active) {
          await logAudit({ action: "LOGIN_FAILED", metadata: { email: credentials.email }, ipAddress: ip });
          return null;
        }

        const valid = await bcrypt.compare(credentials.password, user.passwordHash);
        if (!valid) {
          await logAudit({ action: "LOGIN_FAILED", userId: user.id, ipAddress: ip });
          return null;
        }

        await logAudit({ action: "LOGIN", userId: user.id, ipAddress: ip });
        return { id: user.id, name: user.name, email: user.email, role: user.role } as unknown as import("next-auth").User;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = (user as unknown as { id: string; role: string }).id;
        token.role = (user as unknown as { id: string; role: string }).role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as { id?: string; role?: string }).id = token.id as string;
        (session.user as { id?: string; role?: string }).role = token.role as string;
      }
      return session;
    },
  },
};

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}
