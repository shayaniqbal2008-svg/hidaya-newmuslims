---
track: alphabet
order: 1
phase: null
unit: null
title: "Three letters, one shape: baa, taa, thaa"
hook: "Your first Arabic letters: one shape, three sets of dots."
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
# alphabet-01 · Three letters, one shape: baa, taa, thaa

### 1 · hook
```yaml
pic: icon:Languages
text: "**Your first three letters.** Many Arabic letters come in families: one shape, told apart by dots. Meet the first family today. This track is optional, so go at your own pace and come back anytime."
```

### 2 · learn
```yaml
pic: icon:BookOpenText
text: "**Arabic reads right to left.** Letters join up inside a word, so most change shape a little at the start, middle and end. Dots tell family members apart."
```

### 3 · widget
```yaml
widget: letter
prompt: "Meet baa, taa and thaa."
text: "Tap each letter. Press Hear it to listen."
letters: ["ب", "ت", "ث"]
```

### 4 · choice
```yaml
prompt: "Tap the letter you hear."
audio: "/audio/alphabet/03-taa.wav"
options:
  - text: "ب"
    correct: false
    feedback: "Not quite: that's baa. Tap the speaker to hear it again."
  - text: "ت"
    correct: true
    feedback: "Yes, that's taa."
  - text: "ث"
    correct: false
    feedback: "Not quite: that's thaa. Tap the speaker to hear it again."
```

### 5 · choice
```yaml
prompt: "Tap the letter you hear."
audio: "/audio/alphabet/04-thaa.wav"
options:
  - text: "ث"
    correct: true
    feedback: "Yes, that's thaa."
  - text: "ب"
    correct: false
    feedback: "Not quite: that's baa. Tap the speaker to hear it again."
  - text: "ت"
    correct: false
    feedback: "Not quite: that's taa. Tap the speaker to hear it again."
```

### 6 · learn
```yaml
pic: icon:Lightbulb
text: "**Count the dots.** All three share a little boat shape. ب has one dot below. ت has two dots on top. ث has three dots on top."
```

### 7 · choice
```yaml
prompt: "Which letter has three dots on top?"
options:
  - text: "ث"
    correct: true
    feedback: "Yes. Three dots on top is thaa."
  - text: "ت"
    correct: false
    feedback: "Two dots on top: that's taa."
  - text: "ب"
    correct: false
    feedback: "One dot below: that's baa."
```

### 8 · match
```yaml
prompt: "Match each letter to its name."
pairs:
  - left: "ب"
    right: "baa"
  - left: "ت"
    right: "taa"
  - left: "ث"
    right: "thaa"
```

### 9 · ask_ai
```yaml
chips:
  - "Why do Arabic letters change shape?"
  - "How do I remember which is which?"
  - "Do I need Arabic to pray?"
```

### 10 · do_today
```yaml
pic: icon:PenLine
text: "Write ب, ت and ث three times each, saying each name out loud."
log: null
```

### 11 · takeaway
```yaml
pic: icon:Sparkles
text: "One boat shape, three letters: ب one dot below, ت two on top, ث three on top."
```

### 12 · closing
Three of 28 down. That's a real start.

---

## Check
```yaml
- prompt: "Which letter is ت?"
  options:
    - text: "taa"
      correct: true
      feedback: "Right: two dots on top."
    - text: "baa"
      correct: false
      feedback: "Baa has one dot below."
    - text: "thaa"
      correct: false
      feedback: "Thaa has three dots on top."
- prompt: "How do you tell ب, ت and ث apart?"
  options:
    - text: "By their dots"
      correct: true
      feedback: "Right. Same shape, different dots."
    - text: "By their size"
      correct: false
      feedback: "They're the same size. Look at the dots."
```

## AI guide context
**Lesson facts**
- Optional alphabet track, lesson 1 of 12. Letters here: ب baa, ت taa, ث thaa.
- ب ت ث share one base shape (a shallow boat); dots: one below, two above, three above. Arabic is written right to left and letters join within a word.
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
- ب baa: [LL-Q13955 (ara)-Spotless Mind1988-ب.wav](https://commons.wikimedia.org/wiki/File:LL-Q13955_%28ara%29-Spotless_Mind1988-%D8%A8.wav), recorded by Spotless Mind1988 for Lingua Libre, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
- ت taa: [LL-Q13955 (ara)-AlNatiq-ت.wav](https://commons.wikimedia.org/wiki/File:LL-Q13955_%28ara%29-AlNatiq-%D8%AA.wav), recorded by AlNatiq for Lingua Libre, [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/).
- ث thaa: [LL-Q13955 (ara)-AlNatiq-ث.wav](https://commons.wikimedia.org/wiki/File:LL-Q13955_%28ara%29-AlNatiq-%D8%AB.wav), recorded by AlNatiq for Lingua Libre, [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/).
- [Full audio credits and licences](/audio/alphabet/ATTRIBUTIONS.md)
