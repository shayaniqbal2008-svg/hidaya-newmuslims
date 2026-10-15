---
module: ramadan-6
phase: null
unit: null
title: "Zakat al-Fitr and getting ready for Eid"
hook: "Eid is a few days away. One small charity to give first, then a plan for your first Eid."
minutes: 5
skills: [B5, S1, B4]
pain_points: [first-ramadan, loneliness]
logs: []
madhab_sensitive: true
scholar_flags: []
status: draft-pending-scholar-review
glossary: [Zakat al-Fitr, Eid, Ramadan, nisab, imam]
sources: [Bukhari 1503, Abu Dawud 1609, Abu Dawud 1134, Q 2:185, First Instructions on Worship Part III, SeekersGuidance (nisab for sadaqat al-fitr), SeekersGuidance (fiqh of the two Eids), Being Muslim (Zakat al-Fitr)]
format: 2
---
# ramadan-6 · Zakat al-Fitr and getting ready for Eid

### 1 · hook
```yaml
pic: icon:Gift
text: "**Ramadan is almost over.** Eid is coming in a few days, and Muslims close the month with a small gift to people in need. Today: what that gift is, and a plan so your first Eid is a good one."
```

### 2 · learn
```yaml
pic: icon:HandHeart
text: "**Zakat al-Fitr** (the charity of ending the fast) is a small, set gift for the poor, given before the Eid prayer. The Prophet ﷺ made it due on the Muslims, young and old [Bukhari 1503]."
```

### 3 · multi
```yaml
prompt: "Zakat al-Fitr does two things. Which ones?"
options:
  - text: "It cleans up the slips of your fast: the careless words, the bad moods"
    correct: true
    feedback: "Right. It tidies up the little lapses of your month [Abu Dawud 1609]."
  - text: "It means poor families can eat on Eid too"
    correct: true
    feedback: "Right. Everyone gets to celebrate [Abu Dawud 1609]."
  - text: "It pays for the Eid party"
    correct: false
    feedback: "Not quite. It goes to people in need, so they can celebrate Eid too [Abu Dawud 1609]."
  - text: "It's a ticket to the Eid prayer"
    correct: false
    feedback: "Not quite. Everyone is welcome at the Eid prayer. This gift goes to people in need."
```

### 4 · learn
```yaml
madhab_variant: true
pic: icon:Wheat
default: "**Who gives, and how much?** Generally, anyone with more than they need for Eid day gives it, for themselves and their dependents. The amount is about one meal's worth of staple food per person."
hanafi: "**Who gives, and how much?** In our school it's due from anyone who, on Eid morning, owns at least the **nisab** (the zakat minimum) in any wealth beyond basic needs and debts. Parents give it for their young children too."
bubbles:
  - "{{masjid.name}} will tell you exactly who owes it, announce this year's amount and collect it for you."
hanafi_bubbles:
  - "{{masjid.name}} will announce this year's amount (a set value of staple food) and collect it. You can give it now."
```

### 5 · scenario
```yaml
pic: icon:GraduationCap
situation: "Luis is a college student with a little in savings. He isn't sure whether he owes Zakat al-Fitr, and he's nervous about asking."
options:
  - text: "Ask the imam or the masjid office; if it isn't due, he can still give it if he wants"
    best: true
    feedback: "Yes. It's a quick, normal question. And even if it isn't due, the gift is still good charity."
  - text: "Skip it, assuming students never owe it"
    best: false
    feedback: "Not quite. Some students do, depending on savings. One quick question settles it."
  - text: "Borrow money to pay it"
    best: false
    feedback: "Not quite. If it's due, he can afford it; if he can't, it isn't due for him. No borrowing needed."
```

### 6 · learn
```yaml
pic: community
text: "**Eid is the day you finish Ramadan.** Allah gave Muslims two days of celebration: **Eid** al-Fitr and Eid al-Adha [Abu Dawud 1134]. On Eid al-Fitr you don't fast. It's a day to eat, dress up, pray together and visit people."
```

### 7 · widget
```yaml
widget: moon
prompt: "When is Eid?"
text: "Drag to the end of Ramadan. The date depends on the new moon, so it may be announced only the night before. Watch {{masjid.name}}'s announcements."
```

### 8 · reveal
```yaml
title: "First-Eid questions"
cards:
  - front: "\"Do I need new clothes?\""
    back: "No. Wear the best clean clothes you have. If you have something new, Eid is a great day for it."
    pic: icon:Shirt
  - front: "\"I won't know what to do at the Eid prayer.\""
    back: "Everyone follows the imam. Eid al-Fitr's lesson will walk you through it, and {{mentor.name}} can stand with you."
    pic: masjid
  - front: "\"I have nowhere to go after the prayer.\""
    back: "Say so now. Tell {{mentor.name}} you'd love to join someone. Lots of families are happy to host a new Muslim."
    pic: icon:House
  - front: "\"Can my non-Muslim family be part of it?\""
    back: "Yes. Bring them sweets, take them to a meal, or invite them to the masjid's Eid event if there is one."
    pic: family
```

### 9 · steps
```yaml
title: "Plan your Eid now"
intro: "{teen}Under 18? Tell your parents about Eid early and ask to go. If that's hard, talk to {{mentor.name}} about how to bring it up.{/teen}"
steps:
  - text: "Find out the Eid prayer time and place. It's in the morning, often in a big hall or park"
    pic: icon:MapPin
  - text: "Pick your clothes"
    pic: icon:Shirt
  - text: "Ask for the morning off work or school if you need to"
    pic: icon:CalendarCheck
done_text: "That's your plan. Now decide who you'll spend the day with."
```

