---
module: hajj-2
phase: null
unit: null
title: "The Day of Arafah"
hook: "Today, millions stand on one plain asking Allah for everything. You can ask with them."
minutes: 5
skills: [B5, T2]
pain_points: [belonging]
logs: []
madhab_sensitive: true
scholar_flags: []
status: draft-pending-scholar-review
glossary: [Arafah, Hajj, Dhul Hijjah, du'a, Takbir al-Tashriq, Allahu akbar, Eid, Asr, Fajr]
sources: [Tirmidhi 889, Q 5:3, Bukhari 45, Muslim 1162, Muslim 1348, Tirmidhi 3585, First Instructions on Worship Part III, SeekersGuidance (fiqh of the two Eids), Revealed Path ch. 6]
format: 2
---
# hajj-2 · The Day of Arafah

### 1 · hook
```yaml
pic: dua
text: "**Today is the 9th of Dhul Hijjah: the Day of Arafah.** On a wide plain outside Makkah, millions of pilgrims are standing in white, asking Allah for everything they need. Wherever you are, and however new you are, you can ask with them."
```

### 2 · learn
```yaml
pic: icon:Mountain
text: "**The heart of Hajj.** Standing at Arafah is the most important part of the pilgrimage. The Prophet ﷺ said that Hajj *is* Arafah [Tirmidhi 889]."
bubbles:
  - "On this day, during the Prophet's own Hajj, Allah revealed: *\"This day I have perfected for you your religion\"* [Q 5:3, Saheeh Intl.; Bukhari 45]."
  - "The religion you joined was completed on this day."
```

### 3 · fill
```yaml
pic: icon:Mountain
before: "The Prophet ﷺ said that Hajj is"
after: "."
options:
  - text: "Arafah"
    correct: true
    feedback: "Yes. Standing at Arafah is the heart of the pilgrimage [Tirmidhi 889]."
  - text: "the Ka'bah"
    correct: false
    feedback: "Not quite. The Ka'bah is central to Hajj, but he said Hajj is Arafah [Tirmidhi 889]."
  - text: "Eid"
    correct: false
    feedback: "Not quite. Eid comes tomorrow. He said Hajj is Arafah, today [Tirmidhi 889]."
```

### 4 · learn
```yaml
pic: icon:Sun
text: "**For everyone else: a fast and a mercy.** If you're not on Hajj, fasting today is highly recommended. The Prophet ﷺ said the Arafah fast wipes out the sins of the year before and the year after [Muslim 1162]."
bubbles:
  - "And Allah frees more people from the Fire on this day than on any other [Muslim 1348]. It's a day of open doors."
  - "{women}On your period? You don't fast, but du'a and dhikr are fully open to you all day.{/women}"
```

### 5 · choice
```yaml
pic: icon:Sun
prompt: "Ana is a new Muslim. Is she required to fast today?"
options:
  - text: "No. It's a voluntary fast, but a hugely rewarded one"
    correct: true
    feedback: "Right. It's not required for non-pilgrims, and it's one of the most loved voluntary fasts of the year [Muslim 1162]."
  - text: "Yes, like a day of Ramadan"
    correct: false
    feedback: "Not quite. It's voluntary. If she can, it's well worth it, but missing it isn't a sin."
  - text: "No, voluntary fasts are only for people who've been Muslim for years"
    correct: false
    feedback: "Not quite. Anyone can do a voluntary fast, from their first week."
```

### 6 · widget
```yaml
widget: fast-day
prompt: "Fasting today?"
text: "Drag through the day, from the meal before dawn to sunset. At sunset, break your fast with a date."
```

### 7 · learn
```yaml
pic: dua
text: "**The best du'a.** The Prophet ﷺ said the best du'a (prayer of asking) is the du'a of the Day of Arafah. And the best words he and the prophets before him said are on the next screen [Tirmidhi 3585]."
bubbles:
  - "This afternoon, between Asr and sunset, set aside some time. Ask Allah for anything, in your own words, in any language."
```

### 8 · phrase
```yaml
arabic: "لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ"
translit: "La ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamdu, wa huwa 'ala kulli shay'in qadir"
meaning: "There is no god but Allah alone, with no partner. His is the dominion and His is the praise, and He has power over all things."
audio_id: arafah-dhikr
when: "Today above all, and any time. Say it again and again this afternoon. [Tirmidhi 3585]"
```

### 9 · scenario
```yaml
pic: icon:Utensils
situation: "Marcus forgot today was Arafah and ate breakfast. He feels he's missed the whole day."
options:
  - text: "Spend the afternoon in du'a and dhikr anyway; the day isn't over"
    best: true
    feedback: "Yes. The fast is one door. Du'a, the dhikr above and good deeds are all still open today."
  - text: "Write the day off; without the fast, nothing counts"
    best: false
    feedback: "Not quite. The best du'a is the du'a of this day [Tirmidhi 3585]. That's open to him right now."
  - text: "Fast tomorrow instead"
    best: false
    feedback: "Not quite. Tomorrow is Eid, and fasting on Eid isn't allowed. Next year, plan it ahead."
```

### 10 · learn
```yaml
madhab_variant: true
pic: icon:Repeat
default: "**The takbir of these days.** From today until the 13th, many Muslims say a short takbir after each prayer, starting with *Allahu akbar, Allahu akbar*. {{masjid.name}} will show you its practice: when it starts, who says it, and the words."
hanafi: "**Takbir al-Tashriq** starts today. Say it once after every obligatory prayer, from Fajr today until Asr on the 13th. {men}Say it aloud.{/men}{women}Say it quietly.{/women} Missed it this morning? Start with your next prayer."
```

### 11 · widget
```yaml
widget: tasbih
school: hanafi
prompt: "Takbir al-Tashriq"
text: "Say it once now to learn it. Then once after each obligatory prayer, until Asr on the 13th."
phrases:
  - translit: "Allahu akbar, Allahu akbar, la ilaha illallah, wallahu akbar, Allahu akbar, wa lillahil-hamd"
    meaning: "Allah is the Greatest, the Greatest. There is no god except Allah. Allah is the Greatest, the Greatest, and all praise is His."
    count: 1
```

### 12 · ask_ai
```yaml
chips:
  - "What should I ask for on the Day of Arafah?"
  - "Can I make du'a in English?"
  - "What are the pilgrims doing right now?"
  - "What happens tomorrow on Eid al-Adha?"
```

### 13 · reflect
```yaml
prompt: "Write the du'a you most want answered this year. Then add one for someone you love."
share_with_mentor: optional
```

### 14 · do_today
```yaml
pic: dua
text: "Take 15 minutes for du'a this afternoon."
steps:
  - "Between Asr and sunset, find a quiet spot"
  - "Say the Arafah dhikr"
  - "Ask Allah for what you wrote"
log: null
optional_extra: "Fasting today? Break it at sunset with a date and the iftar du'a, and check the time of tomorrow's Eid prayer."
```

### 15 · takeaway
```yaml
pic: icon:Mountain
text: "Arafah is the heart of Hajj. For everyone else, it's a day to fast if you can and to pour out your du'a. Tomorrow is Eid."
```

### 16 · closing
Millions are asking today. Allah hears every one of them, and you.

---

## Check
```yaml
- prompt: "What's special about fasting the Day of Arafah?"
  options:
    - text: "It wipes out the sins of the year before and the year after"
      correct: true
      feedback: "Right. That's the reward the Prophet ﷺ described [Muslim 1162]."
    - text: "It's required for every Muslim"
      correct: false
      feedback: "Not quite. It's voluntary for non-pilgrims, but hugely rewarded [Muslim 1162]."
- prompt: "Which is the best du'a, according to the Prophet ﷺ?"
  options:
    - text: "The du'a of the Day of Arafah"
      correct: true
      feedback: "Right [Tirmidhi 3585]. Spend some of the afternoon in it."
    - text: "Only du'a made in Arabic"
      correct: false
      feedback: "Not quite. The best du'a is the du'a of Arafah [Tirmidhi 3585], and you can ask in any language."
```

## AI guide context
**Lesson facts**
- "Hajj is Arafah" [Tirmidhi 889, sahih per al-Albani]. Q 5:3 ("This day I have perfected…") was revealed on a Friday at Arafah [Bukhari 45].
- Fasting the Day of Arafah expiates the previous and coming year [Muslim 1162]; recommended for non-pilgrims [First Instructions Part III].
- No day on which Allah frees more servants from the Fire than Arafah [Muslim 1348].
- The best du'a is the du'a of Arafah; the best words: *La ilaha illallahu wahdahu la sharika lah…* [Tirmidhi 3585; hasan per al-Albani; Tirmidhi himself calls it hasan gharib and notes a weak narrator; some grade it da'if]. If asked about its strength, say so plainly: scholars accept it for a virtue, not for a ruling.
- Hanafi: Takbir al-Tashriq is necessary after each obligatory prayer from Fajr on the 9th to Asr on the 13th (23 prayers), once, aloud for men, quietly for women [SeekersGuidance (fiqh of the two Eids)].
- Fasting on Eid al-Adha and the three days after is prohibited [First Instructions Part III].

**Likely questions**
- *"What to ask for?"* Forgiveness, guidance, steadiness in Islam, a good community, family's guidance and well-being, needs at work or school, anything. Any language. Raise the hands if they like.
- *"Du'a in English?"* Yes. Du'a outside the prayer can be in any language.
- *"I'm on my period."* No fast or prayer, but du'a and dhikr all day; the day is fully open to her.
- *"Is the Arafah fast based on Saudi's date or ours?"* Communities differ; follow the masjid's calendar. Don't argue it.
- *"Tomorrow?"* Eid al-Adha: the Eid prayer in the morning (takbir aloud on the way, eat after the prayer, Hanafi), the udhiyah, family and friends. See eid-adha.

**Escalate:** moon-sighting disputes; detailed takbir rulings for someone praying a make-up.

**Don't**
- Don't make the fast sound required, or missing it sound like a loss of Islam.
- Don't use the Fire to scare; present Muslim 1348 as mercy.

## Madhab note
- **Takbir al-Tashriq:** the Hanafi school holds it necessary after each obligatory prayer from Fajr on the 9th to Asr on the 13th. The other schools hold it a sunnah, with differences on its start for non-pilgrims and its exact wording.

## Sources
- [Tirmidhi 889](https://sunnah.com/tirmidhi:889) (sahih, al-Albani): Hajj is Arafah.
- Qur'an [5:3](https://quran.com/5/3); [Bukhari 45](https://sunnah.com/bukhari:45): the verse was revealed at Arafah.
- [Muslim 1162](https://sunnah.com/muslim:1162): fasting the Day of Arafah.
- [Muslim 1348](https://sunnah.com/muslim:1348): no day when Allah frees more people from the Fire than Arafah.
- [Tirmidhi 3585](https://sunnah.com/tirmidhi:3585) (graded hasan by al-Albani and Shakir; Tirmidhi calls it *hasan gharib* and notes a narrator who isn't strong; Zubair Ali Zai: da'if): the best du'a is that of Arafah (Arabic copied from the hadith text). Used for a virtue only.
- [[Source - First Instructions on Worship]] Part III (recommended and prohibited fasts). [[Source - The Revealed Path]] ch. 6 (Arafah).
- [SeekersGuidance: The fiqh of Eid al-Fitr and Eid al-Adha](https://seekersguidance.org/answers/general-counsel/fiqh-eid-al-fitr-eid-al-adha/) (Takbir al-Tashriq).
- Takbir al-Tashriq (verified, T2 final review, against the SeekersGuidance fiqh of the two Eids page): Fajr on the 9th to Asr on the 13th, 23 prayers, at least once, aloud for men and softly for women; wording as on screen.
