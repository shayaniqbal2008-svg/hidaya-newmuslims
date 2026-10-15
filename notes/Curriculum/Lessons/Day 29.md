---
day: 29
phase: 1
unit: 4
title: "Your rhythm"
hook: "Five prayers can feel like five interruptions, or like the frame your day hangs on. Let's build the frame."
minutes: 5
skills: [S2]
pain_points: [overwhelm]
logs: []
madhab_sensitive: false
scholar_flags: []
status: draft-pending-scholar-review
glossary: [Fajr, Dhuhr, Asr, Maghrib, Isha, salam, Astaghfirullah]
sources: [Bukhari 6464, Q 2:286, Muslim 591, Muslim 592, Q 4:103, Field Guide ch. 9]
format: 2
---
# Day 29 · Your rhythm

### 1 · hook
```yaml
pic: prayer-times
text: "A month in, the question changes from \"How do I pray?\" to \"How do I keep this up?\" The answer isn't more willpower. It's a rhythm."
```

### 2 · learn
```yaml
pic: icon:CalendarDays
text: "**The five prayers are your frame.** Everything else (lessons, Qur'an, extra worship) fits around them, a little at a time. The deeds Allah loves most are the regular ones, even if they're small [Bukhari 6464]."
bubbles:
  - "Allah doesn't burden anyone beyond what they can carry [Q 2:286]."
  - "So build a routine you could keep on your worst week, not your best."
```

### 3 · widget
```yaml
widget: prayer-times
prompt: "Drag the sun through a day"
text: "Five windows, spread across your day. Each one is a spot to hang a habit on."
```

### 4 · match
```yaml
prompt: "Anchor each prayer to something you already do. Match each prayer to an example anchor."
pairs:
  - left: "Fajr"
    right: "Before you touch your phone"
  - left: "Dhuhr"
    right: "With lunch"
  - left: "Asr"
    right: "Right after class or a shift block"
  - left: "Maghrib"
    right: "Before dinner"
  - left: "Isha"
    right: "Before you wind down for bed"
```

### 5 · scenario
```yaml
pic: icon:Flame
situation: "Ana feels behind. Her new plan: all five prayers, every extra prayer she's heard of, an hour of Qur'an, and a 5 a.m. study session. Starting tomorrow."
options:
  - text: "Keep the five as the core, add one small extra (like 5 minutes of Qur'an), and grow slowly"
    best: true
    feedback: "Yes. A plan she can keep beats a perfect plan she drops in a week."
  - text: "Go for the full plan while she's motivated"
    best: false
    feedback: "Kind instinct, but that's the classic path to burnout. Steady and small lasts."
  - text: "Drop to fewer prayers until life calms down"
    best: false
    feedback: "Not quite. All five are due. The fix is fewer extras, not fewer prayers."
```

### 6 · practice
```yaml
title: "Build your day around five prayers"
optional: false
steps:
  - "Open today's prayer times (set up on Day 2)"
  - "For each prayer, pick an anchor: something you already do around that time"
  - "Pick a spot for each one: home, work, school, the masjid"
  - "Set a discreet reminder for each prayer. Anchors beat alarms alone; use both at first"
  - "Choose ONE small extra for this week (5 minutes of Qur'an, or the after-prayer phrases coming up)"
  - "Plan Fajr: alarm across the room, and a bedtime that makes it possible"
done_text: "That's your rhythm. Try it for a week, then adjust what doesn't fit."
```

### 7 · learn
```yaml
pic: "pose:tashahhud"
text: "**After the salam, don't rush off.** Stay seated a moment. The Prophet ﷺ, when he finished a prayer, would ask Allah's forgiveness three times and then say a short line praising Him as the source of peace [Muslim 591]."
bubbles:
  - "It's a humble way to close: you've just prayed, and you still turn to Allah for forgiveness. It takes about 15 seconds."
```

### 8 · phrase
```yaml
arabic: "أَسْتَغْفِرُ اللَّهَ"
translit: "Astaghfirullah"
meaning: "I ask Allah's forgiveness"
audio_id: astaghfirullah
when: "Three times, right after the salam that ends each prayer [Muslim 591]. Then today's prayer phrase."
```

### 9 · prayer
```yaml
title: "The 15 seconds after the prayer"
moves:
  - pose: salam-right
    text: "Give the salam to the right…"
  - pose: salam-left
    text: "…and to the left. Your prayer is done. Don't rush off."
  - pose: tashahhud
    text: "Stay seated. Say *Astaghfirullah* three times."
    say: "Astaghfirullah ×3"
  - pose: tashahhud
    text: "Then today's prayer phrase, praising Allah as the source of peace."
    say: "Allahumma antas-salam wa minkas-salam, tabarakta dhal-jalali wal-ikram"
done_text: "About 15 seconds, after every prayer."
```

