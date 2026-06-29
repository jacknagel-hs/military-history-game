import type { SupabaseClient } from "@supabase/supabase-js";
import { scenarios } from "./scenarios";

export { scenarios };

export async function seedScenario(
  supabase: SupabaseClient,
  roundDate: string,
  scenarioName: string,
) {
  const scenario = scenarios[scenarioName];
  if (!scenario) {
    throw new Error(
      `Unknown scenario "${scenarioName}". Available: ${Object.keys(scenarios).join(", ")}`,
    );
  }

  const { data: round, error: roundError } = await supabase
    .from("rounds")
    .upsert(
      { round_date: roundDate, mode: "five_questions", source_scenario: scenarioName },
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

  return round;
}
