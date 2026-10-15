---
day: 89
phase: 3
unit: 10
title: "Your plan after Day 90"
hook: "Tomorrow is Day 90. Today you decide what Day 91 looks like."
minutes: 5
skills: [S2, S3]
pain_points: [overwhelm]
logs: [made_next_steps_plan]
madhab_sensitive: false
scholar_flags: []
status: draft-pending-scholar-review
glossary: [masjid, Qur'an, surah, du'a, Astaghfirullah, Allah, ﷺ]
sources: [Bukhari 6464, Bukhari 39, Muslim 2699, Q 2:286, Field Guide ch. 9, SeekersGuidance (recent convert), Yaqeen 2025]
format: 2
---
# Day 89 · Your plan after Day 90

### 1 · hook
```yaml
pic: icon:Signpost
text: "**Tomorrow is Day 90.** After that, no new lesson unlocks each morning. So today you choose what keeps you growing, and the app helps you keep at it."
```

### 2 · learn
```yaml
pic: icon:Anchor
text: "**Your anchor stays the same: the five prayers.** Everything else is built around them. The deeds Allah loves most are the regular ones, even if small [Bukhari 6464]."
bubbles:
  - "The Prophet ﷺ also warned that whoever overloads the religion gets worn out by it [Bukhari 39]."
  - "So a good plan is small enough to keep on your worst week."
```

### 3 · reveal
```yaml
title: "Four areas to pick from. Tap each one."
cards:
  - front: "Learn"
    back: "A class at {{masjid.name}}. Remember the answer you got on Day 81."
    pic: icon:GraduationCap
  - front: "People"
    back: "Keep meeting {{mentor.name}}, and see one Muslim friend regularly."
    pic: community
  - front: "Qur'an"
    back: "A daily reading time (Day 82), or one new short surah a month."
    pic: quran
  - front: "A daily habit"
    back: "A morning du'a, or *Astaghfirullah* ×3 after each prayer."
    pic: dua
```

### 4 · sort
```yaml
prompt: "Will it last, or burn out? Sort these plan ideas."
buckets: ["Keepable", "Burnout"]
items:
  - text: "Five minutes of Qur'an after Fajr"
    bucket: 0
    why: "Small and tied to a time you already have. That's the kind that lasts."
  - text: "Every class the masjid offers, starting this week"
    bucket: 1
    why: "A good thing, but too much at once. Start with one and add later [Bukhari 39]."
  - text: "A monthly coffee with your mentor"
    bucket: 0
    why: "Regular and realistic. Small and steady is what Allah loves most [Bukhari 6464]."
  - text: "Memorizing a long surah every week"
    bucket: 1
    why: "Too heavy to keep. One new short surah a month is a plan you'll still have in six months."
  - text: "Two to four steps, built around the five prayers"
    bucket: 0
    why: "Yes. Choose two to four areas, not all of them."
```

### 5 · scenario
```yaml
pic: icon:CalendarCheck
situation: "Jordan is fired up for Day 91. Which plan is most likely to still be going in six months?"
options:
  - text: "A Sunday class at the masjid, a monthly coffee with his mentor, and five minutes of Qur'an after Fajr"
    best: true
    feedback: "Yes. Small, specific and tied to times he already has. That's the kind of plan that lasts."
  - text: "Every class the masjid offers, fasting Mondays and Thursdays, and memorizing a long surah a week"
    best: false
    feedback: "Not quite. All good things, but together they're a burnout plan. Start smaller and add later [Bukhari 39]."
  - text: "No plan; he'll see how he feels"
    best: false
    feedback: "Not quite. Without a plan, good intentions fade. One or two small commitments keep him moving."
```

### 6 · practice
```yaml
title: "Choose your next steps (pick 2–4). The app will remind you and check in."
optional: false
steps:
  - "Learn: try one class or study circle at {{masjid.name}} this month"
  - "People: ask {{mentor.name}} to keep meeting, about once a month"
  - "People: a regular meet-up with one Muslim friend"
  - "Qur'an: five minutes of reading at a set time each day"
  - "Qur'an: learn one new short surah a month"
  - "Habit: a morning du'a in your own words"
  - "Habit: Astaghfirullah ×3 after each prayer"
  - "Something else that fits your life (write it in)"
done_text: "That's your plan. Small enough to keep, real enough to grow. You'll see it again on Day 90."
carry_forward: true
```

### 7 · learn
```yaml
pic: icon:RotateCcw
text: "**When the plan slips (it will):** don't throw it out and don't start from zero. Pick up the next prayer, the next class, the next five minutes. Allah doesn't burden anyone beyond what they can carry [Q 2:286]."
bubbles:
  - "{teen}Under 18? Choose a class time that fits school and home. {{mentor.name}} can help you find one that works for your situation.{/teen}"
```

