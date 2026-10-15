import { describe, expect, it } from "vitest";
import { parseInvite } from "./invite";

describe("parseInvite", () => {
  it("takes the code on its own", () => expect(parseInvite("a1b2c3d4e5f6")).toBe("a1b2c3d4e5f6"));
  it("takes the whole link", () =>
    expect(parseInvite("https://your-app.vercel.app/join/a1b2c3d4e5f6")).toBe("a1b2c3d4e5f6"));
  it("takes a link without https, with a trailing slash or query", () => {
    expect(parseInvite("your-app.vercel.app/join/a1b2c3d4e5f6/")).toBe("a1b2c3d4e5f6");
    expect(parseInvite("/join/a1b2c3d4e5f6?x=1#y")).toBe("a1b2c3d4e5f6");
  });
  it("ignores capitals and spaces a phone adds", () => expect(parseInvite("  A1B2C3D4E5F6 ")).toBe("a1b2c3d4e5f6"));
  it("rejects anything that isn't a code", () => {
    expect(parseInvite("")).toBeNull();
    expect(parseInvite(null)).toBeNull();
    expect(parseInvite("https://your-app.vercel.app/")).toBeNull();
    expect(parseInvite("b9e4 8f3a")).toBeNull();
    expect(parseInvite("'; drop table invites")).toBeNull();
  });
});
