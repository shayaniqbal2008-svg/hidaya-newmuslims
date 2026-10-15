---
module: hajj-1
phase: null
unit: null
title: "The best ten days of the year"
hook: "Dhul Hijjah has begun: the ten best days of the year. You don't have to be in Makkah to share in them."
minutes: 5
skills: [B5, T2]
pain_points: [belonging]
logs: []
madhab_sensitive: true
scholar_flags: []
status: draft-pending-scholar-review
glossary: [Dhul Hijjah, Hajj, Makkah, Arafah, Eid, udhiyah, dhikr, Subhan Allah, alhamdulillah, Allahu akbar]
sources: [Bukhari 969, Q 22:27, Q 22:28, Q 3:97, Muslim 1162, Muslim 1977, First Instructions on Worship Part III, Revealed Path ch. 6, IslamQA.org (HadithAnswers 122632)]
format: 2
---
# hajj-1 · The best ten days of the year

### 1 · hook
```yaml
pic: kaaba
text: "**A new month has started: Dhul Hijjah,** the month of Hajj. Right now, millions of pilgrims are heading to Makkah. If you're new, this is your first look at it. If you did Day 47, it's your first time living it. Either way, these ten days are for you too."
```

### 2 · widget
```yaml
widget: moon
prompt: "A new month begins"
text: "Drag through the month. Each Muslim month starts with the new crescent. This one is Dhul Hijjah, the month of Hajj."
```

### 3 · learn
```yaml
pic: icon:Sparkles
text: "**The best days of the year.** The Prophet ﷺ said no good deeds are better than those done in these first ten days of Dhul Hijjah [Bukhari 969]."
bubbles:
  - "The Qur'an tells pilgrims to remember Allah's name on these known days [Q 22:28]. At home, you can do the same."
```

### 4 · widget
```yaml
widget: timeline
prompt: "The ten days, and the Hajj"
text: "Tap through Dhul Hijjah."
events:
  - when: "1st to 9th"
    title: "Days of good deeds"
    text: "Great days for voluntary fasting, remembering Allah and extra good deeds [Bukhari 969]."
    pic: icon:Sparkles
  - when: "8th"
    title: "The Hajj begins"
    text: "Pilgrims in simple white set out. The Hajj runs from the 8th to the 13th."
    pic: icon:Tent
  - when: "9th"
    title: "The Day of Arafah"
    text: "Pilgrims stand together at Arafah, the heart of Hajj. For everyone else, a special fast."
    pic: icon:Mountain
  - when: "10th"
    title: "Eid al-Adha"
    text: "The Festival of Sacrifice. No fasting on Eid."
    pic: crescent
  - when: "11th to 13th"
    title: "The days after Eid"
    text: "Pilgrims spend these days in Mina. Still no fasting."
    pic: icon:Route
```

### 5 · match
```yaml
prompt: "Now from memory: match each date in Dhul Hijjah to what happens."
pairs:
  - left: "1st to 9th"
    right: "Great days for voluntary fasting and extra good deeds"
  - left: "8th to 13th"
    right: "Pilgrims perform the Hajj"
  - left: "9th"
    right: "The Day of Arafah: the heart of Hajj, and a special fast for everyone else"
  - left: "10th"
    right: "Eid al-Adha, the Festival of Sacrifice"
```

### 6 · learn
```yaml
pic: kaaba
text: "**Hajj in 30 seconds.** Hajj is the pilgrimage to Makkah, due once in a lifetime for anyone able [Q 3:97]. Its call goes back to Ibrahim (Abraham) [Q 22:27]."
bubbles:
  - "Pilgrims in simple white stand together at Arafah on the 9th, then mark the Eid and the days after in Mina."
  - "Most new Muslims aren't able to go yet. That's fine. You join from home."
```

