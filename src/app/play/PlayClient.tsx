"use client";

import RoundPlayer from "@/components/RoundPlayer";
import { Question, QuestionResult } from "@/lib/game/types";
import { submitAttempt } from "./actions";

export default function PlayClient({
  roundId,
  questions,
}: {
  roundId: string;
  questions: Question[];
}) {
  return (
    <RoundPlayer
      questions={questions}
      onComplete={(results: QuestionResult[]) => {
        submitAttempt(roundId, results);
      }}
    />
  );
}
