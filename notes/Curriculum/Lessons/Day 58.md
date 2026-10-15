---
day: 58
phase: 2
unit: 7
title: "Prayer on the go"
hook: "A road trip, a hospital bed, no sink in sight. Prayer comes with you, and Allah made it easier for exactly these days."
minutes: 5
skills: [P8]
pain_points: [skill]
logs: []
madhab_sensitive: true
scholar_flags: [Q12]
status: draft-pending-scholar-review
glossary: [tayammum, khuff, wudu, ghusl, rak'ah, Dhuhr, Asr, Isha, Fajr, Maghrib, witr, Bismillah, imam, qibla]
sources: [Q 4:101, Q 5:6, Muslim 686, Bukhari 1117, Muslim 276, Abu Dawud 162, First Instructions on Worship (traveler's prayer; tayammum), SeekersGuidance (when is one a traveler; questions on travel prayer), SeekersGuidance (traveler behind a resident imam), SeekersGuidance (sick person's prayer), SeekersGuidance (how to make tayammum), SeekersGuidance (wiping thick socks), Qibla 37169, AMJA 78081]
format: 2
---
# Day 58 · Prayer on the go

### 1 · hook
```yaml
pic: icon:Luggage
text: "Prayer doesn't stay home when you travel, get sick, or can't find water. Allah made it lighter for those days, not optional. Today: four tools for real life."
```

### 2 · learn
```yaml
madhab_variant: true
pic: icon:Plane
default: "**Traveling.** On a long trip, the four-rak'ah prayers (Dhuhr, Asr, Isha) can be shortened to two, a gift from Allah [Q 4:101; Muslim 686]. Fajr, Maghrib and witr stay the same."
hanafi: "**Traveling.** Heading roughly 48–50 miles (77–81 km) or more away? Once you leave your town, pray Dhuhr, Asr and Isha as **two** rak'ahs, a gift from Allah [Q 4:101; Muslim 686]. Fajr, Maghrib and witr stay the same."
bubbles:
  - "{{masjid.name}} will tell you its rules: the distance, how long a stay counts, and combining prayers."
hanafi_bubbles:
  - "It lasts until you're home, or until you plan to stay **15 days or more** in one place."
  - "Praying behind a local imam? Pray all four with him."
```

### 3 · sort
```yaml
prompt: "You're on a long trip. Which prayers shorten?"
buckets: ["Shortens to two", "Stays the same"]
items:
  - text: "Dhuhr"
    bucket: 0
    why: "A four-rak'ah prayer, so on a trip it becomes two [Q 4:101]."
  - text: "Fajr"
    bucket: 1
    why: "Fajr is already two. It stays the same."
  - text: "Asr"
    bucket: 0
    why: "Four rak'ahs at home, two on the road."
  - text: "Maghrib"
    bucket: 1
    why: "Maghrib's three rak'ahs stay three."
  - text: "Isha"
    bucket: 0
    why: "Four becomes two on a trip."
  - text: "Witr"
    bucket: 1
    why: "Witr isn't shortened. Pray it as you do at home."
```

### 4 · choice
```yaml
pic: icon:Car
prompt: "Luis drives 150 miles for a 3-day work conference. At the hotel, how does he pray Dhuhr?"
options:
  - text: "Two rak'ahs"
    correct: true
    feedback: "Yes. A long trip and a short stay make him a traveler, so the four-rak'ah prayers become two."
  - text: "Four rak'ahs, as at home"
    correct: false
    feedback: "Not quite. A traveler shortens Dhuhr, Asr and Isha to two."
  - text: "He skips it and makes it up at home"
    correct: false
    feedback: "Not quite. Travel makes prayer shorter, not skippable. Pray it on time, as two."
```

### 5 · learn
```yaml
pic: icon:Thermometer
text: "**When you're sick.** The Prophet ﷺ told a man in pain: pray standing; if you can't, sitting; if you can't, lying on your side [Bukhari 1117]."
```

### 6 · prayer
```yaml
title: "Praying when you're sick"
intro: "Pray as you're able. Here's how it changes when you can't stand."
moves:
  - pose: qiyam
    text: "Stand if you can. Sit only if standing would be truly hard or harmful, not just tiring."
  - pose: jalsa
    text: "Then sit, on the floor or a chair, and pray as you know how."
  - pose: jalsa
    text: "Can't bow or prostrate? Nod your head instead…"
  - pose: jalsa
    text: "…and nod lower for prostration than for bowing [SeekersGuidance, sick person]."
  - pose: salam-right
    text: "End with the salam, as in every prayer."
done_text: "Can't sit either? Pray lying on your side [Bukhari 1117]."
```

### 7 · learn
```yaml
madhab_variant: true
pic: water
default: "**No water? Tayammum.** No water nearby, or water would harm you? Use clean earth instead [Q 5:6]. **Tayammum** (dry purification) replaces wudu or ghusl until something breaks it, or water can be used."
hanafi: "**No water? Tayammum.** No water within about a mile, or water would harm you? Use clean earth instead [Q 5:6]. **Tayammum** (dry purification) replaces wudu or ghusl until something breaks it, or water can be used."
```

### 8 · steps
```yaml
title: "How to do tayammum"
steps:
  - text: "Intend it in your heart and say *Bismillah*"
    pic: intention
  - text: "Strike your palms on clean earth"
    pic: "wudu:hands"
  - text: "Wipe your face"
    pic: "wudu:face"
  - text: "Wipe your hands"
    pic: "wudu:hands"
done_text: "{{masjid.name}} will show you its details: one strike or two, and how far up the arms."
variants:
  hanafi:
    steps:
      - text: "Intend it in your heart and say *Bismillah*"
        pic: intention
      - text: "Strike your palms on clean earth or stone"
        pic: "wudu:hands"
      - text: "Wipe your whole face"
        pic: "wudu:face"
      - text: "Strike your palms again"
        pic: "wudu:hands"
      - text: "Wipe your right arm up to and including the elbow, then your left"
        pic: "wudu:arms"
    done_text: "Two strikes: face, then arms. Use it only when water isn't an option."
```

### 9 · order
```yaml
prompt: "Your turn: put tayammum in order."
items:
  - "Intend it in your heart and say Bismillah"
  - "Strike your palms on clean earth"
  - "Wipe your face"
  - "Wipe your hands"
pics: ["intention", "wudu:hands", "wudu:face", "wudu:hands"]
feedback: "That's tayammum. Use it only when water isn't an option [Q 5:6]."
variants:
  hanafi:
    items:
      - "Intend it in your heart and say Bismillah"
      - "Strike your palms on clean earth or stone"
      - "Wipe your whole face"
      - "Strike your palms again"
      - "Wipe your right arm to the elbow, then your left"
    pics: ["intention", "wudu:hands", "wudu:face", "wudu:hands", "wudu:arms"]
    feedback: "That's tayammum: two strikes, face, then arms. Use it only when water isn't an option."
```

### 10 · scenario
```yaml
pic: icon:Hospital
situation: "Destiny is in the hospital after surgery. She's hooked to an IV, can't get out of bed, and can't wet her bandaged arm."
options:
  - text: "Ask a nurse for the qibla and a basin of water. Wash what she can and wipe over the bandage, or do tayammum if she can't. Then pray in bed, nodding"
    best: true
    feedback: "Yes. She does what she can, the way she can. That's exactly what these rules are for."
  - text: "Skip prayers until she's discharged, then make them all up"
    best: false
    feedback: "Not quite. Prayer stays due, but in a lighter form. Pray each one on time, however she can."
  - text: "Pull out the IV so she can make full wudu"
    best: false
    feedback: "Please don't. Allah doesn't ask us to harm ourselves. Wiping over the bandage, tayammum and praying in bed are allowed for this."
```

### 11 · learn
```yaml
madhab_variant: true
pic: "wudu:feet"
default: "**Wiping over socks.** The Prophet ﷺ wiped over his footwear instead of washing his feet [Muslim 276]. {{masjid.name}} will tell you which socks count, so ask your imam before you rely on it. `[SCHOLAR: Q12]`"
hanafi: "**Wiping over socks.** Put on leather **khuffs** or thick socks you can walk in normally (they cover the ankles) after a full wudu. At your next wudu, wipe the top of each with wet fingers [Abu Dawud 162]. `[SCHOLAR: Q12]`"
hanafi_bubbles:
  - "It lasts 24 hours at home, 3 days traveling [Muslim 276], counted from when your wudu breaks."
  - "Ordinary thin socks don't count in our school. `[SCHOLAR: Q12]`"
```

### 12 · ask_ai
```yaml
chips:
  - "How do I find the qibla on a plane or in a hotel?"
  - "Can I pray in my car or on a train?"
  - "Do my socks count for wiping?"
  - "I'm on a long trip. Do I pray the sunnah prayers?"
```

### 13 · do_today
```yaml
pic: icon:MapPin
text: "Before your next trip, plan one prayer on the road."
steps:
  - "Pick where you'll stop to pray"
  - "Work out how many rak'ahs it is"
  - "Know where the qibla is (save a qibla app if you don't have one)"
log: null
optional_extra: "Ask your imam what {{masjid.name}} teaches about wiping over socks."
```

### 14 · takeaway
```yaml
pic: icon:Compass
text: "Travel: shorten the four-rak'ah prayers to two. Sick: pray as you can. No water: tayammum. Socks: only ones your masjid's school accepts."
```

### 15 · closing
Allah doesn't want hardship for you [Q 5:6]. Wherever you are, you can still pray.

---

## Check
```yaml
- prompt: "Which prayers does a traveler shorten?"
  options:
    - text: "Dhuhr, Asr and Isha, from four rak'ahs to two"
      correct: true
      feedback: "Right. Fajr, Maghrib and witr stay the same."
    - text: "All five, by half"
      correct: false
      feedback: "Not quite. Only the four-rak'ah prayers shorten. Fajr, Maghrib and witr don't change."
- prompt: "When can you use tayammum?"
  options:
    - text: "When there's no water nearby, or using it would harm you"
      correct: true
      feedback: "Right [Q 5:6]. Water first; tayammum when it isn't an option."
    - text: "Whenever wudu feels inconvenient"
      correct: false
      feedback: "Not quite. Tayammum is for no water, or when water would harm you."
- prompt: "Someone can't stand because of illness. How do they pray?"
  options:
    - text: "Sitting, or lying down if they can't sit"
      correct: true
      feedback: "Right [Bukhari 1117]. Pray as you're able."
    - text: "They wait until they're well"
      correct: false
      feedback: "Not quite. Prayer stays due. Sit, or lie on your side if you can't sit [Bukhari 1117]."
```

## AI guide context
**Lesson facts**
- Shortening is a gift from Allah [Q 4:101; Muslim 686]. **Hanafi:** a journey of about 48–50 miles (77–81 km; SeekersGuidance says 48 miles, the masjid's manual 81 km) makes you a traveler once you leave your city's boundary; shortening the four-rak'ah prayers to two is wajib; it continues until you return or intend to stay 15+ days in one place; Fajr, Maghrib and witr aren't shortened; a traveler behind a resident imam prays the full four [First Instructions on Worship; SeekersGuidance (Tabraze Azam): when one is a traveler; questions on travel prayer; traveler behind a resident imam]. The Hanafi school doesn't combine prayers outside Hajj (Day 5). Jumu'ah isn't required of travelers (Day 11).
- Illness: pray standing; if unable, sitting; if unable, on the side [Bukhari 1117]. Hanafi: standing drops only for real hardship; sitting however is easiest (floor or chair); if unable to bow and prostrate, nod, lower for sujud than ruku'; if unable to sit, lie down (on the back with feet toward the qibla, or on the side) and nod [SeekersGuidance, sick person's prayer (al-Kharsa)].
- Tayammum is allowed without water or when water would harm [Q 5:6]. Hanafi: intend, Bismillah, strike clean earth or anything of the earth's surface (stone counts), wipe the whole face; strike again, wipe the right arm including the elbow, then the left. Water about a mile away counts as unavailable. Same method for wudu or ghusl [SeekersGuidance, how to make tayammum (Tabraze Azam)]. It ends with whatever breaks wudu, and when water can be used.
- Bandages and casts (screen 10): wash what can be washed and wipe over the bandage; if most of the wudu limbs can't be washed, or no one can help bring water, tayammum (Hanafi). Keep it general; details go to the imam.
- Socks (Q12): wiping over footwear is established [Muslim 274; Muslim 276]; wipe the top [Abu Dawud 162]. Hanafi: khuffs, or thick socks that cover the ankle and can be walked in normally (the classical tests: stay up by themselves, don't let water through); worn after full wudu; 24h resident / 72h traveler counted from the first time wudu breaks after putting them on [Muslim 276; SeekersGuidance, thick socks; Qibla 37169]. Ordinary thin socks: not valid in the Hanafi school; AMJA allows them [AMJA 78081]. Don't resolve.

**Likely questions**
- *"Qibla on a plane / train?"* Face it at the start if you can; if not possible, pray as you can and ask the imam whether to repeat (details differ by school and situation).
- *"Can I pray in my car?"* Fard prayers are prayed on the ground where possible; stop if you can. Routes for long drives: plan stops. Edge cases go to the imam.
- *"Sunnahs while traveling?"* Encourage the 2 before Fajr and witr (witr is required in the Hanafi school and isn't shortened); route the rest to the imam.
- *"What counts as 'leaving town'?"* Past the city's built-up limits/boundary.
- *"My socks: do they count?"* Describe the Hanafi tests; if unsure, wash the feet. Mention scholars differ; offer "Ask my imam".
- *"I'm on my period / need ghusl and have no water."* Tayammum works for ghusl too; on a period, prayer isn't due until it ends.

**Escalate:** chronic illness and ongoing medical conditions (incontinence, constant bleeding: special Hanafi rules for the "excused person"); long work travel or students living away (residency questions); wiping over casts or bandages; combining prayers for anyone following another school; anything medical (a doctor decides what's safe).

**Don't**
- Don't teach wiping over thin cotton socks as the masjid default, and don't call AMJA's view invalid.
- Don't present shortening as optional in the Hanafi variant (it's required for a traveler).
- Don't tell anyone to risk their health to stand or use water.
- Don't give a fixed distance as if all schools agree.

## Madhab note
Travel: the other three schools use a similar distance, but treat shortening as allowed rather than required, count a shorter stay as ending travel, and allow combining Dhuhr with Asr and Maghrib with Isha while traveling (Day 5). Tayammum: schools differ on one strike or two, and on wiping to the wrists or the elbows. Socks: see the madhab map; the Maliki school limits wiping to leather footwear, while the Hanbali school and AMJA are the most lenient.

## Sources
- Qur'an [4:101](https://quran.com/4/101), [5:6](https://quran.com/5/6).
- [Muslim 686](https://sunnah.com/muslim:686): shortening is a charity from Allah, so accept it.
- [Bukhari 1117](https://sunnah.com/bukhari:1117): pray standing, else sitting, else on your side.
- [Muslim 276](https://sunnah.com/muslim:276): wiping limit, three days for a traveler, one day for a resident; [Abu Dawud 162](https://sunnah.com/abudawud:162): wiping the top of the footwear (sahih, al-Albani).
- [[Source - First Instructions on Worship]]: traveler's prayer (shorten four to two; over 81 km; from leaving the city's buildings); tayammum defined.
- SeekersGuidance (Hanafi): [when one is a traveler](https://seekersguidance.org/answers/hanafi-fiqh/when-is-a-person-considered-a-traveler-who-can-shorten-their-prayers/) (48 miles; under 15 days); [questions on travel prayer](https://seekersguidance.org/answers/hanafi-fiqh/questions-regarding-prayer-while-traveling/) (from the city boundary; shortening wajib); [traveler behind a resident imam](https://seekersguidance.org/answers/hanafi-fiqh/a-traveler-praying-behind-a-resident-imam-do-i-shorten-my-prayers/); [how a sick person prays](https://seekersguidance.org/answers/hanafi-fiqh/how-should-a-sick-person-pray/); [how to make tayammum](https://seekersguidance.org/answers/hanafi-fiqh/how-to-make-dry-ablution-tayammum/); [wiping thick socks](https://seekersguidance.org/answers/wiping-thick-socks/).
- [Qibla via IslamQA.org 37169: wiping khuffs](https://islamqa.org/hanafi/qibla-hanafi/37169/wiping-khuffs/) (period counted from when wudu first breaks).
- [AMJA 78081](https://www.amjaonline.org/fatwa/en/78081/wiping-on-the-socks): wiping over ordinary socks permitted.
- [[Research Notes - Core Essentials and Madhab Map]]: socks row; tayammum.
- Wiping period (verified, T2 final review): [Qibla 37169: wiping khuffs](https://islamqa.org/hanafi/qibla-hanafi/37169/wiping-khuffs/); [SeekersGuidance: rules on wiping over khuffs](https://seekersguidance.org/answers/hanafi-fiqh/rules-regarding-wiping-over-khuffs-footgear/) (the 24h/72h period starts when wudu first breaks after putting them on).

## Scholar flags
- **Screen 11 (Q12).** Hanafi variant teaches leather khuffs and thick socks only and says ordinary thin socks don't count in our school (that other schools differ is in the Madhab note, per format 2); default variant says schools differ and to ask the imam. AMJA's permissive view is named in the Madhab note and AI context, not taught on screen.
