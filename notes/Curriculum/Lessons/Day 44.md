---
day: 44
phase: 2
unit: 6
title: "How fasting works"
hook: "Fasting sounds intense. Once you know how a fast day actually works, it's very doable."
minutes: 5
skills: [S1]
pain_points: [first-ramadan]
logs: []
madhab_sensitive: true
scholar_flags: [Q14, Q35]
status: draft-pending-scholar-review
glossary: [Ramadan, suhoor, iftar, fidya, Fajr, Maghrib, wudu, imam]
sources: [Bukhari 8, Q 2:183–185, Q 2:187, Bukhari 1923, Bukhari 1933, First Instructions on Worship Part III, Yaqeen (Ramadan beginner's guide), IslamQA.info 112150, SeekersGuidance (Shafi'i Ramadan), Revealed Path ch. 5]
format: 2
---
# Day 44 · How fasting works

### 1 · hook
```yaml
pic: crescent
text: "Whether Ramadan is next month or many months away, it helps to know how fasting works before it arrives. Today: who fasts, how a fast day goes, what breaks it, and who's excused."
```

### 2 · learn
```yaml
pic: crescent
text: "Fasting in **Ramadan** is a pillar of Islam, one of the five [Bukhari 8]. **Who fasts:** every Muslim who has reached puberty, is of sound mind, and is able."
bubbles:
  - "*\"Decreed upon you is fasting as it was decreed upon those before you that you may become righteous\"* [Q 2:183, Saheeh Intl.]."
  - "Being new isn't an exemption, and it's more doable than it sounds [First Instructions Part III]."
```

### 3 · widget
```yaml
widget: moon
prompt: "When is Ramadan?"
text: "Ramadan is a month of the Muslim year. Drag through a month to see how each one begins."
```

### 4 · widget
```yaml
widget: fast-day
prompt: "A fast day, from dawn to sunset"
text: "Drag from the pre-dawn meal, through the day, to breaking the fast at sunset [Q 2:187]."
```

### 5 · order
```yaml
prompt: "Your turn: put a fast day in order."
items:
  - "The night before: intend to fast tomorrow"
  - "Before dawn: eat suhoor (the pre-dawn meal)"
  - "At dawn (when Fajr time starts): stop eating and drinking"
  - "During the day: pray, work, and avoid what breaks the fast"
  - "At sunset (Maghrib time): break your fast with dates or water (iftar)"
  - "Pray Maghrib, then eat your meal"
pics: ["intention", "icon:Utensils", "icon:Sunrise", "icon:Briefcase", "icon:Sunset", "prayer-mat"]
feedback: "That's a fast day, from dawn until sunset [Q 2:187]. Suhoor has a blessing in it [Bukhari 1923], so don't skip it."
```

### 6 · learn
```yaml
madhab_variant: true
pic: icon:Ban
default: "**What breaks the fast** (if done on purpose): eating, drinking, sex, and smoking or vaping.{women} A period starting also ends that day's fast.{/women}"
hanafi: "**What breaks the fast** (if done on purpose): eating, drinking, sex, smoking or vaping, and drops in the nose.{women} A period starting also ends that day's fast.{/women}"
bubbles:
  - "**What doesn't:** eating or drinking because you *forgot* (stop when you remember and carry on) [Bukhari 1933], swallowing your own saliva, a shower."
  - "Your masjid can tell you its view on the details."
hanafi_bubbles:
  - "Water slipping down your throat while rinsing your mouth in wudu also breaks it, so rinse gently. Ear drops: scholars differ, so ask your imam. `[SCHOLAR: Q35]`"
  - "**What doesn't:** eating or drinking because you *forgot* (stop when you remember and carry on) [Bukhari 1933], your own saliva, a shower."
```

