import { describe, expect, it } from "vitest";
import { badges, newBadges, type BadgeInput } from "./badges";

const units = [
  { n: 1, phase: 1, title: "Your first week", firstDay: 1, lastDay: 7 },
  { n: 2, phase: 1, title: "Finding your feet", firstDay: 8, lastDay: 14 },
];
const dayId = (n: number) => `day-${String(n).padStart(2, "0")}`;
const days = (to: number, date = (n: number) => `2026-10-${String(n).padStart(2, "0")}`) =>
  Object.fromEntries(Array.from({ length: to }, (_, i) => [dayId(i + 1), date(i + 1)]));
const base: BadgeInput = { completed: {}, reached: {}, cleared: [], units, tracks: { alphabet: 3, seerah: 0 }, discreet: false };
const earned = (i: BadgeInput) => Object.fromEntries(badges(i).filter((b) => b.earnedOn).map((b) => [b.id, b.earnedOn]));

describe("badges", () => {
  it("none earned at the start, all listed (greyed in the UI)", () => {
    const all = badges(base);
    expect(all.every((b) => b.earnedOn === null)).toBe(true);
    expect(all.map((b) => b.id)).toEqual(
      expect.arrayContaining(["first-step", "ready-for-prayer", "streak-7", "unit-1", "unit-2", "halfway", "the-path", "came-back", "clean-slate", "alif-to-ya", "streak-30", "streak-90", "streak-365", "season-ramadan", "season-dhul-hijjah"]),
    );
    expect(all.some((b) => b.id === "seerah")).toBe(false); // no episodes compiled yet
  });

  it("dates each badge by the day its criteria were first met", () => {
    const e = earned({ ...base, completed: days(7) });
    expect(e["first-step"]).toBe("2026-10-01");
    expect(e["ready-for-prayer"]).toBe("2026-10-03");
    expect(e["unit-1"]).toBe("2026-10-07");
    expect(e["unit-2"]).toBeUndefined();
  });

  it("halfway at 45 path days and the path at 90", () => {
    const date = (n: number) => (n <= 45 ? "2026-11-01" : "2026-12-01");
    expect(earned({ ...base, completed: days(44, date) }).halfway).toBeUndefined();
    expect(earned({ ...base, completed: days(45, date) }).halfway).toBe("2026-11-01");
    const all = earned({ ...base, completed: days(90, date) });
    expect(all["the-path"]).toBe("2026-12-01");
  });

  it("streak badges come from the dates the streak reached 7, 30, 90, 365", () => {
    const e = earned({ ...base, reached: { 3: "2026-10-03", 7: "2026-10-07", 30: "2026-10-30" } });
    expect(e["streak-7"]).toBe("2026-10-07");
    expect(e["streak-30"]).toBe("2026-10-30");
    expect(e["streak-90"]).toBeUndefined();
  });

  it("came back, clean slate (10 cleared), alphabet, seasons", () => {
    const e = earned({
      ...base,
      completed: { "welcome-back-1": "2026-10-05", "alphabet-01": "2026-10-01", "alphabet-02": "2026-10-02", "alphabet-03": "2026-10-04", "hajj-2": "2026-10-06" },
      cleared: Array.from({ length: 10 }, (_, i) => `2026-10-${String(10 + i).padStart(2, "0")}`),
    });
    expect(e["came-back"]).toBe("2026-10-05");
    expect(e["alif-to-ya"]).toBe("2026-10-04");
    expect(e["season-dhul-hijjah"]).toBe("2026-10-06");
    expect(e["season-ramadan"]).toBeUndefined();
    expect(e["clean-slate"]).toBe("2026-10-19");
    expect(earned({ ...base, cleared: ["2026-10-01"] })["clean-slate"]).toBeUndefined();
  });

  it("never rewards logged worship: there's no badge for action logs at all", () => {
    expect(badges(base).some((b) => /log|prayed|fast/i.test(b.id))).toBe(false);
  });

  it("discreet mode names badges neutrally", () => {
    const names = badges({ ...base, discreet: true }).map((b) => `${b.name} ${b.line}`).join(" ");
    expect(names).not.toMatch(/pray|ramadan|hajj|dhul|islam|muslim|allah|alif|arabic|qur/i);
  });

  it("can leave out the streak badges (streak hidden)", () => {
    expect(badges({ ...base, includeStreak: false }).some((b) => b.kind === "streak")).toBe(false);
  });

  it("newBadges lists what this activity just earned", () => {
    const before = badges({ ...base, completed: days(6) });
    const after = badges({ ...base, completed: days(7) });
    expect(newBadges(before, after).map((b) => b.id)).toEqual(["unit-1"]);
  });
});
