---
day: 17
phase: 1
unit: 3
title: "Staying clean: ghusl and the basics"
hook: "Some of today is personal. All of it is simple, and every adult Muslim learns it."
minutes: 5
skills: [P7, P1]
pain_points: [skill]
logs: []
madhab_sensitive: true
scholar_flags: [Q3, Q26]
status: draft-pending-scholar-review
glossary: [ghusl, wudu, istinja, Bismillah, Qur'an, masjid, du'a, dhikr, al-Ikhlas, ﷺ]
sources: [Q 5:6, Q 2:222, Q 112:1–2, Bukhari 248, Abu Dawud 355, Muslim 223, First Instructions on Worship Part I, IslamQA 243792, Research Notes - Core Essentials and Madhab Map]
format: 2
---
# Day 17 · Staying clean: ghusl and the basics

### 1 · hook
```yaml
pic: icon:ShowerHead
text: "Some of today is personal: sex, wet dreams, {women}periods, {/women}the bathroom. Islam talks about these plainly, without embarrassment, because they're part of being human. It's private, it's simple, and every adult Muslim learns it."
```

### 2 · learn
```yaml
pic: ghusl
text: "**When you need a ghusl** (a full-body wash), each time: after sex, even without ejaculation; after any ejaculation, including a wet dream{women}; when a period ends; and when bleeding after childbirth ends{/women} [Q 5:6; First Instructions on Worship Part I; IslamQA 243792]."
bubbles:
  - "Haven't taken a ghusl since becoming Muslim (Day 1)? Take one today. `[SCHOLAR: Q3]`"
  - "{women}**Your period:** you don't pray during it, and you don't make those prayers up. You don't fast either, but you make up missed Ramadan fasts later.{/women}"
  - "{women}When the bleeding stops, take a ghusl and start praying. Bleeding that seems irregular? Ask a female mentor or your imam.{/women}"
```

### 3 · sort
```yaml
prompt: "Before your next prayer: ghusl, or not?"
buckets: ["Needs a ghusl", "No ghusl needed"]
items:
  - text: "Waking up from a wet dream"
    bucket: 0
    why: "Any ejaculation, asleep or awake, needs a ghusl."
  - text: "Using the toilet"
    bucket: 1
    why: "That breaks wudu, not ghusl. Clean yourself and make wudu."
  - text: "Sex, even without ejaculation"
    bucket: 0
    why: "Sex needs a ghusl afterwards, even without ejaculation."
  - text: "{women}Your period has ended{/women}"
    bucket: 0
    why: "When the bleeding stops, take a ghusl, then pray."
  - text: "Getting sweaty at the gym"
    bucket: 1
    why: "Sweat doesn't break wudu or require a ghusl. Shower if you like; it's not required."
  - text: "Passing wind"
    bucket: 1
    why: "That breaks wudu only. Make wudu and pray."
```

### 4 · steps
```yaml
title: "How to take a ghusl"
intro: "Take off nail polish or anything waterproof first: water has to reach the skin."
steps:
  - text: "Intend it in your heart, and say *Bismillah*"
    pic: intention
  - text: "Wash your hands and your private parts"
    pic: wudu:hands
  - text: "Make wudu. {{masjid.name}} will tell you whether rinsing the mouth and nose is required"
    pic: wudu:mouth
  - text: "Pour water over your head three times, working it into the roots of your hair"
    pic: ghusl
  - text: "Wash your whole body, right side first. Water must reach every part of your skin [Bukhari 248]"
    pic: water
done_text: "That's ghusl. With practice it takes about five minutes."
variants:
  hanafi:
    steps:
      - text: "Intend it in your heart, and say *Bismillah*"
        pic: intention
      - text: "Wash your hands and your private parts"
        pic: wudu:hands
      - text: "Make wudu, rinsing your mouth and nose: in ghusl, both are required"
        pic: wudu:mouth
      - text: "Pour water over your head three times, working it into the roots of your hair"
        pic: ghusl
      - text: "Wash your whole body three times, right side first. Water must reach every part of your skin [Bukhari 248; First Instructions on Worship Part I]"
        pic: water
```

### 5 · order
```yaml
prompt: "Put the ghusl steps in order."
items:
  - "Intend the ghusl in your heart and say Bismillah"
  - "Wash your hands and your private parts"
  - "Make wudu, rinsing your mouth and nose"
  - "Pour water over your head three times, to the roots of your hair"
  - "Wash your whole body, right side first, so water reaches every part"
pics: [intention, "wudu:hands", "wudu:mouth", ghusl, water]
feedback: "That's the order the Prophet ﷺ followed [Bukhari 248]. Take off nail polish or anything waterproof first."
```

