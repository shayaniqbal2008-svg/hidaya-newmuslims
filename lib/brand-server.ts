import "server-only";
import { cookies } from "next/headers";
import { appNameFor, DISCREET_COOKIE } from "./brand";

/** Is this device in discreet mode? Unknown (before sign-up) counts as not discreet. */
export async function isDiscreetDevice(): Promise<boolean> {
  return (await cookies()).get(DISCREET_COOKIE)?.value === "1";
}

export async function appName(): Promise<string> {
  return appNameFor(await isDiscreetDevice());
}
