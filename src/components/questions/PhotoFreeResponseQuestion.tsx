"use client";

import { useState } from "react";
import Image from "next/image";

export default function PhotoFreeResponseQuestion({
  prompt,
  imageUrl,
  disabled,
  onSubmit,
}: {
  prompt: string;
  imageUrl: string;
  disabled: boolean;
  onSubmit: (answer: string) => void;
}) {
  const [answer, setAnswer] = useState("");

  return (
    <div className="flex flex-col gap-4">
      <p className="font-body text-lg text-ink">{prompt}</p>
      <div className="relative h-72 w-full overflow-hidden border-2 border-ink bg-paper-dark sepia">
        <Image src={imageUrl} alt="Identify this" fill className="object-contain" />
      </div>
      <form
        className="flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          if (answer.trim()) onSubmit(answer.trim());
        }}
      >
        <input
          value={answer}
          disabled={disabled}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Your answer"
          className="flex-1 border-2 border-ink bg-paper px-3 py-2 font-body text-ink disabled:opacity-40"
        />
        <button
          type="submit"
          disabled={disabled || !answer.trim()}
          className="border-2 border-ink bg-olive px-4 py-2 text-sm font-semibold text-paper disabled:opacity-40"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
