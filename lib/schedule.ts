// What the convert sees on the Today screen. A pure function: same inputs → same answer, easy to test.
// Rules: Curriculum Spec §3 (pacing) and §10 (calendar modules, welcome back).
//
//  - Days 1–3 unlock together at sign-up. After that, Day n unlocks once Day n−1 was finished on an
//    earlier calendar day (in the convert's timezone): one new lesson a day, a habit not a binge.
//  - Calendar modules (Ramadan, Eid, Hajj, Thanksgiving, Christmas) fire by date and take that day's
//    slot. During the first week they show as a side card instead, so Days 1–7 stay intact.
//  - Joined during Ramadan: fasting is already due, so ramadan-3 shows next to Day 1.
//  - Back after 3+ days away → welcome-back-1; 14+ days → welcome-back-2. It doesn't use up the day.
//  - Past lessons can always be reopened (that's the Path screen, not this function).
//  - Optional Practice tracks (alphabet, seerah) never take or use up the day's slot.

import { isTrackId } from "./access";

export type LocalDate = string; // "2026-10-07", already in the convert's timezone

export type CalendarEvent = "ramadan_start" | "eid_fitr" | "dhul_hijjah_1" | "arafah" | "eid_adha";

export type ScheduleInput = {
  today: LocalDate;
  programStart: LocalDate;
  /** lesson id → local date it was completed */
  completed: Record<string, LocalDate>;
  /** The masjid's announced dates. Missing ones fall back to the Umm al-Qura calendar. */
  masjidDates?: { event: CalendarEvent; date: LocalDate }[];
};

export type Today = {
  /** The one lesson the Today screen leads with, or null when today's lesson is done. */
  main: string | null;
  mainReason: "day" | "module" | "welcome-back" | null;
  /** Short cards shown beside the main lesson (modules during the first week; ramadan-3 on join). */
  sideCards: string[];
  /** The next numbered day not yet completed (91 once all 90 are done). */
  nextDay: number;
  /** Highest numbered day the convert may open. */
  unlockedThrough: number;
  /** True when today's work is done and the next lesson unlocks tomorrow. */
  doneForToday: boolean;
  finished: boolean;
};

const DAY_MS = 86_400_000;
const toUtc = (d: LocalDate) => Date.parse(`${d}T00:00:00Z`);
export const addDays = (d: LocalDate, n: number): LocalDate =>
  new Date(toUtc(d) + n * DAY_MS).toISOString().slice(0, 10);
export const daysBetween = (a: LocalDate, b: LocalDate) => Math.round((toUtc(b) - toUtc(a)) / DAY_MS);
export const dayId = (n: number) => `day-${String(n).padStart(2, "0")}`;

/** Today's date in a timezone, as YYYY-MM-DD. */
export function localDate(timeZone: string, now = new Date()): LocalDate {
  return new Intl.DateTimeFormat("en-CA", { timeZone, year: "numeric", month: "2-digit", day: "2-digit" }).format(now);
}

// ---------- calendar

