"use client";
// Daily reminders on iPhone need the app on the home screen (iOS 16.4+), so we walk people through it.
import { useEffect, useState } from "react";

export function InstallHint() {
  const [show, setShow] = useState<"ios" | "other" | null>(null);
  useEffect(() => {
    const standalone =
      window.matchMedia("(display-mode: standalone)").matches || (navigator as { standalone?: boolean }).standalone;
    let dismissed = false;
    try {
      dismissed = localStorage.getItem("install-hint-dismissed") === "1";
    } catch {}
    if (standalone || dismissed) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShow(/iPhone|iPad|iPod/.test(navigator.userAgent) ? "ios" : "other");
  }, []);
  if (!show) return null;
  return (
    <div className="mt-6 rounded-2xl border border-line bg-surface p-5">
      <p className="font-bold">Put it on your home screen</p>
      <p className="mt-1 text-[0.95rem] text-muted">
        {show === "ios"
          ? "Tap the Share button in Safari, then “Add to Home Screen”. Then turn on reminders in Settings."
          : "Open your browser menu and choose “Install app” or “Add to Home screen”. Then turn on reminders in Settings."}
      </p>
      <button
        type="button"
        onClick={() => {
          try {
            localStorage.setItem("install-hint-dismissed", "1");
          } catch {}
          setShow(null);
        }}
        className="mt-3 text-sm text-muted underline"
      >
        Hide this
      </button>
    </div>
  );
}
