---
day: 90
phase: 3
unit: 10
title: "Day 90"
hook: "Ninety days. You did this, one small day at a time."
minutes: 5
skills: [P3, P5, T1, T2, S2, S4, B2, B3]
pain_points: [milestone]
logs: [phase3_mentor_checkin]
madhab_sensitive: false
scholar_flags: []
status: draft-pending-scholar-review
glossary: [Allah, wudu, masjid, Eid, Ramadan, shukr, alhamdulillah]
sources: [Q 14:7, Bukhari 6464, Muslim 2664, Q 39:53, Muslim 121, Field Guide ch. 9]
format: 2
---
# Day 90 · Day 90

### 1 · hook
```yaml
pic: icon:PartyPopper
text: "**Ninety days, {{convert.first_name}}.** Ninety days ago you opened Day 1, maybe nervous, maybe alone, not sure what came next. Look where you are now."
```

### 2 · widget
```yaml
widget: timeline
prompt: "What you've built"
text: "None of it had to be perfect. You did it anyway."
events:
  - when: "Day 1"
    title: "You said yes"
    text: "Your shahada, and a slate wiped clean."
    pic: fresh-start
  - when: "Days 2–3"
    title: "Wudu and your first prayer"
    text: "You learned wudu and prayed from your first day."
    pic: "pose:qiyam"
  - when: "Days 7–22"
    title: "A masjid, a mentor, people"
    text: "You walked into the masjid, prayed in a row, and started building your circle."
    pic: masjid
  - when: "Days 11–30"
    title: "The whole prayer"
    text: "Every phrase of the prayer, al-Fatiha and a short surah."
    pic: quran
  - when: "Days 23 and 85"
    title: "Your story, out loud"
    text: "You told your story and explained the basics to someone who asked."
    pic: conversation
  - when: "All along"
    title: "Slumps and hard questions"
    text: "You made it through the low patches and the hard questions, and you kept coming back."
    pic: icon:Sprout
```

### 3 · practice
```yaml
title: "Your Day-90 check: tick what's true for you today"
optional: true
steps:
  - "Pray with confidence: I pray the five prayers on my own, with every phrase"
  - "Pray with confidence: I can pray behind an imam and join late"
  - "Talk about Islam: I can tell my story and the basics in two minutes"
  - "Talk about Islam: I'm okay saying \"I don't know, let me find out\""
  - "Not overwhelmed: I know what's required and what can wait"
  - "Not overwhelmed: I know a low patch isn't leaving Islam"
  - "Belong: I have a mentor or imam I can reach"
  - "Belong: I have at least one Muslim friend, and a place to be for Eid"
done_text: "What you ticked is real. What you didn't is your next step, not a failure. The guide can help with any of them."
```

### 4 · learn
```yaml
pic: icon:Sparkles
text: "**Say alhamdulillah.** Allah says that if you're grateful, He will give you more [Q 14:7]. Gratitude (*shukr*) for these 90 days isn't bragging. It's noticing that Allah carried you through each one."
bubbles:
  - "And remember the first lesson: your slate was wiped clean on the day you said yes [Muslim 121]. Everything since has been building on that."
```

### 5 · widget
```yaml
widget: tasbih
prompt: "Count your thanks"
text: "Tap once for each thing from these 90 days you're grateful for, and say it as you tap."
phrases:
  - translit: "Alhamdulillah"
    meaning: "All praise is for Allah"
    count: 5
```

### 6 · reflect
```yaml
prompt: "Read your Day 1 answer: what made you say yes? Then your Day 30 and Day 60 reflections. What's changed? What are you most proud of?"
share_with_mentor: optional
resurface: [day-1, day-30, day-60]
```

### 7 · reveal
```yaml
title: "Islam was never a 90-day course. This was just the start. Tap to see what doesn't end today."
cards:
  - front: "The guide and the lessons"
    back: "The AI guide, and every lesson, to re-read any time."
    pic: icon:BookOpen
  - front: "Your plan"
    back: "The plan you made yesterday, with reminders."
    pic: icon:ListChecks
  - front: "The seasons"
    back: "Ramadan, Eid and the other seasons: the app will still walk you through them when they come."
    pic: crescent
  - front: "Your people"
    back: "{{mentor.name}} and {{masjid.name}}."
    pic: community
```

