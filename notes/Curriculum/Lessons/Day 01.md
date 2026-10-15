---
day: 1
phase: 1
unit: 1
title: "A fresh start: what your shahada means"
hook: "You just made the biggest decision of your life. Let's make sense of it."
minutes: 5
skills: [T2, S5]
pain_points: [identity]
logs: []
madhab_sensitive: true
scholar_flags: [Q3]
status: draft-pending-scholar-review
glossary: [shahada, Allah, ﷺ, ghusl, wudu]
sources: [Muslim 121, Q 8:38, Q 25:70, Bukhari 50, Bukhari 1395, Abu Dawud 355, Welcome to Islam D1, Field Guide ch. 1 and 4, SeekersGuidance (shahada witnesses), IslamOnline (Siddiqi), IslamWeb 393040, IslamWeb 11140, Darul Ifta Birmingham 19848, IslamQA 109201]
format: 2
---
# Day 1 · A fresh start: what your shahada means

### 1 · hook
```yaml
pic: fresh-start
text: "**Welcome, {{convert.first_name}}.** You just made the biggest decision of your life, and {{masjid.name}} is glad you're here. Today: what you actually said, and what it means for you."
```

### 2 · learn
```yaml
pic: intention
text: "When you became Muslim, you said the **shahada**: the testimony of faith. **Allah** is simply Arabic for God. Arabic-speaking Christians and Jews call God \"Allah\" too [Field Guide ch. 4]."
```

### 3 · phrase
```yaml
arabic: "أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا ٱللَّٰهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ ٱللَّٰهِ"
translit: "Ash-hadu an la ilaha illa Allah, wa ash-hadu anna Muhammadan rasul Allah"
meaning: "I bear witness that there is no god but Allah, and I bear witness that Muhammad is the Messenger of Allah"
audio_id: shahada
when: "The words that made you Muslim. You'll also say part of them in every prayer."
```

### 4 · tap_words
```yaml
prompt: "What does *la ilaha illa Allah* mean?"
answer: "There is no god but Allah"
extra: ["greatest", "peace", "only"]
feedback: "It's the heart of Islam: only Allah deserves worship."
```

### 5 · learn
```yaml
pic: crescent
text: "Those two sentences carry **three big beliefs**."
bubbles:
  - "**One God.** Only Allah deserves worship."
  - "**Guidance.** Allah sent messengers to show people how to live. **Muhammad ﷺ** was the last, and the Qur'an came through him."
  - "**A next life.** Everyone will meet Allah and see what they did. *(ﷺ means \"peace and blessings be upon him.\" Muslims say it after his name.)*"
```

### 6 · fill
```yaml
before: "Muhammad ﷺ was the"
after: "messenger Allah sent."
options:
  - text: "last"
    correct: true
    feedback: "Yes. He was the final messenger, and the Qur'an came through him."
  - text: "first"
    correct: false
    feedback: "Not quite. Many messengers came before him. He was the last."
  - text: "only"
    correct: false
    feedback: "Not quite. Allah sent many messengers. Muhammad ﷺ was the last."
```

### 7 · learn
```yaml
pic: icon:Sparkles
text: "**Your slate is clean.** The Prophet ﷺ told a man who was afraid of his past that Islam wipes out everything before it [Muslim 121]. The Qur'an says the same [Q 8:38]."
bubbles:
  - "It even promises that Allah can turn past wrongs into good for those who believe and do good [Q 25:70]."
  - "Whatever you carried in, you don't carry it anymore."
```

### 8 · sort
```yaml
prompt: "True, or a myth new Muslims often worry about?"
buckets: ["True", "Myth"]
items:
  - text: "Saying the shahada sincerely is what makes me Muslim"
    bucket: 0
    why: "No witnesses needed. A masjid certificate only helps with paperwork later, like marriage or Hajj."
  - text: "I have to change my name"
    bucket: 1
    why: "Only if its meaning goes against Islam. Most names are fine, and you keep your family name."
  - text: "I have to know everything right away"
    bucket: 1
    why: "Even the Prophet ﷺ had people taught one step at a time. That's how this program works."
  - text: "I have to drop my family and my old life"
    bucket: 1
    why: "Islam asks you to be good to your parents, even if they disagree. Day 4 shows how."
  - text: "I have to become Arab, or Pakistani, or someone else"
    bucket: 1
    why: "Islam isn't an ethnicity. You keep your culture, food and style, minus anything Islam forbids."
  - text: "The wrongs I did before Islam are wiped out"
    bucket: 0
    why: "Islam wipes out what came before it [Muslim 121]."
```

