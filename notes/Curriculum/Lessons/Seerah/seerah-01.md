---
track: seerah
order: 1
phase: null
unit: null
title: "Arabia and the House of Ibrahim"
hook: "Long before Islam, a valley in the desert already had a House built for one God."
minutes: 6
skills: [T2, B6]
pain_points: [identity, culture-vs-religion]
logs: []
madhab_sensitive: false
scholar_flags: []
status: draft-pending-scholar-review
glossary: [Allah, ﷺ, Ka'bah, Makkah, Ibrahim, Isma'il, tawaf, Hajj, Umrah, tawhid, qibla, seerah, Quraysh]
sources: [Q 2:127, Q 14:37, Bukhari 4287, IslamQA 11575, Dar al-Ifta Egypt (seerah part 1), Qalam Institute Sirah Podcast ep. 4, Qalam Institute Sirah Podcast ep. 8]
format: 2
---
# seerah-01 · Arabia and the House of Ibrahim

### 1 · hook
```yaml
pic: kaaba
text: "**A dry valley. No river, no farms.** A father and his son lift stones, one on top of another, building a House for the One God. His story starts here, thousands of years before he was born."
```

### 2 · learn
```yaml
pic: icon:ScrollText
text: "**Welcome to the seerah,** the life story of the Prophet ﷺ. In short episodes, you'll walk through his life in order, one story at a time. This track is optional. Go at your own pace."
bubbles:
  - "You met him on Day 15. This picks up everything Day 15 didn't have room for."
  - "Every fact here has a source. Where the early sources are unsure, we tell you. Stories with weak chains of narration are left out."
```

### 3 · widget
```yaml
widget: timeline
prompt: "The House, before he was born"
text: "Tap through how the valley got here."
events:
  - when: "Long ago"
    title: "A family in a valley"
    text: "Ibrahim (Abraham) settled some of his family in a valley with no crops, near the House, praying they would establish prayer [Q 14:37]."
    pic: icon:TreePalm
  - when: "Long ago"
    title: "Raising the House"
    text: "Ibrahim and his son Isma'il (Ishmael) raised the foundations of the Ka'bah together [Q 2:127]."
    pic: kaaba
  - when: "Centuries later"
    title: "Idols arrive"
    text: "A man named 'Amr ibn Luhayy is reported to be the first to bring idols to Makkah [IslamQA 11575; Qalam ep. 4]."
    pic: icon:Landmark
  - when: "Just before his birth"
    title: "A trading town"
    text: "The tribe of Quraysh ran Makkah. Its caravans travelled north to Syria and south to Yemen [Dar al-Ifta 167; Qalam ep. 8]."
    pic: icon:Route
  - when: "By his time"
    title: "360 idols"
    text: "When Makkah was finally opened to Islam, 360 idols stood around the Ka'bah [Bukhari 4287]."
    pic: icon:Castle
```

### 4 · learn
```yaml
pic: kaaba
text: "**A House built for one God.** As Ibrahim and Isma'il raised the **Ka'bah** (the cube-shaped House in Makkah), they prayed: *\"Our Lord, accept [this] from us. Indeed, You are the Hearing, the Knowing\"* [Q 2:127, Saheeh Intl.]."
bubbles:
  - "That's the House you turn toward in every prayer. Your **qibla** (prayer direction) points to something a father and son built for Allah."
```

### 5 · choice
```yaml
pic: icon:MessageCircle
prompt: "A coworker sees a photo of the Ka'bah on your phone: \"So Muslims worship a black box?\" What's the accurate answer?"
options:
  - text: "No. We worship Allah alone. The Ka'bah is the House Ibrahim built for Him, and it gives us one direction to face"
    correct: true
    feedback: "Right. The building isn't worshipped. It points everyone, everywhere, toward the One God."
  - text: "Yes, it's the holiest object in Islam"
    correct: false
    feedback: "Not quite. It's honoured, but only Allah is worshipped. The Ka'bah gives Muslims one direction to face."
  - text: "It's where Allah lives"
    correct: false
    feedback: "Not quite. Allah isn't contained in a building. It's called His House because it was built for His worship."
```

