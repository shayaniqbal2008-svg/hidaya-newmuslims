---
created: 2026-10-05
project: "[[Hidaya]]"
status: draft
---
**Goal:** Ship a mobile-first program for new Muslims within a week. The curriculum comes from in-depth research and scholars review it. Converts use the app daily (priority #1) and masjids see their progress on a dashboard (priority #2). The pilot starts at the pilot masjid and is aimed at a masjid committing to buy.

**Decisions you'll own:** program length, theological and madhab stance, which sources count as authoritative, stack, sign-up method, reminder channel, and final approval of every outreach message.

```
## Context
I'm Shayan, a first-year at UT Austin (McCombs) building a startup: a structured program for new Muslims (converts). Read these vault notes first:
- ~/Obsidian/Second Brain/Projects/Hidaya/Hidaya.md (hub + task list)
- ~/Obsidian/Second Brain/Projects/Hidaya/Research/Research - Hidaya.md (problem research)

The problem: there's no standardized intro curriculum for converts in the US. U.S. mosques report roughly 30,000 conversions a year (US Mosque Survey 2020), and in Yaqeen's 2025 survey of 618 converts, 23% said doubts had made them consider leaving and 40% felt lonely at Ramadan or Eid (corrected 2026-10-05; see [[Research Report]] §7). Convert care at most masjids is a list of teachers' phone numbers and a monthly potluck. Masjids are the paying customer and new Muslims are the users.

the reviewing imam (Demo Masjid, Austin) mentioned an online book written a few years ago as a one-shot guide for new Muslims, but I don't know its title. I've reached out to Sh. Abdullah Oduro (through his son) about his new Muslims program, and I'm talking to Sh. Mikaeel Smith, Yasir Qadhi and Br Moneeb. I can code but I'm not a senior engineer, so prefer simple, well-documented, scalable tools.

## Goal
This week: get a working product in front of a few real converts through a pilot at the pilot masjid. That means a daily curriculum on a mobile-first web app for converts (top priority), plus a dashboard where a masjid sees its converts' progress (second priority).
North star: product–market fit. Scholars approve and like the curriculum, and a real masjid is interested in buying or actually buys. Everything this week should move toward that.

## Done when
- The curriculum is built from in-depth research, every lesson's sources are cited, and it's mapped day by day
- A convert can open a link, sign up, and finish Day 1 on their phone without help
- Converts get a daily reminder to do that day's lesson
- A masjid admin can log in and see who signed up and how far each person has gotten
- the reviewing imam and at least one other scholar have reviewed the curriculum, and their feedback is logged
- I have a pilot kit ready to show a masjid, and I can explain how every part works

Before you start, outline precisely the evaluation criteria you'll use to ensure a high-quality final product, building on this list, and wait for my OK.

## Scope
- In: curriculum research and design; convert app (sign up via a masjid invite link, daily lesson, progress, reminders); masjid dashboard (admin login, convert list, progress, invite link); pilot kit
- Out (not in v1): payments and billing, native iOS/Android apps, mentor-matching algorithms, community or chat features, multiple languages

## Reference to match
Curriculum: existing convert curricula and guides (find them in Milestone 1). Product: one clear daily action, Duolingo-style "today's lesson" simplicity, warm and non-judgmental in tone. The research says harsh correction is a top reason converts disengage.

## Approach: work in milestones
1. **In-depth curriculum research.** Survey existing new-Muslim curricula and guides: books (e.g., "Welcome to Islam" by Mustafa Umar, "The New Muslim's Field Guide"), courses and programs (Ta'leef, WhyIslam, New Muslim Academy, Yaqeen/Qalam material, Sh. Abdullah Oduro's program), articles, essays, and convert-retention research (ISPU, etc.). Try to identify the book the reviewing imam meant. Produce a research report comparing how each source sequences topics, how long each runs, what converts say they were missing, and where sources disagree. → Checkpoint: I review the report.
2. **Curriculum design.** *(Scope expanded 2026-10-05.)* The full 90-day curriculum written end to end: a curriculum spec (Day-90 outcomes, lesson format, interaction types, AI-guide rules), the day-by-day outline, and every lesson plus the calendar modules. Lessons are 5-minute, interactive (Brilliant/Duolingo-style) and AI-assisted, in original wording with sources cited, so the app can be built straight from them. No scholar review packet; scholar-dependent passages are flagged inline. → Checkpoint: I approve the curriculum.
3. **Stack + data model.** Propose 2–3 stacks with cost and difficulty. They need a clean backend with two user types (masjid admins, converts), masjid → convert relationships, and lesson progress. → Checkpoint: I pick one.
4. **Convert app.** Mobile-first web app (installable to the home screen): invite-link sign-up, today's lesson, progress, daily reminders, and lessons marked "draft — pending scholar review" until approved. → Checkpoint: I sign up on my phone and complete Day 1.
5. **Masjid dashboard.** Admin login, invite link, convert list with progress and last-active date. → Checkpoint: demo with one test masjid and 3 test converts.
6. **Deploy + pilot kit.** Deploy it, plus a one-page masjid pitch, an onboarding message the reviewing imam can send converts, and a feedback form. → Checkpoint: I approve everything before anything goes out.
Milestones 2 and 3–5 can overlap: build the app against the approved outline while lessons are written. Don't start the next milestone until I approve the current one. If you learn something that changes the plan, stop and tell me instead of adjusting silently.

## Decisions I need to verify
- Program length and structure (what the research supports) → **Decided 2026-10-05:** 90 days, three 30-day phases, 5-minute daily lessons
- Theological stance: mainstream Sunni and non-sectarian? How to handle fiqh differences (e.g., how to pray) across madhabs? → **Decided:** mainstream Sunni; masjid sets the default prayer method; other schools noted briefly
- Which sources count as authoritative for the curriculum → **Decided:** Tier-1 scholars and institutions for religious content (list in Curriculum/Research Notes - Core Essentials and Madhab Map); convert voices for needs only
- Tech stack and hosting → **Decided 2026-10-07:** Next.js + Supabase on Vercel ([[T3 - Stack and Data Model]])
- Sign-up method (invite link, magic link, Google?) → **Decided:** invite link + email 6-digit code
- Reminder channel (email is free; SMS costs money) → **Decided:** web push + email fallback
- AI guide model → **Decided:** chosen by the red-team eval (Sonnet 5.5 vs Haiku 4.5); Haiku 4.5 for the crisis check
For each, give me 2–3 options and a recommendation, and wait.

## Verification plan
- Research: cite every claim, cross-check religious content across at least 2 reliable sources, and list disagreements and gaps explicitly. Never smooth them over.
- Content: nothing is presented as final until a scholar has reviewed it. Keep a review log of who reviewed which lessons and what they said.
- Code: tests for auth and permissions (a masjid only sees its own converts; a convert only sees their own data), plus an end-to-end demo on a real phone after each milestone.
- Outside evidence: real scholar feedback, and real converts in the pilot (note where they get stuck or drop off).
- This is a complex build. Before the pilot launches, run the curriculum and the code by a second AI to make sure both systems agree: spawn a fresh subagent with no prior context to critique them against the evaluation criteria. Then reconcile disagreements and report them to me.

## Guardrails
- Always: cite sources; write all lesson content in original wording; save research and curriculum to my vault; keep secrets in env files; commit after each milestone.
- Ask first: spending money (including paid services or SMS), emailing or sending any outreach to anyone, and any tangible change outside this project itself.
- Never: copy copyrighted text word for word; give rulings on contested religious matters without flagging them for scholars; store passwords yourself (use the auth provider); delete data.

## Keep me understanding it
For every key decision, explain the why in plain language in two or three sentences. At the end, give me a short summary of how the system works and what I'd need to know to change it myself.

## Output format
- Research report and curriculum: ~/Obsidian/Second Brain/Projects/Hidaya/Curriculum/ (report, day-by-day outline, lessons, scholar review packet, review log)
- Code: a repo at ~/Projects/new-muslims-program with a README, deployed to a live URL
- One-pager: ~/Obsidian/Second Brain/Projects/Hidaya/How the MVP works.md
- Pilot kit (masjid pitch, convert onboarding message, feedback form) in the vault, not sent until I approve
```
