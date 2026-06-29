-- Profiles: one row per authenticated user
create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text unique not null,
  created_at timestamptz not null default now()
);

-- One row per daily round, for either game mode
create table if not exists rounds (
  id uuid primary key default gen_random_uuid(),
  round_date date not null,
  mode text not null check (mode in ('five_questions', 'five_clues')),
  -- For five_clues: the human-readable name of the answer (e.g. "Operation Market Garden")
  answer_label text,
  created_at timestamptz not null default now(),
  unique (round_date, mode)
);

-- Questions belonging to a five_questions round
create table if not exists questions (
  id uuid primary key default gen_random_uuid(),
  round_id uuid not null references rounds(id) on delete cascade,
  order_index int not null,
  type text not null check (type in ('map', 'weapon_photo', 'person_photo', 'trivia')),
  difficulty text not null check (difficulty in ('easy', 'tougher', 'very_tough')),
  prompt text not null,
  image_url text,
  -- Human-readable correct answer, shown on the results screen
  answer_label text not null,
  -- Canonical + accepted alternate spellings for free-response question types
  accepted_answers text[],
  target_lat double precision,
  target_lng double precision,
  unique (round_id, order_index)
);

-- Clues belonging to a five_clues round
create table if not exists clues (
  id uuid primary key default gen_random_uuid(),
  round_id uuid not null references rounds(id) on delete cascade,
  order_index int not null,
  clue_text text not null,
  image_url text,
  unique (round_id, order_index)
);

-- One completed attempt per user per round
create table if not exists attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  round_id uuid not null references rounds(id) on delete cascade,
  score int not null,
  max_score int not null,
  details jsonb not null default '[]'::jsonb,
  completed_at timestamptz not null default now(),
  unique (user_id, round_id)
);

alter table profiles enable row level security;
alter table rounds enable row level security;
alter table questions enable row level security;
alter table clues enable row level security;
alter table attempts enable row level security;

-- Round/question/clue content is public read-only; writes go through the
-- service role (seed scripts), never the client.
create policy "rounds are publicly readable" on rounds for select using (true);
create policy "questions are publicly readable" on questions for select using (true);
create policy "clues are publicly readable" on clues for select using (true);

create policy "users can read their own profile" on profiles for select using (auth.uid() = id);
create policy "users can insert their own profile" on profiles for insert with check (auth.uid() = id);
create policy "users can update their own profile" on profiles for update using (auth.uid() = id);

create policy "users can read their own attempts" on attempts for select using (auth.uid() = user_id);
create policy "users can insert their own attempts" on attempts for insert with check (auth.uid() = user_id);
