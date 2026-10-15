-- Who can see what. T3 §3.3; each numbered rule has a test in supabase/tests/rls.test.ts.
--
--   1. A convert reads and writes only their own rows.
--   2. Staff see converts only in their own masjid, only through dashboard_converts, and only what the
--      convert agreed to share. Minors: progress and last active only (no action logs).
--   3. No staff role can read AI chats or unshared reflections. A shared reflection is visible to the
--      convert's mentor (and, for a minor, also the masjid's safeguarding lead).
--   4. Imam questions: staff in that masjid see them; anonymous ones hide who asked.
--   5. An invite code reveals the masjid's name and nothing else.
--   6. Deleting the account deletes everything the convert owns (on delete cascade in the tables migration).
--
-- Views below are owned by the migration role and so read the base tables without RLS; each view
-- filters by the caller (auth.uid()) itself. That is the whole point of them: staff never get direct
-- table access to converts' data.

-- ---------- helpers

-- Birth year only (Spec §6.2 rule 12). Conservative: anyone who could still be 17 this year counts as a minor.
create or replace function public.is_minor(birth_year int) returns boolean
language sql stable as $$
  select extract(year from now())::int - birth_year <= 18
$$;

create or replace function public.my_staff_masjids() returns setof uuid
language sql stable security definer set search_path = public as $$
  select masjid_id from staff where user_id = auth.uid() and active
$$;

create or replace function public.my_staff_ids() returns setof uuid
language sql stable security definer set search_path = public as $$
  select id from staff where user_id = auth.uid() and active
$$;

create or replace function public.is_staff_of(m uuid, roles text[] default null) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from staff
    where user_id = auth.uid() and active and masjid_id = m and (roles is null or role = any (roles))
  )
$$;

create or replace function public.my_masjid() returns uuid
language sql stable security definer set search_path = public as $$
  select masjid_id from converts where id = auth.uid()
$$;


-- The convert's mentor, plus (for a minor) the masjid's safeguarding lead: the "two adults" rule.
create or replace function public.sees_shared_reflections_of(p_convert uuid) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from converts c join staff s on s.masjid_id = c.masjid_id
    where c.id = p_convert and s.user_id = auth.uid() and s.active
      and (s.id = c.mentor_id or (is_minor(c.birth_year) and s.safeguarding_lead))
  )
$$;

create or replace function public.receives_alert_for(p_convert uuid, p_recipient text) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from converts c join staff s on s.masjid_id = c.masjid_id
    where c.id = p_convert and s.user_id = auth.uid() and s.active
      and ((p_recipient = 'mentor' and s.id = c.mentor_id)
        or (p_recipient = 'female_staff' and s.gender = 'female'))
  )
$$;

-- ---------- grants: RLS does the filtering, but nothing is granted that isn't needed.

revoke all on all tables in schema public from anon, authenticated;
grant select, insert, update, delete on all tables in schema public to authenticated;
revoke insert, update, delete on public.converts, public.convert_settings, public.staff_audit_log,
  public.masjids from authenticated;
-- A convert may edit these columns of their own row; masjid_id and mentor_id are set by the masjid.
grant update (first_name, gender, shahada_date, timezone, last_active_at) on public.converts to authenticated;
grant update (share_progress, share_logs, discreet_mode, neutral_app_name, reminder_time, reminder_channel,
  quick_exit_url, updated_at) on public.convert_settings to authenticated;
grant update (name, madhab, jumuah_time, timezone, imam_response_hours, has_female_staff) on public.masjids
  to authenticated;
revoke update, delete on public.imam_questions, public.safety_alerts from authenticated;

alter table public.masjids enable row level security;
alter table public.masjid_dates enable row level security;
alter table public.staff enable row level security;
alter table public.invites enable row level security;
alter table public.converts enable row level security;
alter table public.convert_settings enable row level security;
alter table public.push_subscriptions enable row level security;
alter table public.lesson_progress enable row level security;
alter table public.screen_responses enable row level security;
alter table public.review_items enable row level security;
alter table public.action_logs enable row level security;
alter table public.carry_forward_items enable row level security;
alter table public.reflections enable row level security;
alter table public.ai_threads enable row level security;
alter table public.ai_messages enable row level security;
alter table public.ai_feedback enable row level security;
alter table public.imam_questions enable row level security;
alter table public.safety_alerts enable row level security;
alter table public.staff_audit_log enable row level security;

-- ---------- masjids, dates, staff, invites

create policy "members read their masjid" on public.masjids for select
  using (id in (select my_staff_masjids()) or id = my_masjid());