### 9 · learn
```yaml
pic: ghusl
text: "**One thing before your first prayer: ghusl**, a full shower done as worship. You take it **once now**, as a new Muslim. It isn't something you repeat before every prayer: that's the short wash, wudu (Day 2). `[SCHOLAR: Q3]`"
```

### 10 · steps
```yaml
title: "How to take your ghusl"
intro: "{women}On your period? Take it once your period ends.{/women}"
steps:
  - text: "Take off nail polish or anything waterproof on your skin"
    pic: icon:Hand
  - text: "Intend it in your heart: this shower is for Allah"
    pic: intention
  - text: "Wash your hands and private parts"
    pic: wudu:hands
  - text: "Rinse your mouth and your nose"
    pic: wudu:mouth
  - text: "Wash your whole body, making sure water reaches the roots of your hair"
    pic: ghusl
done_text: "That's ghusl. It also counts as your wudu until something breaks it."
```

### 11 · ask_ai
```yaml
chips:
  - "What if I didn't say the shahada perfectly?"
  - "Do I have to tell anyone I'm Muslim?"
  - "Are my past sins really gone?"
  - "When do I start praying?"
```

### 12 · reflect
```yaml
prompt: "What made you say yes to Islam? Write a sentence or two. This stays private. You'll come back to it on Day 23."
share_with_mentor: optional
```

### 13 · do_today
```yaml
pic: ghusl
text: "Take your ghusl, and start your prayers."
steps:
  - "Take your ghusl, following the steps you just saw"
  - "In a quiet moment, say the shahada once more, just to yourself"
  - "Prayer starts today. If a prayer time comes before tomorrow, do Days 2 and 3 now: they're open, about seven minutes each"
log: null
optional_extra: "If you'd like someone to show you wudu and prayer in person, {{mentor.name}} can."
```

### 14 · takeaway
```yaml
pic: icon:HeartHandshake
text: "You testified that there is no god but Allah and that Muhammad ﷺ is His Messenger. Your past is wiped clean, and you're still you."
```

### 15 · closing
That's Day 1. Next: getting ready to pray, then your first prayer. One step at a time.

---

## Check
```yaml
- prompt: "What happens to the wrongs you did before Islam?"
  options:
    - text: "They're wiped out"
      correct: true
      feedback: "Right. Islam wipes out what came before [Muslim 121]."
    - text: "You have to make up for each one"
      correct: false
      feedback: "Not quite. Islam wipes out what came before it [Muslim 121]."
- prompt: "Do you need witnesses for your shahada to count?"
  options:
    - text: "No, saying it sincerely is enough"
      correct: true
      feedback: "Right. A certificate only helps with paperwork later."
    - text: "Yes, at least two"
      correct: false
      feedback: "Not quite. Sincerity is what counts; witnesses are for paperwork."
- prompt: "Do you have to change your name when you become Muslim?"
  options:
    - text: "Only if its meaning goes against Islam"
      correct: true
      feedback: "Right. Most names are fine, and you keep your family name."
    - text: "Yes, everyone takes an Arabic name"
      correct: false
      feedback: "Not quite. A new name is only needed if the meaning goes against Islam."
```

## AI guide context
**Lesson facts**
- The shahada, said sincerely with understanding and acceptance, is what makes someone Muslim. No witnesses are needed for it to count; a certificate is helpful for marriage, Hajj and other paperwork [SeekersGuidance, shahada witnesses].
- Islam wipes out what came before [Muslim 121; Q 8:38]. Those who repent, believe and do good can have past wrongs replaced with good [Q 25:70].
- Belief is learned in stages: the shahada first, then prayer, then the rest [Bukhari 1395; IslamQA 109201].
- A name change is required only if the name's meaning conflicts with Islam; family names are kept [IslamOnline (Siddiqi); IslamWeb 393040].
- A woman who converts during her period takes her ghusl when the period ends, and doesn't pray until then [Research Notes - Core Essentials §3 (AMJA/Zarabozo)].
- Before ghusl, anything waterproof on the skin or nails (nail polish) must come off, or the ghusl isn't complete [First Instructions on Worship, Part I].
- Ghusl: the Prophet ﷺ told Qays ibn 'Asim to bathe when he accepted Islam [Abu Dawud 355]. Scholars differ on whether it's required for every convert or only for those with prior major impurity, which covers almost every adult. All agree it isn't a condition for the shahada to count [IslamWeb 11140; Darul Ifta Birmingham 19848].

