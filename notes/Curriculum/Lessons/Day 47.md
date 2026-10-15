---
day: 47
phase: 2
unit: 6
title: "Hajj and Umrah"
hook: "Millions of people in simple white, from every country, answering the same call. One day, maybe you."
minutes: 5
skills: [T2]
pain_points: []
logs: []
madhab_sensitive: true
scholar_flags: []
status: draft-pending-scholar-review
glossary: [Hajj, Umrah, Makkah, Ka'bah, ihram, tawaf, sa'i, Arafah, Dhul Hijjah, talbiyah, Allah, ﷺ]
sources: [Bukhari 8, Q 3:97, Q 22:27, Q 2:196, Tirmidhi 889, Bukhari 1521, Bukhari 1773, Bukhari 1549, Revealed Path ch. 6, Being Muslim (Hajj), IslamQA.info 41702, IslamWeb 202444]
format: 2
---
# Day 47 · Hajj and Umrah

### 1 · hook
```yaml
pic: kaaba
text: "You've probably seen the pictures: a sea of people in white circling the Ka'bah. That's **Hajj**, the fifth pillar. Today: what it is, what happens, and why you don't need to rush into it."
```

### 2 · learn
```yaml
pic: kaaba
text: "**Hajj** is the pilgrimage to **Makkah**, the city of the Ka'bah. It's a pillar of Islam [Bukhari 8], due **once in a lifetime** for those who can manage it: *\"for whoever is able to find thereto a way\"* [Q 3:97, Saheeh Intl.]."
bubbles:
  - "The call goes back to Ibrahim (Abraham), who was told to invite people to the House [Q 22:27]."
```

### 3 · steps
```yaml
title: "Umrah, the \"lesser pilgrimage\""
intro: "Umrah can be done any time of year and takes a few hours. Its core, in four steps [Q 2:196]:"
steps:
  - text: "**Enter ihram**, the pilgrim's state. {men}For men, that means two simple white cloths.{/men}"
    pic: intention
  - text: "**Tawaf:** circle the Ka'bah seven times"
    pic: kaaba
  - text: "**Sa'i:** walk between two hills seven times"
    pic: icon:Footprints
  - text: "**Cut the hair.** Your Umrah is done"
    pic: icon:Scissors
done_text: "That's Umrah. Hajj has the same pieces, plus more, over about five days."
```

### 4 · sort
```yaml
prompt: "Hajj or Umrah?"
buckets: ["Hajj", "Umrah"]
items:
  - text: "Can be done any time of year"
    bucket: 1
    why: "Umrah has no set season."
  - text: "Happens on set days each year, in the month of Dhul Hijjah"
    bucket: 0
    why: "Hajj has fixed days, once a year."
  - text: "Takes a few hours"
    bucket: 1
    why: "Ihram, tawaf, sa'i, cutting the hair: a few hours."
  - text: "Takes about five days"
    bucket: 0
    why: "Hajj spreads across several days and places."
  - text: "Includes standing at Arafah"
    bucket: 0
    why: "Arafah belongs to Hajj, and it's the heart of it [Tirmidhi 889]."
  - text: "A pillar of Islam, due once in a lifetime for those able"
    bucket: 0
    why: "That's Hajj [Bukhari 8; Q 3:97]."
```

### 5 · widget
```yaml
widget: timeline
prompt: "Walk through the days of Hajj"
text: "Tap each day. Pilgrims move between a few places just outside Makkah."
events:
  - when: "8th Dhul Hijjah"
    title: "Ihram and Mina"
    text: "Enter ihram and head to Mina, a tent city near Makkah."
    pic: icon:Tent
  - when: "9th"
    title: "Arafah"
    text: "Stand at Arafah all afternoon, praying and making du'a. This is the heart of Hajj [Tirmidhi 889]."
    pic: icon:Mountain
  - when: "That night"
    title: "Muzdalifah"
    text: "Spend the night under the open sky at Muzdalifah."
    pic: icon:Moon
  - when: "10th (Eid al-Adha)"
    title: "Back in Mina"
    text: "Throw pebbles, offer the sacrifice, and cut the hair."
    pic: crescent
  - when: "Then"
    title: "Tawaf and sa'i"
    text: "Circle the Ka'bah and walk between the two hills."
    pic: kaaba
  - when: "11th–13th"
    title: "Mina, then farewell"
    text: "Final days in Mina, then a farewell tawaf around the Ka'bah."
    pic: icon:Route
```

