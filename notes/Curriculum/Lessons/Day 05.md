---
day: 5
phase: 1
unit: 1
title: "Praying when you're not alone"
hook: "You can pray almost anywhere. Here's how to do it at home, at work and at school, even if nobody knows yet."
minutes: 5
skills: [P8]
pain_points: [praying-in-non-muslim-home]
logs: []
madhab_sensitive: true
scholar_flags: []
status: draft-pending-scholar-review
glossary: ["'awrah", qibla, wudu, salam, Dhuhr, Asr, Maghrib, Isha, Fajr, ﷺ]
sources: [Bukhari 335, Q 4:103, First Instructions on Worship ch. 5 and 7, Welcome to Islam D2, EEOC (Title VII religious accommodation), US Dept. of Education guidance on prayer in public schools, Research Notes - Retention and Convert Voices, Personal Research via reddit]
format: 2
---
# Day 5 · Praying when you're not alone

### 1 · hook
```yaml
pic: prayer-mat
text: "Prayer times don't wait until you're alone. Maybe your family doesn't know yet, or you share a room, or you're at work at Dhuhr. Today you'll pick your spots and know what to do if someone walks in."
```

### 2 · learn
```yaml
pic: icon:Globe
text: "**The whole earth is a place of prayer.** The Prophet ﷺ said the earth was made a place of prayer for his followers. So wherever you are when prayer time comes, you can pray [Bukhari 335]."
```

### 3 · steps
```yaml
title: "What any prayer spot needs"
steps:
  - text: "A **clean spot**, about the size of a towel"
    pic: prayer-mat
  - text: "Your **'awrah covered**"
    pic: icon:Shirt
  - text: "Your **wudu**"
    pic: water
  - text: "Facing the **qibla**"
    pic: qibla
done_text: "A bedroom floor, a quiet office, a fitting room or a clean patch of park all work."
```

### 4 · sort
```yaml
prompt: "Can you pray here?"
buckets: ["Works", "Not a good spot"]
items:
  - text: "A clean bedroom floor"
    bucket: 0
    why: "Clean, quiet, and you can face the qibla. Perfect."
  - text: "A fitting room at the mall"
    bucket: 0
    why: "Yes. Any clean spot with room to bow and prostrate works."
  - text: "The driver's seat of your parked car"
    bucket: 1
    why: "You need room to bow and prostrate. A clean spot beside the car works instead."
  - text: "A clean patch of grass in a park"
    bucket: 0
    why: "Yes. The whole earth is a place of prayer [Bukhari 335]."
  - text: "An empty meeting room at work"
    bucket: 0
    why: "Yes. A quiet office or meeting room is a great work spot."
```

### 5 · steps
```yaml
title: "At home, quietly"
intro: "{teen}If you're under 18 and your parents don't know yet, pray privately in your room, and talk to {{mentor.name}} before telling them. If you're ever told not to pray, don't fight it out alone: tell {{mentor.name}} or your imam.{/teen}"
steps:
  - text: "Pick one spot: beside your bed, a closet with room to bow, or a corner facing the qibla"
    pic: icon:Bed
  - text: "Lay down a clean towel or a folded sheet as your prayer mat"
    pic: prayer-mat
  - text: "Praying alone, say every word softly, just loud enough for you to hear yourself"
    pic: icon:Volume1
done_text: "Nobody needs to hear a thing."
```

### 6 · scenario
```yaml
pic: "pose:qiyam"
situation: "Ana is in the middle of praying Maghrib in her room. Her roommate opens the door, says \"Oh, sorry!\" and asks if she's okay."
options:
  - text: "Keep praying calmly, then explain afterwards"
    best: true
    feedback: "Yes. Someone walking in doesn't spoil your prayer. Finish it, then answer kindly."
  - text: "Stop and explain, then carry on where she left off"
    best: false
    feedback: "Not quite. Talking ends the prayer, so she'd have to start over. Usually, just keep going."
  - text: "Jump up so it doesn't look strange"
    best: false
    feedback: "Understandable, but there's no need. Finish your prayer. Stop only for a real emergency, then pray again afterward."
```

### 7 · learn
```yaml
pic: icon:DoorOpen
text: "**If someone walks in, keep going.** Their presence, or walking past you, doesn't break your prayer. Talking back does, so wait until you've ended with the salam."
bubbles:
  - "**Real emergency?** Someone is hurt or in danger: stop, help, and pray that prayer again afterwards."
  - "**What to say after:** \"I was praying. It takes about five minutes, a few times a day.\" Short and calm is best."
```

