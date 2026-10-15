import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ALPHABET, isArabicOnly, letterForms, letterInfo } from "./alphabet";
import type { Lesson } from "./types";

const PUBLIC = join(__dirname, "../../public");
const NON_JOINERS = ["ا", "د", "ذ", "ر", "ز", "و"];

describe("the alphabet table", () => {
  it("has the 28 letters in standard order, then hamza", () => {
    expect(ALPHABET.map((l) => l.char).join("")).toBe("ابتثجحخدذرزسشصضطظعغفقكلمنهويء");
  });

  it("gives every letter a name, a sound and a plain-English hint", () => {
    for (const l of ALPHABET) {
      expect(l.name, l.char).toBeTruthy();
      expect(l.translit, l.char).toBeTruthy();
      expect(l.hint.length, l.char).toBeGreaterThan(8);
    }
  });

  it("finds a letter by its character", () => {
    expect(letterInfo("ب")?.name).toBe("baa");
    expect(letterInfo("x")).toBeUndefined();
  });
});

describe("letterForms", () => {
  it("shows all four shapes for a letter that joins on both sides", () => {
    const f = letterForms(letterInfo("ب")!);
    expect(Object.keys(f).sort()).toEqual(["final", "initial", "isolated", "medial"]);
    // A visible joining line (tatweel) shows which side the letter connects on.
    expect(f.initial).toBe("ب\u0640");
    expect(f.medial).toBe("\u0640ب\u0640");
    expect(f.final).toBe("\u0640ب");
  });

  it("never invents a start or middle shape for the six letters that don't join forward", () => {
    for (const c of NON_JOINERS) {
      const f = letterForms(letterInfo(c)!);
      expect(Object.keys(f).sort(), c).toEqual(["final", "isolated"]);
    }
  });

  it("shows standalone hamza on its own only", () => {
    expect(Object.keys(letterForms(letterInfo("ء")!))).toEqual(["isolated"]);
  });
});

describe("letter audio", () => {
  const attributions = readFileSync(join(PUBLIC, "audio/alphabet/ATTRIBUTIONS.md"), "utf8");

  it("has a clip for each of the 28 letters, and every clip is credited", () => {
    const withAudio = ALPHABET.filter((l) => l.audio);
    expect(withAudio).toHaveLength(28);
    for (const l of withAudio) {
      expect(l.audio, l.char).toMatch(/^\/audio\/alphabet\/\d{2}-[a-z]+\.wav$/);
      expect(existsSync(join(PUBLIC, l.audio!)), l.audio!).toBe(true);
      expect(attributions, l.audio!).toContain(l.audio!.split("/").pop()!);
    }
  });

  it("leaves hamza without audio until our own recording exists", () => {
    expect(letterInfo("ء")?.audio).toBeNull();
  });
});

describe("isArabicOnly", () => {
  it("spots options that are only Arabic, so they get the Arabic font", () => {
    expect(isArabicOnly("ب")).toBe(true);
    expect(isArabicOnly(" بِسْمِ اللَّهِ ")).toBe(true);
    expect(isArabicOnly("baa")).toBe(false);
    expect(isArabicOnly("ب (baa)")).toBe(false);
    expect(isArabicOnly("")).toBe(false);
  });
});

describe("compiled alphabet lessons", () => {
  const dir = join(__dirname, "../../content/lessons");
  const lessons: Lesson[] = readdirSync(dir)
    .filter((f) => f.startsWith("alphabet-"))
    .map((f) => JSON.parse(readFileSync(join(dir, f), "utf8")));

  it("only play clips that exist", () => {
    for (const l of lessons)
      for (const s of l.screens)
        if (s.type === "choice" && s.audio) expect(existsSync(join(PUBLIC, s.audio)), `${l.id} screen ${s.n}`).toBe(true);
  });
});

describe("alphabet-12 (first verses)", () => {
  const l: Lesson = JSON.parse(readFileSync(join(__dirname, "../../content/lessons/alphabet-12.json"), "utf8"));
  it("explains every Arabic mark it uses that lessons 1–11 didn't teach", () => {
    const taught = new Set([...ALPHABET.map((x) => x.char), "َ", "ِ", "ُ", "ْ", "ّ", "‍", " ", "+", "="]);
    const arabic = JSON.stringify(l.screens).match(/[؀-ۿݐ-ݿࢠ-ࣿ]/g) ?? [];
    const untaught = new Set(arabic.filter((c) => !taught.has(c)));
    const intro = l.screens.find((s) => s.type === "reveal" && s.title === "New marks");
    expect(intro, "a reveal titled 'New marks'").toBeTruthy();
    const explained = JSON.stringify(intro);
    for (const c of untaught) expect(explained, `U+${c.codePointAt(0)!.toString(16)}`).toContain(c);
    const i = l.screens.indexOf(intro!);
    const firstUse = l.screens.findIndex((s) => [...untaught].some((c) => s !== intro && JSON.stringify(s).includes(c)));
    expect(i).toBeLessThan(firstUse);
  });
});
