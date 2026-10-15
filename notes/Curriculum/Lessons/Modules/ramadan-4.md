---
module: ramadan-4
phase: null
unit: null
title: "Night prayers, the Qur'an, and iftar together"
hook: "Ten days in. Tonight: the night prayer, the Qur'an, and why you shouldn't break your fast alone."
minutes: 5
skills: [B5, B3, B1]
pain_points: [loneliness, first-ramadan]
logs: [attended_masjid_iftar]
madhab_sensitive: true
scholar_flags: []
status: draft-pending-scholar-review
glossary: [Ramadan, tarawih, iftar, Isha, rak'ah, imam, Qur'an, al-Fatiha]
sources: [Bukhari 37, Q 2:185, Q 7:204, Tirmidhi 807, First Instructions on Worship Part II, Yaqeen 2025 (Becoming Muslim), Revealed Path ch. 5]
format: 2
---
# ramadan-4 · Night prayers, the Qur'an, and iftar together

### 1 · hook
```yaml
pic: icon:MoonStar
text: "**About ten days in.** The hunger is easier now, right? Today is about the nights: the special night prayer, the Qur'an, and one thing that matters more than people admit: not breaking your fast alone."
```

### 2 · learn
```yaml
madhab_variant: true
pic: masjid
default: "**Tarawih** (the night prayer of Ramadan) is prayed in congregation at the masjid after Isha. It isn't required, and it's loved: whoever prays Ramadan's nights with faith, hoping for Allah's reward, is forgiven their past sins [Bukhari 37]."
hanafi: "**Tarawih** (the night prayer of Ramadan) is 20 rak'ahs (units), prayed two at a time after Isha, in congregation at the masjid. It's a strongly recommended sunnah, not an obligation."
bubbles:
  - "Some masjids pray 8 rak'ahs (units), some 20, two at a time. {{masjid.name}} will show you its practice."
hanafi_bubbles:
  - "Whoever prays Ramadan's nights with faith, hoping for Allah's reward, is forgiven their past sins [Bukhari 37]."
```

### 3 · prayer
```yaml
title: "Tarawih behind the imam"
intro: "**New? Tarawih is easier than it looks.** You don't need to know long surahs."
moves:
  - pose: stand
    text: "Stand behind the imam."
  - pose: qiyam
    text: "Listen as he recites. {{masjid.name}} will show you what to say, and what to listen to."
  - pose: ruku
    text: "Follow his movements: when he bows, you bow."
  - pose: sujud
    text: "When he prostrates, you prostrate."
  - pose: salam-right
    text: "He ends with the salam after every two rak'ahs. Stay for two, eight, or all of it."
done_text: "Whatever you pray counts."
variants:
  hanafi:
    moves:
      - pose: stand
        text: "Stand behind the imam."
      - pose: qiyam
        text: "Behind the imam you don't recite al-Fatiha or a surah at all, not even quietly. You listen [Q 7:204]."
      - pose: ruku
        text: "Follow his movements, saying the phrases you know in each position."
      - pose: sujud
        text: "When he prostrates, you prostrate."
      - pose: salam-right
        text: "He ends with the salam after every two rak'ahs. Stay for two, eight, or all twenty."
```

### 4 · choice
```yaml
pic: icon:AlarmClock
prompt: "Dre has work at 7 a.m. He can stay for 8 rak'ahs of tarawih, not 20. What should he do?"
options:
  - text: "Pray the 8 and head home; that's real worship, and he can add more on a weekend"
    correct: true
    feedback: "Right. Tarawih isn't required, and every rak'ah counts. Doing what he can keep up is the way."
  - text: "Skip it, since he can't finish"
    correct: false
    feedback: "Not quite. Part of it is far better than none. Every rak'ah he prays counts."
  - text: "Skip Isha so he can stay for all of tarawih another night"
    correct: false
    feedback: "Not quite. Isha is required; tarawih isn't. Isha always comes first."
```

### 5 · learn
```yaml
pic: quran
text: "**The month of the Qur'an.** The Qur'an was first sent down in Ramadan [Q 2:185], so Muslims spend extra time with it now."
```

