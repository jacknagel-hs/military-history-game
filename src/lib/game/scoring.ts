const EARTH_RADIUS_KM = 6371;

// A guess within this radius of the target counts as "correct" — roughly
// right country/region, not pinpoint precision.
const MAP_CORRECT_THRESHOLD_KM = 300;

export function haversineDistanceKm(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number,
): number {
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return 2 * EARTH_RADIUS_KM * Math.asin(Math.sqrt(a));
}

export function isMapGuessCorrect(distanceKm: number): boolean {
  return distanceKm <= MAP_CORRECT_THRESHOLD_KM;
}

function normalize(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "") // strip accents
    .replace(/[^a-z0-9\s]/g, "") // strip punctuation
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^(the|a|an)\s+/, ""); // drop leading articles
}

function levenshtein(a: string, b: string): number {
  const dp: number[][] = Array.from({ length: a.length + 1 }, (_, i) =>
    Array.from({ length: b.length + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0)),
  );

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      dp[i][j] =
        a[i - 1] === b[j - 1]
          ? dp[i - 1][j - 1]
          : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }

  return dp[a.length][b.length];
}

/**
 * Accepts an answer if it loosely matches any accepted variant: an exact
 * match, one string containing the other (handles extra/missing words like
 * "Tsushima Strait" vs "Tsushima"), or a forgiving edit-distance tolerance
 * (30% of the longer string's length, minimum 2) that absorbs typos without
 * accepting wrong-but-similar-length answers.
 */
export function checkFreeResponse(userAnswer: string, acceptedAnswers: string[]): boolean {
  const normalizedUser = normalize(userAnswer);
  if (!normalizedUser) return false;

  for (const accepted of acceptedAnswers) {
    const normalizedAccepted = normalize(accepted);
    if (!normalizedAccepted) continue;

    if (normalizedUser === normalizedAccepted) return true;

    // Require at least 4 characters before allowing containment, so short
    // accepted answers don't trivially match any longer guess.
    if (
      normalizedAccepted.length >= 4 &&
      (normalizedUser.includes(normalizedAccepted) ||
        normalizedAccepted.includes(normalizedUser))
    ) {
      return true;
    }

    const distance = levenshtein(normalizedUser, normalizedAccepted);
    const longerLength = Math.max(normalizedUser.length, normalizedAccepted.length);
    const tolerance = Math.max(2, Math.round(longerLength * 0.3));

    if (distance <= tolerance) return true;
  }

  return false;
}

export const checkTrivia = checkFreeResponse;
