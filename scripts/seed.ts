import { config } from "dotenv";
import { createClient } from "@supabase/supabase-js";

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

  const questions = [
    {
      round_id: round.id,
      order_index: 1,
      type: "map",
      difficulty: "easy",
      prompt:
        "On June 6, 1944, Allied forces launched the largest amphibious invasion in history. Drop your pin where troops stormed the beaches.",
      image_url: null,
      answer_label: "Normandy, France",
      accepted_answers: null,
      target_lat: 49.372,
      target_lng: -0.879,
    },
    {
      round_id: round.id,
      order_index: 2,
      type: "weapon_photo",
      difficulty: "easy",
      prompt: "Name this weapon.",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/6/67/AK-47_type_II.png",
      answer_label: "AK-47",
      accepted_answers: ["AK-47", "AK47", "Kalashnikov", "AK 47"],
      target_lat: null,
      target_lng: null,
    },
    {
      round_id: round.id,
      order_index: 3,
      type: "map",
      difficulty: "tougher",
      prompt:
        "In the summer of 1943, the two largest tank fleets ever assembled clashed here, in what became the largest tank battle in history. Drop your pin where it happened.",
      image_url: null,
      answer_label: "Kursk, Russia",
      accepted_answers: null,
      target_lat: 51.7373,
      target_lng: 36.1874,
    },
    {
      round_id: round.id,
      order_index: 4,
      type: "person_photo",
      difficulty: "tougher",
      prompt: "Name this man.",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/6/61/General_Friedrich_Paulus_1890-1957.jpg",
      answer_label: "Friedrich Paulus",
      accepted_answers: ["Friedrich Paulus", "Paulus", "Field Marshal Paulus"],
      target_lat: null,
      target_lng: null,
    },
    {
      round_id: round.id,
      order_index: 5,
      type: "trivia",
      difficulty: "very_tough",
      prompt:
        "During the Russo-Japanese War, this 1905 naval battle saw a Russian fleet that had sailed over 18,000 nautical miles around the world annihilated by the Imperial Japanese Navy in a matter of hours — the first major defeat of a European power by an Asian power in the modern era. Name the battle.",
      image_url: null,
      answer_label: "Battle of Tsushima",
      accepted_answers: ["Battle of Tsushima", "Tsushima", "Battle of Tsushima Strait"],
      target_lat: null,
      target_lng: null,
    },
  ];

  const { error: questionsError } = await supabase
    .from("questions")
    .upsert(questions, { onConflict: "round_id,order_index" });

  if (questionsError) throw questionsError;

  console.log(`Seeded five_questions round for ${roundDate} (round id: ${round.id})`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
