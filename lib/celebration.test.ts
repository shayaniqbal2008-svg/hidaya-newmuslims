import { describe, expect, it } from "vitest";
import { celebrationFor, consistencyQuote, type CelebrationInput } from "./celebration";
import { addDays } from "./schedule";
import type { DayRow } from "./streak";

const T = "2026-10-20";
const run = (from: number, to: number): DayRow[] =>
  Array.from({ length: to - from + 1 }, (_, k) => ({ day: addDays(T, from + k), source: "lesson", lessons: 1, practice: 0 }));
const units = [{ n: 1, phase: 1, title: "Your first week", firstDay: 1, lastDay: 7 }];
const hadith = { text: "the most beloved deed to Allah is the most regular and constant even if it were little", source: "Sahih al-Bukhari 6464" };
const base: CelebrationInput = {
  rows: run(-5, -1),
  meta: { longest: 0, pausedFrom: null, pausedUntil: null, lastRepairOn: null },
  today: T,
  kind: "lesson",
  completedBefore: {},
  completedAfter: { "day-01": T },
  cleared: [],
  units,
  tracks: {},
  settings: { show_streak: true, calm_celebrations: false, celebration_sounds: true, discreet_mode: false },
  xpBefore: 50,
  xpGain: 10,
  hadith,
};

describe("celebrationFor", () => {
  it("shows the streak rolling from the old count to the new one", () => {
    const c = celebrationFor(base);
    expect(c.streak).toMatchObject({ days: 6, from: 5, repaired: false, restart: false });
    expect(c.streak?.week).toHaveLength(7);
    expect(c.alreadyCounted).toBe(false);
    expect(c.badges.map((b) => b.id)).toEqual(["first-step"]);
    expect(c.sounds).toBe(true);
  });
  it("hits a milestone with the consistency hadith on 30/90/365 only", () => {
    const seven = celebrationFor({ ...base, rows: run(-6, -1) });
    expect(seven.milestone).toEqual({ days: 7, big: true, hadith: null });
    const thirty = celebrationFor({ ...base, rows: run(-29, -1) });
    expect(thirty.milestone).toEqual({ days: 30, big: true, hadith });
  });
  it("doesn't repeat the milestone as a badge screen right after it", () => {
    const c = celebrationFor({ ...base, rows: run(-6, -1) });
    expect(c.milestone?.days).toBe(7);
    expect(c.badges.map((b) => b.id)).toEqual(["first-step"]);
  });
  it("discreet mode: no hadith, no sounds", () => {
    const c = celebrationFor({ ...base, rows: run(-29, -1), settings: { ...base.settings, discreet_mode: true } });
    expect(c.milestone?.hadith).toBeNull();
    expect(c.sounds).toBe(false);
  });
  it("a hidden streak skips the streak and milestone screens and streak badges", () => {
    const c = celebrationFor({ ...base, rows: run(-6, -1), settings: { ...base.settings, show_streak: false } });
    expect(c.streak).toBeNull();
    expect(c.milestone).toBeNull();
    expect(c.badges.some((b) => b.kind === "streak")).toBe(false);
  });
  it("today already counted: just the chip, no streak screen", () => {
    const c = celebrationFor({ ...base, rows: run(-5, 0) });
    expect(c.streak).toBeNull();
    expect(c.alreadyCounted).toBe(true);
  });
  it("a hidden streak never mentions today counting", () => {
    expect(celebrationFor({ ...base, rows: run(-5, 0), settings: { ...base.settings, show_streak: false } }).alreadyCounted).toBe(false);
  });
  it("an activity that doesn't count (a track lesson) shows no streak", () => {
    expect(celebrationFor({ ...base, kind: null }).streak).toBeNull();
  });
  it("after a break: Day 1 again, with a make-up offer", () => {
    const c = celebrationFor({ ...base, rows: run(-6, -3), meta: { ...base.meta, longest: 4 } });
    expect(c.streak).toMatchObject({ days: 1, restart: true, repairNeeded: 1 });
  });
  it("at most two badge screens", () => {
    const completedAfter = Object.fromEntries(Array.from({ length: 7 }, (_, i) => [`day-0${i + 1}`, T]));
    const c = celebrationFor({ ...base, rows: run(-6, -1), completedAfter });
    expect(c.badges).toHaveLength(2);
  });
  it("consistencyQuote takes the hadith's closing words verbatim", () => {
    expect(consistencyQuote("Narrated X: ...and that the most beloved deed to Allah is the most regular and constant even if it were little")).toBe(
      "The most beloved deed to Allah is the most regular and constant even if it were little.",
    );
  });
});
