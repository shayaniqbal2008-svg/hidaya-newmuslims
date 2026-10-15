// The path's lesson tile: an eight-pointed star (khatam), the shape of Islamic geometric tilework,
// drawn as a chunky 3D button. Done = saffron, current = turquoise, open = cobalt, locked = grey.
type State = "done" | "current" | "open" | "locked";

const FILL: Record<State, [string, string]> = {
  done: ["var(--dawn)", "var(--dawn-deep)"],
  current: ["var(--tile)", "var(--tile-deep)"],
  open: ["var(--cobalt)", "var(--cobalt-deep)"],
  locked: ["var(--locked)", "var(--locked-deep)"],
};

function star(cx: number, cy: number, R: number) {
  const r = R * 0.7654; // two overlapping squares
  const pts: string[] = [];
  for (let k = 0; k < 16; k++) {
    const a = ((k * 22.5 - 90) * Math.PI) / 180;
    const rad = k % 2 === 0 ? R : r;
    pts.push(`${(cx + rad * Math.cos(a)).toFixed(2)},${(cy + rad * Math.sin(a)).toFixed(2)}`);
  }
  return pts.join(" ");
}

export function StarTile({ state, size = 76, icon }: { state: State; size?: number; icon?: React.ReactNode }) {
  const [face, edge] = FILL[state];
  return (
    <span className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden className="absolute inset-0 overflow-visible">
        <polygon points={star(50, 54, 46)} fill={edge} strokeLinejoin="round" stroke={edge} strokeWidth="6" />
        <polygon points={star(50, 48, 46)} fill={face} strokeLinejoin="round" stroke={face} strokeWidth="6" />
        <polygon points={star(50, 48, 30)} fill="none" stroke="#ffffff" strokeOpacity="0.28" strokeWidth="2.5" strokeLinejoin="round" />
      </svg>
      <span className={`relative -mt-[6%] ${state === "locked" ? "text-muted" : "text-white"}`}>
        {icon ?? (
          <svg width={size * 0.36} height={size * 0.36} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
            {state === "locked" ? <path d="M7 11V8a5 5 0 0 1 10 0v3M5 11h14v10H5z" /> : state === "done" ? <path d="M5 12.5l4.5 4.5L19 7.5" /> : <path d="M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.6 6.6 19.5l1.2-6L3.3 9.3l6.1-.7z" fill="currentColor" />}
          </svg>
        )}
      </span>
    </span>
  );
}
