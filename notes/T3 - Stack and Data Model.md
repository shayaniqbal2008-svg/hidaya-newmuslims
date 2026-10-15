---
created: 2026-10-07
project: "[[Hidaya]]"
task: T3
status: decided 2026-10-07 (checkpoint 3 passed)
aliases: [T3, Stack decision]
related: ["[[Hidaya]]", "[[Curriculum Spec]]", "[[Hidaya - Build Prompt]]"]
---
# T3 · Stack and data model

> [!success] Decided 2026-10-07 (Shayan)
> - **Stack:** A. Next.js + Supabase on Vercel
> - **Sign-up:** email 6-digit code via the masjid's invite link
> - **Reminders:** web push + email fallback
> - **AI guide model:** decide after the red-team eval. T4 builds the guide with the model behind a setting (`GUIDE_MODEL`); the ≥150-question red-team set runs on both Sonnet 5.5 and Haiku 4.5, and the results pick. The crisis check uses Haiku 4.5 either way.

> [!info] What this note is
> T3 from the [[Hidaya - Build Prompt|build prompt]]: 2–3 stack options with cost and difficulty, a recommendation, and a data model that covers everything [[Curriculum Spec]] asks for. **Shayan picks** the stack, sign-up method, reminder channel and AI model (§6). Then T4 starts building in `~/Projects/new-muslims-program`.

## 1. What the stack has to do
Pulled from the build prompt and [[Curriculum Spec]]:
- **Two user types**: masjid staff (admin, imam, mentor) and converts. A masjid sees **only its own** converts, and only what each convert agreed to share (§6.4).
- **Lessons**: 104 lesson files with 16 screen types, madhab variant blocks, teen lines, placeholders (`{{masjid.name}}`…), Days 1–3 unlocking together, then one per day, calendar modules by date, welcome-back after 3+ and 14+ missed days, spaced review from the `Check` items.
- **Daily reminder** with neutral wording (discreet mode).
- **AI guide**: chat, role-play, grounded in the [[Citation Bank]], a separate crisis check, an output check that rejects scripture not in the bank, an "Ask my imam" queue, no staff access to chats.
- **Privacy**: encrypted chats and reflections, export and delete, minors get less shown on the dashboard.
- **Simple for Shayan to own**: he can code but isn't a senior engineer. It needs good docs, few moving parts, and $0 for the pilot.

**Checked on 2026-10-07:** a throwaway script compiled all 104 lesson files into app-ready JSON with **0 errors** (670 KB total: 401 learn screens, 75 scenarios, 22 role-plays, 49 madhab-variant screens, 220 review questions). So the lessons can live in the code repo as data, and **no CMS is needed**. The vault stays the source of truth. Edits made after scholar review go into the markdown files, and a build step recompiles them.

## 2. Three options

