import { describe, expect, it } from "vitest";
import { addDays, dayId, localDate, moduleWindows, today, type ScheduleInput } from "./schedule";

// A quiet stretch of the year with no calendar modules: 2026-10-07 … 2026-11-10.
const START = "2026-10-07";

/** Completed days 1..n, the last one finished the day before `today`. */
function upTo(n: number, today: string) {
  return did(n, addDays(today, -(n - 2)));
}

/** Completed days 1..n, one per day starting at `from` (Days 1–3 on the first day). */
function did(n: number, from = START): Record<string, string> {
  const out: Record<string, string> = {};
  for (let d = 1; d <= n; d++) out[dayId(d)] = d <= 3 ? from : addDays(from, d - 3);
  return out;
}

const run = (p: Partial<ScheduleInput>) => today({ today: START, programStart: START, completed: {}, ...p });

describe("pacing", () => {
  it("Days 1–3 unlock together at sign-up", () => {
    const t = run({});
    expect(t.main).toBe("day-01");
    expect(t.unlockedThrough).toBe(3);
  });

  it("all of Days 1–3 can be done on the first day, then Day 4 waits for tomorrow", () => {
    const sameDay = run({ completed: { "day-01": START, "day-02": START } });
    expect(sameDay.main).toBe("day-03");
    const allThree = run({ completed: did(3) });
    expect(allThree.main).toBeNull();
    expect(allThree.doneForToday).toBe(true);
    const tomorrow = run({ today: addDays(START, 1), completed: did(3) });
    expect(tomorrow.main).toBe("day-04");
  });

  it("one new lesson a day after that, no binge", () => {
    const t = run({ today: addDays(START, 1), completed: { ...did(3), "day-04": addDays(START, 1) } });
    expect(t.main).toBeNull();
    expect(t.unlockedThrough).toBe(4);
  });

  it("a skipped day doesn't pile up lessons: you continue where you left off", () => {
    const t = run({ today: START, completed: did(5, addDays(START, -4)) }); // Day 5 two days ago
    expect(t.main).toBe("day-06");
    expect(t.unlockedThrough).toBe(6);
  });

  it("an optional alphabet lesson done today doesn't use up today's lesson", () => {
    const t = run({ today: addDays(START, 10), completed: { ...did(10, addDays(START, 2)), "alphabet-01": addDays(START, 10) } });
    expect(t.main).toBe("day-11");
    expect(t.doneForToday).toBe(false);
  });

  it("an optional seerah episode done today doesn't use up today's lesson", () => {
    const t = run({ today: addDays(START, 10), completed: { ...did(10, addDays(START, 2)), "seerah-01": addDays(START, 10) } });
    expect(t.main).toBe("day-11");
    expect(t.doneForToday).toBe(false);
  });

  it("finishes after Day 90", () => {
    const t = run({ today: addDays(START, 100), completed: did(90, addDays(START, 10)) });
    expect(t.finished).toBe(true);
    expect(t.main).toBeNull();
    expect(t.doneForToday).toBe(false);
  });
});

describe("welcome back", () => {
  const base = did(10, "2026-09-01"); // Day 10 finished 2026-09-08
  it("nothing special after a 2-day gap", () => {
    expect(today({ today: "2026-09-10", programStart: "2026-09-01", completed: base }).main).toBe("day-11");
  });
  it("welcome-back-1 after 3+ days away", () => {
    expect(today({ today: "2026-09-11", programStart: "2026-09-01", completed: base }).main).toBe("welcome-back-1");
  });
  it("welcome-back-2 after 14+ days away", () => {
    expect(today({ today: "2026-09-22", programStart: "2026-09-01", completed: base }).main).toBe("welcome-back-2");
  });
  it("after the welcome back, the day lesson is still today's", () => {
    const t = today({
      today: "2026-09-22",
      programStart: "2026-09-01",
      completed: { ...base, "welcome-back-2": "2026-09-22" },
    });
    expect(t.main).toBe("day-11");
  });
  it("can come back again after another gap", () => {
    const t = today({
      today: "2026-10-30",
      programStart: "2026-09-01",
      completed: { ...base, "welcome-back-2": "2026-09-22", "day-11": "2026-09-22" },
    });
    expect(t.main).toBe("welcome-back-2");
  });
  it("not shown to someone who never started", () => {
    expect(run({ today: addDays(START, 20) }).main).toBe("day-01");
  });
});