### 6 · scenario
```yaml
pic: icon:BookOpen
situation: "Hannah wants a Qur'an goal for the rest of Ramadan. She works full time. Which goal fits?"
options:
  - text: "A page of translation a day, or listening to a recitation on her commute"
    best: true
    feedback: "Yes. Pick a goal you'll keep. Spending time with the Qur'an is the point."
  - text: "Finish the whole book by Eid, even if she has to skip sleep"
    best: false
    feedback: "Not quite. Finishing the whole book isn't the point. Spending time with it is."
  - text: "Wait until after Ramadan, when she has more time"
    best: false
    feedback: "Not quite. This is the month of the Qur'an. Even a page a day counts."
```

### 7 · fill
```yaml
before: "In a 2025 survey of 618 American converts,"
after: "said they felt lonely at Ramadan or Eid [Yaqeen 2025]."
options:
  - text: "40%"
    correct: true
    feedback: "Yes, 40%. Breaking your fast alone in your car or your room is really common, and it's hard."
  - text: "5%"
    correct: false
    feedback: "Not quite. It was 40%. If you've felt lonely this month, you're far from alone."
  - text: "90%"
    correct: false
    feedback: "Not quite. It was 40%: a lot of converts, and a real need."
```

### 8 · learn
```yaml
pic: community
text: "**Here's the good news:** whoever feeds a fasting person gets the same reward as their fast [Tirmidhi 807]. Your masjid *wants* to feed you."
```

### 9 · scenario
```yaml
pic: masjid
situation: "Keisha has broken every fast this week alone in her apartment. The masjid hosts a free community iftar every evening, but she doesn't know anyone and feels awkward walking in."
options:
  - text: "Message her mentor and ask to meet at the masjid iftar tonight, so she has someone to sit with"
    best: true
    feedback: "Yes. One familiar face makes the door easy. Mentors want this message."
  - text: "Keep eating alone; she'll go next year when she knows people"
    best: false
    feedback: "Understandable, but this is how people get to know each other. Next year starts tonight."
  - text: "Go, but leave right after the dates without talking to anyone"
    best: false
    feedback: "Better than not going! Next step: stay for the meal and ask one person their name."
```

### 10 · roleplay
```yaml
character: "A friendly regular at the masjid's community iftar, about your age and gender, who's been coming for years. Warm, a little chatty. Never pushy or preachy."
setup: "You've just sat down at a long table at the masjid iftar with your plate. The person next to you smiles: \"Hey, I don't think I've seen you before. Is this your first time here?\""
goal: "Introduce yourself, say you're new to Islam (only if you want to), and make one real connection."
success_looks_like: "You give your name, answer simply, ask them a question back, and maybe swap numbers or agree to sit together again."
coach_notes: "The regular asks friendly questions: 'Where are you from?', 'How's your fasting going?', 'Are you coming to tarawih?'. They're delighted if the convert shares they're new, and never quiz them on religion or push marriage, a madhab or anything heavy. If the convert prefers not to say they're new, the regular doesn't push. Debrief: praise any question they asked back; suggest one easy line for next time."
```

### 11 · ask_ai
```yaml
chips:
  - "What do I do at a masjid iftar? Where do I sit?"
  - "How do I follow the imam in tarawih?"
  - "Where should I start reading the Qur'an?"
  - "I feel lonely this Ramadan. Is that normal?"
```

### 12 · do_today
```yaml
pic: community
text: "Break your fast at {{masjid.name}}'s community iftar this week."
steps:
  - "Message {{mentor.name}} today to pick an evening"
  - "Go to the iftar, ideally together"
log: attended_masjid_iftar
optional_extra: "Stay for some of tarawih afterwards, even just two rak'ahs."
```

### 13 · takeaway
```yaml
pic: icon:Users
text: "Tarawih is a loved, optional night prayer: pray what you can behind the imam. Spend daily time with the Qur'an. And break your fast with people."
```

### 14 · closing
You weren't meant to do Ramadan alone. Someone at that table is glad you came.

---

## Check
```yaml
- prompt: "Is tarawih required?"
  options:
    - text: "No. It's a strongly recommended night prayer; pray what you can"
      correct: true
      feedback: "Right. It's loved and rewarded [Bukhari 37], but not required like Isha."
    - text: "Yes, all of it, every night"
      correct: false
      feedback: "Not quite. It isn't required. Every rak'ah you pray counts."
- prompt: "Why are masjids happy to feed you at iftar?"
  options:
    - text: "Feeding a fasting person earns the reward of their fast"
      correct: true
      feedback: "Right. The one who feeds a fasting person shares their reward [Tirmidhi 807]."
    - text: "It's only for people who can't afford food"
      correct: false
      feedback: "Not quite. Community iftars are for everyone. Feeding any fasting person is rewarded [Tirmidhi 807]."
```

