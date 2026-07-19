import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { signOut } from "@/app/login/actions";

export default async function Home() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center gap-8 px-4 text-center">
      <div className="paper-panel flex flex-col items-center gap-6 px-8 py-10">
        <span className="stamp px-3 py-1 text-xs">Daily Briefing</span>
        <h1 className="font-display text-6xl text-ink sm:text-7xl">
          War &amp; Peace Daily
        </h1>
        <p className="max-w-md text-ink/80">
          Plot battles on the map and identify commanders from dossier
          photos. Five questions, once a day.
        </p>

        <Link
          href="/play"
          className="border-2 border-ink bg-olive px-8 py-3 font-display text-2xl text-paper transition-colors hover:bg-olive-deep"
        >
          Begin Today&apos;s Briefing
        </Link>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/year-guess"
            className="border-2 border-ink px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            Try: Year Guess
          </Link>
          <Link
            href="/five-clues"
            className="border-2 border-ink px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            Try: Five Clues
          </Link>
        </div>

        {data.user ? (
          <form action={signOut}>
            <button className="font-stamp text-sm text-ink/60 underline">
              Sign out ({data.user.email})
            </button>
          </form>
        ) : (
          <div className="flex gap-3">
            <Link
              href="/login"
              className="border-2 border-ink px-4 py-2 text-sm font-semibold text-ink"
            >
              Login
            </Link>
            <Link
              href="/login"
              className="border-2 border-ink bg-ink px-4 py-2 text-sm font-semibold text-paper"
            >
              Sign up
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
