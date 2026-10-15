import { describe, expect, it } from "vitest";
import {
  addActivity,
  countsForStreak,
  EMPTY_META,
  MAX_REST_DAYS,
  mergeRows,
  milestoneFor,
  monthView,
  practiceCounts,
  rowsFromCompleted,
  pauseWindow,
  settle,
  streakNotice,
  streakMoment,
  totalXp,
  weekView,
  type DayRow,
  type StreakMeta,
} from "./streak";
import { addDays, localDate } from "./schedule";

const T = "2026-10-20";
const d = (n: number) => addDays(T, n);
const active = (...ns: number[]): DayRow[] => ns.map((n) => ({ day: d(n), source: "lesson", lessons: 1, practice: 0 }));
const run = (from: number, to: number) => active(...Array.from({ length: to - from + 1 }, (_, k) => from + k));
const meta = (m: Partial<StreakMeta> = {}): StreakMeta => ({ ...EMPTY_META, ...m });

describe("settle: the basic streak", () => {
  it("is 0 with no history", () => {
    const s = settle([], meta(), T);
    expect(s.streak).toBe(0);
    expect(s.doneToday).toBe(false);
    expect(s.restDays).toBe(1); // everyone starts with one rest day
  });
  it("counts back from today", () => expect(settle(run(-2, 0), meta(), T).streak).toBe(3));
  it("keeps yesterday's streak alive until today is over", () => {
    const s = settle(run(-2, -1), meta(), T);
    expect(s.streak).toBe(2);
    expect(s.doneToday).toBe(false);
    expect(s.writes).toEqual([]);
  });
  it("counts a practice-only day the same as a lesson day (Day 91 and beyond)", () => {
    const rows: DayRow[] = [...run(-2, -1), { day: T, source: "practice", lessons: 0, practice: 1 }];
    expect(settle(rows, meta(), T)).toMatchObject({ streak: 3, doneToday: true, todayCount: 1 });
  });
  it("tracks the longest run, and never lowers a stored longest", () => {
    expect(settle([...run(-20, -11), ...run(-1, 0)], meta(), T).longest).toBe(10);
    expect(settle(run(-1, 0), meta({ longest: 40 }), T).longest).toBe(40);
  });
});

describe("rest days", () => {
  it("one missed day uses the starting rest day automatically and keeps the streak", () => {
    const s = settle([...run(-5, -3), ...active(-1, 0)], meta(), T);
    expect(s.writes).toEqual([{ day: d(-2), source: "rest" }]);
    expect(s.streak).toBe(5); // rest days hold the streak, they don't add to it
    expect(s.restDays).toBe(0);
  });
  it("a two-day gap with only one rest day breaks the streak", () => {
    const s = settle([...run(-6, -3), ...active(0)], meta(), T);
    expect(s.writes).toEqual([{ day: d(-2), source: "rest" }]);
    expect(s.streak).toBe(1);
  });
  it("a two-day gap with two rest days held keeps the streak", () => {
    // 7 days earns a second rest day (1 + 1 = 2)
    const s = settle([...run(-10, -4), ...active(-1, 0)], meta(), T);
    expect(s.writes).toEqual([
      { day: d(-3), source: "rest" },
      { day: d(-2), source: "rest" },
    ]);
    expect(s.streak).toBe(9);
    expect(s.restDays).toBe(0);
  });
  it("earns one per 7 streak days and holds at most two", () => {
    expect(settle(run(-6, 0), meta(), T).restDays).toBe(2);
    expect(settle(run(-20, 0), meta(), T).restDays).toBe(MAX_REST_DAYS);
  });
  it("doesn't use a rest day when there is no streak to protect", () => {
    const s = settle([...active(-10), ...active(0)], meta(), T);
    // the first missed day is protected, the next one breaks; nothing after that is written
    expect(s.writes).toEqual([{ day: d(-9), source: "rest" }]);
    expect(s.streak).toBe(1);
  });
  it("is idempotent: settling again with the written rows changes nothing", () => {
    const rows = [...run(-10, -4), ...active(-1, 0)];
    const first = settle(rows, meta(), T);
    const again = settle([...rows, ...first.writes], first.meta, T);
    expect(again.writes).toEqual([]);
    expect(again.streak).toBe(first.streak);
    expect(again.restDays).toBe(first.restDays);
  });
  it("tells the Today screen that yesterday was a rest day", () => {
    expect(settle([...run(-4, -2)], meta(), T).yesterday).toBe("rest");
  });
});