### 8 · choice
```yaml
pic: quran
prompt: "Six weeks after Day 90, Maria has missed her Qur'an time for a week. What's the best move?"
options:
  - text: "Start again today with just five minutes"
    correct: true
    feedback: "Right. Pick it back up where you are. Small and regular beats perfect [Bukhari 6464]."
  - text: "Wait until next month to restart properly"
    correct: false
    feedback: "Not quite. Waiting for a fresh start usually means never. Today is a fine day to restart."
  - text: "Drop it; she's clearly not cut out for it"
    correct: false
    feedback: "Not quite. Everyone slips. Coming back is the habit that matters most."
```

### 9 · ask_ai
```yaml
chips:
  - "Help me make my plan smaller and more specific"
  - "What should I learn after this program?"
  - "How do I ask my mentor to keep meeting?"
  - "Remind me how to get back on track after a slip"
```

### 10 · do_today
```yaml
pic: icon:Send
text: "Send {{mentor.name}} your plan."
steps:
  - "Write the two to four steps you picked in one message"
  - "Send it to {{mentor.name}}"
  - "Tick this when you've sent it"
log: made_next_steps_plan
optional_extra: "Put the first step in your calendar, with a day and a time."
```

### 11 · takeaway
```yaml
pic: icon:Anchor
text: "Keep the five prayers as your anchor, add two to four small steps, and restart when you slip."
```

### 12 · closing
You don't need a big plan. You need one you'll keep. Slow and steady.

---

## Check
```yaml
- prompt: "What makes a plan after Day 90 likely to last?"
  options:
    - text: "Two to four small, specific steps, built around the five prayers"
      correct: true
      feedback: "Right. Small and regular is what Allah loves most [Bukhari 6464]."
    - text: "As many good habits as possible, all at once"
      correct: false
      feedback: "Not quite. Overloading leads to burnout [Bukhari 39]. Start small and add later."
- prompt: "Your plan slips for a week. What now?"
  options:
    - text: "Pick it back up today, small"
      correct: true
      feedback: "Right. No need to start from zero. The next prayer or five minutes is enough."
    - text: "Give up; plans don't work for you"
      correct: false
      feedback: "Not quite. Everyone slips. Coming back is the real habit."
```

## AI guide context
**Lesson facts**
- The five prayers are the anchor of any plan. Small, regular deeds are most beloved to Allah [Bukhari 6464]; overloading leads to being overwhelmed [Bukhari 39]; Allah doesn't burden a soul beyond its capacity [Q 2:286].
- Four areas: learn (a class with a qualified teacher [SeekersGuidance (recent convert)]; Muslim 2699), people (the mentor, a Muslim friend; the strongest supports [Yaqeen 2025]), Qur'an (Day 82), a daily habit.
- The steps the convert ticks on screen 6 are saved and carried forward: the app reminds them and checks in after Day 90.

**Likely questions**
- *"Make my plan smaller."* Turn each step into a when and where ("after Fajr, five minutes, the app open to the Qur'an"). Cut to the two most important if they listed more than four.
- *"What should I learn next?"* A beginners' class at the masjid on belief and worship; the Prophet's life ﷺ; short surahs. Day 81 covers sources. Don't invent class names or times.
- *"How do I ask my mentor to keep meeting?"* Offer a short, warm draft: thanks, and a request for a monthly check-in.
- *"I slipped."* Reassure: restart small today; no catch-up needed for habits (missed obligatory prayers are made up, Day 21).

**Escalate:** nothing specific; personal rulings that come up while planning go to the imam.

**Don't**
- Don't push heavy plans (daily long study, extra fasts, big memorization goals) on a new convert.
- Don't present voluntary habits as obligations.
- For under-18s: keep plans compatible with school and home; mentor contact follows safeguarding (a second adult always included).

## Sources
- [Bukhari 6464](https://sunnah.com/bukhari:6464): the deeds Allah loves most are the regular ones, even if small.
- [Bukhari 39](https://sunnah.com/bukhari:39): the religion is easy; whoever overburdens himself in it will be overcome.
- [Muslim 2699](https://sunnah.com/muslim:2699): whoever takes a path to knowledge, Allah eases a path to Paradise.
- Qur'an [2:286](https://quran.com/2/286): Allah does not burden a soul beyond its capacity.
- [SeekersGuidance: How should a recent convert build their knowledge of Islam?](https://seekersguidance.org/answers/seeking-knowledge/how-should-a-recent-convert-build-their-knowledge-of-islam/).
- Yaqeen Institute, *Becoming Muslim* (2025), via [[Research Notes - Retention and Convert Voices]] R1: friends, masjid and imam as the strongest supports.
- [[Source - The New Muslims Field Guide]] ch. 9 (slow and steady; burnout from over-zeal).
