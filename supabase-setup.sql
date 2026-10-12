-- Run once in the Supabase SQL Editor for EduPintar account and profile storage.
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text not null unique check (username ~ '^[a-z0-9_]{3,20}$'),
  avatar_url text,
  study_level text check (study_level in ('primary', 'secondary')),
  study_grade text,
  grade_xp jsonb not null default '{}'::jsonb,
  public_leaderboard boolean not null default false,
  xp integer not null default 0 check (xp >= 0),
  streak integer not null default 0 check (streak >= 0),
  last_active_date date,
  completed_notes jsonb not null default '[]'::jsonb,
  completed_quizzes jsonb not null default '{}'::jsonb,
  unlocked_badges jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create unique index if not exists profiles_username_lower_unique
  on public.profiles (lower(username));

alter table public.profiles add column if not exists study_level text;
alter table public.profiles add column if not exists study_grade text;
alter table public.profiles add column if not exists grade_xp jsonb not null default '{}'::jsonb;
alter table public.profiles drop constraint if exists profiles_study_level_check;
alter table public.profiles add constraint profiles_study_level_check
  check (study_level is null or study_level in ('primary', 'secondary'));
alter table public.profiles drop constraint if exists profiles_study_grade_check;
alter table public.profiles add constraint profiles_study_grade_check
  check (
    study_grade is null or
    (study_level = 'primary' and study_grade in ('t1', 't2', 't3', 't4', 't5', 't6')) or
    (study_level = 'secondary' and study_grade in ('f1', 'f2', 'f3', 'f4', 'f5'))
  );

alter table public.profiles enable row level security;
grant select, insert, update on public.profiles to authenticated;

drop policy if exists "Read own or public learner profiles" on public.profiles;
drop policy if exists "Read own profile" on public.profiles;
create policy "Read own profile"
  on public.profiles for select to authenticated
  using (id = auth.uid());

drop policy if exists "Insert own profile" on public.profiles;
create policy "Insert own profile"
  on public.profiles for insert to authenticated
  with check (id = auth.uid());

drop policy if exists "Update own profile" on public.profiles;
create policy "Update own profile"
  on public.profiles for update to authenticated
  using (id = auth.uid()) with check (id = auth.uid());

drop view if exists public.public_leaderboard;
-- The view intentionally exposes only the opt-in leaderboard fields. Its owner
-- can read the source table; direct table reads remain limited to each user row.
create view public.public_leaderboard as
  select username, avatar_url,
    coalesce((grade_xp ->> (study_level || ':' || study_grade))::integer, 0) as xp,
    study_level, study_grade,
    jsonb_array_length(unlocked_badges) as badges
  from public.profiles
  where public_leaderboard = true
    and study_level is not null
    and study_grade is not null;

grant select on public.public_leaderboard to anon, authenticated;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('avatars', 'avatars', true, 2097152, array['image/png', 'image/jpeg', 'image/webp'])
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Learners can upload their own avatar" on storage.objects;
create policy "Learners can upload their own avatar"
  on storage.objects for insert to authenticated
  with check (bucket_id = 'avatars' and (storage.foldername(name))[1] = auth.uid()::text);

drop policy if exists "Learners can update their own avatar" on storage.objects;
create policy "Learners can update their own avatar"
  on storage.objects for update to authenticated
  using (bucket_id = 'avatars' and (storage.foldername(name))[1] = auth.uid()::text)
  with check (bucket_id = 'avatars' and (storage.foldername(name))[1] = auth.uid()::text);

drop policy if exists "Learners can delete their own avatar" on storage.objects;
create policy "Learners can delete their own avatar"
  on storage.objects for delete to authenticated
  using (bucket_id = 'avatars' and (storage.foldername(name))[1] = auth.uid()::text);

drop policy if exists "Public can view profile avatars" on storage.objects;
create policy "Public can view profile avatars"
  on storage.objects for select to anon, authenticated
  using (bucket_id = 'avatars');