### 8 · reflect
```yaml
prompt: "Write a letter to yourself, to open in six months. What do you want future-you to remember about these 90 days? What do you hope you're still doing? What would you say to them on a hard day? The app will show it to you again."
share_with_mentor: optional
resurface_after_days: 180
```

### 9 · ask_ai
```yaml
chips:
  - "What should I focus on in the next 90 days?"
  - "Which of the four outcomes should I work on most?"
  - "I didn't tick everything. Is that okay?"
  - "How can I help the next new Muslim?"
```

### 10 · do_today
```yaml
pic: icon:MessageCircle
text: "Tell {{mentor.name}} you finished the program."
steps:
  - "Share one thing you're proud of"
  - "Share one thing you'll keep working on"
  - "Tick this when you've done it"
log: phase3_mentor_checkin
optional_extra: "Do something small to celebrate: a favorite meal, a walk, or time with your people. You earned it."
```

### 11 · takeaway
```yaml
pic: icon:Trophy
text: "You pray, you can talk about your faith, you know what matters now, and you have people. Keep going, a little at a time."
```

### 12 · closing
The best deeds are the ones you keep doing, even small ones [Bukhari 6464]. Ninety days in, you're still here. Slow and steady, for life.

---

## Check
```yaml
- prompt: "You didn't tick every item in your Day-90 check. What does that mean?"
  options:
    - text: "Those items are your next steps, not a failure"
      correct: true
      feedback: "Right. Everyone keeps growing after Day 90. Pick one and work on it with your mentor."
    - text: "You should restart the program from Day 1"
      correct: false
      feedback: "Not quite. No restart needed. Re-read any lesson you want, and keep moving forward."
- prompt: "What does the Qur'an promise to those who are grateful?"
  options:
    - text: "Allah will give them more"
      correct: true
      feedback: "Right [Q 14:7]. Gratitude opens the door to more good."
    - text: "Nothing; gratitude is just good manners"
      correct: false
      feedback: "Not quite. Allah promises increase to the grateful [Q 14:7]."
```

## AI guide context
**Lesson facts**
- The four Day-90 outcomes: prays with confidence (alone and at the masjid), talks about Islam without freezing, isn't overwhelmed, belongs to a community (Spec §2).
- Gratitude brings increase [Q 14:7]. Regular small deeds are most beloved to Allah [Bukhari 6464]. The strong believer is better, and there's good in both; seek Allah's help and don't give up [Muslim 2664].
- Islam wiped out what came before [Muslim 121]; the door of mercy stays open [Q 39:53].
- After Day 90: the guide, all lessons, calendar modules (Ramadan, Eid and the rest), the Day 89 plan and the mentor all continue.

**Likely questions**
- *"What next?"* Point to their Day 89 plan; suggest the outcome they ticked least as the focus; one small step at a time.
- *"I didn't tick everything."* Normal and fine. Help them pick one item and a concrete next step; offer to re-open the relevant lesson (O1: Days 22, 30, 86; O2: Days 23, 28, 85; O3: Days 12, 29, 89; O4: Days 18, 87).
- *"How can I help the next new Muslim?"* Day 80: volunteering, being the friend they needed, offering to sit with a new convert at the masjid. Through the masjid's own programs.
- *"I feel sad it's over."* Validate. Nothing is ending but the daily unlock; the guide, the lessons and the people stay.

**Escalate:** nothing specific.

**Don't**
- Don't grade or rank the convert, and never share their check results.
- Don't suggest public sharing or posting the milestone; they decide who knows (Spec §3).
- Don't use the milestone to push extra obligations.

## Sources
- Qur'an [14:7](https://quran.com/14/7): if you are grateful, I will surely increase you.
- [Bukhari 6464](https://sunnah.com/bukhari:6464): the deeds Allah loves most are the regular ones, even if small.
- [Muslim 2664](https://sunnah.com/muslim:2664): the strong believer; seek Allah's help and don't give up.
- [Muslim 121](https://sunnah.com/muslim:121): Islam wipes out what came before it.
- Qur'an [39:53](https://quran.com/39/53): don't despair of Allah's mercy.
- [[Source - The New Muslims Field Guide]] ch. 9 (slow and steady).