### 7 · sort
```yaml
prompt: "Jordan is fasting. Which of these break his fast?"
buckets: ["Breaks the fast", "Doesn't break it"]
items:
  - text: "He forgets and drinks a glass of water, then remembers"
    bucket: 1
    why: "Forgetting doesn't break it. He stops and keeps fasting [Bukhari 1933]."
  - text: "He vapes on his break at work"
    bucket: 0
    why: "Smoking and vaping break the fast."
  - text: "He takes a shower after the gym"
    bucket: 1
    why: "A shower doesn't break the fast. Just don't swallow water."
  - text: "He grabs a snack on purpose because he's hungry"
    bucket: 0
    why: "Eating on purpose breaks it. That's serious, so he should make the day up and talk to the imam."
  - text: "He swallows his own saliva"
    bucket: 1
    why: "Your own saliva doesn't break the fast."
```

### 8 · reveal
```yaml
title: "Who's excused, and what they do instead"
cards:
  - front: "Sick"
    back: "Skip the fast and **make the days up later**."
    pic: icon:Thermometer
  - front: "On a long journey"
    back: "Skip the fast and **make the days up later**."
    pic: icon:Plane
  - front: "{men}Not sure if you're sick enough?{/men}{women}On your period, bleeding after birth, pregnant or nursing{/women}"
    back: "{men}Talk to a doctor and your imam. Islam doesn't ask anyone to harm their health.{/men}{women}On your period or after birth, you *must not* fast; make the days up. Pregnant or nursing and worried about harm: skip and make up later.{/women}"
    pic: icon:HeartPulse
  - front: "Can **never** fast (old age, lasting illness)"
    back: "Give **fidya**: feed a poor person for each day missed [Q 2:184]."
    pic: icon:HandHeart
variants:
  hanafi:
    cards:
      - front: "Sick"
        back: "Skip the fast and **make the days up later**."
        pic: icon:Thermometer
      - front: "Traveling more than about 77–81 km (48–50 miles)"
        back: "Skip the fast and **make the days up later**."
        pic: icon:Plane
      - front: "{men}Not sure if you're sick enough?{/men}{women}On your period, bleeding after birth, pregnant or nursing{/women}"
        back: "{men}Talk to a doctor and your imam. Islam doesn't ask anyone to harm their health.{/men}{women}On your period or after birth, you *must not* fast; make the days up. Pregnant or nursing and worried about harm: skip and make up later.{/women}"
        pic: icon:HeartPulse
      - front: "Can **never** fast (old age, lasting illness)"
        back: "Give **fidya**: feed a poor person for each day missed [Q 2:184]."
        pic: icon:HandHeart
```

### 9 · scenario
```yaml
pic: fresh-start
situation: "Destiny takes her shahada at noon on the 15th day of Ramadan. She had breakfast and lunch before. What should she do about fasting?"
options:
  - text: "Stop eating for the rest of today if she can, fast from tomorrow, and not make up the days before she was Muslim"
    best: true
    feedback: "Yes. That's the careful view. Days before Islam aren't owed. She can ask her imam about today."
  - text: "Make up the first 14 days of Ramadan after it ends"
    best: false
    feedback: "Not quite. Nothing from before Islam is owed. Her fasting starts now."
  - text: "Wait until next Ramadan to start, since she's new"
    best: false
    feedback: "Not quite. Fasting is due from tomorrow. Most new Muslims find they can do it, one day at a time."
```

### 10 · learn
```yaml
pic: icon:CalendarCheck
text: "**Converting during Ramadan?** Start fasting the next day. Days before you became Muslim aren't owed. For the rest of the day you convert, refrain from food and drink if you can, and ask your imam about it. `[SCHOLAR: Q14]`"
bubbles:
  - "**If you break a fast on purpose,** don't give up on the month. Keep going, make the day up later, and talk to your imam."
```

### 11 · ask_ai
```yaml
chips:
  - "Do injections or inhalers break a fast?"
  - "I have a health condition. Can I fast?"
  - "How do I make up days I missed?"
  - "My family doesn't know I'm Muslim. How do I fast?"
```

