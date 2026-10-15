// "Download my data": everything the convert owns, decrypted, as one JSON file (T3 §3.3 rule 6).
import { decrypt } from "@/lib/crypto";
import { EXPORT_TABLES } from "@/lib/export-tables";
import { getUser } from "@/lib/dal";
import { supabaseServer } from "@/lib/supabase/server";

export async function GET() {
  const user = await getUser();
  if (!user) return new Response("Sign in first", { status: 401 });
  const supabase = await supabaseServer();
  const tables = EXPORT_TABLES;
  const out: Record<string, unknown> = { exported_at: new Date().toISOString(), email: user.email };
  for (const t of tables) {
    const { data } = await supabase.from(t).select("*");
    out[t] = (data ?? []).map((row: Record<string, unknown>) => {
      if (typeof row.body_enc === "string") {
        const { body_enc, ...rest } = row;
        let body = "";
        try {
          body = decrypt(user.id, body_enc);
        } catch {
          body = "(couldn't decrypt)";
        }
        return { ...rest, body };
      }
      return row;
    });
  }
  return new Response(JSON.stringify(out, null, 2), {
    headers: {
      "content-type": "application/json",
      "content-disposition": `attachment; filename="my-data-${new Date().toISOString().slice(0, 10)}.json"`,
      "cache-control": "no-store",
    },
  });
}
