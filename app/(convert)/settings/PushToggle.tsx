"use client";
// Turns on web push for this device. iPhones need the app on the home screen first (iOS 16.4+).
import { useEffect, useState } from "react";
import { savePushSubscription } from "./actions";

function b64ToBytes(s: string) {
  const pad = "=".repeat((4 - (s.length % 4)) % 4);
  const raw = atob((s + pad).replace(/-/g, "+").replace(/_/g, "/"));
  return Uint8Array.from(raw, (c) => c.charCodeAt(0));
}

export function PushToggle({ vapidKey }: { vapidKey: string }) {
  const [state, setState] = useState<"checking" | "unsupported" | "ios-install" | "off" | "on" | "denied" | "error">("checking");
  useEffect(() => {
    (async () => {
      if (!("serviceWorker" in navigator) || !("PushManager" in window) || !vapidKey) {
        const ios = /iPhone|iPad|iPod/.test(navigator.userAgent);
        const standalone = window.matchMedia("(display-mode: standalone)").matches;
        setState(ios && !standalone ? "ios-install" : "unsupported");
        return;
      }
      if (Notification.permission === "denied") return setState("denied");
      const reg = await navigator.serviceWorker.register("/sw.js");
      setState((await reg.pushManager.getSubscription()) ? "on" : "off");
    })().catch(() => setState("error"));
  }, [vapidKey]);

  const enable = async () => {
    try {
      const reg = await navigator.serviceWorker.register("/sw.js");
      if ((await Notification.requestPermission()) !== "granted") return setState("denied");
      const sub = await reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: b64ToBytes(vapidKey) });
      await savePushSubscription(sub.toJSON() as { endpoint: string; keys: { p256dh: string; auth: string } });
      setState("on");
    } catch {
      setState("error");
    }
  };

  const msg: Record<typeof state, string> = {
    checking: "Checking…",
    unsupported: "This browser can't show reminders. You'll get them by email instead.",
    "ios-install": "On iPhone, add this app to your home screen first (Share → Add to Home Screen), then open it from there and come back here.",
    off: "Get a quiet daily nudge at your reminder time.",
    on: "Reminders are on for this phone.",
    denied: "Notifications are blocked for this app. You can allow them in your phone's settings.",
    error: "Something went wrong turning reminders on. Try again.",
  };
  return (
    <div className="mt-2">
      <p className="text-[0.95rem] text-muted">{msg[state]}</p>
      {(state === "off" || state === "error") && (
        <button type="button" onClick={enable} className="mt-3 w-full rounded-xl border-2 border-tile py-3 font-bold text-tile">
          Turn on reminders
        </button>
      )}
    </div>
  );
}
