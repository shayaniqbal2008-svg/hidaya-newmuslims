"use client";
// Hand-drawn scenes and the wudu body diagram. Flat, faceless and tile-coloured, so they read in light
// and dark mode. One gentle loop each at most (water falling, a glow): never decoration for its own sake.
import type { Scene, WuduPart } from "@/lib/content/pics";

const C = {
  ink: "var(--ink)",
  cobalt: "var(--cobalt)",
  cobaltDeep: "var(--cobalt-deep)",
  cobaltSoft: "var(--cobalt-soft)",
  tile: "var(--tile)",
  tileSoft: "var(--tile-soft)",
  dawn: "var(--dawn)",
  dawnSoft: "var(--dawn-soft)",
  line: "var(--line)",
  surface: "var(--surface)",
};

function Drops({ x, y, n = 3 }: { x: number; y: number; n?: number }) {
  return (
    <g fill={C.tile}>
      {Array.from({ length: n }, (_, i) => (
        <path key={i} d={`M${x + i * 9} ${y} q-4 6 0 9 q4 -3 0 -9z`}>
          <animateTransform attributeName="transform" type="translate" values={`0 -6; 0 8`} dur="1.4s" begin={`${i * 0.35}s`} repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;1;0" dur="1.4s" begin={`${i * 0.35}s`} repeatCount="indefinite" />
        </path>
      ))}
    </g>
  );
}

/** Front view of a figure with one part highlighted, for wudu and ghusl steps. */
export function BodyDiagram({ part, className = "" }: { part: WuduPart; className?: string }) {
  const hi = (p: WuduPart | WuduPart[]) => ((Array.isArray(p) ? p : [p]).includes(part) ? C.tile : C.cobaltSoft);
  return (
    <svg viewBox="0 0 200 200" className={className} role="img" aria-label={`Wudu: ${part}`}>
      <circle cx="100" cy="100" r="92" fill={C.tileSoft} opacity="0.5" />
      {/* body */}
      <path d="M70 92 q30 -14 60 0 l6 70 h-72z" fill={C.cobaltSoft} stroke={C.cobalt} strokeWidth="2" />
      {/* arms: forearms highlight for "arms", hands for "hands" */}
      <g strokeLinecap="round" fill="none">
        <path d="M72 96 L56 132 L50 160" stroke={C.cobalt} strokeWidth="13" />
        <path d="M128 96 L144 132 L150 160" stroke={C.cobalt} strokeWidth="13" />
        <path d="M56 132 L50 160" stroke={hi("arms")} strokeWidth="11" />
        <path d="M144 132 L150 160" stroke={hi("arms")} strokeWidth="11" />
      </g>
      <circle cx="49" cy="168" r="8" fill={part === "hands" || part === "arms" ? C.tile : C.cobaltDeep} />
      <circle cx="151" cy="168" r="8" fill={part === "hands" || part === "arms" ? C.tile : C.cobaltDeep} />
      {/* feet */}
      <ellipse cx="86" cy="178" rx="12" ry="6" fill={part === "feet" ? C.tile : C.cobaltDeep} />
      <ellipse cx="114" cy="178" rx="12" ry="6" fill={part === "feet" ? C.tile : C.cobaltDeep} />
      <rect x="80" y="160" width="12" height="16" fill={C.cobaltSoft} />
      <rect x="108" y="160" width="12" height="16" fill={C.cobaltSoft} />
      {/* head (faceless); ears; mouth and nose marks only when they're the step */}
      <ellipse cx="74" cy="58" rx="5" ry="8" fill={part === "ears" ? C.tile : C.cobaltDeep} />
      <ellipse cx="126" cy="58" rx="5" ry="8" fill={part === "ears" ? C.tile : C.cobaltDeep} />
      <ellipse cx="100" cy="58" rx="25" ry="29" fill={part === "face" ? C.tile : C.cobaltDeep} />
      {part === "head" && <path d="M76 50 q24 -34 48 0 q-24 -14 -48 0z" fill={C.tile} />}
      {part === "mouth" && <rect x="90" y="69" width="20" height="6" rx="3" fill={C.tile} />}
      {part === "nose" && <path d="M100 52 l-6 14 h12z" fill={C.tile} />}
      {/* water where the step happens */}
      {part === "hands" && <><Drops x={40} y={140} /><Drops x={142} y={140} /></>}
      {part === "arms" && <><Drops x={42} y={118} /><Drops x={146} y={118} /></>}
      {part === "face" && <Drops x={90} y={14} />}
      {part === "mouth" && <Drops x={128} y={64} n={2} />}
      {part === "nose" && <Drops x={128} y={48} n={2} />}
      {part === "head" && <Drops x={90} y={6} />}
      {part === "ears" && <><Drops x={60} y={34} n={1} /><Drops x={136} y={34} n={1} /></>}
      {part === "feet" && <><Drops x={76} y={156} n={2} /><Drops x={108} y={156} n={2} /></>}
    </svg>
  );
}