### 6 · learn
```yaml
madhab_variant: true
pic: quran
default: |
  **Until you take it**, don't pray or touch a printed Qur'an. Schools differ on reciting Qur'an and entering the masjid in that state; ask your imam. You can always make du'a and dhikr (remembrance).
hanafi: |
  **Until you take it**, don't pray, touch a printed Qur'an, recite Qur'an, or enter the masjid's prayer hall. Du'a and dhikr are always fine, in any language. {women}Same during a period, which lasts 3 to 10 days. Otherwise, ask a female mentor or your imam.{/women}
```

### 7 · scenario
```yaml
pic: icon:AlarmClock
situation: "Luis wakes up 25 minutes before sunrise and realizes he needs a ghusl. The house is cold and everyone's asleep. What should he do?"
options:
  - text: "Take a quick ghusl, then pray Fajr before sunrise"
    best: true
    feedback: "Yes. A ghusl can take five minutes: mouth, nose, and water everywhere. Then pray on time."
  - text: "Just make wudu and pray"
    best: false
    feedback: "Not quite. After ejaculation, wudu isn't enough. He needs the full ghusl first."
  - text: "Go back to sleep and pray after sunrise"
    best: false
    feedback: "Not quite. Fajr's time ends at sunrise, and there's enough time to wash and pray now."
```

### 8 · steps
```yaml
title: "After the toilet (istinja)"
steps:
  - text: "Make sure you've finished"
    pic: icon:Toilet
  - text: "Clean yourself with water, or tissue and then water"
    pic: icon:Droplets
  - text: "If urine or anything impure gets on your skin, clothes or prayer spot, wash it off before praying [First Instructions on Worship Part I]"
    pic: icon:Shirt
done_text: "The Prophet ﷺ said that purity is half of faith [Muslim 223]. It's worship, not a chore."
```

### 9 · ask_ai
```yaml
chips:
  - "{women}I'm on my period. What can I still do?{/women}"
  - "Do I have to undo my braids for ghusl?"
  - "What if I'm not sure whether it was a wet dream?"
  - "There's no bidet at school or work. What do I do?"
```

### 10 · do_today
```yaml
pic: icon:Droplets
text: "Two small things for staying clean."
steps:
  - "Put a small water bottle or cup by your toilet for cleaning yourself"
  - "Haven't taken a ghusl since becoming Muslim? Take one today"
log: null
optional_extra: "Walk through the ghusl steps in your head the next time you shower, so it's automatic when you need it."
```

### 11 · takeaway
```yaml
pic: ghusl
text: "{men}Sex and any ejaculation call for a ghusl{/men}{women}Sex, ejaculation, and the end of a period or postnatal bleeding call for a ghusl{/women}: wash your hands and privates, make wudu, then wash your whole body. Pray only once you're clean."
```

### 12 · closing
Clean body, clean clothes, clean heart. You're learning your faith one ordinary day at a time.

---

## Prayer phrase
```yaml
arabic: "قُلْ هُوَ ٱللَّهُ أَحَدٌ ۝ ٱللَّهُ ٱلصَّمَدُ"
translit: "Qul huwa Allahu ahad. Allahus-samad"
meaning: "Say: He is Allah, the One. Allah, the One all creation turns to in need"
audio_id: ikhlas-1-2
when: "Your first surah, after al-Fatiha in the first two rak'ahs. You'll finish it tomorrow. On your period, or before a ghusl you need, learn it by listening and saying it in your heart for now. `[SCHOLAR: Q26]` [Q 112:1–2]"
```

## Check
```yaml
- prompt: "Which of these needs a ghusl, not just wudu?"
  options:
    - text: "A wet dream"
      correct: true
      feedback: "Right. Any ejaculation, including in sleep, needs a full ghusl."
    - text: "Passing wind"
      correct: false
      feedback: "Not quite. That breaks wudu only. Make wudu and pray."
    - text: "Using the toilet"
      correct: false
      feedback: "Not quite. Clean yourself and make wudu. Ghusl isn't needed."
- prompt: "A woman misses prayers during her period. Does she make them up?"
  options:
    - text: "No. She doesn't pray during it and doesn't make those prayers up"
      correct: true
      feedback: "Right. When the bleeding stops, she takes a ghusl and starts praying again."
    - text: "Yes, all of them afterward"
      correct: false
      feedback: "Not quite. Missed Ramadan fasts are made up, but prayers during a period are not."
```