const hijri = new Intl.DateTimeFormat("en-u-ca-islamic-umalqura", {
  day: "numeric",
  month: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

function hijriParts(d: LocalDate) {
  const p = Object.fromEntries(hijri.formatToParts(new Date(`${d}T12:00:00Z`)).map((x) => [x.type, x.value]));
  return { y: Number(p.year), m: Number(p.month), d: Number(p.day) };
}

/** Calculated (Umm al-Qura) dates of the year's events around a given date. Fallback only: masjids announce real dates. */
export function calculatedEvents(around: LocalDate): { event: CalendarEvent; date: LocalDate }[] {
  const out: { event: CalendarEvent; date: LocalDate }[] = [];
  const want: [CalendarEvent, number, number][] = [
    ["ramadan_start", 9, 1],
    ["eid_fitr", 10, 1],
    ["dhul_hijjah_1", 12, 1],
    ["arafah", 12, 9],
    ["eid_adha", 12, 10],
  ];
  // Scan ±400 days: covers this year's and next year's events either side of `around`.
  for (let i = -400; i <= 400; i++) {
    const d = addDays(around, i);
    const h = hijriParts(d);
    for (const [event, m, day] of want) if (h.m === m && h.d === day) out.push({ event, date: d });
  }
  return out;
}

function thanksgiving(year: number): LocalDate {
  const nov1 = new Date(Date.UTC(year, 10, 1)).getUTCDay(); // 0 = Sunday
  const firstThu = 1 + ((4 - nov1 + 7) % 7);
  return `${year}-11-${String(firstThu + 21).padStart(2, "0")}`;
}

type Window = { id: string; from: LocalDate; to: LocalDate }; // inclusive

/** Each module's date window: it fires on `from` and stays available until `to` if missed. */
export function moduleWindows(today: LocalDate, masjidDates: ScheduleInput["masjidDates"] = []): Window[] {
  const events = [...masjidDates];
  const announced = new Set(masjidDates.map((e) => `${e.event}:${e.date.slice(0, 4)}`));
  for (const e of calculatedEvents(today)) {
    // Use a calculated date only when the masjid hasn't announced that event in that year.
    const near = masjidDates.some((m) => m.event === e.event && Math.abs(daysBetween(m.date, e.date)) <= 5);
    if (!near && !announced.has(`${e.event}:${e.date.slice(0, 4)}`)) events.push(e);
  }
  const w: Window[] = [];
  const of = (ev: CalendarEvent) => events.filter((e) => e.event === ev).map((e) => e.date);
  for (const r of of("ramadan_start")) {
    const eid = of("eid_fitr").find((e) => daysBetween(r, e) > 25 && daysBetween(r, e) < 32) ?? addDays(r, 30);
    w.push(
      { id: "ramadan-1", from: addDays(r, -14), to: addDays(r, -4) },
      { id: "ramadan-2", from: addDays(r, -3), to: addDays(r, -1) },
      { id: "ramadan-3", from: r, to: addDays(r, 8) },
      { id: "ramadan-4", from: addDays(r, 9), to: addDays(r, 19) },
      { id: "ramadan-5", from: addDays(r, 20), to: addDays(r, 25) },
      { id: "ramadan-6", from: addDays(r, 26), to: addDays(eid, -1) },
      { id: "eid-fitr", from: eid, to: addDays(eid, 2) },
    );
  }
  for (const d of of("dhul_hijjah_1")) {
    const arafah = of("arafah").find((a) => daysBetween(d, a) >= 7 && daysBetween(d, a) <= 9) ?? addDays(d, 8);
    const adha = of("eid_adha").find((a) => daysBetween(arafah, a) === 1) ?? addDays(arafah, 1);
    w.push(
      { id: "hajj-1", from: d, to: addDays(arafah, -1) },
      { id: "hajj-2", from: arafah, to: arafah },
      { id: "eid-adha", from: adha, to: addDays(adha, 3) },
    );
  }
  const y = Number(today.slice(0, 4));
  for (const year of [y - 1, y, y + 1]) {
    const tg = thanksgiving(year);
    w.push({ id: "holiday-thanksgiving", from: addDays(tg, -5), to: tg });
    w.push({ id: "holiday-christmas", from: `${year}-12-18`, to: `${year}-12-25` });
  }
  return w;
}

// ---------- today

export function today(input: ScheduleInput): Today {
  const { today: t, programStart, completed } = input;
  const doneDays = new Set(
    Object.keys(completed)
      .filter((k) => k.startsWith("day-"))
      .map((k) => Number(k.slice(4))),
  );

  let nextDay = 1;
  while (nextDay <= 90 && doneDays.has(nextDay)) nextDay++;
  const finished = nextDay > 90;

  // Unlocking: Days 1–3 at once; then Day n when Day n−1 was finished before today.
  let unlockedThrough = 3;
  for (let n = 4; n <= 90; n++) {
    const prev = completed[dayId(n - 1)];
    if (prev && prev < t) unlockedThrough = n;
    else break;
  }

  const windows = moduleWindows(t, input.masjidDates);
  // A module is due if today is inside its window, it started after (or on) the convert joined…
  // except Ramadan modules already running when they joined, handled below.
  const dueModules = windows
    .filter((w) => w.from <= t && t <= w.to && !(completed[w.id] && completed[w.id] >= w.from))
    .filter((w) => w.from >= programStart || w.id === "eid-fitr" || w.id === "eid-adha" || w.id === "hajj-2")
    .map((w) => w.id);

  const sideCards: string[] = [];
  const ramadanNow = windows.find(
    (w) => w.id === "ramadan-3" && w.from <= programStart && programStart <= addDays(w.from, 29),
  );
  const joinedInRamadan = Boolean(ramadanNow) && daysBetween(ramadanNow!.from, t) <= 29;
  if (joinedInRamadan && !completed["ramadan-3"]) sideCards.push("ramadan-3");

  const firstWeek = nextDay <= 7;
  const moduleDoneToday = Object.entries(completed).some(
    ([id, d]) => d === t && !id.startsWith("day-") && !id.startsWith("welcome-back") && !isTrackId(id),
  );

  // Welcome back: only for someone who has started (finished Day 1) and then been away.
  const lastActive = Object.values(completed).sort().at(-1);
  const gap = lastActive ? daysBetween(lastActive, t) : 0;
  let welcome: string | null = null;
  if (doneDays.size > 0 && !finished) {
    if (gap >= 14) welcome = "welcome-back-2";
    else if (gap >= 3) welcome = "welcome-back-1";
  }

  let main: string | null = null;
  let mainReason: Today["mainReason"] = null;
  if (welcome) {
    main = welcome;
    mainReason = "welcome-back";
    sideCards.push(...dueModules);
  } else if (dueModules.length && !firstWeek) {
    main = dueModules[0];
    mainReason = "module";
    sideCards.push(...dueModules.slice(1));
  } else {
    if (firstWeek) sideCards.push(...dueModules.filter((m) => !sideCards.includes(m)));
    // A module finished today used up today's slot; the day lesson waits until tomorrow.
    if (!finished && nextDay <= unlockedThrough && !(moduleDoneToday && !firstWeek)) {
      main = dayId(nextDay);
      mainReason = "day";
    }
  }

  return {
    main,
    mainReason,
    sideCards: [...new Set(sideCards)].filter((s) => s !== main),
    nextDay,
    unlockedThrough,
    doneForToday: main === null && !finished,
    finished,
  };
}
