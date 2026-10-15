import { describe, expect, it } from "vitest";
import { canOpen, isTrackId, pathStarted, TRACKS } from "./access";
import { TRACK_COUNTS } from "./content/tracks.generated";

const fresh = { completed: {}, isDemo: false, schedule: { main: "day-01", sideCards: [] as string[] } };

describe("canOpen", () => {
  it("opens every one of the 90 days, even on a fresh account", () => {
    expect(canOpen("day-40", fresh)).toBe(true);
    expect(canOpen("day-90", fresh)).toBe(true);
  });

  it("rejects days outside 1–90", () => {
    expect(canOpen("day-91", fresh)).toBe(false);
    expect(canOpen("day-00", fresh)).toBe(false);
  });

  it("opens a module only when it's due, a side card, or already done", () => {
    expect(canOpen("ramadan-1", fresh)).toBe(false);
    expect(canOpen("ramadan-1", { ...fresh, schedule: { main: "ramadan-1", sideCards: [] } })).toBe(true);
    expect(canOpen("eid-fitr", { ...fresh, schedule: { main: "day-01", sideCards: ["eid-fitr"] } })).toBe(true);
    expect(canOpen("hajj-1", { ...fresh, completed: { "hajj-1": "2026-10-01" } })).toBe(true);
  });

  it("opens the 12 alphabet lessons for everyone, any time", () => {
    expect(canOpen("alphabet-01", fresh)).toBe(true);
    expect(canOpen("alphabet-12", fresh)).toBe(true);
    expect(canOpen("alphabet-13", fresh)).toBe(false);
    expect(canOpen("alphabet-00", fresh)).toBe(false);
  });

  it("opens seerah-01..N for everyone, where N is how many episodes are compiled", () => {
    const counts = { alphabet: 12, seerah: 3 };
    expect(canOpen("seerah-01", fresh, counts)).toBe(true);
    expect(canOpen("seerah-03", fresh, counts)).toBe(true);
    expect(canOpen("seerah-04", fresh, counts)).toBe(false);
    expect(canOpen("seerah-00", fresh, counts)).toBe(false);
    expect(canOpen("seerah-01", fresh, { alphabet: 12, seerah: 0 })).toBe(false);
  });

  it("takes the track counts from the compiled content by default", () => {
    expect(TRACKS).toBe(TRACK_COUNTS);
    const n = TRACKS.seerah ?? 0;
    expect(canOpen(`seerah-${String(n + 1).padStart(2, "0")}`, fresh)).toBe(false);
    if (n > 0) expect(canOpen(`seerah-${String(n).padStart(2, "0")}`, fresh)).toBe(true);
  });

  it("tells track lessons apart from days and modules", () => {
    expect(isTrackId("alphabet-03")).toBe(true);
    expect(isTrackId("seerah-12")).toBe(true);
    expect(isTrackId("day-03")).toBe(false);
    expect(isTrackId("ramadan-1")).toBe(false);
  });

  it("opens everything for the demo", () => {
    expect(canOpen("ramadan-1", { ...fresh, isDemo: true })).toBe(true);
  });
});

describe("pathStarted", () => {
  it("ignores optional track lessons, so an alphabet-first convert still gets the Day 1 hints", () => {
    expect(pathStarted({ "alphabet-01": "2026-10-08" })).toBe(false);
    expect(pathStarted({ "day-01": "2026-10-08" })).toBe(true);
  });
});
