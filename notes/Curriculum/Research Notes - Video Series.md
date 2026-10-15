---
created: 2026-10-05
project: "[[Hidaya]]"
agent: C
---

# Research Notes: Video Series and Playlists for New Muslims

Area C of the curriculum research: YouTube and streaming series aimed at converts. The episode order shows how experienced teachers sequence topics for new Muslims.

**Method.** WebFetch could not read YouTube playlist pages; it returned only the footer. Instead I fetched the raw playlist and watch-page HTML with `curl` and parsed YouTube's embedded `ytInitialData` JSON. That gave me playlist titles, owners, episode titles in order, durations, per-video view counts and video descriptions. View counts were captured on 2026-10-05. YouTube labels dates only as "Ny ago", so years are approximate unless a video's publish date was read directly. Credentials come from the channel's own descriptions or from web sources, and each is cited. **Exception:** the credentials given for Hamza Yusuf, Abdal Hakim Murad, Suhaib Webb, Omar Suleiman and Mufti Menk are widely known public facts that I did **not** re-verify with a source in this session. Confirm them before citing externally.

**Not covered here:** rulings. These notes record what each series teaches and in what order. They do not say whether it is correct.

---

## Series

### New Muslim Series — WhyIslam / ICNA (877-Why-Islam channel)
- **Presenter & credentials:** The channel belongs to WhyIslam, the dawah project of ICNA (Islamic Circle of North America, a major US Sunni organization), which runs the 877-WHY-ISLAM hotline. The descriptions do not name the individual presenters. Credentials: medium for the institution, unknown for the individual teachers.
- **Platform & URL:** YouTube, https://www.youtube.com/playlist?list=PLB8foENoU2LdnXjQVti5bRUiXOvwcWoKe
- **Episodes & total length:** 27 episodes, each about 9–13 minutes (strikingly uniform, close to 10 min). Total is about 4.6 hours.
- **Year(s):** Ep. 1 published 2020-07-11. The run continued into 2021, with the last update in Jan 2021.
- **Intended audience:** People who have just said the shahada, in the US.
- **Episodes in order:**
  1. 7 Conditions of Shahadah
  2. Purification (Tahara)
  3. Personal Hygiene
  4. Eid
  5. Intro to Prayer
  6. Common Islamic Terminology
  7. Basic Islamic Manners
  8. Basic Islamic Manners, Part 2
  9. Bathroom Manners
  10. Islamic Dietary Laws
  11. Character
  12. Gender Interactions
  13. Finding a Spouse
  14. Fiqh of Prayer
  15. Eating Habits
  16. Fundamentals of Funerals
  17. Ramadan Fasting
  18. Basic Manners
  19. Fundamentals of Belief, Part 1
  20. Fundamentals of Belief, Part 2
  21. Shirk and its Types, Part 1
  22. Shirk and its Types, Part 2
  23. Abominations (Sins), Part 1
  24. Abominations (Sins), Part 2
  25. Women's Issues
  26. Zakat
  27. Hajj
- **Pacing:** Weekly or periodic uploads, about 10 minutes each. It is labeled a "series" with episode numbers, but the order looks partly calendar-driven: Eid is Ep. 4 and Ramadan is Ep. 17. It is not a strict pedagogical sequence. Belief (aqidah) comes surprisingly late, at Ep. 19–22.
- **Tone:** Practical and instructional, in a class-like format.
- **Strengths:** Very broad coverage of daily-life fiqh and manners (bathroom, eating, gender interaction, finding a spouse, funerals). Episode length is uniform and short. It is US-based.
- **Gaps:** Aqidah comes late. There is no emotional or identity content (family, loneliness). The ordering is uneven. Engagement is low.
- **View counts / reception:** Ep. 1 has about 7.6K views and Ep. 6 (Terminology) about 6.1K. Most later episodes have 200–600, a steep drop-off after the first three. Shirk Pt 1 is an outlier at 2.5K.
- **How accessed:** I parsed the playlist HTML with curl. Ep. 1's description says it covers what belief requires after the shahada (https://www.youtube.com/watch?v=Y66zt7Guwhg).
- **Confidence:** High for titles and order; medium for presenter identity.

### New Muslim Prayer Series — WhyIslam / ICNA (877-Why-Islam), "Coach Zubair"
- **Presenter & credentials:** "Coach Zubair" (@CoachZubair), produced for WhyIslam/ICNA. I found no formal scholarly credentials.
- **Platform & URL:** YouTube, https://www.youtube.com/playlist?list=PLB8foENoU2LcetIvSCn00zm9SYsUXWlJd
- **Episodes & total length:** 29 videos (an introduction plus 28 numbered lessons), each 2–11 minutes and mostly 3–6. Total is about 2.3 hours.
- **Year(s):** 2020–2021. The intro was published 2020-09-30.
- **Intended audience:** New Muslims learning what to recite in salah and what it means.
- **Episodes in order** (each video teaches one phrase of the prayer, in the order it is said):
  0. Introduction
  1. Allahu Akbar
  2. Seeking refuge from Satan
  3. Comprehensive remembrance (opening phrase)
  4. "Glory be to my Lord the Supreme" (bowing)
  5. "Glory be to my Lord the Most High" (prostration)
  6. Rising up from bowing
  7. After standing up from bowing
  8. Between the two prostrations
  9. Ending prayer
  10. Recap
  11. Bismillah (start of al-Fatiha)
  12. "All praise belongs to the Lord of the Worlds"
  13. The Most Merciful
  14. Master of the Day of Judgement
  15. Who we worship and seek help from
  16. Asking for the Straight Path
  17. The path of those favored
  18. Not of those who earned anger or went astray
  19. Reading more Quran before bowing
  20–23. Tashahhud, parts 1–4 (the last covers its meaning)
  24–26. Prayer upon the Prophet, parts 1–3
  27. Du'a for protection
  28. Learning Surah 112 (al-Ikhlas)
