# New Muslims Program: convert app

A mobile-first web app (installable to the home screen) that gives a new Muslim one 5-minute lesson a day for 90 days, an AI guide they can ask anything, and a private line to their imam. A masjid invites its converts and (in T5) sees their progress on a dashboard.

The curriculum is written and reviewed in the Obsidian vault (`Projects/Hidaya/Curriculum/`). This repo turns it into an app.

## How it works, in one page

```
Vault (Obsidian)                     This repo                         Phone
Lessons/*.md, Citation Bank,  --npm run content-->  content/*.json  -->  Next.js on Vercel  -->  convert
Glossary, Outline                  (compiled, committed)                 |
                                                                         +- Supabase: sign-in (email code),
                                                                         |  Postgres + privacy rules (RLS)
                                                                         +- Anthropic: AI guide + crisis check
                                                                         +- Web push / Resend: daily reminder
```

| Piece | Where | What to know |
|---|---|---|
| Lessons | `content/` (generated) | Never edit by hand. Edit the vault, then `npm run content` and commit. It runs the vault's `check_lessons.py` first and refuses to write if anything fails |
| Scripture text | `content/citations.json` | Pulled from the Qur'an and hadith datasets (`~/.cache/new-muslims-program`, downloaded by the vault's `cite.py`), never generated |
| What a convert sees | `lib/content/render.ts` | Picks the masjid's school variant, adds teen lines for under-18s, fills names, strips `[SCHOLAR]` tags |
| Which lesson is today's | `lib/schedule.ts` | Days 1–3 open at sign-up, then one a day; Ramadan/Eid/Hajj/holiday modules by date; welcome-back after 3+/14+ days away |
| Database + privacy | `supabase/migrations/` | 19 tables. Who can see what is enforced **in the database** (row-level security), so a bug in app code can't leak another masjid's data |
| AI guide | `lib/guide/` + `app/api/guide` | Crisis check (Haiku) → rules + lesson context + approved references → model → **output check** (every citation must be in the Citation Bank) → reply |
| Reminders | `app/api/cron/reminders` | Every 15 minutes; neutral wording in discreet mode |
| Screens | `app/(auth)` sign-up · `app/(convert)` Today, Path, Lesson, Ask, Settings · `components/lesson` the player |

### Key decisions (and why)
- **Lessons live in the repo, not a database.** The vault is the source of truth; a second copy in a CMS would drift. Each lesson has a `contentVersion` hash, and progress records which version a convert saw.
- **Privacy in the database.** The masjid sees converts only through the `dashboard_converts` view, which shows only what the convert agreed to share, and less for minors. Chats and reflections have no staff policy at all, and the app also encrypts them (`lib/crypto.ts`), so even a database leak doesn't expose them.
- **Email 6-digit code, not magic links.** On iPhone a magic link opens Safari, not the installed app.
- **The guide doesn't stream.** Every reply must pass the scripture check before the convert sees it; a half-streamed reply that then fails can't be taken back. Replies take a few seconds.
- **Cache Components is off** (`next.config.ts`). Every page depends on the signed-in user, so pages render per request; this keeps the code like most Next.js examples.
- **Birth year only.** Anyone who could still be 17 this year is treated as a minor (safer for safeguarding).

## Run it on your computer

```bash
npm install
cp .env.example .env.local      # fill it in (see "Accounts" below)
npm run dev                     # http://localhost:3000
```

Without any keys you can still open **http://localhost:3000/preview** to click through every lesson (`?madhab=none` for the school-neutral text, `&minor=1` for teen lines). Nothing is saved there.

