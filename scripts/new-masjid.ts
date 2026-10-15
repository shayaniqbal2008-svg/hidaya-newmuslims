/**
 * Creates a masjid, its first admin, and an invite link. Run after the database migrations:
 *
 *   npm run new-masjid -- --name "Demo Masjid" --slug demo --madhab hanafi \
 *     --admin-email you@example.com --admin-name "Shayan" [--jumuah "1:30 pm"] [--female-staff]
 *
 * The admin signs in at /login with that email (a 6-digit code). The masjid dashboard is T5;
 * until then this prints the invite link to share with converts.
 * Uses the service-role key from .env.local, so run it only on your own computer.
 */
import { createClient } from "@supabase/supabase-js";

const arg = (k: string) => {
  const i = process.argv.indexOf(`--${k}`);
  return i > -1 ? process.argv[i + 1] : undefined;
};
const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY!;
if (!url || !key) throw new Error("Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local");
const db = createClient(url, key, { auth: { persistSession: false } });

async function main() {
  const name = arg("name"), slug = arg("slug"), email = arg("admin-email");
  if (!name || !slug || !email) throw new Error("Need --name, --slug and --admin-email");
  const madhab = arg("madhab") ?? null;
  const { data: m, error } = await db
    .from("masjids")
    .insert({ name, slug, madhab, jumuah_time: arg("jumuah") ?? null, has_female_staff: process.argv.includes("--female-staff") })
    .select("id")
    .single();
  if (error) throw error;
  let { data: u } = await db.auth.admin.createUser({ email, email_confirm: true });
  if (!u.user) {
    const list = await db.auth.admin.listUsers();
    u = { user: list.data.users.find((x) => x.email === email) ?? null } as typeof u;
  }
  if (!u.user) throw new Error("Couldn't create or find the admin user");
  const { data: s } = await db
    .from("staff")
    .insert({ user_id: u.user.id, masjid_id: m.id, role: "admin", display_name: arg("admin-name") ?? email })
    .select("id")
    .single();
  const { data: inv } = await db.from("invites").insert({ masjid_id: m.id, created_by: s?.id }).select("code").single();
  console.log(`Masjid created: ${name}\nInvite link: ${process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"}/join/${inv!.code}`);
}
main().catch((e) => {
  console.error(e.message ?? e);
  process.exit(1);
});
