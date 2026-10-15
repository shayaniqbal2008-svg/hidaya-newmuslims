---
track: seerah
order: 18
phase: null
unit: null
title: "The Night Journey and the gift of prayer"
hook: "In one night he was taken to Jerusalem and up through the heavens, and came back with the five prayers you pray today."
minutes: 6
skills: [T2, B6]
pain_points: [prayer-without-arabic, overwhelm, iman-dips]
logs: []
madhab_sensitive: false
scholar_flags: [Q44]
status: draft-pending-scholar-review
glossary: [Allah, ﷺ, Makkah, salah, Jibril, Musa, Ibrahim, Isa, Quraysh, al-Aqsa, al-Buraq, al-Siddiq]
sources: [Q 17:1, Q 53:13–18, Muslim 162a, Bukhari 349, IslamQA 84314, IslamQA 145725, IslamQA 11575, Dar al-Ifta Egypt (Night Journey), SeekersGuidance (Abu Bakr al-Siddiq)]
format: 2
---
# seerah-18 · The Night Journey and the gift of prayer

### 1 · hook
```yaml
pic: icon:MoonStar
text: "**In one night, he was taken to Jerusalem and up through the heavens.** He came back with a gift you already hold in your hands: the five daily prayers."
```

### 2 · learn
```yaml
pic: icon:MoonStar
text: "**A journey by night.** About a year before the hijra, Allah took His Messenger ﷺ from Makkah to Jerusalem in a single night [IslamQA 84314]. `[SCHOLAR: Q44]`"
bubbles:
  - "The Qur'an opens a whole surah with it: *\"Exalted is He who took His Servant by night from al-Masjid al-Haram to al-Masjid al-Aqsa\"* [Q 17:1, Saheeh Intl.]."
```

### 3 · fill
```yaml
before: "\"Exalted is He who took His Servant by night from al-Masjid al-Haram to al-Masjid al-"
after: "\" [Q 17:1]"
options:
  - text: "Aqsa"
    correct: true
    feedback: "Yes. Al-Aqsa, in Jerusalem, the land of many earlier prophets."
  - text: "Nabawi"
    correct: false
    feedback: "Not quite. That's his masjid in Madinah, which didn't exist yet. The verse names al-Aqsa in Jerusalem."
  - text: "Quba"
    correct: false
    feedback: "Not quite. Quba comes later, near Madinah. The journey was to al-Aqsa in Jerusalem."
```

### 4 · learn
```yaml
pic: icon:Sparkles
text: "**Up through the heavens.** He rode al-Buraq, a white riding animal, to Jerusalem and prayed there. Then Jibril took him up, heaven after heaven, and earlier prophets welcomed him: Adam, 'Isa (Jesus), Musa (Moses) and Ibrahim (Abraham) [Muslim 162a; Bukhari 349]."
bubbles:
  - "The Qur'an says he reached the Lote Tree of the farthest boundary, and *\"He certainly saw of the greatest signs of his Lord\"* [Q 53:14; Q 53:18, Saheeh Intl.]."
```

### 5 · widget
```yaml
widget: timeline
prompt: "One night"
text: "Tap through the journey, in the order the hadith tell it."
events:
  - when: "That night"
    title: "From Makkah"
    text: "He is taken from the Sacred Masjid in Makkah [Q 17:1]."
    pic: kaaba
  - when: "That night"
    title: "Jerusalem"
    text: "He rides al-Buraq to al-Aqsa and prays there [Muslim 162a]."
    pic: icon:Landmark
  - when: "That night"
    title: "The heavens"
    text: "Prophets before him welcome him, among them Adam, 'Isa, Musa and Ibrahim [Bukhari 349]."
    pic: icon:Sparkles
  - when: "That night"
    title: "The farthest boundary"
    text: "At the Lote Tree he sees Jibril and the greatest signs of his Lord [Q 53:13–18]."
    pic: icon:TreeDeciduous
  - when: "That night"
    title: "Five prayers"
    text: "Fifty daily prayers become five, with the reward of fifty [Bukhari 349]."
    pic: prayer-mat
  - when: "Next day"
    title: "Back in Makkah"
    text: "Quraysh mock the story. Abu Bakr believes it [SeekersGuidance, Abu Bakr]."
    pic: icon:MessageCircle
```

