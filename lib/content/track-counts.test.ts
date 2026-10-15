import { describe, expect, it } from "vitest";
import { trackCounts } from "./track-counts";

const l = (track: string, order: number) => ({ kind: "track" as const, track, order });

describe("trackCounts", () => {
  it("counts each track's lessons and lists every known track, even an empty one", () => {
    const r = trackCounts([l("alphabet", 1), l("alphabet", 2), { kind: "day" as const, track: null, order: null }]);
    expect(r.counts).toEqual({ alphabet: 2, seerah: 0 });
    expect(r.gaps).toEqual([]);
  });

  it("only counts the unbroken run from 01, so the app never links to a missing episode", () => {
    const r = trackCounts([l("seerah", 1), l("seerah", 3), l("seerah", 4), l("alphabet", 1)]);
    expect(r.counts.seerah).toBe(1);
    expect(r.gaps).toEqual(["seerah-02 is missing (seerah-03, seerah-04 compiled but hidden until it exists)"]);
  });

  it("reports a track that doesn't start at 01", () => {
    const r = trackCounts([l("seerah", 2)]);
    expect(r.counts.seerah).toBe(0);
    expect(r.gaps).toEqual(["seerah-01 is missing (seerah-02 compiled but hidden until it exists)"]);
  });
});
