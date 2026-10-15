import { describe, expect, it } from "vitest";
import { topUp } from "./top-up";

const q = (lesson_id: string, check_index: number) => ({ lesson_id, check_index });
const key = (x: { lesson_id: string; check_index: number }) => `${x.lesson_id}:${x.check_index}`;

describe("topUp (a full practice session has 5+ questions)", () => {
  const pool = ["day-01", "day-02", "day-03"].flatMap((l) => [0, 1, 2].map((i) => q(l, i)));

  it("adds questions from finished lessons until there are 5, never repeating one", () => {
    const out = topUp([q("day-01", 0), q("day-02", 1)], pool, 5, key, "2026-10-09");
    expect(out).toHaveLength(5);
    expect(out.slice(0, 2)).toEqual([q("day-01", 0), q("day-02", 1)]);
    expect(new Set(out.map(key)).size).toBe(5);
  });
  it("is stable for the same seed", () => {
    expect(topUp([], pool, 5, key, "a")).toEqual(topUp([], pool, 5, key, "a"));
  });
  it("leaves a big enough session alone, and can't invent questions", () => {
    const six = pool.slice(0, 6);
    expect(topUp(six, pool, 5, key, "x")).toEqual(six);
    expect(topUp([], pool.slice(0, 2), 5, key, "x")).toHaveLength(2);
  });
});