describe("calendar modules", () => {
  // Ramadan 1448 starts 2027-02-08 (Umm al-Qura), Eid al-Fitr 2027-03-09.
  const deep = upTo(30, "2027-02-08"); // Day 30 finished the day before Ramadan

  it("a module takes the day's slot, then the day lesson waits a day", () => {
    const t = today({ today: "2027-02-08", programStart: "2026-12-01", completed: deep });
    expect(t.main).toBe("ramadan-3");
    const after = today({
      today: "2027-02-08",
      programStart: "2026-12-01",
      completed: { ...deep, "ramadan-3": "2027-02-08" },
    });
    expect(after.main).toBeNull();
    const next = today({
      today: "2027-02-09",
      programStart: "2026-12-01",
      completed: { ...deep, "ramadan-3": "2027-02-08" },
    });
    expect(next.main).toBe("day-31");
  });

  it("fires ~14 days before Ramadan", () => {
    expect(today({ today: "2027-01-25", programStart: "2026-12-01", completed: upTo(20, "2027-01-25") }).main).toBe("ramadan-1");
  });

  it("uses the masjid's announced dates over the calculated ones", () => {
    const t = today({
      today: "2027-02-09",
      programStart: "2026-12-01",
      completed: upTo(30, "2027-02-09"),
      masjidDates: [{ event: "ramadan_start", date: "2027-02-09" }],
    });
    expect(t.main).toBe("ramadan-3");
    const w = moduleWindows("2027-02-09", [{ event: "ramadan_start", date: "2027-02-09" }]);
    expect(w.filter((x) => x.id === "ramadan-3").map((x) => x.from)).toContain("2027-02-09");
    expect(w.filter((x) => x.id === "ramadan-3").map((x) => x.from)).not.toContain("2027-02-08");
  });

  it("during the first week a module is only a side card", () => {
    const t = today({ today: "2026-11-21", programStart: "2026-11-20", completed: did(3, "2026-11-20") });
    expect(t.main).toBe("day-04");
    expect(t.sideCards).toContain("holiday-thanksgiving"); // Thanksgiving 2026 is Nov 26
  });

  it("joining during Ramadan shows your first fast (ramadan-3) next to Day 1", () => {
    const t = today({ today: "2027-02-20", programStart: "2027-02-20", completed: {} });
    expect(t.main).toBe("day-01");
    expect(t.sideCards).toContain("ramadan-3");
  });

  it("Christmas module fires a week before", () => {
    const t = today({ today: "2026-12-18", programStart: "2026-10-01", completed: upTo(40, "2026-12-18") });
    expect(t.main).toBe("holiday-christmas");
  });

  it("a finished module doesn't come back in the same window", () => {
    const t = today({
      today: "2026-12-20",
      programStart: "2026-10-01",
      completed: { ...upTo(40, "2026-12-18"), "holiday-christmas": "2026-12-18" },
    });
    expect(t.main).toBe("day-41");
  });

  it("Thanksgiving is the fourth Thursday of November", () => {
    const w = moduleWindows("2026-11-01").filter((x) => x.id === "holiday-thanksgiving");
    expect(w.map((x) => x.to)).toContain("2026-11-26");
    expect(moduleWindows("2027-11-01").filter((x) => x.id === "holiday-thanksgiving").map((x) => x.to)).toContain("2027-11-25");
  });
});

describe("welcome back meets a module", () => {
  it("welcome back leads; the module waits beside it", () => {
    const t = today({ today: "2027-02-08", programStart: "2026-11-01", completed: did(20, "2026-11-01") });
    expect(t.main).toBe("welcome-back-2");
    expect(t.sideCards).toContain("ramadan-3");
  });
});

describe("timezones", () => {
  it("uses the convert's local date, not the server's", () => {
    const utcLate = new Date("2026-10-08T03:30:00Z"); // 10:30 pm on Oct 7 in Chicago
    expect(localDate("America/Chicago", utcLate)).toBe("2026-10-07");
    expect(localDate("Europe/London", utcLate)).toBe("2026-10-08");
  });
});
