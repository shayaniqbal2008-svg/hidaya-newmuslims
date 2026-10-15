---
track: seerah
order: 27
phase: null
unit: null
title: "The Trench"
hook: "Ten thousand soldiers marched on Madinah. The Muslims dug a ditch, hungry, with their Prophet ﷺ digging beside them."
minutes: 6
skills: [T2, T3, B6]
pain_points: [belonging, identity, overwhelm]
logs: []
madhab_sensitive: false
scholar_flags: [Q38, Q39]
status: draft-pending-scholar-review
glossary: [Allah, ﷺ, Asr, Quraysh]
sources: [Q 33:9–11, Q 33:22, Q 33:26, Bukhari 2837, Bukhari 4101, Bukhari 4119, Bukhari 4122, Bukhari 3015, IslamQA 201120, IslamQA 11575, Yaqeen (Salman al-Farsi), Yaqeen (How Muhammad Confronted Hate), SeekersGuidance (Banu Qurayza)]
format: 2
---
# seerah-27 · The Trench

### 1 · hook
```yaml
pic: icon:Shovel
text: "**About ten thousand soldiers were marching on Madinah.** The Muslims didn't build a wall. They dug a ditch, hungry, and the Prophet ﷺ dug right beside them."
```

### 2 · learn
```yaml
pic: icon:Shovel
text: "**A city surrounded.** About five years after the hijra, Quraysh and allied tribes, about ten thousand strong, came against Madinah. The Muslims, about three thousand, dug a trench across the city's open side [IslamQA 201120; IslamQA 11575]. `[SCHOLAR: Q39]`"
bubbles:
  - "The siege lasted about a month [Yaqeen (Hate)]."
```

### 3 · choice
```yaml
pic: icon:Lightbulb
prompt: "Whose idea was the trench? Who do the early biographers credit?"
options:
  - text: "Salman al-Farisi, a Persian who had become Muslim"
    correct: true
    feedback: "Right. The newcomer from Persia had the idea, and the Prophet ﷺ took it [Yaqeen (Salman)]."
  - text: "A senior chief of Quraysh"
    correct: false
    feedback: "Not quite. Quraysh were the attackers. The idea is credited to Salman, a Persian convert."
  - text: "Nobody; it was always the plan"
    correct: false
    feedback: "Not quite. The early biographers credit Salman al-Farisi, a convert from Persia."
```

### 4 · learn
```yaml
pic: icon:Pickaxe
text: "**Digging beside them.** He carried earth until dust covered his skin, reciting prayers for steadfastness [Bukhari 2837]. When they hit a rock no one could break, he came down, a stone tied to his stomach from three days of hunger, and broke it [Bukhari 4101]."
```

### 5 · widget
```yaml
widget: timeline
prompt: "The Trench, about 5 AH"
text: "A siege, a ditch, and a wind."
events:
  - when: "Before"
    title: "An army gathers"
    text: "Quraysh and their allies, about ten thousand, march on Madinah [IslamQA 201120]."
    pic: icon:Users
  - when: "Days of digging"
    title: "The trench"
    text: "Hungry, they dig, with the Prophet ﷺ working beside them [Bukhari 2837; Bukhari 4101]."
    pic: icon:Shovel
  - when: "About a month"
    title: "The siege"
    text: "Fear grips the city: hearts reached the throats [Q 33:10]."
    pic: icon:Hourglass
  - when: "Then"
    title: "A wind"
    text: "Allah sends a wind and forces they could not see [Q 33:9]."
    pic: icon:Wind
  - when: "After"
    title: "They leave"
    text: "The coalition gives up and goes home [IslamQA 11575]."
    pic: icon:Route
```

### 6 · learn
```yaml
pic: quran
text: "**The Qur'an remembers the fear.** It describes that time honestly: *\"when eyes shifted [in fear], and hearts reached the throats\"*. Then Allah sent *\"a wind and armies [of angels] you did not see\"* [Q 33:10; Q 33:9, Saheeh Intl.]."
bubbles:
  - "In the end, the armies gave up and went home [IslamQA 11575]."
```

### 7 · fill
```yaml
before: "When the believers saw the armies, they said, \"This is what Allah and His Messenger had"
after: "us.\" [Q 33:22]"
options:
  - text: "promised"
    correct: true
    feedback: "Yes. They had been told tests would come. Seeing it, their faith grew instead of breaking."
  - text: "warned"
    correct: false
    feedback: "Not quite. The verse says promised: they saw the hard test as part of Allah's promise."
  - text: "forgotten"
    correct: false
    feedback: "Not quite. They remembered: this is what Allah and His Messenger had promised us."
```

