// Privacy tests: one block per rule in T3 §3.3 (and the header of the privacy migration).
// Run: npm run test:db
import { beforeAll, describe, expect, it } from "vitest";
import { as, freshDb, type Db } from "./db";

const id = (n: number) => `00000000-0000-0000-0000-${String(n).padStart(12, "0")}`;
const U = {
  convertA: id(1), // masjid X, adult, shares progress + logs
  convertB: id(2), // masjid X, minor, shares progress + logs
  convertC: id(3), // masjid Y, adult
  convertD: id(4), // masjid X, adult, shares nothing
  adminX: id(11), // male admin of X
  mentorX: id(12), // female mentor of X, mentor of A and B
  leadX: id(13), // safeguarding lead of X
  adminY: id(21),
  newUser: id(31),
  kid: id(32),
};
const X = id(100);
const Y = id(200);
const thisYear = new Date().getFullYear();

let db: Db;

beforeAll(async () => {
  db = await freshDb();
  for (const u of Object.values(U)) await db.query(`insert into auth.users (id) values ($1)`, [u]);
  await db.exec(`
    insert into masjids (id, name, slug, madhab) values ('${X}', 'Masjid X', 'x', 'hanafi'), ('${Y}', 'Masjid Y', 'y', null);
    insert into staff (id, user_id, masjid_id, role, display_name, gender, safeguarding_lead) values
      ('${id(511)}', '${U.adminX}', '${X}', 'admin', 'Admin X', 'male', false),
      ('${id(512)}', '${U.mentorX}', '${X}', 'mentor', 'Sr. Mentor', 'female', false),
      ('${id(513)}', '${U.leadX}', '${X}', 'imam', 'Lead X', 'male', true),
      ('${id(521)}', '${U.adminY}', '${Y}', 'admin', 'Admin Y', 'male', false);
    insert into invites (masjid_id, code) values ('${X}', 'join-x');
    insert into invites (masjid_id, code, expires_at) values ('${X}', 'old-x', now() - interval '1 day');
    insert into converts (id, masjid_id, first_name, birth_year, mentor_id) values
      ('${U.convertA}', '${X}', 'Keisha', ${thisYear - 25}, '${id(512)}'),
      ('${U.convertB}', '${X}', 'Tyler', ${thisYear - 16}, '${id(512)}'),
      ('${U.convertC}', '${Y}', 'Ana', ${thisYear - 30}, null),
      ('${U.convertD}', '${X}', 'Marcus', ${thisYear - 40}, null);
    insert into convert_settings (convert_id, share_progress, share_logs) values
      ('${U.convertA}', true, true), ('${U.convertB}', true, true), ('${U.convertC}', true, true),
      ('${U.convertD}', false, false);
  `);
  for (const c of [U.convertA, U.convertB, U.convertC, U.convertD]) {
    await as(db, c, async (q) => {
      await q(`insert into lesson_progress (convert_id, lesson_id, completed_at) values ($1, 'day-01', now()), ($1, 'day-02', now())`, [c]);
      await q(`insert into action_logs (convert_id, log_key) values ($1, 'prayed_first_prayer')`, [c]);
      await q(`insert into reflections (convert_id, lesson_id, screen_n, body_enc) values ($1, 'day-01', 10, 'enc:private')`, [c]);
      await q(`insert into reflections (convert_id, lesson_id, screen_n, body_enc, shared_with_mentor_at) values ($1, 'day-23', 5, 'enc:shared', now())`, [c]);
      const [t] = await q(`insert into ai_threads (convert_id) values ($1) returning id`, [c]);
      await q(`insert into ai_messages (thread_id, convert_id, role, body_enc) values ($1, $2, 'user', 'enc:hello')`, [t.id, c]);
    });
  }
});

