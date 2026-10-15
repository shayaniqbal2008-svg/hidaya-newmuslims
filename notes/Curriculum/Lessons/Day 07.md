---
day: 7
phase: 1
unit: 1
title: "Your masjid and your people"
hook: "There's only one first visit. After that, it's just your masjid."
minutes: 5
skills: [B1, B2, P5]
pain_points: [loneliness]
logs: [visited_masjid, met_mentor]
madhab_sensitive: true
scholar_flags: []
status: draft-pending-scholar-review
glossary: [masjid, imam, wudu, Allahu akbar, salam, al-Fatiha, Jumu'ah, ﷺ]
sources: [Bukhari 734, Bukhari 725, Bukhari 645, Muslim 404, Q 7:204, Field Guide ch. 11 and 12, Welcome to Islam D3 and D5, First Instructions on Worship (praying in a group), ISPU RMS, Yaqeen 2025]
format: 2
---
# Day 7 · Your masjid and your people

### 1 · hook
```yaml
pic: masjid
text: "A week ago you said your shahada. Today: walking into **{{masjid.name}}** without feeling lost, praying in a row, and meeting the people who'll walk this road with you."
```

### 2 · widget
```yaml
widget: masjid-map
prompt: "Tap around the masjid"
text: "The **masjid** (mosque) is where Muslims pray together. Tap each part to see what to expect."
areas:
  entrance: "Many masjids have a separate entrance for each gender. If you're unsure where to go, ask anyone."
  shoes: "**Shoes off** at the entrance. There's usually a shelf."
  wudu: "Every masjid has a place to make wudu. Arriving with wudu already helps."
  hall: "People **sit on the floor**; chairs are mostly for older or unwell people. Dress **modestly and loosely**.{women} Bring a scarf: you cover your hair to pray.{/women}"
  women: "{women}Your space: rows behind the men, or an area of your own. If you're unsure, ask anyone.{/women}{men}The sisters' prayer space: rows behind the men's, or an area of their own.{/men}"
```

### 3 · reveal
```yaml
title: "First-visit questions"
cards:
  - front: "\"Will people know I'm new?\""
    back: "Maybe. Most will be glad. You can simply say, \"I'm new, could you show me where to go?\""
    pic: community
  - front: "\"What if I do something wrong?\""
    back: "Everyone did, once. If someone corrects you rudely, that's on them, not you. Mention it to {{mentor.name}}."
    pic: icon:HeartHandshake
  - front: "\"When should I go?\""
    back: "Any prayer time works. Maghrib and Isha are often calm. Friday's Jumu'ah prayer is the busiest (Day 11)."
    pic: icon:Clock
  - front: "\"Who's the imam?\""
    back: "The imam leads the prayer and teaches. You can talk to him about anything, privately."
    pic: icon:UserCheck
```

### 4 · learn
```yaml
pic: icon:Users
text: "**Praying in a row.** One person, the **imam**, leads; everyone else lines up behind him. The Prophet ﷺ said the imam is there to be followed [Bukhari 734]."
bubbles:
  - "His Companions stood **shoulder to shoulder, feet beside feet**, in straight rows [Bukhari 725]."
  - "{women}Women pray in rows behind the men, or in their own area.{/women}"
```

### 5 · prayer
```yaml
title: "Following the imam"
intro: "Stay a beat behind him the whole way. Never go ahead of him [Bukhari 734]."
moves:
  - pose: stand
    text: "Line up shoulder to shoulder. In your heart, intend to pray behind the imam."
  - pose: takbir
    text: "Say *Allahu akbar* **after** he does."
    say: "Allahu akbar"
  - pose: qiyam
    text: "Stand while he recites. {{masjid.name}} will show you whether to recite al-Fatiha quietly behind him."
  - pose: ruku
    text: "Bow just after he bows. Say your *Subhan Allah* quietly."
  - pose: sujud
    text: "Prostrate just after he prostrates. Never go ahead of him."
  - pose: salam-right
    text: "End with the salam after he does."
variants:
  hanafi:
    moves:
      - pose: stand
        text: "Line up shoulder to shoulder. In your heart, intend to pray behind the imam."
      - pose: takbir
        text: "Say *Allahu akbar* **after** he does."
        say: "Allahu akbar"
      - pose: qiyam
        text: "**While he recites, stay silent and listen**: his recitation counts for you [Muslim 404; Q 7:204]."
      - pose: ruku
        text: "Bow just after he bows. Say your *Subhan Allah* quietly."
      - pose: sujud
        text: "Prostrate just after he prostrates. Say your *Subhan Allah* quietly. Never go ahead of him."
      - pose: salam-right
        text: "End with the salam after he does."
```

### 6 · order
```yaml
prompt: "You're joining a prayer at the masjid. Put these in order."
items:
  - "Line up shoulder to shoulder in the row"
  - "Intend to pray behind the imam"
  - "Say Allahu akbar after he says it"
  - "Stand behind him while he recites"
  - "Bow and prostrate just after him"
  - "Say the salam after he does"
pics: ["icon:Users", intention, "pose:takbir", "pose:qiyam", "pose:ruku", "pose:salam-right"]
feedback: "That's it. Just stay a beat behind him the whole way, and you can't go wrong."
variants:
  hanafi:
    items:
      - "Line up shoulder to shoulder in the row"
      - "Intend to pray behind the imam"
      - "Say Allahu akbar after he says it"
      - "Stand silently while he recites"
      - "Bow and prostrate just after him"
      - "Say the salam after he does"
```

### 7 · learn
```yaml
pic: icon:DoorOpen
text: "**Arrived late?** For now, you can wait quietly and pray on your own once they finish, or join and ask someone to show you how to complete what you missed. Day 22 teaches it."
```

### 8 · widget
```yaml
widget: rows
prompt: "Where do you stand?"
text: "Fill the row in front before starting a new one. Tap the spot you'd take."
```

### 9 · fill
```yaml
before: "Praying together is worth"
after: "times praying alone [Bukhari 645]."
options:
  - text: "twenty-seven"
    correct: true
    feedback: "Yes, twenty-seven. And praying together is how you'll meet people."
  - text: "two"
    correct: false
    feedback: "Not quite. It's twenty-seven times [Bukhari 645]. And it's how you'll meet people."
  - text: "ten"
    correct: false
    feedback: "Not quite. It's twenty-seven times [Bukhari 645]. And it's how you'll meet people."
```

### 10 · scenario
```yaml
pic: community
situation: "After Isha, Hannah is putting on her shoes. A woman she doesn't know says, \"You're new! Welcome. We have a sisters' circle on Thursdays.\""
options:
  - text: "Smile, say thanks, and ask what time it starts"
    best: true
    feedback: "Yes. That one small yes is how most converts find their people."
  - text: "Say thanks and leave quickly; she's not ready for groups"
    best: false
    feedback: "Understandable, but you don't need to be ready. Showing up once, even quietly, is enough."
  - text: "Explain she's still learning and might mess up"
    best: false
    feedback: "No need. Everyone there is still learning too. You'll be welcome as you are."
```

### 11 · learn
```yaml
pic: icon:HeartHandshake
text: "**Your people.** Converts who have Muslim friends, feel at home in a masjid and know a good imam do best over time [Yaqeen 2025]. This app can teach you. It can't be your friend."
bubbles:
  - "So meet **{{mentor.name}}**. Ask questions, say when it's hard. That's what they're there for."
```

### 12 · reflect
```yaml
prompt: "One week in. What was the hardest moment so far, and what's one thing you're proud of? (Even \"I prayed once\" counts.)"
share_with_mentor: optional
```

### 13 · ask_ai
```yaml
chips:
  - "What should I wear to the masjid?"
  - "Can I go on my period?"
  - "What do I say when I meet the imam?"
  - "What if nobody talks to me?"
```

### 14 · do_today
```yaml
pic: masjid
text: "Visit {{masjid.name}}, or set up a time to meet {{mentor.name}}."
steps:
  - "Go for one prayer: shoes off, line up, follow the imam"
  - "Before you leave, say salam to one person"
  - "Or message {{mentor.name}} to set up a time to meet"
log: visited_masjid
optional_extra: "If you meet your mentor, tap \"I met my mentor.\""
```

### 15 · takeaway
```yaml
pic: icon:Users
text: "Shoes off, sit on the floor, line up shoulder to shoulder, and follow the imam a beat behind. Then stay a few minutes and meet someone."
```

### 16 · closing
**Week one, done.** You said your shahada, learned wudu, prayed, and started finding your people. That's a lot.

---

## Check
```yaml
- prompt: "Praying behind an imam, when do you bow?"
  options:
    - text: "Just after he bows"
      correct: true
      feedback: "Right. The imam is there to be followed, so you move a beat after him [Bukhari 734]."
    - text: "Whenever you're ready, at your own pace"
      correct: false
      feedback: "Not quite. In a group, you follow the imam's timing, just after him [Bukhari 734]."
- prompt: "How do people stand in the rows?"
  options:
    - text: "Shoulder to shoulder, in straight lines"
      correct: true
      feedback: "Right. That's how the Companions lined up [Bukhari 725]."
    - text: "Spread out, with space between each person"
      correct: false
      feedback: "Not quite. Rows are straight and close, shoulder to shoulder [Bukhari 725]."
```

## AI guide context
**Lesson facts**
- The imam is to be followed: say the takbir after him, bow after him, prostrate after him; never go ahead [Bukhari 734; First Instructions on Worship, praying in a group].
- Straight rows, shoulder to shoulder and foot beside foot [Bukhari 725]; women stand behind the men or in their own area [First Instructions on Worship].
- Hanafi: the follower doesn't recite al-Fatiha or a surah in any prayer, audible or silent; the imam's recitation suffices [Muslim 404; Q 7:204; Research Notes - Core Essentials, madhab table]. Tasbih in ruku' and sujud and the sitting words are still said quietly. On rising from bowing, the follower says only *Rabbana wa lakal-hamd* (Day 10).
- Congregation is twenty-seven times better than praying alone [Bukhari 645].
- Strongest predictors of good convert outcomes: religious Muslim friends, mosque attachment, a capable imam [Yaqeen 2025]. Being "criticized, frowned upon, or rudely corrected" at a mosque is a top turn-off for converts [ISPU RMS].
- Masjid basics: shoes off, floor seating, separate entrances, modest dress [Field Guide ch. 11; Welcome to Islam D3].

**Likely questions**
- *"What do I wear?"* Loose, opaque, covering clothes; women bring a scarf to cover hair for prayer. No need for special "Muslim clothes."
- *"Can I go on my period?"* Scholars differ on staying in the prayer hall; many masjids have areas she can use for classes and events. Defer to the masjid's practice.
- *"Joined late, what now?"* Simple: joining wherever the imam is is best (Day 22 shows how); praying alone after is allowed if they feel lost. Don't teach the full make-up procedure now.
- *"What do I say to the imam?"* "As-salamu 'alaykum, I'm new, I took my shahada recently." That's enough.
- *"Nobody talked to me."* Validate. Suggest staying after prayer, going to a class or event, and letting the mentor introduce them.
- *"Do I say al-Fatiha behind the imam?"* Masjid default Hanafi: no, stay silent and listen. Other schools differ (Madhab note).

**Escalate:** a convert who was mistreated or shamed at the masjid (pass to the imam with consent); safeguarding concerns with any adult (minors especially).

**Don't:** shame non-attendance; suggest they must go to every prayer; let them think a different school's practice they see is "wrong."

## Madhab note
Behind the imam: Hanafis stay silent in every prayer. Malikis recite al-Fatiha quietly only in the silent prayers. Shafi'is recite it in every rak'ah, even behind the imam. Hanbalis recommend it in the silent prayers and in the imam's pauses. All four accept praying behind an imam of another school.

## Sources
- [Bukhari 734](https://sunnah.com/bukhari:734): the imam is to be followed. [Bukhari 725](https://sunnah.com/bukhari:725): straight rows, shoulder to shoulder. [Bukhari 645](https://sunnah.com/bukhari:645): twenty-seven times.
- [Muslim 404](https://sunnah.com/muslim:404) and Qur'an [7:204](https://quran.com/7/204): silence while the Qur'an is recited (the Hanafi evidence for the follower's silence).
- [[Source - First Instructions on Worship]] (Hanafi), praying in a group.
- [[Source - The New Muslims Field Guide]] ch. 11 (the first masjid visit), ch. 12 (the company you keep). [[Source - Welcome to Islam]] Day 3 (follow the imam), Day 5 (community).
- [ISPU, *Reimagining Muslim Spaces*](https://web.archive.org/web/2019/https://www.ispu.org/wp-content/uploads/2018/06/RMS_Creating-a-More-Welcoming-Mosque-for-Converts.pdf); [Yaqeen Institute, *Becoming Muslim* (2025)](https://yaqeeninstitute.org/read/data/reports/becoming-muslim-lives-of-american-converts-to-islam).
- [[Research Notes - Core Essentials and Madhab Map]], madhab table (reciting behind the imam).
