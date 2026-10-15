# Hidaya: a 90-day path for new Muslims

> **Status: paused (October 2026).** This is an archive of a student startup. It is not maintained and has no running public instance. Issues and pull requests may not get answered.

Hidaya is a mobile-first web app (installable to the home screen) that gives someone who just converted to Islam **one 5-minute lesson a day for 90 days**, plus an AI guide that answers their questions and a private line to their imam. The idea: converts are free; masjids and organizations pay to give the program to their new Muslims and see (consented) progress on a dashboard.

It was built by Shayan Iqbal, a student at UT Austin, with Claude Code as the main engineering partner.

## What's in this repo

| Folder | What it is |
|---|---|
| `app/`, `components/`, `lib/` | The Next.js 16 app: sign-up with an email code, Today / Path / Lesson / Ask / Practice screens, the lesson player, streaks and XP |
| `content/` | The compiled curriculum (JSON): 90 daily lessons, 14 calendar modules (Ramadan, Eid, Hajj, holidays), Arabic alphabet lessons, the citation bank and the glossary |
| `supabase/` | Database migrations with row-level security, plus RLS tests that run on PGlite |
| `evals/` | Red-team eval for the AI guide (crisis handling, refusing to make up scripture, staying in scope) |
| `notes/` | The planning and research behind the product. These are **Obsidian notes**, so `[[wikilinks]]` point to other notes in the same folder |
| `docs/` | [`APP-SETUP.md`](docs/APP-SETUP.md): architecture, key decisions, how to run it, deploy it and edit lessons. `superpowers/`: feature specs and build plans |

### The notes, in reading order
1. `notes/Hidaya - Build Prompt.md`: the spec, milestones (T1–T6) and guardrails
2. `notes/Positioning - Pain-Point Curriculum.md`: why this curriculum is different (built around the problems converts actually hit)
3. `notes/Curriculum/Research Report.md`: T1, curriculum research across 86 sources
4. `notes/Curriculum/Curriculum Spec.md` and `Outline - 90 Days.md`: T2, the curriculum design
5. `notes/T3 - Stack and Data Model.md` → `T4 - Build Plan.md` → `T4 - Checkpoint 4 Feedback.md`: how the app was built and redesigned to be Duolingo-like
6. `notes/Gamification Research.md`, `notes/Distribution - Next Steps.md`, `notes/T5 Handoff.md`: where it was heading next (the masjid dashboard)

## Run it locally

```bash
npm install
npm run dev        # http://localhost:3000/preview  (click through every lesson, no keys needed)
npm test
```

Full setup with Supabase, Anthropic, web push and email is in [`docs/APP-SETUP.md`](docs/APP-SETUP.md).

## Important: religious content

The lessons were researched from published new-Muslim guides and checked against the Qur'an and hadith collections. Every verse and hadith the app shows comes from `content/citations.json`, which was pulled from those datasets and not written by an AI. **They have not had a final review by a qualified scholar.** Items waiting for that review are tagged `[SCHOLAR]` in the notes. This is not a fatwa or a substitute for a teacher. If you are a new Muslim, learn with your local imam.

## Safety and privacy, if you run this yourself

This app is built for people who may be vulnerable (new converts, sometimes teenagers, sometimes hiding their conversion from family). If you deploy it:
- **Never commit `.env.local`.** It's gitignored. Keep the service-role key and `APP_ENCRYPTION_KEY` server-side only, and back up the encryption key: without it, stored reflections and chats can't be read.
- **Set a monthly spend limit on your Anthropic key** and keep the rate limit in `app/api/guide/route.ts`. The AI guide calls a paid API on every message.
- **Keep the crisis check on.** Every guide message is screened first, and messages about self-harm or abuse get hotline information instead of a normal reply. Hotline numbers are US-only; localize them for other countries.
- **Keep row-level security on.** Run `npm run test:db` after any migration change.
- **Keep the neutral naming.** Reminder emails and push notifications use discreet wording on purpose (family may see the screen).
- The demo sign-up route (`/demo`) skips invites and email codes. Turn it off before real converts use your deployment.

See [`SECURITY.md`](SECURITY.md) to report a vulnerability.

## License

No license has been chosen, so all rights are reserved by default. You can read the code and learn from it. Ask before reusing it or the curriculum. Scripture translations and cited sources belong to their respective owners.
