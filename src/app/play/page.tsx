import { createClient } from "@/lib/supabase/server";
import ModeNav from "@/components/ModeNav";
import PlayClient from "./PlayClient";

export default async function PlayPage() {
  const supabase = await createClient();

  // The daily round flips over at midnight Pacific, not UTC — en-CA gives
  // YYYY-MM-DD directly, matching the DB's date column format.
  const today = new Date().toLocaleDateString("en-CA", {
    timeZone: "America/Los_Angeles",
  });

  let { data: round } = await supabase
    .from("rounds")
    .select("id, round_date, mode, answer_label")
    .eq("mode", "five_questions")
    .eq("round_date", today)
    .maybeSingle();

  if (!round) {
    // Gap day (content wasn't seeded ahead of time) — fall back to the most
    // recent PAST round rather than jumping forward into future content.
    const { data: fallback } = await supabase
      .from("rounds")
      .select("id, round_date, mode, answer_label")
      .eq("mode", "five_questions")
      .lte("round_date", today)
      .order("round_date", { ascending: false })
      .limit(1)
      .maybeSingle();
    round = fallback;
  }

  if (!round) {
    return (
      <main className="mx-auto max-w-2xl px-4 py-10">
        <ModeNav active="/play" />
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
      <ModeNav active="/play" />
      <PlayClient roundId={round.id} questions={questions ?? []} />
    </main>
  );
}
