import { describe, expect, it } from "vitest";
import { trackProgress, trackSubtitle } from "./tracks";

describe("trackProgress", () => {
  it("starts at lesson 1 with nothing done", () => {
    expect(trackProgress("alphabet", [])).toEqual({ done: 0, total: 12, next: "alphabet-01" });
  });

  it("points at the first unfinished lesson, even after skipping ahead", () => {
    expect(trackProgress("alphabet", ["alphabet-01", "alphabet-03", "day-01"])).toEqual({ done: 2, total: 12, next: "alphabet-02" });
  });

  it("has no next lesson once all 12 are done", () => {
    const all = Array.from({ length: 12 }, (_, i) => `alphabet-${String(i + 1).padStart(2, "0")}`);
    expect(trackProgress("alphabet", all)).toEqual({ done: 12, total: 12, next: null });
  });

  it("works for the seerah with its compiled episode count", () => {
    const counts = { alphabet: 12, seerah: 3 };
    expect(trackProgress("seerah", [], counts)).toEqual({ done: 0, total: 3, next: "seerah-01" });
    expect(trackProgress("seerah", ["seerah-01", "alphabet-02"], counts)).toEqual({ done: 1, total: 3, next: "seerah-02" });
    expect(trackProgress("seerah", ["seerah-01", "seerah-02", "seerah-03"], counts)).toEqual({ done: 3, total: 3, next: null });
  });

  it("has nothing to show for a track with no episodes yet", () => {
    expect(trackProgress("seerah", [], { alphabet: 12, seerah: 0 })).toEqual({ done: 0, total: 0, next: null });
  });
});

describe("trackSubtitle (the Explore more card line)", () => {
  const intro = (n: number) => `${n} short episodes on the life of the Prophet ﷺ, from Makkah to Madinah`;
  it("introduces the track before anything is done", () => {
    expect(trackSubtitle({ done: 0, total: 40, next: "seerah-01" }, intro)).toBe(
      "40 short episodes on the life of the Prophet ﷺ, from Makkah to Madinah",
    );
  });
  it("counts progress part way through", () => {
    expect(trackSubtitle({ done: 3, total: 40, next: "seerah-02" }, intro)).toBe("3 of 40 done");
  });
  it("says so once all are done", () => {
    expect(trackSubtitle({ done: 40, total: 40, next: null }, intro)).toBe("All 40 done. Read them again anytime.");
  });
});
