import { config } from "dotenv";
import { createClient } from "@supabase/supabase-js";
import { scenarios } from "./scenarios";

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

  const scenario = scenarios[scenarioName];
  if (!scenario) {
    throw new Error(
      `Unknown scenario "${scenarioName}". Available: ${Object.keys(scenarios).join(", ")}`,
    );
  }

  const { data: round, error: roundError } = await supabase
    .from("rounds")
    .upsert(
      { round_date: roundDate, mode: "five_questions" },
      { onConflict: "round_date,mode" },
    )
    .select()
    .single();

  if (roundError || !round) {
    throw roundError ?? new Error("Failed to upsert round");
  }

  const questions = scenario.map((q) => ({ ...q, round_id: round.id }));

  const { error: questionsError } = await supabase
    .from("questions")
    .upsert(questions, { onConflict: "round_id,order_index" });

  if (questionsError) throw questionsError;

  console.log(
    `Seeded "${scenarioName}" as the five_questions round for ${roundDate} (round id: ${round.id})`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
