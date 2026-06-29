-- Tracks which scripts/scenarios.ts entry a round was seeded from, so the
-- auto-seed cron can tell which scenarios haven't been used yet without
-- needing a separate ledger.
alter table rounds add column if not exists source_scenario text;
