---
day: 12
phase: 1
unit: 2
title: "Iman goes up and down"
hook: "Some days your faith will feel bright. Some days it'll feel flat. Both are normal, and a flat day doesn't mean you're leaving."
minutes: 5
skills: [S4]
pain_points: [iman-dips]
logs: []
madhab_sensitive: false
scholar_flags: [Q20]
status: draft-pending-scholar-review
glossary: [iman, dhikr, Allah, ﷺ]
sources: [Muslim 2750, Muslim 132, Q 48:4, Bukhari 6464, Field Guide ch. 6 and 18, Yaqeen 2025, Personal Research via reddit, Research Notes - Retention and Convert Voices]
format: 2
---
# Day 12 · Iman goes up and down

### 1 · hook
```yaml
pic: icon:CloudRain
text: "Maybe it's already happened. The first days felt electric. Now a prayer feels like going through the motions, or you skipped one and felt nothing. And a scary thought creeps in: *\"What if I'm losing it?\"* You're not. Today: what's really going on."
```

### 2 · learn
```yaml
pic: icon:Activity
text: "**Iman** (faith) isn't a switch that's either on or off. It rises and falls, like energy or mood. The Qur'an describes believers *increasing* in faith [Q 48:4], and what can increase can also dip."
bubbles:
  - "Born Muslims go through this too. They just grew up knowing it's normal. Many converts don't, so a low week feels like a crisis [Personal Research via reddit]."
```

### 3 · widget
```yaml
widget: iman-graph
prompt: "What the first months often look like"
text: "Drag along the line. The dips are real, and they're part of the path, not the end of it."
points:
  - label: "Your shahada"
    text: "Everything feels bright and new."
  - label: "A few weeks in"
    text: "The slump. Prayer feels flat, maybe you miss one. Very common, and normal."
  - label: "You keep the basics"
    text: "You pray anyway, add a little dhikr, and tell someone. The dip starts to pass."
  - label: "Later on"
    text: "The bright days come back. The ups and downs stay, but now you know what to do with them."
```

### 4 · learn
```yaml
pic: icon:Users
text: "**Even the Companions felt it.** Hanzalah feared he'd become a hypocrite: with the Prophet ﷺ, Paradise and Hell felt close enough to see, but at home it faded. He told Abu Bakr. Abu Bakr said, \"Me too.\""
bubbles:
  - "They asked the Prophet ﷺ. Gently, he said that if they stayed at that peak always, angels would greet them in the street."
  - "Then, three times: *a time for this, and a time for that* [Muslim 2750]."
```

### 5 · reveal
```yaml
title: "A dip is… and isn't…"
cards:
  - front: "Prayer feels empty, like I'm just reciting words."
    back: "A dip. Praying anyway, without the feeling, is real faith. The feeling comes back."
    pic: prayer-mat
  - front: "I missed a prayer and didn't feel bad enough."
    back: "A dip. Pray it as soon as you can, and ask Allah to soften your heart. That asking is iman."
    pic: dua
  - front: "I'm doubting whether I'm a 'real' Muslim."
    back: "A dip. Worrying about your faith shows you care about it. People who've walked away don't usually lie awake over it."
    pic: icon:Moon
  - front: "I've decided Islam is false and I reject it."
    back: "That's not a dip. That's a decision to leave. A low mood, a bad week or a doubt you're still working through is not that. If leaving is where you are, please talk to someone first."
    pic: icon:Signpost
```

### 6 · learn
```yaml
pic: icon:HeartHandshake
text: "**The line to remember:** feeling low is not leaving Islam. Leaving is a choice to reject it. `[SCHOLAR: Q20]` A tired heart, a missed prayer, a hard question: none of these takes you out of Islam."
bubbles:
  - "When some Companions had thoughts too awful to say aloud, the Prophet ﷺ told them that being troubled by those thoughts was itself a sign of faith [Muslim 132]."
```

### 7 · fill
```yaml
before: "Feeling low is not leaving Islam. Leaving is a"
after: "to reject it."
options:
  - text: "choice"
    correct: true
    feedback: "Yes. Leaving is a decision. A low mood, a missed prayer or a doubt isn't that decision."
  - text: "feeling"
    correct: false
    feedback: "Not quite. Feelings rise and fall. Leaving is a choice to reject Islam, not a mood."
  - text: "bad week"
    correct: false
    feedback: "Not quite. A bad week is a dip. Leaving is a choice to reject Islam."
```