create policy "admins edit their masjid" on public.masjids for update
  using (is_staff_of(id, array['admin'])) with check (is_staff_of(id, array['admin']));

create policy "members read masjid dates" on public.masjid_dates for select
  using (masjid_id in (select my_staff_masjids()) or masjid_id = my_masjid());
create policy "admins manage masjid dates" on public.masjid_dates for all
  using (is_staff_of(masjid_id, array['admin'])) with check (is_staff_of(masjid_id, array['admin']));

create policy "staff read their colleagues" on public.staff for select
  using (masjid_id in (select my_staff_masjids()));
create policy "converts read their mentor" on public.staff for select
  using (id = (select mentor_id from converts where converts.id = auth.uid()));
create policy "admins manage staff" on public.staff for all
  using (is_staff_of(masjid_id, array['admin'])) with check (is_staff_of(masjid_id, array['admin']));

create policy "staff manage invites" on public.invites for all
  using (is_staff_of(masjid_id, array['admin', 'imam'])) with check (is_staff_of(masjid_id, array['admin', 'imam']));

-- ---------- rule 1: converts own their rows

create policy "own row" on public.converts for select using (id = auth.uid());
create policy "own row update" on public.converts for update using (id = auth.uid()) with check (id = auth.uid());
create policy "own settings" on public.convert_settings for select using (convert_id = auth.uid());
create policy "own settings update" on public.convert_settings for update
  using (convert_id = auth.uid()) with check (convert_id = auth.uid());

create policy "own rows" on public.push_subscriptions for all
  using (convert_id = auth.uid()) with check (convert_id = auth.uid());
create policy "own rows" on public.lesson_progress for all
  using (convert_id = auth.uid()) with check (convert_id = auth.uid());
create policy "own rows" on public.screen_responses for all
  using (convert_id = auth.uid()) with check (convert_id = auth.uid());
create policy "own rows" on public.review_items for all
  using (convert_id = auth.uid()) with check (convert_id = auth.uid());
create policy "own rows" on public.action_logs for all
  using (convert_id = auth.uid()) with check (convert_id = auth.uid());
create policy "own rows" on public.carry_forward_items for all
  using (convert_id = auth.uid()) with check (convert_id = auth.uid());

-- ---------- rule 3: chats are the convert's alone; reflections only if shared

create policy "own rows" on public.ai_threads for all
  using (convert_id = auth.uid()) with check (convert_id = auth.uid());
create policy "own rows" on public.ai_messages for all
  using (convert_id = auth.uid())
  with check (convert_id = auth.uid()
    and thread_id in (select id from ai_threads where ai_threads.convert_id = auth.uid()));
create policy "own feedback" on public.ai_feedback for insert with check (convert_id = auth.uid());

create policy "own rows" on public.reflections for all
  using (convert_id = auth.uid()) with check (convert_id = auth.uid());
create policy "mentor reads a shared reflection" on public.reflections for select
  using (shared_with_mentor_at is not null and sees_shared_reflections_of(convert_id));

-- ---------- rule 4: imam questions (staff side goes through imam_questions_inbox + answer_imam_question)

create policy "own questions" on public.imam_questions for select using (convert_id = auth.uid());
create policy "ask own masjid" on public.imam_questions for insert
  with check (convert_id = auth.uid() and masjid_id = my_masjid() and status = 'open' and answer is null);

-- ---------- safety alerts: created only by the convert's consent button

create policy "own alerts" on public.safety_alerts for select using (convert_id = auth.uid());
create policy "raise own alert" on public.safety_alerts for insert
  with check (convert_id = auth.uid() and status = 'open');
create policy "recipient reads alert" on public.safety_alerts for select
  using (receives_alert_for(convert_id, recipient));

create policy "admins read audit log" on public.staff_audit_log for select
  using (staff_id in (select id from staff where is_staff_of(masjid_id, array['admin'])));

-- ---------- rule 2: the dashboard view

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
    count(*)::int as lessons_completed,
    max(lp.completed_at) as last_completed_at
  from lesson_progress lp
  where lp.convert_id = c.id and lp.completed_at is not null
) p on true
where is_staff_of(c.masjid_id);

create or replace view public.dashboard_action_logs with (security_barrier) as
select a.convert_id, a.log_key, a.lesson_id, a.logged_at
from action_logs a
join converts c on c.id = a.convert_id
join convert_settings s on s.convert_id = c.id
where is_staff_of(c.masjid_id) and s.share_progress and s.share_logs and not is_minor(c.birth_year);