### 6 · learn
```yaml
pic: icon:Landmark
text: "**The shell without the heart.** Over the centuries, the Arabs kept parts of Ibrahim's way: honouring the Ka'bah, **tawaf** (circling it), **Hajj** and **Umrah** (the pilgrimages), and sacrifice. But they added idols [IslamQA 11575; Dar al-Ifta 167]."
bubbles:
  - "Some customs had become cruel: burying baby daughters, crushing debts with interest, and blood feuds passed from one generation to the next [IslamQA 11575; Dar al-Ifta 167]."
```

### 7 · sort
```yaml
prompt: "Sort what the Arabs kept from Ibrahim's way, and what they added later."
buckets: ["Kept from Ibrahim", "Added later"]
items:
  - text: "Honouring the Ka'bah"
    bucket: 0
    why: "Ibrahim and Isma'il built it for Allah, and the Arabs still honoured it."
  - text: "Idols around the Ka'bah"
    bucket: 1
    why: "Added later. 'Amr ibn Luhayy is reported to be the first to bring idols to Makkah."
  - text: "Hajj and Umrah"
    bucket: 0
    why: "The pilgrimages go back to Ibrahim. The Arabs kept them, with idols mixed in."
  - text: "Burying baby daughters"
    bucket: 1
    why: "Added later: one of the cruel customs that had nothing to do with Ibrahim."
  - text: "Circling the Ka'bah in tawaf"
    bucket: 0
    why: "Kept from Ibrahim's way. Muslims still do tawaf today."
```

### 8 · learn
```yaml
pic: icon:HandHeart
text: "**Not all bad, either.** The same Arabs were known for generosity, loyalty and courage [IslamQA 11575]. Islam didn't come to erase a people. It came to bring back **tawhid** (the worship of the One God), which had been in that valley all along."
```

### 9 · scenario
```yaml
pic: conversation
situation: "Ana grew up in a big, warm family: Sunday dinners, giving to neighbours, honesty drilled in since childhood. A new Muslim friend tells her, \"Everything from your old life was wrong. Start from zero.\""
options:
  - text: "Keep the good she grew up with, and let go only of what clashes with worshipping Allah alone"
    best: true
    feedback: "Yes. That's what Islam did in Arabia: it kept generosity and loyalty, and removed idols and cruelty."
  - text: "Throw out everything from before, family habits included"
    best: false
    feedback: "Not quite. Her generosity and honesty are good. Islam came to restore what's good, not erase her."
  - text: "Change nothing; her culture is fine as it is"
    best: false
    feedback: "Not quite. Some things may need to change, gently. Worship belongs to Allah alone."
```

### 10 · ask_ai
```yaml
chips:
  - "Who was Ibrahim in Islam?"
  - "Why do Muslims face the Ka'bah?"
  - "What was Arabia like before Islam?"
  - "What from my old life can I keep?"
```

### 11 · do_today
```yaml
pic: kaaba
text: "Carry this into your next prayer."
steps:
  - "As you face the qibla, remember: you're facing the House Ibrahim and Isma'il built for Allah"
  - "After the prayer, ask Allah in your own words to accept it from you, like they did"
log: null
```

### 12 · takeaway
```yaml
pic: kaaba
text: "Islam didn't bring a new God to Makkah. It brought people back to the One God that House was built for."
```

### 13 · closing
Next episode: an army, an elephant, and a baby born in the same year.

---

## Check
```yaml
- prompt: "Who raised the foundations of the Ka'bah, according to the Qur'an?"
  options:
    - text: "Ibrahim and his son Isma'il"
      correct: true
      feedback: "Right. They raised it and prayed for Allah to accept it [Q 2:127]."
    - text: "The tribe of Quraysh"
      correct: false
      feedback: "Not quite. Quraysh ran Makkah much later. Ibrahim and Isma'il raised the House [Q 2:127]."
- prompt: "Before Islam, what had happened to Ibrahim's way in Makkah?"
  options:
    - text: "The Arabs kept parts of it, like Hajj and tawaf, but added idols"
      correct: true
      feedback: "Right. The shell was there; worship of the One God had been mixed with idols."
    - text: "It had disappeared completely"
      correct: false
      feedback: "Not quite. They still honoured the Ka'bah and made Hajj, but with idols added."
```

