"use client";

import { useState } from "react";
import Image from "next/image";
import { computeYearScore } from "@/lib/game/yearScoring";
import type { YearGuessItem } from "@/lib/game/yearGuessData";

function formatYear(year: number): string {
  return year < 0 ? `${Math.abs(year)} BC` : `${year} AD`;
}

interface RoundResult {
  itemId: string;
  guessYear: number;
  actualYear: number;
  score: number;
}

export default function YearGuessGame({ items }: { items: YearGuessItem[] }) {
  const [index, setIndex] = useState(0);
  const [guessYear, setGuessYear] = useState(1950);
  const [results, setResults] = useState<RoundResult[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const current = items[index];
  const isLast = index === items.length - 1;
  const lastResult = results[results.length - 1];

  function handleSubmit() {
    if (submitted) return;
    const score = computeYearScore(guessYear, current.year, current.era);
    setResults((r) => [...r, { itemId: current.id, guessYear, actualYear: current.year, score }]);
    setSubmitted(true);
  }

  function handleNext() {
    setSubmitted(false);
    setGuessYear(1950);
    setIndex((i) => i + 1);
  }

  if (!current) {
    const total = results.reduce((sum, r) => sum + r.score, 0);
    const max = results.length * 100;
    return (
      <div className="paper-panel flex flex-col gap-4 px-6 py-8">
        <span className="stamp self-start px-2 py-0.5 text-xs">Year Guess — Test Mode</span>
        <h2 className="font-display text-4xl text-ink">
          Score: {total} / {max}
        </h2>
        <ul className="flex flex-col gap-2">
          {results.map((r, i) => (
            <li key={r.itemId} className="border-2 border-ink/40 bg-paper-dark px-3 py-2">
              <div className="flex justify-between font-stamp text-xs uppercase">
                <span>Round {i + 1}</span>
                <span className="text-olive">{r.score} pts</span>
              </div>
              <div className="font-body text-sm text-ink/80">
                Your guess: {formatYear(r.guessYear)} — Actual: {formatYear(r.actualYear)}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="paper-panel flex flex-col gap-6 px-6 py-8">
      <div className="flex items-center justify-between">
        <span className="stamp px-2 py-0.5 text-xs">Year Guess — Test Mode</span>
        <span className="font-display text-2xl text-ink">
          Round {index + 1} of {items.length}
        </span>
      </div>

      <p className="font-body text-lg text-ink">{current.context}</p>

      <div className="relative h-72 w-full overflow-hidden border-2 border-ink bg-paper-dark sepia">
        <Image src={current.imageUrl} alt={current.context} fill className="object-contain" />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-display text-3xl text-ink" htmlFor="year-slider">
          {formatYear(guessYear)}
        </label>
        <input
          id="year-slider"
          type="range"
          min={-800}
          max={2026}
          step={1}
          value={guessYear}
          disabled={submitted}
          onChange={(e) => setGuessYear(Number(e.target.value))}
          className="w-full accent-olive disabled:opacity-50"
        />
        <div className="flex justify-between font-stamp text-xs text-ink/50">
          <span>800 BC</span>
          <span>2026 AD</span>
        </div>
      </div>

      {!submitted ? (
        <button
          onClick={handleSubmit}
          className="self-start border-2 border-ink bg-olive px-4 py-2 text-sm font-semibold text-paper"
        >
          Lock in guess
        </button>
      ) : (
        <div className="flex flex-col gap-4 border-2 border-ink bg-paper-dark p-4">
          <div className="font-display text-2xl text-ink">
            Actual year: {formatYear(current.year)}
          </div>
          <div className="font-body text-ink/80">
            You guessed {formatYear(guessYear)} — {Math.abs(guessYear - current.year)} year
            {Math.abs(guessYear - current.year) === 1 ? "" : "s"} off.
          </div>
          <div className="font-display text-xl text-ink">{lastResult?.score} points</div>
          <button
            onClick={handleNext}
            className="self-start border-2 border-ink bg-olive px-4 py-2 text-sm font-semibold text-paper"
          >
            {isLast ? "See final score" : "Next round"}
          </button>
        </div>
      )}
    </div>
  );
}
