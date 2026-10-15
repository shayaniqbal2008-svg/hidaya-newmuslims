---
track: alphabet
order: 7
phase: null
unit: null
title: "Loops and tall letters: faa, qaaf, kaaf, laam"
hook: "Two loops and two tall letters, including two kinds of k."
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
# alphabet-07 · Loops and tall letters: faa, qaaf, kaaf, laam

### 1 · hook
```yaml
pic: icon:Languages
text: "**Two kinds of k.** Today's letters include two that English speakers hear as \"k\". Arabic treats them as different letters, and so will you."
```

### 2 · learn
```yaml
pic: icon:BookOpenText
text: "**Loops and tall letters.** ف and ق both have a small loop: ف one dot, ق two. ك stands tall with a small mark inside. ل is a tall hook."
```

### 3 · widget
```yaml
widget: letter
prompt: "Meet faa, qaaf, kaaf and laam."
text: "Tap each letter. Press Hear it to listen."
letters: ["ف", "ق", "ك", "ل"]
```

### 4 · choice
```yaml
prompt: "Tap the letter you hear."
audio: "/audio/alphabet/21-qaaf.wav"
options:
  - text: "ق"
    correct: true
    feedback: "Yes, that's qaaf."
  - text: "ك"
    correct: false
    feedback: "Not quite: that's kaaf. Tap the speaker to hear it again."
  - text: "ف"
    correct: false
    feedback: "Not quite: that's faa. Tap the speaker to hear it again."
```

### 5 · choice
```yaml
prompt: "Tap the letter you hear."
audio: "/audio/alphabet/23-laam.wav"
options:
  - text: "ك"
    correct: false
    feedback: "Not quite: that's kaaf. Tap the speaker to hear it again."
  - text: "ل"
    correct: true
    feedback: "Yes, that's laam."
  - text: "ن"
    correct: false
    feedback: "Not quite: that's nuun. Tap the speaker to hear it again."
```

### 6 · learn
```yaml
pic: icon:Lightbulb
text: "**ق and ك are different letters.** ق comes from far back in the throat; ك is the k in \"kite\". Mixing them up can change a word, so listen closely."
```

### 7 · choice
```yaml
prompt: "Which letter has two dots on a loop?"
options:
  - text: "ق"
    correct: true
    feedback: "Yes. Two dots on the loop is qaaf."
  - text: "ف"
    correct: false
    feedback: "Faa has one dot."
  - text: "ت"
    correct: false
    feedback: "Taa has two dots, but on a boat shape, not a loop."
```

### 8 · match
```yaml
prompt: "Match each letter to its name."
pairs:
  - left: "ف"
    right: "faa"
  - left: "ق"
    right: "qaaf"
  - left: "ك"
    right: "kaaf"
  - left: "ل"
    right: "laam"
```

### 9 · ask_ai
```yaml
chips:
  - "How is ق different from ك?"
  - "Why does ك look different in some fonts?"
  - "What letters are in the word Allah?"
```

### 10 · do_today
```yaml
pic: icon:PenLine
text: "Say ق then ك, back and forth, five times. Feel where each one sits."
log: null
```

### 11 · takeaway
```yaml
pic: icon:Sparkles
text: "ف one dot, ق two dots, ك tall with a mark, ل a tall hook. ق is the deep k."
```

### 12 · closing
Twenty-four letters. One more lesson of letters to go.

---

## Check
```yaml
- prompt: "Which letter is ل?"
  options:
    - text: "laam"
      correct: true
      feedback: "Right: a tall hook."
    - text: "kaaf"
      correct: false
      feedback: "Kaaf has a small mark inside."
    - text: "daal"
      correct: false
      feedback: "Daal is a small corner, not a tall hook."
- prompt: "Where does ق come from?"
  options:
    - text: "Far back in the throat"
      correct: true
      feedback: "Right. Deeper than ك."
    - text: "The front of the mouth"
      correct: false
      feedback: "That's closer to ك. ق sits much further back."
```

## AI guide context
**Lesson facts**
- Optional alphabet track, lesson 7 of 12. Letters here: ف faa, ق qaaf, ك kaaf, ل laam.
- ف (one dot) and ق (two dots) share a loop head; ق's tail dips deeper at the end. ك has a small hamza-like mark inside (some styles show a flag). ل is a tall hook. ق is uvular, ك velar.
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
- ف faa: [LL-Q13955 (ara)-AlNatiq-ف.wav](https://commons.wikimedia.org/wiki/File:LL-Q13955_%28ara%29-AlNatiq-%D9%81.wav), recorded by AlNatiq for Lingua Libre, [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/).
- ق qaaf: [LL-Q13955 (ara)-AlNatiq-ق.wav](https://commons.wikimedia.org/wiki/File:LL-Q13955_%28ara%29-AlNatiq-%D9%82.wav), recorded by AlNatiq for Lingua Libre, [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/).
- ك kaaf: [LL-Q13955 (ara)-AlNatiq-ك.wav](https://commons.wikimedia.org/wiki/File:LL-Q13955_%28ara%29-AlNatiq-%D9%83.wav), recorded by AlNatiq for Lingua Libre, [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/).
- ل laam: [LL-Q13955 (ara)-AlNatiq-ل.wav](https://commons.wikimedia.org/wiki/File:LL-Q13955_%28ara%29-AlNatiq-%D9%84.wav), recorded by AlNatiq for Lingua Libre, [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/).
- [Full audio credits and licences](/audio/alphabet/ATTRIBUTIONS.md)