## AI guide context
**Lesson facts**
- Ghusl is required after intercourse (even without ejaculation), after any ejaculation including in sleep, at the end of menstruation, and at the end of postnatal bleeding [Q 5:6; First Instructions on Worship Part I; IslamQA 243792]. One ghusl covers several causes.
- Hanafi ghusl: the obligatory parts are rinsing the mouth, rinsing the nose and washing the whole body; the rest (intention, Bismillah, hands, privates, wudu, three times, right side first) is sunnah. Anything waterproof (nail polish) must come off. Braids needn't be undone unless they stop water reaching the scalp [First Instructions on Worship Part I; Bukhari 248].
- Hanafi: while needing ghusl (or during a period), don't pray, touch a mushaf, recite Qur'an, enter the masjid, or do tawaf; du'a and dhikr are always allowed [First Instructions on Worship Part I].
- Periods (Hanafi): 3 to 10 days; bleeding under 3 days or beyond 10 is not menstruation (istihada), and prayers are due (bleeding past 10 days: the days beyond her usual cycle are made up); a new period needs 15 clean days between [First Instructions on Worship Part I]. Prayers missed during a period aren't made up; Ramadan fasts are.
- Istinja: clean with water, or tissue then water; Hanafi requires making sure urine has finished (istibra') before wudu. Impurity on body, clothes or prayer spot must be removed before prayer [First Instructions on Worship Part I].
- Q3: a convert who hasn't taken a ghusl since their shahada should take one.

**Likely questions**
- *"I'm on my period. What can I still do?"* Du'a and dhikr anytime, in any language; listen to Qur'an; learn the prayer by listening and saying words in her heart; read about Islam. She's still close to Allah; this is a break Allah gave, not a punishment. On reciting Qur'an aloud while learning, give the cautious line and offer "Ask my imam" (see Scholar flags).
- *"Irregular bleeding / spotting / bleeding that won't stop."* Give the Hanafi 3–10 day frame in one line; route the specifics to a female mentor or the imam. Never rule on her personal case.
- *"Not sure if it was a wet dream."* If there's fluid (other than urine or sweat) on waking, ghusl is needed in the Hanafi school; if nothing, no ghusl. Details: imam.
- *"No bidet at school or work."* Bring a small water bottle; tissue first, then a little water. If water truly isn't possible, wipe well with tissue (wiping is valid when the impurity hasn't spread beyond its exit); wash properly later.
- *"Pre-seminal fluid / normal discharge?"* Breaks wudu, not ghusl, in the Hanafi school. Keep it brief; offer the imam or a same-gender mentor for more.

**Escalate:** irregular or prolonged bleeding; anything about the convert's own sexual situation beyond these basics; a convert under 18 asking about sex or relationships beyond this lesson's level goes to a same-gender mentor or the imam (Spec §6.2 rule 12).

**Don't**
- Don't use embarrassed, euphemistic or shaming language. Plain and kind.
- Don't tell a woman to make up prayers missed during her period.
- Don't present ghusl as a condition of being Muslim (Q3).
- Don't go further into sexual topics than needed to answer the purity question, especially with teens.

## Madhab note
- **Mouth and nose in ghusl:** required in the Hanafi and Hanbali schools, recommended in the Maliki and Shafi'i schools.
- **Period length:** schools set different minimums and maximums (for example, the Maliki, Shafi'i and Hanbali maximum is 15 days). Women outside the Hanafi school should ask their imam.
- **Reciting Qur'an while needing ghusl or on a period:** most scholars forbid it; Malikis allow a woman on her period to recite from memory. Entering the masjid is restricted in most schools, with some allowing passing through.

## Sources
- Qur'an [5:6](https://quran.com/5/6), [2:222](https://quran.com/2/222), [112:1–2](https://quran.com/112/1-2).
- [Bukhari 248](https://sunnah.com/bukhari:248): Aisha describes the Prophet's ghusl.
- [Abu Dawud 355](https://sunnah.com/abudawud:355) (sahih, al-Albani): ghusl on accepting Islam (AI context, Q3).
- [Muslim 223](https://sunnah.com/muslim:223): purity is half of faith.
- [IslamQA.info 243792](https://islamqa.info/en/answers/243792): what requires ghusl.
- [[Source - First Instructions on Worship]] Part I (istinja and istibra', what major impurity prohibits, ghusl steps, menstruation rulings, 3–10 days).
- [[Research Notes - Core Essentials and Madhab Map]] §1 and §3 (ghusl causes; ghusl on conversion).
- Madhab note (verified, T2 final review): [Mathabah 133899: maximum duration of menses by school](https://islamqa.org/hanafi/mathabah/133899/maximum-duration-of-menses/); [IslamWeb 326818: maximum menses and minimum purity](https://www.islamweb.net/en/fatwa/326818/scholars-evidence-in-deciding-maximum-menses-and-minimum-purity).

## Scholar flags
- **Screen 2 (Q3).** "Haven't taken a ghusl since becoming Muslim? Take one today." Same cautious position as Day 1; not a condition of the shahada.
- **Prayer phrase, `when` line (NEW, unnumbered).** The phrase track has the convert practise Qur'an (al-Ikhlas from today) daily. In the Hanafi school a woman on her period, or anyone needing ghusl, may not recite Qur'an. Drafted the cautious position: learn by listening and saying it in the heart until she's clean; du'a and dhikr aloud are fine. `[SCHOLAR: Q26]` Question for the scholar: may she recite word by word or with the intention of learning, as some Hanafis allow for teaching?
