"use client";

import Image from "next/image";
import Link from "next/link";
import { QuestionResult } from "@/lib/game/types";

const RECRUITMENT_POSTER_URL =
  "https://upload.wikimedia.org/wikipedia/commons/5/59/J._M._Flagg%2C_I_Want_You_for_U.S._Army_poster_%281917%29.jpg";

function buildShareText(results: QuestionResult[]) {
  const correctCount = results.filter((r) => r.correct).length;
  const total = results.length;
  const grid = results.map((r) => (r.correct ? "🟩" : "🟥")).join("");
  const url = typeof window !== "undefined" ? window.location.origin : "";
  return `War & Peace Daily ${correctCount}/${total}\n${grid}\nThink you can beat me? ${url}`;
}

function buildSmsHref(body: string) {
  const isIOS =
    typeof navigator !== "undefined" && /iphone|ipad|ipod/i.test(navigator.userAgent);
  const separator = isIOS ? "&" : "?";
  return `sms:${separator}body=${encodeURIComponent(body)}`;
}

export default function ResultsScreen({ results }: { results: QuestionResult[] }) {
  const correctCount = results.filter((r) => r.correct).length;
  const total = results.length;

  return (
    <div className="paper-panel flex flex-col gap-4 px-6 py-8">
      <span className="stamp self-start px-2 py-0.5 text-xs">Mission Debrief</span>
      <h2 className="font-display text-4xl text-ink">
        Score: {correctCount} / {total}
      </h2>

      <ul className="flex flex-col gap-2">
        {results.map((r, i) => (
          <li key={r.questionId} className="border-2 border-ink/40 bg-paper-dark px-3 py-2">
            <div className="flex justify-between font-stamp text-xs uppercase">
              <span>Question {i + 1}</span>
              <span className={r.correct ? "text-olive" : "text-rust"}>
                {r.correct ? "Correct" : "Incorrect"}
              </span>
            </div>
            <div className="font-body text-sm text-ink/80">
              Your answer: {r.userAnswer || "—"}
            </div>
            <div className="font-body text-sm text-ink/80">
              Correct answer: {r.correctAnswer}
            </div>
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-3 border-2 border-ink bg-paper-dark p-4">
        <div className="relative h-64 w-full overflow-hidden border-2 border-ink sepia">
          <Image
            src={RECRUITMENT_POSTER_URL}
            alt="WWI recruitment poster"
            fill
            className="object-contain"
          />
        </div>
        <p className="font-display text-center text-2xl text-ink">
          Enlist in today&apos;s War Room mission
        </p>
        <a
          href={buildSmsHref(buildShareText(results))}
          className="self-center border-2 border-ink bg-rust px-4 py-2 text-sm font-semibold text-paper"
        >
          Share my score
        </a>
      </div>

      <div className="flex flex-col gap-2 border-2 border-dashed border-ink/50 p-4">
        <p className="font-display text-xl text-ink">
          Save your score &amp; get notified about tomorrow&apos;s briefing
        </p>
        <p className="font-body text-sm text-ink/70">
          Create a free account to track your streak and get an email when a new round drops.
        </p>
        <Link
          href="/login"
          className="self-start border-2 border-ink bg-olive px-4 py-2 text-sm font-semibold text-paper"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}
