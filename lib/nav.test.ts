import { describe, expect, it } from "vitest";
import { navHidden } from "./nav";

describe("navHidden", () => {
  it("hides the tab bar wherever the lesson player runs, so it never covers Continue", () => {
    for (const p of ["/lesson/day-01", "/practice/session", "/practice/drill/words", "/practice/drill/surahs"]) expect(navHidden(p), p).toBe(true);
  });
  it("shows it on the tabs themselves", () => {
    for (const p of ["/today", "/practice", "/guide", "/settings"]) expect(navHidden(p), p).toBe(false);
  });
});
