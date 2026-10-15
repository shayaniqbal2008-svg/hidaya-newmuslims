// Encrypts reflections and AI chat messages before they're stored (Spec §6.4: "stored encrypted").
// AES-256-GCM with a per-convert key derived from APP_ENCRYPTION_KEY, so a database leak alone
// reveals nothing. Losing APP_ENCRYPTION_KEY makes stored text unreadable: back it up safely.
import "server-only";
import { createCipheriv, createDecipheriv, hkdfSync, randomBytes } from "node:crypto";
import { requireServerEnv } from "./env";

function keyFor(convertId: string): Buffer {
  const master = Buffer.from(requireServerEnv("APP_ENCRYPTION_KEY"), "base64");
  if (master.length !== 32) throw new Error("APP_ENCRYPTION_KEY must be 32 bytes, base64-encoded");
  return Buffer.from(hkdfSync("sha256", master, Buffer.from(convertId), "nmp-private-text-v1", 32));
}

export function encrypt(convertId: string, plain: string): string {
  const iv = randomBytes(12);
  const c = createCipheriv("aes-256-gcm", keyFor(convertId), iv);
  const body = Buffer.concat([c.update(plain, "utf8"), c.final()]);
  return ["v1", iv.toString("base64"), body.toString("base64"), c.getAuthTag().toString("base64")].join(":");
}

export function decrypt(convertId: string, stored: string): string {
  const [v, iv, body, tag] = stored.split(":");
  if (v !== "v1") throw new Error("unknown encryption version");
  const d = createDecipheriv("aes-256-gcm", keyFor(convertId), Buffer.from(iv, "base64"));
  d.setAuthTag(Buffer.from(tag, "base64"));
  return Buffer.concat([d.update(Buffer.from(body, "base64")), d.final()]).toString("utf8");
}