describe("pause", () => {
  it("holds the streak through paused days without using rest days", () => {
    const s = settle([...run(-6, -4), ...active(0)], meta({ pausedFrom: d(-3), pausedUntil: d(-1) }), T);
    expect(s.writes).toEqual([
      { day: d(-3), source: "pause" },
      { day: d(-2), source: "pause" },
      { day: d(-1), source: "pause" },
    ]);
    expect(s.streak).toBe(4);
    expect(s.restDays).toBe(1);
  });
  it("knows when today is paused", () => {
    expect(settle(run(-2, -1), meta({ pausedFrom: T, pausedUntil: d(5) }), T).paused).toBe(true);
    expect(settle(run(-2, -1), meta({ pausedFrom: d(-9), pausedUntil: d(-3) }), T).paused).toBe(false);
  });
  it("an activity on a paused day still counts", () => {
    expect(settle([...run(-2, -1), ...active(0)], meta({ pausedFrom: d(-1), pausedUntil: d(3) }), T).streak).toBe(3);
  });
});

describe("make-up (repair)", () => {
  // 5 days, a rest day, 1 more day, then two missed days with no rest left.
  const brokenNoRest: DayRow[] = [...run(-9, -5), { day: d(-4), source: "rest" }, ...run(-3, -3)];

  it("offers to pick the streak back up after a break of 1–2 days", () => {
    const s = settle([...run(-6, -3)], meta(), T); // d-2 rest, d-1 breaks
    expect(s.streak).toBe(0);
    expect(s.repair).toEqual({ missed: [d(-1)], streakBefore: 4, needed: 2 });
  });
  it("needs one more counted activity after the first one today", () => {
    const s = settle([...run(-6, -3), ...active(0)], meta(), T);
    expect(s.streak).toBe(1);
    expect(s.repair?.needed).toBe(1);
  });
  it("two counted activities today restore the streak and record the repair", () => {
    const rows: DayRow[] = [...run(-6, -3), { day: T, source: "lesson", lessons: 1, practice: 1 }];
    const s = settle(rows, meta(), T);
    expect(s.repaired).toBe(true);
    expect(s.writes).toContainEqual({ day: d(-1), source: "repair" });
    expect(s.streak).toBe(5);
    expect(s.meta.lastRepairOn).toBe(T);
    expect(s.repair).toBeNull();
  });
  it("covers a two-day break", () => {
    const s = settle([...brokenNoRest, { day: T, source: "lesson", lessons: 2, practice: 0 }], meta(), T);
    expect(s.writes.filter((w) => w.source === "repair").map((w) => w.day)).toEqual([d(-2), d(-1)]);
    expect(s.streak).toBe(7);
  });
  it("is not offered for a break of 3+ days, a 1-day run, or within 30 days of the last repair", () => {
    expect(settle([...run(-8, -5)], meta(), T).repair).toBeNull(); // rest d-4, missed d-3..d-1
    expect(settle([...active(-3)], meta(), T).repair).toBeNull();
    expect(settle([...run(-6, -3)], meta({ lastRepairOn: d(-29) }), T).repair).toBeNull();
    expect(settle([...run(-6, -3)], meta({ lastRepairOn: d(-30) }), T).repair).not.toBeNull();
  });
  it("settling after the repair is stable", () => {
    const rows: DayRow[] = [...run(-6, -3), { day: T, source: "lesson", lessons: 2, practice: 0 }];
    const first = settle(rows, meta(), T);
    const again = settle([...rows, ...first.writes], first.meta, T);
    expect(again).toMatchObject({ streak: 5, repaired: false, repair: null, writes: [] });
  });
});

describe("timezones", () => {
  it("a lesson finished at 11:30pm Chicago counts for that local day, not the UTC one", () => {
    const iso = "2026-10-20T04:30:00Z"; // 23:30 on the 19th in Chicago
    expect(localDate("America/Chicago", new Date(iso))).toBe("2026-10-19");
    const rows = rowsFromCompleted({ "day-01": localDate("America/Chicago", new Date(iso)) });
    expect(settle(rows, meta(), "2026-10-20").streak).toBe(1);
  });
});

