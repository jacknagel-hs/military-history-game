import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-1 px-4 py-6 font-stamp text-xs uppercase tracking-wide text-white/50">
      <span>&copy; {new Date().getFullYear()} ConcertBuddy AI LLC</span>
      <Link href="/terms" className="underline-offset-2 hover:text-white hover:underline">
        Terms
      </Link>
      <Link href="/privacy" className="underline-offset-2 hover:text-white hover:underline">
        Privacy
      </Link>
      <Link href="/sms-opt-in" className="underline-offset-2 hover:text-white hover:underline">
        Text Alerts
      </Link>
    </footer>
  );
}
