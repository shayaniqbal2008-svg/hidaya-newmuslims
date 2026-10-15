---
day: 16
phase: 1
unit: 3
title: "Too much advice"
hook: "Three people, three different answers. Here's how to stay calm and know who to ask."
minutes: 5
skills: [S3, P4]
pain_points: [conflicting-voices]
logs: []
madhab_sensitive: true
scholar_flags: [Q2, Q10]
status: draft-pending-scholar-review
glossary: [madhab, imam, al-Fatiha, Amin, rak'ah, surah, al-Ikhlas, dhikr, Allah, ﷺ, Qur'an]
sources: [Q 16:43, Q 1:1–7, Abu Dawud 336, Bukhari 780, Welcome to Islam D5, SeekersGuidance (choosing a school), SeekersGuidance (convert following a school), IslamQA 21420, First Instructions on Worship ch. 7, Research Notes - Core Essentials and Madhab Map]
format: 2
---
# Day 16 · Too much advice

### 1 · hook
```yaml
pic: icon:MessagesSquare
text: "By now someone has probably corrected how you pray. Then someone else said the opposite. It's confusing, and it can make you feel like you're doing everything wrong. You're not. Today: how to handle it."
```

### 2 · learn
```yaml
pic: icon:Users
text: "**Why answers differ.** Most people who correct you mean well. And on many small details of prayer, scholars have honestly differed for over a thousand years. Different isn't wrong."
bubbles:
  - "There are four main schools of law (each is a **madhab**). They differ on small things, like where to hold your hands, and all four are valid."
```

### 3 · scenario
```yaml
pic: community
situation: "After Dhuhr at the masjid, three kind people come over. Dre says you should raise your hands again before bowing. An older man says no, only at the start. Tyler says don't trust anyone: look up the hadith yourself. What do you do?"
options:
  - text: "Go with whoever sounded most sure"
    best: false
    feedback: "Understandable, but sounding sure isn't the same as knowing. Ask someone trained, then relax."
  - text: "Search hadith online tonight and decide for yourself"
    best: false
    feedback: "Scholars train for years to do that well. Two weeks in, it usually leads to more confusion, not less."
  - text: "Say \"Thank you, I'll check with my imam,\" ask {{mentor.name}} or the imam, and keep your masjid's way meanwhile"
    best: true
    feedback: "Yes. Both hand practices are valid in different schools. One trusted teacher and your masjid's practice keep you steady."
  - text: "Stop going to the masjid so nobody corrects you"
    best: false
    feedback: "That would cost you a lot. Corrections can be handled kindly. Your masjid is still where your people are."
```

### 4 · learn
```yaml
pic: icon:UserCheck
text: "**Pick one trusted source.** The Qur'an tells people who don't know to ask those who do [Q 16:43]. So: one teacher, {{mentor.name}} or your imam, and your masjid's way while you learn. `[SCHOLAR: Q10]`"
bubbles:
  - "Once, people gave an injured man a ruling without knowledge, and it harmed him. The Prophet ﷺ said they should have asked, because asking is the cure for not knowing [Abu Dawud 336]."
```

### 5 · multi
```yaml
pic: icon:Compass
prompt: "Which are good places to take a question about how to pray?"
options:
  - text: "Your imam or {{mentor.name}}"
    correct: true
    feedback: "Right. A real, trained person who knows you and your masjid."
  - text: "This app's AI guide, which can pass hard questions to your imam"
    correct: true
    feedback: "Right. It answers the basics and sends personal or disputed questions to your imam."
  - text: "The angriest video in your feed"
    correct: false
    feedback: "Not quite. Harsh online voices often argue over small things. They're a common source of convert burnout."
  - text: "Whoever corrects you most often at the masjid"
    correct: false
    feedback: "Not quite. Thank them kindly, but check with your teacher. Frequent advice isn't the same as qualified advice."
```