### 6 · order
```yaml
prompt: "Now put the main days of Hajj in order."
items:
  - "Enter ihram and head to Mina, a tent city near Makkah"
  - "Stand at Arafah all afternoon, praying and making du'a"
  - "Spend the night under the sky at Muzdalifah"
  - "Back in Mina: throw pebbles, offer the sacrifice, cut the hair (Eid al-Adha)"
  - "Circle the Ka'bah (tawaf) and walk between the hills (sa'i)"
  - "Final days in Mina, then a farewell tawaf"
pics: ["icon:Tent", "icon:Mountain", "icon:Moon", "crescent", "kaaba", "icon:Route"]
feedback: "That's the shape of Hajj. Arafah is the heart of it: the Prophet ﷺ said Hajj is Arafah [Tirmidhi 889]."
```

### 7 · learn
```yaml
pic: community
text: "**Why it matters.** At Hajj, everyone wears the same simple clothes. Rich and poor, every race and country, stand side by side. It's a picture of standing before Allah."
bubbles:
  - "Whoever does Hajj for Allah, avoiding sin and indecency, returns as clean as a newborn [Bukhari 1521]."
  - "An accepted Hajj is rewarded with Paradise [Bukhari 1773]."
```

### 8 · phrase
```yaml
arabic: "لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لاَ شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لاَ شَرِيكَ لَكَ"
translit: "Labbayk Allahumma labbayk, labbayka la sharika laka labbayk, innal-hamda wan-ni'mata laka wal-mulk, la sharika lak"
meaning: "Here I am, O Allah, here I am. Here I am; You have no partner; here I am. All praise and blessings are Yours, and all dominion. You have no partner."
audio_id: talbiyah
when: "The talbiyah: pilgrims say it over and over from the moment they enter ihram. Learn it now so it's yours when your day comes. [Bukhari 1549]"
```

### 9 · learn
```yaml
pic: icon:Hourglass
text: "**Not a rush, and not a someday-never.** \"Able\" means healthy enough, with money for the trip beyond your basic needs and debts, and a safe way to go. Most new Muslims aren't there yet, and that's fine."
bubbles:
  - "Once you *are* able, scholars say not to put it off without a reason."
  - "Start a small savings goal, and learn as you go."
```

### 10 · choice
```yaml
pic: icon:PiggyBank
prompt: "Which of these makes Hajj due for someone?"
options:
  - text: "They're healthy, can afford the trip beyond their needs and debts, and can travel safely"
    correct: true
    feedback: "Right. That's what \"able\" means [Q 3:97]. Then they should plan to go and not delay without reason."
  - text: "They've been Muslim for at least five years"
    correct: false
    feedback: "Not quite. There's no waiting period. It's about ability: health, money and a safe way to go."
  - text: "They have a credit card that could cover it"
    correct: false
    feedback: "Not quite. Hajj isn't due for someone who'd need to go into debt for it."
```

### 11 · ask_ai
```yaml
chips:
  - "How much does Hajj cost, and how do people go?"
  - "Can women go on Hajj?"
  - "What's the difference between Hajj and Umrah again?"
  - "How can I join in if I can't go this year?"
```

### 12 · do_today
```yaml
pic: kaaba
text: "Say the talbiyah, and think about Hajj as a goal."
steps:
  - "Practice the talbiyah once, out loud"
  - "Ask yourself: is Hajj a goal you'd like to set, even years from now?"
log: null
optional_extra: "If you'd like, open a small savings pot for Hajj or Umrah. Even a few dollars a month is a real start."
```

### 13 · takeaway
```yaml
pic: icon:Mountain
text: "Hajj is due once in a lifetime for those who are able. Arafah is its heart. Umrah can be done any time. No rush, but once you're able, don't delay."
```

### 14 · closing
Every pilgrim started with an intention. Yours can start today.

---

## Check
```yaml
- prompt: "Who must perform Hajj?"
  options:
    - text: "Every Muslim, once in a lifetime, if they're able"
      correct: true
      feedback: "Right. Health, money beyond needs and debts, and a safe way to go [Q 3:97]."
    - text: "Every Muslim, every year"
      correct: false
      feedback: "Not quite. Hajj is due once in a lifetime, and only for those who are able."
- prompt: "Which day is called the heart of Hajj?"
  options:
    - text: "The day at Arafah"
      correct: true
      feedback: "Right. The Prophet ﷺ said Hajj is Arafah [Tirmidhi 889]."
    - text: "The day of arriving in Makkah"
      correct: false
      feedback: "Not quite. Standing at Arafah is the heart of Hajj [Tirmidhi 889]."
```

