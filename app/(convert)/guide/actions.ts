"use server";
// Things the convert sends to their masjid ON PURPOSE: an imam question (they confirm the exact text)
// and a safety alert (only from the consent button). Spec §6.2 rules 2, 6, 14.
import { z } from "zod";
import { getMe } from "@/lib/dal";
import { supabaseServer } from "@/lib/supabase/server";

export async function askImam(input: { body: string; anonymous: boolean; toFemaleStaff: boolean }) {
  const me = await getMe();
  const d = z.object({ body: z.string().trim().min(3).max(2000), anonymous: z.boolean(), toFemaleStaff: z.boolean() }).parse(input);
  const supabase = await supabaseServer();
  const due = new Date(Date.now() + me.masjid.imam_response_hours * 3_600_000).toISOString();
  const { error } = await supabase.from("imam_questions").insert({
    masjid_id: me.masjid.id,
    convert_id: me.userId,
    body: d.body,
    anonymous: d.anonymous,
    route_to: d.toFemaleStaff && me.masjid.has_female_staff ? "female_staff" : "imam",
    due_at: due,
  });
  if (error) throw new Error("Couldn't send your question. Try again.");
  return { hours: me.masjid.imam_response_hours };
}

export async function raiseSafetyAlert(recipient: "mentor" | "female_staff") {
  const me = await getMe();
  z.enum(["mentor", "female_staff"]).parse(recipient);
  const supabase = await supabaseServer();
  const { error } = await supabase.from("safety_alerts").insert({ convert_id: me.userId, recipient });
  if (error) throw new Error("Couldn't send the alert.");
}

export async function sendFeedback(input: { helpful: boolean; exchange: { q: string; a: string } | null; note?: string }) {
  const me = await getMe();
  const supabase = await supabaseServer();
  // The exchange is only included when the convert ticked "send this exchange to improve the guide".
  await supabase.from("ai_feedback").insert({
    convert_id: me.userId,
    helpful: input.helpful,
    exchange: input.exchange ? { q: input.exchange.q.slice(0, 2000), a: input.exchange.a.slice(0, 4000) } : null,
    note: input.note?.slice(0, 1000) ?? null,
  });
}
