"use server";
// Sign-in with a 6-digit email code (T3 §4: magic links open Safari instead of the installed app).
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";
import { supabaseServer } from "@/lib/supabase/server";
import { discreetCookie } from "@/lib/brand";
import { parseInvite } from "@/lib/invite";

export type FormState = { error?: string; sent?: boolean; email?: string };

const Email = z.string().trim().toLowerCase().email();

export async function sendCode(_: FormState, form: FormData): Promise<FormState> {
  const email = Email.safeParse(form.get("email"));
  if (!email.success) return { error: "That email doesn't look right. Check it and try again." };
  const joining = form.get("mode") === "join";
  const supabase = await supabaseServer();
  const { error } = await supabase.auth.signInWithOtp({
    email: email.data,
    options: { shouldCreateUser: joining },
  });
  if (error) {
    if (!joining && /signups? not allowed|not found/i.test(error.message))
      return { error: "We don't have an account for that email. Use the invite link from your masjid to join." };
    if (/rate|security purposes/i.test(error.message))
      return { error: "A code was just sent. Wait a minute before asking for another." };
    return { error: "We couldn't send a code right now. Try again in a minute." };
  }
  return { sent: true, email: email.data };
}

export async function verifyCode(_: FormState, form: FormData): Promise<FormState> {
  const email = Email.safeParse(form.get("email"));
  const token = String(form.get("code") ?? "").replace(/\D/g, "");
  if (!email.success || token.length < 6) return { sent: true, email: String(form.get("email")), error: "Enter the 6-digit code from the email." };
  const supabase = await supabaseServer();
  const { error } = await supabase.auth.verifyOtp({ email: email.data, token, type: "email" });
  if (error) return { sent: true, email: email.data, error: "That code didn't work. Check it, or ask for a new one." };
  // Mirror discreet mode on this device so the app's name stays neutral where it should (lib/brand.ts).
  const { data: settings } = await supabase.from("convert_settings").select("discreet_mode").maybeSingle();
  if (settings) (await cookies()).set(discreetCookie(settings.discreet_mode));
  redirect("/today");
}

const Signup = z.object({
  first_name: z.string().trim().min(1, "Add your first name.").max(40),
  birth_year: z.coerce.number().int().min(1900).max(new Date().getFullYear()),
  gender: z.enum(["male", "female", ""]).optional(),
  shahada_date: z.string().optional(),
  timezone: z.string().min(1).max(64),
  share_progress: z.string().optional(),
  share_logs: z.string().optional(),
  over13: z.string().optional(),
  invite: z.string().optional(),
});

export async function completeSignup(_: FormState, form: FormData): Promise<FormState> {
  const parsed = Signup.safeParse(Object.fromEntries(form));
  if (!parsed.success) return { error: parsed.error.issues[0]?.message ?? "Check the form and try again." };
  const d = parsed.data;
  const age = new Date().getFullYear() - d.birth_year;
  if (age < 13 || (age === 13 && !d.over13))
    return { error: "This program is for people 13 and older. Please talk to your imam about other ways to learn." };
  const code = parseInvite(String(form.get("invite") || "") || (await cookies()).get("invite")?.value);
  if (!code) return { error: "Open the invite link from your masjid again to finish joining." };
  let tz = d.timezone;
  try {
    new Intl.DateTimeFormat("en", { timeZone: tz });
  } catch {
    tz = "America/Chicago";
  }
  const supabase = await supabaseServer();
  const { error } = await supabase.rpc("redeem_invite", {
    invite_code: code,
    p_first_name: d.first_name,
    p_birth_year: d.birth_year,
    p_timezone: tz,
    p_share_progress: d.share_progress === "on",
    p_share_logs: d.share_logs === "on",
    p_gender: d.gender || null,
    p_shahada_date: d.shahada_date || null,
  });
  if (error) {
    if (/invite not valid/.test(error.message)) return { error: "This invite link has expired. Ask your masjid for a new one." };
    if (/13 or older/.test(error.message)) return { error: "This program is for people 13 and older." };
    return { error: "Something went wrong saving your details. Try again." };
  }
  (await cookies()).delete("invite");
  (await cookies()).set(discreetCookie(true)); // discreet mode is on by default
  redirect("/today?welcome=1");
}

export async function signOut() {
  const supabase = await supabaseServer();
  await supabase.auth.signOut();
  redirect("/");
}
