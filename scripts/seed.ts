import { config } from "dotenv";
import { createClient } from "@supabase/supabase-js";
import { seedScenario } from "./seedScenario";

config({ path: ".env.local" });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceRoleKey) {
  throw new Error(
    "NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set in .env.local",
  );
}

// Service role bypasses RLS; this script must never run in client code.
const supabase = createClient(supabaseUrl, serviceRoleKey);

async function main() {
  const roundDate = process.argv[2] ?? new Date().toISOString().slice(0, 10);
  const scenarioName = process.argv[3] ?? "scenario1";

  const round = await seedScenario(supabase, roundDate, scenarioName);

  console.log(
    `Seeded "${scenarioName}" as the five_questions round for ${roundDate} (round id: ${round.id})`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
