---
created: 2026-10-07
project: "[[Hidaya]]"
task: T5
related: ["[[Hidaya]]", "[[T3 - Stack and Data Model]]", "[[T4 - Build Plan]]", "[[Distribution - Next Steps]]"]
updated: 2026-10-07
---
# T5 handoff: the organization + masjid dashboard

The brief for the next session. Read the hub first ([[Hidaya]]), then this note.

> [!important] Updated 2026-10-07: market direction changed, T5 on hold
> Working direction (to be validated in Shayan's outreach): **converts get Hidaya free** (later on the App Store, no ads, donations OK) and **organizations pay** (ICNA Embrace, Ta'leef, WhyIslam, New Muslim Academy, Islamic Seminary of America and similar; masjids too, as a one-chapter org). **Governments later.** Reasoning and numbers: [[Distribution - Next Steps#Market direction (2026-10-07)]].
> So T5 builds an **organization dashboard with chapters (masjids) under it**, not a single-masjid dashboard. **T5 waits** until Shayan has talked to mentors and sheikhs about the product and how to market it; their answers may change the scope below.

## Where things stand
- **The convert app (T4) is done and live**: Hidaya at https://your-app.vercel.app, all 104 lessons in format 2, Duolingo-style, with a **demo mode** at `/demo` for scholars and testers (all lessons unlocked; turn off before go-to-market). Code: `~/Projects/new-muslims-program` (Next.js 16 + Supabase + Vercel). 101 unit tests + 26 privacy tests pass.
- **The database side of the dashboard already exists** (T4 built it): the `dashboard_converts` view, `imam_questions_inbox`, `staff`, `invites`, `safety_alerts`, `staff_audit_log`, and RLS rules that let staff see only their own masjid and only what each convert chose to share ([[T3 - Stack and Data Model]] §3.2–3.3). The privacy tests already cover them.
- Masjids: **Demo Masjid** (Shayan is admin; invite `/join/a1b2c3d4e5f6`) and five **Demo Masjids** (`demo-hanafi`, `demo-shafii`, `demo-maliki`, `demo-hanbali`, `demo-none`; Shayan is admin of each).

## Why it matters
Organizations (and masjids) are the customer: they pay, converts use it free. The dashboard is what an org or masjid sees and buys, so it's the demo that sells Hidaya ([[Distribution - Next Steps]]). The masjid stays where the convert shows up (Embrace chapters meet in masjids), so chapter-level features stay even though orgs are the buyer. Build prompt milestone 5: *"Admin login, invite link, convert list with progress and last-active date. → Checkpoint: demo with one test masjid and 3 test converts."*

## Scope
**Must have**
1. **Staff sign-in and roles** (admin, imam, mentor), reusing the email-code sign-in. Staff land on `/masjid` instead of the convert app.
2. **Converts list**: name, day reached, last active, logged milestones (prayed first prayer, did first wudu, …), only as each convert shared it; minors show progress and last active only. Flags for "hasn't opened the app in 3+ / 14+ days" so a mentor knows who to check on.
3. **Invite link**: show it, copy it, show it as a QR code to put on a flyer, revoke and replace it.
4. **Imam question queue** (Spec §6.2 rule 2): open questions with due dates, reply, close; anonymous questions hide who asked; questions routed to female staff go only to them. The convert sees the reply in the app (already built on the convert side).
5. **Safety alerts**: alerts a convert sent with the in-app consent button go to their mentor or to female staff; staff acknowledge them. Show them first, clearly.
6. **Masjid settings**: name, school of fiqh (changes what every convert at that masjid sees), Jumu'ah time, imam reply time, and the announced dates for Ramadan and Eid.
7. **Mentors**: add staff by email, assign a mentor to a convert (the mentor's name shows in lessons), mark female staff.
8. **Organization layer** (added 2026-10-07): an `organizations` table; each masjid/chapter belongs to one org (`masjids.org_id`; a standalone masjid is an org with one chapter). New role **org admin**: sees every chapter's totals (converts joined, active this week, day reached, open questions, unacknowledged alerts), adds chapters, sets the org-wide default school and branding name. Chapter staff keep everything in 1–7 for their own chapter only. Org admins do **not** see individual converts by default (decision 4).

**Should have**
- **A dashboard demo** to match the convert demo: "See the masjid dashboard" opens a demo masjid's dashboard with no email, seeded with **3 test converts** at different points (Day 4, Day 23 with a question waiting, Day 61 inactive for 5 days). This is also checkpoint 5. It sits behind the same `DEMO_ENABLED` switch.
- An audit trail: who viewed which convert (the `staff_audit_log` table exists).

- **Dashboard demo for an org**: a demo org with 2 chapters, so the pitch to ICNA-type orgs shows the org view.

**Not in T5**: billing, white-label branding beyond the org's display name, analytics beyond the lists and totals, a native app.

**For the free consumer path (T5 or T6, decide when building):** converts who join with no org or masjid ("solo" converts). They need a default school (decision 5), the imam question queue off or sent to a volunteer scholar, crisis handling that points to hotlines (no one to alert), a daily cap on AI guide messages to control cost, and a "connect to a masjid near you" prompt. Gate public launch on scholar sign-off of the curriculum.

## Design
Same Hidaya design system as the convert app (Iznik palette, Young Serif + Nunito, chunky buttons), but laid out for a laptop first, since imams and admins work at a desk, and still usable on a phone. A calm, information-first layout: alerts and waiting questions at the top, then the converts list. Never show chat content or unshared reflections (the database blocks it anyway).

## Constraints and guardrails
- **Privacy is enforced in the database.** Staff pages query only the views; never use the service-role client for anything a staff request can steer.
- **Sign-in codes only reach Shayan's own email** until a Resend domain is bought (costs money: ask first). The dashboard demo needs no email.
- **Ask before** spending money, sending anything to real people, or changing the live database beyond seeding demo data.
- Deploys: Shayan runs `npx vercel deploy --prod --yes` (the auto-mode classifier blocks Claude from production deploys); if it says "Not authorized", `npx vercel login` first.

## Verification plan
- **Privacy**: extend the PGlite RLS tests for every staff page's query: masjid A's staff can't see masjid B's converts; org X's admin can't see org Y's chapters; an org admin gets totals only, never a convert row (unless decision 4 changes); a minor's logs stay hidden; an anonymous question never reveals the convert; female-staff routing; no staff role reaches chats or unshared reflections.
- **Unit tests** for list logic (inactivity flags, day reached, sorting).
- **End to end** in headless Chrome: staff sign in (demo) → see the 3 seeded converts → answer the waiting question → the convert sees the answer in the app → change the masjid's school → that convert's Day 3 changes.
- Typecheck, lint, build clean; the lesson checker still at 0 errors.
- **Checkpoint 5**: Shayan opens the dashboard demo on his laptop and phone and approves it.

## Decisions to confirm with Shayan at the start (proposed defaults)
1. Dashboard demo seeded with 3 fake converts (default: yes).
2. Mentors can see the converts assigned to them, and admins see all (default: yes; mentors see only their own).
3. Inactivity flag thresholds of 3 and 14 days, matching the welcome-back lessons (default: yes).
4. Org admins see totals per chapter, not individual converts (default: totals only; converts' consent is given to their masjid, not the org).
5. Default school for solo converts with no masjid (default: Hanafi, matching the pilot masjid, shown as "general guidance"; ask scholars in outreach).
6. Any scope changes from Shayan's mentor/sheikh outreach (read the outreach notes in `Outreach/` first).

## Start the next session with
> *"Read Projects/Hidaya/Hidaya.md, then T5 Handoff.md, and start T5 (the organization + masjid dashboard)."*

Only once Shayan says he's ready to build (after outreach).

## Running in parallel (not part of T5)
- Shayan sends the [[Scholar Review Packet]] and the demo link to scholars and testers. Their answers go into a later session that updates the lessons (open questions also in [[T4 - Checkpoint 4 Feedback]]).
- Still open from T4: the red-team eval of the AI guide (needs Shayan's OK, ~$6–16), the reminder cron, a Resend domain (costs money).