### 8 · roleplay
```yaml
character: "A parent who has just found their adult child or teen praying in their bedroom. They're confused and a little worried, not angry. They didn't know their child had become Muslim, or only half knew."
setup: "Your dad (or mom) knocks, opens the door, and sees you finishing a prayer. After your salam, he asks, \"What were you doing?\""
goal: "Explain calmly and briefly what prayer is, without a lecture, and keep the relationship warm."
success_looks_like: "You say what you were doing in a sentence or two, explain why it matters to you, reassure them, and invite questions later. No defensiveness."
coach_notes: "The parent may ask: 'Since when?', 'Is this a cult?', 'Why do you have to do it five times?', 'Why on the floor?' They calm down if the convert is gentle and honest. If the convert is a teen, the parent may say 'Not in my house.' Coach: stay respectful, don't argue it out; say you'd like to talk again, and bring {{mentor.name}} in. Never model sneaking or lying."
```

### 9 · widget
```yaml
widget: prayer-times
prompt: "Your prayers on a workday"
text: "Drag through the day. Most prayer windows last a few hours (Fajr's and Maghrib's are shorter), so plan around them. If you miss one, pray it as soon as you can."
variants:
  hanafi:
    text: "Drag through the day. Most prayer windows last a few hours (Fajr's and Maghrib's are shorter), so plan around them. Each prayer is prayed in its own time. If you miss one, pray it as soon as you can."
```

### 10 · choice
```yaml
pic: icon:Briefcase
prompt: "Luis works a 9-to-5 shift. Which prayers will usually fall during his workday?"
options:
  - text: "Dhuhr, and often Asr"
    correct: true
    feedback: "Right. Dhuhr is just after midday and Asr is mid-afternoon. Two five-minute breaks cover them."
  - text: "Fajr and Isha"
    correct: false
    feedback: "Not quite. Fajr is at dawn and Isha is at night, so he'll pray those at home."
  - text: "None of them"
    correct: false
    feedback: "Not quite. Dhuhr comes just after midday, so he'll need a short break for it."
```

### 11 · steps
```yaml
title: "At work or school"
steps:
  - text: "Use a break: most prayers take about five minutes"
    pic: icon:Clock
  - text: "Find a quiet office, an empty meeting room, or a clean spot beside your car (not in the seat: you need room to bow and prostrate)"
    pic: icon:Briefcase
  - text: "In the US, most employers must make reasonable room for a short prayer break unless it causes real hardship [EEOC]. Day 24 shows you how to ask"
    pic: icon:Scale
  - text: "At a public school, pray in free time like lunch, if it doesn't disrupt class [US Dept. of Education guidance]. Ask a counselor or teacher for a quiet room"
    pic: icon:GraduationCap
```

### 12 · ask_ai
```yaml
chips:
  - "Where can I pray at the mall or in a store?"
  - "My roommate asked if I'm in a cult. What do I say?"
  - "Can I pray in my car?"
  - "What if my boss says no?"
```

### 13 · do_today
```yaml
pic: qibla
text: "Pick your prayer spots."
steps:
  - "One spot at home"
  - "One spot at work or school"
  - "Find the qibla for each with your app, and remember a landmark"
log: null
optional_extra: "Keep a small towel or a folded scarf in your bag, so you're ready to pray anywhere clean."
```

### 14 · takeaway
```yaml
pic: prayer-mat
text: "Any clean spot can be your place of prayer. If someone walks in, keep calm and finish. Explain afterwards, kindly and briefly."
```

### 15 · closing
Your first few prayers in front of others will feel awkward. By the tenth, they won't.

---

## Check
```yaml
- prompt: "Someone walks into the room while you're praying. What do you do?"
  options:
    - text: "Keep praying calmly and talk to them after the salam"
      correct: true
      feedback: "Right. Their walking in doesn't affect your prayer, but talking would end it."
    - text: "Stop and explain, then continue from where you were"
      correct: false
      feedback: "Not quite. Talking ends the prayer. Keep going, and explain after you finish."
- prompt: "Where can you pray?"
  options:
    - text: "Any clean spot, facing the qibla"
      correct: true
      feedback: "Right. The whole earth is a place of prayer [Bukhari 335]. It just needs to be clean."
    - text: "Only in a masjid or on a prayer rug"
      correct: false
      feedback: "Not quite. Any clean place works: a bedroom, an office, a park [Bukhari 335]."
```