### 8 · scenario
```yaml
pic: icon:CloudRain
situation: "Keisha is three weeks in. Her prayers feel flat, she snapped at her sister, and she skipped Isha last night. She thinks, \"I'm a fake. Maybe I should stop pretending.\""
options:
  - text: "Pray the next prayer anyway, make up Isha, and tell her mentor she's in a low patch"
    best: true
    feedback: "Yes. Keep the basics through the flat days, and don't carry it alone. That's how dips pass."
  - text: "Stop praying until the feeling comes back, so she isn't a hypocrite"
    best: false
    feedback: "Not quite. Praying without the feeling isn't hypocrisy, it's faithfulness. Hanzalah feared the same and was reassured [Muslim 2750]."
  - text: "Decide she's not cut out for Islam"
    best: false
    feedback: "Please don't decide on a low day. A dip is normal [Muslim 2750]. Talk to someone first."
```

### 9 · steps
```yaml
title: "What helps on a low day"
steps:
  - text: "**Keep the five,** even when they feel flat. Small and regular is what Allah loves most [Bukhari 6464]."
    pic: prayer-mat
  - text: "**Add one small dhikr** (remembrance of Allah): *Subhan Allah* a few times on your commute."
    pic: icon:Repeat
  - text: "**Be with people:** one Muslim friend, one visit to the masjid."
    pic: community
  - text: "**Tell {{mentor.name}}.** \"I'm in a dip\" is a normal thing to say."
    pic: icon:MessageCircle
  - text: "**Rest.** Sometimes a low soul is a tired body."
    pic: icon:Bed
```

### 10 · widget
```yaml
widget: tasbih
prompt: "Try one small dhikr now"
text: "The kind you could say on a commute or a hard afternoon. Tap once each time you say it."
phrases:
  - translit: "Subhan Allah"
    meaning: "Glory be to Allah"
    count: 3
```

### 11 · reflect
```yaml
prompt: "Write a note to your future self for a low day. What brought you to Islam? What do you want to remember when it feels flat? You'll see this again on Day 25."
share_with_mentor: optional
```

### 12 · ask_ai
```yaml
chips:
  - "I don't feel anything when I pray. Is something wrong with me?"
  - "Am I a hypocrite if I pray without feeling it?"
  - "I have doubts I can't shake. Who can I talk to?"
  - "How do I get my iman back up?"
```

### 13 · do_today
```yaml
pic: icon:NotebookPen
text: "Write your low-day plan."
steps:
  - "One prayer you'll protect, whatever the day is like"
  - "One small dhikr you'll say"
  - "One person you'll message"
log: null
optional_extra: "If you're in a dip right now, send {{mentor.name}} one line: \"I'm in a low patch.\" That's enough."
```

### 14 · takeaway
```yaml
pic: icon:TrendingUp
text: "Iman rises and falls; even the Companions felt it. Feeling low isn't leaving. Keep the basics and stay close to people."
```

### 15 · closing
The bright days will come back. Keep showing up on the flat ones.

---

## Prayer phrase
```yaml
arabic: |
  ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
  مَـٰلِكِ يَوْمِ ٱلدِّينِ
translit: "Ar-rahmanir-rahim. Maliki yawmid-din"
meaning: "The Most Gracious, the Most Merciful. Master of the Day of Judgment"
audio_id: fatiha-3-4
when: "Al-Fatiha, lines 2 and 3 (after Al-hamdu lillahi rabbil-'alamin). You met ar-Rahman and ar-Rahim on Day 6. [Q 1:3–4]"
```

