---
module: eid-fitr
phase: null
unit: null
title: "Eid morning"
hook: "Eid Mubarak! Today you celebrate. Here's how the morning goes, and how not to spend it alone."
minutes: 5
skills: [B5, B3, P5]
pain_points: [loneliness, belonging]
logs: [attended_eid_prayer]
madhab_sensitive: true
scholar_flags: [Q36]
status: draft-pending-scholar-review
glossary: [Eid, ghusl, takbir, Allahu akbar, rak'ah, khutbah, imam, Ramadan, Zakat al-Fitr]
sources: [Bukhari 953, Bukhari 1503, Muslim 890, Abu Dawud 1134, Q 2:185, First Instructions on Worship Part II and Part III, SeekersGuidance (fiqh of the two Eids), Yaqeen 2025 (Becoming Muslim)]
format: 2
---
# eid-fitr · Eid morning

### 1 · hook
```yaml
pic: crescent
text: "**Eid Mubarak, {{convert.first_name}}!** (\"Blessed Eid.\") Whether you fasted all of Ramadan or joined halfway, today is your celebration too. Here's the morning, step by step, and how to make sure you're not alone today."
```

### 2 · widget
```yaml
widget: moon
prompt: "Ramadan is over"
text: "Drag through the month. When the new crescent appears, Ramadan ends and a new month, Shawwal, begins. Its first day is Eid al-Fitr: today."
```

### 3 · steps
```yaml
title: "Before the prayer"
intro: "Eid morning, step by step."
steps:
  - text: "Take a **ghusl** (full shower)"
    pic: ghusl
  - text: "Put on your best clean clothes"
    pic: icon:Shirt
  - text: "Eat a few dates or something sweet. The Prophet ﷺ didn't leave for this prayer until he'd eaten some dates [Bukhari 953]."
    pic: icon:Utensils
  - text: "Haven't given **Zakat al-Fitr** yet? Give it before the prayer."
    pic: icon:HandCoins
  - text: "On the way, say *Allahu akbar* (the takbir)"
    pic: icon:Footprints
done_text: "Fed, fresh and dressed up. Now to the prayer."
variants:
  hanafi:
    steps:
      - text: "Take a **ghusl** (full shower)"
        pic: ghusl
      - text: "Put on your best clean clothes"
        pic: icon:Shirt
      - text: "Eat a few dates or something sweet. The Prophet ﷺ didn't leave for this prayer until he'd eaten some dates [Bukhari 953]."
        pic: icon:Utensils
      - text: "Haven't given **Zakat al-Fitr** yet? Give it before the prayer."
        pic: icon:HandCoins
      - text: "On the way, say *Allahu akbar* (the takbir) quietly to yourself"
        pic: icon:Footprints
```

### 4 · fill
```yaml
pic: icon:Utensils
before: "On Eid al-Fitr, you eat a few dates"
after: "the Eid prayer."
options:
  - text: "before"
    correct: true
    feedback: "Yes. The Prophet ﷺ ate dates before heading out on this Eid [Bukhari 953]. No fasting today."
  - text: "after"
    correct: false
    feedback: "Not quite. On Eid al-Fitr you eat first, before the prayer [Bukhari 953]."
  - text: "instead of"
    correct: false
    feedback: "Not quite. You eat the dates first, then go to the prayer [Bukhari 953]."
```

### 5 · learn
```yaml
madhab_variant: true
pic: masjid
default: "**The Eid prayer** is two rak'ahs (units) in the morning, with no call to prayer. It has a few extra *Allahu akbar*s: just do what the imam does. The talk (khutbah) comes after the prayer, so stay for it."
hanafi: "**The Eid prayer** is two rak'ahs (units) in the morning, with no call to prayer. There are three extra *Allahu akbar*s in each rak'ah. The talk (khutbah) comes after the prayer, so stay for it."
bubbles:
  - "{women}Sisters: come! It isn't required of you, but it's highly encouraged. The Prophet ﷺ had women and girls come out for both Eids [Muslim 890]. `[SCHOLAR: Q36]`{/women}"
  - "{women}On your period? Come anyway: join the takbir, the du'a and the celebration, and sit out only the prayer itself [Muslim 890].{/women}"
```

### 6 · prayer
```yaml
title: "The Eid prayer"
intro: "Watch it once before you go. Tap Next move, or Play."
moves:
  - pose: stand
    text: "Line up behind the imam. No call to prayer today. Intend the Eid prayer in your heart."
  - pose: takbir
    text: "Say the opening *Allahu akbar* after the imam."
    say: "Allahu akbar"
  - pose: takbir
    text: "**The extra takbirs.** The imam says a few more *Allahu akbar*s. Raise your hands when he does, then lower them. Just copy him."
    say: "Allahu akbar"
  - pose: qiyam
    text: "While he recites, do what {{masjid.name}} teaches about reciting behind the imam."
  - pose: ruku
    text: "Bow after him, rise, and make two prostrations, as in any prayer. That's rak'ah 1."
  - pose: qiyam
    text: "Stand for rak'ah 2. Watch for more extra *Allahu akbar*s: raise your hands when he does, and lower them."
  - pose: sujud
    text: "Bow, rise and make two prostrations after him."
  - pose: tashahhud
    text: "Sit for the final sitting, as at the end of any prayer."
  - pose: salam-right
    text: "Give your salam after the imam's. The prayer is done."
    say: "As-salamu 'alaykum wa rahmatullah"
  - pose: tashahhud
    text: "Stay for the **khutbah** (talk). On Eid it comes after the prayer."
done_text: "Two rak'ahs, a few extra takbirs, then the khutbah. Copy the imam and you're fine."
variants:
  hanafi:
    moves:
      - pose: stand
        text: "Line up behind the imam. No call to prayer today. Intend the Eid prayer in your heart."
      - pose: takbir
        text: "Raise your hands {men}to your ears{/men}{women}to your shoulders{/women} with the imam: *Allahu akbar*."
        say: "Allahu akbar"
      - pose: qiyam
        text: "Fold your hands and say the opening du'a quietly."
        say: "Subhanaka Allahumma…"
      - pose: takbir
        text: "**Extra takbir 1:** raise your hands with the imam, say *Allahu akbar*, then lower them to your sides."
        say: "Allahu akbar"
      - pose: takbir
        text: "**Extra takbir 2:** the same. Hands up, *Allahu akbar*, hands down to your sides."
        say: "Allahu akbar"
      - pose: takbir
        text: "**Extra takbir 3:** hands up once more, *Allahu akbar*."
        say: "Allahu akbar"
      - pose: qiyam
        text: "Now the imam recites al-Fatiha and a surah. Stand and listen."
      - pose: ruku
        text: "Bow after him, rise, and make two prostrations. That's rak'ah 1."
      - pose: qiyam
        text: "Stand for rak'ah 2. This time the imam recites **first**. Listen."
      - pose: takbir
        text: "**After the recitation, just before bowing:** three extra takbirs. Each time: hands up, *Allahu akbar*, hands down to your sides."
        say: "Allahu akbar ×3"
      - pose: ruku
        text: "Then *Allahu akbar* again, and bow with the imam."
      - pose: sujud
        text: "Rise, and make two prostrations after him."
      - pose: tashahhud
        text: "Sit for the final sitting, as at the end of any prayer."
      - pose: salam-right
        text: "Give your salam after the imam's. The prayer is done."
        say: "As-salamu 'alaykum wa rahmatullah"
      - pose: tashahhud
        text: "Stay for the **khutbah** (talk). On Eid it comes after the prayer."
    done_text: "Three extra takbirs in each rak'ah: before the recitation in the first, after it in the second. Then the khutbah."
```

### 7 · order
```yaml
prompt: "Put Eid morning in order."
items:
  - "Ghusl and your best clothes"
  - "Eat a few dates"
  - "Head to the prayer, saying Allahu akbar along the way"
  - "Pray the two rak'ahs behind the imam"
  - "Listen to the khutbah"
  - "Greet people: \"Eid Mubarak!\""
pics: [ghusl, icon:Utensils, icon:Footprints, masjid, icon:Mic, community]
feedback: "That's the morning. Eating comes before the prayer on this Eid [Bukhari 953], and the khutbah after it."
```

### 8 · learn
```yaml
pic: icon:PartyPopper
text: "**Why this day?** When the Prophet ﷺ came to Madinah, people had two old festivals. He told them Allah had given them two better days: Eid al-Fitr and Eid al-Adha [Abu Dawud 1134]."
bubbles:
  - "So celebrate. Eat, laugh, visit people, give the kids gifts. Fasting today isn't allowed."
  - "Thanking Allah for getting you through the month is the point [Q 2:185]."
```

### 9 · sort
```yaml
prompt: "Eid day: yes, or not today?"
buckets: ["Yes, today", "Not today"]
items:
  - text: "A few dates before the prayer"
    bucket: 0
    why: "The Prophet ﷺ ate dates before heading out on Eid al-Fitr [Bukhari 953]."
  - text: "Fasting until sunset"
    bucket: 1
    why: "Fasting on Eid isn't allowed. Today you eat and celebrate."
  - text: "Staying for the khutbah"
    bucket: 0
    why: "On Eid, the khutbah comes after the prayer. Stay and listen."
  - text: "Visiting people and giving the kids gifts"
    bucket: 0
    why: "That's the spirit of the day: thanking Allah, together."
  - text: "Spending the day alone because Eid is \"for families\""
    bucket: 1
    why: "Eid is for the whole community, and that includes you."
```

### 10 · scenario
```yaml
pic: community
situation: "After the Eid prayer, everyone pours out in family groups. Chris doesn't have plans and feels his chest tighten. He's thinking of just going home."
options:
  - text: "Find his mentor or someone he's met, say \"Eid Mubarak,\" and ask what they're doing later"
    best: true
    feedback: "Yes. People love being asked. Many hosts are waiting for exactly that question."
  - text: "Go home and scroll, since Eid is really for families"
    best: false
    feedback: "Not quite. Eid is for the whole community, and that includes him. One question can change the day."
  - text: "Decide the masjid doesn't care about converts"
    best: false
    feedback: "That feeling is real and common. But people often just don't know he's free. Let someone know."
```

### 11 · reflect
```yaml
prompt: "Look back at your Ramadan. What's one thing you did that you never thought you could? What's one habit you want to keep?"
share_with_mentor: optional
```

### 12 · ask_ai
```yaml
chips:
  - "I'm late. Can I still join the Eid prayer?"
  - "What do I say when people greet me?"
  - "Can I bring my non-Muslim family to Eid events?"
  - "How do I keep my Ramadan habits going?"
```

### 13 · do_today
```yaml
pic: community
text: "Pray, greet, and don't spend Eid alone."
steps:
  - "Go to the Eid prayer at {{masjid.name}}"
  - "Greet three people with \"Eid Mubarak\""
  - "Spend part of the day with someone: Muslim friends, your mentor's family, or your own family"
log: attended_eid_prayer
optional_extra: "Missed the prayer? Don't worry. Call {{mentor.name}} or a Muslim friend and join them for the afternoon."
```

### 14 · takeaway
```yaml
pic: crescent
text: "Eat something sweet, pray the two-rak'ah Eid prayer, stay for the khutbah, and spend the day with people. No fasting today."
```

### 15 · closing
You did your first Ramadan, or part of it. Allah saw every hour. Enjoy today.

---

## Check
```yaml
- prompt: "On Eid al-Fitr, when do you eat?"
  options:
    - text: "Before the Eid prayer: a few dates or something sweet"
      correct: true
      feedback: "Right. The Prophet ﷺ ate dates before heading out on Eid al-Fitr [Bukhari 953]."
    - text: "Not until sunset, like in Ramadan"
      correct: false
      feedback: "Not quite. Fasting on Eid isn't allowed. Eat before you go to the prayer."
- prompt: "What comes after the Eid prayer?"
  options:
    - text: "The khutbah (talk)"
      correct: true
      feedback: "Right. On Eid, the khutbah comes after the prayer, so stay for it."
    - text: "Nothing; leave right away"
      correct: false
      feedback: "Not quite. The khutbah follows the prayer. Stay and listen."
```

## AI guide context
**Lesson facts**
- Eid al-Fitr: 1st of Shawwal. Fasting on it is prohibited [First Instructions Part III]. Allah gave Muslims two Eids in place of earlier festivals [Abu Dawud 1134, sahih per al-Albani].
- Sunnahs: ghusl, best clothes, eating (dates, an odd number) before the prayer [Bukhari 953], takbir on the way (Hanafi: quietly on Eid al-Fitr, aloud on Eid al-Adha) [SeekersGuidance (fiqh of the two Eids)]. Zakat al-Fitr before the prayer [Bukhari 1503].
- Eid prayer: two rak'ahs, no adhan or iqamah, khutbah after the prayer [First Instructions Part II]. Hanafi: three extra takbirs in each rak'ah (first rak'ah: after the opening takbir and opening praise, before al-Fatiha; second: after the recitation, before ruku'), hands raised and dropped for each [SeekersGuidance].
- Hanafi status: necessary (wajib) on resident, healthy adult men; women and children are rewarded for attending [SeekersGuidance].
- Women: not required, but **highly encouraged** to attend (the program's position, Shayan 2026-10-07); the Prophet ﷺ had women and girls, even those on their period, come out for both Eids, with those on their period joining the takbir and du'a but not the prayer [Muslim 890]. Some later Hanafi scholars discouraged women attending; if asked, present the encouragement warmly and suggest asking the imam (scholar question Q36).
- Loneliness at Eid is common among converts (40%, Yaqeen 2025).

**Likely questions**
- *"I'm late."* Join the imam where he is. For missed extra takbirs or a missed rak'ah, keep it simple and suggest asking the imam afterward; Hanafi: a missed Eid prayer isn't made up alone.
- *"How do I answer 'Eid Mubarak'?"* Say "Eid Mubarak" back, or "Khair Mubarak," or "and to you." Hugs are common among men with men and women with women.
- *"Bring family?"* Many masjids welcome guests to Eid events; check with the masjid. Respectful dress for the prayer hall.
- *"Keep the habits?"* Pick one: a page of Qur'an, Fajr on time, a weekly fast. Six voluntary fasts in Shawwal are a well-known sunnah; mention lightly.

**Escalate:** a convert alone and distressed on Eid (care first; connect to the mentor; safety rule if needed); a teen who can't attend because of parents.

**Don't**
- Don't make women feel unwelcome at the Eid prayer.
- Don't shame anyone who missed fasts during Ramadan; point to make-ups calmly.

## Madhab note
- **Extra takbirs:** the Hanafi school has three in each rak'ah. The Maliki, Shafi'i and Hanbali schools have more (six or seven in the first rak'ah and five in the second, before the recitation in both). Follow the imam.
- **Status:** the Hanafi school holds the Eid prayer necessary (wajib) for men; the Maliki and Shafi'i schools a confirmed sunnah; the Hanbali school a communal obligation.

## Sources
- [Bukhari 953](https://sunnah.com/bukhari:953): dates before the Eid al-Fitr prayer.
- [Bukhari 1503](https://sunnah.com/bukhari:1503): Zakat al-Fitr before the Eid prayer.
- [Abu Dawud 1134](https://sunnah.com/abudawud:1134) (sahih, al-Albani): the two Eids.
- Qur'an [2:185](https://quran.com/2/185): completing the month and glorifying Allah.
- [[Source - First Instructions on Worship]] Part II (the Eid prayer) and Part III (no fasting on Eid).
- [SeekersGuidance: The fiqh of Eid al-Fitr and Eid al-Adha](https://seekersguidance.org/answers/general-counsel/fiqh-eid-al-fitr-eid-al-adha/) (Ustadha Naielah Ackbarali).
- [Yaqeen Institute: Becoming Muslim (2025)](https://yaqeeninstitute.org/read/data/reports/becoming-muslim-lives-of-american-converts-to-islam): 40% lonely at Ramadan or Eid.
- Extra takbirs (verified, T2 final review, against the SeekersGuidance fiqh of the two Eids page): three in each rak'ah, after the opening takbir in the first and after the recitation in the second, hands raised for each.

## Scholar flags
- **Screen 5 (Q36).** Women are told the Eid prayer isn't required of them but is highly encouraged, citing Muslim 890 (women and girls, even on their period, brought out for both Eids). Set by the program (Shayan, 2026-10-07); later Hanafi scholars generally discouraged women attending, so a scholar's view on the wording is welcome.
