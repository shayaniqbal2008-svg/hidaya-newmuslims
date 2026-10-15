-- The dashboard's lessons_completed counts only the 90-day path and calendar modules, not optional
-- track lessons (alphabet-01…, seerah-01…; lib/access.ts isTrackId). last_active_at still counts every
-- completed lesson: being active is being active. day_reached already reads day-% only.
-- Same columns, options and grants as 20261007000002_privacy.sql; only the count changes.

create or replace view public.dashboard_converts with (security_barrier) as
select
  c.id as convert_id,
  c.masjid_id,
  is_minor(c.birth_year) as is_minor,
  s.share_progress,
  c.mentor_id,
  c.created_at as joined_at,
  case when s.share_progress then c.first_name end as first_name,
  case when s.share_progress then c.program_start_date end as program_start_date,
  case when s.share_progress then p.day_reached end as day_reached,
  case when s.share_progress then p.lessons_completed end as lessons_completed,
  case when s.share_progress then greatest(c.last_active_at, p.last_completed_at) end as last_active_at
from converts c
join convert_settings s on s.convert_id = c.id
left join lateral (
  select
    max(substring(lp.lesson_id from 5)::int) filter (where lp.lesson_id like 'day-%') as day_reached,
    (count(*) filter (where lp.lesson_id !~ '^(alphabet|seerah)-[0-9]{2}$'))::int as lessons_completed,
    max(lp.completed_at) as last_completed_at
  from lesson_progress lp
  where lp.convert_id = c.id and lp.completed_at is not null
) p on true
where is_staff_of(c.masjid_id);

revoke all on public.dashboard_converts from anon, authenticated;
grant select on public.dashboard_converts to authenticated;