### 12 · do_today
```yaml
pic: icon:Calendar
text: "Get Ramadan on your calendar."
steps:
  - "Find out roughly when the next Ramadan starts"
  - "Put it in your calendar (a neutral label like \"R\" is fine)"
log: null
optional_extra: "Want a practice run? Mondays and Thursdays are recommended fasting days [First Instructions Part III]. Try one, dawn to sunset."
```

### 13 · takeaway
```yaml
pic: icon:Sunset
text: "Fast from dawn to sunset: no food, drink or sex. Forgetting doesn't break it. {men}The sick and travelers make days up{/men}{women}The sick, travelers and women on their period make days up{/women}; those who never can, feed the poor."
```

### 14 · closing
One day at a time, one fast at a time. Slow and steady.

---

## Check
```yaml
- prompt: "You eat a cracker, then remember you're fasting. What now?"
  options:
    - text: "Stop and keep fasting; the fast still counts"
      correct: true
      feedback: "Right. Eating by forgetting doesn't break the fast [Bukhari 1933]."
    - text: "The fast is broken, so eat normally today"
      correct: false
      feedback: "Not quite. A forgetful bite doesn't break it. Stop and carry on [Bukhari 1933]."
- prompt: "Someone has a lasting illness and can never fast. What do they do?"
  options:
    - text: "Feed a poor person for each day (fidya)"
      correct: true
      feedback: "Right. Fidya replaces the fast for someone who can never fast [Q 2:184]."
    - text: "Fast anyway, even if it harms them"
      correct: false
      feedback: "Not quite. Islam doesn't ask anyone to harm their health. They give fidya instead."
- prompt: "You become Muslim halfway through Ramadan. Do you make up the earlier days?"
  options:
    - text: "No. Nothing from before Islam is owed"
      correct: true
      feedback: "Right. Fast from the next day; ask your imam about the day you converted."
    - text: "Yes, every day of that Ramadan"
      correct: false
      feedback: "Not quite. Days before you became Muslim aren't owed."
```

## AI guide context
**Lesson facts**
- Fasting Ramadan is a pillar [Bukhari 8], decreed as it was on earlier peoples [Q 2:183]; from dawn to sunset [Q 2:187]. Obligatory on every Muslim past puberty, sane and able [First Instructions Part III].
- Hanafi validity conditions: free of menstruation and postnatal bleeding; intention (the manual teaches making it the night before or before dawn); refraining from breakers from dawn to sunset [First Instructions Part III].
- Breakers (deliberate): eating, drinking, sex, smoking/vaping. Hanafi manual also lists: liquid dripped into the nose or ears, accidentally swallowing water during wudu, swallowing a chickpea-sized bit of food from the teeth, inhaling smoke one produced, and others (make-up only). Forgetful eating doesn't break it [Bukhari 1933].
- **Deliberately breaking a Ramadan fast without excuse** is a major sin; in the Hanafi school it requires a make-up day and, for eating, drinking or sex, the kaffara (expiation) [First Instructions Part III]. Mention gently only if asked, and send details to the imam. Never use it to frighten.
- Excused with make-up: illness, travel (Hanafi: about 77–81 km / 48–50 miles or more), menstruation and postnatal bleeding (fasting is prohibited then), pregnancy or nursing with fear of harm. Unable permanently: fidya, feeding one poor person per day [Q 2:184; First Instructions Part III]. Missed days are made up when able; don't delay (other schools set the next Ramadan as the deadline; the Hanafi school sets none, but hastening is better).
- Suhoor has blessing [Bukhari 1923]. Mondays and Thursdays are recommended voluntary fasts; fasting on the two Eids is prohibited [First Instructions Part III].
- Mid-Ramadan convert (Q14): earlier days aren't made up (agreed). The rest of the conversion day: drafted position "refrain if you can; ask your imam" (schools differ: IslamQA.info 112150 says refraining is required, the Shafi'i school says recommended with a sunnah make-up).