### 7 · multi
```yaml
prompt: "Which are good ways to join in from home? Pick all that apply."
options:
  - text: "Fasting some of the first nine days, especially the 9th"
    correct: true
    feedback: "Right. These are recommended fasts, and the Day of Arafah fast is especially loved [Muslim 1162]."
  - text: "Saying Subhan Allah, alhamdulillah, la ilaha illallah and Allahu akbar often"
    correct: true
    feedback: "Right. Remembering Allah (dhikr) is the signature of these days [Q 22:28]."
  - text: "Fasting on the 10th, Eid day, to finish strong"
    correct: false
    feedback: "Not quite. Fasting on Eid is not allowed. Fast before it, then celebrate."
  - text: "Giving a little charity each day"
    correct: true
    feedback: "Right. Any good deed in these days is among the best of the year [Bukhari 969]."
```

### 8 · widget
```yaml
widget: tasbih
prompt: "Try the dhikr of these days"
text: "Remembering Allah is the signature of the ten days [Q 22:28]. Tap to count ten of each."
phrases:
  - translit: "Subhan Allah"
    meaning: "Glory be to Allah"
    count: 10
  - translit: "Alhamdulillah"
    meaning: "All praise is for Allah"
    count: 10
  - translit: "La ilaha illallah"
    meaning: "There is no god but Allah"
    count: 10
  - translit: "Allahu akbar"
    meaning: "Allah is the greatest"
    count: 10
```

### 9 · learn
```yaml
madhab_variant: true
pic: icon:HandHeart
default: "**Planning a sacrifice?** On Eid, many Muslims offer an **udhiyah** (a sacrificed animal, usually arranged through the masjid or a charity). Ask {{masjid.name}} now whether it applies to you and how to order it."
hanafi: "**Planning a sacrifice?** On Eid, many Muslims offer an **udhiyah** (a sacrificed animal, usually arranged through the masjid or a charity). It's required for some people. Ask {{masjid.name}} now whether it applies to you."
bubbles:
  - "If you will sacrifice, the sunnah is not to cut your hair or nails from the 1st until it's done [Muslim 1977]."
hanafi_bubbles:
  - "If you will sacrifice, it's recommended (not required) not to cut your hair or nails from the 1st until it's done [Muslim 1977]."
```

### 10 · fill
```yaml
pic: icon:Scissors
before: "If you'll offer a sacrifice, leave your hair and nails uncut from the 1st of Dhul Hijjah until"
after: "."
options:
  - text: "the sacrifice is done"
    correct: true
    feedback: "Yes. It's a sunnah for whoever is planning a sacrifice [Muslim 1977]."
  - text: "the end of the month"
    correct: false
    feedback: "Not quite. It lasts only until your sacrifice is done [Muslim 1977]."
  - text: "you've fasted the 9th"
    correct: false
    feedback: "Not quite. It's tied to the sacrifice, not the fast. It lasts until the sacrifice is done."
```

### 11 · ask_ai
```yaml
chips:
  - "Which days should I fast this week?"
  - "What's the udhiyah, and do I have to do it?"
  - "What are the pilgrims doing today?"
  - "Can I do Hajj one day? How do people save for it?"
```

### 12 · reflect
```yaml
prompt: "If you could do one extra good deed every day for these ten days, what would it be? Make it small enough that you'll really do it."
share_with_mentor: optional
```

### 13 · do_today
```yaml
pic: icon:CalendarDays
text: "Pick your plan for the ten days."
steps:
  - "Choose one small good deed to do every day"
  - "Choose which days you'll fast (try the 9th, the Day of Arafah)"
  - "Put them in your calendar"
log: null
optional_extra: "Say Subhan Allah, alhamdulillah, la ilaha illallah and Allahu akbar ten times each today."
```

### 14 · takeaway
```yaml
pic: icon:Sparkles
text: "The first ten days of Dhul Hijjah are the best days of the year. Remember Allah often, fast if you can (especially the 9th), give, and don't fast on Eid."
```

### 15 · closing
The pilgrims answer the call in Makkah. You can answer it right where you are.

---

