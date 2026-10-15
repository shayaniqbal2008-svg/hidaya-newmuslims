import { Flame, Star, Trophy, Zap } from "lucide-react";
import { getIndex } from "@/lib/content/load";
import { getMe, getProgress } from "@/lib/dal";
import { badges } from "@/lib/badges";
import { monthView, weekView } from "@/lib/streak";
import { clearedDates, getStreak, streakSettings, xpOf } from "@/lib/streak-store";
import { MilestonesGrid, StreakCard } from "@/components/celebrate/MeStreak";
import { signOut } from "../../(auth)/actions";
import { deleteAccount, pauseStreak } from "./actions";
import { SettingsForm } from "./SettingsForm";
import { PushToggle } from "./PushToggle";

export default async function SettingsPage({ searchParams }: PageProps<"/settings">) {
  const me = await getMe();
  const sp = await searchParams;
  const p = await getProgress(me);
  const days = Object.keys(p.completed).filter((k) => k.startsWith("day-")).length;
  const [st, cleared] = await Promise.all([getStreak(me, p), clearedDates(me)]);
  const show = streakSettings(me).show_streak;
  const s = st.settled;
  const stats = [
    ...(show
      ? [
          { label: "Day streak", value: s.streak, Icon: Flame, color: "var(--dawn-deep)" },
          { label: "Longest", value: s.longest, Icon: Trophy, color: "var(--dawn-deep)" },
        ]
      : []),
    { label: "Total XP", value: xpOf(p, st), Icon: Zap, color: "var(--cobalt)" },
    { label: "Days done", value: `${days}/90`, Icon: Star, color: "var(--tile)" },
  ];
  // Calendar month: ?m=YYYY-MM, from the first logged month to this one.
  const thisMonth = p.today.slice(0, 7);
  const firstMonth = (Object.keys(s.days).sort()[0] ?? p.today).slice(0, 7);
  const m = typeof sp.m === "string" && /^\d{4}-\d{2}$/.test(sp.m) && sp.m >= firstMonth && sp.m <= thisMonth ? sp.m : thisMonth;
  const shift = (ym: string, k: number) => {
    const d = new Date(Date.UTC(Number(ym.slice(0, 4)), Number(ym.slice(5, 7)) - 1 + k, 1));
    return d.toISOString().slice(0, 7);
  };
  const index = getIndex();
  const allBadges = badges({
    completed: p.completed,
    reached: s.reached,
    cleared,
    units: index.units,
    tracks: index.tracks,
    discreet: me.settings.discreet_mode,
    includeStreak: show,
  });
  const pausedUntil = s.meta.pausedUntil
    ? new Intl.DateTimeFormat("en-US", { weekday: "long", month: "long", day: "numeric", timeZone: "UTC" }).format(new Date(`${s.meta.pausedUntil}T12:00:00Z`))
    : null;
  return (
    <main className="mx-auto w-full max-w-lg px-5 pt-[max(2rem,env(safe-area-inset-top))] pb-10">
      <h1 className="font-display text-[2rem]">{me.convert.first_name}</h1>
      <p className="text-muted">{me.masjid.name}</p>
      <div className={`mt-5 grid gap-3 ${stats.length === 4 ? "grid-cols-4" : "grid-cols-3"}`}>
        {stats.map(({ label, value, Icon, color }) => (
          <div key={label} className="rounded-2xl border-2 border-line border-b-4 border-b-line-deep bg-surface p-3">
            <Icon className="h-6 w-6" style={{ color }} fill={color} strokeWidth={1.8} aria-hidden />
            <p className="mt-1 text-xl font-black">{value}</p>
            <p className="text-xs font-extrabold text-muted">{label}</p>
          </div>
        ))}
      </div>
      {show && (
        <StreakCard
          streak={s.streak}
          longest={s.longest}
          restDays={s.restDays}
          weekDone={weekView(s.days, p.today).filter((d) => d.state === "done").length}
          month={monthView(s.days, m, p.today)}
          prev={m > firstMonth ? shift(m, -1) : null}
          next={m < thisMonth ? shift(m, 1) : null}
          paused={s.paused}
          pausedUntil={pausedUntil}
          pauseAction={pauseStreak}
          canPause={st.stored}
        />
      )}
      <MilestonesGrid badges={allBadges} />
      <h2 className="mt-10 font-display text-2xl">Settings</h2>
      <SettingsForm me={me} />

      <section className="mt-8 rounded-2xl border border-line bg-surface p-5">
        <h2 className="text-lg font-bold">Reminders on this phone</h2>
        <PushToggle vapidKey={process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY ?? ""} />
      </section>

      <section className="mt-8 rounded-2xl border border-line bg-surface p-5">
        <h2 className="text-lg font-bold">Your data</h2>
        <p className="mt-1 text-[0.95rem] text-muted">
          Your notes and chats are stored encrypted, never sold, and never used to train AI. You can download everything or
          delete it all.
        </p>
        <a href="/api/export" className="mt-4 block rounded-xl border-2 border-tile py-3 text-center font-bold text-tile">
          Download my data
        </a>
        <details className="mt-4" open={sp.delete === "confirm"}>
          <summary className="cursor-pointer font-bold text-gentle">Delete my account</summary>
          <form action={deleteAccount} className="mt-3 space-y-3">
            <p className="text-[0.95rem]">
              This deletes your progress, notes, chats and questions for good. {me.masjid.name} will no longer see you. Type
              DELETE to confirm.
            </p>
            <input name="confirm" autoComplete="off" className="w-full rounded-xl border-2 border-line bg-bg px-4 py-3" />
            <button className="btn btn-gentle">Delete everything</button>
          </form>
        </details>
      </section>

      <form action={signOut} className="mt-8">
        <button className="btn btn-ghost text-muted">Sign out</button>
      </form>
      <p className="mt-6 text-center text-sm text-muted">Signed in as {me.email}</p>
    </main>
  );
}