### Accounts and first setup
1. **Supabase**: new project. In *SQL Editor*, run the two files in `supabase/migrations/` in order. In *Authentication → Email templates → Magic Link*, change the template so it sends the code, not a link: subject `Your sign-in code`, body `Your code is {{ .Token }}`. (Neutral on purpose: family may see the email.)
2. **Keys** into `.env.local`: Supabase URL, publishable key, service-role key; `openssl rand -base64 32` for `APP_ENCRYPTION_KEY` (**back it up**: lose it and stored notes/chats can't be read); Anthropic key; `npm run vapid` for push keys; Resend key; `openssl rand -hex 24` for `CRON_SECRET`.
3. **A masjid and its invite link**:
   ```bash
   npm run new-masjid -- --name "Demo Masjid" --slug demo --madhab hanafi --admin-email you@example.com --admin-name "Shayan" --jumuah "1:30 pm"
   ```
   It prints `/join/<code>`. Open that on your phone to sign up as a convert.
4. **Deploy** (T6): push to GitHub, import into Vercel, paste the same env vars, set `NEXT_PUBLIC_APP_URL`.
5. **Reminder schedule**: Vercel's free plan only runs cron jobs once a day, so use Supabase: *Integrations → Cron → new job*, every 15 minutes (`*/15 * * * *`), HTTP GET `https://<your-app>/api/cron/reminders` with header `Authorization: Bearer <CRON_SECRET>`.

## Tests

| Command | What it proves | Cost |
|---|---|---|
| `npm test` | Everything below except the eval | free |
| `npm run test:db` | The privacy rules, one test per rule (T3 §3.3), on a real Postgres engine in-process (PGlite) | free |
| `npx vitest run lib` | Scheduling scenarios, rendering every lesson both ways, the scripture output check with planted fake citations, encryption, reminders | free |
| `npm run eval -- --dry` | The 151 red-team cases are well-formed | free |
| `npm run eval -- --model claude-sonnet-5-5` | The guide on 151 hard questions (every rule in Spec §6.2 and scholar questions Q1–Q35), graded by a judge model | **~$3–8 per model** |
| `npm run typecheck`, `npm run lint`, `npm run build` | The code compiles and builds | free |

**Run the eval before any real convert uses the guide, and after any change to `lib/guide/prompt.ts`.** Compare `claude-sonnet-5-5` and `claude-haiku-4-5`; set `GUIDE_MODEL` to the winner.

## Changing things yourself

- **A lesson's wording**: edit it in the vault, `npm run content`, commit, push. Vercel redeploys.
- **Optional tracks (alphabet, seerah)**: files are `Lessons/Alphabet/alphabet-NN.md` and `Lessons/Seerah/seerah-NN.md` (`track:` + `order:` in the frontmatter). Nothing is hard-coded: `npm run content` counts each track's unbroken run from 01 into `lib/content/tracks.generated.ts` and `content/index.json`, which drive access and the Practice cards (a track with 0 lessons has no card). A gap (01, 03 without 02) only warns and hides lessons after it; `STRICT_TRACKS=1 npm run content` makes it an error, so use that before a release. `status: stub` lessons are skipped unless `INCLUDE_STUBS=1`.
- **The guide's behavior**: `lib/guide/prompt.ts` (`GUIDE_RULES`). Bump `GUIDE_RULES_VERSION`, then run the eval.
- **Which model**: the `GUIDE_MODEL` env var. No code change.
- **Daily guide limit**: `GUIDE_DAILY_LIMIT` (default 40 messages per convert per day).
- **A new table or column**: add a new numbered file in `supabase/migrations/`, add a test in `supabase/tests/rls.test.ts` if it holds personal data, run it in Supabase's SQL editor.
- **Pacing rules**: `lib/schedule.ts`, with a test in `lib/schedule.test.ts` for the new case first.

## Not built yet
- The masjid dashboard (T5). The database side is ready: `dashboard_converts`, `dashboard_action_logs`, `imam_questions_inbox`, `answer_imam_question`, `assign_mentor`.
- Audio for phrase screens (T6 records them; every phrase has an `audio_id`).
- Illustrations (`visual` briefs exist in a few lessons).
- App PIN. The app is Hidaya; in discreet mode its home-screen name, tab title and reminders say "Daily" (lib/brand.ts).
- Hiding the men's or women's version of a position (lessons currently name both).

## Demo mode (for scholars and testers) — turn it off before go-to-market

`/demo` lets anyone try Hidaya with no invite link and no email code: it creates a throwaway account in a
"Demo Masjid" for the school they pick (`npm run setup-demo -- --admin-email you@example.com` creates the five
demo masjids once) and **unlocks all 90 days and every module** for that account. Real converts are unaffected.

**Turning off the demo (required before distribution):** set `DEMO_ENABLED=0` in Vercel and redeploy. That hides
"Try the demo" and blocks `/demo`. Then delete the demo accounts (users whose email starts with `demo-` and ends
`@example.com`) and, if you like, the `demo-*` masjids.

## Staying live

The Vercel deployment stays up on its own. A daily cron (`vercel.json` → `/api/keepalive`) touches the database so
the free Supabase project isn't paused for inactivity. The AI guide needs credit on the Anthropic account.
