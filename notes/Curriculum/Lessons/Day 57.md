---
day: 57
phase: 2
unit: 7
title: "Extra prayers"
hook: "You've got the five. Now meet the extras the Prophet ﷺ kept around them, and learn witr in full."
minutes: 5
skills: [P3, P8]
pain_points: [skill]
logs: []
madhab_sensitive: true
scholar_flags: [Q18, Q28]
status: draft-pending-scholar-review
glossary: [sunnah, witr, qunut, rak'ah, Fajr, Dhuhr, Asr, Maghrib, Isha, tashahhud, Allahu akbar, sujud al-sahw, al-Fatiha, surah, ﷺ]
sources: [Muslim 728, Tirmidhi 415, Muslim 725, Q 2:201, First Instructions on Worship (sunna table; witr; the qunut), Qibla 36692, SeekersGuidance (witr, Hanafi), Qibla 36911, SeekersGuidance (qunut if you don't know it), Abu Dawud 1425]
format: 2
---
# Day 57 · Extra prayers

### 1 · hook
```yaml
pic: masjid
text: "Since Day 3 you've prayed the five. At the masjid you've probably seen people pray a few more rak'ahs on their own before or after. Today: what those are, and witr, the night prayer you started on Day 8, in full."
```

### 2 · learn
```yaml
madhab_variant: true
pic: prayer-mat
default: "**The sunnah prayers.** Besides the five, the Prophet ﷺ regularly prayed extra rak'ahs, called **sunnah** prayers. He promised a house in Paradise to whoever prays twelve a day [Muslim 728]."
hanafi: "**The sunnah prayers.** Besides the five, the Prophet ﷺ regularly prayed extra rak'ahs, called **sunnah** prayers. He promised a house in Paradise to whoever prays twelve a day [Muslim 728]. In our school these twelve are the **emphasized sunnahs**."
bubbles:
  - "The twelve: 2 before Fajr, 4 before Dhuhr, 2 after Dhuhr, 2 after Maghrib and 2 after Isha [Tirmidhi 415]. {{masjid.name}} will show you its practice."
hanafi_bubbles:
  - "The twelve: 2 before Fajr, 4 before Dhuhr, 2 after Dhuhr, 2 after Maghrib and 2 after Isha [Tirmidhi 415; Qibla 36692]."
  - "Four before Asr is a lighter extra."
```

### 3 · match
```yaml
prompt: "Match each prayer to its sunnah rak'ahs from the twelve [Tirmidhi 415]."
pairs:
  - left: "Fajr"
    right: "2 before"
  - left: "Dhuhr"
    right: "4 before, 2 after"
  - left: "Maghrib"
    right: "2 after"
  - left: "Isha"
    right: "2 after"
```

### 4 · choice
```yaml
pic: icon:Sunrise
prompt: "The Prophet ﷺ said two sunnah rak'ahs are better than this world and everything in it. Which ones?"
options:
  - text: "The 2 before Fajr"
    correct: true
    feedback: "Yes [Muslim 725]. If you add only one sunnah, start with these."
  - text: "The 2 after Maghrib"
    correct: false
    feedback: "Not quite. Those are emphasized too, but this praise is for the 2 before Fajr [Muslim 725]."
  - text: "The 4 before Asr"
    correct: false
    feedback: "Not quite. It's the 2 before Fajr [Muslim 725]. The 4 before Asr is a lighter extra."
```

### 5 · learn
```yaml
pic: icon:Sprout
text: "**Add them slowly.** They aren't required like the five, but the Prophet ﷺ kept them. Add one, keep it, then add another. `[SCHOLAR: Q28]`"
bubbles:
  - "\"Before\" sunnahs start once the prayer's time has begun. And home is a lovely place for them [First Instructions]."
```

### 6 · prayer
```yaml
title: "Praying a sunnah"
intro: "Pray them like any prayer, quietly. Here's a 4-rak'ah sunnah."
moves:
  - pose: stand
    text: "Once the prayer's time has begun, stand facing the qibla and intend the sunnah in your heart."
  - pose: qiyam
    text: "Recite al-Fatiha and a surah quietly. In a sunnah you do this in every rak'ah."
  - pose: tashahhud
    text: "After two rak'ahs, sit for the tashahhud, then stand."
  - pose: qiyam
    text: "Rak'ahs 3 and 4: al-Fatiha and a surah again."
  - pose: tashahhud
    text: "Sit for the last tashahhud."
  - pose: salam-right
    text: "End with the salam, as in every prayer."
done_text: "A 2-rak'ah sunnah ends at the first sitting, like Fajr."
```

### 7 · learn
```yaml
madhab_variant: true
pic: icon:Moon
default: "**Witr in full.** Witr is the last prayer of the night, after Isha and before dawn. {{masjid.name}} will show you exactly how it prays witr: how many rak'ahs (often 1 or 3) and the du'a in it. `[SCHOLAR: Q18]`"
hanafi: "**Witr in full.** It's required in our school: 3 rak'ahs after Isha, before dawn, with one salam. Recite al-Fatiha and a surah in **all three**, and sit after two for the tashahhud only. `[SCHOLAR: Q18]`"
hanafi_bubbles:
  - "The third rak'ah has one new piece: a takbir and the **qunut** (a special du'a) before you bow. Watch it next."
```

### 8 · prayer
```yaml
title: "Witr, after Isha"
moves:
  - pose: stand
    text: "After Isha, stand facing the qibla and intend witr in your heart."
  - pose: qiyam
    text: "Pray it the way {{masjid.name}} shows you, saying what you know in each standing."
  - pose: salam-right
    text: "End with the salam, as in every prayer."
variants:
  hanafi:
    title: "Witr: the third rak'ah"
    intro: "Rak'ahs 1 and 2 are like any prayer, with al-Fatiha and a surah. Sit for the tashahhud, then stand."
    moves:
      - pose: qiyam
        text: "Third rak'ah: recite al-Fatiha, then a short surah."
      - pose: takbir
        text: "Say *Allahu akbar*, raising your hands {men}to your ears{/men}{women}to your shoulders{/women}."
        say: "Allahu akbar"
      - pose: qiyam
        text: "Fold your hands again and say the **qunut** quietly."
      - pose: ruku
        text: "Say *Allahu akbar* and bow."
        say: "Allahu akbar"
      - pose: sujud
        text: "Prostrate twice, as usual."
      - pose: tashahhud
        text: "Sit for the last tashahhud."
      - pose: salam-right
        text: "End with the salam. Witr is done."
```

### 9 · order
```yaml
prompt: "Put your night in order."
items:
  - "Pray Isha"
  - "Pray the 2 sunnah rak'ahs after Isha"
  - "Pray witr, the last prayer of the night"
  - "Dawn comes: witr's time has ended"
pics: ["prayer-mat", "icon:Plus", "icon:Moon", "icon:Sunrise"]
feedback: "That's it. Witr comes after Isha and before dawn, so it closes your night."
variants:
  hanafi:
    prompt: "Put the third rak'ah of witr in order."
    items:
      - "Al-Fatiha, then a short surah"
      - "Say Allahu akbar, raising your hands"
      - "Fold your hands and say the qunut quietly"
      - "Say Allahu akbar and bow"
      - "Prostrate twice, sit for the last tashahhud, and end with the salam"
    pics: ["pose:qiyam", "pose:takbir", "pose:qiyam", "pose:ruku", "pose:salam-right"]
    feedback: "That's it. The only new piece is the takbir and the qunut before you bow."
```

### 10 · phrase
```yaml
school: hanafi
arabic: "TODO-VERIFY"
translit: "Allahumma inna nasta'inuka wa nastaghfiruka, wa nu'minu bika wa natawakkalu 'alayka, wa nuthni 'alaykal-khayra kullahu, wa nashkuruka wa la nakfuruka, wa nakhla'u wa natruku man yafjuruk. Allahumma iyyaka na'budu, wa laka nusalli wa nasjudu, wa ilayka nas'a wa nahfidu, wa narju rahmataka wa nakhsha 'adhabaka, inna 'adhabaka bil-kuffari mulhiq."
meaning: "O Allah, we ask You for help and Your forgiveness. We believe in You and rely on You. We praise You with all good, we thank You and are not ungrateful, and we turn away from whoever defies You. O Allah, You alone we worship; to You we pray and bow down; to You we hurry and serve. We hope for Your mercy and fear Your punishment. Your punishment will reach those who reject You."
audio_id: qunut-witr-hanafi
when: "In the third rak'ah of witr, after the takbir, before bowing. Learn it in two halves: the first \"Allahumma\" this week, the second next week."
```

### 11 · learn
```yaml
pic: dua
text: "**Still learning the qunut? That's fine.** Any du'a fulfills it, though the full one is better [SeekersGuidance, qunut]. Until you know it, say *Rabbana atina…* (from Day 30) [Q 2:201], or *Allahumma-ghfir li* three times, as on Day 8."
bubbles:
  - "Forgot the qunut and already bowed? Keep going, and do **sujud al-sahw** (the forgetfulness prostration, Day 26) at the end."
```

### 12 · ask_ai
```yaml
chips:
  - "Quiz me on the qunut, half at a time"
  - "Which sunnah should I add first?"
  - "What if I fall asleep before witr?"
  - "Do I pray sunnahs when I'm at the masjid?"
```

### 13 · do_today
```yaml
pic: icon:CalendarCheck
text: "One sunnah this week, and witr tonight."
steps:
  - "Pick one sunnah to add this week, ideally the 2 before Fajr"
  - "Tonight, pray witr the way {{masjid.name}} shows you"
log: null
optional_extra: "Listen to the qunut three times before bed. Say along with it, then close the app before you pray."
variants:
  hanafi:
    steps:
      - "Pick one sunnah to add this week, ideally the 2 before Fajr"
      - "Tonight, pray witr with the takbir and a du'a in the third rak'ah"
      - "Use the first half of the qunut if you can"
```

### 14 · takeaway
```yaml
pic: icon:Moon
text: "Twelve sunnah rak'ahs a day are a gift, so add them one at a time. Witr closes the night: pray it the way {{masjid.name}} shows you."
variants:
  hanafi:
    text: "Twelve sunnah rak'ahs a day are a gift, so add them one at a time. Witr: 3 rak'ahs, and in the third, the takbir and the qunut before bowing."
```

### 15 · closing
Extras grow out of a steady five, not the other way round. One more rak'ah, kept, beats ten that burn out.

---

## Check
```yaml
- prompt: "In Hanafi witr, when do you say the qunut?"
  options:
    - text: "In the third rak'ah, after the surah, before bowing"
      correct: true
      feedback: "Right. Takbir with raised hands, fold them, qunut, then bow."
    - text: "After the salam"
      correct: false
      feedback: "Not quite. It's inside the prayer: third rak'ah, after the surah, before bowing."
- prompt: "You don't know the qunut yet. What do you do?"
  options:
    - text: "Say another du'a, like Rabbana atina… or Allahumma-ghfir li ×3, and keep learning"
      correct: true
      feedback: "Right. Any du'a fulfills it while you learn the full one."
    - text: "Skip witr until you've memorized it"
      correct: false
      feedback: "Not quite. Pray witr now with a short du'a in place of the qunut."
- prompt: "Which sunnah is better than the world and all it contains?"
  options:
    - text: "The 2 rak'ahs before Fajr"
      correct: true
      feedback: "Right [Muslim 725]. A great first sunnah to add."
    - text: "The 4 rak'ahs before Asr"
      correct: false
      feedback: "Not quite. It's the 2 before Fajr [Muslim 725]."
```

## AI guide context
**Lesson facts**
- Twelve daily sunnah rak'ahs earn a house in Paradise [Muslim 728]: 2 before Fajr, 4 before Dhuhr, 2 after Dhuhr, 2 after Maghrib, 2 after Isha [Tirmidhi 415, sahih per al-Albani]. Hanafi: these are sunnah mu'akkadah; 4 (or 2) before Asr, 2 or 4 before Isha, 4 after Isha and extra after Dhuhr and Maghrib are recommended but not emphasized [Qibla 36692 (Shaykh Faraz Rabbani); First Instructions on Worship sunna table]. Other schools generally count 2 before Dhuhr.
- The 2 before Fajr are better than the world and all it contains [Muslim 725].
- "Before" sunnahs can't be prayed until the prayer's time has begun; praying sunnahs at home is recommended [First Instructions].
- Hanafi witr: wajib; 3 rak'ahs with one salam; al-Fatiha and a surah in every rak'ah; middle sitting with tashahhud only; in the third, after the surah, takbir with raised hands, then the qunut, then ruku'. One rak'ah alone isn't valid. Time: after Isha until true dawn [First Instructions; SeekersGuidance, hadiths on witr; Qibla 36911]. `Q18`
- The qunut is wajib in Hanafi witr; any du'a fulfills it; the sunnah wording (*Allahumma inna nasta'inuka…*) is far better. Someone who doesn't know it may say *Allahumma-ghfir li* or *Ya Rabb* three times, or *Rabbana atina…* [SeekersGuidance, qunut if you don't know it; Q 2:201]. Forgetting the qunut and going into ruku': continue and do sujud al-sahw.
- Other schools commonly use *Allahumma-hdini fiman hadayt…*, which the Prophet ﷺ taught al-Hasan for witr [Abu Dawud 1425, sahih per al-Albani].

**Likely questions**
- *"Are sunnahs required?"* Not like the five. In the Hanafi school the twelve are strongly emphasized and scholars urge making them a habit; encourage adding one at a time. Don't say they're "optional, skip them," and don't present missing them as like missing a fard prayer. `[SCHOLAR: Q28]`
- *"I fell asleep before witr."* Hanafi: it's made up (qada) like other missed required prayers. Advise praying it before sleeping if they often miss it.
- *"Do I pray witr behind the imam in Ramadan?"* Yes, in Ramadan it's prayed in congregation after tarawih; the imam leads, they follow.
- *"Do I pray sunnahs at the masjid?"* Yes, if there's time, individually; or at home. For Fajr sunnah when the congregation has started: route to the imam (details differ).
- *"Can I read the qunut from my phone during witr?"* No card or phone in prayer (Spec §7). Use the short du'a until memorized.

**Escalate:** making up years of missed witr or sunnahs; Jumu'ah sunnahs and tarawih details (masjid practice); anyone overloading on extras and burning out (Day 8, Day 45 tone).

**Don't**
- Don't make extras feel like a new burden or a test of sincerity.
- Don't teach one-rak'ah witr as the masjid default.
- Don't recite or display the qunut's Arabic from memory; use the approved audio and text.

## Madhab note
Witr is required (wajib) in the Hanafi school and a strongly emphasized sunnah in the Maliki, Shafi'i and Hanbali schools, which usually pray it as 2 + 1 (with a salam between) or as a single rak'ah. Many who say a qunut in witr use *Allahumma-hdini fiman hadayt* [Abu Dawud 1425]; when and whether it's said differs by school. Other schools count 2 sunnah rak'ahs before Dhuhr where the Hanafis count 4. All are valid; follow your masjid.

## Sources
- [Muslim 728](https://sunnah.com/muslim:728): twelve daily sunnah rak'ahs, a house in Paradise.
- [Tirmidhi 415](https://sunnah.com/tirmidhi:415): the twelve listed (sahih, al-Albani).
- [Muslim 725](https://sunnah.com/muslim:725): the two rak'ahs of Fajr are better than the world and what it contains.
- [Abu Dawud 1425](https://sunnah.com/abudawud:1425): the qunut taught to al-Hasan (sahih, al-Albani).
- Qur'an [2:201](https://quran.com/2/201).
- [[Source - First Instructions on Worship]]: sunna prayers table; witr (wajib, 3 cycles, after Isha until dawn); appendix, the qunut (Hanafi wording).
- [Qibla via IslamQA.org 36692](https://islamqa.org/hanafi/qibla-hanafi/36692/): confirmed vs. recommended sunnas (Hanafi).
- [SeekersGuidance: the hadiths on witr (Hanafi)](https://seekersguidance.org/answers/prayer/the-hadiths-on-the-witr-prayer-according-to-the-hanafi-legal-school/); [Qibla 36911: witr as one rak'ah](https://islamqa.org/hanafi/qibla-hanafi/36911/can-we-pray-witr-as-one-rakat-what-if-time-is-going-out-can-we-follow-another-madhhab-in-this/).
- [Askimam 2265: sources for the qunut *Allahumma inna nasta'inuka*](https://islamqa.org/hanafi/askimam/2265/) (Abu Dawud's *al-Marasil*; al-Bayhaqi; the *Musannaf*s; mursal, outside the six collections).
- [SeekersGuidance: what to recite in the qunut if you don't know the sunna supplication](https://seekersguidance.org/answers/hanafi-fiqh/what-can-i-recite-during-the-qunut-of-witr-if-i-dont-know-the-sunna-supplication/).

## Scholar flags
- **Screens 7–9 (Q18).** Hanafi variant: witr required, 3 rak'ahs, one salam, Fatiha and surah in all three, qunut before ruku' in the third. Default variant: strongly recommended, form per the masjid.
- **Screen 5, AI guide context ([SCHOLAR: Q28], how to present the emphasized sunnahs to a new Muslim).** Drafted as: "They aren't required like the five, but the Prophet ﷺ kept them. Add one, keep it, then add another." Hanafi texts say habitually leaving a sunnah mu'akkadah without excuse is blameworthy; this lesson doesn't say so to a two-month convert, and doesn't call them skippable. Needs a scholar's wording.
- **Screen 10 (phrase).** The qunut's Arabic is `TODO-VERIFY` and **must be supplied by the imam** before this screen ships (T4: don't render a phrase screen whose `arabic` is `TODO-VERIFY`; show the transliteration and audio only, or hold the screen). Source (T2 final review): the wording is reported as a mursal narration (Khalid ibn Abi 'Imran: Jibril taught it to the Prophet ﷺ) in Abu Dawud's *al-Marasil* and al-Bayhaqi's *al-Sunan al-Kubra*, and as the qunut of 'Umar, Ibn Mas'ud and Ubayy in the *Musannaf*s of Ibn Abi Shaybah and 'Abd al-Razzaq [Askimam 2265]. These are outside our six collections, so the text can't be copied from the hadith tool and isn't in the Citation Bank; lessons don't call it a hadith. Take the Arabic from a Hanafi text (e.g. the Arabic edition of the masjid's manual) and have the imam confirm it.
