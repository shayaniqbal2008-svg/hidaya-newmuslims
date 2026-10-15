---
day: 83
phase: 3
unit: 10
title: "Allah's mercy is bigger"
hook: "If you've been worried you're not good enough for Allah, this one is for you."
minutes: 5
skills: [S4, S5]
pain_points: [guilt, anxiety]
logs: []
madhab_sensitive: false
scholar_flags: []
status: draft-pending-scholar-review
glossary: [Allah, ﷺ, tawbah, du'a, iman]
sources: [Q 39:53, Q 25:70, Q 2:286, Muslim 2752, Bukhari 7405, Muslim 2749, Tirmidhi 2499, Revealed Path ch. 8, Yaqeen 2025]
format: 2
---
# Day 83 · Allah's mercy is bigger

# Day 83 · Allah's mercy is bigger

### 1 · hook
```yaml
pic: dua
text: "Some converts carry a quiet fear: \"Am I doing enough? What if Allah is angry with me?\" If that's you, take a breath. Today is about how big Allah's mercy really is."
```

### 2 · learn
```yaml
pic: quran
text: |
  **The verse for worried hearts.** Allah tells people who have wronged themselves:

  > "do not despair of the mercy of Allāh. Indeed, Allāh forgives all sins" [Q 39:53, Saheeh Intl.]
bubbles:
  - "Notice who it speaks to: not perfect people, but people who have slipped. That includes you on your worst day."
```

### 3 · fill
```yaml
before: "The Prophet ﷺ taught that Allah made mercy in a hundred parts. He sent"
after: "to the world, and kept the rest [Muslim 2752]."
options:
  - text: "one part"
    correct: true
    feedback: "Yes. All kindness between people and animals comes from that one part; He kept ninety-nine. The kindest person you know shows a tiny share."
  - text: "fifty parts"
    correct: false
    feedback: "Not quite. Just one part came to the world, and every bit of kindness here comes from it. Allah kept ninety-nine [Muslim 2752]."
  - text: "all of it"
    correct: false
    feedback: "Not quite. Only one part came to the world. Allah kept the other ninety-nine [Muslim 2752]. His mercy is far bigger."
```

### 4 · reveal
```yaml
title: "What the worry says vs. what Allah says"
cards:
  - front: "\"I've messed up too many times.\""
    back: "Allah forgives all sins for the one who turns back to Him [Q 39:53]. There's no limit on coming back."
    pic: icon:DoorOpen
  - front: "\"Allah must be tired of me.\""
    back: "If you come to Allah walking, He comes to you running [Bukhari 7405]. He's never the one who gives up."
    pic: icon:Footprints
  - front: "\"Real Muslims don't sin.\""
    back: "Every person makes mistakes; the best are those who keep repenting [Tirmidhi 2499]. Sinning and coming back is part of being human [Muslim 2749]."
    pic: icon:RefreshCw
  - front: "\"My prayers aren't good enough to count.\""
    back: "Allah asks only what you can carry [Q 2:286]. Imperfect prayer from a sincere heart is still prayer."
    pic: prayer-mat
```

### 5 · steps
```yaml
title: "How to come back: tawbah"
intro: "**Tawbah** (repentance, literally \"returning\") is simple."
steps:
  - text: "Feel sorry for it."
    pic: icon:HeartCrack
  - text: "Stop it."
    pic: icon:OctagonX
  - text: "Intend not to go back."
    pic: intention
  - text: "If you wronged a person, make it right where you can."
    pic: icon:Handshake
done_text: "Then let it go. Allah can even turn past wrongs into good [Q 25:70]."
```

### 6 · widget
```yaml
widget: iman-graph
prompt: "A slip isn't the end of the story"
text: "Drag along the line."
points:
  - label: "The slip"
    text: "You fall back into an old habit. Sinning and coming back is part of being human [Muslim 2749]."
  - label: "The worry"
    text: "\"Allah must be tired of me.\" That's the worry talking. Don't despair of His mercy [Q 39:53]."
  - label: "Tawbah"
    text: "You turn back to Allah. Come to Him walking, and He comes to you running [Bukhari 7405]."
  - label: "Steady again"
    text: "Pray the next prayer and keep going. Allah can even turn past wrongs into good [Q 25:70]."
```

### 7 · scenario
```yaml
pic: icon:Footprints
situation: "Dre slipped back into an old habit last week. Now he feels like a fake and has stopped praying. 'Why bother?' he thinks. What would help him most?"
options:
  - text: "Make tawbah, pray the next prayer, and tell his mentor he's struggling"
    best: true
    feedback: "Yes. Come back, keep praying, and don't carry it alone. The slip doesn't cancel his Islam."
  - text: "Wait until he feels worthy again before praying"
    best: false
    feedback: "Not quite. Prayer is how he comes back, not a reward for being perfect first. Pray now."
  - text: "Decide he's not cut out for Islam"
    best: false
    feedback: "Please no. Struggling isn't failing. Allah's door is open, and his mentor can help."
```

### 8 · learn
```yaml
pic: icon:LifeBuoy
text: "**When worry won't switch off.** Constant fear of being unforgiven, or checking your prayers over and over, can be anxiety, not faith. That's not your fault, and it's treatable."
bubbles:
  - "Talk to {{mentor.name}}, and to a doctor or counselor. Getting help is part of looking after yourself (Day 45)."
```

### 9 · reflect
```yaml
prompt: "What's one thing you've been afraid Allah won't forgive, or one way you've been too hard on yourself? Write it, then write Q 39:53 underneath in your own words. This stays private."
share_with_mentor: optional
```

### 10 · ask_ai
```yaml
chips:
  - "How do I know Allah has forgiven me?"
  - "I keep repeating the same sin"
  - "Is my anxiety a sign of weak iman?"
  - "Teach me a short du'a for forgiveness"
```

### 11 · do_today
```yaml
pic: icon:DoorOpen
text: "Come back, and pray knowing the door is open."
steps:
  - "Make tawbah for anything weighing on you, in your own words"
  - "Pray your next prayer knowing the door is open"
log: null
optional_extra: "If worry is taking over your days, message {{mentor.name}} or book time with a counselor this week."
```

### 12 · takeaway
```yaml
pic: dua
text: "Allah's mercy is bigger than your worst mistake. Come back, as many times as it takes."
```

### 13 · closing
You're not being graded on perfect. You're being welcomed back, every time.

---

## Check
```yaml
- prompt: "According to Q 39:53, what should someone who has sinned do?"
  options:
    - text: "Not despair of Allah's mercy, and turn back to Him"
      correct: true
      feedback: "Right. Allah forgives all sins for those who return."
    - text: "Accept that some sins are too big"
      correct: false
      feedback: "Not quite. The verse says Allah forgives all sins. Don't despair."
- prompt: "Dre slipped and feels like a fake. When should he pray again?"
  options:
    - text: "The next prayer, right away"
      correct: true
      feedback: "Right. Prayer is part of coming back, not a prize for being perfect."
    - text: "Once he feels worthy"
      correct: false
      feedback: "Not quite. Waiting to feel worthy keeps him away. Pray now."
```

## AI guide context
**Lesson facts**
- Do not despair of Allah's mercy; He forgives all sins for those who return [Q 39:53]. Repentance can turn past wrongs into good [Q 25:70].
- Mercy in a hundred parts; one sent to the world, ninety-nine kept [Muslim 2752].
- Allah is as His servant thinks of Him; come walking and He comes running [Bukhari 7405].
- Everyone errs; the best are those who repent [Tirmidhi 2499]; sinning and seeking forgiveness is human [Muslim 2749].
- Tawbah: regret, stop, resolve not to return, and make amends to people where possible.
- About a quarter of converts in Yaqeen's 2025 survey held a "distant, cop-like" image of God, linked to lower practice [Yaqeen 2025]. This lesson counters it.

**Likely questions**
- *"How do I know I'm forgiven?"* We trust Allah's promise for those who sincerely return; feeling sure isn't a condition. Keep doing good.
- *"I keep repeating the same sin."* Keep repenting every time; get practical help (mentor, counselor, Day 54); don't stop praying.
- *"Is anxiety weak iman?"* No. It's a health matter; faith and treatment go together. Encourage a professional.
- *"Teach me a du'a for forgiveness."* *Astaghfirullah* (I seek Allah's forgiveness), and *Rabbighfirli* from Day 21.

**Escalate:** a specific past wrong involving other people's rights (money, harm) that they want to make right: general advice, then the imam. Any sign of self-harm or hopelessness: safety rule 6 first (988, crisis resources), never only the imam queue.

**Don't**
- Don't list sins or rank them.
- Don't use Hell or punishment to motivate.
- Don't tell anyone their anxiety is a spiritual failing, or that dhikr alone replaces treatment.

## Sources
- Qur'an [39:53](https://quran.com/39/53), [25:70](https://quran.com/25/70), [2:286](https://quran.com/2/286).
- [Muslim 2752](https://sunnah.com/muslim:2752): mercy in a hundred parts.
- [Bukhari 7405](https://sunnah.com/bukhari:7405): come walking, He comes running.
- [Muslim 2749](https://sunnah.com/muslim:2749): people who sin and seek forgiveness.
- [Tirmidhi 2499](https://sunnah.com/tirmidhi:2499) (hasan, al-Albani): the best of those who err are those who repent.
- [[Source - The Revealed Path]] ch. 8 (Allah's mercy and names).
- [Yaqeen Institute, *Becoming Muslim* (2025)](https://yaqeeninstitute.org/read/data/reports/becoming-muslim-lives-of-american-converts-to-islam): the "cop-like God" image and practice.
