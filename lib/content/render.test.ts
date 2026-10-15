import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { renderLesson, resolveTags, type RenderContext } from "./render";
import type { Lesson } from "./types";

const dir = join(__dirname, "../../content/lessons");
const lessons: Lesson[] = readdirSync(dir).map((f) => JSON.parse(readFileSync(join(dir, f), "utf8")));
const load = (id: string) => lessons.find((l) => l.id === id)!;

const hanafiAdult: RenderContext = {
  masjidName: "Demo Masjid",
  madhab: "hanafi",
  jumuahTime: "1:30 pm",
  mentorName: "Br. Moneeb",
  firstName: "Keisha",
  isMinor: false,
  gender: "female",
};
const neutralTeen: RenderContext = { ...hanafiAdult, madhab: null, mentorName: null, isMinor: true };

describe("renderLesson over every lesson", () => {
  for (const ctx of [hanafiAdult, neutralTeen]) {
    it(`never leaks scholar tags, raw placeholders or the AI context (${ctx.madhab ?? "default"})`, () => {
      for (const l of lessons) {
        const out = JSON.stringify(renderLesson(l, ctx));
        expect(out, l.id).not.toMatch(/\[SCHOLAR/);
        expect(out, l.id).not.toMatch(/\{\{/);
        expect(out, l.id).not.toContain("Likely questions");
        expect(renderLesson(l, ctx).screens.every((s) => s.type !== "learn" || s.text.trim().length > 0), l.id).toBe(true);
      }
    });
  }
});

describe("variants", () => {
  it("shows the Hanafi text at a Hanafi masjid, the default elsewhere, and only the reader's own gender", () => {
    type P = { type: string; moves: { text: string }[] };
    const qiyam = (ctx: RenderContext) =>
      (renderLesson(load("day-03"), ctx).screens.find((s) => s.type === "prayer") as unknown as P).moves[2].text;
    const man = qiyam({ ...hanafiAdult, gender: "male" });
    const woman = qiyam({ ...hanafiAdult, gender: "female" });
    expect(man).toContain("just below your navel");
    expect(man).not.toContain("chest");
    expect(woman).toContain("on your chest");
    expect(woman).not.toContain("navel");
    expect(qiyam(neutralTeen)).toContain("the way Demo Masjid teaches");
  });

  it("never shows covering rules as a men-vs-women comparison (Checkpoint 4, C1)", () => {
    for (const gender of ["male", "female"] as const) {
      const out = JSON.stringify(renderLesson(load("day-03"), { ...hanafiAdult, gender }));
      expect(out).not.toMatch(/For (men|women):/);
      expect(out).not.toContain(gender === "male" ? "hair included" : "navel to your knees");
    }
  });

  it("adds teen lines only for minors", () => {
    const withTeen = lessons.find((l) => l.screens.some((s) => s.type === "learn" && s.variant?.teen))!;
    const n = withTeen.screens.findIndex((s) => s.type === "learn" && s.variant?.teen);
    const teenLine = (withTeen.screens[n] as { variant: { teen: string } }).variant.teen.slice(0, 30);
    // Gender unset, so a teen line that applies to one gender still shows (labelled).
    const adult = renderLesson(withTeen, { ...hanafiAdult, gender: null }).screens[n];
    const teen = renderLesson(withTeen, { ...hanafiAdult, gender: null, isMinor: true }).screens[n];
    expect(adult.type === "learn" && adult.text).not.toContain(teenLine.replace(/\{\{.*/, ""));
    expect(teen.type === "learn" && teen.text.length).toBeGreaterThan(adult.type === "learn" ? adult.text.length : 0);
  });

  it("fills the mentor fallback when none is assigned", () => {
    const text = JSON.stringify(renderLesson(load("day-05"), neutralTeen));
    expect(text).toContain("your mentor or imam");
    expect(text).not.toContain("Br. Moneeb");
  });
});

describe("gender and teen tags", () => {
  const t = "Cover up: {men}navel to knees{/men}{women}all but face and hands{/women}. {teen}Ask a parent.{/teen}";
  it("shows a man only the men's line", () => {
    const out = resolveTags(t, { gender: "male", isMinor: false });
    expect(out).toBe("Cover up: navel to knees.");
    expect(out).not.toContain("face");
  });
  it("shows a woman only the women's line", () => {
    const out = resolveTags(t, { gender: "female", isMinor: false });
    expect(out).toBe("Cover up: all but face and hands.");
    expect(out).not.toContain("knees");
  });
  it("labels both when gender is unknown, and shows teen lines to minors", () => {
    const out = resolveTags(t, { gender: null, isMinor: true });
    expect(out).toContain("For men: navel to knees");
    expect(out).toContain("For women: all but face and hands");
    expect(out).toContain("Ask a parent.");
  });
  it("drops list items that belonged only to the other gender, and never ships school overrides", () => {
    const lesson = {
      ...load("day-01"),
      screens: [
        {
          n: 1,
          type: "steps",
          title: "x",
          steps: [{ text: "Both" }, { text: "{men}Men only{/men}" }],
          variants: { hanafi: { title: "Hanafi title" }, shafii: { title: "Shafii title" } },
        },
      ],
    } as unknown as Lesson;
    const out = renderLesson(lesson, { ...hanafiAdult, gender: "female" });
    const s = out.screens[0] as { title: string; steps: { text: string }[] };
    expect(s.steps.map((x) => x.text)).toEqual(["Both"]);
    expect(s.title).toBe("Hanafi title");
    expect(JSON.stringify(out)).not.toContain("Shafii");
    expect(JSON.stringify(out)).not.toContain("variants");
  });
  it("never sends the other-schools note, and moves the closing line to the finish screen", () => {
    const out = renderLesson(load("day-01"), hanafiAdult);
    expect(out).not.toHaveProperty("madhabNote");
    expect(out.screens.some((s) => s.type === "closing")).toBe(false);
    expect(out.closing).toBeTruthy();
  });
});

describe("audience screens", () => {
  it("hides a women-only screen from men, shows it to women and to unknown gender", () => {
    const lesson = {
      ...load("day-01"),
      screens: [
        { n: 1, type: "learn", text: "Everyone" },
        { n: 2, type: "learn", text: "Women only", audience: "women" },
      ],
    } as unknown as Lesson;
    const texts = (g: RenderContext["gender"]) =>
      renderLesson(lesson, { ...hanafiAdult, gender: g }).screens.map((s) => (s as { text: string }).text);
    expect(texts("male")).toEqual(["Everyone"]);
    expect(texts("female")).toEqual(["Everyone", "Women only"]);
    expect(texts(null)).toEqual(["Everyone", "Women only"]);
  });
});

describe("school-only screens", () => {
  it("shows a Hanafi-only screen only at a Hanafi masjid", () => {
    const lesson = {
      ...load("day-01"),
      screens: [
        { n: 1, type: "learn", text: "Everyone" },
        { n: 2, type: "learn", text: "Hanafi only", school: "hanafi" },
      ],
    } as unknown as Lesson;
    const count = (madhab: RenderContext["madhab"]) => renderLesson(lesson, { ...hanafiAdult, madhab }).screens.length;
    expect(count("hanafi")).toBe(2);
    expect(count("shafii")).toBe(1);
    expect(count(null)).toBe(1);
  });
});
