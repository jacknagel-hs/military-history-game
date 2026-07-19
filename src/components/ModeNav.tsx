import Link from "next/link";

const MODES = [
  { href: "/play", label: "Daily Briefing" },
  { href: "/year-guess", label: "Year Guess" },
  { href: "/five-clues", label: "Five Clues" },
] as const;

export default function ModeNav({ active }: { active: (typeof MODES)[number]["href"] }) {
  return (
    <nav className="mx-auto mb-6 flex max-w-2xl flex-wrap gap-2">
      {MODES.map((mode) => (
        <Link
          key={mode.href}
          href={mode.href}
          className={
            mode.href === active
              ? "stamp px-3 py-1 text-xs"
              : "border-2 border-ink/40 px-3 py-1 font-stamp text-xs uppercase tracking-wide text-ink/60 transition-colors hover:border-ink hover:text-ink"
          }
        >
          {mode.label}
        </Link>
      ))}
    </nav>
  );
}