### 6 · fill
```yaml
before: "Your new line when someone corrects you: \"Thank you, I'll check with my"
after: ".\""
options:
  - text: "imam"
    correct: true
    feedback: "Yes. Kind to them, and it keeps you with one trusted teacher."
  - text: "phone"
    correct: false
    feedback: "Not quite. Searching online usually adds more voices. Check with your imam or {{mentor.name}}."
  - text: "friends"
    correct: false
    feedback: "Not quite. Friends mean well, but take prayer questions to your imam or {{mentor.name}}."
```

### 7 · learn
```yaml
pic: quran
text: "**Today, al-Fatiha is whole.** You learned it verse by verse this week. From now on, recite all of **al-Fatiha** in every rak'ah, instead of the remembrance phrases (dhikr) you used while learning. `[SCHOLAR: Q2]`"
bubbles:
  - "If a verse slips during prayer, say what you remember and carry on."
  - "In the first two rak'ahs, a short **surah** (chapter) follows it. Your first one, **al-Ikhlas**, comes on Days 17–18."
```

### 8 · order
```yaml
prompt: "Put al-Fatiha in order, starting with the Bismillah you say before it."
items:
  - "Bismillahir-rahmanir-rahim"
  - "Al-hamdu lillahi rabbil-'alamin"
  - "Ar-rahmanir-rahim"
  - "Maliki yawmid-din"
  - "Iyyaka na'budu wa iyyaka nasta'in"
  - "Ihdinas-siratal-mustaqim"
  - "Siratal-ladhina an'amta 'alayhim, ghayril-maghdubi 'alayhim wa lad-dallin"
feedback: "That's the whole chapter, in the order you'll recite it in every rak'ah."
```

### 9 · learn
```yaml
madhab_variant: true
pic: icon:AudioLines
default: |
  **Amin.** After al-Fatiha, say ***Amin*** ("O Allah, answer our prayer"). The Prophet ﷺ told people praying behind an imam to say Amin with him [Bukhari 780]. {{masjid.name}} will show you whether to say it aloud or quietly.
hanafi: |
  **Amin.** After al-Fatiha, say ***Amin*** ("O Allah, answer our prayer") **quietly**, under your breath. Behind an imam, you don't recite al-Fatiha yourself: you listen, and when he finishes it, you say Amin quietly [Bukhari 780; First Instructions on Worship ch. 7].
```

### 10 · steps
```yaml
title: "Recitation self-check (2 minutes, not during prayer)"
steps:
  - text: "Play the al-Fatiha audio at the end of today's lesson once, and just listen"
    pic: icon:Headphones
  - text: "Say it aloud slowly, one verse at a time, along with the audio"
    pic: icon:Volume2
  - text: "Now say it without the audio. Which verse made you pause? Repeat that one three times"
    pic: icon:Repeat
  - text: "Check the long sounds: the long vowels in al-'alamin, ar-rahman, ar-rahim, maliki and ad-dallin are stretched, not clipped"
    pic: icon:AudioLines
  - text: "Say it once more, start to finish, then Amin"
    pic: quran
  - text: "Optional: record yourself, or ask {{mentor.name}} to listen once this week"
    pic: icon:Mic
done_text: "That's real progress. Small slips are normal; the one who struggles with the Qur'an still gets rewarded."
```

### 11 · ask_ai
```yaml
chips:
  - "Someone told me my prayer is invalid. Is it?"
  - "What is a madhab, simply?"
  - "I heard people say Amin differently. Why?"
  - "I keep mixing up two verses of al-Fatiha"
```

### 12 · do_today
```yaml
pic: prayer-mat
text: "Pray today with the whole of al-Fatiha."
steps:
  - "In every prayer today, recite all of al-Fatiha in each rak'ah"
  - "If someone corrects you this week, try your new line: \"Thank you, I'll check with my imam.\""
log: null
optional_extra: "Write down one question you've been given conflicting answers on, and send it to {{mentor.name}} or through \"Ask my imam.\""
```

