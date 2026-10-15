// Demo mode (for scholars and testers): no invite link, no email code. A tester picks which school their
// "masjid" follows; we create a throwaway account in that school's demo masjid and unlock all 90 days.
// Demo masjids are ordinary masjids whose slug starts with "demo-" (scripts/setup-demo.ts creates them).
//
// ⚠️ BEFORE GO-TO-MARKET: turn the demo off (set DEMO_ENABLED=0 in Vercel and redeploy). That hides
// "Try the demo", blocks /demo, and real converts are back to invite links only. Demo accounts stay
// unlocked until deleted (README → "Turning off the demo").
import type { Madhab } from "./content/types";

/** On unless DEMO_ENABLED=0. */
export const demoEnabled = () => process.env.DEMO_ENABLED !== "0";

export const DEMO_SCHOOLS: { id: Madhab | "none"; label: string }[] = [
  { id: "hanafi", label: "Hanafi" },
  { id: "shafii", label: "Shafi'i" },
  { id: "maliki", label: "Maliki" },
  { id: "hanbali", label: "Hanbali" },
  { id: "none", label: "No school set" },
];

export const demoSlug = (school: string) => `demo-${school}`;
export const isDemoSlug = (slug: string | null | undefined) => !!slug?.startsWith("demo-");
