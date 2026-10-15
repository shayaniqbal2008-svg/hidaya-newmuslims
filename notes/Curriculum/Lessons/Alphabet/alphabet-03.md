---
track: alphabet
order: 3
phase: null
unit: null
title: "The cup family: jiim, Ḥaa, khaa"
hook: "One cup shape, three very different sounds."
minutes: 4
skills: [P4]
pain_points: [prayer-without-arabic, skill]
logs: []
madhab_sensitive: false
scholar_flags: []
status: draft-pending-scholar-review
glossary: []
sources: [Wikipedia (Arabic alphabet), Unicode Standard ch. 9 (Arabic), Lingua Libre recordings on Wikimedia Commons]
format: 2
---
# alphabet-03 · The cup family: jiim, Ḥaa, khaa

### 1 · hook
```yaml
pic: icon:Languages
text: "**Three letters, one cup.** This family shares a single shape, and one of them is a sound English doesn't have. Take your time with it."
```

### 2 · learn
```yaml
pic: icon:BookOpenText
text: "**One cup, three letters.** ج has a dot inside the cup. ح has no dot at all. خ has a dot on top."
```

### 3 · widget
```yaml
widget: letter
prompt: "Meet jiim, Ḥaa and khaa."
text: "Tap each letter. Press Hear it to listen."
letters: ["ج", "ح", "خ"]
```

### 4 · choice
```yaml
prompt: "Tap the letter you hear."
audio: "/audio/alphabet/06-haa.wav"
options:
  - text: "ج"
    correct: false
    feedback: "Not quite: that's jiim. Tap the speaker to hear it again."
  - text: "ح"
    correct: true
    feedback: "Yes, that's Ḥaa."
  - text: "خ"
    correct: false
    feedback: "Not quite: that's khaa. Tap the speaker to hear it again."
```

### 5 · choice
```yaml
prompt: "Tap the letter you hear."
audio: "/audio/alphabet/07-khaa.wav"
options:
  - text: "خ"
    correct: true
    feedback: "Yes, that's khaa."
  - text: "ح"
    correct: false
    feedback: "Not quite: that's Ḥaa. Tap the speaker to hear it again."
  - text: "ج"
    correct: false
    feedback: "Not quite: that's jiim. Tap the speaker to hear it again."
```

### 6 · learn
```yaml
pic: icon:Lightbulb
text: "**ح is new for most English speakers.** Breathe out hard from your throat, like fogging up a mirror. خ is rougher: it scrapes like the ch in \"loch\"."
```

### 7 · choice
```yaml
prompt: "Which letter has no dot?"
options:
  - text: "ح"
    correct: true
    feedback: "Yes. No dot is Ḥaa."
  - text: "ج"
    correct: false
    feedback: "Jiim has a dot inside the cup."
  - text: "خ"
    correct: false
    feedback: "Khaa has a dot on top."
```

### 8 · match
```yaml
prompt: "Match each letter to its name."
pairs:
  - left: "ج"
    right: "jiim"
  - left: "ح"
    right: "Ḥaa"
  - left: "خ"
    right: "khaa"
```

### 9 · ask_ai
```yaml
chips:
  - "How do I say ح?"
  - "What's the difference between ح and ه?"
  - "Is it okay if my accent isn't perfect?"
```

### 10 · do_today
```yaml
pic: icon:PenLine
text: "Say ح ten times today, like fogging a mirror. Then write ج ح خ once each."
log: null
```

### 11 · takeaway
```yaml
pic: icon:Sparkles
text: "ج dot inside, ح no dot, خ dot on top. ح is a breathy h from the throat."
```

### 12 · closing
Eight letters. The hardest sounds come early, so you're doing the tough part now.

---

## Check
```yaml
- prompt: "Which letter has a dot on top?"
  options:
    - text: "خ"
      correct: true
      feedback: "Right: khaa."
    - text: "ج"
      correct: false
      feedback: "Jiim's dot is inside the cup."
    - text: "ح"
      correct: false
      feedback: "Ḥaa has no dot."
- prompt: "How is ح said?"
  options:
    - text: "A breathy h from the throat"
      correct: true
      feedback: "Right. Like fogging up a mirror."
    - text: "Like the h in \"hat\""
      correct: false
      feedback: "That's ه. ح is breathier, from deeper in the throat."
```

## AI guide context
**Lesson facts**
- Optional alphabet track, lesson 3 of 12. Letters here: ج jiim, ح Ḥaa, خ khaa.
- ج ح خ share one base shape; dots: inside (ج), none (ح), above (خ). ح is a voiceless pharyngeal fricative (breathy, deep); خ is like the ch in 'loch'.
- Audio is the letter's name, read by a volunteer. Vowel marks come in lessons 9–11, real words in lesson 12.

**Likely questions**
- *"Do I need Arabic to pray?"* The prayer's fixed phrases are learned by heart, and the main path teaches them with transliteration. Reading Arabic helps over time; it isn't a gate.
- *"I can't make this sound."* Normal. Encourage listening and copying, and practising with someone at the masjid. Never shame an accent.
- *"Does a pronunciation mistake ruin my prayer?"* That's a question for the imam: offer "Ask my imam". Reassure that learners are expected to be learning.

**Escalate:** detailed tajweed rules; whether specific mistakes affect the prayer.

**Don't**
- Don't pile on rules beyond this lesson's letters.
- Don't suggest the convert is behind for not reading yet.

## Sources
- Letter names, shapes and joining: [Arabic alphabet (Wikipedia)](https://en.wikipedia.org/wiki/Arabic_alphabet); [The Unicode Standard, ch. 9: Arabic](https://www.unicode.org/versions/Unicode15.0.0/ch09.pdf).
- Recordings (Wikimedia Commons; volume evened out by Hidaya):
- ج jiim: [LL-Q13955 (ara)-AlNatiq-ج.wav](https://commons.wikimedia.org/wiki/File:LL-Q13955_%28ara%29-AlNatiq-%D8%AC.wav), recorded by AlNatiq for Lingua Libre, [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/).
- ح Ḥaa: [LL-Q13955 (ara)-AlNatiq-ح.wav](https://commons.wikimedia.org/wiki/File:LL-Q13955_%28ara%29-AlNatiq-%D8%AD.wav), recorded by AlNatiq for Lingua Libre, [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/).
- خ khaa: [LL-Q13955 (ara)-AlNatiq-خ.wav](https://commons.wikimedia.org/wiki/File:LL-Q13955_%28ara%29-AlNatiq-%D8%AE.wav), recorded by AlNatiq for Lingua Libre, [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/).
- [Full audio credits and licences](/audio/alphabet/ATTRIBUTIONS.md)
