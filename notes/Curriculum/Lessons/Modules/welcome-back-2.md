---
module: welcome-back-2
phase: null
unit: null
title: "A gentle restart"
hook: "It's been a while. You don't have to explain, and you don't have to catch up. You just start again from today."
minutes: 5
skills: [S5, S4, P3, B2]
pain_points: [guilt, iman-dips, honeymoon-ends]
logs: [reconnected_with_mentor]
madhab_sensitive: true
scholar_flags: [Q4, Q20]
status: draft-pending-scholar-review
glossary: [qada, imam, Allah]
sources: [Q 39:53, Q 2:286, Muslim 2747, Bukhari 7405, Bukhari 6464, Bukhari 597, Tirmidhi 2499, First Instructions on Worship ch. 5, SeekersGuidance (makeup order), IslamWeb 243298]
format: 2
---
# welcome-back-2 · A gentle restart

### 1 · hook
```yaml
pic: fresh-start
text: "**Welcome back, {{convert.first_name}}.** It's been two weeks or more. Maybe life fell apart for a while, maybe your faith felt far away, maybe you just stopped opening the app. Whatever it was, you're here. That took something."
```

### 2 · learn
```yaml
pic: icon:DoorOpen
text: "**There's no catch-up.** No pile of lessons, no lost streak. Your next lesson is right where you left it, one a day, like before."
bubbles:
  - "And Allah's door didn't close while you were away. He tells people who've wronged themselves: don't lose hope in His mercy [Q 39:53]."
  - "He's more pleased when you turn back than you could imagine [Muslim 2747]."
```

### 3 · widget
```yaml
widget: iman-graph
prompt: "Where you've been, and where it goes"
text: "Drag along the line. The dip was real. It isn't where the line ends."
points:
  - label: "Your shahada"
    text: "Everything felt bright and new."
  - label: "The excitement faded"
    text: "A slump. Maybe prayer slipped, maybe you stopped opening the app. Many new Muslims go through this."
  - label: "Today"
    text: "You came back. That's the hardest step, and it's done."
  - label: "From here"
    text: "Today's prayers, one lesson a day, a word with your mentor. It can turn around."
```

### 4 · learn
```yaml
pic: icon:Heart
text: "**Feeling far isn't the same as leaving.** Many new Muslims hit a slump after the first excitement fades. Feeling low is not leaving Islam. Leaving is a choice to reject it. `[SCHOLAR: Q20]`"
bubbles:
  - "If you're struggling, you're a Muslim who's struggling. That's a normal part of the road, and it can turn around."
```

### 5 · quiz
```yaml
title: "Quick check-in: what's still there?"
intro: "A few questions from lessons you've already done. It's not a test you can fail: it just shows what to brush up on."
count: 8
prefer: [day-03, day-02, day-01, day-07, day-11, day-17, day-21]
```

### 6 · sort
```yaml
prompt: "True, or just a worry talking?"
buckets: ["True", "Just a worry"]
items:
  - text: "I've ruined it. I should start the whole program over."
    bucket: 1
    why: "No. Just pick up where you are. Anything you've forgotten, you can reopen any time."
  - text: "I stopped praying, so I'm not really Muslim anymore."
    bucket: 1
    why: "No. You're a Muslim who fell behind on prayer. Today you start again."
  - text: "The people at the masjid will judge me."
    bucket: 1
    why: "Most won't even know. And the good ones will be glad to see you."
  - text: "I have to make up everything before I can pray today's prayers."
    bucket: 1
    why: "No. Pray today's, and add make-ups a little at a time. Only a few owed? {{mentor.name}} can show you the order."
  - text: "Allah's mercy is still open to me."
    bucket: 0
    why: "Yes. Don't lose hope in His mercy [Q 39:53]."
  - text: "My next lesson is right where I left it."
    bucket: 0
    why: "Yes. No catch-up, one a day, like before."
```

### 7 · learn
```yaml
pic: prayer-mat
text: "**Your prayer reset.** All five are due; pray each one with what you know so far. `[SCHOLAR: Q4]` Forgotten some of it? The short prayer from Day 3 is a complete start. Next screen."
bubbles:
  - "Pick one anchor prayer (Fajr or Maghrib, say) that you won't miss, and build the others around it."
```