create or replace view public.imam_questions_inbox with (security_barrier) as
select
  q.id,
  q.masjid_id,
  case when q.anonymous then null else q.convert_id end as convert_id,
  case when q.anonymous then null else c.first_name end as asker_name,
  q.anonymous,
  q.body,
  q.route_to,
  q.status,
  q.due_at,
  q.answer,
  q.answered_at,
  q.created_at
from imam_questions q
join converts c on c.id = q.convert_id
where is_staff_of(q.masjid_id)
  and (q.route_to = 'imam'
    or exists (select 1 from staff s where s.user_id = auth.uid() and s.masjid_id = q.masjid_id
                and s.active and s.gender = 'female'));

revoke all on public.dashboard_converts, public.dashboard_action_logs, public.imam_questions_inbox from anon, authenticated;
grant select on public.dashboard_converts, public.dashboard_action_logs, public.imam_questions_inbox to authenticated;

-- ---------- functions with their own checks

-- rule 5: what an invite link reveals before sign-in
create or replace function public.invite_preview(invite_code text)
returns table (masjid_name text)
language sql stable security definer set search_path = public as $$
  select m.name from invites i join masjids m on m.id = i.masjid_id
  where i.code = invite_code and not i.revoked
    and (i.expires_at is null or i.expires_at > now())
    and (i.max_uses is null or i.uses < i.max_uses)
$$;

-- Sign-up: turns a signed-in user + valid invite into a convert of that masjid.
create or replace function public.redeem_invite(
  invite_code text,
  p_first_name text,
  p_birth_year int,
  p_timezone text,
  p_share_progress boolean,
  p_share_logs boolean,
  p_gender text default null,
  p_shahada_date date default null
) returns uuid
language plpgsql security definer set search_path = public as $$
declare
  inv invites%rowtype;
  uid uuid := auth.uid();
begin
  if uid is null then raise exception 'not signed in'; end if;
  if exists (select 1 from converts where id = uid) then
    return (select masjid_id from converts where id = uid);
  end if;
  select * into inv from invites
  where code = invite_code and not revoked
    and (expires_at is null or expires_at > now())
    and (max_uses is null or uses < max_uses)
  for update;
  if not found then raise exception 'invite not valid'; end if;
  if extract(year from now())::int - p_birth_year < 13 then raise exception 'must be 13 or older'; end if;

  insert into converts (id, masjid_id, first_name, birth_year, gender, shahada_date, timezone, program_start_date)
  values (uid, inv.masjid_id, trim(p_first_name), p_birth_year, p_gender, p_shahada_date, p_timezone,
          (now() at time zone p_timezone)::date);
  insert into convert_settings (convert_id, share_progress, share_logs)
  values (uid, p_share_progress, p_share_progress and p_share_logs);
  update invites set uses = uses + 1 where id = inv.id;
  return inv.masjid_id;
end $$;

-- Staff answer a question; the convert sees the answer in the app.
create or replace function public.answer_imam_question(question_id uuid, answer_text text)
returns void
language plpgsql security definer set search_path = public as $$
declare q imam_questions%rowtype; me uuid;
begin
  select * into q from imam_questions where id = question_id;
  if not found or not is_staff_of(q.masjid_id) then raise exception 'not allowed'; end if;
  select id into me from staff where user_id = auth.uid() and masjid_id = q.masjid_id;
  update imam_questions
    set answer = answer_text, status = 'answered', answered_by = me, answered_at = now()
    where id = question_id;
  insert into staff_audit_log (staff_id, action, target_convert_id)
  values (me, 'answered_question', case when q.anonymous then null else q.convert_id end);
end $$;

-- Staff assign a mentor (T5 builds the screen).
create or replace function public.assign_mentor(p_convert uuid, p_mentor uuid)
returns void
language plpgsql security definer set search_path = public as $$
declare m uuid; me uuid;
begin
  select masjid_id into m from converts where id = p_convert;
  if m is null or not is_staff_of(m, array['admin', 'imam']) then raise exception 'not allowed'; end if;
  if p_mentor is not null and not exists (select 1 from staff where id = p_mentor and masjid_id = m and active) then
    raise exception 'mentor not in this masjid';
  end if;
  update converts set mentor_id = p_mentor where id = p_convert;
  select id into me from staff where user_id = auth.uid() and masjid_id = m;
  insert into staff_audit_log (staff_id, action, target_convert_id) values (me, 'assigned_mentor', p_convert);
end $$;

revoke execute on all functions in schema public from public, anon;
grant execute on all functions in schema public to authenticated;
grant execute on function public.invite_preview(text) to anon;
