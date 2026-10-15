// Every picture id a lesson may use (`pic:` in the vault). The compiler rejects anything not listed here.
//   pose:<pose>    the prayer figure in that position (school- and gender-aware)
//   wudu:<part>    a body diagram with that part highlighted
//   <scene>        a hand-drawn scene (components/art/Scenes.tsx)
//   icon:<Name>    any Lucide icon (lucide.dev/icons), e.g. icon:Clock, drawn on a tile
import type { Pose } from "./types";

export const POSES: Pose[] = [
  "stand",
  "takbir",
  "qiyam",
  "ruku",
  "itidal",
  "sujud",
  "jalsa",
  "tashahhud",
  "salam-right",
  "salam-left",
  "dua",
];

export const WUDU_PARTS = ["hands", "mouth", "nose", "face", "arms", "head", "ears", "feet"] as const;
export type WuduPart = (typeof WUDU_PARTS)[number];

export const SCENES = [
  "ghusl",
  "kaaba",
  "masjid",
  "prayer-mat",
  "quran",
  "crescent",
  "qibla",
  "intention",
  "prayer-times",
  "family",
  "community",
  "dua",
  "water",
  "fresh-start",
  "conversation",
] as const;
export type Scene = (typeof SCENES)[number];

/** Is this a known picture id? `iconExists` checks Lucide names (passed in so this file stays tiny). */
export function isPic(id: string, iconExists: (name: string) => boolean): boolean {
  if (id.startsWith("pose:")) return (POSES as string[]).includes(id.slice(5));
  if (id.startsWith("wudu:")) return (WUDU_PARTS as readonly string[]).includes(id.slice(5));
  if (id.startsWith("icon:")) return iconExists(id.slice(5));
  return (SCENES as readonly string[]).includes(id);
}

/** Icons the app's own screens draw through <Pic>; always bundled alongside the lessons' icons. */
export const UI_ICONS = ["MessageCircleQuestionMark", "NotebookPen", "MessagesSquare", "Theater", "Target"];
