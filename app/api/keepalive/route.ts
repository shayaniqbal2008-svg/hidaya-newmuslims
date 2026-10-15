// Called once a day by Vercel Cron (vercel.json). Supabase's free plan pauses a project after a week
// without activity, which would take the demo down; one tiny read a day keeps it awake.
import { supabaseAdmin } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const { error } = await supabaseAdmin().from("masjids").select("id", { head: true, count: "exact" });
  return Response.json({ ok: !error, at: new Date().toISOString() }, { status: error ? 500 : 200 });
}
