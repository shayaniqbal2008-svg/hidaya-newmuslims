---
track: alphabet
order: 6
phase: null
unit: null
title: "Tall sticks and the throat: Ṭaa, Ẓaa, ʿayn, ghayn"
hook: "Two tall letters, and the sound English doesn't have."
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
# alphabet-06 · Tall sticks and the throat: Ṭaa, Ẓaa, ʿayn, ghayn

### 1 · hook
```yaml
pic: icon:Languages
text: "**Four letters, and a real challenge.** Two tall heavy letters, then ʿayn, a throat sound with no English match. Listening and copying is how everyone learns it."
```

### 2 · learn
```yaml
pic: icon:BookOpenText
text: "**Two pairs.** ط and ظ are a loop with a tall stick; ظ adds a dot. ع and غ look like a small open c with a tail; غ adds a dot."
```

### 3 · widget
```yaml
widget: letter
prompt: "Meet Ṭaa, Ẓaa, ʿayn and ghayn."
text: "Tap each letter. Press Hear it to listen."
letters: ["ط", "ظ", "ع", "غ"]
```

### 4 · choice
```yaml
prompt: "Tap the letter you hear."
audio: "/audio/alphabet/18-ayn.wav"
options:
  - text: "ع"
    correct: true
    feedback: "Yes, that's ʿayn."
  - text: "غ"
    correct: false
    feedback: "Not quite: that's ghayn. Tap the speaker to hear it again."
  - text: "ح"
    correct: false
    feedback: "Not quite: that's Ḥaa. Tap the speaker to hear it again."
```

### 5 · choice
```yaml
prompt: "Tap the letter you hear."
audio: "/audio/alphabet/16-taa.wav"
options:
  - text: "ت"
    correct: false
    feedback: "Not quite: that's taa. Tap the speaker to hear it again."
  - text: "ط"
    correct: true
    feedback: "Yes, that's Ṭaa."
  - text: "ظ"
    correct: false
    feedback: "Not quite: that's Ẓaa. Tap the speaker to hear it again."
```

### 6 · learn
```yaml
pic: icon:Lightbulb
text: "**ع takes practice.** Squeeze the middle of your throat as you say \"ah\". It feels odd at first. Copy the recording, and ask someone at the masjid to say it with you."
```

### 7 · choice
```yaml
prompt: "Which letter has a tall stick and a dot?"
options:
  - text: "ظ"
    correct: true
    feedback: "Yes. Tall stick plus a dot is Ẓaa."
  - text: "ط"
    correct: false
    feedback: "Ṭaa has the tall stick, no dot."
  - text: "غ"
    correct: false
    feedback: "Ghayn has a dot, but no tall stick."
```

### 8 · match
```yaml
prompt: "Match each letter to its name."
pairs:
  - left: "ط"
    right: "Ṭaa"
  - left: "ظ"
    right: "Ẓaa"
  - left: "ع"
    right: "ʿayn"
  - left: "غ"
    right: "ghayn"
```

### 9 · ask_ai
```yaml
chips:
  - "How do I say ع?"
  - "Is ط just a heavy ت?"
  - "What's a good way to practise sounds?"
```

### 10 · do_today
```yaml
pic: icon:PenLine
text: "Ask someone at the masjid to say ع for you, or play it here, and copy it five times."
log: null
```

### 11 · takeaway
```yaml
pic: icon:Sparkles
text: "ط ظ: loop and tall stick (ظ has a dot). ع غ: open c with a tail (غ has a dot)."
```

### 12 · closing
Twenty letters. The trickiest sounds are behind you now.

---

## Check
```yaml
- prompt: "Which letter is غ?"
  options:
    - text: "ghayn"
      correct: true
      feedback: "Right: ʿayn's shape with a dot."
    - text: "ʿayn"
      correct: false
      feedback: "ʿAyn has no dot."
    - text: "Ẓaa"
      correct: false
      feedback: "Ẓaa has a tall stick."
- prompt: "What's the best way to learn ع?"
  options:
    - text: "Listen and copy, with someone if you can"
      correct: true
      feedback: "Right. Everyone learns it by ear."
    - text: "Read a description until it clicks"
      correct: false
      feedback: "Descriptions help a little, but ears do the real work."
```

## AI guide context
**Lesson facts**
- Optional alphabet track, lesson 6 of 12. Letters here: ط Ṭaa, ظ Ẓaa, ع ʿayn, غ ghayn.
- ط/ظ (loop with vertical stroke; ظ dotted) are emphatic t and emphatic dh; ع (voiced pharyngeal) and غ (like a French r) share a shape, غ dotted.
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
- ط Ṭaa: [LL-Q13955 (ara)-AlNatiq-ط.wav](https://commons.wikimedia.org/wiki/File:LL-Q13955_%28ara%29-AlNatiq-%D8%B7.wav), recorded by AlNatiq for Lingua Libre, [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/).
- ظ Ẓaa: [LL-Q13955 (ara)-Rashed Aljahdali-ظ.wav](https://commons.wikimedia.org/wiki/File:LL-Q13955_%28ara%29-Rashed_Aljahdali-%D8%B8.wav), recorded by Rashed Aljahdali for Lingua Libre, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
- ع ʿayn: [LL-Q13955 (ara)-AlNatiq-ع.wav](https://commons.wikimedia.org/wiki/File:LL-Q13955_%28ara%29-AlNatiq-%D8%B9.wav), recorded by AlNatiq for Lingua Libre, [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/).
- غ ghayn: [LL-Q13955 (ara)-AlNatiq-غ.wav](https://commons.wikimedia.org/wiki/File:LL-Q13955_%28ara%29-AlNatiq-%D8%BA.wav), recorded by AlNatiq for Lingua Libre, [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/).
- [Full audio credits and licences](/audio/alphabet/ATTRIBUTIONS.md)
