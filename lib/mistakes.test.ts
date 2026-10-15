import { describe, expect, it } from "vitest";
import { nextMistake } from "./mistakes";

const now = new Date("2026-10-08T12:00:00Z");
const open = { wrong_count: 1, right_streak: 0, cleared_at: null };

describe("nextMistake", () => {
  it("opens a mistake on a first wrong answer", () => {
    expect(nextMistake(null, false, now)).toEqual({ wrong_count: 1, right_streak: 0, cleared_at: null });
  });

  it("writes nothing for a right answer with no open mistake", () => {
    expect(nextMistake(null, true, now)).toBeNull();
    expect(nextMistake({ wrong_count: 2, right_streak: 2, cleared_at: now.toISOString() }, true, now)).toBeNull();
  });

  it("clears after two right in a row", () => {
    const one = nextMistake(open, true, now);
    expect(one).toEqual({ wrong_count: 1, right_streak: 1, cleared_at: null });
    expect(nextMistake(one, true, now)).toEqual({ wrong_count: 1, right_streak: 2, cleared_at: now.toISOString() });
  });

  it("a wrong answer resets the run", () => {
    expect(nextMistake({ wrong_count: 1, right_streak: 1, cleared_at: null }, false, now)).toEqual({
      wrong_count: 2,
      right_streak: 0,
      cleared_at: null,
    });
  });

  it("reopens a cleared mistake answered wrong again", () => {
    expect(nextMistake({ wrong_count: 1, right_streak: 2, cleared_at: now.toISOString() }, false, now)).toEqual({
      wrong_count: 2,
      right_streak: 0,
      cleared_at: null,
    });
  });
});