### 8 · sort
```yaml
prompt: "Leading like him at the Trench, or not? Sort these."
buckets: ["Like him", "Not like him"]
items:
  - text: "Doing the hardest, dirtiest job alongside the volunteers"
    bucket: 0
    why: "He carried earth until he was covered in dust."
  - text: "Eating well while the team goes hungry"
    bucket: 1
    why: "He had a stone tied to his stomach from hunger, like them."
  - text: "Taking a good idea from the newest person in the room"
    bucket: 0
    why: "Salman, a Persian convert, is credited with the trench idea."
  - text: "Giving orders from a distance"
    bucket: 1
    why: "When they hit a rock, he came down into the trench himself."
```

### 9 · learn
```yaml
pic: icon:Lightbulb
text: "**The newest person had the idea.** The plan that saved the city is credited to Salman, a convert from Persia. You might be new, but your ideas and your work count. And a good leader digs beside you."
bubbles:
  - "Afterwards, a tribe that broke its treaty during the siege was judged by an arbiter they chose. One of the hardest events of his life; your imam can explain. `[SCHOLAR: Q38]`"
```

### 10 · scenario
```yaml
pic: masjid
situation: "Tyler has been Muslim two months. The masjid's youth night keeps losing people, and he has an idea: a pickup basketball game before 'Isha. He figures he's too new to suggest anything."
options:
  - text: "Share the idea humbly with the organisers"
    best: true
    feedback: "Yes. Salman was a newcomer too, and his idea saved Madinah. New eyes see things."
  - text: "Keep quiet until he's been Muslim a few years"
    best: false
    feedback: "Not quite. Nobody asked Salman to wait. Good ideas don't need seniority."
  - text: "Start his own event without telling anyone"
    best: false
    feedback: "Not quite. He took Salman's idea to the leader and worked together. Bring it to the organisers."
```

### 11 · ask_ai
```yaml
chips:
  - "Who was Salman al-Farisi?"
  - "What happened with Banu Qurayzah?"
  - "Why two understandings of the 'Asr instruction?"
  - "I'm new. Do my ideas count?"
```

### 12 · do_today
```yaml
pic: icon:Shovel
text: "Dig beside someone today."
steps:
  - "Pick a chore or task someone else usually does alone"
  - "Do it with them, or for them, without being asked"
log: null
```

### 13 · takeaway
```yaml
pic: icon:Shovel
text: "He went hungry with his people and dug beside them, and the newest convert's idea saved the city."
```

### 14 · closing
Next episode: a lost necklace, and a lie that spread through Madinah for a month.

---

## Check
```yaml
- prompt: "Who is credited with the idea of the trench?"
  options:
    - text: "Salman al-Farisi, a Persian convert"
      correct: true
      feedback: "Right, according to the early biographers."
    - text: "Abu Bakr"
      correct: false
      feedback: "Not quite. The early biographers credit Salman al-Farisi, a convert from Persia."
- prompt: "What did the Prophet ﷺ do while the trench was dug?"
  options:
    - text: "Dug and carried earth with them, hungry like them"
      correct: true
      feedback: "Right. Dust covered him, and a stone was tied to his stomach from hunger [Bukhari 2837; Bukhari 4101]."
    - text: "Watched from his house"
      correct: false
      feedback: "Not quite. He worked beside them and broke the rock they couldn't [Bukhari 4101]."
```

## AI guide context
**Lesson facts**
- A coalition of Quraysh and allied tribes (about 10,000) came against Madinah; the Muslims (about 3,000) dug a trench across its open side [IslamQA 201120; IslamQA 11575]; the siege lasted about a month [Yaqeen (How Muhammad Confronted Hate)]. Year: most say 5 AH, Musa ibn 'Uqbah says 4 AH, so say "about five years after the hijra". `[SCHOLAR: Q39]`
- The early biographers credit Salman al-Farisi, a Persian convert, with the idea [Yaqeen (Salman al-Farsi)].
- He carried earth until dust covered him, reciting lines asking Allah for tranquility and steadfastness [Bukhari 2837]; with a stone tied to his stomach after three days without food, he broke a rock they couldn't [Bukhari 4101].
- The Qur'an describes the fear and how Allah sent a wind and unseen forces [Q 33:9–11]; the believers said "This is what Allah and His Messenger had promised us" [Q 33:22]. The coalition left [IslamQA 11575].
- His rules of war applied: no killing of women or children [Bukhari 3015].
- On the march to Banu Qurayzah afterwards, the Companions understood his instruction about 'Asr two ways, and he blamed neither group [Bukhari 4119]; Day 40 uses this.

