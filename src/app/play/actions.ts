"use server";

import { createClient } from "@/lib/supabase/server";
import { QuestionResult } from "@/lib/game/types";

export async function submitAttempt(roundId: string, results: QuestionResult[]) {
  const supabase = await createClient();
  const { data: userData } = await supabase.auth.getUser();
  if (!userData.user) return;

  const score = results.filter((r) => r.correct).length;
  const maxScore = results.length;

  await supabase.from("attempts").upsert(
    {
      user_id: userData.user.id,
      round_id: roundId,
      score,
      max_score: maxScore,
      details: results,
    },
    { onConflict: "user_id,round_id" },
  );
}
