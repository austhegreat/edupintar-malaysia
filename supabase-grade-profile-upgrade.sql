-- Run once in Supabase SQL Editor after the original supabase-setup.sql.
-- Existing learners will be asked to choose their study level and grade at next sign-in.
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

drop view if exists public.public_leaderboard;
create view public.public_leaderboard as
  select username, avatar_url,
    coalesce((grade_xp ->> (study_level || ':' || study_grade))::integer, 0) as xp,
    jsonb_array_length(unlocked_badges) as badges,
    study_level, study_grade
  from public.profiles
  where public_leaderboard = true
    and study_level is not null
    and study_grade is not null;

grant select on public.public_leaderboard to anon, authenticated;
