export type Era = "modern" | "early_modern" | "classical" | "ancient";

// How many years off before the score decays to half — tight for eras where
// a well-informed guess should land close (modern photography), wide for
// eras where even experts can only narrow things down loosely.
const ERA_TOLERANCE_YEARS: Record<Era, number> = {
  modern: 2,
  early_modern: 10,
  classical: 25,
  ancient: 50,
};

const DECAY_BASE = 0.5;
const MIN_SCORE = 0;

/**
 * Percentage-of-era decay: 100 points for an exact year, halving every
 * `tolerance` years off, per era. A modern-era photo guessed 2 years off
 * scores 50; the same 2-years-off on an ancient artifact barely dents the
 * score, reflecting how much harder ancient dating really is.
 */
export function computeYearScore(guessYear: number, actualYear: number, era: Era): number {
  const yearsOff = Math.abs(guessYear - actualYear);
  const tolerance = ERA_TOLERANCE_YEARS[era];
  const score = 100 * DECAY_BASE ** (yearsOff / tolerance);
  return Math.max(MIN_SCORE, Math.round(score));
}
