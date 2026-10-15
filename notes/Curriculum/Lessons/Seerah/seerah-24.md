---
track: seerah
order: 24
phase: null
unit: null
title: "A call and a direction"
hook: "The adhan you hear five times a day began as a dream. The direction you pray changed in the middle of a prayer."
minutes: 6
skills: [T2, B6]
pain_points: [prayer-without-arabic, belonging]
logs: []
madhab_sensitive: false
scholar_flags: [Q40]
status: draft-pending-scholar-review
glossary: [Allah, ﷺ, Ka'bah, adhan, qibla, Ramadan, Asr, al-Aqsa]
sources: [Q 2:144, Q 2:183, Abu Dawud 499, Bukhari 40, Ibn Majah 150, IslamQA 11575, Qalam Institute Sirah Podcast ep. 37]
format: 2
---
# seerah-24 · A call and a direction

### 1 · hook
```yaml
pic: icon:Megaphone
text: "**The call to prayer you hear today began as a dream.** And the direction you face when you pray changed one afternoon, while people were in the middle of a prayer."
```

### 2 · learn
```yaml
pic: icon:Megaphone
text: "**How do we call people?** In the early years in Madinah, the Muslims talked about how to gather everyone for prayer. Then 'Abdullah ibn Zayd saw the words of the **adhan** (the call to prayer) in a dream [Abu Dawud 499; IslamQA 11575]."
bubbles:
  - "The Prophet ﷺ said it was a true vision. 'Umar came running: he had seen the same thing [Abu Dawud 499]."
```

### 3 · choice
```yaml
pic: icon:Mic
prompt: "'Abdullah ibn Zayd saw the dream. But he was told to teach the words to someone else to call out. Why?"
options:
  - text: "Bilal had a louder, stronger voice"
    correct: true
    feedback: "Right. The Prophet ﷺ chose Bilal for his voice, and 'Abdullah taught him the words [Abu Dawud 499]."
  - text: "'Abdullah didn't want the honour"
    correct: false
    feedback: "Not quite. The reason given was simple: Bilal's voice carried further [Abu Dawud 499]."
  - text: "Only leaders could call the adhan"
    correct: false
    feedback: "Not quite. Bilal wasn't a leader of any tribe. He was chosen for his voice."
```

### 4 · learn
```yaml
pic: icon:Volume2
text: "**The first voice.** You met Bilal in episode 12, refusing to give up \"One, One\" under torture [Ibn Majah 150]. He had been enslaved, and was freed, the early biographers say [Qalam ep. 37]. Now his voice called a whole city to prayer. `[SCHOLAR: Q40]`"
```

### 5 · widget
```yaml
widget: timeline
prompt: "The early years in Madinah"
text: "The worship you're learning takes shape."
events:
  - when: "Early years"
    title: "The adhan"
    text: "A dream, a true vision, and Bilal's voice [Abu Dawud 499]."
    pic: icon:Megaphone
  - when: "16–17 months"
    title: "Facing Jerusalem"
    text: "In Madinah he prays toward Jerusalem, hoping for the Ka'bah [Bukhari 40]."
    pic: icon:Landmark
  - when: "Then"
    title: "The qibla turns"
    text: "Allah turns the direction of prayer to the Ka'bah [Q 2:144]."
    pic: qibla
  - when: "Second year"
    title: "Ramadan"
    text: "Fasting Ramadan is made obligatory, the sources report [IslamQA 11575; Q 2:183]."
    pic: crescent
```

### 6 · learn
```yaml
pic: icon:Landmark
text: "**Facing Jerusalem.** For sixteen or seventeen months in Madinah, he prayed toward Jerusalem. But he hoped to face the Ka'bah, the house Ibrahim built [Bukhari 40]."
bubbles:
  - "Allah answered: *\"We have certainly seen the turning of your face... toward the heaven, and We will surely turn you to a qiblah with which you will be pleased\"* [Q 2:144, Saheeh Intl.]."
```

### 7 · fill
```yaml
before: "\"So turn your face toward al-Masjid"
after: "...\" [Q 2:144]"
options:
  - text: "al-Haram"
    correct: true
    feedback: "Yes. The Sacred Masjid in Makkah, with the Ka'bah at its centre."
  - text: "al-Aqsa"
    correct: false
    feedback: "Not quite. They had faced al-Aqsa until then. This verse turned them to al-Masjid al-Haram."
  - text: "Quba"
    correct: false
    feedback: "Not quite. The verse turned them toward al-Masjid al-Haram in Makkah."
```

### 8 · learn
```yaml
pic: qibla
text: "**Turning mid-prayer.** The first full prayer toward the Ka'bah was an 'Asr. A man who had prayed it passed another masjid where people were still praying toward Jerusalem. When he told them, they turned around right there, mid-prayer [Bukhari 40]."
```

### 9 · widget
```yaml
widget: qibla
prompt: "Your turn"
text: "Turn the compass to face the Ka'bah, like those worshippers did mid-prayer. You learned this in Day 2."
```

### 10 · learn
```yaml
pic: icon:Users
text: "**Real people, real history.** The adhan you hear, the direction you face, the month you fast: each has a story and real people behind it. When you face the **qibla**, you're turning with them, and with a freed man named Bilal calling you in."
```

### 11 · scenario
```yaml
pic: prayer-mat
situation: "Jordan prays at home, but feels like he's just copying moves from a video. Prayer feels mechanical, and he wonders if it means anything."
options:
  - text: "Learn the stories behind what he's doing, and keep praying while he learns"
    best: true
    feedback: "Yes. Knowing the dream, the voice and the turning gives every movement a story. Keep going."
  - text: "Stop praying until it feels meaningful"
    best: false
    feedback: "Not quite. Meaning grows by showing up. The Companions turned mid-prayer because they were already praying."
  - text: "Decide the details don't matter and face any direction"
    best: false
    feedback: "Not quite. The direction was a gift the Prophet ﷺ hoped for. Facing the Ka'bah joins him to every Muslim."
```

### 12 · ask_ai
```yaml
chips:
  - "What do the words of the adhan mean?"
  - "Why did the qibla change?"
  - "Who was Bilal?"
  - "Prayer feels mechanical. What helps?"
```

### 13 · do_today
```yaml
pic: icon:Ear
text: "Listen to the adhan like it's new."
steps:
  - "Play or listen to one adhan today"
  - "Remember the dream, and Bilal's voice, behind it"
  - "Answer it by going to pray"
log: null
```

### 14 · takeaway
```yaml
pic: icon:Megaphone
text: "A dream, a freed man's voice, and a city turning mid-prayer. The worship you're learning was lived by real people first."
```

### 15 · closing
Next episode: about three hundred against a thousand, at a place called Badr.

---

## Check
```yaml
- prompt: "Who first called the adhan?"
  options:
    - text: "Bilal"
      correct: true
      feedback: "Right. 'Abdullah ibn Zayd dreamt the words; Bilal, with his stronger voice, called them [Abu Dawud 499]."
    - text: "'Umar"
      correct: false
      feedback: "Not quite. 'Umar had seen the same dream, but Bilal called the adhan."
- prompt: "Which way did the Muslims in Madinah face before the qibla changed?"
  options:
    - text: "Jerusalem"
      correct: true
      feedback: "Right. For sixteen or seventeen months, until Allah turned them to the Ka'bah [Bukhari 40]."
    - text: "Madinah"
      correct: false
      feedback: "Not quite. They faced Jerusalem, then the Ka'bah in Makkah."
```

## AI guide context
**Lesson facts**
- The Muslims discussed how to call people to prayer. 'Abdullah ibn Zayd saw the words of the adhan in a dream; the Prophet ﷺ called it a true vision and had him teach it to Bilal, who had the louder voice; 'Umar had seen the same [Abu Dawud 499, Hasan Sahih]. The year is debated (1 or 2 AH); IslamQA 11575 says the second year, so say "in the early years in Madinah".
- Bilal had been tortured for his faith in Makkah and kept saying "One, One" [Ibn Majah 150, Hasan Sahih]; he had been enslaved and Abu Bakr bought his freedom, according to the early biographers [Qalam ep. 37]. `[SCHOLAR: Q40]`
- In Madinah he prayed toward Jerusalem for sixteen or seventeen months, hoping for the Ka'bah [Bukhari 40; Q 2:144].
- Allah turned the qibla to the Ka'bah [Q 2:144]; the first full prayer toward it was 'Asr, and people in another masjid turned mid-prayer when told [Bukhari 40].
- The fast of Ramadan was made obligatory in the second year [IslamQA 11575; Q 2:183].

**Likely questions**
- *"What do the words of the adhan mean?"* Give a plain meaning (Allah is the Greatest; I testify there is no god but Allah; I testify Muhammad is the Messenger of Allah; come to prayer; come to success). Day 11 covers the adhan.
- *"Why did the qibla change?"* Keep to the texts: he hoped for it and Allah turned him [Q 2:144]. Don't add polemics about other faiths.
- *"Was Bilal a slave?"* Say plainly that slavery existed everywhere then; Bilal had been enslaved, was freed, and became the first voice of the adhan. Don't claim slavery is acceptable today or that Islam abolished it in one stroke; detailed questions go to the imam. `[SCHOLAR: Q40]`
- *"Prayer feels mechanical."* Normal; learn meanings bit by bit, slow down one prayer a day, keep praying. Mentor and Days 8–30.

**Escalate:** detailed questions on slavery (Q40).

**Don't**
- Don't present the qibla change as a rejection of Jews or Christians.
- Don't give a single certain year for the adhan.

## Sources
- Qur'an [2:144](https://quran.com/2/144) (the qibla turned to al-Masjid al-Haram), [2:183](https://quran.com/2/183) (fasting decreed).
- [Abu Dawud 499](https://sunnah.com/abudawud:499) (Hasan Sahih, al-Albani; Isnad Hasan, Zubair Ali Zai): 'Abdullah ibn Zayd's dream; Bilal's louder voice; 'Umar's dream.
- [Bukhari 40](https://sunnah.com/bukhari:40) (Sahih): sixteen or seventeen months toward Jerusalem; the first 'Asr toward the Ka'bah; turning mid-prayer.
- [Ibn Majah 150](https://sunnah.com/ibnmajah:150) (Hasan Sahih, al-Albani): Bilal under torture saying "One, One".
- [IslamQA 11575, *Who Is Muhammad?*](https://islamqa.info/en/answers/11575): in the second year the adhan, the qibla change and the Ramadan fast.
- Qalam Institute, *The Sīrah Podcast*, [ep. 37, The torture and suffering of the early Muslims in Makkah](https://www.qalaminstitute.org/2013/02/seerah-life-of-the-prophet-the-torture-suffering-of-the-early-muslims-in-makkah/): Bilal freed by Abu Bakr.
- Fact rows 24.1–24.5 and 12.1 in [[Seerah Fact-Check Log]].

## Scholar flags
- **Screen 4 and AI guide (Q40).** Bilal is described as having been enslaved and freed; the AI guide says plainly that slavery existed everywhere then, doesn't claim it's acceptable today, and routes detail to the imam.
