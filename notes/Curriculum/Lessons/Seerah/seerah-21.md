---
track: seerah
order: 21
phase: null
unit: null
title: "The cave and the road"
hook: "The trackers stood at the cave's mouth. One sentence kept two hunted men calm: Allah is with us."
minutes: 6
skills: [T2, B6]
pain_points: [anxiety, loneliness, identity]
logs: []
madhab_sensitive: false
scholar_flags: [Q43]
status: draft-pending-scholar-review
glossary: [Allah, ﷺ, Makkah, tawakkul, Quraysh]
sources: [Q 9:40, Bukhari 3653, Bukhari 3905, Bukhari 3906, Bukhari 3911, Tirmidhi 2516, IslamQA 10063, IslamQA 11575, IslamQA 27224]
format: 2
---
# seerah-21 · The cave and the road

### 1 · hook
```yaml
pic: icon:Mountain
text: "**The trackers were standing at the mouth of the cave.** Abu Bakr said that if they only looked down at their feet, they'd see them. The Prophet ﷺ answered him: what do you think of two, when Allah is their third? [Bukhari 3653]"
```

### 2 · learn
```yaml
pic: icon:Mountain
text: "**Three nights in a cave.** They hid in the cave of Thawr, on a mountain outside Makkah. Abu Bakr's son came each night with news from the city [Bukhari 3905; IslamQA 10063]."
bubbles:
  - "'Amir ibn Fuhayrah, a freed man of Abu Bakr's household, brought his sheep near the cave after dark, so they had fresh milk each night [Bukhari 3905]."
```

### 3 · fill
```yaml
before: "He said to his companion, \"Do not grieve; indeed Allah is"
after: "us.\" [Q 9:40]"
options:
  - text: "with"
    correct: true
    feedback: "Yes. The Qur'an itself records those words from the cave."
  - text: "watching"
    correct: false
    feedback: "Not quite. Allah sees everything, but the verse says: Allah is with us."
  - text: "testing"
    correct: false
    feedback: "Not quite. In that moment, the words were comfort: Allah is with us."
```

### 4 · learn
```yaml
pic: quran
text: "**The Qur'an remembers that moment.** Allah later revealed it: he said to his companion, *\"Do not grieve; indeed Allah is with us.\"* And Allah sent down His tranquility upon him [Q 9:40, Saheeh Intl.]."
bubbles:
  - "Two men, hunted, with the trackers close enough to see them. That's where these words were said."
```

### 5 · widget
```yaml
widget: timeline
prompt: "From the cave to the road"
text: "The most dangerous days of the journey."
events:
  - when: "Three nights"
    title: "The cave of Thawr"
    text: "They hide while news and milk arrive after dark [Bukhari 3905]."
    pic: icon:Mountain
  - when: "In the cave"
    title: "Allah is with us"
    text: "Trackers come close; he comforts Abu Bakr [Bukhari 3653; Q 9:40]."
    pic: icon:Heart
  - when: "Then"
    title: "Onto the road"
    text: "Their guide leads them along the coast [Bukhari 3905]."
    pic: icon:Route
  - when: "On the road"
    title: "Suraqah"
    text: "A rider chasing the reward catches up, and his horse sinks into the ground [Bukhari 3906]."
    pic: icon:Footprints
  - when: "Years later"
    title: "Suraqah's Islam"
    text: "Suraqah becomes Muslim, the early sources report [IslamQA 11575]."
    pic: icon:UserCheck
```

### 6 · learn
```yaml
pic: icon:Footprints
text: "**A rider and a reward.** Quraysh offered a large reward for them. A rider named Suraqah ibn Malik caught up, but his horse's legs sank into the ground, more than once. He asked for safety, and they wrote him a promise of it [Bukhari 3906]."
bubbles:
  - "That morning he was hunting them. By the end of the day he was steering others away from them [Bukhari 3911]. Years later he became Muslim, the early sources report [IslamQA 11575]."
```

### 7 · choice
```yaml
pic: icon:Footprints
prompt: "Suraqah had chased them to hand them over. When he asked for safety, what did they do?"
options:
  - text: "Gave him a written promise of safety"
    correct: true
    feedback: "Right. The hunter left protected by the people he was hunting [Bukhari 3906]."
  - text: "Took his horse and left him in the desert"
    correct: false
    feedback: "Not quite. They gave him what he asked for: a written promise of safety."
  - text: "Made him swear to join them"
    correct: false
    feedback: "Not quite. No pressure. He became Muslim years later, by his own choice."
```

### 8 · learn
```yaml
pic: icon:Heart
text: "**A lifeline for anyone who feels alone.** If you're hiding your faith at home, praying in a car, or feeling like everyone's watching you, the words from the cave are for you too. Allah is with you, in the tightest spot."
bubbles:
  - "Day 43 said it too: what Allah has written for you, no one can take [Tirmidhi 2516]. Do your part, then rest in that: **tawakkul**."
```

### 9 · scenario
```yaml
pic: icon:House
situation: "Destiny hasn't told her roommates she's Muslim. She prays quietly in her room with the door locked, and her heart pounds every time someone walks past. Tonight she feels completely alone."
options:
  - text: "Pray anyway, remind herself Allah is with her, and message her mentor about next steps"
    best: true
    feedback: "Yes. Calm effort plus trust. Two in a cave weren't alone, and neither is she."
  - text: "Stop praying until she's ready to tell them"
    best: false
    feedback: "Not quite. She can pray quietly and privately now. Telling people can wait for the right time."
  - text: "Tell everyone tonight so she doesn't have to hide"
    best: false
    feedback: "Not quite. There's no rush. The Prophet ﷺ planned carefully too. Her mentor can help her choose the time."
```