- **Pacing:** Micro-lessons designed to build up step by step. Notably, it teaches the short fixed phrases (takbir, ruku and sujud phrases) **before** al-Fatiha, so a learner can do the movements with simple words first. Lesson 10 is a recap.
- **Tone:** Gentle, coaching style. It pairs meaning with memorization.
- **Strengths:** One phrase per video is a very good fit for a daily app. Each phrase gets its meaning, not just its sound. The description links transliteration PDFs (https://www.youtube.com/watch?v=3n27b97xWJU).
- **Gaps:** It does not cover wudu or prayer times, and production is low-budget. Views are very low, under 1K for most videos, but Lesson 11 (Bismillah) has 5.8K.
- **View counts / reception:** Playlist total is about 886 views. Lesson 11 has 5.8K.
- **How accessed:** curl parse of the playlist and the intro video's description.
- **Confidence:** High.

### Revert Mentoring Series — WhyIslam / ICNA (877-Why-Islam)
- **Presenter & credentials:** WhyIslam/ICNA. The presenter is not named in the descriptions.
- **Platform & URL:** YouTube, https://www.youtube.com/playlist?list=PLB8foENoU2Lf2d63kbaAXfAYvapcQDDid
- **Episodes & total length:** 13 videos, each about 5 minutes (the intro is 10). Total is about 70 minutes.
- **Year(s):** 2021–2022.
- **Intended audience:** **Mentors** of new Muslims, not the converts themselves. The intro says it covers the traits a mentor should have (https://www.youtube.com/watch?v=K4NB8W92hjg).
- **Episodes in order:**
  0. Introduction
  1. Teaching the Basics
  2. Teaching Ritual Purification
  3. Teaching the Basics of Worship
  4. Teaching Islam as a Holistic Way of Life
  5. Teaching the Basics of Character
  6. Teaching the Core Islamic Beliefs
  7. Teaching the Mandatory and Optional Prayers
  8. Teaching the Basics of Fasting
  9. Teaching the Basics of Hajj
  10. Teaching the Basics of Dress Code
  11. Teaching the Basics of Food Regulations
  12. Teaching the Basics of Family Ties
- **Pacing:** A short sequential course.
- **Tone:** Instructional, aimed at volunteers.
- **Strengths:** It is the only series found that is aimed at the **masjid-side mentor**, which is directly relevant to selling to masjids (it could supply a mentor guide). The sequence, purification → worship → holistic life → character → beliefs → prayer detail, gives a practitioner's view of the order to teach in.
- **Gaps:** Each topic is very brief. Views are low (Dress Code is the top video at 2.9K).
- **View counts / reception:** 300–2.9K per video.
- **How accessed:** curl parse.
- **Confidence:** High.

### 5 Pillars Made Plain (Convert Resources; includes "A Convert's Ramadan") — Yaqeen Institute, Sh. Abdullah Oduro
- **Presenter & credentials:** Sh. Abdullah Oduro was born in Texas and converted in 1997. He graduated from the College of Islamic Law at the Islamic University of Madinah in 2007. He has been an imam in the Dallas area (Islamic Center of Coppell and Lewisville) and is a scholar at Yaqeen Institute, where he leads its convert-resources work. Sunni. Sources: https://www.abdullahoduro.com/mystory, https://www.speakersofislam.com/2025/03/abdullah-oduros-biography.html. Credibility: **high**, and he is a convert himself.
- **Platform & URL:** The Yaqeen Institute website series page is `yaqeeninstitute.org/watch/series/five-pillars-of-islam`, reached via https://yaqeeninstitute.org/watch/series/pillar-4-intro-to-fasting. Videos are also on Yaqeen's YouTube channel; a viewer-made playlist of the fasting set is https://www.youtube.com/playlist?list=PLZhV_ukMhZCtiSAheBwTvix-fLZ2-YBsd
- **Episodes & total length:** 30 short videos (5 pillars × 5–8 each). The fasting videos run 2.5–7 minutes, so the whole series is probably about 2–2.5 hours. That total is an estimate, because I measured lengths only for the fasting set.
- **Year(s):** The fasting set was published in March 2022, before Ramadan. I could not verify dates for the other pillars.
- **Intended audience:** New converts. Episodes are tagged "Convert Resources". The fasting videos invite viewers to sign up for a companion program for their first Ramadan as a Muslim (https://www.youtube.com/watch?v=vhQ7p_15KZs).
- **Episodes in order** (from the Yaqeen series page):
  - **Pillar 1, Shahada:** 1. Intro · 2. Who is the shahada for? · 3. When should we make it? · 4. Where should we make it? · 5. Why do we make it?
  - **Pillar 2, Prayer:** 6. Intro · 7. What is prayer? · 8. Why do we pray? · 9. Who should pray? · 10. When do we pray? · 11. Where can Muslims pray?
  - **Pillar 3, Zakat:** 12. Intro · 13. What is zakat? · 14. Why give it? · 15. When? · 16. Who receives it? · 17. Where? · 18. Zakat al-Fitr
  - **Pillar 4, Fasting:** 19. Intro · 20. Who should fast? · 21. Purpose of fasting · 22. When? · 23. Why? · 24. Where?
  - **Pillar 5, Hajj:** 25. Intro · 26. What is Hajj? · 27. Why? · 28. When? · 29. Where? · 30. Who can perform it?
- **Pacing:** A modular micro-series. Each pillar is a mini-unit that runs through a fixed set of questions (who/what/why/when/where). The fasting unit was released ahead of Ramadan as a seasonal drop.
- **Tone:** Warm, plain-English and conceptual. It explains why before how. For example, fasting is presented as training the soul in discipline.
- **Strengths:** It is the best example found of a **repeatable lesson template** (the same set of questions for every unit), a good fit for a daily app. A credible convert scholar teaches it, and it is US-based. It ties seasonal content to a sign-up program.
- **Gaps:** It is conceptual, not step-by-step: the prayer unit does not teach the actual movements and recitations. It covers only the five pillars, with no articles of faith and no community or family issues.
- **View counts / reception:** Fasting set: Ep. 1 has 22.7K, "Why do Muslims fast?" 14K and the others 4–10K. I did not retrieve counts for the other pillars.
- **How accessed:** WebFetch of the Yaqeen series page (episode list), plus a curl parse of YouTube for the lengths and views of the fasting set. Related Yaqeen convert content: the "Convert Stories" series (4 parts, Oduro's own journey covering culture, lineage and identity; https://yaqeeninstitute.org/series/convert-stories) and the panel "Stories Only We Know: The Convert Experience" (Dec 2020, 12.8K views, https://www.youtube.com/watch?v=OWrKsPvmmug).
- **Confidence:** High for the episode list and presenter; medium for the total length.

### I'm A New Muslim — Sheikh Dr. Sajid Umar
- **Presenter & credentials:** Sh. Dr. Sajid Ahmed Umar holds a PhD in Comparative Islamic Law from the Higher Institute of Judiciary in Saudi Arabia, and the channel describes him as a qualified mufti and judge (official channel description, https://www.youtube.com/watch?v=BODkhLAOx-Q). Sunni. He is from South Africa.
- **Platform & URL:** YouTube (official channel), https://www.youtube.com/playlist?list=PLSJDZFn0yX5O0jJLLbGvOFjZolUyJ4Mbj
- **Episodes & total length:** 10 episodes, each 2–3.5 minutes (Ep. 10 is 6 minutes). Total is about 30 minutes.
- **Year(s):** 2022 (Ep. 1 published 2022-07-24).
- **Intended audience:** People who have just taken the shahada.
- **Episodes in order:**
  1. Welcome to Islam
  2. Learn About Allah
  3. Connection with Allah
  4. Shaytan, a Mighty Enemy
  5. Dealing with Difficulties
  6. The Hereafter Connection
  7. Good Friends Circle
  8. Being Proactive
  9. The Prophet's Love for New Muslims
  10. How a New Muslim Should Approach the Qur'an
- **Pacing:** Short-form sequential episodes, each linking to the next. It is built like a daily or near-daily reel series.
- **Tone:** Motivational and warm, focused on the heart.
- **Strengths:** The order is spiritual rather than legal: welcome, then knowing Allah, then relationship with Allah, then threats (Shaytan, hardship), then community and friends, then the Prophet, then the Qur'an. It addresses the emotional reality of new Muslims. The short format suits mobile.
- **Gaps:** No practical how-to (no wudu or salah). Reach is low.
- **View counts / reception:** 2.3K–4.2K per episode. Ep. 10 has only 165, possibly because it came later or as a longer video.
- **How accessed:** curl parse plus the video description.
- **Confidence:** High.

### New Muslim Revert Guide to Islam — SFM-Academy (Suhail Shaikh)
- **Presenter & credentials:** Suhail Shaikh of SFM-Academy, a UK channel judging by the LinkedIn link in the descriptions (https://www.youtube.com/watch?v=AIHuXzvZC-M). I found **no scholarly credentials**. He appears to be a community teacher. Credibility: low.
- **Platform & URL:** YouTube, https://www.youtube.com/playlist?list=PLO7peDcSBsOC2cpUtaiwsiJ4oDHe3wIl_
- **Episodes & total length:** 19 videos, from 0:40 to 24 minutes and mostly 2–10. Total is about 2.5 hours.
- **Year(s):** Dec 2022 to 2024.
- **Intended audience:** "Very new" reverts, including people who know no Arabic yet.
- **Episodes in order:**
  1. Introduction (Understanding Islam and Muslims)
  2. Part 1: What to Do Immediately
  3. Part 2: Ablution and Bath (wudu and ghusl)
  4. Practical Wudu (Part 3)
  5. How to Pray: Conditions of Prayer (Part 4)
  6. What is a Rakat (Part 5)
  7. How to Pray 2 Rakat (Fajr) (Part 6)
  8. How to Pray 3 Rakat (Maghrib)
  9. How to Pray 4 Rakat (Part 7)
  10. How to Recite al-Fatiha
  11. Learn a Short Surah
  12. How to Read Surah al-Kawthar
  13. Ruku (bowing)
  14. What to say when rising from ruku
  15. What to say in sujud
  16. Tashahhud
  17. Salutations on the Prophet
  18. Final supplication in salah
  19. Learning Arabic words
- **Pacing:** A sequential course. It first teaches **the movements of a whole prayer without Arabic**, then adds the Arabic recitations one at a time. This is the reverse of most traditional instruction, and it was the most-viewed approach found.
- **Tone:** Plain and practical.
- **Strengths:** The "pray before you know the Arabic" scaffolding. Its Ep. 7 (2-rakat Fajr for very new Muslims) has **295K views**, by far the most of any convert-specific how-to found, which shows strong demand for this exact entry point.
- **Gaps:** Weak presenter credentials. Nothing on belief or emotional support.
- **View counts / reception:** 2-rakat has 295K, 4-rakat 108K, 3-rakat 84K and "What is a Rakat" 59K. Most others have 3–16K.
- **How accessed:** curl parse plus the video description.
- **Confidence:** High for the content; low for credentials.

### Step by Step: Islam Essentials Course for New Muslims — Embrace: For Reverts by Reverts (ICNA project)
- **Presenter & credentials:** Br. Daniel Rebholz (converted 2017; assistant lead of Embrace Philadelphia; teaches Sunday school) and Sr. Jacquelyn Crutchley (https://embracereverts.org/meet-the-team/). They are lay convert instructors, not scholars. Embrace was founded in Dallas in 2017, became an ICNA project in 2018, and reports about 10 chapters serving 1,000+ converts (https://embracereverts.org/about-embrace/). Credibility: medium for the organization, low-to-medium for the instructors.
- **Platform & URL:** YouTube, https://www.youtube.com/playlist?list=PL4V4Q4_g7GMP4TMZLzbxWpB8CvNq9XY18
- **Episodes & total length:** 13 weekly sessions of 33 minutes to 1.5 hours each, about 13.6 hours in total.
- **Year(s):** Jan to about Apr 2021, livestreamed.
- **Intended audience:** New Muslims in a live online class, with a course packet linked from the Week 1 description (https://www.youtube.com/watch?v=IeTJunGKtnY).
- **Episodes in order:**
  1. Setting the Foundations
  2. The Guidance
  3. Establishing the Foundations
  4. The 3 Categories of Tawheed
  5. The Ruling on Some Common Practices
  6. The 2nd Part of the Shahadah
  7. The 2nd Pillar: Prayer
  8. The 3rd Pillar: Zakat
  9. The 4th Pillar: Fasting
  10. The 5th Pillar: Hajj
  11. Challenges of Life
  12. Beware of Your Declared Enemy (Shaytan)
  13. Preparing to Meet Allah
- **Pacing:** A **weekly 13-week cohort course**, sequential. It follows the five pillars in order, but spends Weeks 2–6 on the shahada (tawheed, then the Prophet), then the remaining pillars, then life challenges, Shaytan, and the hereafter as the closing unit.
- **Tone:** Classroom-style, peer-led by converts.
- **Strengths:** A full arc from belief to practice to spiritual resilience to the hereafter. It is cohort-based, a format masjids already run. It comes from a US convert-care organization connected to WhyIslam/ICNA.
- **Gaps:** Long sessions, recorded live with variable audio. Steep drop-off: Week 1 has 1.3K views and Week 13 has 55. Week 4 suggests a specific theological framing (the three-category model of tawheed), and Week 5 covers rulings on "common practices", so a reviewer should check fit with our neutral Sunni approach.
- **View counts / reception:** 1.3K down to 55.
- **How accessed:** curl parse plus web search for the organization.
- **Confidence:** High for content; medium for credentials.

### New Muslim Crash Course — JannahVersity
- **Presenter & credentials:** The JannahVersity channel. The description says it is made by a US convert speaking from the convert experience (https://www.youtube.com/watch?v=z34lGrSpUts). **The presenter's name and credentials were not found.** Credibility: low or unverified.
- **Platform & URL:** YouTube, https://www.youtube.com/playlist?list=PLwdBT3TTV4slDx8Wht3xQA7Td-xz-UWgd
- **Episodes & total length:** 22 entries (21 numbered episodes plus a fundraising video), mostly 15–40 minutes, about 8 hours in total.
- **Year(s):** 2024–2026, still ongoing.
- **Intended audience:** US converts. The intro explicitly positions it as convert-made and **not recruiting to any group**.
- **Episodes in order:**
  1. Introduction
  2. What is Islam?
  3. Understanding the Shahada
  4. Sincerity in Your Islam
  5. Who is Allah and What is Your Responsibility Towards Him?
  6. The Prophet Muhammad and Our Responsibility Towards Him
  7. The 5 Pillars of Islam
  8. The 6 Pillars of Faith
  9. Basics of Purification
  10. The Beginner's Prayer for New Muslims
  11. How to Pray: The Complete Guide
  12. Getting the Most Benefit From Your Prayers
  13. Comprehensive Zakat Guide
  14. Basics of Fasting
  15. How to Master Ramadan
  - (Support Our Mission)
  16. Intro to the Muslim Character
  17. Character: Sincerity
  18. Character: Protect Your Speech
  19. Character: What You Listen To
  20. Character: What You See
  21. Character: Health & Fitness
- **Pacing:** A sequential course in announced units. The intro lists the planned modules in order: basics of faith → Muslim character → navigating the Muslim community → personal issues for new Muslims → how to study Islam → how to call others. Only the first two modules exist so far.
- **Tone:** Peer-to-peer and candid. It is critical of how communities have neglected converts.
- **Strengths:** The planned module list is a useful outline from someone who has lived the experience, especially the "navigating the community" and "personal issues" modules. It splits prayer into a "beginner's prayer" (Ep. 10, 7 minutes) before the complete guide (Ep. 11, 43 minutes), the same scaffolding SFM-Academy uses.
- **Gaps:** Unknown presenter credentials. Low views. The community and personal modules are not produced yet.
- **View counts / reception:** Ep. 1 has 2.7K; later episodes have 120–1K.
- **How accessed:** curl parse plus the Ep. 1 description.
- **Confidence:** High for titles; low for credentials.

### Embrace Islam Series — Islamic Guidance (UK channel; IslamWise new-Muslim support)
- **Presenter & credentials:** The Islamic Guidance channel is a large UK dawah channel whose owner is not named publicly. Episodes are narrated reminders or excerpts from other speakers. For example, Ep. 2 is a talk by Dr. Laurence Brown, an American convert, ophthalmologist and author of comparative-religion books, as credited in the description (https://www.youtube.com/watch?v=LS2euWqbtks). The descriptions point to IslamWise (islamwise.org) for new-Muslim support. Credibility: medium (it compiles voices; it is not a scholar's own course).
- **Platform & URL:** YouTube, https://www.youtube.com/playlist?list=PLa4GKxenTk5XeOnLjk0gJrWXHiS7ovIkt
- **Episodes & total length:** 7 episodes. After a 2.5-minute trailer, each runs 17–38 minutes. Total is about 2.3 hours.
- **Year(s):** Sept to Nov 2017, about weekly.
- **Intended audience:** People considering Islam and very new Muslims.
- **Episodes in order:**
  1. Embrace Islam Series (trailer)
  2. Who Made Me and Why? (Laurence Brown)
  3. How to Embrace Islam
  4. Why I Embraced Islam
  5. Difficulties of New Muslims
  6. The Pillars of Islam
  7. Articles of Faith (Iman)
- **Pacing:** Weekly and sequential. It moves from purpose of life → how to convert → a testimony → **difficulties** → pillars → articles of faith.
- **Tone:** Reflective, with cinematic production in the channel's typical style.
- **Strengths:** It puts "Difficulties of New Muslims" (Ep. 5) **before** the pillars and articles of faith. That validates emotional support as early content. The production quality is high.
- **Gaps:** Short, and it stops at the basics. Mixed speakers make the credentials uneven.
- **View counts / reception:** "Who Made Me and Why?" has 132K, Pillars 57K, Articles of Faith 50K, Difficulties 27K. Playlist total is 53K.
- **How accessed:** curl parse plus the video descriptions.
- **Confidence:** High for the episodes; medium for credentials.

### New Muslim Guideline (Series) — NewmuslimGuideline project
- **Presenter & credentials:** A multilingual project (Arabic, English, Spanish and more at https://newmuslimguideline.com). Its Arabic title on the site is "al-Mukhtasar al-Mufid lil-Muslim al-Jadid" (a concise guide for the new Muslim). It appears to be a Gulf-produced dawah resource, but **the publisher could not be confirmed**. The videos are narrated and animated. Credibility: medium-low (institution unverified).
- **Platform & URL:** YouTube, https://www.youtube.com/playlist?list=PLrbGgncJCOa3k0vumfMx8Wsu13g1bhtJu
- **Episodes & total length:** 14 videos of 1–11 minutes, about 66 minutes in total.
- **Year(s):** 2023–2024.
- **Intended audience:** Someone who has just embraced Islam. The playlist description says it presents what a new Muslim cannot be without at the start, in brief.
- **Episodes in order:**
  1. My Lord is Allah
  2. My Prophet, the Prophet of Mercy
  3. The Noble Qur'an is the Word of my Lord
  4. I Recognize the Pillars of Islam
  5. I Recognize the Pillars of Iman
  6. How to Make Ablution
  7. Wiping over Khuffs (socks)
  8. Ghusl (ritual bath)
  9. Tayammum (dry purification)
  10. I Learn How to Pray
  11. Learn Surah al-Fatiha (pronunciation)
  12. Hijab of the Muslim Woman
  13. Some Characteristics of the Believer
  14. My Happiness Lies in My Religion
- **Pacing:** A compact sequential mini-course that mirrors a booklet: Allah → Prophet → Qur'an → pillars → iman → purification → prayer → Fatiha → dress → character → closing on happiness.
- **Tone:** Calm and first-person ("My Lord…", "I learn…").
- **Strengths:** The **first-person framing** is a nice identity-building device. Videos are very short. Total runtime is about one hour, close to an ideal "first week" scope. It is multilingual. Several videos have **100K+ views** each.
- **Gaps:** Publisher unverified. The view counts may be paid promotion (they are fairly uniform at about 90–120K). Little emotional or community content.
- **View counts / reception:** 31K–119K per video, but the playlist itself shows only 1.4K views, which suggests views come through ads or search rather than playlist binge-watching.
- **How accessed:** curl parse plus the website homepage.
- **Confidence:** High for titles; low for publisher.

### Beginners Guide to Islam (course) — Think Arabic / Think Revert
- **Presenter & credentials:** The Think Arabic / Think Revert channels. Third-party descriptions say the creator is a revert who accepted Islam without first meeting Muslims. He runs Arabic/Qur'an classes on Skool. **Name and formal credentials not found** (https://www.youtube.com/channel/UCRuL_oqFOyXGZicRHlgNecg). Credibility: low or unverified.
- **Platform & URL:** YouTube "Course", https://www.youtube.com/playlist?list=PLMpZpT9IRpACGlZ-YlYjapNyL9VTr_kFR
- **Episodes & total length:** 18 videos of 9 minutes to 1.5 hours, about 8.7 hours in total.
- **Year(s):** Dec 2020 to about 2025.
- **Intended audience:** Absolute beginners and reverts.
- **Episodes in order:**
  1. Part 1: Core Beliefs
  2. The 6 Pillars of Faith
  3. Part 2: How to Become a Muslim
  4. Part 3: Purification (wudu, ghusl)
  5. Part 4: Learning the Prayer
  6–10. Learn to Pray in Arabic, word by word with follow-along actions: Fajr, Dhuhr, Asr, Maghrib, Isha
  11. Part 5: Going to the Mosque for the First Time
  12. The Opening Du'a
  13. Al-Fatiha word by word
  14. Your first short chapter
  15. Bowing and prostrating, word by word
  16. Bowing and prostrating: what to say
  17. Tashahhud, word by word (part 1)
  18. Salat Ibrahimiyya, word by word (part 2)
- **Pacing:** A loosely sequential course. The core is Parts 1–5 (beliefs → becoming Muslim → purification → prayer → mosque), followed by **follow-along prayer videos, one for each daily prayer**, and then word-by-word drills.
- **Tone:** Friendly tutor.
- **Strengths:** "Going to the Mosque for the First Time" is a topic other series rarely cover. The **follow-along video for each prayer** lets a learner pray alongside the screen. Part 1 has **321K views**.
- **Gaps:** Unverified teacher. Very long prayer lesson (1.5 hours).
- **View counts / reception:** Part 1 has 321K. The playlist total is 163K.
- **How accessed:** curl parse plus the description (which mostly promotes classes).
- **Confidence:** High for titles; low for credentials.

### Foundations of Islam — Hamza Yusuf (Islam On Demand)
- **Presenter & credentials:** Sh. Hamza Yusuf Hanson is an American convert (1977) and co-founder and president of Zaytuna College in Berkeley. He studied for many years with traditional scholars in the UAE, Mauritania and elsewhere. Sunni (Maliki/Ash'ari). The series was distributed by Islam On Demand (https://www.islamondemand.com). Credibility: **high**.
- **Platform & URL:** YouTube, https://www.youtube.com/playlist?list=PL83A449092F8A3CBF. Also on Spotify, per the description at https://www.youtube.com/watch?v=ICu3ITHnBoM
- **Episodes & total length:** 5 sessions split into 7 videos of about 1–1.6 hours each, about 8+ hours in total.
- **Year(s):** The lectures are older (probably 1990s–2000s, original date not verified). They were uploaded in 2011.
- **Intended audience:** General: non-Muslims, new Muslims and lifelong Muslims wanting a foundation.
- **Episodes in order:**
  1. How the Qur'an Was Revealed and Compiled
  2. Pillars of Practice (2 parts)
  3. Articles of Faith (2 parts)
  4. The Concept of Ihsan
  5. Signs of the Last Day
- **Pacing:** A sequential lecture course. It notably **starts with the Qur'an** (its source and authority), then follows the hadith of Jibril structure: Islam (practice) → Iman (faith) → Ihsan (excellence) → the Hour.
- **Tone:** Erudite lectures.
- **Strengths:** The hadith of Jibril framework (Islam / Iman / Ihsan / the Hour) is the classical sequencing device, and this series uses it explicitly. High credibility and high views (335K for session 1).
- **Gaps:** Long lectures with no practical how-to. Older audio and video.
- **View counts / reception:** Session 1 has 335K, Last Day 267K, Articles of Faith Pt 1 169K, Ihsan 135K.
- **How accessed:** curl parse plus the video description.
- **Confidence:** High for content and order; medium for the original recording date.

### Understanding Islam — Abdal Hakim Murad (Islam On Demand)
- **Presenter & credentials:** Abdal Hakim Murad (Timothy Winter) is a British convert, Shaykh Zayed Lecturer in Islamic Studies at the University of Cambridge, and dean of Cambridge Muslim College. Sunni. Credibility: **high**.
- **Platform & URL:** YouTube, https://www.youtube.com/playlist?list=PL85C4200AAB2EDAFB
- **Episodes & total length:** 6 sessions in 8 videos of 1–1.7 hours each. The playlist description gives the total as about 10 hours 40 minutes.
- **Year(s):** Recorded at the Dar al Islam Teachers' Institute in New Mexico (a retreat for non-Muslim educators). Uploaded in 2011; recording year not verified.
- **Intended audience:** Non-Muslim academics. The playlist description says new and lifelong Muslims also benefit.
- **Episodes in order:**
  1. The Five Pillars of Islam
  2. Sunnah, Shari'ah, Sectarianism and Ijtihad
  3. Scriptural Links: Judaism, Christianity and Islam
  4. Muslim–Christian Views of One Another
  5. Muslim Theology and Islamic Mysticism (2 parts)
  6. The Muslim Influence on Europe and the West (2 parts)
- **Pacing:** A university-style seminar course.
- **Tone:** Academic and intellectual.
- **Strengths:** It is strong on the questions converts from Christian backgrounds carry with them (sessions 3–4) and on Islamic civilizational identity (session 6), which supports a convert's sense of belonging.
- **Gaps:** Not practical. Aimed at outsiders. Very long.
- **View counts / reception:** Session 1 has 104K and Theology Pt 1 has 153K.
- **How accessed:** curl parse plus the playlist description.
- **Confidence:** High.

### A Guide for the New Muslim — Jamaal Zarabozo (Islamic Lectures.us)
- **Presenter & credentials:** Jamaal al-Din Zarabozo is an American convert (1976). He holds a BA in Economics from UC Berkeley and an MA from UC Davis, and studied Islamic sciences with Dr. M. M. al-Azami. He has been imam in Boulder, Colorado, and is the author of *Purification of the Soul* and a commentary on Nawawi's Forty Hadith (https://www.goodreads.com/author/show/292272.Jamaal_al_Din_M_Zarabozo; https://en-academic.com/dic.nsf/enwiki/10178521). Sunni. Credibility: **medium-high**.
- **Platform & URL:** YouTube (fan or archive channel), https://www.youtube.com/playlist?list=PLY8If6OHclJaUPYtIb2BrRJZo5oDGilYh
- **Episodes & total length:** 12 parts of 52–78 minutes each, about 12 hours in total.
- **Year(s):** Uploaded in 2019; the original recording date is unknown.
- **Intended audience:** New Muslims.
- **Episodes in order:** Parts 1–12 are all titled "A Guide for the New Muslim Part N". **The topics of individual parts were not retrievable** because the descriptions are empty. The title matches Zarabozo's book *A Guide for the New Muslim*, which suggests the lectures follow the book's chapter order. I have not verified this.
- **Pacing:** A long sequential lecture course.
- **Tone:** Scholarly lectures.
- **Strengths:** A convert scholar teaching a full course to converts. It probably mirrors a book that could be cross-referenced.
- **Gaps:** Per-episode topics unknown. Very low views (637 down to 25).
- **View counts / reception:** Very low.
- **How accessed:** curl parse plus web search for the bio.
- **Confidence:** High for existence; low for topic sequence.

### Introduction to Islam for Muslims — Sh. Suhaib Webb (NYU Islamic Center)
- **Presenter & credentials:** Imam Suhaib Webb is an American convert who graduated from al-Azhar University's College of Shari'ah. He is a former imam of ISBCC Boston and a resident scholar at the NYU Islamic Center. Sunni. Credibility: **high**.
- **Platform & URL:** YouTube, https://www.youtube.com/playlist?list=PLaCQuJRS9KnubRpWNUjli2sKgezreYeIp
- **Episodes & total length:** 9 weekly classes of 38–92 minutes each, about 9.3 hours in total.
- **Year(s):** Sept to Dec 2021.
- **Intended audience:** College students who are Muslim and want the basics. It is not convert-specific but covers the same ground.
- **Episodes in chronological order** (the playlist is out of order; I sorted by the dates in the titles):
  1. Course Introduction (9/16)
  2. Doubt and Transformations (10/7)
  3. Understanding Fate (10/14)
  4. The Qur'an, Knowing Allah and the Marriage of Contradictions (undated, about Oct)
  5. Who are Ahl al-Sunna (undated)
  6. What is Tawhid (11/17)
  7. Angels (11/24)
  8. Belief in the Books (12/8)
  9. The Qur'an and its Preservation (12/15)
- **Pacing:** A weekly semester course that walks through the articles of faith.
- **Tone:** Conversational and campus-oriented. It addresses doubt directly.
- **Strengths:** It deliberately opens with **doubt** before doctrine, which is relevant to converts who arrive with questions.
- **Gaps:** Not convert-specific. Long classes. Very low views.
- **View counts / reception:** 138–426 per class.
- **How accessed:** curl parse.
- **Confidence:** High for titles; medium for order.

### New Muslim Course 1: First Steps — Masturah Stewart (aboutislamnow)
- **Presenter & credentials:** Masturah Stewart, a female teacher who runs the aboutislamnow course site (https://aboutislamnow.wordpress.com/new-to-islam/first-steps/). **Credentials not found.** Credibility: low or unverified.
- **Platform & URL:** YouTube, https://www.youtube.com/playlist?list=PL0_gOZ-tx9xo79h4avdUVCJGRdj5RPqPt
- **Episodes & total length:** An intro, 8 lessons of 10–14 minutes, and 2 "New Muslim Diary" videos. About 2 hours in total.
- **Year(s):** 2018.
- **Intended audience:** New Muslims. The course breaks up the material of a "Learn to Pray in 3 easy steps" course into small parts for memorization.
- **Episodes in order.** The lesson plan from the intro description (https://www.youtube.com/watch?v=ATsmA3nWsCo) shows that **every lesson interleaves four strands**: (a) a memorization piece, (b) a practical skill, (c) a belief topic, (d) a manners or halal topic.
  1. Fatiha v1–4 · prayer times · The Creator · major sins
  2. Fatiha v5–7 · wudu · the Prophets · when to make wudu
  3. Tashahhud pt 1 · prayer movements · the miracle of Muhammad · halal/haram food
  4. Tashahhud pt 2 · units of prayer · pillars of faith · eating manners
  5. Various du'as · places of supplication · intention · pillars of Islam · Qur'an manners
  6. Salawat on the Prophet · ghusl · importance of prayer · acts of natural disposition (fitra)
  7. Du'a of protection · traveler's prayer · status of parents · why there are different religions · awrah
  8. Al-Ikhlas · fasting basics · angels
  - Then: New Muslim Diary 1, Testimony of Faith · New Muslim Diary 2, A New Name
- **Pacing:** Sequential lessons, each a **spiral or interleaved bundle** rather than one topic per lesson.
- **Tone:** Gentle and teacherly.
- **Strengths:** The **interleaved lesson design** (memorize + do + believe + live) maps almost exactly onto a daily-lesson card structure for our app. It is the only series found that explicitly spreads Fatiha memorization across days (v1–4, then v5–7). The "New Name" diary touches convert identity.
- **Gaps:** Unverified teacher. Low production values and low views.
- **View counts / reception:** Lesson 1 has 3K; the others 110–490.
- **How accessed:** curl parse plus the full description text.
- **Confidence:** High for the lesson plan; low for credentials.

### The Faith Revival — Dr. Omar Suleiman (Yaqeen Institute) [daily-format reference]
- **Presenter & credentials:** Dr. Omar Suleiman is founder and president of Yaqeen Institute, resident scholar at Valley Ranch Islamic Center (Irving, TX), and holds a PhD in Islamic Thought and Civilization (International Islamic University Malaysia). Sunni. Credibility: **high**.
- **Platform & URL:** YouTube, https://www.youtube.com/playlist?list=PLQ02IYL5pmhFIX9rUv_TZq60pWmItUAT0; also https://yaqeeninstitute.org/series/faith-revival
- **Episodes & total length:** 30 episodes of 4–7 minutes each, about 2.7 hours in total.
- **Year(s):** **Daily through Ramadan 2017.** Ep. 1 was published 2017-05-27 and Ep. 30 on 2017-06-25 (https://www.youtube.com/watch?v=hYQEW37_hWM).
- **Intended audience:** General Muslims, not converts specifically. It is included as **the clearest daily-format benchmark** from a top-tier presenter.
- **Episodes in order:** 1 Faith is Refuge · 2 Your Faith Wears Out · 3 Shaky Foundations · 4 He is Not a Believer When… · 5 Even if Abu Dharr Doesn't Like It · 6 Healthy Fluctuations · 7 You're No Angel · 8 Two Supplications of the Prophet · 9 Ammar's Heart and Omar's Shirt · 10 Move Beyond the Catalyst · 11 Remembers His Place in Front of Allah · 12 Omar Was Always in the Zone · 13 Guidance After Iman · 14 Allah Rewards You for Your Doubts If… · 15 The Faith of the Prophets Before · 16 Two Hungry Wolves · 17 Poverty Leads to Disbelief · 18 Envy and Faith · 19 Faith in Hardship · 20 Sweetness of Faith · 21 They Don't Believe Until… · 22 Why Do People Leave Faith · 23 Unreasonable Goals · 24 The Guardian of Faith · 25 Fortress of Faith · 26 Friends of Faith · 27 Bend, Don't Break · 28 The Gift of Faith · 29 Yaqeen is Full Faith · 30 The End of the Journey of Faith
- **Pacing:** **Daily**, with one 5-minute episode a day for 30 days. It is designed as an arc: it opens by defining faith as a refuge, normalizes ups and downs early (Eps 2, 6, 7), and closes with "end of the journey".
- **Tone:** Warm, story-driven (Companions' anecdotes), brief.
- **Strengths:** It proves the 5-minute daily format works at scale. Early episodes **normalize fluctuating faith**, which is highly relevant to converts.
- **Gaps:** Not convert-specific. No practical how-to.
- **View counts / reception:** **Retention data:** Ep. 1 has 129K, Ep. 2 190K, Ep. 3 69K, then a gradual slide to about 20–30K in the 20s, and Ep. 30 has 18K. That is about 86% decay from the first to the last episode. The outlier is **Ep. 14, on doubts, with 293K, the highest in the series**, which suggests that content about doubt draws viewers well beyond the series' subscribers.
- **How accessed:** curl parse plus the video publish dates.
- **Confidence:** High.

### "I'm A New Muslim"-adjacent standalone videos with high reach (not series) — Mufti Menk; how-to-pray demonstrations
- **Presenter & credentials:**
  - Mufti Ismail Menk is Grand Mufti of Zimbabwe's Council of Islamic Scholars (Ulama Council). He studied in Madinah and in Gujarat, India. Sunni. Credibility: high, and his reach is very large.
  - Mohammad AlNaqwi is a Kuwait-based content creator. Credentials unknown.
  - Majed Mahmoud is an Australian imam and teacher. Credentials partially known; not verified here.
- **Platform & URL:**
  - Menk, "Advice to Recent Reverts": https://www.youtube.com/watch?v=MLRLW-Co80Y
  - Menk, "I'm Ready to Revert… What's Next?": https://www.youtube.com/watch?v=xLRDTpYxJQg
  - Menk, "Challenges Faced by Reverts": https://www.youtube.com/watch?v=f1sreL6cWKg
  - AlNaqwi, "How to Pray? Step by Step": https://www.youtube.com/watch?v=zalLv2NY98k
  - Majed Mahmoud, "How to Pray Salah | Step by Step": https://www.youtube.com/watch?v=2ZEmsdEOpbk
- **Episodes & total length:** The Menk videos are standalone talks of 6–26 minutes. AlNaqwi's is 14 minutes. Majed Mahmoud's is 21.5 minutes.
- **Year(s):** Menk 2021–2024; AlNaqwi 2018; Mahmoud Aug 2025.
- **Intended audience:** Reverts (Menk); anyone learning salah (the prayer videos).
- **Episodes in order:** These are not series. **Mufti Menk has no dedicated new-Muslim playlist on his official channel.** His series are Ramadan series for a general audience (e.g., "Life of the Final Messenger" 2026, 30 episodes of about 6–10 minutes; "Dealing with Difficulty" 2024). Majed Mahmoud's description lists the order of the prayer as he teaches it: takbir and hand placement → Fatiha plus another surah → ruku → sujud → sitting between the prostrations → first and final tashahhud → protective du'as → taslim.
- **Pacing:** Single videos.
- **Tone:** Menk is reassuring and motivational. The prayer videos are demonstrations.
- **Strengths:** They show the **demand ceiling**. AlNaqwi's step-by-step prayer has **5.0M views**, Majed Mahmoud's has about 1.0M in about one year, Menk's "Advice to Recent Reverts" has 307K, and "I'm Ready to Revert… What's Next?" has 125K. A single, well-made "how to pray" video gets 10–100× the views of any convert course.
- **Gaps:** No sequence. Converts must assemble their own path.
- **View counts / reception:** As above (counts as of 2026-10-05).
- **How accessed:** curl search plus the video pages.
- **Confidence:** High for the view counts; medium for the presenters' credentials (AlNaqwi and Mahmoud were not deeply verified).

### Absolute Essentials of Islam (course) — SeekersGuidance, Sh. Faraz Rabbani and Ustadh Abdullah Misra
- **Presenter & credentials:** Sh. Faraz Rabbani is founder and executive director of SeekersGuidance (Canada). He studied for about 10 years in Damascus and Amman. Sunni (Hanafi). Credibility: **high** (https://en.wikipedia.org/wiki/Faraz_Rabbani).
- **Platform & URL:** SeekersGuidance Academy (free, login required): https://academy.seekersguidance.org/course/view.php?id=114. A 2024 youth version, "Absolute Essentials of Beliefs and Worship", was livestreamed on YouTube (e.g., https://www.youtube.com/watch?v=pkpDllPirOo).
- **Episodes & total length:** 14 lessons, per a search-result summary of the course page. The course page itself returned 403 to my fetch, so I could not read the lesson titles.
- **Year(s):** The course is long-running; the YouTube youth version is from 2024.
- **Intended audience:** Beginners and **new Muslims**. It is the first course of SeekersGuidance's curriculum (https://seekersguidance.org/articles/general-artices/free-online-courses/). SeekersGuidance also publishes a "New to Islam Reader" resource list for converts (https://seekersguidance.org/articles/featured-articles/new-to-islam-reader-a-trusted-collection-of-resources-for-converts/).
- **Episodes in order:** **Not retrieved.** The course follows the three dimensions of the hadith of Jibril: iman (Allah, prophets, hereafter) → islam (valid purification and prayer) → ihsan (sins and vices to avoid, virtues to adopt). It is based on Rabbani's book *The Absolute Essentials of Islam* (Hanafi), published by White Thread Press.
- **Pacing:** A self-paced online course.
- **Tone:** Traditional and text-based.
- **Strengths:** A credible, structured, free and madhhab-specific (Hanafi) path. Like Hamza Yusuf's series, it uses the **hadith of Jibril** as its spine.
- **Gaps:** Lessons are not public on YouTube. It is Hanafi-specific (and a Shafi'i version exists). Access needs an account.
- **View counts / reception:** n/a. The YouTube youth livestreams have under 1K views each.
- **How accessed:** Web search summaries. The direct fetch got 403.
- **Confidence:** Medium.

---

## Searched but no dedicated new-Muslim series found

- **Yasir Qadhi / EPIC Masjid:** I found no new-Muslim or foundations playlist. EPIC posts shahada clips (e.g., https://www.youtube.com/watch?v=Wg1RLbUmxFE, 32K views) and Q&A on convert issues ("Ask Shaykh YQ #165", https://www.youtube.com/watch?v=4tsVq4Cyc7E), plus long general courses (Seerah 104 parts, "Message of the Qur'an in 30 Lessons"). Confidence: medium. A new-Muslim class may exist offline at EPIC without being uploaded.
- **Nouman Ali Khan / Bayyinah:** I found no beginner series for new Muslims. There is a standalone "Advice for New Muslims" (2014 re-upload, 13K, https://www.youtube.com/watch?v=y0MkHZfJzQM). The "Jesus in the Qur'an" series (16 episodes) is relevant to converts from Christian backgrounds. Medium confidence.
- **Omar Suleiman:** I found no new-Muslim-specific series. His daily Ramadan series (Faith Revival 2017, Angels in Your Presence, Why Me 2024, The Other Side 2025, The Name I Need 2026) are the format reference. Yaqeen's convert work runs through Sh. Abdullah Oduro (above).
- **Mufti Menk:** Standalone revert talks only (see above).
- **iERA (Abdur Raheem Green and others):** The YouTube "New Muslim" playlist (https://www.youtube.com/playlist?list=PLACF16E8ABC47F525, 43 videos) is mostly **revert-story testimonials** ("Muslim Now Revert Series"), retreat promos and a few retreat talks ("Belief in the Messengers" and "Belief in the Books" by Abdur Raheem Green, 2021). Its playlist description says iERA launched a "Step-by-Step course for New Muslims", but it is hosted off YouTube and I did not access it. Medium confidence.
- **The Deen Show (Eddie Redzovic):** Interview and talk-show format, not a course. **Reputation note:** it is popular (it claims millions of followers), but it has been criticized for a lack of rigor, and a 2010s episode with guest Kevin Barrett promoted 9/11 conspiracy claims (MEMRI clip: https://www.memri.org/tv/chicago-deen-show-eddie-redzovic-kevin-barrett-9-11-truth-israel-denying-muslim-involvement-jihad). Not recommended as a curriculum source.
- **OnePath Network (Australia):** No step-by-step "How to Pray" series was found on its channel. It has short single videos ("Most common mistakes in the Prayer", 195K, https://www.youtube.com/watch?v=dClt_aGyajA), a short-form "Sunnah Series", and drama shorts ("Whispers").
- **MercifulServant, Towards Eternity, FreeQuranEducation:** Story, reminder and animation channels. Towards Eternity has "Why I Chose Islam" revert stories and an AI-visualized Seerah. FreeQuranEducation's "I'm The Best Muslim" is an animated manners comedy (S1 compilation has 13.7M views, https://www.youtube.com/watch?v=lGind6Cn0Tw), aimed at kids and youth. None of these is a sequenced convert course.
- **Digital Mimbar:** It hosts an IslamWise promo playlist and Yusuf Estes' "Beauties of Islam" (https://www.youtube.com/playlist?list=PL4E3AFB1CB5FF70CB), which is introductory dawah, not a new-Muslim course.
- **Yusuf Estes:** Introductory dawah lectures (e.g., "Born Again in Islam", a 10-part upload). He runs Guide US TV. I found no structured new-Muslim course.
- **Mohammed Hijab / Sapience Institute:** Debate and apologetics. Not a fit for a convert onboarding sequence; I did not pursue it further.
- **Sh. Mikaeel Smith (Qalam Institute):** A convert scholar with long weekly halaqa series ("The Names", "Hurdles", "In His Footsteps", "The Journey", "Know Thy Enemy"), none of them convert-specific. "Hurdles" (a weekly halaqa, 24+ classes, https://www.youtube.com/playlist?list=PL7esqAGrtKP0oTkEIztnFqsLXU3XY3bsR) may cover spiritual obstacles. Not examined in detail.
- **Streaming (Alchemiya / Deenstream):** Alchemiya is a UK "Muslim Netflix" founded in 2015 (https://en.wikipedia.org/wiki/Alchemiya). Its convert-related content is documentary, e.g., *New Muslim Cool* (PBS POV) about the Latino convert Hamza Perez, plus Deenstream's curated scholar lectures (https://watch.alchemiya.com/deenstream). I found **no structured new-Muslim course** on it. I did not find Deenflix content aimed at converts. The Yaqeen app (app.yaqeen.io) hosts Yaqeen's series, including the convert material above. I could not confirm a separate in-app convert track.
- **Viral "30 days as a new Muslim":** I found none. "First Ramadan as a revert" content exists as **personal vlogs** with small reach (e.g., "Fasting alone as a Muslim Revert | Day 1", 10.5K, https://www.youtube.com/watch?v=vfQy9JZjvD0), and those are diaries, not curricula.
- **Other convert courses noted but not fully catalogued:** "New Shahadah Class" (Masjid Ibn Baaz, South Philadelphia, livestreamed weekly 2025, Ep. 1 has 4K views, https://www.youtube.com/watch?v=cwyrLIxvDaA). "New Muslim Course" by Ustadh Ismail Bullock (Islamic Information Center, Dubai, 2020, https://www.youtube.com/watch?v=LWZLj9VnVqM). "A Comprehensive Guide for the New Muslim" by Anwar Wright (https://www.youtube.com/playlist?list=PLWn-xr2ddFqHW1gJPNFCnVSndh-NE5r5a). "Seerah Course: Lessons for New Muslims" by the Intro to Islam channel (12 lessons, 23–44 minutes each, Why Seerah → Early Life → Khadija → Revelation → Quraysh → Hamza and Umar → Night Journey → Hijra → Medina → Badr → Between Badr and Uhud → Uhud; https://www.youtube.com/playlist?list=PLVnGeZczzv1B549C1kmtFHOpK194F1CgO; presenter not verified).

---

## Cross-series observations

- **Episode 1 almost always covers the shahada or "who is Allah", rarely prayer.** WhyIslam opens with the conditions of the shahada. Yaqeen's Pillar 1 is the shahada. JannahVersity goes "What is Islam" → shahada. NewMuslimGuideline opens with "My Lord is Allah". Sajid Umar opens with "Welcome to Islam" → "Learn about Allah". Embrace opens with "Setting the Foundations" → tawheed. The exceptions are SFM-Academy ("what to do immediately", then straight to wudu) and Hamza Yusuf (the Qur'an's revelation). **Typical early sequence: shahada/Allah → Prophet → pillars → articles of faith → purification → prayer.** Then fasting, zakat and Hajj, then character and manners, and community or hereafter topics last.
- **Prayer is taught in two layers by the most practical series.** First comes a "beginner's prayer": the movements with minimal Arabic (SFM-Academy Ep. 7, JannahVersity Ep. 10). Then the Arabic recitations are added **one phrase at a time** (WhyIslam Prayer Series, one phrase per video; Masturah Stewart spreading Fatiha over two lessons; Think Arabic word by word). WhyIslam teaches the short fixed phrases (takbir, the ruku and sujud phrases) **before** al-Fatiha. The prayer topics with the highest views are all of this "very new Muslim" kind (SFM 2-rakat Fajr 295K; standalone step-by-step guides at 1M–5M).
- **Typical episode length splits into three tiers.** (a) Micro: 2–7 minutes (Sajid Umar, Yaqeen 5 Pillars, WhyIslam Prayer, NewMuslimGuideline, Faith Revival). (b) Standard: about 10 minutes (the WhyIslam New Muslim Series is fixed at about 10). (c) Class: 30–90 minutes (Embrace, JannahVersity, Zarabozo, Webb, Hamza Yusuf, Murad). **Every series with episodes over 30 minutes shows severe drop-off** (Embrace Week 1 has 1.3K views and Week 13 has 55; Zarabozo goes from 637 to 25). The short formats keep a higher share of viewers.
- **Sequential course vs loose collection.** Designed as sequential courses: Embrace Step by Step (13 weeks), JannahVersity (announced modules), SFM-Academy, WhyIslam Prayer Series, Masturah Stewart, Sajid Umar, Yaqeen 5 Pillars (modular), Hamza Yusuf, Murad. Loose or partly calendar-driven: WhyIslam New Muslim Series (Eid at Ep. 4, Ramadan at Ep. 17), iERA's "New Muslim" playlist (testimonials), and fan-compiled "revert" playlists. Many "new Muslim" playlists on YouTube are simply **compilations of other people's videos** and teach nothing in sequence.
- **Most credible and widely used presenters with convert-relevant content:** Sh. Abdullah Oduro (Yaqeen; convert and Madinah graduate; the only top-tier presenter with an explicit convert curriculum). Omar Suleiman (Yaqeen; format benchmark). Hamza Yusuf and Abdal Hakim Murad (both converts; long-form foundations). Suhaib Webb and Jamaal Zarabozo (converts; course-length material). Faraz Rabbani (SeekersGuidance; a structured free course). Sajid Umar (PhD; short convert series). Mufti Menk (high reach, but standalone talks only). Several high-reach convert how-to channels (SFM-Academy, Think Arabic, JannahVersity, NewMuslimGuideline) have **unverified presenter credentials**. That is a gap our product can fill by pairing practical step-by-step formats with credible teachers.
- **Daily-format evidence.** Yaqeen's Faith Revival ran daily for 30 days at about 5 minutes each. It lost about 86% of viewers from Ep. 1 to Ep. 30 but held 20–30K per episode through the middle, and its spike was the episode on doubts (293K). Sajid Umar's short convert series held fairly steady across Eps 1–9 (2.3K–4.2K, with later episodes such as "Good Friends" and "Being Proactive" *above* Ep. 1). That suggests community and agency topics keep viewers at least as well as theology. I found no daily convert series with real scale. **The daily, convert-specific niche appears unoccupied on YouTube.**
- **Emotional, identity and community topics are present but placed inconsistently.** Islamic Guidance puts "Difficulties of New Muslims" at Ep. 5. Sajid Umar puts Shaytan, hardship and friends at Eps 4–7. JannahVersity plans "Navigating the Community" and "Personal Issues" as later modules. Yaqeen keeps convert identity in a separate "Convert Stories" track. The WhyIslam and NewMuslimGuideline series contain almost none. **Recommendation for our sequence: introduce the emotional and support content early (week 1–2), not at the end.**
- **Repeatable lesson templates work.** Yaqeen applies the same questions (who, what, why, when, where) to every pillar, and Masturah Stewart applies the same four strands (memorize, do, believe, live) to every lesson. Either can serve as a template for our daily lesson cards.
- **The mentor side is almost absent.** WhyIslam's "Revert Mentoring Series" (13 × 5 minutes) is the only video series found that trains masjid volunteers who support converts. That is a selling point for a masjid-facing product, which could include a mentor companion.
- **Access caveat.** I captured all YouTube data through raw HTML parsing because WebFetch saw only the page footer. Playlists over about 100 videos would be truncated, but none here exceeded 46. View counts are a snapshot from 2026-10-05.
