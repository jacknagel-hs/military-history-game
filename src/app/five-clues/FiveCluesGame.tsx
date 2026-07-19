"use client";

import { useState } from "react";
import { checkFreeResponse } from "@/lib/game/scoring";
import type { FiveCluesSet } from "@/lib/game/fiveCluesData";

const CATEGORY_LABEL: Record<FiveCluesSet["category"], string> = {
  person: "Person",
  place: "Place",
  battle: "Battle",
  thing: "Thing",
};

export default function FiveCluesGame({ set }: { set: FiveCluesSet }) {
  const [clueIndex, setClueIndex] = useState(0); // how many clues revealed - 1
  const [guesses, setGuesses] = useState<string[]>([]);
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState<{ solved: boolean; cluesUsed: number } | null>(null);

  const revealedClues = set.clues.slice(0, clueIndex + 1);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const guess = answer.trim();
    if (!guess || result) return;

    if (checkFreeResponse(guess, [...set.acceptedAnswers, set.answerLabel])) {
      setGuesses((g) => [...g, guess]);
      setResult({ solved: true, cluesUsed: clueIndex + 1 });
      return;
    }

    setGuesses((g) => [...g, guess]);
    setAnswer("");

    if (clueIndex >= set.clues.length - 1) {
      setResult({ solved: false, cluesUsed: set.clues.length });
    } else {
      setClueIndex((i) => i + 1);
    }
  }

  return (
    <div className="paper-panel flex flex-col gap-6 px-6 py-8">
      <div className="flex items-center justify-between">
        <span className="stamp px-2 py-0.5 text-xs">Five Clues — Test Mode</span>
        <span className="font-stamp text-xs uppercase tracking-wide text-ink/60">
          Category: {CATEGORY_LABEL[set.category]}
        </span>
      </div>

      <ol className="flex flex-col gap-3">
        {revealedClues.map((clue, i) => (
          <li key={i} className="border-2 border-ink/40 bg-paper-dark px-3 py-2">
            <div className="font-stamp text-xs uppercase text-ink/50">Clue {i + 1} of 5</div>
            <div className="font-body text-ink">{clue}</div>
          </li>
        ))}
      </ol>

      {guesses.length > 0 && (
        <div className="font-body text-sm text-ink/60">
          Previous guesses: {guesses.join(", ")}
        </div>
      )}

      {!result ? (
        <form className="flex gap-2" onSubmit={handleSubmit}>
          <input
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder={`Guess the ${CATEGORY_LABEL[set.category].toLowerCase()}`}
            className="flex-1 border-2 border-ink bg-paper px-3 py-2 font-body text-ink"
          />
          <button
            type="submit"
            disabled={!answer.trim()}
            className="border-2 border-ink bg-olive px-4 py-2 text-sm font-semibold text-paper disabled:opacity-40"
          >
            Guess
          </button>
        </form>
      ) : (
        <div className="flex flex-col gap-3 border-2 border-ink bg-paper-dark p-4">
          <div className="font-display text-2xl text-ink">
            {result.solved ? `Solved on clue ${result.cluesUsed} of 5` : "Not solved"}
          </div>
          <div className="font-body text-ink/80">Answer: {set.answerLabel}</div>
          <div className="font-body text-sm text-ink/60">
            Fewer clues used is a better score — this round: {result.solved ? result.cluesUsed : "—"}.
          </div>
        </div>
      )}
    </div>
  );
}
