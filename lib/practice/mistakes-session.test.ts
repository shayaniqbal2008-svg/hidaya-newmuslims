import { describe, expect, it } from "vitest";
import type { RenderContext } from "../content/render";
import { buildMistakeSession } from "./mistakes-session";

const woman: RenderContext = {
  masjidName: "Demo Masjid",
  madhab: "hanafi",
  jumuahTime: "1:30 pm",
  mentorName: null,
  firstName: "Keisha",
  isMinor: false,
  gender: "female",
};

describe("buildMistakeSession", () => {
  it("returns the stored lesson screen for a screen ref", () => {
    const s = buildMistakeSession([{ lesson_id: "day-03", ref: "screen:10" }], woman);
    expect(s.screens).toHaveLength(1);
    expect(s.screens[0]).toMatchObject({ lessonId: "day-03", screen: { n: 10, type: "scenario" } });
    expect(s.screens[0].lessonTitle).toBeTruthy();
    expect(s.lessonIds).toEqual(["day-03"]);
  });

  it("returns a Check item for a check ref", () => {
    const s = buildMistakeSession([{ lesson_id: "day-03", ref: "check:0" }], woman);
    expect(s.reviews).toHaveLength(1);
    expect(s.reviews[0]).toMatchObject({ lessonId: "day-03", checkIndex: 0 });
  });

  it("skips anything that no longer renders", () => {
    const s = buildMistakeSession(
      [
        { lesson_id: "day-38", ref: "screen:12" }, // men-only screen, convert is a woman
        { lesson_id: "day-03", ref: "check:99" },
        { lesson_id: "day-03", ref: "screen:2" }, // a learn screen, not a question
        { lesson_id: "no-such-lesson", ref: "screen:1" },
      ],
      woman,
    );
    expect(s.screens).toHaveLength(0);
    expect(s.reviews).toHaveLength(0);
    expect(s.lessonIds).toEqual([]);
  });

  it("keeps the given order and honours the limit", () => {
    const rows = [
      { lesson_id: "day-03", ref: "screen:15" },
      { lesson_id: "day-03", ref: "screen:10" },
      { lesson_id: "day-03", ref: "check:1" },
    ];
    const s = buildMistakeSession(rows, woman, 2);
    expect(s.screens.map((x) => x.screen.n)).toEqual([15, 10]);
    expect(s.reviews).toHaveLength(0);
    expect(buildMistakeSession(rows, woman, Infinity).screens.length + buildMistakeSession(rows, woman, Infinity).reviews.length).toBe(3);
  });
});
