-- Daily streak v1 (spec docs/superpowers/specs/2026-10-09-streak-gamification-design.md; vault Gamification Research).
-- The streak itself is worked out in lib/streak.ts from this day log. Private like practice_mistakes:
-- own rows only, and no view, function or staff policy reads them. Deleted with the account (cascade).

-- One row per local day: counted activity (lesson / practice), or a missed day the app settled
-- (rest = a rest day was used, pause = inside a pause, repair = restored by a make-up).
create table public.activity_days (
  convert_id uuid not null references public.converts on delete cascade,
  day date not null,
  source text not null check (source in ('lesson', 'practice', 'rest', 'pause', 'repair')),
  lessons int not null default 0 check (lessons >= 0),
  practice int not null default 0 check (practice >= 0),
  created_at timestamptz not null default now(),
  primary key (convert_id, day)
);

-- What can't be derived from the log: the pause window, the last make-up, and the longest run ever.
create table public.streak_state (
  convert_id uuid primary key references public.converts on delete cascade,
  longest int not null default 0 check (longest >= 0),
  paused_from date,
  paused_until date,
  last_repair_on date,
  updated_at timestamptz not null default now(),
  check (paused_until is null or paused_from is null or paused_until >= paused_from - 1)
);

alter table public.activity_days enable row level security;
alter table public.streak_state enable row level security;
create policy "own rows" on public.activity_days for all
  using (convert_id = auth.uid()) with check (convert_id = auth.uid());
create policy "own rows" on public.streak_state for all
  using (convert_id = auth.uid()) with check (convert_id = auth.uid());
revoke all on public.activity_days, public.streak_state from anon, authenticated;
grant select, insert, update, delete on public.activity_days, public.streak_state to authenticated;

-- Count one activity on a day, atomically. Runs as the caller (RLS applies). Only lesson and practice
-- are activities (rest/pause/repair are written by settlement). A counted activity replaces a settled
-- rest/pause/repair row on the same day. Returns the day's activity count.
create function public.record_activity(p_day date, p_kind text) returns int
language plpgsql security invoker set search_path = public as $$
declare n int; local_today date;
begin
  if p_kind is null or p_kind not in ('lesson', 'practice') then
    raise exception 'unknown activity kind %', p_kind;
  end if;
  -- Only the convert's own today (±1 day for the edges of midnight and clock skew).
  select (now() at time zone coalesce(
            (select c.timezone from converts c where c.id = auth.uid() and c.timezone in (select name from pg_timezone_names)), 'UTC'))::date
    into local_today;
  if p_day is null or p_day < local_today - 1 or p_day > local_today + 1 then
    raise exception 'an activity can only be recorded for today';
  end if;
  insert into activity_days as a (convert_id, day, source, lessons, practice)
  values (auth.uid(), p_day, p_kind, (p_kind = 'lesson')::int, (p_kind = 'practice')::int)
  on conflict (convert_id, day) do update set
    lessons = (case when a.source in ('lesson', 'practice') then a.lessons else 0 end) + excluded.lessons,
    -- At most 3 practice sessions a day count (+5 XP each): no farming.
    practice = least(3, (case when a.source in ('lesson', 'practice') then a.practice else 0 end) + excluded.practice),
    source = case
      when (case when a.source in ('lesson', 'practice') then a.lessons else 0 end) + excluded.lessons > 0 then 'lesson'
      else 'practice' end
  returning lessons + practice into n;
  return n;
end
$$;
revoke all on function public.record_activity(date, text) from public, anon;
grant execute on function public.record_activity(date, text) to authenticated;

-- Streak settings: on by default (Shayan, 2026-10-08), calm and sounds off.
alter table public.convert_settings
  add column show_streak boolean not null default true,
  add column celebration_sounds boolean not null default false,
  add column calm_celebrations boolean not null default false;
grant update (show_streak, celebration_sounds, calm_celebrations) on public.convert_settings to authenticated;

-- Backfill: finished lessons so current streaks carry over (local date in the convert's timezone;
-- optional track lessons never count, lib/access.ts isTrackId).
insert into public.activity_days (convert_id, day, source, lessons)
select lp.convert_id,
  (lp.completed_at at time zone case when c.timezone in (select name from pg_timezone_names) then c.timezone else 'UTC' end)::date,
  'lesson', count(*)::int
from public.lesson_progress lp
join public.converts c on c.id = lp.convert_id
where lp.completed_at is not null and lp.lesson_id !~ '^(alphabet|seerah)-[0-9]{2}$'
group by 1, 2
on conflict do nothing;
