// Privacy and behaviour tests for the streak tables (migration 20261010000001_streaks.sql).
// Run: npm run test:db
import { beforeAll, describe, expect, it } from "vitest";
import { applyMigration, as, freshDb, type Db } from "./db";

const id = (n: number) => `00000000-0000-0000-0000-${String(n).padStart(12, "0")}`;
const A = id(1); // convert, masjid X
const B = id(2); // convert, masjid X, minor
const ADMIN = id(11);
const MENTOR = id(12);
const IMAM = id(13);
const X = id(100);
const year = new Date().getFullYear();
const MIGRATION = "20261010000001_streaks.sql";
// record_activity only accepts the convert's local today (±1 day for clock edges).
const TODAY = new Intl.DateTimeFormat("en-CA", { timeZone: "America/Chicago" }).format(new Date());
const dayOff = (n: number) => new Date(Date.parse(`${TODAY}T12:00:00Z`) + n * 86_400_000).toISOString().slice(0, 10);

async function seed(db: Db) {
  for (const u of [A, B, ADMIN, MENTOR, IMAM]) await db.query(`insert into auth.users (id) values ($1)`, [u]);
  await db.exec(`
    insert into masjids (id, name, slug) values ('${X}', 'Masjid X', 'x');
    insert into staff (id, user_id, masjid_id, role, display_name, gender, safeguarding_lead) values
      ('${id(511)}', '${ADMIN}', '${X}', 'admin', 'Admin', 'male', false),
      ('${id(512)}', '${MENTOR}', '${X}', 'mentor', 'Mentor', 'female', false),
      ('${id(513)}', '${IMAM}', '${X}', 'imam', 'Imam', 'male', true);
    insert into converts (id, masjid_id, first_name, birth_year, mentor_id, timezone) values
      ('${A}', '${X}', 'Keisha', ${year - 25}, '${id(512)}', 'America/Chicago'),
      ('${B}', '${X}', 'Tyler', ${year - 16}, '${id(512)}', 'America/Chicago');
    insert into convert_settings (convert_id, share_progress, share_logs) values ('${A}', true, true), ('${B}', true, true);
  `);
}

describe("backfill from lesson_progress", () => {
  it("doesn't fail on a timezone name Postgres doesn't know (falls back to UTC)", async () => {
    const db = await freshDb({ before: MIGRATION });
    await seed(db);
    await db.exec(`update converts set timezone = 'Mars/Olympus' where id = '${B}';
      insert into lesson_progress (convert_id, lesson_id, completed_at) values ('${B}', 'day-01', '2026-10-05T15:00:00Z');`);
    await applyMigration(db, MIGRATION);
    const rows = (await db.query(`select day::text from activity_days where convert_id = $1`, [B])).rows;
    expect(rows).toEqual([{ day: "2026-10-05" }]);
  });

  it("logs one row per local day with finished non-track lessons", async () => {
    const db = await freshDb({ before: MIGRATION });
    await seed(db);
    await db.exec(`
      insert into lesson_progress (convert_id, lesson_id, completed_at) values
        ('${A}', 'day-01', '2026-10-05T15:00:00Z'),
        ('${A}', 'day-02', '2026-10-06T04:30:00Z'),   -- 23:30 on Oct 5 in Chicago: same local day
        ('${A}', 'day-03', '2026-10-06T18:00:00Z'),
        ('${A}', 'alphabet-01', '2026-10-07T18:00:00Z'),
        ('${A}', 'day-04', null);
    `);
    await applyMigration(db, MIGRATION);
    const rows = (await db.query(`select day::text, source, lessons, practice from activity_days where convert_id = $1 order by day`, [A])).rows;
    expect(rows).toEqual([
      { day: "2026-10-05", source: "lesson", lessons: 2, practice: 0 },
      { day: "2026-10-06", source: "lesson", lessons: 1, practice: 0 },
    ]);
  });
});

