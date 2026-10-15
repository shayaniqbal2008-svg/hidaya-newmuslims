---
track: alphabet
order: 8
phase: null
unit: null
title: "The last five: miim, haa, waaw, alif, hamza"
hook: "The final five letters, and the whole alphabet is yours."
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
# alphabet-08 · The last five: miim, haa, waaw, alif, hamza

### 1 · hook
```yaml
pic: icon:Languages
text: "**The last five.** Finish these and you've met every letter of the Arabic alphabet. Some of today's letters do double duty, so pay attention."
```

### 2 · learn
```yaml
pic: icon:BookOpenText
text: "**Shapes.** م is a small round head with a tail. ه changes shape a lot inside words. و is a loop with a tail. ا is one straight line. ء is a small mark."
```

### 3 · widget
```yaml
widget: letter
prompt: "Meet miim, haa, waaw, alif and hamza."
text: "Tap each letter. Press Hear it to listen."
letters: ["م", "ه", "و", "ا", "ء"]
```

### 4 · choice
```yaml
prompt: "Tap the letter you hear."
audio: "/audio/alphabet/24-miim.wav"
options:
  - text: "م"
    correct: true
    feedback: "Yes, that's miim."
  - text: "ه"
    correct: false
    feedback: "Not quite: that's haa. Tap the speaker to hear it again."
  - text: "و"
    correct: false
    feedback: "Not quite: that's waaw. Tap the speaker to hear it again."
```

### 5 · choice
```yaml
prompt: "Tap the letter you hear."
audio: "/audio/alphabet/27-waaw.wav"
options:
  - text: "ر"
    correct: false
    feedback: "Not quite: that's raa. Tap the speaker to hear it again."
  - text: "و"
    correct: true
    feedback: "Yes, that's waaw."
  - text: "م"
    correct: false
    feedback: "Not quite: that's miim. Tap the speaker to hear it again."
```

### 6 · learn
```yaml
pic: icon:Lightbulb
text: "**ا, و and ي do double duty.** They're letters, and they also stretch vowels long: aa, oo, ee. Hamza (ء) is a little catch in the throat; it often sits on ا, و or ي."
```

### 7 · choice
```yaml
prompt: "Which one is alif?"
options:
  - text: "ا"
    correct: true
    feedback: "Yes. One straight line is alif."
  - text: "ل"
    correct: false
    feedback: "That's laam: tall, but with a hook."
  - text: "د"
    correct: false
    feedback: "That's daal: a small corner."
```

### 8 · match
```yaml
prompt: "Match each letter to its name."
pairs:
  - left: "م"
    right: "miim"
  - left: "ه"
    right: "haa"
  - left: "و"
    right: "waaw"
  - left: "ا"
    right: "alif"
```

### 9 · ask_ai
```yaml
chips:
  - "What is hamza?"
  - "Why does ه change shape so much?"
  - "What should I learn next?"
```

### 10 · do_today
```yaml
pic: icon:PenLine
text: "Write the whole alphabet once, from ا to ي, saying each name. Look back at earlier lessons if you get stuck."
log: null
```

### 11 · takeaway
```yaml
pic: icon:Sparkles
text: "م round head, ه shape-shifter, و loop and tail, ا straight line, ء a catch in the throat. That's all 28."
```

### 12 · closing
You've met every letter in the Arabic alphabet. Next: the small marks that make them speak.

---

## Check
```yaml
- prompt: "Which letters also stretch vowels long?"
  options:
    - text: "ا, و and ي"
      correct: true
      feedback: "Right: aa, oo and ee."
    - text: "ب, ت and ث"
      correct: false
      feedback: "Those are always consonants."
- prompt: "What does hamza (ء) sound like?"
  options:
    - text: "A tiny catch in the throat"
      correct: true
      feedback: "Right. Like the break in \"uh-oh\"."
    - text: "A long \"aa\""
      correct: false
      feedback: "That's alif stretching a vowel. Hamza is the catch."
```

## AI guide context
**Lesson facts**
- Optional alphabet track, lesson 8 of 12. Letters here: م miim, ه haa, و waaw, ا alif, ء hamza.
- م ه و ا ء. ا, و, ي also serve as long-vowel letters (aa, oo/uu, ee/ii). Hamza (ء) is a glottal stop, written alone or seated on ا, و or ي. No recording of hamza yet (text only).
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
- م miim: [LL-Q13955 (ara)-AlNatiq-م.wav](https://commons.wikimedia.org/wiki/File:LL-Q13955_%28ara%29-AlNatiq-%D9%85.wav), recorded by AlNatiq for Lingua Libre, [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/).
- ه haa: [LL-Q13955 (ara)-AlNatiq-ه.wav](https://commons.wikimedia.org/wiki/File:LL-Q13955_%28ara%29-AlNatiq-%D9%87.wav), recorded by AlNatiq for Lingua Libre, [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/).
- و waaw: [LL-Q13955 (ara)-Nehaoua-و.wav](https://commons.wikimedia.org/wiki/File:LL-Q13955_%28ara%29-Nehaoua-%D9%88.wav), recorded by Nehaoua for Lingua Libre, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
- ا alif: [LL-Q13955 (ara)-AlNatiq-ا.wav](https://commons.wikimedia.org/wiki/File:LL-Q13955_%28ara%29-AlNatiq-%D8%A7.wav), recorded by AlNatiq for Lingua Libre, [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/).
- ء hamza: no recording yet.
- [Full audio credits and licences](/audio/alphabet/ATTRIBUTIONS.md)