## AI guide context
**Lesson facts**
- Ibrahim and Isma'il raised the foundations of the House and asked Allah to accept it [Q 2:127]. Ibrahim settled some of his descendants in an uncultivated valley near the sacred House so they would establish prayer [Q 14:37].
- Before Islam, the Arabs kept parts of Ibrahim's religion (honouring the Ka'bah, tawaf, Hajj and Umrah, sacrifice) but added idol worship; some customs were cruel (burying daughters, usury, blood feuds) [IslamQA 11575; Dar al-Ifta Egypt, seerah part 1].
- They also had real virtues: generosity, loyalty and courage [IslamQA 11575].
- 'Amr ibn Luhayy is *reported* to be the first to bring idols to Makkah (a seerah report: say "is reported") [IslamQA 11575; Qalam ep. 4].
- Makkah was a trading town run by Quraysh, with caravans to Syria and Yemen [Dar al-Ifta Egypt, seerah part 1; Qalam ep. 8]. When Makkah was opened, 360 idols stood around the Ka'bah [Bukhari 4287].

**Likely questions**
- *"Do Muslims worship the Ka'bah?"* No. Allah alone is worshipped; the Ka'bah is the House built for His worship and the direction of prayer. Day 2 and Day 47 cover it.
- *"Who was Ibrahim?"* A prophet honoured by Jews, Christians and Muslims; Day 39 and the eid-adha module cover him and Isma'il. Hajar's story is in eid-adha.
- *"Was everything before Islam bad?"* No. Name the virtues (generosity, loyalty, courage). Islam restored worship of the One God and ended cruel customs.
- *"What can I keep from my old life?"* General principle: what's good and doesn't clash with tawhid stays (family ties, kindness, honesty, much of one's culture). Specific practices (holidays, foods, names, music) are questions for the imam; point to Day 35 and the holiday modules.
- *"Who was 'Amr ibn Luhayy?"* Say only that the early sources report he was the first to bring idols to Makkah. Don't add detail beyond this.

**Escalate:** a specific family tradition or holiday the convert wants to keep (Q5 territory), and any question about the convert's former religion that turns into a ruling.

**Don't**
- Don't compare the convert's former religion to the idol worship of Makkah, or call it a "shell". The lesson is about pre-Islamic Arabia only.
- Don't describe pre-Islamic Arabs as all bad.
- Don't describe or picture Ibrahim, Isma'il or the Prophet ﷺ.
- Don't state 'Amr ibn Luhayy's role as certain; it's "reported".

## Sources
- Qur'an [2:127](https://quran.com/2/127) (Ibrahim and Isma'il raise the House), [14:37](https://quran.com/14/37) (the uncultivated valley near the House).
- [Bukhari 4287](https://sunnah.com/bukhari:4287) (Sahih): 360 idols around the Ka'bah when Makkah was opened.
- [IslamQA 11575, *Who Is Muhammad?*](https://islamqa.info/en/answers/11575): pre-Islamic Arab virtues and customs, what they kept of Ibrahim's religion, 'Amr ibn Luhayy.
- [Dar al-Ifta Egypt, *A Closer Look at the World before the Advent of Prophet Muhammad (part 1)*](https://www.dar-alifta.org/en/article/details/167/a-closer-look-at-the-world-before-the-advent-of-prophet-muhammadpart-1): pre-Islamic society and Makkah's trade.
- Qalam Institute, *The Sīrah Podcast* (Abdul Nasir Jangda): [ep. 4, Pre-Islamic society pt. 2](https://www.qalaminstitute.org/2011/10/seerah-life-of-the-prophet-pre-islamic-society-pt-2/) ('Amr ibn Luhayy); [ep. 8, The Prophet's parents](https://www.qalaminstitute.org/2012/01/seerah-life-of-the-prophet-the-prophets-parents/) (Quraysh's caravans).
- Fact rows 01.1–01.6 in [[Seerah Fact-Check Log]].