## Check
```yaml
- prompt: "What did the Prophet ﷺ tell Hanzalah, who feared his faith dropped at home?"
  options:
    - text: "There's a time for this and a time for that; faith rises and falls"
      correct: true
      feedback: "Right [Muslim 2750]. He reassured him rather than calling him a hypocrite."
    - text: "That he had become a hypocrite"
      correct: false
      feedback: "Not quite. He reassured him: a time for this, and a time for that [Muslim 2750]."
- prompt: "Your prayers feel flat this week. Does that mean you're leaving Islam?"
  options:
    - text: "No. Feeling low isn't leaving; keep praying through it"
      correct: true
      feedback: "Right. Leaving is a choice to reject Islam. A dip is normal."
    - text: "Yes, if the feeling doesn't come back soon"
      correct: false
      feedback: "Not quite. Feelings rise and fall. Leaving is a choice to reject Islam, not a low mood."
```

## AI guide context
**Lesson facts**
- Faith increases [Q 48:4] and, as scholars teach, decreases; fluctuation is normal [Field Guide ch. 6].
- Hanzalah feared hypocrisy because his faith felt strong with the Prophet ﷺ and weaker at home; the Prophet ﷺ reassured him ("a time for this, a time for that," three times) [Muslim 2750].
- Distress over terrible thoughts is a sign of real faith [Muslim 132].
- Regular small deeds are most beloved [Bukhari 6464].
- Convert insight: born Muslims have an identity cushion; converts fear a low patch means they'll leave [Personal Research via reddit]. A known pattern: practicing fully, then suddenly stopping and calling oneself a hypocrite [Research Notes - Retention and Convert Voices, V4]. 23% of US converts have considered leaving because of doubts [Yaqeen 2025].
- Approved wording (Q20, drafted): "Feeling low is not leaving Islam. Leaving is a choice to reject it."

**Likely questions**
- *"I feel nothing when I pray."* Very common. Keep praying; try slowing down, knowing the meaning of what you say (the phrase track helps), praying at the masjid once, and du'a in your own words.
- *"Am I a hypocrite?"* No: hypocrisy is outwardly showing faith while inwardly rejecting it. Praying while struggling is the opposite. Hanzalah [Muslim 2750].
- *"I have doubts."* Doubts are welcome here; Day 33 covers them; offer to connect them with the imam or a scholar. Don't argue.
- *"How do I raise my iman?"* Company, dhikr, Qur'an (even a verse), du'a, rest, the mentor. One small thing at a time.
- *"I stopped praying for a week."* Welcome them back warmly; start with the next prayer; make up missed ones gradually (Day 21); no shame.

**Escalate:** signs of depression, hopelessness or self-harm (safety rule 6 first: 988, offer to alert their chosen person); persistent doubts the convert wants to talk through with a scholar; anyone who says they've decided to leave (respond kindly, no pressure or threats, offer the imam).

**Don't**
- Don't say or imply that a low patch, a sin or a doubt makes someone a non-Muslim.
- Don't discuss the legal punishment for apostasy (fixed-policy topic, Spec §6.2 rule 11); route to the imam.
- Don't use Hell or fear to pull them back.
- Don't diagnose; suggest a professional for persistent low mood alongside spiritual help.

## Sources
- [Muslim 2750](https://sunnah.com/muslim:2750): Hanzalah ("a time for this and a time for that").
- [Muslim 132](https://sunnah.com/muslim:132): distress over terrible thoughts is a sign of faith.
- Qur'an [48:4](https://quran.com/48/4) (faith increasing); [1:3–4](https://quran.com/1/3-4) (Arabic copied from the quran.com text).
- [Bukhari 6464](https://sunnah.com/bukhari:6464): regular small deeds.
- [[Source - The New Muslims Field Guide]] ch. 6 (iman fluctuates; it's normal), ch. 18 (the slump a few weeks in).
- [[Personal Research via reddit on pain points for converts]] (fear that low iman means leaving); [[Research Notes - Retention and Convert Voices]] (V4); [Yaqeen Institute, *Becoming Muslim* (2025)](https://yaqeeninstitute.org/read/data/reports/becoming-muslim-lives-of-american-converts-to-islam).

## Scholar flags
- **Screen 6 (Q20).** "Feeling low is not leaving Islam. Leaving is a choice to reject it." Used as drafted in Spec §9. Supporting text: the Hanzalah hadith [Muslim 2750] and Muslim 132. The fill on screen 7 drills the same line, and the reveal card on screen 5 ("That's not a dip. That's a decision to leave") restates the same line; it doesn't discuss rulings on apostasy.