describe("rule 1: a convert reads and writes only their own rows", () => {
  it("sees only their own convert row, progress, logs, chats and reflections", async () => {
    await as(db, U.convertA, async (q) => {
      expect((await q(`select id from converts`)).map((r) => r.id)).toEqual([U.convertA]);
      for (const t of ["lesson_progress", "action_logs", "reflections", "ai_messages", "ai_threads"]) {
        const rows = await q(`select distinct convert_id from ${t}`);
        expect(rows.map((r) => r.convert_id), t).toEqual([U.convertA]);
      }
    });
  });

  it("can't write rows for someone else", async () => {
    await expect(
      as(db, U.convertA, (q) =>
        q(`insert into lesson_progress (convert_id, lesson_id) values ($1, 'day-05')`, [U.convertB])),
    ).rejects.toThrow(/row-level security/);
    await as(db, U.convertA, async (q) => {
      const r = await q(`update lesson_progress set last_screen = 9 where convert_id = $1 returning *`, [U.convertB]);
      expect(r).toHaveLength(0);
    });
  });

  it("can't move themselves to another masjid or pick their own mentor", async () => {
    await expect(as(db, U.convertA, (q) => q(`update converts set masjid_id = $1`, [Y]))).rejects.toThrow(/permission denied/);
    await expect(as(db, U.convertA, (q) => q(`update converts set mentor_id = null`))).rejects.toThrow(/permission denied/);
    await as(db, U.convertA, async (q) => {
      expect(await q(`update converts set first_name = 'Keisha J' returning first_name`)).toHaveLength(1);
    });
  });

  it("can't read other converts' settings", async () => {
    await as(db, U.convertA, async (q) => {
      expect((await q(`select convert_id from convert_settings`)).map((r) => r.convert_id)).toEqual([U.convertA]);
    });
  });
});

describe("rule 2: staff see only their masjid's converts, only through the dashboard, only what's shared", () => {
  it("staff can't read the converts table or progress directly", async () => {
    await as(db, U.adminX, async (q) => {
      expect(await q(`select * from converts`)).toHaveLength(0);
      expect(await q(`select * from lesson_progress`)).toHaveLength(0);
      expect(await q(`select * from action_logs`)).toHaveLength(0);
      expect(await q(`select * from convert_settings`)).toHaveLength(0);
    });
  });

  it("the dashboard shows only their own masjid", async () => {
    const x = await as(db, U.adminX, (q) => q(`select convert_id from dashboard_converts order by convert_id`));
    expect(x.map((r) => r.convert_id)).toEqual([U.convertA, U.convertB, U.convertD]);
    const y = await as(db, U.adminY, (q) => q(`select convert_id from dashboard_converts`));
    expect(y.map((r) => r.convert_id)).toEqual([U.convertC]);
  });

  it("hides everything for a convert who chose not to share", async () => {
    const [d] = await as(db, U.adminX, (q) => q(`select * from dashboard_converts where convert_id = $1`, [U.convertD]));
    expect(d.share_progress).toBe(false);
    expect(d.first_name).toBeNull();
    expect(d.day_reached).toBeNull();
    expect(d.last_active_at).toBeNull();
  });

  it("shows progress for a sharing convert", async () => {
    const [a] = await as(db, U.adminX, (q) => q(`select * from dashboard_converts where convert_id = $1`, [U.convertA]));
    expect(a.first_name).toBe("Keisha J");
    expect(a.day_reached).toBe(2);
    expect(a.lessons_completed).toBe(2);
  });

  it("counts only 90-day lessons and calendar modules, not optional track lessons; any lesson counts as activity", async () => {
    await as(db, U.convertC, (q) =>
      q(
        `insert into lesson_progress (convert_id, lesson_id, completed_at) values
           ($1, 'ramadan-1', now() - interval '2 days'), ($1, 'welcome-back-1', now() - interval '2 days'),
           ($1, 'alphabet-01', now() - interval '1 day'), ($1, 'alphabet-12', now() - interval '1 day'),
           ($1, 'seerah-01', now() + interval '1 hour')`,
        [U.convertC],
      ),
    );
    const [c] = await as(db, U.adminY, (q) => q(`select * from dashboard_converts where convert_id = $1`, [U.convertC]));
    expect(c.lessons_completed).toBe(4); // day-01, day-02, ramadan-1, welcome-back-1
    expect(c.day_reached).toBe(2);
    // Being active is being active: the seerah lesson an hour from now is the latest activity.
    expect(new Date(c.last_active_at as string).getTime()).toBeGreaterThan(Date.now() + 30 * 60 * 1000);
  });

  it("the dashboard view keeps its security barrier and grants", async () => {
    const [v] = await db.query<{ reloptions: string[] }>(`select reloptions from pg_class where relname = 'dashboard_converts'`).then((r) => r.rows);
    expect(v.reloptions).toContain("security_barrier=true");
    const grants = await db.query<{ grantee: string; privilege_type: string }>(
      `select grantee, privilege_type from information_schema.role_table_grants
       where table_name = 'dashboard_converts' and grantee in ('anon', 'authenticated') order by 1, 2`,
    );
    expect(grants.rows).toEqual([{ grantee: "authenticated", privilege_type: "SELECT" }]);
  });

  it("shows action logs only for adults who shared them, never for minors", async () => {
    const rows = await as(db, U.adminX, (q) => q(`select distinct convert_id from dashboard_action_logs`));
    expect(rows.map((r) => r.convert_id)).toEqual([U.convertA]); // not B (minor), not D (not sharing)
    const [b] = await as(db, U.adminX, (q) => q(`select is_minor from dashboard_converts where convert_id = $1`, [U.convertB]));
    expect(b.is_minor).toBe(true);
  });

  it("converts and outsiders see nothing in the dashboard", async () => {
    expect(await as(db, U.convertA, (q) => q(`select * from dashboard_converts`))).toHaveLength(0);
    expect(await as(db, U.newUser, (q) => q(`select * from dashboard_converts`))).toHaveLength(0);
    await expect(as(db, null, (q) => q(`select * from dashboard_converts`))).rejects.toThrow(/permission denied/);
  });
});

