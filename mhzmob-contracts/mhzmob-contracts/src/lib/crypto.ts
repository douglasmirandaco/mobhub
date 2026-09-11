import crypto from "crypto";

// Criptografia simétrica (AES-256-GCM) dos dados preenchidos de cada contrato,
// para atender ao princípio de segurança da LGPD (art. 46) — dados pessoais e
// bancários nunca ficam em texto plano no banco.
//
// A chave vem de uma variável de ambiente (ENCRYPTION_KEY), com 32 bytes em base64.
// Gere uma com: `openssl rand -base64 32`
// NUNCA reutilize a chave de exemplo do .env.example em produção.

const ALGORITHM = "aes-256-gcm";

function getKey(): Buffer {
  const b64 = process.env.ENCRYPTION_KEY;
  if (!b64) {
    throw new Error(
      "ENCRYPTION_KEY não configurada. Gere uma com `openssl rand -base64 32` e defina no .env."
    );
  }
  const key = Buffer.from(b64, "base64");
  if (key.length !== 32) {
    throw new Error("ENCRYPTION_KEY inválida: deve decodificar para exatamente 32 bytes.");
  }
  return key;
}

/** Cifra um objeto JSON, retornando uma string única (iv + tag + ciphertext em base64). */
export function encryptJson(data: unknown): string {
  const key = getKey();
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv(ALGORITHM, key, iv);
  const plaintext = Buffer.from(JSON.stringify(data), "utf8");
  const ciphertext = Buffer.concat([cipher.update(plaintext), cipher.final()]);
  const authTag = cipher.getAuthTag();
  return Buffer.concat([iv, authTag, ciphertext]).toString("base64");
}

/** Decifra uma string gerada por encryptJson de volta para o objeto original. */
export function decryptJson<T = unknown>(payload: string): T {
  const key = getKey();
  const raw = Buffer.from(payload, "base64");
  const iv = raw.subarray(0, 12);
  const authTag = raw.subarray(12, 28);
  const ciphertext = raw.subarray(28);
  const decipher = crypto.createDecipheriv(ALGORITHM, key, iv);
  decipher.setAuthTag(authTag);
  const plaintext = Buffer.concat([decipher.update(ciphertext), decipher.final()]);
  return JSON.parse(plaintext.toString("utf8"));
}

/** Mascara um valor sensível para exibição em listas/logs (ex: CPF, telefone, conta bancária). */
export function maskSensitive(value: string): string {
  if (!value) return value;
  const visible = 2;
  if (value.length <= visible * 2) return "*".repeat(value.length);
  return value.slice(0, visible) + "*".repeat(value.length - visible * 2) + value.slice(-visible);
}
