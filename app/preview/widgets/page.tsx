// Every interactive widget with sample data, without signing in: /preview/widgets (development only).
// Handy for checking a widget before using it in a lesson (Curriculum Spec §4.6).
import { notFound } from "next/navigation";
import { getLesson, lessonExtras } from "@/lib/content/load";
import { renderLesson, type RenderedScreen } from "@/lib/content/render";
import { LessonPlayer } from "@/components/lesson/LessonPlayer";

export const dynamic = "force-dynamic";

const SCREENS = [
  { type: "widget", widget: "prayer-times", prompt: "Prayer times" },
  { type: "widget", widget: "qibla", prompt: "Qibla" },
  { type: "widget", widget: "rakahs", prompt: "Rak'ahs" },
  { type: "widget", widget: "fast-day", prompt: "A fasting day", text: "Drag from the pre-dawn meal to iftar." },
  { type: "widget", widget: "moon", prompt: "The Islamic month", text: "Each month starts with the new crescent." },
  {
    type: "widget",
    widget: "tasbih",
    prompt: "After the prayer",
    phrases: [
      { translit: "Subhan Allah", meaning: "Glory be to Allah", count: 3 },
      { translit: "Al-hamdu lillah", meaning: "All praise is for Allah", count: 3 },
      { translit: "Allahu akbar", meaning: "Allah is the greatest", count: 3 },
    ],
  },
  {
    type: "widget",
    widget: "timeline",
    prompt: "A timeline",
    events: [
      { when: "570", title: "Born in Makkah", text: "Sample event text." },
      { when: "610", title: "The first revelation", text: "Sample event text.", pic: "quran" },
      { when: "622", title: "The move to Madinah", text: "Sample event text." },
    ],
  },
  {
    type: "widget",
    widget: "masjid-map",
    prompt: "Your masjid",
    areas: { shoes: "Shoes off here.", wudu: "Wash for prayer.", hall: "Where everyone prays.", mihrab: "Shows the qibla.", minbar: "Friday sermon." },
  },
  { type: "widget", widget: "rows", prompt: "Joining the prayer" },
  { type: "widget", widget: "zakat", prompt: "Zakat", nisab: 5000 },
  {
    type: "widget",
    widget: "iman-graph",
    prompt: "Faith goes up and down",
    points: [
      { label: "The start", text: "Sample." },
      { label: "A dip", text: "Sample." },
      { label: "Back up", text: "Sample." },
    ],
  },
];

export default function WidgetsPreview() {
  if (process.env.NODE_ENV === "production" && process.env.PREVIEW_ENABLED !== "1") notFound();
  const base = getLesson("day-01")!;
  const lesson = renderLesson(base, {
    masjidName: "Demo Masjid",
    madhab: "hanafi",
    jumuahTime: "1:30 pm",
    mentorName: null,
    firstName: "Keisha",
    isMinor: false,
    gender: "female",
  });
  lesson.title = "Widgets";
  lesson.prayerPhrase = null;
  lesson.screens = SCREENS.map((s, i) => ({ n: i + 1, ...s })) as RenderedScreen[];
  const { citations, glossary } = lessonExtras(base);
  return <LessonPlayer lesson={lesson} citations={citations} glossary={glossary} preview exitHref="/preview" />;
}