describe("rule 3: no staff can read chats or unshared reflections", () => {
  it("no staff role reads AI chats, not even an admin", async () => {
    for (const s of [U.adminX, U.mentorX, U.leadX, U.adminY]) {
      expect(await as(db, s, (q) => q(`select * from ai_messages`))).toHaveLength(0);
      expect(await as(db, s, (q) => q(`select * from ai_threads`))).toHaveLength(0);
    }
  });

  it("unshared reflections stay private; a shared one reaches only the mentor", async () => {
    const mentor = await as(db, U.mentorX, (q) => q(`select convert_id, body_enc from reflections order by convert_id`));
    expect(mentor.map((r) => r.convert_id)).toEqual([U.convertA, U.convertB]);
    expect(mentor.every((r) => r.body_enc === "enc:shared")).toBe(true);
    expect(await as(db, U.adminX, (q) => q(`select * from reflections`))).toHaveLength(0);
  });

  it("a minor's shared reflection also reaches the safeguarding lead (two adults)", async () => {
    const lead = await as(db, U.leadX, (q) => q(`select convert_id from reflections`));
    expect(lead.map((r) => r.convert_id)).toEqual([U.convertB]);
  });
});

describe("rule 4: imam questions", () => {
  beforeAll(async () => {
    await as(db, U.convertA, (q) =>
      q(`insert into imam_questions (masjid_id, convert_id, body, anonymous, due_at) values ($1, $2, 'Anonymous question', true, now())`, [X, U.convertA]));
    await as(db, U.convertD, (q) =>
      q(`insert into imam_questions (masjid_id, convert_id, body, due_at) values ($1, $2, 'Named question', now())`, [X, U.convertD]));
    await as(db, U.convertB, (q) =>
      q(`insert into imam_questions (masjid_id, convert_id, body, route_to, due_at) values ($1, $2, 'For a sister', 'female_staff', now())`, [X, U.convertB]));
  });

  it("anonymous questions hide who asked", async () => {
    const rows = await as(db, U.adminX, (q) => q(`select * from imam_questions_inbox order by body`));
    const anon = rows.find((r) => r.body === "Anonymous question")!;
    expect(anon.convert_id).toBeNull();
    expect(anon.asker_name).toBeNull();
    const named = rows.find((r) => r.body === "Named question")!;
    expect(named.asker_name).toBe("Marcus");
  });

  it("female-staff questions reach only female staff", async () => {
    const admin = await as(db, U.adminX, (q) => q(`select body from imam_questions_inbox`));
    expect(admin.map((r) => r.body)).not.toContain("For a sister");
    const sister = await as(db, U.mentorX, (q) => q(`select body from imam_questions_inbox`));
    expect(sister.map((r) => r.body)).toContain("For a sister");
  });

  it("other masjids see nothing, and staff can't read the base table", async () => {
    expect(await as(db, U.adminY, (q) => q(`select * from imam_questions_inbox`))).toHaveLength(0);
    expect(await as(db, U.adminX, (q) => q(`select * from imam_questions`))).toHaveLength(0);
  });

  it("a convert can only ask their own masjid and can't write the answer", async () => {
    await expect(as(db, U.convertA, (q) =>
      q(`insert into imam_questions (masjid_id, convert_id, body, due_at) values ($1, $2, 'sneaky', now())`, [Y, U.convertA])),
    ).rejects.toThrow(/row-level security/);
    await expect(as(db, U.convertA, (q) => q(`update imam_questions set answer = 'self-answered'`))).rejects.toThrow(/permission denied/);
  });

  it("staff answer through the function, only for their own masjid", async () => {
    const [row] = await as(db, U.adminX, (q) => q(`select id from imam_questions_inbox where body = 'Anonymous question'`));
    await expect(as(db, U.adminY, (q) => q(`select answer_imam_question($1, 'hi')`, [row.id]))).rejects.toThrow(/not allowed/);
    await as(db, U.adminX, (q) => q(`select answer_imam_question($1, 'Wa alaykum salam, here is the answer')`, [row.id]));
    const mine = await as(db, U.convertA, (q) => q(`select answer, status from imam_questions`));
    expect(mine[0]).toMatchObject({ status: "answered", answer: "Wa alaykum salam, here is the answer" });
  });
});