**Likely questions**
- *"What if I said it wrong or mispronounced it?"* Sincerity and meaning are what matter. If they want peace of mind, they can say it again any time; there's no harm.
- *"Do I have to tell people?"* No one is owed an announcement. Day 4 covers telling family safely. Their privacy is theirs.
- *"Are my past sins really gone?"* Yes [Muslim 121; Q 8:38]. Reassure warmly. Don't list categories of sin.
- *"When do I start praying?"* Prayer is due from now on. Days 2 and 3 are unlocked now and teach it; if a prayer is coming up, send them to Day 3. A ghusl also counts as wudu, so after it they can pray straight away unless something breaks their wudu; they'll still want Day 2's wudu steps for the next prayer. Offer to walk them through it. Never tell them prayer can wait.
- *"Do I need to be circumcised?"* It isn't a condition of being Muslim. Don't go further: escalate to the imam privately.
- *"What do I need to believe about Jesus?"* Brief: Muslims love and honor Jesus as a great prophet. Day 27 covers it.

**Escalate:** circumcision; a convert already married to a non-Muslim spouse (Q21); anyone asking about past marriages, inheritance or debts from before Islam.

**Don't**
- Don't tell them to change their name, cut off anyone, or adopt a new culture.
- Don't present ghusl as a condition of their Islam.
- Don't overload: no long lists of rules on Day 1.

## Madhab note
Rinsing the mouth and nose is a required part of ghusl in the Hanafi and Hanbali schools, and recommended in the Maliki and Shafi'i schools. Doing it covers every school.

## Sources
- [Muslim 121](https://sunnah.com/muslim:121): Islam wipes out what came before it.
- Qur'an [8:38](https://quran.com/8/38), [25:70](https://quran.com/25/70).
- [Bukhari 50](https://sunnah.com/bukhari:50): the Hadith of Jibril (core beliefs).
- [Bukhari 1395](https://sunnah.com/bukhari:1395): teaching in stages.
- [Abu Dawud 355](https://sunnah.com/abudawud:355): Qays ibn 'Asim told to bathe on accepting Islam (sahih, al-Albani).
- [SeekersGuidance: Does taking shahada require witnesses?](https://seekersguidance.org/answers/calling-to-islam/does-taking-shahada-require-witnesses/)
- [IslamOnline, Dr. Muzammil Siddiqi: Is changing name necessary?](https://fiqh.islamonline.net/en/is-changing-name-necessary-for-new-convert/); [IslamWeb 393040](https://www.islamweb.net/en/fatwa/393040/changing-his-name-after-embracing-islam)
- [IslamWeb 11140](https://www.islamweb.net/en/fatwa/11140/ruling-on-ghusl-for-those-embracing-islam); [Darul Ifta Birmingham via IslamQA.org 19848](https://islamqa.org/hanafi/daruliftaa-birmingham/19848/is-a-convert-required-to-have-a-ghusl-when-accepting-islam/)
- [IslamQA.info 109201](https://islamqa.info/en/answers/109201): teach new Muslims in stages.
- [[Source - First Instructions on Worship]] Part I (ghusl steps, Hanafi).
- [[Source - Welcome to Islam]] Day 1 (three core beliefs; fresh-start shower). [[Source - The New Muslims Field Guide]] ch. 1 (you're still you), ch. 4 (Allah is the Arabic word for God).

## Scholar flags
- **Screen 8, ghusl (Q3).** Drafted as: almost every adult needs a ghusl before praying, so take it today. It doesn't say whether it's obligatory for every convert as such. This is the cautious position: it satisfies the view that it's obligatory for every convert, and the view that it's obligatory after prior major impurity (which covers almost every adult). It never presents ghusl as a condition of the shahada.
