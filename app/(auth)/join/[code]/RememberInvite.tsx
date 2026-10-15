"use client";
import { useEffect } from "react";

// Keeps the invite code for the last sign-up step (after the email code), for a week.
export function RememberInvite({ code }: { code: string }) {
  useEffect(() => {
    document.cookie = `invite=${encodeURIComponent(code)}; path=/; max-age=604800; samesite=lax${location.protocol === "https:" ? "; secure" : ""}`;
  }, [code]);
  return null;
}
