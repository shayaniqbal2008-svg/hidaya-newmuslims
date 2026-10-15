---
day: 82
phase: 3
unit: 10
title: "The Qur'an in your life"
hook: "You don't have to read the whole Qur'an this year. You just need to open it often."
minutes: 5
skills: [P4]
pain_points: [prayer-without-arabic]
logs: []
madhab_sensitive: true
scholar_flags: []
status: draft-pending-scholar-review
glossary: [Qur'an, surah, ayah, mushaf, wudu, ghusl, al-Fatiha, Allah, ﷺ]
sources: [Q 54:17, Q 73:20, Bukhari 5027, Muslim 798, SeekersGuidance (Qur'an on a screen without wudu), SeekersGuidance (touching a translation), Revealed Path ch. 10, Field Guide ch. 9]
format: 2
---
# Day 82 · The Qur'an in your life

### 1 · hook
```yaml
pic: quran
text: "You already recite the Qur'an every day: al-Fatiha and a short surah in every prayer. Today is about making it a friend outside the prayer too, a few minutes at a time."
```

### 2 · learn
```yaml
pic: icon:BookOpen
text: "**Allah made it easy.** The Qur'an says it was made easy to remember [Q 54:17]. And it tells believers: *\"recite what is easy from it\"* [Q 73:20, Saheeh Intl.]."
bubbles:
  - "The Prophet ﷺ said the best people are those who learn the Qur'an and teach it [Bukhari 5027]."
  - "That \"learning\" starts with one **ayah** (verse) at a time."
```

### 3 · fill
```yaml
before: "Someone skilled at reciting the Qur'an is with the noble angels. Someone who stumbles and finds it hard gets"
after: "reward [Muslim 798]."
options:
  - text: "a double"
    correct: true
    feedback: "Yes, double. So if Arabic is hard, the struggle isn't a sign you're failing. It's part of the reward."
  - text: "no"
    correct: false
    feedback: "Not quite. The one who finds it hard gets a double reward [Muslim 798]. The struggle itself counts."
  - text: "half the"
    correct: false
    feedback: "Not quite. It's a double reward [Muslim 798], not half. Struggling is part of the reward."
```

### 4 · choice
```yaml
pic: icon:BookOpenText
prompt: "Luis reads one page of translation a day but feels bad he can't read Arabic. What's true?"
options:
  - text: "His reading counts, and if he tries Arabic, the struggle is rewarded too"
    correct: true
    feedback: "Right. Understanding the meaning matters, and someone who finds recitation hard gets a double reward [Muslim 798]."
  - text: "Reading a translation doesn't count for anything"
    correct: false
    feedback: "Not quite. Understanding what Allah says is valuable. A translation is for understanding; recitation in prayer stays in Arabic."
  - text: "He must master Arabic before opening the Qur'an"
    correct: false
    feedback: "Not quite. Start with meaning now, and learn Arabic alongside, step by step."
```

### 5 · steps
```yaml
title: "A habit that sticks"
steps:
  - text: "**Same time, every day.** Right after Fajr or before bed."
    pic: icon:Clock
  - text: "**Small.** Five minutes, or a few verses."
    pic: icon:Timer
  - text: "**Meaning and sound.** Read a translation, and listen to a reciter."
    pic: icon:Headphones
  - text: "**Your surahs.** Review al-Fatiha and the surahs you pray with, so they stay solid."
    pic: "pose:qiyam"
```

### 6 · learn
```yaml
madhab_variant: true
pic: quran
default: "**Respect for the book.** Most scholars say to have wudu before touching a printed Arabic Qur'an (a **mushaf**). Reading on a phone or reciting from memory is fine without wudu."
hanafi: "**Respect for the book.** Have wudu to touch a printed Qur'an (a **mushaf**), and to be safe, a translation too. Reading from a phone or reciting from memory is fine without wudu; just don't touch the verses on the screen."
bubbles:
  - "Reciting after sex or a wet dream{women}, or during a period{/women}: {{masjid.name}} will show you its practice. Listening, du'a and remembering Allah are always fine."
hanafi_bubbles:
  - "After sex or a wet dream, don't recite until your ghusl.{women} During a period, don't recite until it ends.{/women} Listening is always fine."
```

### 7 · sort
```yaml
prompt: "Fine without wudu, or have wudu first?"
buckets: ["Fine without wudu", "Have wudu first"]
items:
  - text: "Reading the Qur'an on your phone"
    bucket: 0
    why: "Fine without wudu."
  - text: "Reciting a surah from memory"
    bucket: 0
    why: "Fine without wudu."
  - text: "Touching a printed Arabic Qur'an (a mushaf)"
    bucket: 1
    why: "Most scholars say to have wudu first, out of respect for the book."
  - text: "Listening to a reciter"
    bucket: 0
    why: "Listening is always fine."
variants:
  hanafi:
    items:
      - text: "Reading the Qur'an on your phone, without touching the verses"
        bucket: 0
        why: "Fine without wudu. Just don't touch the verses on the screen."
      - text: "Reciting a surah from memory"
        bucket: 0
        why: "Fine without wudu."
      - text: "Touching a printed Qur'an (a mushaf)"
        bucket: 1
        why: "Have wudu to touch a mushaf."
      - text: "Holding a printed translation of the Qur'an"
        bucket: 1
        why: "To be safe, have wudu for a translation too."
      - text: "Listening to a reciter"
        bucket: 0
        why: "Listening is always fine."
```

### 8 · reveal
```yaml
title: "Learning the Arabic letters (optional)"
cards:
  - front: "Do I have to learn to read Arabic?"
    back: "No. It's a bonus, not a requirement. But many converts find it opens up the Qur'an, and it's easier than it looks."
    pic: icon:Languages
  - front: "How long does it take?"
    back: "Most people learn the 28 letters in a few weeks of short practice. Reading smoothly takes a few months."
    pic: icon:CalendarCheck
  - front: "Where do I start?"
    back: "A beginner class at {{masjid.name}}, or a teacher {{mentor.name}} recommends. A teacher helps you get the sounds right."
    pic: icon:School
```

### 9 · steps
```yaml
title: "Five minutes with the Qur'an, right now"
intro: "Optional: do it now if you have five minutes."
steps:
  - text: "Find a quiet spot. Say *Bismillah*."
    pic: prayer-mat
  - text: "Open a Qur'an app with a translation, or a printed copy (with wudu)."
    pic: quran
  - text: "Pick one surah you pray with, like al-Fatiha or al-Ikhlas."
    pic: "pose:qiyam"
  - text: "Listen to it recited once."
    pic: icon:Headphones
  - text: "Read the meaning slowly, verse by verse."
    pic: icon:BookOpenText
  - text: "Recite it once yourself. Before a ghusl that's due{women}, or on your period{/women}, listen along instead."
    pic: icon:Mic
  - text: "Choose your daily time for tomorrow and set a reminder."
    pic: icon:AlarmClock
done_text: "That's a Qur'an habit started. Same time tomorrow."
```

### 10 · ask_ai
```yaml
chips:
  - "Which translation should I read?"
  - "Where should I start reading after al-Fatiha?"
  - "How do I learn the Arabic letters?"
  - "Can I listen to the Qur'an while I work?"
```

### 11 · do_today
```yaml
pic: icon:Clock
text: "Five minutes with the Qur'an today."
steps:
  - "Spend five minutes with the Qur'an"
  - "Choose a daily time you can keep"
log: null
optional_extra: "Ask {{mentor.name}} about a Qur'an or Arabic class at {{masjid.name}}."
```

### 12 · takeaway
```yaml
pic: quran
text: "A few verses a day, at the same time, with meaning. If it's hard, the reward is double."
```

### 13 · closing
A few months ago, the Qur'an was new to you. Look at you now.

---

## Check
```yaml
- prompt: "What does Muslim 798 promise someone who finds reciting the Qur'an hard?"
  options:
    - text: "A double reward"
      correct: true
      feedback: "Right. The struggle itself is rewarded."
    - text: "Nothing until they're fluent"
      correct: false
      feedback: "Not quite. Someone who stumbles through it gets a double reward."
- prompt: "Which daily Qur'an habit is most likely to last?"
  options:
    - text: "A few verses at the same time each day"
      correct: true
      feedback: "Right. Small and regular beats big and occasional."
    - text: "A whole chapter whenever you feel inspired"
      correct: false
      feedback: "Not quite. Inspiration comes and goes; a set time keeps you going."
```

## AI guide context
**Lesson facts**
- The Qur'an is made easy to remember [Q 54:17]; recite what is easy [Q 73:20].
- The best are those who learn the Qur'an and teach it [Bukhari 5027]. The one who struggles with it gets a double reward [Muslim 798].
- Translations are for understanding; recitation in prayer is in Arabic only (Q13).
- **Hanafi:** wudu is needed to touch a printed mushaf, and precautionarily a translation too [SeekersGuidance (touching a translation)]. Reading on a screen, or reciting from memory, is permitted without wudu, but not touching the verses on screen [SeekersGuidance (screen without wudu)]. Reciting is not permitted in major impurity (before ghusl) or during menstruation; listening, dhikr and du'a are fine.
- Learning the Arabic letters is optional and encouraged.

**Likely questions**
- *"Which translation?"* Saheeh International (used in this program) or another widely used modern English translation; ask the imam for a favorite. Read with a teacher or a brief commentary where possible.
- *"Where do I start after al-Fatiha?"* Short surahs at the end (the 30th part), or a surah the imam recommends; read with meaning.
- *"How do I learn the letters?"* A masjid class or teacher; 10 minutes a day; expect weeks for letters, months for fluency.
- *"Can I listen while I work?"* Yes, listening is fine; give it attention when you can.
- *"I'm on my period; can I read?"* In the Hanafi school, no recitation until it ends; she can listen, read the meaning on a screen without reciting, and make dhikr and du'a. Other schools differ; for details, the imam or a female staff member.

**Escalate:** detailed questions about recitation during a period or major impurity beyond the lesson; questions about tajwid rules (send to a teacher).

**Don't**
- Don't suggest reciting a translation in prayer.
- Don't set big targets ("finish the Qur'an this month").
- Don't shame anyone for not reading Arabic.

## Madhab note
In the Hanafi school, reciting the Qur'an isn't allowed during a period or before ghusl after sex or a wet dream; the Shafi'i and Hanbali schools agree. The Maliki school allows a woman on her period to recite from memory. All four schools ask for wudu to touch a printed mushaf. On touching a translation, views differ even within the Hanafi school; the lesson teaches the careful view.

## Sources
- Qur'an [54:17](https://quran.com/54/17), [73:20](https://quran.com/73/20).
- [Bukhari 5027](https://sunnah.com/bukhari:5027): the best of you learn the Qur'an and teach it.
- [Muslim 798](https://sunnah.com/muslim:798): double reward for the one who finds it hard.
- [SeekersGuidance: Is it permissible to read the Qur'an on a screen without wudu?](https://seekersguidance.org/answers/hanafi-fiqh/is-it-permissible-to-read-the-quran-on-a-screen-without-wudu/) (Hanafi; Ustadh Tabraze Azam, checked by Shaykh Faraz Rabbani).
- [SeekersGuidance: Is ritual purity required to touch an English translation of the Qur'an?](https://seekersguidance.org/answers/hanafi-fiqh/is-ritual-purity-required-to-touch-an-english-translation-of-the-quran/) (Hanafi).
- [[Source - The Revealed Path]] ch. 10 (the Qur'an). [[Source - The New Muslims Field Guide]] ch. 9 (small, steady steps).
- [[Source - First Instructions on Worship]] Part I (what major impurity and menstruation prevent).
