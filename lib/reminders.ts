// Who gets a reminder right now, and what it says. Pure functions, tested in reminders.test.ts.
// The cron route (app/api/cron/reminders) calls these every 15 minutes.
import { BRAND, NEUTRAL_NAME } from "./brand";
import type { Today } from "./schedule";

/** Local "HH:MM" in a timezone. */
export function localTime(timeZone: string, now = new Date()): string {
  return new Intl.DateTimeFormat("en-GB", { timeZone, hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).format(now);
}

export function shouldRemind(o: {
  localDate: string;
  localTime: string;
  reminderTime: string; // "19:00" or "19:00:00"
  lastRemindedOn: string | null;
  channel: "push" | "email" | "both" | "none";
  today: Pick<Today, "main" | "finished">;
  /** The convert paused their streak (Me page): reminders stop too. */
  paused?: boolean;
}): boolean {
  if (o.channel === "none" || o.today.finished || o.paused) return false;
  if (o.lastRemindedOn === o.localDate) return false; // once a day at most
  if (!o.today.main) return false; // today's lesson is already done
  return o.localTime >= o.reminderTime.slice(0, 5);
}

/** Discreet mode (on by default): nothing religious, nothing about the program (Spec §6.4).
 *  Adults with a 3+ day streak get a warm streak line; teens and discreet mode never see the count. */
export function reminderText(o: { discreet: boolean; lessonTitle: string | null; day: number | null; streak?: number; minor?: boolean }) {
  if (o.discreet) return { title: NEUTRAL_NAME, body: "Time for today's lesson.", subject: "Your daily reminder" };
  const what = o.day ? `Day ${o.day}` : "Today's lesson";
  if (!o.minor && (o.streak ?? 0) >= 3) {
    const body = `A few minutes today keeps your ${o.streak} days going.`;
    return { title: BRAND, body, subject: o.lessonTitle ? `${what} is ready` : body };
  }
  return {
    title: BRAND,
    body: o.lessonTitle ? `${what} is ready: ${o.lessonTitle}` : `${what} is ready.`,
    subject: `${what} is ready`,
  };
}
