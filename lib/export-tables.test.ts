import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { EXPORT_TABLES, NOT_EXPORTED } from "./export-tables";

// "Download my data" promises everything the convert owns: every table keyed to a convert must be exported.
describe("data export", () => {
  it("includes every table that holds a convert's rows", () => {
    const dir = join(__dirname, "../supabase/migrations");
    const sql = readdirSync(dir).map((f) => readFileSync(join(dir, f), "utf8")).join("\n");
    const owned = [...sql.matchAll(/create table public\.(\w+) \(([\s\S]*?)\n\);/g)]
      .filter(([, , body]) => /\bconvert_id uuid\b/.test(body))
      .map(([, name]) => name);
    expect(owned).toContain("practice_mistakes");
    expect(owned).toEqual(expect.arrayContaining(["activity_days", "streak_state"]));
    for (const t of owned) if (!NOT_EXPORTED[t]) expect(EXPORT_TABLES, t).toContain(t);
  });
});
