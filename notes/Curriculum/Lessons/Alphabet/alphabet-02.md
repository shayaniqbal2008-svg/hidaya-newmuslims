---
track: alphabet
order: 2
phase: null
unit: null
title: "Same tooth, new dots: nuun and yaa"
hook: "Two more letters that start with the same little tooth."
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
# alphabet-02 · Same tooth, new dots: nuun and yaa

### 1 · hook
```yaml
pic: icon:Languages
text: "**Two new letters, one old shape.** Nuun and yaa start out looking a lot like baa. Once you know where their dots go, you'll spot them everywhere."
```

### 2 · learn
```yaml
pic: icon:BookOpenText
text: "**The same little tooth.** At the start or middle of a word, ن and ي look just like ب: a small tooth. Only the dots change. ن has one dot above, ي has two below."
```

### 3 · widget
```yaml
widget: letter
prompt: "Meet nuun and yaa."
text: "Tap each letter. Press Hear it to listen."
letters: ["ن", "ي"]
```

### 4 · choice
```yaml
prompt: "Tap the letter you hear."
audio: "/audio/alphabet/25-nuun.wav"
options:
  - text: "ن"
    correct: true
    feedback: "Yes, that's nuun."
  - text: "ي"
    correct: false
    feedback: "Not quite: that's yaa. Tap the speaker to hear it again."
  - text: "ب"
    correct: false
    feedback: "Not quite: that's baa. Tap the speaker to hear it again."
```

### 5 · choice
```yaml
prompt: "Tap the letter you hear."
audio: "/audio/alphabet/28-yaa.wav"
options:
  - text: "ت"
    correct: false
    feedback: "Not quite: that's taa. Tap the speaker to hear it again."
  - text: "ي"
    correct: true
    feedback: "Yes, that's yaa."
  - text: "ن"
    correct: false
    feedback: "Not quite: that's nuun. Tap the speaker to hear it again."
```

### 6 · learn
```yaml
pic: icon:Lightbulb
text: "**At the end, they open up.** Alone or at the end of a word, ن becomes a deep bowl with a dot, and ي curls back with two dots underneath."
```

### 7 · choice
```yaml
prompt: "Which letter has one dot above?"
options:
  - text: "ن"
    correct: true
    feedback: "Yes. One dot above is nuun."
  - text: "ي"
    correct: false
    feedback: "Yaa has two dots below."
  - text: "ب"
    correct: false
    feedback: "Baa's single dot is below, not above."
```

### 8 · match
```yaml
prompt: "Match each letter to its name."
pairs:
  - left: "ن"
    right: "nuun"
  - left: "ي"
    right: "yaa"
  - left: "ب"
    right: "baa"
  - left: "ت"
    right: "taa"
```

### 9 · ask_ai
```yaml
chips:
  - "Why do ن and ي look like ب?"
  - "What does ي sound like as a vowel?"
  - "How do I practise reading?"
```

### 10 · do_today
```yaml
pic: icon:PenLine
text: "Write ن and ي alone, then at the start of a word (نـ يـ). Say each name."
log: null
```

### 11 · takeaway
```yaml
pic: icon:Sparkles
text: "ن one dot above, ي two below. At the start of a word they're a tooth, like ب."
```

### 12 · closing
Five letters now. They're starting to look familiar, aren't they?

---

## Check
```yaml
- prompt: "Which letter is ن?"
  options:
    - text: "nuun"
      correct: true
      feedback: "Right: one dot above."
    - text: "yaa"
      correct: false
      feedback: "Yaa has two dots below."
    - text: "taa"
      correct: false
      feedback: "Taa has two dots above."
- prompt: "What do ب, ن and ي share at the start of a word?"
  options:
    - text: "The same little tooth shape"
      correct: true
      feedback: "Right. Only the dots differ."
    - text: "Nothing at all"
      correct: false
      feedback: "Look again: same tooth, different dots."
```

## AI guide context
**Lesson facts**
- Optional alphabet track, lesson 2 of 12. Letters here: ن nuun, ي yaa.
- ن and ي share the 'tooth' shape with ب ت ث at the start and middle of words; final/isolated forms differ (ن a deep bowl with a dot, ي a curl with two dots below).
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
- ن nuun: [LL-Q13955 (ara)-AlNatiq-ن.wav](https://commons.wikimedia.org/wiki/File:LL-Q13955_%28ara%29-AlNatiq-%D9%86.wav), recorded by AlNatiq for Lingua Libre, [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/).
- ي yaa: [LL-Q13955 (ara)-AlNatiq-ي.wav](https://commons.wikimedia.org/wiki/File:LL-Q13955_%28ara%29-AlNatiq-%D9%8A.wav), recorded by AlNatiq for Lingua Libre, [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/).
- [Full audio credits and licences](/audio/alphabet/ATTRIBUTIONS.md)