### 8 · prayer
```yaml
title: "Quick refresher: the short prayer"
intro: "The 2-rak'ah prayer from Day 3. Press Play, or go move by move. Pray it with what you know now."
moves:
  - pose: stand
    text: "Wudu done, covered, facing the qibla. Intend the prayer in your heart."
  - pose: takbir
    text: "Raise your hands: *Allahu akbar*."
    say: "Allahu akbar"
  - pose: qiyam
    text: "Fold your hands. Recite what you've learned so far."
  - pose: ruku
    text: "*Allahu akbar*, bow. Be still. *Subhan Allah* ×3."
  - pose: itidal
    text: "Stand back up. Be still."
  - pose: sujud
    text: "*Allahu akbar*, prostrate. Be still. *Subhan Allah* ×3."
  - pose: jalsa
    text: "*Allahu akbar*, sit up. Be still."
  - pose: sujud
    text: "*Allahu akbar*, prostrate again. *Subhan Allah* ×3."
  - pose: qiyam
    text: "*Allahu akbar*, stand for the second rak'ah, and do it all once more."
  - pose: tashahhud
    text: "*Allahu akbar*, sit, and say the shahada."
  - pose: salam-right
    text: "*As-salamu 'alaykum wa rahmatullah*, to the right…"
  - pose: salam-left
    text: "…and to the left. Done."
done_text: "That's a whole prayer. Reopen Day 3 any time for the full walkthrough."
```

### 9 · steps
```yaml
title: "The prayers you missed (qada)"
intro: "They still get made up [Bukhari 597], but not all today."
steps:
  - text: "Add one make-up with each prayer, or more when you can."
    pic: icon:ListChecks
  - text: "{{mentor.name}} or the imam can help you count them and make a plan."
    pic: icon:MessageCircle
  - text: "Prayers from before you were Muslim aren't owed.{women} Neither are prayers missed during a period.{/women}"
    pic: icon:CircleCheck
done_text: "Chip away, a little each day. Big numbers shrink that way."
variants:
  hanafi:
    steps:
      - text: "Six or more owed? The order doesn't matter."
        pic: icon:ListChecks
      - text: "Fewer than six? Pray them before the current prayer, when there's time."
        pic: icon:Clock
      - text: "Add one make-up with each prayer, or more when you can."
        pic: prayer-mat
      - text: "{{mentor.name}} or the imam can help you count and plan."
        pic: icon:MessageCircle
      - text: "Prayers from before Islam aren't owed.{women} Neither are prayers missed during a period.{/women}"
        pic: icon:CircleCheck
```

### 10 · scenario
```yaml
pic: icon:Mountain
situation: "Luis stopped praying for a month after a rough patch. He wants to come back, but the number of missed prayers feels so big that he keeps putting it off."
options:
  - text: "Pray today's next prayer, message his mentor, and add one make-up per prayer from tomorrow"
    best: true
    feedback: "Yes. Start with today, get help with the count, and chip away. That's how big numbers shrink."
  - text: "Wait until he can make them all up in one weekend"
    best: false
    feedback: "Not quite. Waiting for the perfect weekend keeps him away longer. Start with the next prayer."
  - text: "Decide it's too late and that Islam isn't for him"
    best: false
    feedback: "Not quite. It's never too late. Allah doesn't burden anyone beyond what they can carry [Q 2:286]."
```

### 11 · ask_ai
```yaml
chips:
  - "How do I count and make up a lot of missed prayers?"
  - "I've had doubts while I was away. Can we talk?"
  - "I don't feel anything when I pray anymore. Is that normal?"
  - "Can you walk me through the prayer again?"
```

### 12 · reflect
```yaml
prompt: "What do you want your faith to look like a month from now? Write one small thing you'll do every day to get there."
share_with_mentor: optional
```

### 13 · do_today
```yaml
pic: icon:MessageCircle
text: "Pray the next prayer, then reach out."
steps:
  - "Pray the next prayer that's due"
  - "Message {{mentor.name}}: \"I've been away for a bit, but I'm back. Could we catch up this week?\""
  - "This week, revisit one lesson from your check-in's \"worth a refresher\" list"
log: reconnected_with_mentor
optional_extra: "Tomorrow, add one make-up prayer after your anchor prayer."
```

### 14 · takeaway
```yaml
pic: fresh-start
text: "No catch-up, no shame. Pray today's five with what you know, make up missed prayers a little at a time, and reconnect with your mentor."
```

### 15 · closing
You came back. That's the hardest step, and it's done. Slow and steady.

---