### 10 · ask_ai
```yaml
chips:
  - "Was there really a spider web over the cave?"
  - "Who was Suraqah?"
  - "What does \"Allah is with us\" mean?"
  - "I'm hiding my faith. How do I cope?"
```

### 11 · do_today
```yaml
pic: icon:Heart
text: "Carry the cave's words with you today."
steps:
  - "Learn the line: Allah is with us"
  - "Say it to yourself the next time you feel anxious or alone"
  - "Then take one small practical step"
log: null
```

### 12 · takeaway
```yaml
pic: icon:Mountain
text: "Two men in a cave, trackers at the door, and one sentence: Allah is with us. It's still true for you."
```

### 13 · closing
Next episode: a whole town waits each morning for one traveller, and a camel chooses where to kneel.

---

## Check
```yaml
- prompt: "What did the Prophet ﷺ tell Abu Bakr in the cave, as the Qur'an records?"
  options:
    - text: "Do not grieve; indeed Allah is with us"
      correct: true
      feedback: "Right. That's Q 9:40."
    - text: "Run while you can"
      correct: false
      feedback: "Not quite. He stayed calm and comforted his friend: Allah is with us."
- prompt: "What happened to Suraqah, the rider chasing them?"
  options:
    - text: "His horse sank, he asked for safety, and they gave him a written promise"
      correct: true
      feedback: "Right. And according to the early sources, he later became Muslim."
    - text: "He caught them and took them back to Makkah"
      correct: false
      feedback: "Not quite. His horse sank into the ground more than once, and he asked them for safety."
```

## AI guide context
**Lesson facts**
- They hid three nights in the cave of Thawr. Abu Bakr's son 'Abdullah brought news each night, and 'Amir ibn Fuhayrah, Abu Bakr's freed slave, brought sheep near the cave after dark so they had milk [Bukhari 3905; IslamQA 10063].
- Abu Bakr feared the trackers would see them; the Prophet ﷺ asked what he thought of two whose third is Allah [Bukhari 3653]. The Qur'an: "Do not grieve; indeed Allah is with us" [Q 9:40].
- Their guide then led them along the coast [Bukhari 3905].
- Quraysh offered a large reward (IslamQA 11575 says two hundred camels; Bukhari 3906 says each one's blood-money). Suraqah ibn Malik caught up; his horse's legs sank more than once; he asked for safety and was given it in writing [Bukhari 3906; IslamQA 11575].
- Another narration: in the first part of the day Suraqah was chasing them, and by the end of it he was protecting them, keeping others off their trail [Bukhari 3911].
- Suraqah later became Muslim (IslamQA 11575: after the conquest of Makkah).

**Likely questions**
- *"Was there a spider web and a dove's nest at the cave?"* It's a well-known story whose chain scholars differ on (some graded the spider report acceptable, others weak), and the doves are weaker still [IslamQA 27224]. What's certain is the Qur'an's "Allah is with us." `[SCHOLAR: Q43]`
- *"Did angels cover the cave?"* That report is weak [IslamQA 27224]. Q 9:40 says Allah supported him with soldiers you did not see; leave the details there.
- *"Was 'Amir a slave?"* He had been enslaved and was freed (he's called Abu Bakr's freed slave in the hadith). Slavery existed everywhere then; questions beyond this go to the imam.
- *"I'm hiding my faith. How do I cope?"* Listen first. Private worship is fine; there's no deadline for telling people. Link to the mentor. If they're in any danger, the safety rule applies.

**Escalate:** any danger at home (safety rule first); detailed questions about slavery.

**Don't**
- Don't tell the spider, dove or angels-covering-the-cave stories as fact.
- Don't describe the Prophet's ﷺ appearance (Umm Ma'bad's description is outside the six collections and is left out).
- Don't push a convert to "come out" about their faith.

## Sources
- Qur'an [9:40](https://quran.com/9/40) ("Do not grieve; indeed Allah is with us").
- [Bukhari 3653](https://sunnah.com/bukhari:3653) (Sahih): two whose third is Allah.
- [Bukhari 3905](https://sunnah.com/bukhari:3905) (Sahih): three nights in Thawr; 'Abdullah's news; 'Amir's sheep and milk; the guide along the coast.
- [Bukhari 3906](https://sunnah.com/bukhari:3906) (Sahih): Suraqah, the reward, the sinking horse, the written promise of safety.
- [Bukhari 3911](https://sunnah.com/bukhari:3911) (Sahih): Suraqah, an enemy in the morning and a protector by evening.
- [Tirmidhi 2516](https://sunnah.com/tirmidhi:2516) (Sahih, al-Albani): what Allah has written for you (Day 43 link).
- [IslamQA 10063, *Hijrah of the Prophet*](https://islamqa.info/en/answers/10063): the cave of Thawr.
- [IslamQA 11575, *Who Is Muhammad?*](https://islamqa.info/en/answers/11575): the reward; Suraqah's later Islam.
- [IslamQA 27224, *The cave of Thawr*](https://islamqa.info/en/answers/27224) (AI guide only): the spider, dove and angels reports and their grading.
- Fact rows 21.1–21.7 and X10–X13 in [[Seerah Fact-Check Log]].

## Scholar flags
- **AI guide (Q43).** The spider web and dove stories stay off screens; if asked, they are "a well-known story whose chain scholars differ on", and the certain point is Q 9:40.