## AI guide context
**Lesson facts**
- Praying Ramadan's nights with faith and hope of reward brings forgiveness of past sins [Bukhari 37]. Tarawih: Hanafi, 20 rak'ahs in pairs after Isha and before witr [First Instructions Part II]; a confirmed sunnah in the Hanafi school. Many masjids pray 8; both are practiced.
- Hanafi: the follower doesn't recite behind the imam, in any prayer; he listens [Q 7:204] and says the other phrases (takbirs, tasbih, tashahhud) himself.
- The Qur'an was first revealed in Ramadan [Q 2:185].
- Feeding a fasting person earns the reward of their fast [Tirmidhi 807, sahih per al-Albani].
- Yaqeen 2025 (618 US converts): 40% lonely at Ramadan or Eid; Muslim friends and mosque attachment were the strongest predictors of staying strong in faith.

**Likely questions**
- *"Masjid iftar etiquette?"* Arrive a few minutes before sunset; men and women often sit in separate areas; dates and water first, then Maghrib in congregation, then the meal. It's fine to say "I'm new." Offer to help clean up: it's the fastest way to meet people.
- *"How do I follow in tarawih?"* Line up, intend tarawih, follow the imam; it's prayed in pairs. Witr is prayed after it in congregation in Ramadan at Hanafi masjids; Day 8 taught witr. Leaving early is fine.
- *"Where to start with the Qur'an?"* A good English translation (Saheeh International, or one the masjid recommends), starting with short surahs or al-Baqarah's fasting verses (2:183–187). Audio with translation works for busy people.
- *"I feel lonely."* Normalize it (40% stat), then one concrete step: message the mentor, go to an iftar, join a class. Watch for signs of something heavier (safety rule).

**Escalate:** anything suggesting depression or self-harm (safety rule); a teen who can't get to the masjid without parents' knowledge (mentor; safeguarding: in-person meetings in public masjid spaces, mentor of the same gender, second adult included).

**Don't**
- Don't make tarawih sound required or shame anyone for leaving early.
- Don't pressure a convert to announce they're new.
- Don't settle the 8-vs-20 debate beyond "both are practiced; follow your masjid."

**Role-play brief:** A friendly iftar regular. Asks easy questions, delighted to meet someone new, never preachy or pushy. Debrief on asking a question back and one easy line for next time.

## Madhab note
- **How many rak'ahs:** the classical practice in the four schools is 20 rak'ahs (the Maliki school also records a longer practice from Madinah). Many masjids today pray 8. All agree it's a sunnah, not an obligation.
- **Reciting behind the imam:** in the Hanafi school the follower stays silent; the Shafi'i school has the follower recite al-Fatiha. Follow {{masjid.name}}'s teaching.

## Sources
- [Bukhari 37](https://sunnah.com/bukhari:37): praying Ramadan's nights with faith and hope; past sins forgiven.
- Qur'an [2:185](https://quran.com/2/185), [7:204](https://quran.com/7/204).
- [Tirmidhi 807](https://sunnah.com/tirmidhi:807) (sahih, al-Albani): feeding a fasting person earns their reward.
- [[Source - First Instructions on Worship]] Part II (tarawih: 20 rak'ahs in pairs after Isha, before witr).
- [Yaqeen Institute: Becoming Muslim, the lives of American converts (2025)](https://yaqeeninstitute.org/read/data/reports/becoming-muslim-lives-of-american-converts-to-islam): 40% lonely at Ramadan or Eid; [[Research Notes - Retention and Convert Voices]].
- [[Source - The Revealed Path]] ch. 5 (Ramadan nights).
- Tarawih counts (Madhab note; verified, T2 final review): [Jamiatul Ulama KZN: tarawih is 20 rak'ahs](https://jamiat.org.za/tarawih-is-20-rakats-no-less/) (reports Hanafi, Shafi'i and Hanbali at 20 and Malik's 36 from Madinah's practice); [[Source - First Instructions on Worship]] Part II.
