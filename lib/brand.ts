// The app is Hidaya. Converts in discreet mode see a neutral name ("Daily") wherever someone glancing at
// their phone could see it: the home-screen name, the browser tab, reminders (Checkpoint 4b decision).
// Discreet mode lives in the database; a cookie mirrors it so pages and the manifest can pick the name
// before anyone is signed in.
export const BRAND = "Hidaya";
export const NEUTRAL_NAME = "Daily";
export const DISCREET_COOKIE = "discreet";

export const appNameFor = (discreet: boolean) => (discreet ? NEUTRAL_NAME : BRAND);

/** Cookie options for remembering discreet mode on this device (a year). */
export const discreetCookie = (on: boolean) =>
  ({ name: DISCREET_COOKIE, value: on ? "1" : "0", path: "/", maxAge: 31_536_000, sameSite: "lax" as const, secure: true, httpOnly: true });
