/**
 * Creates the demo masjids (one per school, plus one with no school set) and an invite for each.
 * Safe to run again: existing demo masjids are left alone.
 *
 *   npm run setup-demo -- --admin-email you@example.com
 *
 * Uses the service-role key from .env.local, so run it only on your own computer.
 */
import { createClient } from "@supabase/supabase-js";
import { DEMO_SCHOOLS, demoSlug } from "../lib/demo";

const i = process.argv.indexOf("--admin-email");
const email = i > -1 ? process.argv[i + 1] : undefined;
const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY!;
if (!url || !key) throw new Error("Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local");
if (!email) throw new Error("Need --admin-email (the demo masjids' admin)");
const db = createClient(url, key, { auth: { persistSession: false } });

async function main() {
  const { data: users } = await db.auth.admin.listUsers();
  let admin = users.users.find((u) => u.email === email);
  if (!admin) admin = (await db.auth.admin.createUser({ email, email_confirm: true })).data.user ?? undefined;
  if (!admin) throw new Error("Couldn't create or find the admin user");
  for (const s of DEMO_SCHOOLS) {
    const slug = demoSlug(s.id);
    const { data: existing } = await db.from("masjids").select("id").eq("slug", slug).maybeSingle();
    if (existing) {
      console.log(`exists: ${slug}`);
      continue;
    }
    const { data: m, error } = await db
      .from("masjids")
      .insert({ name: "Demo Masjid", slug, madhab: s.id === "none" ? null : s.id, jumuah_time: "1:30 pm", has_female_staff: false })
      .select("id")
      .single();
    if (error) throw error;
    const { data: staff } = await db
      .from("staff")
      .insert({ user_id: admin.id, masjid_id: m.id, role: "admin", display_name: "Demo admin" })
      .select("id")
      .single();
    await db.from("invites").insert({ masjid_id: m.id, created_by: staff?.id });
    console.log(`created: ${slug}`);
  }
}
main().catch((e) => {
  console.error(e.message ?? e);
  process.exit(1);
});
