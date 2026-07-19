import ModeNav from "@/components/ModeNav";
import { yearGuessItems } from "@/lib/game/yearGuessData";
import YearGuessGame from "./YearGuessGame";

export default function YearGuessPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <ModeNav active="/year-guess" />
      <YearGuessGame items={yearGuessItems} />
    </main>
  );
}
