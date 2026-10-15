---
track: alphabet
order: 5
phase: null
unit: null
title: "Teeth and loops: siin, shiin, Ṣaad, Ḍaad"
hook: "Two pairs, and your first heavy letters."
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
# alphabet-05 · Teeth and loops: siin, shiin, Ṣaad, Ḍaad

### 1 · hook
```yaml
pic: icon:Languages
text: "**Teeth, loops, and weight.** Today brings two pairs of letters, plus something new: heavy letters, said deeper in the mouth."
```

### 2 · learn
```yaml
pic: icon:BookOpenText
text: "**Two pairs.** س is three little teeth and a tail; ش adds three dots. ص is a loop with a tooth; ض adds one dot."
```

### 3 · widget
```yaml
widget: letter
prompt: "Meet siin, shiin, Ṣaad and Ḍaad."
text: "Tap each letter. Press Hear it to listen."
letters: ["س", "ش", "ص", "ض"]
```

### 4 · choice
```yaml
prompt: "Tap the letter you hear."
audio: "/audio/alphabet/12-siin.wav"
options:
  - text: "س"
    correct: true
    feedback: "Yes, that's siin."
  - text: "ص"
    correct: false
    feedback: "Not quite: that's Ṣaad. Tap the speaker to hear it again."
  - text: "ش"
    correct: false
    feedback: "Not quite: that's shiin. Tap the speaker to hear it again."
```

### 5 · choice
```yaml
prompt: "Tap the letter you hear."
audio: "/audio/alphabet/15-daad.wav"
options:
  - text: "د"
    correct: false
    feedback: "Not quite: that's daal. Tap the speaker to hear it again."
  - text: "ض"
    correct: true
    feedback: "Yes, that's Ḍaad."
  - text: "ص"
    correct: false
    feedback: "Not quite: that's Ṣaad. Tap the speaker to hear it again."
```

### 6 · learn
```yaml
pic: icon:Lightbulb
text: "**Heavy letters.** ص and ض are said with the back of your tongue raised, so they sound deeper and fuller than س and د. Listen for that weight."
```

### 7 · choice
```yaml
prompt: "Which letter has three dots?"
options:
  - text: "ش"
    correct: true
    feedback: "Yes. Three dots on the teeth is shiin."
  - text: "س"
    correct: false
    feedback: "Siin has the teeth but no dots."
  - text: "ض"
    correct: false
    feedback: "Ḍaad has just one dot."
```

### 8 · match
```yaml
prompt: "Match each letter to its name."
pairs:
  - left: "س"
    right: "siin"
  - left: "ش"
    right: "shiin"
  - left: "ص"
    right: "Ṣaad"
  - left: "ض"
    right: "Ḍaad"
```

### 9 · ask_ai
```yaml
chips:
  - "What makes a letter heavy?"
  - "How is ص different from س?"
  - "Why is Arabic called the language of ḍaad?"
```

### 10 · do_today
```yaml
pic: icon:PenLine
text: "Say س then ص, back and forth, five times. Feel your tongue lift for ص."
log: null
```

### 11 · takeaway
```yaml
pic: icon:Sparkles
text: "س teeth, ش teeth with three dots. ص loop, ض loop with a dot. ص and ض are heavy."
```

### 12 · closing
Sixteen letters. More than half the alphabet is yours.

---

## Check
```yaml
- prompt: "Which letter is ص?"
  options:
    - text: "Ṣaad"
      correct: true
      feedback: "Right: a loop with a tooth, no dot."
    - text: "siin"
      correct: false
      feedback: "Siin is three little teeth."
    - text: "Ḍaad"
      correct: false
      feedback: "Ḍaad has a dot on the loop."
- prompt: "What makes ص and ض sound heavy?"
  options:
    - text: "The back of the tongue is raised"
      correct: true
      feedback: "Right. That gives them a deeper, fuller sound."
    - text: "They're said louder"
      correct: false
      feedback: "Not louder: deeper, with the tongue raised at the back."
```

## AI guide context
**Lesson facts**
- Optional alphabet track, lesson 5 of 12. Letters here: س siin, ش shiin, ص Ṣaad, ض Ḍaad.
- س/ش (teeth; ش three dots) and ص/ض (loop; ض one dot). ص ض are emphatic (velarised/pharyngealised) letters. Arabic is sometimes called 'the language of ḍaad' because ض is considered distinctive to it.
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
- س siin: [LL-Q13955 (ara)-AlNatiq-س.wav](https://commons.wikimedia.org/wiki/File:LL-Q13955_%28ara%29-AlNatiq-%D8%B3.wav), recorded by AlNatiq for Lingua Libre, [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/).
- ش shiin: [LL-Q13955 (ara)-AlNatiq-ش.wav](https://commons.wikimedia.org/wiki/File:LL-Q13955_%28ara%29-AlNatiq-%D8%B4.wav), recorded by AlNatiq for Lingua Libre, [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/).
- ص Ṣaad: [LL-Q13955 (ara)-AlNatiq-ص.wav](https://commons.wikimedia.org/wiki/File:LL-Q13955_%28ara%29-AlNatiq-%D8%B5.wav), recorded by AlNatiq for Lingua Libre, [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/).
- ض Ḍaad: [LL-Q13955 (ara)-AlNatiq-ض.wav](https://commons.wikimedia.org/wiki/File:LL-Q13955_%28ara%29-AlNatiq-%D8%B6.wav), recorded by AlNatiq for Lingua Libre, [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/).
- [Full audio credits and licences](/audio/alphabet/ATTRIBUTIONS.md)
