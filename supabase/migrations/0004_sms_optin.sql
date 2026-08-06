-- Captures SMS marketing/notification consent. No messages are actually
-- sent yet — this just records opt-ins (with a snapshot of the exact
-- disclosure text agreed to, for compliance/proof of consent) so a sending
-- provider can be wired up later without re-collecting consent.
create table if not exists sms_optins (
  id uuid primary key default gen_random_uuid(),
  phone_number text not null,
  user_id uuid references auth.users(id) on delete set null,
  consent_text text not null,
  consented_at timestamptz not null default now(),
  unsubscribed_at timestamptz
);

alter table sms_optins enable row level security;

-- Public opt-in form writes directly with the anon key; no public read
-- access (exports for an eventual SMS provider go through the service role).
create policy "anyone can opt in" on sms_optins for insert with check (true);
