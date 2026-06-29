import { createClient } from "@/lib/supabase/server";
import PlayClient from "./PlayClient";

export default async function PlayPage() {
  const supabase = await createClient();

  // Play today's round if it exists, otherwise fall back to the most
  // recent five_questions round (handy in local dev before today exists).
  const today = new Date().toISOString().slice(0, 10);

  let { data: round } = await supabase
    .from("rounds")
    .select("id, round_date, mode, answer_label")
    .eq("mode", "five_questions")
    .eq("round_date", today)
    .maybeSingle();

  if (!round) {
    const { data: fallback } = await supabase
      .from("rounds")
      .select("id, round_date, mode, answer_label")
      .eq("mode", "five_questions")
      .order("round_date", { ascending: false })
      .limit(1)
      .maybeSingle();
    round = fallback;
  }

  if (!round) {
    return (
      <main className="mx-auto max-w-2xl px-4 py-10">
        <div className="paper-panel px-6 py-8 text-ink">
          No round is available yet. Seed one with `npm run seed`.
        </div>
      </main>
    );
  }

  const { data: questions } = await supabase
    .from("questions")
    .select("*")
    .eq("round_id", round.id)
    .order("order_index", { ascending: true });

  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <PlayClient roundId={round.id} questions={questions ?? []} />
    </main>
  );
}
