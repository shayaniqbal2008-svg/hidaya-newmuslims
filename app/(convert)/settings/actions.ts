"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { cookies } from "next/headers";
import { discreetCookie } from "@/lib/brand";
import { getMe, getProgress } from "@/lib/dal";
import { setPause } from "@/lib/streak-store";
import { supabaseAdmin, supabaseServer } from "@/lib/supabase/server";

export type SettingsState = { saved?: boolean; error?: string };

const Settings = z.object({
  first_name: z.string().trim().min(1).max(40),
  share_progress: z.string().optional(),
  share_logs: z.string().optional(),
  discreet_mode: z.string().optional(),
  reminder_time: z.string().regex(/^\d{2}:\d{2}$/),
  reminder_channel: z.enum(["push", "email", "both", "none"]),
  quick_exit_url: z.string().url().startsWith("https://"),
  timezone: z.string().min(1).max(64),
  gender: z.enum(["", "male", "female"]).optional(),
  show_streak: z.string().optional(),
  celebration_sounds: z.string().optional(),
  calm_celebrations: z.string().optional(),
});

export async function saveSettings(_: SettingsState, form: FormData): Promise<SettingsState> {
  const p = Settings.safeParse(Object.fromEntries(form));
  if (!p.success) return { error: "Check the fields and try again. The quick-exit link must start with https://." };
  const me = await getMe();
  const supabase = await supabaseServer();
  const d = p.data;
  try {
    new Intl.DateTimeFormat("en", { timeZone: d.timezone });
  } catch {
    return { error: "That timezone isn't recognised." };
  }
  const share = d.share_progress === "on";
  const [a, b] = await Promise.all([
    supabase
      .from("convert_settings")
      .update({
        share_progress: share,
        share_logs: share && d.share_logs === "on",
        discreet_mode: d.discreet_mode === "on",
        reminder_time: d.reminder_time,
        reminder_channel: d.reminder_channel,
        quick_exit_url: d.quick_exit_url,
        updated_at: new Date().toISOString(),
      })
      .eq("convert_id", me.userId),
    supabase
      .from("converts")
      .update({ first_name: d.first_name, timezone: d.timezone, gender: d.gender ? d.gender : null })
      .eq("id", me.userId),
  ]);
  if (a.error || b.error) return { error: "Couldn't save. Try again." };
  // Streak settings live in columns added by 20261010000001_streaks.sql; saved separately so the rest
  // still saves if that migration hasn't run yet.
  const c = await supabase
    .from("convert_settings")
    .update({
      show_streak: d.show_streak === "on",
      celebration_sounds: d.celebration_sounds === "on",
      calm_celebrations: d.calm_celebrations === "on",
    })
    .eq("convert_id", me.userId);
  if (c.error) console.warn("[streak] settings columns not saved:", c.error.message);
  (await cookies()).set(discreetCookie(d.discreet_mode === "on"));
  revalidatePath("/", "layout");
  return { saved: true };
}

export async function savePushSubscription(sub: { endpoint: string; keys: { p256dh: string; auth: string } }) {
  const me = await getMe();
  const s = z
    .object({ endpoint: z.string().url().startsWith("https://"), keys: z.object({ p256dh: z.string().max(200), auth: z.string().max(100) }) })
    .parse(sub);
  const supabase = await supabaseServer();
  await supabase.from("push_subscriptions").upsert(
    { convert_id: me.userId, endpoint: s.endpoint, p256dh: s.keys.p256dh, auth: s.keys.auth },
    { onConflict: "endpoint" },
  );
}

/** Deletes the account and, by cascade, everything the convert owns (T3 §3.3 rule 6). */
export async function deleteAccount(form: FormData) {
  if (form.get("confirm") !== "DELETE") redirect("/settings?delete=confirm");
  const me = await getMe();
  const supabase = await supabaseServer();
  await supabase.auth.signOut();
  const { error } = await supabaseAdmin().auth.admin.deleteUser(me.userId);
  if (error) throw new Error("Deleting failed. Please try again or ask your masjid to help.");
  redirect("/?deleted=1");
}

/** Pause the streak for 1–30 days from today (form field `days`), or resume (days = 0). */
export async function pauseStreak(form: FormData) {
  const days = z.coerce.number().int().min(0).max(30).parse(form.get("days") ?? 0);
  const me = await getMe();
  await setPause(me, await getProgress(me), days);
  revalidatePath("/settings");
  revalidatePath("/today");
}
