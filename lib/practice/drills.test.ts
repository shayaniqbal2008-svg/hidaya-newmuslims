import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { isArabicOnly } from "../content/alphabet";
import { buildDrill, drillAvailable, taughtTerms } from "./drills";

const citations = JSON.parse(readFileSync(join(__dirname, "../../content/citations.json"), "utf8")) as Record<string, { arabic: string }>;
const days = (n: number) => Array.from({ length: n }, (_, i) => `day-${String(i + 1).padStart(2, "0")}`);

describe("words", () => {
  it("is locked with a hint before anything is finished", () => {
    expect(drillAvailable("words", [])).toEqual({ count: 0, unlockHint: "Finish Day 1 to unlock" });
  });

  it("only uses terms taught in finished lessons", () => {
    const terms = taughtTerms(days(20));
    expect(terms.length).toBeGreaterThan(5);
    for (const t of terms) expect(Number(/^Day (\d+)/.exec(t.firstTaught)?.[1]) <= 20, t.firstTaught).toBe(true);
  });

  it("builds a flip-card screen then a match round of 5, the same for the same seed", () => {
    const a = buildDrill("words", days(20), "2026-10-08");
    expect(a.map((s) => s.type)).toEqual(["reveal", "match"]);
    expect(a[0].type === "reveal" && a[0].cards).toHaveLength(5);
    expect(a[1].type === "match" && a[1].pairs).toHaveLength(5);
    expect(buildDrill("words", days(20), "2026-10-08")).toEqual(a);
  });
});

describe("words drill renders Arabic as Arabic", () => {
  const ARABIC = /[\u0600-\u06ff]/;
  it("puts each word's Arabic in its own Arabic field, never mixed into the UI-font text", () => {
    for (const n of [5, 20, 60, 90]) {
      for (const s of buildDrill("words", days(n), `seed-${n}`)) {
        if (s.type === "reveal") {
          for (const c of s.cards) {
            expect(c.arabic && isArabicOnly(c.arabic), c.front).toBe(true);
            expect(ARABIC.test(c.back), c.back).toBe(false);
            expect(ARABIC.test(c.front), c.front).toBe(false);
          }
        }
        if (s.type === "match") for (const p of s.pairs) for (const t of [p.left, p.right]) expect(!ARABIC.test(t) || isArabicOnly(t), t).toBe(true);
      }
    }
  });
});

describe("prayer phrases", () => {
  it("needs Day 8", () => {
    expect(drillAvailable("phrases", days(7))).toEqual({ count: 0, unlockHint: "Finish Day 8 to unlock" });
    expect(drillAvailable("phrases", days(10)).count).toBe(3);
  });

  it("shows each phrase, asks its meaning, then orders one", () => {
    const s = buildDrill("phrases", days(30), "x");
    expect(s.filter((x) => x.type === "phrase")).toHaveLength(4);
    expect(s.filter((x) => x.type === "choice")).toHaveLength(4);
    expect(s.at(-1)?.type).toBe("tap_words");
    for (const c of s) if (c.type === "choice") expect(c.options.filter((o) => o.correct)).toHaveLength(1);
  });
});

describe("prayer phrases stay small enough for a phone", () => {
  it("never asks to order a long phrase (al-Fatiha, the tashahhud) or one with a gap", () => {
    for (let i = 0; i < 40; i++) {
      for (const s of buildDrill("phrases", days(30), `seed-${i}`)) {
        if (s.type !== "tap_words") continue;
        expect(s.answer.split(/\s+/).length, s.answer).toBeLessThanOrEqual(8);
        expect(s.answer).not.toContain("…");
      }
    }
  });

  it("only asks a meaning question when there are three meanings to choose from", () => {
    for (const n of [8, 9, 10, 30]) {
      for (const s of buildDrill("phrases", days(n), "x")) if (s.type === "choice") expect(s.options, `Day ${n}`).toHaveLength(3);
    }
    expect(buildDrill("phrases", days(8), "x").some((s) => s.type === "choice")).toBe(false);
  });
});

describe("du'as and short surahs", () => {
  it("opens al-Fatiha after Day 16 and al-Ikhlas after Day 18", () => {
    expect(drillAvailable("surahs", days(15))).toEqual({ count: 0, unlockHint: "Finish Day 16 to unlock" });
    expect(drillAvailable("surahs", days(16)).count).toBe(1);
    expect(drillAvailable("surahs", days(18)).count).toBe(2);
  });

  it("uses only the source Arabic, right to left", () => {
    const s = buildDrill("surahs", days(18), "seed");
    const reveals = s.filter((x) => x.type === "reveal");
    const fills = s.filter((x) => x.type === "fill");
    expect(reveals).toHaveLength(2);
    expect(fills).toHaveLength(4);
    const verses = Object.entries(citations).filter(([k]) => /^Q (1|112):\d+$/.test(k)).map(([, c]) => c.arabic.trim().replace(/\s+/g, " "));
    for (const f of fills) {
      if (f.type !== "fill") continue;
      expect(f.dir).toBe("rtl");
      expect(f.options.filter((o) => o.correct)).toHaveLength(1);
      const right = f.options.find((o) => o.correct)!.text;
      const sentence = `${f.before} ${right} ${f.after ?? ""}`.trim();
      expect(verses).toContain(sentence);
      for (const o of f.options) expect(verses.some((v) => v.split(/\s+/).includes(o.text))).toBe(true);
    }
    for (const r of reveals) if (r.type === "reveal") for (const c of r.cards) expect(c.rtl).toBe(true);
  });
});