### 6 · learn
```yaml
pic: prayer-mat
text: "**Fifty became five.** Allah first gave fifty prayers a day. Musa urged him to ask for less, so he went back again and again, until there were five, rewarded like fifty. Then he said he felt too shy to ask again [Bukhari 349; Muslim 162a]."
```

### 7 · order
```yaml
prompt: "Put the night in order."
items:
  - "He leaves the Sacred Masjid in Makkah"
  - "He prays at al-Aqsa in Jerusalem"
  - "Earlier prophets welcome him in the heavens"
  - "Fifty prayers are given"
  - "He returns until they become five"
feedback: "That's the order in the sahih reports: Makkah, Jerusalem, the heavens, then the prayer, lightened from fifty to five [Muslim 162a; Bukhari 349]."
```

### 8 · learn
```yaml
pic: icon:Gift
text: "**A gift, not a chore.** The five daily prayers, the **salah**, were given to him at the highest point of his life, up in the heavens. You learned how to pray back in Days 2–3. This is where those prayers began."
bubbles:
  - "On a day when five feels like a lot, remember who asked for it to be lightened, and that each one still counts like ten."
```

### 9 · choice
```yaml
pic: icon:MessageCircle
prompt: "The next day, people ran to Abu Bakr: your friend claims he went to Jerusalem and back in one night! Why did he believe it?"
options:
  - text: "He trusted the man telling it: if he said it, it was true"
    correct: true
    feedback: "Right. Abu Bakr said that if he said it, it was true. He's known as al-Siddiq, the one who affirms the truth."
  - text: "He had seen the journey himself"
    correct: false
    feedback: "Not quite. Abu Bakr wasn't there. He believed because he knew the man's honesty."
  - text: "He didn't want an argument"
    correct: false
    feedback: "Not quite. It was trust, not avoiding conflict. Years of honesty had earned it."
```

### 10 · scenario
```yaml
pic: prayer-mat
situation: "Hannah has been Muslim six weeks. She keeps sleeping through Fajr and missing 'Asr at work. Tonight she thinks: five is too many for me. Maybe I'll just pray when I feel like it."
options:
  - text: "Keep all five as her goal, pray the next one she can, and make up what she missed"
    best: true
    feedback: "Yes. All five are due, and missing one isn't the end. The gift was already lightened for her. She picks it up again."
  - text: "Pray only when she feels spiritual, so it's sincere"
    best: false
    feedback: "Not quite. The five were set by Allah and lightened out of mercy. Showing up when it's hard is sincere too."
  - text: "Stop praying until she can do all five perfectly"
    best: false
    feedback: "Not quite. Nobody starts perfect. Pray the next one with what she knows. It gets easier."
```

### 11 · ask_ai
```yaml
chips:
  - "What was al-Buraq?"
  - "Why did Musa tell him to ask for less?"
  - "When did the Night Journey happen?"
  - "I keep missing prayers. Where do I start?"
```

### 12 · do_today
```yaml
pic: prayer-mat
text: "Pray one prayer today as a gift you're receiving."
steps:
  - "Before one prayer, pause and remember where the five came from"
  - "Pray it a little slower than usual"
  - "Afterwards, thank Allah for it in your own words"
log: null
```

### 13 · takeaway
```yaml
pic: icon:Gift
text: "The five prayers were given to him at the highest point of his life. Each time you pray, you're holding that gift."
```

### 14 · closing
Next episode: Makkah keeps saying no, until a few pilgrims from a farming town say yes.

---

## Check
```yaml
- prompt: "How many daily prayers were given at first, before they were lightened?"
  options:
    - text: "Fifty"
      correct: true
      feedback: "Right. They became five, with the reward of fifty [Bukhari 349]."
    - text: "Ten"
      correct: false
      feedback: "Not quite. It began as fifty, and he asked again and again until there were five."
- prompt: "Where does the Qur'an say he was taken by night?"
  options:
    - text: "From the Sacred Masjid to al-Aqsa"
      correct: true
      feedback: "Right. That's Q 17:1: from Makkah to Jerusalem."
    - text: "From Makkah to Madinah"
      correct: false
      feedback: "Not quite. That's the hijra, later. The Night Journey was from Makkah to al-Aqsa in Jerusalem."
```