describe("rowsFromCompleted and mergeRows (fallback and backfill)", () => {
  it("counts lessons per day and leaves track lessons out", () => {
    expect(rowsFromCompleted({ "day-01": d(-1), "ramadan-1": d(-1), "alphabet-01": d(0), "seerah-01": d(0) })).toEqual([
      { day: d(-1), source: "lesson", lessons: 2, practice: 0 },
    ]);
  });
  it("stored rows win, except a lesson day beats a stored rest/pause row", () => {
    const merged = mergeRows(
      [{ day: d(-1), source: "rest" }, { day: d(0), source: "practice", lessons: 0, practice: 1 }],
      [{ day: d(-1), source: "lesson", lessons: 1, practice: 0 }, { day: d(0), source: "lesson", lessons: 1, practice: 0 }],
    );
    expect(merged.find((r) => r.day === d(-1))?.source).toBe("lesson");
    expect(merged.find((r) => r.day === d(0))).toEqual({ day: d(0), source: "practice", lessons: 0, practice: 1 });
  });
});

describe("what counts", () => {
  it("a first path lesson, a calendar or welcome-back module once a day; never tracks or re-reads", () => {
    expect(countsForStreak("day-05", null, T)).toBe(true);
    expect(countsForStreak("day-05", d(-3), T)).toBe(false);
    expect(countsForStreak("ramadan-2", d(-40), T)).toBe(true);
    expect(countsForStreak("ramadan-2", T, T)).toBe(false); // already counted today (a re-do or a reload)
    expect(countsForStreak("welcome-back-1", null, T)).toBe(true);
    expect(countsForStreak("alphabet-03", null, T)).toBe(false);
    expect(countsForStreak("seerah-01", null, T)).toBe(false);
  });
  it("a practice session counts with 5 or more questions", () => {
    expect(practiceCounts(4)).toBe(false);
    expect(practiceCounts(5)).toBe(true);
  });
});

describe("milestones", () => {
  it("marks 3, 7, 14, 30, 50, 90, 100, 180, 365; the big ones are 7, 30, 90, 365", () => {
    expect(milestoneFor(2)).toBeNull();
    expect(milestoneFor(3)).toEqual({ days: 3, big: false });
    expect(milestoneFor(7)).toEqual({ days: 7, big: true });
    expect(milestoneFor(50)?.big).toBe(false);
    for (const n of [30, 90, 365]) expect(milestoneFor(n)?.big).toBe(true);
  });
  it("records the first date the streak reached a badge threshold", () => {
    expect(settle(run(-9, 0), meta(), T).reached[7]).toBe(d(-3));
  });
});

describe("streakMoment (what the end of a lesson shows)", () => {
  it("shows the streak screen for the first counted activity of the day", () => {
    const m = streakMoment(run(-2, -1), meta(), T, "lesson");
    expect(m.showStreak).toBe(true);
    expect(m.before.streak).toBe(2);
    expect(m.after.streak).toBe(3);
    expect(m.milestone).toEqual({ days: 3, big: false });
  });
  it("skips it when today already counts", () => {
    const m = streakMoment(run(-2, 0), meta(), T, "lesson");
    expect(m.showStreak).toBe(false);
    expect(m.milestone).toBeNull();
  });
  it("shows it when this activity completes a make-up", () => {
    const m = streakMoment([...run(-6, -3), ...active(0)], meta(), T, "practice");
    expect(m.showStreak).toBe(true);
    expect(m.after.repaired).toBe(true);
    expect(m.after.streak).toBe(5);
  });
  it("addActivity increments today's counters", () => {
    const rows = addActivity(addActivity([], T, "lesson"), T, "practice");
    expect(rows).toEqual([{ day: T, source: "lesson", lessons: 1, practice: 1 }]);
  });
});