describe("streak tables are the convert's alone", () => {
  let db: Db;
  beforeAll(async () => {
    db = await freshDb();
    await seed(db);
    await as(db, A, async (q) => {
      await q(`select record_activity('${TODAY}', 'lesson')`);
      await q(`insert into streak_state (convert_id, longest) values ($1, 4)`, [A]);
    });
    await as(db, B, (q) => q(`select record_activity('${TODAY}', 'practice')`));
  });

  it("record_activity counts each activity on the day and returns the count", async () => {
    const [r] = await as(db, A, (q) => q(`select record_activity('${TODAY}', 'practice') as n`));
    expect(r.n).toBe(2);
    const [row] = await as(db, A, (q) => q(`select source, lessons, practice from activity_days where day = '${TODAY}'`));
    expect(row).toEqual({ source: "lesson", lessons: 1, practice: 1 });
  });

  it("only today's date (±1 day) can be recorded", async () => {
    await expect(as(db, A, (q) => q(`select record_activity($1, 'lesson')`, [dayOff(-3)]))).rejects.toThrow(/today/);
    await expect(as(db, A, (q) => q(`select record_activity($1, 'lesson')`, [dayOff(5)]))).rejects.toThrow(/today/);
  });

  it("counts at most 3 practice sessions a day (no XP farming)", async () => {
    await as(db, B, async (q) => {
      for (let k = 0; k < 5; k++) await q(`select record_activity($1, 'practice')`, [dayOff(1)]);
      expect(await q(`select practice from activity_days where day = $1`, [dayOff(1)])).toEqual([{ practice: 3 }]);
    });
  });

  it("a counted activity replaces a settled rest/pause row on the same day", async () => {
    await as(db, A, async (q) => {
      await q(`insert into activity_days (convert_id, day, source) values ($1, $2, 'rest')`, [A, dayOff(-1)]);
      await q(`select record_activity($1, 'practice')`, [dayOff(-1)]);
      expect(await q(`select source, lessons, practice from activity_days where day = $1`, [dayOff(-1)])).toEqual([
        { source: "practice", lessons: 0, practice: 1 },
      ]);
    });
  });

  it("each convert sees only their own rows", async () => {
    for (const t of ["activity_days", "streak_state"]) {
      const rows = await as(db, A, (q) => q(`select distinct convert_id from ${t}`));
      expect(rows.map((r) => r.convert_id), t).toEqual([A]);
    }
    expect((await as(db, B, (q) => q(`select distinct convert_id from activity_days`))).map((r) => r.convert_id)).toEqual([B]);
  });

  it("staff (admin, imam, mentor) get zero rows", async () => {
    for (const s of [ADMIN, MENTOR, IMAM])
      for (const t of ["activity_days", "streak_state"]) expect(await as(db, s, (q) => q(`select * from ${t}`)), `${s} ${t}`).toHaveLength(0);
  });

  it("anonymous users are denied", async () => {
    for (const t of ["activity_days", "streak_state"])
      await expect(as(db, null, (q) => q(`select * from ${t}`)), t).rejects.toThrow(/permission denied/);
    await expect(as(db, null, (q) => q(`select record_activity('${TODAY}', 'lesson')`))).rejects.toThrow();
  });

  it("can't write another convert's rows", async () => {
    await expect(as(db, B, (q) => q(`insert into activity_days (convert_id, day, source) values ($1, '2026-10-02', 'lesson')`, [A]))).rejects.toThrow(
      /row-level security/,
    );
    await expect(as(db, B, (q) => q(`insert into streak_state (convert_id) values ($1)`, [A]))).rejects.toThrow(/row-level security/);
    const r = await as(db, B, (q) => q(`update streak_state set longest = 99 where convert_id = $1 returning *`, [A]));
    expect(r).toHaveLength(0);
  });

  it("rejects unknown sources and kinds", async () => {
    await expect(as(db, A, (q) => q(`insert into activity_days (convert_id, day, source) values ($1, '2026-10-03', 'gems')`, [A]))).rejects.toThrow();
    await expect(as(db, A, (q) => q(`select record_activity('2026-10-03', 'rest')`))).rejects.toThrow();
  });

  it("the convert can change the new streak settings, defaults on/off as designed", async () => {
    await as(db, A, async (q) => {
      const [s] = await q(`select show_streak, celebration_sounds, calm_celebrations from convert_settings`);
      expect(s).toEqual({ show_streak: true, celebration_sounds: false, calm_celebrations: false });
      await q(`update convert_settings set show_streak = false, celebration_sounds = true, calm_celebrations = true`);
    });
  });

  it("staff dashboard views expose nothing new", async () => {
    const [row] = await as(db, ADMIN, (q) => q(`select * from dashboard_converts where convert_id = $1`, [A]));
    expect(Object.keys(row).some((k) => /streak|xp|badge|activity|rest/.test(k))).toBe(false);
  });

  it("deleting the account deletes the streak rows", async () => {
    await db.query(`delete from auth.users where id = $1`, [A]);
    for (const t of ["activity_days", "streak_state"]) {
      const r = await db.query<{ n: number }>(`select count(*)::int as n from ${t} where convert_id = $1`, [A]);
      expect(r.rows[0].n, t).toBe(0);
    }
  });
});
