---
day: 51
phase: 2
unit: 7
title: "Food in real life"
hook: "Ingredient lists, restaurant menus, Sunday dinner at Mom's. Eating halal without making every meal a fight."
minutes: 5
skills: [B4]
pain_points: [family-meals]
logs: []
madhab_sensitive: true
scholar_flags: [Q6, Q34]
status: draft-pending-scholar-review
glossary: [halal, haram, zabiha, Allah]
sources: [Q 2:168, Q 2:173, Q 5:5, Q 5:90, Q 5:96, Q 31:14–15, Bukhari 52, AMJA 83915, HFSAA (Ahlul Kitab meat), Welcome to Islam D4, Research Notes - Core Essentials (meat row)]
format: 2
---
# Day 51 · Food in real life

### 1 · hook
```yaml
pic: icon:Utensils
text: "You know the basics from Day 13. Now real life: labels, menus, friends ordering pizza, and a family dinner you don't want to turn into a debate."
```

### 2 · learn
```yaml
pic: icon:ShoppingCart
text: "**Start with yes.** Allah tells people to eat what is **halal** (allowed) and good [Q 2:168]. The **haram** (off-limits) list is short: pork, blood, animals that died on their own, anything offered to other than Allah [Q 2:173], and alcohol [Q 5:90]."
bubbles:
  - "Most of a grocery store is fine: bread, rice, beans, eggs, dairy, fruit, vegetables, and fish [Q 5:96]."
  - "The tricky parts are meat and a few hidden ingredients."
```

### 3 · multi
```yaml
pic: icon:Salad
prompt: "Which of these are fine to eat without a halal label?"
options:
  - text: "Rice and black beans"
    correct: true
    feedback: "Yes. Plant foods are halal unless something haram is cooked into them."
  - text: "A grilled salmon fillet"
    correct: true
    feedback: "Yes. Fish is halal, no special slaughter needed."
  - text: "Gummy bears made with pork gelatin"
    correct: false
    feedback: "Not quite. Gelatin made from pork is still pork. Look for fish, plant-based or halal gelatin."
  - text: "Scrambled eggs with cheese"
    correct: true
    feedback: "Yes. Eggs and dairy are fine."
  - text: "A pepperoni pizza"
    correct: false
    feedback: "Not quite. Pepperoni is usually pork. A cheese or veggie pizza works."
```

### 4 · learn
```yaml
pic: icon:Drumstick
text: "**Meat: our default.** At {{masjid.name}}, we teach eating **zabiha** (slaughtered by hand, with Allah's name said) or halal-certified meat. Every scholar accepts it, so it settles the question. Can't find any? Choose vegetarian or fish. `[SCHOLAR: Q6]`"
bubbles:
  - "Why a default? Scholars differ on ordinary meat. The Qur'an allows the food of Jews and Christians [Q 5:5]. AMJA says that includes meat they slaughter properly [AMJA 83915]."
  - "HFSAA says most US commercial meat doesn't qualify: the slaughterer's faith is unknown, and machines and stunning are used [HFSAA]."
  - "A meal at your family's table is its own question. Ask your imam about your situation. `[SCHOLAR: Q6]`"
```

### 5 · fill
```yaml
before: "At {{masjid.name}}, the default for meat is"
after: "or halal-certified."
options:
  - text: "zabiha"
    correct: true
    feedback: "Yes. Slaughtered by hand with Allah's name said. Every scholar accepts it, so it settles the question."
  - text: "any meat except pork"
    correct: false
    feedback: "Not quite. Some scholars accept ordinary meat, but our default is zabiha or certified."
  - text: "no meat at all"
    correct: false
    feedback: "Not quite. Meat is fine: zabiha or certified. Vegetarian or fish is just the backup."
```

### 6 · scenario
```yaml
pic: family
situation: "Your mom makes her famous roast chicken for Sunday dinner. It's not zabiha, and she's proud of it."
options:
  - text: "Sit with everyone, enjoy the sides, and gently say you're keeping to halal meat. Offer to bring some next time"
    best: true
    feedback: "Kind and steady. You keep the meal and your practice. Ask your imam about family dinners, since scholars differ."
  - text: "Refuse to sit at the table with non-halal food"
    best: false
    feedback: "Not quite. Being good to your parents matters [Q 31:14–15]. You can sit with them and skip a dish."
  - text: "Eat it to avoid upsetting her, and just never think about it"
    best: false
    feedback: "Understandable, but don't settle it alone. Ask your imam; he'll help you find a peaceful way."
```

