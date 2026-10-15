"use client";
// Duolingo-style tab bar: icon tiles, the active one outlined. Hidden inside a lesson (full screen).
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dumbbell, House, MessagesSquare, UserRound } from "lucide-react";
import { navHidden } from "@/lib/nav";

const TABS = [
  { href: "/today", label: "Learn", Icon: House },
  { href: "/practice", label: "Practice", Icon: Dumbbell },
  { href: "/guide", label: "Ask", Icon: MessagesSquare },
  { href: "/settings", label: "Me", Icon: UserRound },
];

export function BottomNav() {
  const path = usePathname();
  if (navHidden(path)) return null;
  return (
    <nav className="sticky bottom-0 z-40 border-t-2 border-line bg-surface pb-[env(safe-area-inset-bottom)]" aria-label="Main">
      <ul className="mx-auto flex max-w-lg justify-around px-2 py-1.5">
        {TABS.map(({ href, label, Icon }) => {
          const on = path === href || path.startsWith(href + "/");
          return (
            <li key={href}>
              <Link
                href={href}
                aria-current={on ? "page" : undefined}
                className={`flex flex-col items-center gap-0.5 rounded-2xl border-2 px-4 py-1.5 text-[0.7rem] font-black ${on ? "border-cobalt/40 bg-cobalt-soft text-cobalt" : "border-transparent text-muted"}`}
              >
                <Icon className="h-6 w-6" strokeWidth={on ? 2.6 : 2.2} aria-hidden />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
