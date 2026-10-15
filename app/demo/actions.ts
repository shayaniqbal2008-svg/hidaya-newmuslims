"use server";
// Demo sign-up: no invite link and no email code (Shayan, 2026-10-07: scholars and testers shouldn't hit
// that friction). Creates a throwaway account with a random address that never receives mail, signs it in
// with a random password, and joins the chosen school's demo masjid through its normal invite.
// The service-role client is used only to create that account and to read the demo invite; neither is
// steered by anything the visitor types beyond picking one of the fixed demo schools.
import { randomBytes, randomUUID } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";
import { discreetCookie } from "@/lib/brand";
import { DEMO_SCHOOLS, demoEnabled, demoSlug } from "@/lib/demo";
import { supabaseAdmin, supabaseServer } from "@/lib/supabase/server";

export type DemoState = { error?: string };

const Demo = z.object({
  first_name: z.string().trim().max(40).optional(),
  gender: z.enum(["male", "female"]),
  school: z.enum(DEMO_SCHOOLS.map((s) => s.id) as [string, ...string[]]),
  timezone: z.string().min(1).max(64),
});

export async function startDemo(_: DemoState, form: FormData): Promise<DemoState> {
  if (!demoEnabled()) return { error: "The demo is closed." };
  const p = Demo.safeParse(Object.fromEntries(form));
  if (!p.success) return { error: "Pick men's or women's guidance to continue." };
  const d = p.data;
  let tz = d.timezone;
  try {
    new Intl.DateTimeFormat("en", { timeZone: tz });
  } catch {
    tz = "America/Chicago";
  }
  const admin = supabaseAdmin();
  const { data: masjid } = await admin.from("masjids").select("id").eq("slug", demoSlug(d.school)).maybeSingle();
  const { data: invite } = masjid
    ? await admin.from("invites").select("code").eq("masjid_id", masjid.id).eq("revoked", false).limit(1).maybeSingle()
    : { data: null };
  if (!invite) return { error: "The demo isn't set up yet. (Run npm run setup-demo.)" };

  const email = `demo-${randomUUID()}@example.com`;
  const password = randomBytes(24).toString("base64url");
  const { error: createError } = await admin.auth.admin.createUser({ email, password, email_confirm: true, user_metadata: { demo: true } });
  if (createError) return { error: "Couldn't start the demo. Try again in a moment." };

  const supabase = await supabaseServer();
  const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
  if (signInError) return { error: "Couldn't start the demo. Try again in a moment." };

  const { error } = await supabase.rpc("redeem_invite", {
    invite_code: invite.code,
    p_first_name: d.first_name || "Friend",
    p_birth_year: new Date().getFullYear() - 30,
    p_timezone: tz,
    p_share_progress: false,
    p_share_logs: false,
    p_gender: d.gender,
    p_shahada_date: null,
  });
  if (error) return { error: "Couldn't start the demo. Try again in a moment." };
  // Demo shows the app as Hidaya, not the discreet "Daily".
  const { data: me } = await supabase.auth.getUser();
  if (me.user) await supabase.from("convert_settings").update({ discreet_mode: false }).eq("convert_id", me.user.id);
  (await cookies()).set(discreetCookie(false));
  redirect("/today?welcome=1");
}
