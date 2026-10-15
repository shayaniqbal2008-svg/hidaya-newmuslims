import { beforeAll, describe, expect, it, vi } from "vitest";
vi.mock("server-only", () => ({}));

beforeAll(() => {
  process.env.APP_ENCRYPTION_KEY = Buffer.alloc(32, 7).toString("base64");
});

describe("private text encryption", () => {
  it("round-trips and never stores the plain text", async () => {
    const { encrypt, decrypt } = await import("./crypto");
    const s = encrypt("convert-a", "I felt at peace in sujud today");
    expect(s).not.toContain("peace");
    expect(decrypt("convert-a", s)).toBe("I felt at peace in sujud today");
  });
  it("another convert's key can't read it", async () => {
    const { encrypt, decrypt } = await import("./crypto");
    expect(() => decrypt("convert-b", encrypt("convert-a", "secret"))).toThrow();
  });
  it("detects tampering", async () => {
    const { encrypt, decrypt } = await import("./crypto");
    const parts = encrypt("convert-a", "secret").split(":");
    parts[2] = Buffer.from("xxxxxx").toString("base64");
    expect(() => decrypt("convert-a", parts.join(":"))).toThrow();
  });
});