## AI guide context
**Lesson facts**
- Allah took His servant by night from al-Masjid al-Haram to al-Masjid al-Aqsa [Q 17:1].
- He rode al-Buraq (a white riding animal, smaller than a mule and larger than a donkey, in the hadith's description) to Jerusalem, prayed two rak'ahs there, then was taken up through the heavens [Muslim 162a; Bukhari 349].
- He met earlier prophets in the heavens. Bukhari 349 names Adam, Idris, Musa, 'Isa and Ibrahim; Muslim 162a adds Yahya, Yusuf and Harun [Bukhari 349; Muslim 162a; IslamQA 11575].
- He saw Jibril at the Lote Tree of the farthest boundary and saw great signs of his Lord [Q 53:13–18].
- Fifty daily prayers were prescribed; at Musa's urging he went back several times, until they became five with the reward of fifty. He then said he felt too shy to ask his Lord again [Bukhari 349; Muslim 162a].
- Timing: most hadith scholars place it about a year before the hijra; others say a year and two months, or a year and a half [IslamQA 84314; Dar al-Ifta Egypt (Night Journey); IslamQA 145725]. `[SCHOLAR: Q44]`
- Quraysh mocked the story; Abu Bakr said that if he said it, it is true, and he is known as al-Siddiq [SeekersGuidance (Abu Bakr al-Siddiq)].

**Likely questions**
- *"Was it on 27 Rajab?"* That date is widely commemorated, but no authentic text fixes the month or day [IslamQA 84314; IslamQA 147601]. Say "about a year before the hijra". Whether or how to mark the night is a question for the imam. `[SCHOLAR: Q44]`
- *"Was it a dream, or did he really go?"* Briefly: the mainstream view is that he was taken in body and soul [IslamQA 84314]. Don't debate it; deeper questions go to the imam.
- *"What was al-Buraq?"* Give the hadith's description only (a white riding animal) [Muslim 162a]. No pictures, no speculation.
- *"Why did Musa tell him to ask for less?"* In the hadith, Musa said his people wouldn't manage fifty, from his own experience with the Children of Israel [Bukhari 349]. A lesson in mercy and in elders helping the young.
- *"I keep missing prayers."* All five are due; do them with what you know, make up missed ones, and start again with the next prayer. Point back to Days 8–30 and the mentor. Never shame.

**Escalate:** whether to celebrate the 27th of Rajab, and detailed debates on the nature of the journey.

**Don't**
- Don't give 27 Rajab as fact.
- Don't describe or depict al-Buraq, angels or prophets beyond the hadith's words.
- Don't present five prayers as optional or "fifty is impossible so do what you can" (all five are due).

## Sources
- Qur'an [17:1](https://quran.com/17/1) (the Night Journey), [53:13–18](https://quran.com/53/13-18) (the Lote Tree of the farthest boundary).
- [Muslim 162a](https://sunnah.com/muslim:162a) (Sahih): al-Buraq, praying in Jerusalem, the heavens, the prophets, fifty to five, too shy to ask again.
- [Bukhari 349](https://sunnah.com/bukhari:349) (Sahih): the ascension, the prophets, fifty to five at Musa's urging, five equal to fifty.
- [IslamQA 84314, *Are al-Isra' and al-Mi'raj a myth?*](https://islamqa.info/en/answers/84314): about a year before the hijra; no authentic date; body and soul.
- [IslamQA 145725, *When was prayer made obligatory?*](https://islamqa.info/en/answers/145725): a year and a half before the hijra (logged difference).
- [IslamQA 147601, *Date of the Prophet's birth and death*](https://islamqa.info/en/answers/147601) (AI guide only: no authentic date for the Night Journey).
- [IslamQA 11575, *Who Is Muhammad?*](https://islamqa.info/en/answers/11575): the prophets he met.
- [Dar al-Ifta Egypt, *The Miracle of the Night Journey and Heavenly Ascension*](https://www.dar-alifta.org/en/article/details/1871/the-miracle-of-the-night-journey-and-heavenly-ascension-of-prophet-muhammad): around a year before the hijra.
- [SeekersGuidance, *The Ten Promised Paradise: Abu Bakr al-Siddiq*](https://seekersguidance.org/articles/the-prophets-companions/the-ten-promised-paradise-sayyiduna-abu-bakr-al-siddiq-allah-be-pleased-with-him-shaykh-faraz-rabbani/): "if he said it, it is true".
- Fact rows 18.1–18.8 and X9 in [[Seerah Fact-Check Log]].

## Scholar flags
- **Screen 2 and AI guide (Q44).** The date is given only as "about a year before the hijra"; 27 Rajab isn't stated as fact, and whether to commemorate it goes to the imam.
