import { describe, expect, it } from "vitest";
import { pickQuizItems } from "./quiz";
import type { RenderContext } from "./render";

const ctx: RenderContext = {
  masjidName: "Demo Masjid",
  madhab: "hanafi",
  jumuahTime: null,
  mentorName: null,
  firstName: "Keisha",
  isMinor: false,
  gender: "female",
};

describe("welcome-back quiz", () => {
  const completed = ["day-01", "day-02", "day-03", "day-04", "day-05", "day-06", "day-07", "day-08", "day-09", "day-10"];
  it("only asks about lessons the convert has finished, one per lesson", () => {
    const items = pickQuizItems({ completed, count: 6, seed: "2026-10-07", ctx });
    expect(items).toHaveLength(6);
    expect(items.every((i) => completed.includes(i.lessonId))).toBe(true);
    expect(new Set(items.map((i) => i.lessonId)).size).toBe(6);
  });
  it("starts with the preferred lessons when they're done", () => {
    const items = pickQuizItems({ completed, prefer: ["day-03", "day-02", "day-40"], count: 4, seed: "x", ctx });
    expect(items.slice(0, 2).map((i) => i.lessonId)).toEqual(["day-03", "day-02"]);
  });
  it("never shows the other gender's text or raw tags", () => {
    const items = pickQuizItems({ completed, count: 10, seed: "y", ctx });
    expect(JSON.stringify(items)).not.toMatch(/\{\/?(men|women|teen)\}|\{\{|\[SCHOLAR/);
  });
  it("never asks about a lesson the convert hasn't finished, even with few finished", () => {
    for (const seed of ["a", "b", "c", "d"]) {
      const items = pickQuizItems({ completed: ["day-01", "day-02", "alphabet-01"], prefer: ["day-05"], count: 6, seed, ctx });
      expect(items.length).toBeGreaterThan(0);
      for (const i of items) expect(["day-01", "day-02"], i.lessonId).toContain(i.lessonId);
    }
  });
  it("falls back to the first week if nothing is finished", () => {
    expect(pickQuizItems({ completed: [], count: 3, seed: "z", ctx }).every((i) => /^day-0[1-7]$/.test(i.lessonId))).toBe(true);
  });
});
