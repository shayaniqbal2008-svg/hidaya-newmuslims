import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import type { ContentIndex } from "./types";
import { TRACK_COUNTS } from "./tracks.generated";
import { TRACK_NAMES } from "./track-counts";

const index: ContentIndex = JSON.parse(readFileSync(join(__dirname, "../../content/index.json"), "utf8"));
const tracks = index.lessons.filter((l) => l.kind === "track");

describe("track lessons (optional Practice tracks: alphabet, seerah)", () => {
  it("compiles track lessons with ids <track>-NN, the track name as the prefix and the order as the number", () => {
    expect(tracks.length).toBeGreaterThan(0);
    for (const l of tracks) {
      expect(l.id).toMatch(/^(alphabet|seerah)-\d{2}$/);
      expect(l.track).toBe(l.id.slice(0, -3));
      expect(l.order).toBe(Number(l.id.slice(-2)));
    }
  });

  it("keeps track lessons out of the 90-day path and the units", () => {
    for (const l of tracks) {
      expect(l.day).toBeNull();
      expect(l.unit).toBeNull();
      expect(l.module).toBeNull();
    }
    expect(index.lessons.filter((l) => l.kind === "day")).toHaveLength(90);
  });

  it("publishes a count for every track, the same in index.json and tracks.generated.ts", () => {
    expect(Object.keys(index.tracks).sort()).toEqual([...TRACK_NAMES].sort());
    expect(TRACK_COUNTS).toEqual(index.tracks);
    expect(TRACK_COUNTS.alphabet).toBe(12);
  });

  it("has every lesson 01..count of each track compiled", () => {
    const ids = new Set(tracks.map((l) => l.id));
    for (const [t, n] of Object.entries(index.tracks))
      for (let i = 1; i <= n; i++) expect(ids.has(`${t}-${String(i).padStart(2, "0")}`)).toBe(true);
  });
});