## AI guide context
**Lesson facts**
- The earth was made a place of prayer: wherever prayer time finds you, you may pray [Bukhari 335]. Conditions still apply: purity of body, clothes and place; the 'awrah covered; facing the qibla; wudu [First Instructions on Worship ch. 5].
- Talking, eating and excessive movement break the prayer; someone entering or passing in front doesn't [First Instructions on Worship ch. 7].
- Praying alone, one may recite softly; no school requires a lone person to recite aloud. In the Hanafi school, the words must at least be formed with the tongue and lips (cautious: loud enough to hear yourself).
- Each prayer has its own window [Q 4:103]. In the Hanafi school, prayers are not combined outside Hajj. A missed prayer is made up as soon as possible.
- US workplaces: Title VII (enforced by the EEOC) requires employers with 15+ employees to reasonably accommodate religious practice unless it causes undue hardship (since *Groff v. DeJoy*, 2023, substantial increased costs). US public schools: students may pray during non-instructional time, per Department of Education guidance. Not legal advice; Day 24 goes deeper; CAIR helps with violations.
- Praying in a non-Muslim household is a top convert pain point with no book coverage [Personal Research via reddit; Research Notes - Retention and Convert Voices V9, V10].

**Likely questions**
- *"Can I pray in my car?"* Obligatory prayers are prayed standing, with bowing and prostration, when you're able. A parked car isn't usually enough room; pray beside it on a clean mat, or find a quiet spot. If truly no option exists, escalate.
- *"Where at the mall/store?"* A fitting room, a quiet corner, a parking lot on a mat. Some malls have a quiet room.
- *"My roommate asked if I'm in a cult."* Calm, light answer: "No, I'm Muslim. Muslims pray five short prayers a day." Offer to explain more later.
- *"Can I combine prayers because of work?"* Masjid default Hanafi: no, each in its own time; other schools allow combining for certain needs. Send to the imam for their situation.
- *"What if my boss says no?"* Day 24; general Title VII info; suggest asking HR in writing; CAIR for help. Not legal advice.
- *"My parents forbid me to pray at home."* Respond with care; escalate.

**Escalate:** a parent forbidding prayer (especially a minor); work that seems to make some prayers impossible (night shifts, healthcare, retail with no breaks); combining prayers; anyone at risk at home (crisis resources first).

**Don't**
- Don't tell a minor to sneak, lie, or defy parents. Teach privacy and respect, and route conflict to the mentor and imam.
- Don't present combining or skipping as an option for the convert (Q4: all five are due).
- Don't give legal advice beyond general rights.
- Don't suggest praying in a bathroom.

**Role-play brief:** A parent who walks in on a prayer. Confused, a bit scared, not hostile. Pushes on "since when?", "is this a cult?", "why five times?" Relaxes with a short, warm answer. For teens the parent may say "not in my house": coach respect, no argument, and bringing in the mentor. Debrief: what reassured them, and one sentence to keep ready.

## Madhab note
Recitation aloud: in the Hanafi school, someone praying alone may recite aloud or quietly in Fajr, Maghrib and Isha; in the Shafi'i and Hanbali schools, reciting aloud there is recommended, not required. Combining prayers: the Hanafi school doesn't combine outside Hajj; the other schools allow combining Dhuhr with Asr, and Maghrib with Isha, when travelling and in some other needs. Ask your imam before combining.

## Sources
- [Bukhari 335](https://sunnah.com/bukhari:335): the earth made a place of prayer; pray wherever the time finds you.
- Qur'an [4:103](https://quran.com/4/103): prayer at set times.
- [[Source - First Instructions on Worship]] (Hanafi) ch. 5 (conditions of prayer), ch. 7 (what breaks the prayer; saying invocations quietly).
- [[Source - Welcome to Islam]] Day 2 (pray anywhere; find the qibla for home, school and work).
- [EEOC: Religious Discrimination](https://www.eeoc.gov/religious-discrimination) (Title VII religious accommodation).
- US Department of Education, *Guidance on Constitutionally Protected Prayer and Religious Expression in Public Elementary and Secondary Schools*.
- [[Research Notes - Retention and Convert Voices]] (V9: couldn't practice openly because family didn't know; V10: forbidden to pray in her mother's home); [[Personal Research via reddit on pain points for converts]] (praying in a non-Muslim household).
