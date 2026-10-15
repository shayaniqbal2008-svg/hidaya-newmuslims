---
day: 13
phase: 1
unit: 2
title: "What Muslims eat (and don't)"
hook: "Most of what you already eat is fine. Here are the few limits, and how to handle a family meal."
minutes: 5
skills: [S1, B4]
pain_points: [first-family-meal]
logs: []
madhab_sensitive: true
scholar_flags: [Q6]
status: draft-pending-scholar-review
glossary: [halal, haram, zabiha, Bismillah, imam, Allah]
sources: [Q 2:168, Q 2:173, Q 5:3, Q 5:5, Q 5:90, AMJA 83915, HFSAA (Meat of Ahlul Kitab), Field Guide ch. 1 and 11, Welcome to Islam D4, Research Notes - Core Essentials §6]
format: 2
---
# Day 13 · What Muslims eat (and don't)

### 1 · hook
```yaml
pic: icon:Utensils
text: "Food comes up fast: a family dinner, lunch with coworkers, a cookout. The good news first: **almost everything is halal** (allowed). The list of what's off-limits is short."
```

### 2 · learn
```yaml
pic: icon:Salad
text: "**Allah made good food for you.** The Qur'an invites people to eat what is lawful and good [Q 2:168]. Fruit, vegetables, grains, bread, rice, beans, eggs, dairy and fish are all fine."
bubbles:
  - "What's **haram** (forbidden) is a short list [Q 2:173; Q 5:3]. Sort it out on the next screen."
```

### 3 · sort
```yaml
prompt: "Halal or haram?"
buckets: ["Halal", "Haram"]
items:
  - text: "Rice, beans and eggs"
    bucket: 0
    why: "Grains, beans, eggs and dairy are all fine."
  - text: "Bacon and ham"
    bucket: 1
    why: "Pork, and anything made from it, is forbidden [Q 2:173]."
  - text: "A salmon fillet"
    bucket: 0
    why: "Fish is halal for everyone, whoever cooked it."
  - text: "Lard and pork gelatin"
    bucket: 1
    why: "Both are made from pork, so they're off-limits too."
  - text: "Blood"
    bucket: 1
    why: "Blood is on the Qur'an's short forbidden list [Q 2:173]."
  - text: "An animal that died without being slaughtered"
    bucket: 1
    why: "Meat from an animal that just died is forbidden [Q 5:3]."
  - text: "Fruit and vegetables"
    bucket: 0
    why: "All good. Most of your plate never needs a second thought."
```

### 4 · learn
```yaml
pic: icon:WineOff
text: "**Alcohol** is off-limits too: the Qur'an says to stay away from intoxicants [Q 5:90]. That means drinks and, to be careful, dishes made with wine or beer."
```

### 5 · steps
```yaml
title: "Reading a label"
intro: "Hidden pork and alcohol turn up in ingredients lists."
steps:
  - text: "Look for pork: lard, \"bacon bits\", ham"
    pic: icon:ScanLine
  - text: "Look for gelatin, in gummies and marshmallows. It's often from pork, and scholars differ on other kinds"
    pic: icon:Candy
  - text: "Look for alcohol, like wine sauces"
    pic: icon:Wine
  - text: "When in doubt, skip it or ask"
    pic: icon:CircleCheck
done_text: "Ten seconds a label, and it gets faster."
```

### 6 · multi
```yaml
pic: icon:Pizza
prompt: "At a party, which of these can you eat without worrying? Select all that apply."
options:
  - text: "Veggie pizza"
    correct: true
    feedback: "Yes. Cheese and vegetables are fine (just check no bacon or pepperoni slipped on)."
  - text: "A salmon fillet"
    correct: true
    feedback: "Yes. Fish is halal for everyone, whoever cooked it."
  - text: "Pepperoni pizza"
    correct: false
    feedback: "Not quite. Pepperoni is usually pork. Grab a slice of the veggie one instead."
  - text: "Regular gummy bears"
    correct: false
    feedback: "Not quite. Most contain pork gelatin. Look for halal or vegan gummies."
  - text: "Chicken cooked in white wine sauce"
    correct: false
    feedback: "Better to skip it. It's cooked with wine. Ask if there's a plain version."
  - text: "Apple pie made with butter"
    correct: true
    feedback: "Yes. Butter is fine. Only a lard crust would be a problem, so ask if unsure."
```

### 7 · learn
```yaml
madhab_variant: true
pic: icon:Beef
default: |
  **Meat is where it gets detailed.** For beef, chicken and lamb, the safe default is **zabiha** or **halal-certified** meat: slaughtered the Islamic way, with Allah's name said. Until you've asked your imam, stick to halal. `[SCHOLAR: Q6]`
hanafi: |
  **Meat is where it gets detailed.** For beef, chicken and lamb, eat **zabiha** or **halal-certified** meat: slaughtered the Islamic way, with Allah's name said. Stick to halal, and ask your imam about your situation. `[SCHOLAR: Q6]`
```