describe("rule 5: an invite reveals the masjid's name and nothing else", () => {
  it("anyone with a valid code sees the name", async () => {
    expect(await as(db, null, (q) => q(`select * from invite_preview('join-x')`))).toEqual([{ masjid_name: "Masjid X" }]);
    expect(await as(db, null, (q) => q(`select * from invite_preview('old-x')`))).toHaveLength(0);
    expect(await as(db, null, (q) => q(`select * from invite_preview('nope')`))).toHaveLength(0);
  });

  it("anonymous users can't read any table", async () => {
    for (const t of ["masjids", "invites", "converts", "staff", "lesson_progress", "imam_questions"]) {
      await expect(as(db, null, (q) => q(`select * from ${t}`)), t).rejects.toThrow(/permission denied/);
    }
  });

  it("a signed-in stranger can't list invites or masjids", async () => {
    expect(await as(db, U.newUser, (q) => q(`select * from invites`))).toHaveLength(0);
    expect(await as(db, U.newUser, (q) => q(`select * from masjids`))).toHaveLength(0);
  });
});

describe("sign-up through an invite", () => {
  it("rejects under-13s and expired codes", async () => {
    await expect(as(db, U.kid, (q) =>
      q(`select redeem_invite('join-x', 'Kid', $1, 'America/Chicago', true, true)`, [thisYear - 11])),
    ).rejects.toThrow(/13 or older/);
    await expect(as(db, U.newUser, (q) =>
      q(`select redeem_invite('old-x', 'Late', $1, 'America/Chicago', true, true)`, [thisYear - 30])),
    ).rejects.toThrow(/not valid/);
  });

  it("creates the convert and their settings, with discreet mode on", async () => {
    const [r] = await as(db, U.newUser, (q) =>
      q(`select redeem_invite('join-x', ' Luis ', $1, 'America/Chicago', true, false) as m`, [thisYear - 22]));
    expect(r.m).toBe(X);
    const me = await as(db, U.newUser, (q) => q(`select first_name, masjid_id from converts`));
    expect(me).toEqual([{ first_name: "Luis", masjid_id: X }]);
    const [s] = await as(db, U.newUser, (q) => q(`select * from convert_settings`));
    expect(s).toMatchObject({ share_progress: true, share_logs: false, discreet_mode: true });
    // redeeming again is harmless
    const [again] = await as(db, U.newUser, (q) =>
      q(`select redeem_invite('join-x', 'Luis', $1, 'America/Chicago', true, false) as m`, [thisYear - 22]));
    expect(again.m).toBe(X);
  });

  it("a convert sees their masjid and their mentor's name, not other staff", async () => {
    const m = await as(db, U.convertA, (q) => q(`select name from masjids`));
    expect(m).toEqual([{ name: "Masjid X" }]);
    const s = await as(db, U.convertA, (q) => q(`select display_name from staff`));
    expect(s).toEqual([{ display_name: "Sr. Mentor" }]);
    expect(await as(db, U.convertD, (q) => q(`select * from staff`))).toHaveLength(0);
  });
});