### 13 · takeaway
```yaml
pic: icon:UserCheck
text: "Small differences are normal and valid. Thank people kindly, ask one trusted teacher, and follow your masjid's way while you learn."
```

### 14 · closing
You recited the whole Fatiha today: the chapter Muslims everywhere say in every prayer.

---

## Prayer phrase
```yaml
arabic: "بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ ۝ ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ ۝ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ ۝ مَـٰلِكِ يَوْمِ ٱلدِّينِ ۝ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ۝ ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ ۝ صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ ۝ آمِينَ"
translit: "Bismillahir-rahmanir-rahim. Al-hamdu lillahi rabbil-'alamin. Ar-rahmanir-rahim. Maliki yawmid-din. Iyyaka na'budu wa iyyaka nasta'in. Ihdinas-siratal-mustaqim. Siratal-ladhina an'amta 'alayhim, ghayril-maghdubi 'alayhim wa lad-dallin. Amin"
meaning: "In the name of Allah, the Most Gracious, the Most Merciful. All praise is for Allah, Lord of all the worlds, the Most Gracious, the Most Merciful, Master of the Day of Judgment. It is You we worship and You we ask for help. Guide us to the straight path: the path of those You have favored, not of those who earned Your anger, nor of those gone astray. Amin (O Allah, answer our prayer)"
audio_id: fatiha-full-amin
when: "While standing, in every rak'ah, then Amin, the way your masjid says it. [Q 1:1–7; Amin: Bukhari 780]"
```

## Check
```yaml
- prompt: "Two people at the masjid give you opposite advice about your prayer. What's the best next step?"
  options:
    - text: "Thank them, ask your imam or mentor, and follow your masjid's way meanwhile"
      correct: true
      feedback: "Right. One trusted teacher keeps you steady while you learn."
    - text: "Pick a side by searching hadith yourself"
      correct: false
      feedback: "Not quite. Working out rulings takes training. Ask a qualified teacher instead."
- prompt: "From Day 16, what do you recite while standing in each rak'ah?"
  options:
    - text: "The whole of al-Fatiha, then Amin"
      correct: true
      feedback: "Right. And in the first two rak'ahs a short surah follows, starting with al-Ikhlas."
    - text: "Just the first verse and the remembrance phrases"
      correct: false
      feedback: "Not quite. That was the bridge while learning. Now you know the whole of al-Fatiha."
```

## AI guide context
**Lesson facts**
- Differences in prayer details between the four schools are normal and valid; all four accept praying behind an imam of another school [Research Notes - Core Essentials and Madhab Map, common-ground section; AMJA 78081].
- Common ground across scholars: a convert shouldn't derive rulings personally from hadith; learn from a qualified, accessible teacher; follow the masjid's practice while learning; don't let small differences cause conflict [SeekersGuidance (choosing a school); IslamQA 21420; Welcome to Islam D5]. `Q10` is open: whether formally following one madhab is required.
- Ask those who know [Q 16:43]; asking is the cure for not knowing [Abu Dawud 336, hasan per al-Albani].
- Honest mistakes made while learning, including following another school's way by accident, aren't sins [SeekersGuidance (convert following a school)].
- From today the convert recites the whole of al-Fatiha in every rak'ah (Q2's drafted timeline). Hanafi: al-Fatiha is wajib and some recitation is fard; a short surah after it in the first two rak'ahs of obligatory prayers is wajib (al-Ikhlas arrives Days 17–18; a new Muslim is excused for what they haven't learned yet, Qibla 35467). Rak'ahs 3–4: al-Fatiha only [First Instructions on Worship ch. 7].
- Amin: Hanafi says it quietly; a Hanafi follower doesn't recite al-Fatiha behind the imam and says Amin quietly when the imam finishes it [First Instructions on Worship ch. 7; Bukhari 780].