### 8 · reveal
```yaml
title: "Meat questions"
cards:
  - front: "What about ordinary supermarket meat?"
    back: "Scholars differ. Some say meat from Christians and Jews is allowed [Q 5:5]; many say US industrial meat doesn't meet the conditions. Until you've asked your imam, stick to halal. `[SCHOLAR: Q6]`"
    pic: icon:ShoppingCart
  - front: "And fish?"
    back: "Fish is halal for everyone, whoever cooked it."
    pic: icon:Fish
  - front: "A family dinner with ordinary meat?"
    back: "Go, eat the sides, and ask your imam about the meat."
    pic: family
variants:
  hanafi:
    cards:
      - front: "What about ordinary supermarket meat?"
        back: "The Qur'an allows the food of Christians and Jews [Q 5:5], but many Hanafi scholars say ordinary US supermarket meat doesn't meet the conditions [HFSAA]. So stick to halal. `[SCHOLAR: Q6]`"
        pic: icon:ShoppingCart
      - front: "And fish?"
        back: "Fish is halal for everyone, whoever cooked it."
        pic: icon:Fish
      - front: "A family dinner with ordinary meat?"
        back: "Go, eat the sides, and ask your imam about the meat."
        pic: family
```

### 9 · scenario
```yaml
pic: family
situation: "Ana's family is having a cookout. There are pork ribs, burgers from the supermarket, grilled corn, potato salad and fruit. Her aunt asks why she isn't eating."
options:
  - text: "Fill up on the corn, salad and fruit, maybe bring halal burgers to share, and explain kindly"
    best: true
    feedback: "Yes. She stays at the table, eats what's fine, and turns it into a kind moment."
  - text: "Skip the cookout so she isn't tempted"
    best: false
    feedback: "Not quite. Family time matters. She can go and eat what's halal. Ties come first."
  - text: "Eat a rib so nobody feels awkward"
    best: false
    feedback: "Not quite. Pork is clearly forbidden. A smile and \"I don't eat pork now\" is enough."
```

### 10 · learn
```yaml
pic: icon:HeartHandshake
text: "**At the table, stay:** family time matters. Eat the sides, bring a dish to share, and keep it simple: *\"I don't eat pork or drink anymore.\"*"
bubbles:
  - "Start each meal with *Bismillah* (in the name of Allah). And an honest slip isn't a sin."
  - "{teen}If you're under 18 and don't cook at home, eat the halal options, decline pork politely, and ask {{mentor.name}} about the meat.{/teen}"
```

### 11 · ask_ai
```yaml
chips:
  - "Is ordinary chicken from the grocery store halal?"
  - "Can I eat at McDonald's or Chick-fil-A?"
  - "What about vanilla extract or soy sauce?"
  - "My mom keeps cooking with pork. What do I say?"
```

### 12 · do_today
```yaml
pic: icon:ScanLine
text: "Do a kitchen check."
steps:
  - "Find one thing with pork, gelatin or alcohol in it"
  - "Find one halal swap for it"
  - "Find the nearest store that sells halal meat"
log: null
optional_extra: "Ask {{mentor.name}} where people at {{masjid.name}} buy halal meat."
```

### 13 · takeaway
```yaml
pic: icon:Utensils
text: "Almost all food is halal. Skip pork, alcohol and blood; for meat, default to zabiha or certified halal and ask your imam."
```

### 14 · closing
You don't have to empty your fridge today. One swap at a time.

---

## Prayer phrase
```yaml
arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ"
translit: "Iyyaka na'budu wa iyyaka nasta'in"
meaning: "It is You we worship and You we ask for help"
audio_id: fatiha-5
when: "Al-Fatiha, line 4 (after Maliki yawmid-din). The heart of the chapter: just you and Allah. [Q 1:5]"
```

## Check
```yaml
- prompt: "Which of these is clearly forbidden to eat?"
  options:
    - text: "Pork, including bacon and pork gelatin"
      correct: true
      feedback: "Right [Q 2:173]. Check labels for hidden pork, like gelatin and lard."
    - text: "Fish from a regular restaurant"
      correct: false
      feedback: "Not quite. Fish is halal. Pork is what's clearly forbidden [Q 2:173]."
- prompt: "What's the safe default for beef and chicken?"
  options:
    - text: "Zabiha or halal-certified meat, and ask your imam about the rest"
      correct: true
      feedback: "Right. Scholars differ on ordinary meat, so start with halal and ask your imam."
    - text: "Any meat is fine as long as it isn't pork"
      correct: false
      feedback: "Not quite. Scholars differ on ordinary meat. Start with zabiha or certified halal."
```