## Check
```yaml
- prompt: "After a long break, what comes first?"
  options:
    - text: "Today's prayers, on time, with what you know"
      correct: true
      feedback: "Right. Today first; the make-ups follow a little at a time."
    - text: "Making up every missed prayer before praying today's"
      correct: false
      feedback: "Not quite. Pray today's on time, and chip away at the make-ups alongside."
- prompt: "Does feeling far from your faith mean you've left Islam?"
  options:
    - text: "No. Feeling low isn't leaving; leaving is a choice to reject it"
      correct: true
      feedback: "Right. A slump is part of the road, and it can turn around."
    - text: "Yes, if you stopped praying for a while"
      correct: false
      feedback: "Not quite. You're a Muslim who's struggling, and today you start again."
```

## AI guide context
**Lesson facts**
- Don't despair of Allah's mercy [Q 39:53]; His joy at a servant's return [Muslim 2747]; He comes toward the one who comes toward Him [Bukhari 7405]; no soul is burdened beyond its capacity [Q 2:286]; the best of those who err are those who repent [Tirmidhi 2499].
- The most beloved deeds are regular, even if small [Bukhari 6464].
- All five prayers are due; pray each with what you know (Q4). Missed prayers are made up [Bukhari 597]; deliberately missing is a sin repaired by repentance plus make-up [First Instructions ch. 5]. Hanafi: with six or more owed, the order requirement drops [SeekersGuidance (makeup order)]; the usual plan is one or more make-ups with each current prayer, avoiding the three disliked times. If unsure of the count, estimate on the side of caution with the imam's help.
- Not owed: prayers before Islam [IslamWeb 243298]; prayers missed during menstruation or postnatal bleeding.
- Iman dips (Q20): "Feeling low is not leaving Islam. Leaving is a choice to reject it."

**Likely questions**
- *"How do I count?"* Days without praying × 5, minus any days on a period, minus any prayed. If unsure, round up a little. Then one make-up per prayer (more on free days). For months, escalate to the imam for a plan.
- *"I've had doubts."* Welcome them, take them seriously, no pressure (Spec §6.2 rule 5). Ask what's on their mind, answer from the curriculum, offer the imam or a scholar.
- *"I don't feel anything when I pray."* Normal in a slump. Keep praying; feelings often follow the habit. Small extras: a du'a in their own words after the prayer.
- *"Walk me through the prayer."* Yes, step by step from Day 3, at their pace.

**Escalate:** many months of missed prayers; serious doubts or a wish to leave Islam (calm, never pressure; offer the imam or a scholar); signs of depression, self-harm or danger at home (safety rule first, crisis resources); a convert pushed away by harsh treatment at the masjid (mentor, discreetly).

**Don't**
- Don't mention how many days or lessons they missed, or any streak.
- Don't ask why they left; let them share if they want.
- Don't use guilt, Hell or the word "apostasy."
- Don't present a reduced obligation ("just pray once a day for now").

## Madhab note
- **Order of make-ups:** the Hanafi school drops the order requirement once six or more prayers are owed; the Maliki school requires order only when a few are owed; the Hanbali school requires it even for many, with some exceptions; the Shafi'i school recommends it. Ask your imam for a plan if you have many to make up.

## Sources
- Qur'an [39:53](https://quran.com/39/53), [2:286](https://quran.com/2/286).
- [Muslim 2747](https://sunnah.com/muslim:2747): Allah's joy at His servant's repentance.
- [Bukhari 7405](https://sunnah.com/bukhari:7405): Allah comes nearer to the one who comes near to Him.
- [Bukhari 6464](https://sunnah.com/bukhari:6464): the most beloved deeds are regular, even if small.
- [Bukhari 597](https://sunnah.com/bukhari:597): pray a forgotten prayer when you remember it.
- [Tirmidhi 2499](https://sunnah.com/tirmidhi:2499) (hasan, al-Albani): the best of those who err are those who repent.
- [[Source - First Instructions on Worship]] ch. 5 (missing the prayer time).
- [SeekersGuidance: the current prayer while make-ups are owed](https://seekersguidance.org/answers/hanafi-fiqh/what-is-the-ruling-of-a-current-prayer-while-leaving-the-make-up-prayers/).
- [IslamWeb 243298](https://www.islamweb.net/en/fatwa/243298/does-the-person-who-embraces-islam-have-to-perform-the-prayers-he-missed-on-that-day).

## Scholar flags
- **Screen 4 (Q20).** "Feeling low is not leaving Islam. Leaving is a choice to reject it." Drafted as in Spec §9.
- **Screen 7 (Q4).** "All five are due; pray each one with what you know so far." Drafted as in Spec §9.
