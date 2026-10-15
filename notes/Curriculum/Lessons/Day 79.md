---
day: 79
phase: 3
unit: 9
title: "The Muslim year"
hook: "Muslims live by two calendars: the one at work, and the one the moon keeps. Today you learn the second."
minutes: 5
skills: [B5]
pain_points: [belonging]
logs: []
madhab_sensitive: false
scholar_flags: []
status: draft-pending-scholar-review
glossary: [Hijri, Hijrah, Muharram, Ashura, Ramadan, Shawwal, Eid, Eid al-Fitr, Eid al-Adha, Dhul Hijjah, Arafah, Hajj, Makkah, masjid, ﷺ, Allah]
sources: [Q 9:36, Q 2:185, Bukhari 3934, Bukhari 4662, Muslim 1162, Bukhari 2004, Muslim 1134, Abu Dawud 1134, Yaqeen 2025]
format: 2
---
# Day 79 · The Muslim year

### 1 · hook
```yaml
pic: crescent
text: "Your phone shows one calendar. But Muslims everywhere also count the days by the moon, and that second calendar decides when Ramadan starts, when Eid arrives, and which days carry extra reward. Today, a tour of the Muslim year."
```

### 2 · learn
```yaml
pic: crescent
text: "**A calendar of moons.** Allah says *\"the number of months with Allah is twelve [lunar] months\"* [Q 9:36, Saheeh Intl.]. Each month starts with the new crescent moon and lasts 29 or 30 days."
bubbles:
  - "A moon year is about 11 days shorter than a sun year. So Ramadan comes about 11 days earlier each year, and over a lifetime you'll fast in every season."
```

### 3 · widget
```yaml
widget: moon
prompt: "How a Muslim month begins"
text: "Drag through a lunar month. When the new crescent appears, the next month starts."
```

### 4 · fill
```yaml
before: "A moon year is about"
after: "days shorter than a sun year, so Ramadan comes a little earlier each year."
options:
  - text: "11"
    correct: true
    feedback: "Yes. Over a lifetime, you'll fast Ramadan in every season."
  - text: "2"
    correct: false
    feedback: "Not quite. It's about 11 days shorter, so Ramadan moves through every season over the years."
  - text: "30"
    correct: false
    feedback: "Not quite. It's about 11 days shorter. Each month is 29 or 30 days."
```

### 5 · learn
```yaml
pic: icon:Route
text: "**Year one.** The Companions didn't start the count from the day the Prophet ﷺ was first sent, or from his death, but from his arrival in Madinah after leaving Makkah [Bukhari 3934]. That journey is the **Hijrah** (migration), so this is the **Hijri** calendar."
bubbles:
  - "The year starts with the month of **Muharram**. Your prayer app can show you today's Hijri date."
```

### 6 · widget
```yaml
widget: timeline
prompt: "The big days of the Muslim year"
text: "Tap through the year, from the new year onward."
events:
  - when: "1st of Muharram"
    title: "The Islamic new year"
    text: "The first day of the Hijri year."
    pic: icon:CalendarDays
  - when: "10th of Muharram"
    title: "Ashura"
    text: "The day Allah saved Musa (Moses) and his people. The Prophet ﷺ fasted it [Bukhari 2004] and hoped it would wipe out a year's sins [Muslim 1162]. Many add the 9th [Muslim 1134]."
    pic: icon:Footprints
  - when: "Ramadan, the 9th month"
    title: "Ramadan"
    text: "The month the Qur'an was first revealed [Q 2:185]. Fasting from dawn to sunset, extra prayer at night, more Qur'an and charity."
    pic: quran
  - when: "1st of Shawwal"
    title: "Eid al-Fitr"
    text: "The day after Ramadan ends. A morning Eid prayer, new or best clothes, food, visits and gifts. No fasting that day."
    pic: icon:Gift
  - when: "9th of Dhul Hijjah"
    title: "The Day of Arafah"
    text: "The heart of Hajj. For those not on Hajj, the Prophet ﷺ hoped fasting it would wipe out the sins of the past year and the next [Muslim 1162]."
    pic: icon:Mountain
  - when: "10th of Dhul Hijjah"
    title: "Eid al-Adha"
    text: "The festival of sacrifice, during Hajj, remembering Ibrahim. Eid prayer, then an animal is sacrificed and its meat shared with family and people in need."
    pic: icon:HandHeart
```

### 7 · order
```yaml
prompt: "Now from memory: put these in order through the Muslim year, starting from the new year."
items:
  - "1st of Muharram: the Islamic new year"
  - "10th of Muharram: Ashura"
  - "Ramadan, the 9th month: a month of fasting"
  - "1st of Shawwal: Eid al-Fitr"
  - "9th of Dhul Hijjah: the Day of Arafah"
  - "10th of Dhul Hijjah: Eid al-Adha"
pics: ["icon:CalendarDays", "icon:Footprints", "quran", "icon:Gift", "icon:Mountain", "icon:HandHeart"]
feedback: "That's the year's backbone. Ramadan and the two Eids are the big ones; Arafah and Ashura are special fasting days."
```

### 8 · learn
```yaml
pic: community
text: "**Two Eids are yours.** When the Prophet ﷺ came to Madinah, people had two old festival days. He told them Allah had given them two better ones: Eid al-Adha and Eid al-Fitr [Abu Dawud 1134]."
bubbles:
  - "In one survey, about 4 in 10 converts felt lonely during Ramadan or Eid [Yaqeen 2025]. Don't let that be you."
  - "Plan now: where will you pray, and who will you eat with?"
```

