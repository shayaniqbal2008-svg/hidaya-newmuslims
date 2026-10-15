-- Tables for the New Muslims Program. Design: vault note "T3 - Stack and Data Model" §3.2.
-- Lesson content is NOT in the database; it's compiled into content/ from the vault.
-- Every convert-owned row cascades from auth.users, so deleting the account deletes everything (T3 §3.3 rule 6).

create extension if not exists pgcrypto;

-- ---------- masjids and staff

create table public.masjids (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  madhab text check (madhab in ('hanafi', 'maliki', 'shafii', 'hanbali')), -- null = school-neutral default text
  jumuah_time text,                       -- shown in lessons as {{masjid.jumuah_time}}, e.g. "1:30 pm"
  timezone text not null default 'America/Chicago',
  imam_response_hours int not null default 48,
  has_female_staff boolean not null default false,
  created_at timestamptz not null default now()
);

create table public.masjid_dates (
  masjid_id uuid not null references public.masjids on delete cascade,
  event text not null check (event in ('ramadan_start', 'eid_fitr', 'dhul_hijjah_1', 'arafah', 'eid_adha')),
  date date not null,
  primary key (masjid_id, event, date)
);

create table public.staff (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users on delete cascade,
  masjid_id uuid not null references public.masjids on delete cascade,
  role text not null check (role in ('admin', 'imam', 'mentor')),
  display_name text not null,
  gender text check (gender in ('male', 'female')),
  safeguarding_vetted boolean not null default false,
  -- The second adult who also sees what a minor shares with their mentor (Spec §6.2 rule 12).
  safeguarding_lead boolean not null default false,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  unique (user_id, masjid_id)
);

create table public.invites (
  id uuid primary key default gen_random_uuid(),
  masjid_id uuid not null references public.masjids on delete cascade,
  code text not null unique default encode(gen_random_bytes(6), 'hex'),
  created_by uuid references public.staff on delete set null,
  expires_at timestamptz,
  max_uses int,
  uses int not null default 0,
  revoked boolean not null default false,
  created_at timestamptz not null default now()
);

-- ---------- converts

create table public.converts (
  id uuid primary key references auth.users on delete cascade,
  masjid_id uuid not null references public.masjids on delete restrict,
  first_name text not null check (char_length(first_name) between 1 and 40),
  birth_year int not null check (birth_year between 1900 and 2100),
  gender text check (gender in ('male', 'female')),
  shahada_date date,
  program_start_date date not null default current_date,
  timezone text not null default 'America/Chicago',
  mentor_id uuid references public.staff on delete set null,
  last_active_at timestamptz,
  created_at timestamptz not null default now()
);

create table public.convert_settings (
  convert_id uuid primary key references public.converts on delete cascade,
  share_progress boolean not null default false,  -- chosen at sign-up (Spec §6.4)
  share_logs boolean not null default false,
  discreet_mode boolean not null default true,     -- on by default
  neutral_app_name boolean not null default false,
  reminder_time time not null default '19:00',
  reminder_channel text not null default 'both' check (reminder_channel in ('push', 'email', 'both', 'none')),
  quick_exit_url text not null default 'https://www.google.com/search?q=weather',
  last_reminded_on date,
  updated_at timestamptz not null default now()
);

create table public.push_subscriptions (
  id uuid primary key default gen_random_uuid(),
  convert_id uuid not null references public.converts on delete cascade,
  endpoint text not null unique,
  p256dh text not null,
  auth text not null,
  user_agent text,
  created_at timestamptz not null default now()
);

-- ---------- progress

create table public.lesson_progress (
  convert_id uuid not null references public.converts on delete cascade,
  lesson_id text not null,
  content_version text,
  unlocked_at timestamptz not null default now(),
  started_at timestamptz,
  completed_at timestamptz,
  last_screen int not null default 0,
  primary key (convert_id, lesson_id)
);

create table public.screen_responses (
  id uuid primary key default gen_random_uuid(),
  convert_id uuid not null references public.converts on delete cascade,
  lesson_id text not null,
  screen_n int not null,
  response jsonb not null,
  created_at timestamptz not null default now(),
  unique (convert_id, lesson_id, screen_n)
);