export function SceneArt({ scene, className = "" }: { scene: Scene; className?: string }) {
  const svg = (children: React.ReactNode) => (
    <svg viewBox="0 0 200 160" className={className} role="img" aria-label={scene.replace("-", " ")}>
      {children}
    </svg>
  );
  switch (scene) {
    case "kaaba":
    case "qibla":
      return svg(
        <>
          <ellipse cx="100" cy="138" rx="80" ry="14" fill={C.dawnSoft} />
          <path d="M60 60 l40 -16 l40 16 v66 l-40 14 l-40 -14z" fill="#15171c" stroke={C.dawn} strokeWidth="1.5" />
          <path d="M100 44 v96" stroke={C.cobaltDeep} strokeWidth="1.5" opacity="0.6" />
          <path d="M60 74 l40 14 l40 -14" stroke={C.dawn} strokeWidth="7" fill="none" />
          {scene === "qibla" && (
            <g>
              <circle cx="168" cy="40" r="22" fill={C.surface} stroke={C.cobalt} strokeWidth="3" />
              <path d="M168 24 l6 16 l-6 -3 l-6 3z" fill={C.tile}>
                <animateTransform attributeName="transform" type="rotate" values="-25 168 40; 10 168 40; 0 168 40" dur="2.4s" repeatCount="1" fill="freeze" />
              </path>
            </g>
          )}
        </>,
      );
    case "masjid":
      return svg(
        <>
          <rect x="20" y="132" width="160" height="10" rx="5" fill={C.dawnSoft} />
          <rect x="52" y="78" width="96" height="56" fill={C.cobaltSoft} stroke={C.cobalt} strokeWidth="2.5" />
          <path d="M60 78 q40 -62 80 0z" fill={C.tile} />
          <path d="M100 18 v12" stroke={C.dawn} strokeWidth="3" />
          <rect x="150" y="40" width="14" height="94" fill={C.cobaltSoft} stroke={C.cobalt} strokeWidth="2.5" />
          <path d="M148 40 l9 -16 l9 16z" fill={C.tile} />
          <path d="M88 134 v-22 a12 12 0 0 1 24 0 v22" fill={C.cobalt} />
        </>,
      );
    case "prayer-mat":
      return svg(
        <>
          <rect x="50" y="20" width="100" height="124" rx="6" fill={C.dawnSoft} stroke={C.dawn} strokeWidth="3" />
          <path d="M66 136 v-74 q34 -40 68 0 v74" fill="none" stroke={C.cobalt} strokeWidth="3" />
          <path d="M80 128 h40 M80 120 h40" stroke={C.tile} strokeWidth="3" />
          <path d="M50 30 h-8 M50 50 h-8 M50 114 h-8 M50 134 h-8 M150 30 h8 M150 50 h8 M150 114 h8 M150 134 h8" stroke={C.dawn} strokeWidth="2" />
        </>,
      );
    case "quran":
      return svg(
        <>
          <path d="M60 140 l40 -26 l40 26" stroke={C.cobaltDeep} strokeWidth="6" fill="none" strokeLinecap="round" />
          <path d="M100 112 q-30 -16 -58 -6 v-60 q28 -10 58 6z" fill={C.surface} stroke={C.tile} strokeWidth="3" />
          <path d="M100 112 q30 -16 58 -6 v-60 q-28 -10 -58 6z" fill={C.surface} stroke={C.tile} strokeWidth="3" />
          <path d="M54 66 q20 -6 38 4 M54 80 q20 -6 38 4 M108 70 q18 -10 38 -4 M108 84 q18 -10 38 -4" stroke={C.cobalt} strokeWidth="2" fill="none" opacity="0.6" />
        </>,
      );
    case "crescent":
      return svg(
        <>
          <circle cx="92" cy="80" r="46" fill={C.dawn} />
          <circle cx="112" cy="68" r="42" fill={C.surface} />
          <path d="M142 46 l4 10 l10 1 l-8 7 l3 10 l-9 -6 l-9 6 l3 -10 l-8 -7 l10 -1z" fill={C.dawn}>
            <animate attributeName="opacity" values="1;0.5;1" dur="2.5s" repeatCount="indefinite" />
          </path>
        </>,
      );
    case "intention":
      return svg(
        <>
          <circle cx="100" cy="80" r="56" fill={C.dawnSoft}>
            <animate attributeName="r" values="50;58;50" dur="3s" repeatCount="indefinite" />
          </circle>
          <path d="M100 118 l-34 -34 a20 20 0 0 1 34 -26 a20 20 0 0 1 34 26z" fill={C.tile} />
        </>,
      );
    case "prayer-times":
      return svg(
        <>
          <path d="M20 130 h160" stroke={C.line} strokeWidth="3" />
          <path d="M30 130 a70 70 0 0 1 140 0" stroke={C.cobaltSoft} strokeWidth="3" fill="none" strokeDasharray="5 6" />
          {[
            [30, 130, "Fajr"],
            [100, 60, "Dhuhr"],
            [150, 80, "Asr"],
            [170, 130, "Maghrib"],
            [184, 146, "Isha"],
          ].map(([x, y, n]) => (
            <g key={n as string}>
              <circle cx={x as number} cy={y as number} r="7" fill={n === "Isha" || n === "Fajr" ? C.cobalt : C.dawn} />
            </g>
          ))}
          <circle cx="100" cy="60" r="14" fill={C.dawn} opacity="0.35" />
        </>,
      );
    case "family":
    case "community": {
      const n = scene === "family" ? 3 : 5;
      return svg(
        <>
          <ellipse cx="100" cy="140" rx="86" ry="10" fill={C.dawnSoft} />
          {Array.from({ length: n }, (_, i) => {
            const x = 100 + (i - (n - 1) / 2) * (scene === "family" ? 42 : 32);
            const h = scene === "family" && i === 1 ? 0.75 : 1;
            return (
              <g key={i} transform={`translate(${x} ${140}) scale(${h})`}>
                <path d="M-15 0 v-46 q15 -12 30 0 v46z" fill={i % 2 ? C.tile : C.cobalt} />
                <circle cy="-66" r="13" fill={C.cobaltDeep} />
              </g>
            );
          })}
        </>,
      );
    }
    case "dua":
      return svg(
        <>
          <circle cx="100" cy="66" r="44" fill={C.dawnSoft} />
          <path d="M60 140 q-6 -40 10 -70 q8 -6 12 4 l6 40" fill={C.cobaltDeep} />
          <path d="M140 140 q6 -40 -10 -70 q-8 -6 -12 4 l-6 40" fill={C.cobaltDeep} />
          <path d="M70 72 q30 18 60 0" stroke={C.dawn} strokeWidth="3" fill="none" />
        </>,
      );
    case "water":
      return svg(
        <>
          <ellipse cx="100" cy="134" rx="60" ry="10" fill={C.tileSoft} />
          <path d="M100 26 q-40 56 -40 78 a40 40 0 0 0 80 0 q0 -22 -40 -78z" fill={C.tile} />
          <path d="M84 100 a16 16 0 0 0 14 18" stroke={C.surface} strokeWidth="4" fill="none" strokeLinecap="round" />
        </>,
      );
    case "ghusl":
      return svg(
        <>
          <path d="M70 20 h40 q20 0 20 20 v4" stroke={C.cobalt} strokeWidth="6" fill="none" strokeLinecap="round" />
          <path d="M112 44 h36 l-6 12 h-24z" fill={C.cobalt} />
          {Array.from({ length: 5 }, (_, i) => (
            <Drops key={i} x={110 + i * 8} y={66 + (i % 2) * 6} n={1} />
          ))}
          <path d="M106 150 v-40 q24 -12 48 0 v40z" fill={C.cobaltSoft} />
          <circle cx="130" cy="94" r="12" fill={C.cobaltDeep} />
          <ellipse cx="130" cy="152" rx="44" ry="6" fill={C.tileSoft} />
        </>,
      );
    case "conversation":
      return svg(
        <>
          <ellipse cx="100" cy="146" rx="84" ry="8" fill={C.dawnSoft} />
          <g transform="translate(58 146)">
            <path d="M-16 0 v-50 q16 -12 32 0 v50z" fill={C.cobalt} />
            <circle cy="-70" r="14" fill={C.cobaltDeep} />
          </g>
          <g transform="translate(142 146)">
            <path d="M-16 0 v-50 q16 -12 32 0 v50z" fill={C.tile} />
            <circle cy="-70" r="14" fill={C.cobaltDeep} />
          </g>
          <path d="M40 22 h48 a10 10 0 0 1 10 10 v14 a10 10 0 0 1 -10 10 h-30 l-10 10 v-10 h-8 a10 10 0 0 1 -10 -10 v-14 a10 10 0 0 1 10 -10z" fill={C.surface} stroke={C.cobalt} strokeWidth="2.5" />
          <path d="M112 34 h48 a10 10 0 0 1 10 10 v14 a10 10 0 0 1 -10 10 h-8 v10 l-10 -10 h-30 a10 10 0 0 1 -10 -10 v-14 a10 10 0 0 1 10 -10z" fill={C.surface} stroke={C.tile} strokeWidth="2.5" />
          <path d="M44 38 h36 M44 46 h24 M118 50 h34 M118 58 h20" stroke={C.line} strokeWidth="3" strokeLinecap="round" />
        </>,
      );
    case "fresh-start":
      return svg(
        <>
          <path d="M10 120 h180" stroke={C.cobalt} strokeWidth="3" />
          <circle cx="100" cy="120" r="44" fill={C.dawn}>
            <animate attributeName="cy" values="140;118" dur="2s" fill="freeze" />
          </circle>
          <rect x="0" y="121" width="200" height="40" fill={C.surface} />
          {[-60, -30, 0, 30, 60].map((a) => (
            <path key={a} d="M100 56 v-18" stroke={C.dawn} strokeWidth="4" strokeLinecap="round" transform={`rotate(${a} 100 120)`} />
          ))}
        </>,
      );
  }
}