### 9 · choice
```yaml
pic: icon:Mountain
prompt: "Ana isn't going on Hajj this year. Which day is especially recommended for her to fast?"
options:
  - text: "The Day of Arafah, the 9th of Dhul Hijjah"
    correct: true
    feedback: "Yes. For those not on Hajj, the Prophet ﷺ hoped it would wipe out two years' sins [Muslim 1162]."
  - text: "Eid al-Adha, the 10th of Dhul Hijjah"
    correct: false
    feedback: "Not quite. Eid is a day of celebration, and fasting on Eid isn't allowed. Arafah is the day before."
  - text: "The 1st of Shawwal"
    correct: false
    feedback: "Not quite. That's Eid al-Fitr, a celebration day with no fasting. Arafah is the special fast."
```

### 10 · ask_ai
```yaml
chips:
  - "When is the next Ramadan?"
  - "How do Muslims know when a month starts?"
  - "What happens at the Eid prayer?"
  - "What are the four sacred months?"
```

### 11 · reflect
```yaml
prompt: "Which day of the Muslim year are you most looking forward to? Who would you like to spend it with?"
share_with_mentor: optional
```

### 12 · do_today
```yaml
pic: icon:Calendar
text: "Put the Muslim year on your phone."
steps:
  - "Turn on the Hijri date in your prayer app"
  - "Put the next Ramadan and both Eids in your phone's calendar (your app or {{masjid.name}} will have the expected dates)"
log: null
optional_extra: "Ask {{mentor.name}} what {{masjid.name}} does for Eid, and where you could spend the day."
```

### 13 · takeaway
```yaml
pic: crescent
text: "The Muslim year follows the moon, counted from the Hijrah. Ramadan, the two Eids, Arafah and Ashura are its high points."
```

### 14 · closing
Every season now has something to look forward to.

---

## Check
```yaml
- prompt: "Why does Ramadan come about 11 days earlier each year?"
  options:
    - text: "The Muslim calendar follows the moon, and a moon year is shorter"
      correct: true
      feedback: "Right. Twelve lunar months make about 354 days."
    - text: "Scholars move it to a different season each year"
      correct: false
      feedback: "Not quite. It moves on its own: the lunar year is about 11 days shorter."
- prompt: "What are the two Eids?"
  options:
    - text: "Eid al-Fitr and Eid al-Adha"
      correct: true
      feedback: "Right. One after Ramadan, one during Hajj season [Abu Dawud 1134]."
    - text: "Ashura and Arafah"
      correct: false
      feedback: "Not quite. Those are special fasting days. The Eids are al-Fitr and al-Adha."
```

## AI guide context
**Lesson facts**
- Twelve lunar months, four of them sacred [Q 9:36]: Dhul Qa'dah, Dhul Hijjah, Muharram (three in a row) and Rajab [Bukhari 4662]. The months: Muharram, Safar, Rabi' al-Awwal, Rabi' al-Thani, Jumada al-Ula, Jumada al-Akhirah, Rajab, Sha'ban, Ramadan, Shawwal, Dhul Qa'dah, Dhul Hijjah.
- The calendar counts from the Prophet's arrival in Madinah (the Hijrah, 622 CE) [Bukhari 3934].
- Ramadan: the month the Qur'an was revealed [Q 2:185].
- Arafah fast (for non-pilgrims): hoped to expiate the previous and coming year; Ashura: the previous year [Muslim 1162]. Ashura commemorates Musa's rescue [Bukhari 2004]; the Prophet ﷺ intended to fast the 9th as well [Muslim 1134]. Hanafi scholars consider fasting the 10th alone mildly disliked and recommend adding the 9th (or 11th); keep it simple: "many add the 9th."
- Two Eids replace earlier festival days [Abu Dawud 1134, sahih per al-Albani]. Fasting on the Eid days isn't allowed (mainstream, all schools).
- About 40% of converts felt lonely during Ramadan or Eid [Yaqeen 2025]; the calendar modules (ramadan-1 … eid-adha) fire on the dates.

**Likely questions**
- *"When is the next Ramadan / Eid?"* Don't compute dates yourself; point to the masjid's announcement and the prayer app, and note that the exact start depends on the moon.
- *"How do they know when a month starts?"* By sighting the new crescent or by calculation; communities differ on method, which is why some masjids start a day apart. Follow your masjid. Don't take sides.
- *"What happens at the Eid prayer?"* A congregational prayer in the morning with extra takbirs, followed by a sermon; then celebrating. Point to the eid modules and the masjid for its timing and method.
- *"Mawlid, Islamic new year celebrations, Shab-e-Barat?"* Scholars differ on special observances beyond what's in this lesson; don't take sides; route to the imam.
- *"Q 9:36 talks about fighting."* The verse's main subject is the calendar and the sacred months; its last part concerns defending against those who fight Muslims. Keep it short and route to the imam (fixed-topic policy, rule 11).

**Escalate:** contested observances; questions about moon-sighting disputes.

**Don't:** give specific future dates; call any community's observance an innovation or wrong.

## Sources
- Qur'an [9:36](https://quran.com/9/36) (twelve months, four sacred), [2:185](https://quran.com/2/185) (Ramadan).
- [Bukhari 3934](https://sunnah.com/bukhari:3934): the calendar dated from the arrival in Madinah.
- [Bukhari 4662](https://sunnah.com/bukhari:4662): the four sacred months (AI guide).
- [Muslim 1162](https://sunnah.com/muslim:1162): the fasts of Arafah and Ashura.
- [Bukhari 2004](https://sunnah.com/bukhari:2004): Ashura and Musa; [Muslim 1134](https://sunnah.com/muslim:1134): intending to fast the 9th.
- [Abu Dawud 1134](https://sunnah.com/abudawud:1134): two Eids in place of the old festival days (sahih, al-Albani).
- Yaqeen Institute, *Becoming Muslim* (2025), via [[Research Notes - Retention and Convert Voices]] R1 (about 40% lonely at Ramadan or Eid).
