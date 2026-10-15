"use client";
// Draws any picture id from lib/content/pics.ts. Poses use the reader's school and gender.
import { createContext, use } from "react";
import type { Madhab, Pose } from "@/lib/content/types";
import type { Gender } from "@/lib/content/render";
import type { Scene, WuduPart } from "@/lib/content/pics";
import { ICONS } from "./icons.generated";
import { PrayerFigure } from "./PrayerFigure";
import { BodyDiagram, SceneArt } from "./Scenes";

export const ArtContext = createContext<{ madhab: Madhab | null; gender: Gender | null }>({ madhab: null, gender: null });

export function Pic({ id, className = "h-44 w-full", tone = "cobalt" }: { id: string; className?: string; tone?: "cobalt" | "tile" | "dawn" }) {
  const { madhab, gender } = use(ArtContext);
  if (id.startsWith("pose:")) return <PrayerFigure pose={id.slice(5) as Pose} madhab={madhab} gender={gender} className={className} />;
  if (id.startsWith("wudu:")) return <BodyDiagram part={id.slice(5) as WuduPart} className={className} />;
  if (id.startsWith("icon:")) {
    const Icon = ICONS[id.slice(5)];
    if (!Icon) return null;
    const bg = { cobalt: "bg-cobalt-soft text-cobalt", tile: "bg-tile-soft text-tile", dawn: "bg-dawn-soft text-dawn-deep" }[tone];
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <div className={`flex aspect-square h-full max-h-32 items-center justify-center rounded-[2rem] ${bg}`}>
          <Icon className="h-1/2 w-1/2" strokeWidth={2.2} aria-hidden />
        </div>
      </div>
    );
  }
  return <SceneArt scene={id as Scene} className={className} />;
}
