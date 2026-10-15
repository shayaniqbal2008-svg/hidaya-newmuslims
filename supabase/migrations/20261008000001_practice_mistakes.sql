-- Practice: questions a convert answered wrong, to retry until right twice in a row (Practice hub spec §3).
-- Private like review_items: own rows only, and no view, function or staff policy reads them.
create table public.practice_mistakes (
  convert_id uuid not null references public.converts on delete cascade,
  lesson_id text not null,
  ref text not null check (ref ~ '^(check|screen):[0-9]{1,3}$'),
  wrong_count int not null default 1,
  right_streak int not null default 0,
  last_wrong_at timestamptz not null default now(),
  cleared_at timestamptz,
  primary key (convert_id, lesson_id, ref)
);

alter table public.practice_mistakes enable row level security;
create policy "own rows" on public.practice_mistakes for all
  using (convert_id = auth.uid()) with check (convert_id = auth.uid());
revoke all on public.practice_mistakes from anon, authenticated;
grant select, insert, update, delete on public.practice_mistakes to authenticated;