### 10 · ask_ai
```yaml
chips:
  - "How much is Zakat al-Fitr, and who can I give it to?"
  - "Can I pay Zakat al-Fitr for my kids?"
  - "How do I ask for a day off work for Eid?"
  - "What do people do on Eid after the prayer?"
```

### 11 · do_today
```yaml
pic: icon:HandCoins
text: "Give, then plan your Eid."
steps:
  - "Give your Zakat al-Fitr through {{masjid.name}} (or ask whether it's due for you)"
  - "Tell {{mentor.name}} your Eid plan, or that you don't have one yet"
log: null
optional_extra: "Buy a box of sweets to share with your family or coworkers on Eid."
```

### 12 · takeaway
```yaml
pic: icon:PartyPopper
text: "Give Zakat al-Fitr before the Eid prayer; your masjid sets the amount. Plan your Eid now: the prayer, your clothes, and who you'll spend it with."
```

### 13 · closing
You fasted your Ramadan. Now you get to celebrate it.

---

## Check
```yaml
- prompt: "When should Zakat al-Fitr be given?"
  options:
    - text: "Before the Eid prayer"
      correct: true
      feedback: "Right. Given before the prayer, it counts as Zakat al-Fitr [Abu Dawud 1609]."
    - text: "Any time in the next year"
      correct: false
      feedback: "Not quite. It's due before the Eid prayer. After it, it only counts as ordinary charity [Abu Dawud 1609]."
- prompt: "What is Zakat al-Fitr for?"
  options:
    - text: "Cleaning up the slips of your fast and feeding the poor on Eid"
      correct: true
      feedback: "Right. Both at once [Abu Dawud 1609]."
    - text: "Paying for the Eid party"
      correct: false
      feedback: "Not quite. It goes to people in need, so they can celebrate Eid too [Abu Dawud 1609]."
```

## AI guide context
**Lesson facts**
- Zakat al-Fitr was made due by the Prophet ﷺ on Muslims, young and old, male and female, to be given before people go out to the Eid prayer [Bukhari 1503]. It purifies the fasting person of idle and indecent talk and feeds the poor; given before the prayer it's Zakat al-Fitr, after it ordinary charity [Abu Dawud 1609, hasan per al-Albani].
- Hanafi: necessary (wajib) on a Muslim who, at the start of Fajr on Eid day, owns the nisab (612.36 g silver equivalent) in any form of wealth beyond basic needs and immediate debts; no year needs to pass. A father gives for his young children. The amount is half a sa' of wheat or a sa' of dates or barley, or its value in money (Hanafis allow cash) [SeekersGuidance (nisab for sadaqat al-fitr); SeekersGuidance (fiqh of the two Eids)]. May be given early in Ramadan.
- Other schools: due on anyone who has more than their food for Eid day and night; given as staple food [Being Muslim].
- Converts who became Muslim before Fajr on Eid day are included; nothing is owed for years before Islam.
- Fasting on Eid day is prohibited [First Instructions Part III]. Allah gave Muslims two Eids [Abu Dawud 1134].

**Likely questions**
- *"How much?"* The masjid announces it each year. Don't quote a figure.
- *"Who receives it?"* Poor Muslims, usually through the masjid. Give before the Eid prayer.
- *"For my kids? My non-Muslim spouse?"* Young children: Hanafi, the father gives for them. A spouse or other cases: imam.
- *"Day off work?"* A short request, a week ahead: "It's our biggest holiday of the year; could I take the morning off?" Students: same with teachers.
- *"What happens after the prayer?"* Greeting people, visiting, a big meal, gifts for kids, often a community event.

**Escalate:** whether a specific person owes it (finances); paying for others; a teen whose parents won't let them go to the Eid prayer.

**Don't**
- Don't quote dollar amounts or nisab dollar values (they change).
- Don't tell someone they do or don't owe it based on their numbers; give the rule and send the specifics to the imam.

## Madhab note
- **Who owes it:** the Hanafi school ties it to owning the nisab beyond basic needs; the Maliki, Shafi'i and Hanbali schools ask it of anyone with more than their food for Eid day and night.
- **Food or money:** the Hanafi school allows giving its value in money; the other schools give it as staple food. Your masjid will tell you how it collects it.

## Sources
- [Bukhari 1503](https://sunnah.com/bukhari:1503): Zakat al-Fitr made due on every Muslim, given before the Eid prayer.
- [Abu Dawud 1609](https://sunnah.com/abudawud:1609) (hasan, al-Albani): its purpose; before or after the prayer.
- [Abu Dawud 1134](https://sunnah.com/abudawud:1134) (sahih, al-Albani): Allah gave Muslims the two Eids.
- Qur'an [2:185](https://quran.com/2/185) (completing the month and glorifying Allah; AI guide).
- [SeekersGuidance: The nisab for sadaqat al-fitr](https://seekersguidance.org/answers/hanafi-fiqh/the-nisab-for-sadaqat-al-fitr/); [SeekersGuidance: The fiqh of Eid al-Fitr and Eid al-Adha](https://seekersguidance.org/answers/general-counsel/fiqh-eid-al-fitr-eid-al-adha/) (Ustadha Naielah Ackbarali).
- [[Source - First Instructions on Worship]] Part III (fasting prohibited on Eid). [[Source - Being Muslim a Practical Guide]] (Zakat al-Fitr).
- Zakat al-Fitr (verified, T2 final review): [Darul Iftaa 8564: difference between zakat and sadaqat al-fitr (Hanafi: wajib with nisab beyond needs; half a sa' of wheat or a sa' of dates/barley, or its value)](https://islamqa.org/hanafi/daruliftaa/8564/difference-between-zakat-and-sadaqat-al-fitr/).
