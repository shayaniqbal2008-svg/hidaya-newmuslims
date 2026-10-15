---
track: alphabet
order: 4
phase: null
unit: null
title: "Letters that don't hold hands: daal, dhaal, raa, zaay"
hook: "Four letters that never join to the letter after them."
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
# alphabet-04 · Letters that don't hold hands: daal, dhaal, raa, zaay

### 1 · hook
```yaml
pic: icon:Languages
text: "**Some letters keep to themselves.** You've seen letters join up. Today's four only join to the letter before them, which is why Arabic words sometimes have small gaps."
```

### 2 · learn
```yaml
pic: icon:BookOpenText
text: "**Never joining forward.** د ذ ر ز connect to the letter before them, but never to the one after. A small gap after them inside a word is normal, not a space."
```

### 3 · widget
```yaml
widget: letter
prompt: "Meet daal, dhaal, raa and zaay."
text: "Tap each letter. Press Hear it to listen."
letters: ["د", "ذ", "ر", "ز"]
```

### 4 · choice
```yaml
prompt: "Tap the letter you hear."
audio: "/audio/alphabet/08-daal.wav"
options:
  - text: "د"
    correct: true
    feedback: "Yes, that's daal."
  - text: "ذ"
    correct: false
    feedback: "Not quite: that's dhaal. Tap the speaker to hear it again."
  - text: "ر"
    correct: false
    feedback: "Not quite: that's raa. Tap the speaker to hear it again."
```

### 5 · choice
```yaml
prompt: "Tap the letter you hear."
audio: "/audio/alphabet/10-raa.wav"
options:
  - text: "ز"
    correct: false
    feedback: "Not quite: that's zaay. Tap the speaker to hear it again."
  - text: "ر"
    correct: true
    feedback: "Yes, that's raa."
  - text: "د"
    correct: false
    feedback: "Not quite: that's daal. Tap the speaker to hear it again."
```

### 6 · learn
```yaml
pic: icon:Lightbulb
text: "**Two pairs.** د is a small corner; ذ is the same with a dot. ر is a curved slide dipping below the line; ز is the same with a dot."
```

### 7 · choice
```yaml
prompt: "Which one is zaay?"
options:
  - text: "ز"
    correct: true
    feedback: "Yes. A slide with a dot is zaay."
  - text: "ر"
    correct: false
    feedback: "That's raa: the same slide, no dot."
  - text: "ذ"
    correct: false
    feedback: "That's dhaal: a corner with a dot."
```

### 8 · match
```yaml
prompt: "Match each letter to its name."
pairs:
  - left: "د"
    right: "daal"
  - left: "ذ"
    right: "dhaal"
  - left: "ر"
    right: "raa"
  - left: "ز"
    right: "zaay"
```

### 9 · ask_ai
```yaml
chips:
  - "Why don't some letters join?"
  - "How do I tell د from ر?"
  - "What does ذ sound like?"
```

### 10 · do_today
```yaml
pic: icon:PenLine
text: "Write د ذ ر ز in a row. Notice none of them reach forward to join."
log: null
```

### 11 · takeaway
```yaml
pic: icon:Sparkles
text: "د ذ ر ز never join forward. Corner and slide; the dot makes ذ and ز."
```

### 12 · closing
Twelve letters. Almost halfway through the alphabet.

---

## Check
```yaml
- prompt: "Which letter is ذ?"
  options:
    - text: "dhaal"
      correct: true
      feedback: "Right: a corner with a dot."
    - text: "daal"
      correct: false
      feedback: "Daal has no dot."
    - text: "zaay"
      correct: false
      feedback: "Zaay is a slide below the line with a dot."
- prompt: "Why does a word sometimes have a small gap inside it?"
  options:
    - text: "Some letters never join to the next one"
      correct: true
      feedback: "Right. Like د ذ ر ز."
    - text: "It's two separate words"
      correct: false
      feedback: "Not necessarily. Letters like ر just don't join forward."
```

## AI guide context
**Lesson facts**
- Optional alphabet track, lesson 4 of 12. Letters here: د daal, ذ dhaal, ر raa, ز zaay.
- د ذ ر ز (with ا and و) are the non-connectors: they join only to the preceding letter. د/ذ are a small angle; ر/ز curve below the baseline.
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
- د daal: [LL-Q13955 (ara)-Nehaoua-د.wav](https://commons.wikimedia.org/wiki/File:LL-Q13955_%28ara%29-Nehaoua-%D8%AF.wav), recorded by Nehaoua for Lingua Libre, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
- ذ dhaal: [LL-Q13955 (ara)-AlNatiq-ذ.wav](https://commons.wikimedia.org/wiki/File:LL-Q13955_%28ara%29-AlNatiq-%D8%B0.wav), recorded by AlNatiq for Lingua Libre, [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/).
- ر raa: [LL-Q13955 (ara)-AlNatiq-ر.wav](https://commons.wikimedia.org/wiki/File:LL-Q13955_%28ara%29-AlNatiq-%D8%B1.wav), recorded by AlNatiq for Lingua Libre, [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/).
- ز zaay: [LL-Q13955 (ara)-Rashed Aljahdali-ز.wav](https://commons.wikimedia.org/wiki/File:LL-Q13955_%28ara%29-Rashed_Aljahdali-%D8%B2.wav), recorded by Rashed Aljahdali for Lingua Libre, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
- [Full audio credits and licences](/audio/alphabet/ATTRIBUTIONS.md)
