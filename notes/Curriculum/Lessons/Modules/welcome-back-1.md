---
module: welcome-back-1
phase: null
unit: null
title: "You're back. That's what counts."
hook: "You've been away a few days. No guilt trip here. Let's just pick up where you are."
minutes: 4
skills: [S5, S2, B2]
pain_points: [guilt, struggling]
logs: [reconnected_with_mentor]
madhab_sensitive: true
scholar_flags: []
status: draft-pending-scholar-review
glossary: [qada, rak'ah, astaghfirullah, Allah]
sources: [Bukhari 7405, Muslim 2747, Bukhari 6464, Bukhari 597, Q 39:53, Tirmidhi 2499, First Instructions on Worship ch. 5, SeekersGuidance (makeup order), IslamWeb 243298]
format: 2
---
# welcome-back-1 · You're back. That's what counts.

### 1 · hook
```yaml
pic: fresh-start
text: "**Welcome back, {{convert.first_name}}.** Life got busy, or hard, or both. That happens to everyone, in week one or month three. No streaks to mourn, no lessons to catch up on. You're here now."
```

### 2 · widget
```yaml
widget: iman-graph
prompt: "What a few days away looks like"
text: "Drag along the line. A dip isn't the end of the story. Coming back is the part that counts."
points:
  - label: "Going along"
    text: "Praying, learning a little each day."
  - label: "Life got in the way"
    text: "Busy, hard, or both. A few days slipped by. It happens to everyone."
  - label: "Today"
    text: "You opened the app. That's the turn."
  - label: "From here"
    text: "The next prayer, one lesson a day, small and steady. The line keeps going up."
```

### 3 · quiz
```yaml
title: "Quick check-in"
intro: "Four questions from lessons you've done. No pressure: it just shows what's fresh and what needs a look."
count: 4
prefer: [day-03, day-02]
```

### 4 · learn
```yaml
pic: icon:HeartHandshake
text: "**Allah is glad you're back.** The Prophet ﷺ said Allah is more pleased when His servant turns back to Him than a traveler who finds his lost camel, with all his food and water, in the middle of the desert [Muslim 2747]."
bubbles:
  - "And when you take a step toward Allah, He comes toward you faster [Bukhari 7405]."
```

### 5 · choice
```yaml
pic: prayer-mat
prompt: "Coming back after a few days off, what's the first thing to do?"
options:
  - text: "Pray the next prayer that's due, with what you know"
    correct: true
    feedback: "Right. The next prayer is your fresh start. Everything else can follow."
  - text: "Redo every lesson from the days you missed"
    correct: false
    feedback: "Not quite. There's nothing to catch up on. Your next lesson is waiting, one a day as before."
  - text: "Wait until you feel \"ready\" again"
    correct: false
    feedback: "Not quite. Feeling ready usually comes after you start, not before."
```

### 6 · steps
```yaml
title: "Missed some prayers? Make them up (qada)"
intro: "Missed prayers are made up: the same rak'ahs, as soon as you can [Bukhari 597]."
steps:
  - text: "Pray each one you missed, with the same rak'ahs it has."
    pic: prayer-mat
  - text: "A few at a time is fine: add one with each prayer today."
    pic: icon:ListChecks
  - text: "Missed any on purpose? Say *astaghfirullah* (\"I ask Allah's forgiveness\") and move on."
    pic: dua
    say: "Astaghfirullah"
  - text: "{{masjid.name}} will show you the order and timing."
    pic: masjid
done_text: "That's it. Steady beats perfect."
variants:
  hanafi:
    steps:
      - text: "Pray each one you missed, with the same rak'ahs it has."
        pic: prayer-mat
      - text: "Five or fewer owed? Pray them before the current prayer, unless its time is running out."
        pic: icon:Clock
      - text: "More than five? Add one with each prayer until they're done."
        pic: icon:ListChecks
      - text: "Missed any on purpose? Say *astaghfirullah* (\"I ask Allah's forgiveness\") and move on."
        pic: dua
        say: "Astaghfirullah"
```

### 7 · scenario
```yaml
pic: icon:CalendarDays
situation: "Dre was away at a family event for three days and missed six prayers. He feels he has to pray all six tonight or he's \"not a real Muslim.\""
options:
  - text: "Pray today's prayers on time, add one make-up with each, and finish the rest tomorrow"
    best: true
    feedback: "Yes. Steady and doable. Making them up a few at a time still counts fully."
  - text: "Give up on the six; they're gone"
    best: false
    feedback: "Not quite. Missed prayers are made up [Bukhari 597], and a little at a time works."
  - text: "Stay up past midnight praying all six, then sleep through Fajr"
    best: false
    feedback: "Not quite. Burning out tonight costs tomorrow. Small and steady beats a big push."
```

### 8 · learn
```yaml
pic: icon:Sprout
text: "**Small and steady wins.** The deeds Allah loves most are the ones done regularly, even if they're small [Bukhari 6464]. So don't try to make up for the gap with a huge burst."
bubbles:
  - "Five prayers, one lesson, one message to {{mentor.name}}. That's a full comeback."
```

### 9 · ask_ai
```yaml
chips:
  - "I've missed a lot of prayers. How do I make them up?"
  - "I feel guilty about disappearing. Is Allah angry with me?"
  - "How do I stop this from happening again?"
  - "I forgot some of the prayer. Can you walk me through it?"
```

### 10 · reflect
```yaml
prompt: "What pulled you away these last few days? No judgment, just notice it. What's one thing that would make it easier next time?"
share_with_mentor: optional
```

### 11 · do_today
```yaml
pic: icon:MessageCircle
text: "Pray your next prayer, then say hello."
steps:
  - "Pray your next prayer"
  - "Send {{mentor.name}} a quick hello: \"I'm back, it's been a busy few days.\" That's all"
log: reconnected_with_mentor
optional_extra: "If you have missed prayers, start making them up today, the way screen 6 shows."
```

### 12 · takeaway
```yaml
pic: fresh-start
text: "Coming back is what counts. Pray the next prayer, make up any prayers you missed, and keep it small and steady."
```

### 13 · closing
Everyone drifts. The ones who grow are the ones who come back. You just did. Slow and steady.

---

## Check
```yaml
- prompt: "You missed a few prayers. What do you do?"
  options:
    - text: "Make them up, starting today"
      correct: true
      feedback: "Right. Missed prayers are made up as soon as you can [Bukhari 597]. Your masjid can help with the order."
    - text: "Nothing; once they're missed, they're gone"
      correct: false
      feedback: "Not quite. Missed prayers are made up as soon as you can [Bukhari 597]."
- prompt: "Which deeds does Allah love most?"
  options:
    - text: "The regular ones, even if small"
      correct: true
      feedback: "Right. Consistency over intensity [Bukhari 6464]."
    - text: "Big bursts of effort after a break"
      correct: false
      feedback: "Not quite. The most beloved deeds are regular ones, even if small [Bukhari 6464]."
```

## AI guide context
**Lesson facts**
- Allah's joy at a servant's return [Muslim 2747]; He comes toward the one who comes toward Him [Bukhari 7405]; don't despair of His mercy [Q 39:53]; the best of those who err are those who repent [Tirmidhi 2499].
- The most beloved deeds are regular ones, even if small [Bukhari 6464].
- Missed prayers are made up when remembered [Bukhari 597]. Deliberately missing one is a sin, repaired by repentance plus the make-up; oversleeping or forgetting isn't a sin [First Instructions ch. 5]. Hanafi: with five or fewer owed, order is kept (missed before current) unless the current time is running out or they forgot; with six or more, order drops [SeekersGuidance (makeup order)]. No make-ups in the three disliked times (sunrise, zenith, sunset) in the Hanafi school (Day 21).
- Not made up: prayers from before Islam [IslamWeb 243298]; prayers missed during a period or postnatal bleeding.
- No lesson catch-up: the program resumes with the next lesson.

**Likely questions**
- *"I missed a lot."* Calm plan: today's five first, then one make-up with each prayer (or more if they can), in order where possible; for many weeks, escalate to the imam to count and plan. Never overwhelm.
- *"Is Allah angry with me?"* Lead with mercy: Muslim 2747, Q 39:53. Coming back is what He loves.
- *"How do I stop it happening again?"* One anchor: a fixed prayer (Fajr or Maghrib) as a daily non-negotiable, phone reminders, a friend or the mentor to check in with.
- *"I forgot how to pray."* Offer to walk through it or point to Day 3; the minimum prayer is enough to start.

**Escalate:** large numbers of missed prayers; anything suggesting depression, crisis or danger at home (safety rule first); a convert who says they want to leave Islam (calm, no pressure, offer the imam or a scholar).

**Don't**
- Don't mention streaks, missed days or how far "behind" they are.
- Don't ask why they were away; the reflection is optional.
- Don't use guilt or Hell to motivate.

## Madhab note
- **Order of make-ups:** the Hanafi and Maliki schools require keeping order when only a few prayers are owed; the Shafi'i school recommends it; the Hanbali school requires it with some exceptions. Ask your imam if you have many to make up.

## Sources
- [Muslim 2747](https://sunnah.com/muslim:2747): Allah's joy at His servant's repentance, more than a traveler finding his lost camel.
- [Bukhari 7405](https://sunnah.com/bukhari:7405): Allah comes nearer to the one who comes near to Him.
- [Bukhari 6464](https://sunnah.com/bukhari:6464): the most beloved deeds are the most regular, even if small.
- [Bukhari 597](https://sunnah.com/bukhari:597): pray a forgotten prayer when you remember it.
- Qur'an [39:53](https://quran.com/39/53). [Tirmidhi 2499](https://sunnah.com/tirmidhi:2499) (hasan, al-Albani).
- [[Source - First Instructions on Worship]] ch. 5 (missing the prayer time).
- [SeekersGuidance: the current prayer while make-ups are owed](https://seekersguidance.org/answers/hanafi-fiqh/what-is-the-ruling-of-a-current-prayer-while-leaving-the-make-up-prayers/).
- [IslamWeb 243298](https://www.islamweb.net/en/fatwa/243298/does-the-person-who-embraces-islam-have-to-perform-the-prayers-he-missed-on-that-day): no make-up for prayers before Islam.