**Likely questions**
- *"Do injections, inhalers or IVs break the fast?"* Scholars differ on some medical items; give the general picture (nothing medical is worth harming yourself over) and escalate.
- *"Can I fast with my condition?"* Doctor plus imam. Never declare anyone exempt or not exempt.
- *"How do I make up days?"* One day for each missed day, as soon as you reasonably can (ideally before next Ramadan; the Hanafi school sets no deadline), never on the Eid days; winter days are short.
- *"My family doesn't know."* The fast is still due; suggest small, discreet steps and the mentor. For teens, never coach deception beyond what the faith requires (Spec §6.2 rule 12); route a forbidden-to-fast situation to the imam.
- *"Does toothpaste/gum/perfume break it?"* Advise avoiding gum while fasting and not swallowing anything when brushing; for details, the masjid can advise. Don't rule beyond the lesson.

**Escalate:** medical conditions, medication and procedures; eating disorders (respond with care, encourage professional help; never push fasting); pregnancy and nursing details; kaffara cases; the day of conversion (Q14); a teen forbidden to fast.

**Don't**
- Don't suggest new Muslims can skip or "ease into" Ramadan with fewer days.
- Don't overload with every fine detail of the Hanafi breakers list.
- Don't use kaffara or sin language to scare anyone.

## Madhab note
- **Travel:** the Hanafi distance is about 81 km; other schools use a similar distance. Ask your imam about your trip.
- **Water during wudu:** the Hanafi school counts accidentally swallowed wudu water as breaking the fast (make the day up). Other schools differ on this detail.
- **Pregnancy and nursing, and the day you convert (Q14):** schools differ on whether fidya is added to the make-up (Hanafi: make-up only; Shafi'i and Hanbali add fidya when the fear was only for the baby; Malikis add it for a nursing mother), and on whether refraining on the conversion day is required or recommended. Your imam can advise.

## Sources
- [Bukhari 8](https://sunnah.com/bukhari:8): Islam is built on five.
- Qur'an [2:183–185](https://quran.com/2/183-185), [2:187](https://quran.com/2/187).
- [Bukhari 1923](https://sunnah.com/bukhari:1923): there is blessing in suhoor.
- [Bukhari 1933](https://sunnah.com/bukhari:1933): eating or drinking forgetfully doesn't break the fast.
- [[Source - First Instructions on Worship]] Part III (who must fast; who is excused; validity; what breaks the fast; kaffara; making up; fidya; recommended and prohibited fasts).
- [Yaqeen Institute: How does Ramadan work? A beginner's guide](https://yaqeeninstitute.org/read/paper/how-does-ramadan-work-a-beginners-guide).
- Q14: [IslamQA.info 112150](https://islamqa.info/en/answers/112150/does-he-have-to-refrain-from-eating-on-the-day-he-becomes-muslim); [SeekersGuidance: fasting Ramadan in the Shafi'i school](https://seekersguidance.org/answers/shafii-fiqh/fiqh-fasting-ramadan-according-school-imam-shafii/); [[Research Notes - Core Essentials and Madhab Map]] §7.
- [[Source - The Revealed Path]] ch. 5 (fasting).
- Pregnancy and nursing (verified, T2 final review): [SeekersGuidance 32541: pregnancy and making up fasts (Hanafi: make-up, no fidya)](https://islamqa.org/hanafi/seekersguidance-hanafi/32541/pregnancy-making-up-fasts-does-she-really-have-to-2/); [Mathabah: fidya for pregnant or nursing women](https://mathabah.org/rama%E1%B8%8Dan-fidya-payment-for-pregnant-or-nursing-women/). Travel distance: [[Day 58]] sources.

## Scholar flags
- **Screens 9–10 (Q14).** "For the rest of the day you convert, refrain from food and drink if you can, and ask your imam." Earlier days of that Ramadan are not made up. Drafted as in Spec §9.
- **Screen 6, Hanafi bubble: ear drops (Q35).** Drafted as "scholars differ, ask your imam"; nose drops stay listed as breaking the fast per the Hanafi manual.
