import { describe, expect, it } from "vitest";
import { localTime, reminderText, shouldRemind } from "./reminders";

const base = {
  localDate: "2026-10-07",
  localTime: "19:05",
  reminderTime: "19:00:00",
  lastRemindedOn: null,
  channel: "both" as const,
  today: { main: "day-05", finished: false },
};

describe("shouldRemind", () => {
  it("reminds once the reminder time has passed", () => expect(shouldRemind(base)).toBe(true));
  it("waits until the reminder time", () => expect(shouldRemind({ ...base, localTime: "18:59" })).toBe(false));
  it("only once a day", () => expect(shouldRemind({ ...base, lastRemindedOn: "2026-10-07" })).toBe(false));
  it("not when today's lesson is done", () => expect(shouldRemind({ ...base, today: { main: null, finished: false } })).toBe(false));
  it("not when reminders are off", () => expect(shouldRemind({ ...base, channel: "none" })).toBe(false));
  it("not after Day 90", () => expect(shouldRemind({ ...base, today: { main: null, finished: true } })).toBe(false));
});

describe("reminderText", () => {
  it("is neutral in discreet mode: no religious words, no lesson title", () => {
    const t = reminderText({ discreet: true, lessonTitle: "Your first prayer", day: 3 });
    expect(JSON.stringify(t)).not.toMatch(/pray|islam|muslim|allah|masjid|day 3|first prayer|hidaya/i);
    expect(t.title).toBe("Daily");
  });
  it("is from Hidaya when discreet mode is off", () => {
    expect(reminderText({ discreet: false, lessonTitle: "Your first prayer", day: 3 }).title).toBe("Hidaya");
  });
  it("names the lesson when discreet mode is off", () => {
    expect(reminderText({ discreet: false, lessonTitle: "Your first prayer", day: 3 }).body).toBe("Day 3 is ready: Your first prayer");
  });
});

describe("localTime", () => {
  it("uses the convert's timezone", () => {
    expect(localTime("America/Chicago", new Date("2026-10-08T00:30:00Z"))).toBe("19:30");
  });
});

describe("streak in reminders", () => {
  it("never reminds while the streak is paused", () => expect(shouldRemind({ ...base, paused: true })).toBe(false));
  it("adults with a 3+ day streak and discreet mode off hear about their streak, warmly", () => {
    expect(reminderText({ discreet: false, lessonTitle: "Wudu", day: 2, streak: 5 }).body).toBe("A few minutes today keeps your 5 days going.");
    expect(reminderText({ discreet: false, lessonTitle: "Wudu", day: 2, streak: 2 }).body).toBe("Day 2 is ready: Wudu");
  });
  it("discreet mode and teens never get the streak count", () => {
    expect(reminderText({ discreet: true, lessonTitle: "Wudu", day: 2, streak: 9 }).body).toBe("Time for today's lesson.");
    expect(reminderText({ discreet: false, lessonTitle: "Wudu", day: 2, streak: 9, minor: true }).body).toBe("Day 2 is ready: Wudu");
  });
});