## AI guide context
**Lesson facts**
- Eat what is lawful and good [Q 2:168]. Forbidden: carrion, blood, pork, what's dedicated to other than Allah [Q 2:173; Q 5:3]; intoxicants [Q 5:90].
- In real necessity (no other food, risk to life), eating the forbidden is excused [Q 2:173]. Not relevant to ordinary meals; don't over-apply.
- Meat (Q6, drafted): default to zabiha or halal-certified; scholars differ on ordinary meat. AMJA: meat from People of the Book slaughtered properly is halal, with caution for cross-contamination [AMJA 83915; Q 5:5]. HFSAA and many Hanafi scholars: ordinary US commercial meat doesn't qualify [HFSAA]. Family dinners with non-zabiha meat: ask the imam.
- Fish is halal in all schools. Other seafood: schools differ (the Hanafi school is more restrictive); don't rule, send to the imam.
- Honest mistakes while learning aren't sins [SeekersGuidance, convert following a school]. Keep your family's recipes with halal swaps [Field Guide ch. 1]. Say Bismillah before eating, eat with the right hand [Field Guide ch. 11].

**Likely questions**
- *"Grocery-store chicken?"* Scholars differ (Q6); default to halal-certified; ask the imam. Don't call those who eat it sinners.
- *"Fast food?"* Same meat question; plus cross-contamination with pork. Fish and veggie options are the easy route. Don't name or rule on specific chains.
- *"Vanilla extract, soy sauce, mouthwash?"* Trace alcohol in ingredients: scholars differ; many allow tiny amounts not used to intoxicate. Don't rule; ask the imam if it matters to them.
- *"Mom keeps cooking with pork."* Thank her for cooking; offer to bring or cook a dish; explain gently; never shame her.
- *"I ate pork by accident."* No sin in an honest mistake; no need to do anything special.

**Escalate:** a convert's household meat situation (especially a teen who doesn't control the food); medications with gelatin or alcohol (also see a doctor or pharmacist); working at a job that handles pork or alcohol (Day 68).

**Don't**
- Don't tell them all non-zabiha meat is definitely haram or definitely halal (Q6).
- Don't push them to skip family meals.
- Don't overload with every E-number and ingredient rule.

## Madhab note
Meat of Christians and Jews (People of the Book): all four schools allow it in principle [Q 5:5] when properly slaughtered. They differ on whether saying Allah's name is a condition (Hanafi, Maliki when remembered, Hanbali: yes; Shafi'i: recommended), and contemporary scholars differ on whether US industrial meat meets the conditions. Seafood: the Hanafi school allows only fish; Hanafi scholars differ on shrimp (many contemporary ones permit it as a kind of fish, others don't); the other schools allow most seafood.

## Sources
- Qur'an [2:168](https://quran.com/2/168), [2:173](https://quran.com/2/173), [5:3](https://quran.com/5/3), [5:5](https://quran.com/5/5), [5:90](https://quran.com/5/90); [1:5](https://quran.com/1/5) (Arabic copied from the quran.com text).
- [AMJA 83915: Difference between zabihah and non-zabihah](https://www.amjaonline.org/fatwa/en/83915/difference-between-zabihah-and-non-zabihah); [HFSAA: Meat of Ahlul Kitab](https://www.hfsaa.org/articles/ahlul-kitab-meat).
- Seafood (Madhab note): [Darul Iftaa Birmingham 170615: what seafood other than fish is halal](https://islamqa.org/hanafi/daruliftaa-birmingham/170615/what-seafood-other-than-fish-is-halal/); [Darul Uloom Trinidad 149237: the ruling of prawns/shrimps](https://islamqa.org/hanafi/darululoomtt/149237/the-ruling-of-prawns-shrimps/).
- [[Source - The New Muslims Field Guide]] ch. 1 (keep your family's recipes, swap out pork and alcohol), ch. 11 (Bismillah, right hand, read labels). [[Source - Welcome to Islam]] Day 4 (diet).
- [[Research Notes - Core Essentials and Madhab Map]] §6 and the madhab table (meat of the People of the Book; tasmiya by school).

## Scholar flags
- **Screens 7–8 (Q6).** Drafted as: default to zabiha or halal-certified meat (screen 7); scholars differ on ordinary meat; ask your imam (and about family dinners) (screen 8's cards). The Hanafi variant of screen 8 notes many Hanafi scholars hold US commercial meat doesn't qualify.
- **Madhab note, seafood.** Verified (T2 final review): Hanafi allows only fish from the sea [Darul Iftaa Birmingham 170615]; Hanafi scholars differ on shrimp [Darul Uloom Trinidad 149237]. The earlier "most Hanafi scholars count shrimp as fish" was overstated and is corrected.