### 7 · steps
```yaml
title: "Reading a label"
intro: "A quick look takes seconds and gets easier fast."
steps:
  - text: "Find the ingredient list"
    pic: icon:ScanBarcode
  - text: "Watch for gelatin (often pork), lard and bacon bits [Welcome D4]"
    pic: icon:Search
  - text: "Watch for food cooked with wine, beer or liquor"
    pic: icon:Wine
  - text: "Small amounts of alcohol in flavorings, like vanilla extract, are something scholars differ on. Ask your imam. `[SCHOLAR: Q34]`"
    pic: icon:MessageCircle
  - text: "Not sure? It's fine to skip it and ask later [Bukhari 52]"
    pic: icon:Signpost
```

### 8 · sort
```yaml
prompt: "Spotted on a label: fine, or skip it?"
buckets: ["Fine", "Skip it"]
items:
  - text: "Pork gelatin"
    bucket: 1
    why: "Gelatin made from pork is still pork."
  - text: "Fish gelatin"
    bucket: 0
    why: "Fish is halal [Q 5:96], so gelatin from fish is fine."
  - text: "Lard"
    bucket: 1
    why: "Lard is pork fat."
  - text: "Plant-based gelatin"
    bucket: 0
    why: "Made from plants, so it's fine."
  - text: "Sauce made with wine"
    bucket: 1
    why: "Food cooked with wine, beer or liquor is off-limits."
  - text: "Bacon bits"
    bucket: 1
    why: "Bacon is pork."
```

### 9 · reveal
```yaml
title: "Eating out"
cards:
  - front: "Friends want burgers at a regular place"
    back: "Order a fish sandwich, veggie burger or fries, and ask if fries share a fryer with bacon or pork. AMJA advises care with fast food for this reason [AMJA 83915]."
    pic: icon:Sandwich
  - front: "A dish with wine in the sauce"
    back: "Skip it or ask for it without. Cooking doesn't make wine halal in our default."
    pic: icon:Wine
  - front: "Refried beans or tortillas"
    back: "Sometimes made with lard (pork fat). It's okay to ask."
    pic: icon:CookingPot
  - front: "A place says 'halal'"
    back: "Great. If you're unsure, ask who certifies it. Most owners are glad to tell you."
    pic: icon:Store
```

### 10 · ask_ai
```yaml
chips:
  - "How do I find zabiha meat near me?"
  - "Is vanilla extract okay?"
  - "What do I say when a friend offers me a beer?"
  - "My parents cook for me. What should I do?"
```

### 11 · do_today
```yaml
pic: icon:ScanBarcode
text: "Check your kitchen, and find your halal spot."
steps:
  - "Check three labels in your kitchen for gelatin, lard and alcohol"
  - "Find one halal grocery or restaurant near you (ask {{mentor.name}}, or search an app like Zabihah)"
log: null
optional_extra: "{teen}If your parents cook for you, don't take this on alone. Talk to {{mentor.name}} or your imam first. Nobody expects you to fight your family over dinner.{/teen}"
```

### 12 · takeaway
```yaml
pic: icon:Utensils
text: "Most food is halal. For meat, our default is zabiha or certified; for family meals, ask your imam. When unsure, skip it and ask."
```

### 13 · closing
Every label you check is a small act of care for your faith. It gets automatic sooner than you think.

---

## Check
```yaml
- prompt: "What does {{masjid.name}} teach as the default for meat?"
  options:
    - text: "Zabiha or halal-certified meat"
      correct: true
      feedback: "Right. Every scholar accepts it. Scholars differ on ordinary meat, so ask your imam about your situation."
    - text: "Any meat except pork"
      correct: false
      feedback: "Not quite. Some scholars accept ordinary meat, but our default is zabiha or certified."
- prompt: "You're not sure if a snack has pork gelatin. What's a good move?"
  options:
    - text: "Skip it for now and check later"
      correct: true
      feedback: "Right. Leaving what you're unsure of protects your faith [Bukhari 52]."
    - text: "Eat it; uncertainty doesn't matter"
      correct: false
      feedback: "Not quite. When in doubt, it's better to leave it and find out [Bukhari 52]."
```

