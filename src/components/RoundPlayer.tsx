"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Question, QuestionResult } from "@/lib/game/types";
import {
  checkFreeResponse,
  checkTrivia,
  haversineDistanceKm,
  isMapGuessCorrect,
} from "@/lib/game/scoring";
import PhotoFreeResponseQuestion from "@/components/questions/PhotoFreeResponseQuestion";
import TriviaQuestion from "@/components/questions/TriviaQuestion";
import ResultsScreen from "@/components/ResultsScreen";

const MapQuestion = dynamic(() => import("@/components/questions/MapQuestion"), {
  ssr: false,
});

export default function RoundPlayer({
  questions,
  onComplete,
}: {
  questions: Question[];
  onComplete: (results: QuestionResult[]) => void;
}) {
  const [index, setIndex] = useState(0);
  const [results, setResults] = useState<QuestionResult[]>([]);
  const [lastResult, setLastResult] = useState<QuestionResult | null>(null);

  const current = questions[index];
  const isLast = index === questions.length - 1;

  function recordResult(result: QuestionResult) {
    const updated = [...results, result];
    setResults(updated);
    setLastResult(result);

    if (isLast) {
      onComplete(updated);
    }
  }

  function advance() {
    setLastResult(null);
    setIndex((i) => i + 1);
  }

  if (!current) {
    return <ResultsScreen results={results} />;
  }

  return (
    <div className="paper-panel flex flex-col gap-6 px-6 py-8">
      <div className="flex items-center justify-between">
        <span className="font-display text-2xl text-ink">
          Briefing {index + 1} of {questions.length}
        </span>
      </div>

      {current.type === "map" && (
        <MapQuestion
          key={current.id}
          prompt={current.prompt}
          disabled={!!lastResult}
          targetLat={current.target_lat!}
          targetLng={current.target_lng!}
          onSubmit={(lat, lng) => {
            if (lastResult) return;
            const distanceKm = haversineDistanceKm(
              lat,
              lng,
              current.target_lat!,
              current.target_lng!,
            );
            recordResult({
              questionId: current.id,
              type: current.type,
              correct: isMapGuessCorrect(distanceKm),
              correctAnswer: current.answer_label,
              userAnswer: `${Math.round(distanceKm)} km away`,
            });
          }}
        />
      )}

      {!lastResult && current.type === "person_photo" && (
        <PhotoFreeResponseQuestion
          prompt={current.prompt}
          imageUrl={current.image_url!}
          disabled={false}
          onSubmit={(answer) => {
            recordResult({
              questionId: current.id,
              type: current.type,
              correct: checkFreeResponse(answer, current.accepted_answers ?? []),
              correctAnswer: current.answer_label,
              userAnswer: answer,
            });
          }}
        />
      )}

      {!lastResult && current.type === "trivia" && (
        <TriviaQuestion
          prompt={current.prompt}
          disabled={false}
          onSubmit={(answer) => {
            recordResult({
              questionId: current.id,
              type: current.type,
              correct: checkTrivia(answer, current.accepted_answers ?? []),
              correctAnswer: current.answer_label,
              userAnswer: answer,
            });
          }}
        />
      )}

      {lastResult && (
        <div className="flex flex-col gap-4 border-2 border-ink bg-paper-dark p-4">
          <div className="font-display text-2xl text-ink">
            {lastResult.correct ? "Confirmed." : "Negative."}
          </div>
          <div className="font-body text-ink/80">
            Correct answer: {lastResult.correctAnswer}
          </div>
          <button
            onClick={advance}
            className="self-start border-2 border-ink bg-olive px-4 py-2 text-sm font-semibold text-paper"
          >
            {isLast ? "See final score" : "Next briefing"}
          </button>
        </div>
      )}
    </div>
  );
}