describe("safety alerts go only to the person the convert chose", () => {
  it("mentor alert reaches the mentor, not the admin", async () => {
    await as(db, U.convertA, (q) => q(`insert into safety_alerts (convert_id, recipient) values ($1, 'mentor')`, [U.convertA]));
    expect(await as(db, U.mentorX, (q) => q(`select * from safety_alerts`))).toHaveLength(1);
    expect(await as(db, U.adminX, (q) => q(`select * from safety_alerts`))).toHaveLength(0);
  });
});

describe("practice mistakes are the convert's alone", () => {
  it("only the convert reads or writes their mistakes; staff and others see nothing", async () => {
    await as(db, U.convertA, async (q) => {
      await q(`insert into practice_mistakes (convert_id, lesson_id, ref) values ($1, 'day-03', 'screen:4')`, [U.convertA]);
      expect(await q(`select * from practice_mistakes`)).toHaveLength(1);
    });
    for (const who of [U.convertC, U.adminX, U.mentorX, U.leadX]) {
      const rows = await as(db, who, (q) => q(`select * from practice_mistakes`));
      expect(rows, String(who)).toHaveLength(0);
    }
    await expect(as(db, null, (q) => q(`select * from practice_mistakes`))).rejects.toThrow(/permission denied/);
    await expect(
      as(db, U.convertC, (q) => q(`insert into practice_mistakes (convert_id, lesson_id, ref) values ($1, 'day-03', 'check:0')`, [U.convertA])),
    ).rejects.toThrow();
  });

  it("rejects a malformed ref", async () => {
    await expect(
      as(db, U.convertA, (q) => q(`insert into practice_mistakes (convert_id, lesson_id, ref) values ($1, 'day-03', 'nope')`, [U.convertA])),
    ).rejects.toThrow();
  });
});

describe("rule 6: deleting the account deletes everything the convert owns", () => {
  it("cascades from auth.users", async () => {
    await as(db, U.convertC, (q) => q(`insert into practice_mistakes (convert_id, lesson_id, ref) values ($1, 'day-01', 'check:0')`, [U.convertC]));
    await db.query(`delete from auth.users where id = $1`, [U.convertC]);
    for (const t of ["converts", "convert_settings", "lesson_progress", "action_logs", "reflections", "ai_threads", "ai_messages", "practice_mistakes"]) {
      const col = t === "converts" ? "id" : "convert_id";
      const r = await db.query(`select count(*)::int as n from ${t} where ${col} = $1`, [U.convertC]);
      expect((r.rows[0] as { n: number }).n, t).toBe(0);
    }
  });
});