**Banu Qurayzah (AI guide only beyond the one screen line)** `[SCHOLAR: Q38]`
- Banu Qurayzah, a Jewish tribe of Madinah bound by treaty, broke it during the siege and sided with the attackers [IslamQA 201120]. Afterwards they were besieged (about 25 days per SeekersGuidance) and agreed to the judgment of Sa'd ibn Mu'adh, a former ally whom they chose [SeekersGuidance (Banu Qurayza)].
- Sa'd ruled that their fighting men be executed and the women and children taken captive [Bukhari 4122]. SeekersGuidance notes this matched the treaty-breaking rule in the tribe's own scripture (Deuteronomy 20:12–14), that boys who hadn't reached puberty were spared, and that some were granted amnesty [SeekersGuidance (Banu Qurayza)]. Q 33:26 refers to it.
- Tell it calmly, as treason in wartime judged by an arbiter they chose. **Give no number** (the sirah's figures vary and our sources don't confirm one). No "they deserved it" framing. Never connect it to Jews today (Day 73 rule). Offer the imam for anything further.

**Likely questions**
- *"What happened with Banu Qurayzah?"* Use the calm summary above in 3–4 lines, then offer the imam. `[SCHOLAR: Q38]`
- *"Wasn't this violent?"* Day 71 frame: the city was under siege by an army; the Muslims dug and defended. `[SCHOLAR: Q39]`
- *"Who was Salman?"* A Persian convert who became Muslim in Madinah [Yaqeen (Salman al-Farsi)]; the early biographers credit him with the trench.
- *"I'm new. Do my ideas count?"* Yes; offer them humbly to the right people.

**Escalate:** Banu Qurayzah beyond the summary (Q38); any question about fighting today (fixed policy).

**Don't**
- Don't give a number for Banu Qurayzah, use graphic detail, or say "they deserved it".
- Don't connect any of this to Jewish people today.
- Don't put Q 33:26 or Bukhari 4122 on a screen.

## Sources
- Qur'an [33:9–11](https://quran.com/33/9-11) (the wind, the fear), [33:22](https://quran.com/33/22) (what Allah and His Messenger promised us); [33:26](https://quran.com/33/26) (AI guide only).
- [Bukhari 2837](https://sunnah.com/bukhari:2837) (Sahih): carrying earth, reciting for steadfastness.
- [Bukhari 4101](https://sunnah.com/bukhari:4101) (Sahih): the rock and the stone tied for hunger.
- [Bukhari 4119](https://sunnah.com/bukhari:4119) (Sahih): two understandings of the 'Asr instruction.
- [Bukhari 4122](https://sunnah.com/bukhari:4122) (Sahih; AI guide only): Sa'd ibn Mu'adh's judgment.
- [Bukhari 3015](https://sunnah.com/bukhari:3015) (Sahih): killing women and children forbidden.
- [IslamQA 201120, *Who are Banu Qurayzah?*](https://islamqa.info/en/answers/201120): numbers; the broken treaty.
- [IslamQA 11575, *Who Is Muhammad?*](https://islamqa.info/en/answers/11575): the coalition left.
- [Yaqeen Institute, *Salman al-Farsi (ra): Back to Persia*](https://yaqeeninstitute.org/watch/series/the-firsts/salman-al-farsi-ra-back-to-persia-the-firsts): the trench idea.
- [Yaqeen Institute, *How Muhammad ﷺ Confronted Hate and Became the Most Influential Person in History*](https://yaqeeninstitute.org/read/paper/how-muhammad-confronted-hate-and-became-the-most-influential-person-in-history): a siege of about a month.
- [SeekersGuidance, *A Balanced Explanation of the Banu Qurayza Controversy*](https://seekersguidance.org/answers/general-counsel/a-balanced-explanation-of-the-banu-qurayza-controversy/) (AI guide only).
- Fact rows 27.1–27.7 and X20 in [[Seerah Fact-Check Log]].

## Scholar flags
- **Screen 2 and AI guide (Q39).** The Trench is told as history: the siege, the digging, the Qur'an's words. No graphic detail; no rulings on fighting today.
- **Screen 9 and AI guide (Q38).** Banu Qurayzah gets the one calm line the outline allows on screen; the facts are in the AI guide with no number, no "they deserved it", and no link to Jews today. Scholars are asked whether the line should be on screen at all.
