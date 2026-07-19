import ModeNav from "@/components/ModeNav";
import { fiveCluesSets } from "@/lib/game/fiveCluesData";
import FiveCluesGame from "./FiveCluesGame";

function dayOfYear(date: Date): number {
  const start = Date.UTC(date.getUTCFullYear(), 0, 0);
  const diff = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()) - start;
  return Math.floor(diff / 86400000);
}

export default function FiveCluesPage() {
  // Test mode: no DB-backed daily rotation yet, just a deterministic pick
  // per Pacific calendar day so it still feels like "today's" puzzle.
  const today = new Date();
  const index = dayOfYear(today) % fiveCluesSets.length;
  const set = fiveCluesSets[index];

  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <ModeNav active="/five-clues" />
      <FiveCluesGame set={set} />
    </main>
  );
}