describe("week and month views", () => {
  it("the last 7 days with labels and kinds", () => {
    const s = settle([...run(-5, -3), ...active(-1, 0)], meta(), T); // d-2 rest
    const w = weekView(s.days, T);
    expect(w).toHaveLength(7);
    expect(w[6]).toMatchObject({ date: T, state: "done", label: "Tu" });
    expect(w[4].state).toBe("rest");
    expect(w[0].state).toBe("none");
  });
  it("a month grid padded to whole weeks starting Sunday", () => {
    const s = settle(run(-1, 0), meta(), T);
    const m = monthView(s.days, "2026-10", T);
    expect(m.title).toBe("October 2026");
    expect(m.cells.length % 7).toBe(0);
    expect(m.cells[0].date).toBeNull(); // Oct 1 2026 is a Thursday
    expect(m.cells.find((c) => c.date === T)).toMatchObject({ state: "done", today: true });
    expect(m.cells.find((c) => c.date === "2026-10-25")?.future).toBe(true);
  });
});

describe("XP", () => {
  it("10 per lesson, 5 per counted practice session", () => {
    expect(totalXp(3)).toBe(30);
    expect(totalXp(3, 2)).toBe(40);
  });
});

describe("streakNotice (the card on Today)", () => {
  it("rest day used yesterday", () => {
    expect(streakNotice(settle([...run(-5, -2)], meta(), T))).toBe("Yesterday was a rest day. Your 4-day streak is safe.");
  });
  it("make-up offer, before and after the first activity", () => {
    expect(streakNotice(settle(run(-6, -3), meta(), T))).toBe("You can pick your 4-day streak back up: finish two lessons or reviews today.");
    expect(streakNotice(settle([...run(-6, -3), ...active(0)], meta(), T))).toBe("You can pick your streak back up: do one more lesson today.");
  });
  it("after a break with nothing to repair: warm, never guilt", () => {
    const n = streakNotice(settle([...run(-30, -20)], meta(), T));
    expect(n).toBe("Welcome back. Your longest streak (11) stays yours. Let's start a new one.");
    expect(n).not.toMatch(/lost|miss|fail/i);
  });
  it("paused", () => {
    expect(streakNotice(settle(run(-3, -1), meta({ pausedFrom: T, pausedUntil: "2026-10-24" }), T))).toBe(
      "Your streak is paused until Sat, Oct 24. Reminders are off until then.",
    );
  });
  it("nothing to say on an ordinary day", () => {
    expect(streakNotice(settle(run(-3, 0), meta(), T))).toBeNull();
    expect(streakNotice(settle([], meta(), T))).toBeNull();
  });
});

describe("review fixes", () => {
  it("a new run after a break starts with one rest day again", () => {
    // 3 days, a rest day, a break; then a new 2-day run, one missed day, and 4 more days
    const rows = [...run(-12, -10), ...run(-6, -5), ...run(-3, 0)];
    const s = settle(rows, meta(), T);
    expect(s.writes).toContainEqual({ day: d(-4), source: "rest" }); // the new run's starting rest day
    expect(s.streak).toBe(6);
  });
  it("mergeRows can ignore lesson dates before a cutoff (stored log is the truth there)", () => {
    const merged = mergeRows([{ day: d(-5), source: "rest" }], [{ day: d(-5), source: "lesson", lessons: 1 }, { day: d(0), source: "lesson", lessons: 1 }], d(-1));
    expect(merged.find((r) => r.day === d(-5))?.source).toBe("rest");
    expect(merged.find((r) => r.day === T)?.source).toBe("lesson");
  });
  describe("pauseWindow", () => {
    it("pauses from today for N days", () => expect(pauseWindow(meta(), T, 7)).toEqual({ pausedFrom: T, pausedUntil: d(6) }));
    it("resuming a running pause ends it yesterday (keeps the past part)", () => {
      expect(pauseWindow(meta({ pausedFrom: d(-3), pausedUntil: d(4) }), T, 0)).toEqual({ pausedFrom: d(-3), pausedUntil: d(-1) });
    });
    it("resuming a pause that started today clears it", () => {
      expect(pauseWindow(meta({ pausedFrom: T, pausedUntil: d(4) }), T, 0)).toEqual({ pausedFrom: null, pausedUntil: null });
    });
    it("resuming when not paused never stretches an old pause over missed days", () => {
      const old = meta({ pausedFrom: d(-19), pausedUntil: d(-17) });
      expect(pauseWindow(old, T, 0)).toEqual({ pausedFrom: d(-19), pausedUntil: d(-17) });
    });
    it("caps at 30 days", () => expect(pauseWindow(meta(), T, 99).pausedUntil).toBe(d(29)));
  });
});