### 10 · widget
```yaml
widget: tasbih
prompt: "Try it now"
text: "Tap once each time you say it."
phrases:
  - translit: "Astaghfirullah"
    meaning: "I ask Allah's forgiveness"
    count: 3
  - translit: "Allahumma antas-salam wa minkas-salam, tabarakta dhal-jalali wal-ikram"
    meaning: "O Allah, You are Peace, and peace comes from You. How blessed You are, Lord of majesty and honor."
    count: 1
```

### 11 · ask_ai
```yaml
chips:
  - "Help me plan prayers around my school or work schedule"
  - "How do I wake up for Fajr?"
  - "What other remembrance can I add after prayer?"
  - "I keep missing Asr. What can I change?"
```

### 12 · do_today
```yaml
pic: icon:Repeat
text: "Live today's rhythm."
steps:
  - "Use your new rhythm for today's remaining prayers"
  - "After each one, sit for 15 seconds: Astaghfirullah ×3, then Allahumma antas-salam"
log: null
optional_extra: "Tonight, note which prayer was hardest to fit in. That's the one to plan better tomorrow."
```

### 13 · takeaway
```yaml
pic: prayer-times
text: "Five prayers as the frame, anchored to your day; one small extra at a time."
```

### 14 · closing
A rhythm you keep is worth more than a plan you admire. Slow and steady.

---

## Prayer phrase
```yaml
arabic: "اللَّهُمَّ أَنْتَ السَّلاَمُ وَمِنْكَ السَّلاَمُ تَبَارَكْتَ ذَا الْجَلاَلِ وَالإِكْرَامِ"
translit: "Allahumma antas-salam wa minkas-salam, tabarakta dhal-jalali wal-ikram"
meaning: "O Allah, You are Peace, and peace comes from You. How blessed You are, Lord of majesty and honor."
audio_id: allahumma-antas-salam
when: "After the salam, right after Astaghfirullah ×3 [Muslim 591]. Many people say \"tabarakta ya dhal-jalali wal-ikram\" (with \"ya\", O); that wording is narrated too [Muslim 592]."
```

## Check
```yaml
- prompt: "You're overwhelmed and want to cut back. What should go first?"
  options:
    - text: "The extras, not the five prayers"
      correct: true
      feedback: "Right. All five are due. Trim the extras and keep them small and regular."
    - text: "A couple of the daily prayers"
      correct: false
      feedback: "Not quite. The five are the core. Fewer extras, not fewer prayers."
- prompt: "What did the Prophet ﷺ say right after finishing a prayer?"
  options:
    - text: "Astaghfirullah three times, then Allahumma antas-salam…"
      correct: true
      feedback: "Right [Muslim 591]. About 15 seconds, after every prayer."
    - text: "Nothing; he stood up straight away"
      correct: false
      feedback: "Not quite. He asked forgiveness three times and praised Allah as the source of peace."
```

## AI guide context
**Lesson facts**
- The five prayers are the fixed core; extras are added slowly. Regular small deeds are most beloved to Allah [Bukhari 6464]; no soul is burdened beyond its capacity [Q 2:286]; each prayer has its time [Q 4:103].
- Over-zeal leads to burnout; converts do best adding one thing at a time [Field Guide ch. 9].
- After the prayer: *Astaghfirullah* ×3, then *Allahumma antas-salam wa minkas-salam, tabarakta dhal-jalali wal-ikram* [Muslim 591; Muslim 592 has "ya dhal-jalali"]. The Hanafi manual adds Ayat al-Kursi and *Subhan Allah*, *al-hamdu lillah*, *Allahu akbar* ×33 [First Instructions on Worship, appendix]; offer these only if the convert asks for more.
- Never present fewer than five prayers as acceptable (Q4 wording: "All five are due; pray each one with what you know so far").

**Likely questions**
- *"Plan around my schedule."* Ask for their typical day and today's prayer times; map each prayer to a gap and a spot. Keep it realistic.
- *"How do I wake up for Fajr?"* Earlier bedtime, alarm across the room, wudu by the bed, a friend's wake-up text. If they miss it, pray it as soon as they wake (Day 21).
- *"I keep missing Asr."* Find the anchor; pray early in the window; plan with work (Day 24).
- *"More remembrance after prayer?"* Offer the 33/33/33 tasbih as an optional extra, one at a time.

**Escalate:** schedules that seem to make a prayer impossible (night shifts, long surgeries, exams): general tips, then the imam.

**Don't**
- Don't stack a long list of extras.
- Don't suggest combining prayers to save time (not Hanafi practice; escalate).

## Sources
- [Bukhari 6464](https://sunnah.com/bukhari:6464): regular deeds, even if small.
- Qur'an [2:286](https://quran.com/2/286), [4:103](https://quran.com/4/103).
- [Muslim 591](https://sunnah.com/muslim:591): forgiveness ×3 and *Allahumma antas-salam…* after the prayer.
- [Muslim 592](https://sunnah.com/muslim:592): the same phrase, with "ya dhal-jalali wal-ikram" in one narration.
- [[Source - The New Muslims Field Guide]] ch. 9 (burnout from doing everything at once).
- [[Source - First Instructions on Worship]] appendix (post-prayer remembrance, Hanafi).