## Check
```yaml
- prompt: "Which days of the year are the best for good deeds?"
  options:
    - text: "The first ten days of Dhul Hijjah"
      correct: true
      feedback: "Right. No deeds are better than those done in these ten days [Bukhari 969]."
    - text: "The days right after Eid al-Fitr"
      correct: false
      feedback: "Not quite. It's the first ten days of Dhul Hijjah [Bukhari 969]."
- prompt: "Can you fast on the 10th of Dhul Hijjah?"
  options:
    - text: "No. It's Eid al-Adha, and fasting on Eid isn't allowed"
      correct: true
      feedback: "Right. Fast on the days before it, especially the 9th, then celebrate."
    - text: "Yes, it's the best fast of the year"
      correct: false
      feedback: "Not quite. The 10th is Eid. The special fast is the 9th, the Day of Arafah."
```

## AI guide context
**Lesson facts**
- No deeds are better than those done in the first ten days of Dhul Hijjah [Bukhari 969]. Remembering Allah's name on the known days [Q 22:28].
- Recommended fasts: the eight days before Arafah and the Day of Arafah for non-pilgrims; prohibited: Eid al-Adha and the three days after it [First Instructions Part III]. The Arafah fast expiates the past and coming year [Muslim 1162] (taught on hajj-2).
- Hajj: once in a lifetime for those able [Q 3:97]; its call goes back to Ibrahim [Q 22:27]. Rites 8th–13th [Revealed Path ch. 6; Day 47].
- Someone intending to sacrifice shouldn't cut hair or nails from the start of Dhul Hijjah until the sacrifice [Muslim 1977 (Umm Salama's narrations)]. Hanafi: recommended, not binding; don't let it go past 40 days without trimming [IslamQA.org (HadithAnswers 122632)]. Hanbali: required.
- Udhiyah: Hanafi, necessary (wajib) on sane, adult, resident Muslims who own the nisab beyond needs; details on eid-adha.

**Likely questions**
- *"Which days to fast?"* Any of the 1st–9th; the 9th is the most important. Not the 10th–13th. Someone with missed Ramadan days should know the Hanafi manual says to make those up before voluntary fasts [First Instructions Part III]; mention gently.
- *"Do I have to do udhiyah?"* Give the Hanafi rule in general terms and send their own case to the imam. Never tell someone they owe it from their numbers.
- *"What are pilgrims doing?"* Arriving in Makkah, Umrah or tawaf; on the 8th to Mina; 9th Arafah; 10th stoning, sacrifice, shaving, tawaf.
- *"Can I go one day?"* Yes. Savings goal, a reputable group, no debt. See Day 47.

**Escalate:** whether a specific person owes the udhiyah; Hajj planning tied to finances or debt; women's travel requirements.

**Don't**
- Don't quote prices or name operators.
- Don't make anyone feel lesser for not being able to go.

## Madhab note
- **Hair and nails before the sacrifice:** the Hanafi, Maliki and Shafi'i schools treat it as recommended; the Hanbali school as required. Ask your imam if unsure.
- **Udhiyah:** the Hanafi school holds it necessary (wajib) for those who meet its conditions; the other three schools hold it a confirmed sunnah.

## Sources
- [Bukhari 969](https://sunnah.com/bukhari:969): no deeds better than those in the first ten days of Dhul Hijjah.
- Qur'an [3:97](https://quran.com/3/97), [22:27](https://quran.com/22/27), [22:28](https://quran.com/22/28).
- [Muslim 1162](https://sunnah.com/muslim:1162): fasting the Day of Arafah.
- [Muslim 1977](https://sunnah.com/muslim:1977): Umm Salama's narrations on not cutting hair or nails before the sacrifice.
- [[Source - First Instructions on Worship]] Part III (recommended and prohibited fasts). [[Source - The Revealed Path]] ch. 6 (Hajj).
- [HadithAnswers via IslamQA.org 122632: Is it mustahab not to remove hair and nails in the first ten days of Dhul Hijjah?](https://islamqa.org/hanafi/hadithanswers/122632/is-it-mustahab-not-to-remove-hair-and-nails-during-the-first-ten-days-of-dhul-hijjah/)
