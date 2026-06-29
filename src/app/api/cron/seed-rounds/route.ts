import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { seedScenario, scenarios } from "../../../../../scripts/seedScenario";

// Lexically "scenario10" < "scenario2", so sort by the trailing number instead.
function scenarioNumber(name: string): number {
  const match = name.match(/(\d+)$/);
  return match ? parseInt(match[1], 10) : Number.MAX_SAFE_INTEGER;
}

function addDaysToDateString(dateStr: string, days: number): string {
  const [y, m, d] = dateStr.split("-").map(Number);
  const date = new Date(Date.UTC(y, m - 1, d));
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
}

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
  );

  const { data: rounds, error } = await supabase
    .from("rounds")
    .select("round_date, source_scenario")
    .eq("mode", "five_questions")
    .order("round_date", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const usedScenarios = new Set(
    (rounds ?? []).map((r) => r.source_scenario).filter((s): s is string => !!s),
  );
  const latestDate = rounds?.[0]?.round_date ?? new Date().toISOString().slice(0, 10);

  const unseeded = Object.keys(scenarios)
    .filter((name) => !usedScenarios.has(name))
    .sort((a, b) => scenarioNumber(a) - scenarioNumber(b));

  const seeded: { scenario: string; round_date: string }[] = [];
  let nextDate = latestDate;

  for (const scenarioName of unseeded) {
    nextDate = addDaysToDateString(nextDate, 1);
    await seedScenario(supabase, nextDate, scenarioName);
    seeded.push({ scenario: scenarioName, round_date: nextDate });
  }

  return NextResponse.json({ seeded, count: seeded.length });
}