## AI guide context
**Lesson facts**
- Hajj is a pillar [Bukhari 8], obligatory once for whoever is able [Q 3:97]; its call goes back to Ibrahim [Q 22:27]. Complete Hajj and Umrah for Allah [Q 2:196].
- "Hajj is Arafah" [Tirmidhi 889, sahih per al-Albani]. A Hajj without indecency or sin returns the pilgrim sinless as a newborn [Bukhari 1521]; an accepted Hajj's reward is Paradise; one Umrah to the next expiates what's between [Bukhari 1773].
- The talbiyah wording is from Bukhari 1549.
- Rites in brief (8th–13th Dhul Hijjah): ihram; Mina; Arafah (9th); Muzdalifah; on the 10th: stoning the large pillar, sacrifice, shaving or trimming, tawaf al-ifadah and sa'i; days in Mina stoning the three pillars; farewell tawaf [Revealed Path ch. 6; Being Muslim]. Umrah: ihram, tawaf, sa'i, cutting the hair.
- Ability: health, provision beyond needs and debts, a safe route. Once able, the Hanafi and Maliki schools (and the Hanbali, per Ibn Qudamah) hold it shouldn't be delayed [IslamQA.info 41702; IslamWeb 202444]. Other views on timing exist; route personal timing questions to the imam.
- Join from home: the Day of Arafah fast for non-pilgrims and Eid al-Adha (calendar modules hajj-1, hajj-2, eid-adha).

**Likely questions**
- *"How do people go? Cost?"* Through licensed Hajj group operators; costs vary widely by country and package, so don't quote numbers. Many save for years. Mention the US/Saudi visa and registration process only in general terms.
- *"Can women go?"* Yes. Schools differ on whether a woman must travel with a mahram (a close male relative or husband) or may go with a trustworthy group; escalate details to the imam.
- *"Can I go for Umrah now?"* Yes, any time of year, if they can manage it; Umrah needs no long waiting period. Suggest going with an experienced group and learning the steps first.
- *"Can a convert go to Makkah?"* Yes; Muslims enter Makkah. A masjid letter confirming Islam may help with the visa; the imam can advise.

**Escalate:** a convert asking whether they're "able" given their finances or debts; women's travel requirements; Hajj on behalf of someone else; health limitations.

**Don't**
- Don't pressure anyone to go before they can afford it; never suggest debt for Hajj.
- Don't quote prices or name specific travel operators.
- Don't depict or describe the Prophet ﷺ visually; text only.

## Madhab note
- **Timing once able:** the Hanafi (Abu Yusuf's relied-upon view), Maliki and Hanbali schools hold that Hajj should be done straight away once a person is able; the Shafi'i school allows delaying it [IslamQA.info 41702; Qibla (Shafi'i) 33948]. Your imam can advise.
- **Umrah:** the Hanafi and Maliki schools hold it's a strongly emphasized sunnah; the Shafi'i and Hanbali schools hold it's obligatory once in a lifetime for those able [Dar al-Ifta Egypt: the Umrah].

## Sources
- [Bukhari 8](https://sunnah.com/bukhari:8): the five pillars.
- Qur'an [3:97](https://quran.com/3/97), [22:27](https://quran.com/22/27), [2:196](https://quran.com/2/196).
- [Tirmidhi 889](https://sunnah.com/tirmidhi:889) (sahih, al-Albani): Hajj is Arafah.
- [Bukhari 1521](https://sunnah.com/bukhari:1521): returning sinless as a newborn.
- [Bukhari 1773](https://sunnah.com/bukhari:1773): Umrah expiates; an accepted Hajj's reward is Paradise.
- [Bukhari 1549](https://sunnah.com/bukhari:1549): the Prophet's talbiyah ﷺ (Arabic copied from the hadith text).
- [IslamQA.info 41702: obligation of performing Hajj straightaway](https://islamqa.info/en/answers/41702); [IslamWeb 202444: delaying Hajj](https://www.islamweb.net/en/fatwa/202444/delaying-hajj-until-one-becomes-unable-to-perform-it); [Qibla (Shafi'i) 33948: delaying Hajj](https://islamqa.org/shafii/qibla-shafii/33948/); [Dar al-Ifta Egypt: the Umrah, rulings and rites](https://www.dar-alifta.org/en/article/details/103/the-umrah-rulings-and-rites).
- [[Source - The Revealed Path]] ch. 6 (Hajj: the House, ihram, the rites, Arafah, the sacrifice); [[Source - Being Muslim a Practical Guide]] (Hajj).