create table public.review_items (
  convert_id uuid not null references public.converts on delete cascade,
  lesson_id text not null,
  check_index int not null,
  due_at timestamptz not null default now(),
  interval_days int not null default 1,
  ease real not null default 2.5,
  last_result boolean,
  primary key (convert_id, lesson_id, check_index)
);

create table public.action_logs (
  id uuid primary key default gen_random_uuid(),
  convert_id uuid not null references public.converts on delete cascade,
  log_key text not null check (log_key ~ '^[a-z_]{3,60}$'),
  lesson_id text,
  logged_at timestamptz not null default now(),
  unique (convert_id, log_key)
);

create table public.carry_forward_items (
  id uuid primary key default gen_random_uuid(),
  convert_id uuid not null references public.converts on delete cascade,
  lesson_id text not null,
  step_text text not null,
  active boolean not null default true,
  created_at timestamptz not null default now()
);

-- ---------- private content (bodies encrypted by the app before they're stored: lib/crypto.ts)

create table public.reflections (
  id uuid primary key default gen_random_uuid(),
  convert_id uuid not null references public.converts on delete cascade,
  lesson_id text not null,
  screen_n int not null,
  body_enc text not null,
  resurface_at timestamptz,
  shared_with_mentor_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (convert_id, lesson_id, screen_n)
);

create table public.ai_threads (
  id uuid primary key default gen_random_uuid(),
  convert_id uuid not null references public.converts on delete cascade,
  lesson_id text,
  mode text not null default 'chat' check (mode in ('chat', 'roleplay')),
  roleplay_screen int,
  created_at timestamptz not null default now()
);

create table public.ai_messages (
  id uuid primary key default gen_random_uuid(),
  thread_id uuid not null references public.ai_threads on delete cascade,
  convert_id uuid not null references public.converts on delete cascade,
  role text not null check (role in ('user', 'assistant')),
  body_enc text not null,
  citations jsonb not null default '[]',
  flagged boolean not null default false,       -- crisis check hit
  model text,
  created_at timestamptz not null default now()
);

create table public.ai_feedback (
  id uuid primary key default gen_random_uuid(),
  convert_id uuid references public.converts on delete set null,
  -- Copied in plain text ONLY when the convert taps "send this exchange to improve the guide".
  exchange jsonb,
  helpful boolean not null,
  note text,
  created_at timestamptz not null default now()
);

-- ---------- masjid-facing, sent on purpose

create table public.imam_questions (
  id uuid primary key default gen_random_uuid(),
  masjid_id uuid not null references public.masjids on delete cascade,
  convert_id uuid not null references public.converts on delete cascade,
  body text not null check (char_length(body) between 3 and 2000), -- exactly the text the convert confirmed
  anonymous boolean not null default false,
  route_to text not null default 'imam' check (route_to in ('imam', 'female_staff')),
  status text not null default 'open' check (status in ('open', 'answered', 'closed')),
  due_at timestamptz not null,
  answer text,
  answered_by uuid references public.staff on delete set null,
  answered_at timestamptz,
  created_at timestamptz not null default now()
);

create table public.safety_alerts (
  id uuid primary key default gen_random_uuid(),
  convert_id uuid not null references public.converts on delete cascade,
  recipient text not null check (recipient in ('mentor', 'female_staff')),
  status text not null default 'open' check (status in ('open', 'acknowledged')),
  acknowledged_by uuid references public.staff on delete set null,
  created_at timestamptz not null default now()
);

create table public.staff_audit_log (
  id bigint generated always as identity primary key,
  staff_id uuid references public.staff on delete set null,
  action text not null,
  target_convert_id uuid references public.converts on delete set null,
  at timestamptz not null default now()
);

create index on public.lesson_progress (convert_id, completed_at);
create index on public.ai_messages (thread_id, created_at);
create index on public.ai_messages (convert_id, created_at);
create index on public.imam_questions (masjid_id, status);
create index on public.converts (masjid_id);
create index on public.staff (user_id);