**Likely questions**
- *"Someone said my prayer is invalid because I [hold my hands / raise my hands / sit] differently."* If it matches the masjid's taught practice, it's a valid school's practice. Reassure; suggest checking specifics with the imam. Never declare anyone's prayer invalid.
- *"Which madhab should I follow?"* Give the common ground (follow the masjid's practice while learning from a qualified local teacher); say scholars differ on whether choosing one formally is required; offer "Ask my imam" (Q10).
- *"Why do people at other masjids say Amin out loud?"* Shafi'is and Hanbalis say it aloud in the prayers recited aloud; Hanafis say it quietly; both are valid.
- *"I keep mixing up verses."* Offer a slow verse-by-verse drill outside prayer; remind them the struggling reciter is rewarded [Muslim 798].
- *"Can I just read Fatiha off my phone in prayer?"* No (Q2): practice before and after, never during.

**Escalate:** a specific dispute the convert is stuck in; anyone pressuring them to join a group or reject their masjid; harsh or repeated public correction (route to the mentor, kindly).

**Don't**
- Don't take sides between schools or call any of the four wrong.
- Don't encourage the convert to research rulings from hadith on their own.
- Don't disparage the people who corrected them; most mean well.

## Madhab note
- **Amin:** Shafi'is and Hanbalis say it aloud in the prayers recited aloud (Fajr, Maghrib, Isha), the imam and followers together; Hanafis and Malikis say it quietly (in the Maliki school, the imam of a prayer recited aloud doesn't say it at all).
- **Al-Fatiha behind the imam:** Hanafis don't recite it at all; Malikis recite it only in the silent prayers; Shafi'is recite it in every rak'ah; Hanbalis recommend it in the silent prayers. Day 22 covers praying behind an imam.
- **Raising the hands** (the scenario): Hanafis and Malikis raise them only at the opening takbir; Shafi'is and Hanbalis also raise them before and after bowing. All are valid.

## Sources
- Qur'an [16:43](https://quran.com/16/43), [1:1–7](https://quran.com/1/1-7).
- [Abu Dawud 336](https://sunnah.com/abudawud:336) (hasan, al-Albani; da'if per al-Arna'ut and Zubair Ali Zai): asking is the cure for not knowing.
- [Bukhari 780](https://sunnah.com/bukhari:780): saying Amin with the imam.
- [SeekersGuidance: As a convert, how do I choose a school of thought?](https://seekersguidance.org/answers/general-counsel/as-a-convert-how-do-i-choose-a-school-of-thought/); [SeekersGuidance: How can a convert follow a school correctly](https://seekersguidance.org/answers/general-counsel/how-can-a-convert-follow-a-school-of-thought-correctly/); [IslamQA.info 21420](https://islamqa.info/en/answers/21420).
- [[Source - Welcome to Islam]] Day 5 (conflicting voices: consult a qualified scholar; differences on minor issues are normal).
- [[Source - First Instructions on Worship]] ch. 7 (Amin; the follower doesn't recite).
- [[Research Notes - Core Essentials and Madhab Map]]: madhab map (hands, raising hands, Fatiha behind the imam) and the madhab-choice section.
- Madhab note (verified, T2 final review): [Qibla 35121: why Hanafis say Amin quietly](https://islamqa.org/hanafi/qibla-hanafi/35121/); [Darul Iftaa Birmingham 87353: salah in the Maliki school](https://islamqa.org/hanafi/daruliftaa-birmingham/87353/salah-according-to-the-maliki-school-of-thought-2/); [IslamQA.info 234769: Amin aloud (reports the schools)](https://islamqa.info/en/answers/234769); [[Research Notes - Core Essentials and Madhab Map]] (Fatiha behind the imam; raising the hands).

## Scholar flags
- **Screen 4 (Q10).** "One teacher, and your masjid's way while you learn." Drafted from the common ground of all three views on madhab choice; doesn't say whether formally following one school is obligatory.
- **Screen 7 (Q2).** The whole of al-Fatiha replaces the remembrance phrases from Day 16, per the drafted timeline. A convert who hasn't yet memorized it says what they know, then the phrases; no reading from a screen in prayer.