## AI guide context
**Lesson facts**
- Halal is the default; the forbidden list is short: pork, blood, carrion, what's offered to other than Allah [Q 2:173], intoxicants [Q 5:90]. Eat what is lawful and good [Q 2:168]. Fish is halal [Q 5:96].
- Ordinary US meat is contested: AMJA holds meat of Jews and Christians slaughtered by a proper method is halal [Q 5:5; AMJA 83915] and still urges care with fast food (cross-contamination); HFSAA holds mainstream US commercial meat doesn't qualify (uncertain slaughterer, mechanical slaughter, stunning). The masjid default is zabiha or halal-certified (Q6).
- Family meals: never resolved by the guide. Encourage keeping the relationship [Q 31:14–15] and asking the imam.
- Pork gelatin, lard and food cooked with alcohol are avoided; trace alcohol in flavorings is debated (NEW scholar question).
- Leaving doubtful things protects one's religion [Bukhari 52].

**Likely questions**
- *"Is McDonald's / a chain's chicken halal?"* Explain the two views, the masjid default (zabiha/certified), and cross-contamination concerns; don't rule on a specific chain.
- *"Is vanilla extract / soy sauce okay?"* Scholars differ on small amounts of alcohol in ingredients; give the cautious path (choose alcohol-free versions where easy) and offer "Ask my imam".
- *"Shrimp, crab, lobster?"* Schools differ on seafood other than fish; say so and route to the imam. Fish is fine everywhere.
- *"A friend offers me a beer."* Practice a friendly no: "I'm good, thanks. I don't drink." Offer a role-play.
- *"My parents cook for me."* Especially for teens: no confrontation; talk to the mentor or imam; suggest offering to cook or bring halal meat sometimes.

**Escalate:** eating non-zabiha meat at family meals (Q6); specific ingredient questions the guide can't answer from this lesson; working in a restaurant or store that sells pork or alcohol (Day 68 territory).

**Don't**
- Don't call people who eat ordinary meat sinners or say AMJA's view is invalid; don't call zabiha "extreme".
- Don't tell a teen to refuse the food their parents serve or to argue at the table.
- Don't rule on contested ingredients (gelatin from non-pork animals, trace alcohol, shellfish).

## Madhab note
Schools differ on whether saying Allah's name (tasmiya) is a condition when slaughtering: required in the Hanafi school (forgetting is excused), required when remembered in the Maliki school, a sunnah in the commonly cited Shafi'i view, and required in the Hanbali school if not omitted deliberately. This shapes how each school views ordinary meat. Many contemporary Hanafi scholars, and HFSAA, hold that US commercial meat doesn't meet the conditions. Schools also differ on seafood other than fish.

## Sources
- Qur'an [2:168](https://quran.com/2/168), [2:173](https://quran.com/2/173), [5:5](https://quran.com/5/5), [5:90](https://quran.com/5/90), [5:96](https://quran.com/5/96), [31:14–15](https://quran.com/31/14-15).
- [Bukhari 52](https://sunnah.com/bukhari:52): the halal is clear, the haram is clear, and avoiding doubtful things protects your religion.
- [AMJA 83915](https://www.amjaonline.org/fatwa/en/83915/difference-between-zabihah-and-non-zabihah): meat of the People of the Book slaughtered properly is halal; care with fast food.
- [HFSAA: Meat of Ahlul Kitab](https://www.hfsaa.org/articles/ahlul-kitab-meat): mainstream US commercial meat doesn't qualify.
- [[Source - Welcome to Islam]] Day 4 (check ingredients like gelatin; alcohol).
- [[Research Notes - Core Essentials and Madhab Map]] §6 and the meat row of the madhab map (tasmiya by school).

## Scholar flags
- **Screen 4, with the family-dinner scenario on screen 6 (Q6).** Both views on ordinary meat presented (AMJA vs HFSAA); the masjid default is zabiha or certified; family dinners go to the imam. No ruling on eating non-zabiha meat at family meals.
- **Screen 7, step 4 ([SCHOLAR: Q34], trace alcohol and gelatin).** Drafted cautiously: avoid pork gelatin, lard and food cooked with alcohol; small amounts of alcohol in flavorings (vanilla extract) are named as a difference of opinion, not ruled on. Needs a scholar position on trace alcohol and on gelatin from non-zabiha (non-pork) animals.