| | **A. Next.js + Supabase** (recommended) | **B. React PWA + Firebase** | **C. Django + Postgres on Render** |
|---|---|---|---|
| What it is | One TypeScript web app on Vercel. Supabase provides Postgres, auth and storage | Static React app with Firebase Auth, Firestore (NoSQL), Cloud Functions and push messaging | A Python monolith with server-rendered pages (and some React for lessons) on Render, plus managed Postgres |
| Difficulty for Shayan | **Medium.** One language (TS). Most security lives in the database as row-level security (RLS) rules, which take some learning | **Medium.** Simple at first. Security rules and dashboard queries get awkward because Firestore doesn't do joins well | **Medium–hard.** Python is familiar and Django admin gives a free back office. But the interactive lesson player still needs a JS front end, so it's two worlds to maintain |
| "A masjid only sees its own converts" | **Enforced in Postgres (RLS)** and testable with SQL. Even buggy app code can't leak another masjid's data | Firestore security rules. Workable, but per-field consent and minors' rules get verbose | Enforced in app code (querysets). Easy to get right, and easy to forget in one view |
| Dashboard queries (progress, last active) | SQL views. Easy | Needs denormalized counters kept in sync by functions | SQL/ORM. Easy |
| Auth (email code, Google) | Built in | Built in (email *link*, not code, by default) | django-allauth. More setup |
| Reminders | Web push + email via a cron job (Vercel or Supabase) | FCM push is very good. Email needs a separate service | Cron + web push library + email |
| AI guide | Next.js server route calls the Anthropic SDK and streams the reply | Cloud Function calls the SDK | Django view calls the SDK |
| Pilot cost | **$0** (free tiers) + AI usage | **$0** (but functions need the Blaze plan with a card on file) + AI | ~$7–14/mo (Render's free Postgres expires) + AI |
| At ~10 masjids | ~$45/mo (Supabase Pro $25 + Vercel Pro $20) + AI | ~$10–30/mo pay-as-you-go + AI | ~$25–50/mo + AI |
| Lock-in | Low: it's plain Postgres and can move anywhere | High: Firestore data model is Firebase-only | Low |
| Main risk | Supabase free projects pause after ~7 days with no activity (fine once the pilot is live). Vercel Hobby is for non-commercial use, so move to Pro ($20/mo) when a masjid pays | NoSQL makes the dashboard and privacy rules harder as features grow | Most code for the same result; slowest to a working pilot |

**Recommendation: A (Next.js + Supabase on Vercel).** The hardest requirement is privacy: only the convert's own masjid sees them, only what they agreed to share, and less for minors. Postgres row-level security enforces that in one place, in the database, and we can write tests that prove it (the build prompt asks for exactly these tests). It's also the most common stack for a project like this, so docs and examples are everywhere, Cursor and Claude know it well, and it costs nothing until a masjid pays. Free-tier limits and prices above are from memory as of mid-2026. Recheck them when signing up.

## 3. Data model (option A; most of it carries over to C)

### 3.1 Content: in the repo, not the database
- `content/lessons/*.json` is compiled from the vault's `Lessons/` by `scripts/compile-lessons` (a port of the prototype, plus `check_lessons.py` running in CI). Each lesson: `id` (`day-01`, `ramadan-3`), meta (frontmatter), `screens[]`, `check[]`, `aiContext`, `madhabNote`, `sources`, `scholarFlags`, and a **`contentVersion`** (hash).
- `content/citations.json`: every [[Citation Bank]] entry with the **full Arabic and English text pulled from the source datasets** (the `cite.py` cache), never generated. The AI guide retrieves from this, and the output check validates references against it.
- `content/glossary.json`: tap-for-meaning popups.
- **Rendering rules (app code, not data):** choose the variant for `masjid.madhab` (else `default`); show `teen` lines when the convert is under 18; fill placeholders, passing `first_name` in as quoted data; strip every `[SCHOLAR: Qn]` marker; show the "Draft, pending scholar review" badge based on `status`.

Why: the lessons are written and reviewed in Obsidian. Copying them into a database would create two sources of truth. A version hash records exactly which text each convert saw, which matters once scholars start changing lessons.

### 3.2 Database tables

**Masjids and staff**
| Table | Key columns |
|---|---|
| `masjids` | id, name, slug, madhab (`hanafi`/`maliki`/`shafii`/`hanbali`/null→default), jumuah_time, timezone, imam_response_hours (default 48), has_female_staff, created_at |
| `masjid_dates` | masjid_id, event (`ramadan_start`, `eid_fitr`, `dhul_hijjah_1`, `arafah`, `eid_adha`), date. These are the masjid's announced dates; a calculated calendar is the fallback |
| `staff` | user_id → auth.users, masjid_id, role (`admin`/`imam`/`mentor`), display_name, gender, safeguarding_vetted (bool), active |
| `invites` | masjid_id, code (random, in the link), created_by, expires_at, max_uses, uses, revoked |

**Converts**
| Table | Key columns |
|---|---|
| `converts` | user_id → auth.users, masjid_id, first_name, birth_year (**is_minor computed**), gender (optional, to hide the variant that doesn't apply), shahada_date, program_start_date, timezone, mentor_id → staff (nullable) |
| `convert_settings` | convert_id, share_progress (bool, chosen at sign-up), share_logs (bool), discreet_mode (default **true**), neutral_app_name (bool), reminder_time, reminder_channel (`push`/`email`/`both`/`none`), quick_exit_url |
| `push_subscriptions` | convert_id, endpoint, keys, user_agent, created_at |

**Progress**
| Table | Key columns |
|---|---|
| `lesson_progress` | convert_id, lesson_id, content_version, unlocked_at, started_at, completed_at, last_screen. Unique (convert_id, lesson_id) |
| `screen_responses` | convert_id, lesson_id, screen_n, response jsonb, created_at. Only for screens that need it later (e.g. a `practice` with `carry_forward`). Quiz answers just feed review |
| `review_items` | convert_id, lesson_id, check_index, due_at, interval_days, ease, last_result. Spaced review: 1–2 items added to each lesson's end |
| `action_logs` | convert_id, log_key (`prayed_first_prayer`, `attended_eid_prayer`, … 17 keys used in the lessons), lesson_id, logged_at |
| `carry_forward_items` | convert_id, lesson_id, step_text, active. Day 89's plan, reminded after Day 90 |

**Private content** (encrypted by the app before storage; RLS lets only the convert read it)
| Table | Key columns |
|---|---|
| `reflections` | convert_id, lesson_id, screen_n, body_enc, resurface_at (from `resurface_after_days`), shared_with_mentor_at (null unless the convert taps share) |
| `ai_threads` / `ai_messages` | convert_id, lesson_id (context), mode (`chat`/`roleplay`); messages: role, body_enc, citations jsonb, flagged (bool), created_at |
| `ai_feedback` | convert_id, exchange (copied only when the convert opts in: "send this exchange to improve the guide"), helpful (bool), note |

**Masjid-facing, sent on purpose**
| Table | Key columns |
|---|---|
| `imam_questions` | masjid_id, convert_id, body (exactly the text the convert confirmed), anonymous (bool), route_to (`imam`/`female_staff`), status (`open`/`answered`/`closed`), due_at, answer, answered_by, answered_at |
| `safety_alerts` | convert_id, recipient (`mentor`/`female_staff`), created **only by the in-app consent button**, status, acknowledged_by. Crisis resources are shown regardless; nothing goes to the imam queue only |
| `staff_audit_log` | staff_id, action, target_convert_id, at. Who viewed what |

### 3.3 Who can see what (RLS rules, each one a test)
1. A convert reads and writes only rows where `convert_id = their id`.
2. Staff read converts only in **their own** masjid, and only through the view `dashboard_converts`, which returns:
   - name, day reached, last active, `program_start_date`: only if `share_progress`
   - `action_logs`: only if `share_logs` **and not a minor**
   - for minors: progress and last active only
3. **No staff role can read** `ai_threads`, `ai_messages` or unshared `reflections`, not even an admin. A reflection shared with a mentor is visible to that mentor (two staff for a minor).
4. `imam_questions`: staff in that masjid see the body. If `anonymous`, the view hides the convert's identity, but the reply still reaches the convert.
5. Invites: anyone holding a valid code can read the masjid's name (to show "Join Demo Masjid"). Nothing else.
6. Delete account → cascade-delete everything that convert owns. Export → one JSON download (decrypted for them).

### 3.4 Logic that lives in code
- **Today's lesson:** Days 1–3 unlock at sign-up, then one more per calendar day in the convert's timezone. A calendar module takes that day's slot, or shows as a side card during Days 1–7. Joined during Ramadan → `ramadan-3` shows on Day 1. Welcome-back modules after 3+ and 14+ days with no activity. A pure function with unit tests over a list of date scenarios.
- **Reminders:** a cron job every 15 minutes finds converts whose reminder time has passed and who haven't opened today's lesson, then sends neutral text ("Time for today's lesson"). Push first; email if there's no push subscription.
- **AI guide pipeline** (server route):
  1. Crisis check (Haiku, or a cheap model) on every convert message. A hit shows crisis resources and the consent button and stops the teaching reply.
  2. Build the prompt: global rules (Spec §6.2) + this lesson's `AI guide context` + the convert's profile **as quoted data** + Citation Bank entries retrieved by the lesson's cited references and a keyword search.
  3. Call the model and stream the reply.
  4. Output check: every `[Q x:y]` or hadith reference must be in `citations.json`, and "Allah says" or "the Prophet said" needs an approved reference. Otherwise regenerate once, or fall back to "I'll route this to your imam."
  5. "Ask my imam" shows the exact text for the convert to confirm before it's inserted.
- **Red-team set:** ≥150 questions (Spec §6.2 rule 15) run as an automated eval before launch and after any prompt change.

## 4. Sign-up method

| Option | Good | Bad |
|---|---|---|
| **Email 6-digit code** (recommended) | Free; no password; works inside an installed home-screen app; nothing to forget | Needs an email address the convert can check privately |
| Email magic link | Familiar | On iPhone the link opens Safari, **not** the installed app, so the login lands in the wrong place. A known PWA problem |
| Google sign-in | One tap | Shared family Google accounts are common, which is a privacy risk for converts who haven't told anyone. Fine to add later as an option |
| Phone + SMS code | Everyone has a phone | Costs money per text, and texts show on the lock screen |

**Recommendation:** email code, joined through the masjid's invite link (`/join/<code>`). The email's sender name and subject are neutral ("Your sign-in code"). Google can be added later as a second option.

## 5. Daily reminder channel

| Option | Cost | Notes |
|---|---|---|
| **Web push + email fallback** (recommended) | $0 (email: Resend free tier, ~3,000/mo) | Push on iPhone only works after "Add to Home Screen" (iOS 16.4+), so onboarding walks them through it. Email covers anyone who skips that |
| Email only | $0 | Simplest; easy to ignore |
| SMS | ~1¢ a text + US carrier registration fees and wait | Highest open rate. **Costs money: Shayan's call**, later |

All reminder text is neutral by default (discreet mode, Spec §6.4).

## 6. AI guide model
Prices per million tokens (Anthropic, Sept 2026): **Claude Haiku 4.5** $1 in / $5 out · **Claude Sonnet 5.5** $2 in / $10 out. Prompt caching cuts repeated input (the rules and lesson context) to about a tenth.

Rough pilot estimate: 20 active converts × 5 messages a day × 30 days = 3,000 messages a month at ~6k input / 250 output tokens each, with caching → **~$10–20/mo on Sonnet 5.5, ~$5–10 on Haiku 4.5.** The crisis check on Haiku adds ~$3.

**Recommendation: Sonnet 5.5 for the guide, Haiku 4.5 for the crisis check.** The build prompt said "a cheap model such as Haiku". But this guide answers religious questions for vulnerable new converts under 16 rules, including "never invent a hadith", and the stronger model follows rules like that more reliably for about $10 more a month. The red-team set will show whether Haiku is good enough. If it is, switch and save. Anthropic doesn't train on API data by default. Zero data retention is a separate agreement we can request later.

## 7. Repo layout (T4 will create it)
```
~/Projects/new-muslims-program
  app/(convert)/…        today, lesson player, progress, guide, settings
  app/(masjid)/…         dashboard, converts, questions, invite
  app/api/guide/…        AI guide route
  content/               compiled lessons, citations, glossary (generated)
  scripts/compile-lessons.ts   vault → content/ (+ runs check_lessons.py)
  supabase/migrations/   tables + RLS
  supabase/tests/        RLS tests (one per rule in §3.3)
  evals/red-team/        ≥150 guide questions + expected behavior
  README.md              how it works, how to change it
```

## 8. Verification plan (T3 → T5)
- **Data model vs spec:** every requirement in §1 maps to a table, rule or function above (checked by hand on 2026-10-07; T4 re-checks as it builds).
- **Content:** CI recompiles the lessons and runs `check_lessons.py`. The build fails on any error.
- **Privacy:** RLS tests for each rule in §3.3 (convert A can't read convert B; masjid X can't read masjid Y's converts; no staff can read chats; a minor's logs are hidden; anonymous questions hide identity).
- **Scheduling:** unit tests for the today's-lesson function (Days 1–3 together, module collisions, Ramadan join, welcome-back gaps, timezones).
- **AI guide:** the red-team eval passes before any real convert uses it; the output check is unit-tested with planted fake citations.
- **End to end:** sign up on a real phone with an invite link and finish Day 1 (checkpoint 4); a demo masjid with 3 test converts (checkpoint 5).
- **Second opinion:** a fresh reviewer agent critiques code + curriculum together before the pilot (build prompt).

## 9. What Shayan needs to do after picking
Create free accounts (no card needed for A): GitHub, Supabase, Vercel, Resend, and an Anthropic API key with a monthly spend limit set (e.g. $25). Keys go in `.env.local`, never in the vault or the repo.
