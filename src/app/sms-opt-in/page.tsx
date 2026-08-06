import Link from "next/link";
import { submitSmsOptIn } from "./actions";
import { SMS_CONSENT_TEXT } from "@/lib/smsConsent";

export default async function SmsOptInPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; message?: string }>;
}) {
  const { error, message } = await searchParams;

  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center gap-6 px-4 py-12">
      <div className="paper-panel flex flex-col gap-5 px-6 py-8">
        <div>
          <span className="stamp px-2 py-0.5 text-xs">Text Alerts</span>
          <h1 className="font-display mt-3 text-3xl text-ink">
            Get Texted When a New Briefing Drops
          </h1>
        </div>

        <p className="font-body text-sm text-ink/80">
          Sign up to be first in line once text alerts go live. We&apos;re not sending
          messages yet — this just reserves your spot and records your consent for
          when we turn it on.
        </p>

        {message && (
          <p className="border border-olive bg-paper-dark px-3 py-2 text-sm text-ink">
            {message}
          </p>
        )}
        {error && (
          <p className="border border-rust bg-paper-dark px-3 py-2 text-sm text-rust">
            {error}
          </p>
        )}

        <form action={submitSmsOptIn} className="flex flex-col gap-4">
          <label className="font-stamp text-xs uppercase text-ink/70">
            Mobile phone number
            <input
              name="phone"
              type="tel"
              required
              placeholder="+1 555 123 4567"
              className="mt-1 w-full border-2 border-ink bg-paper px-3 py-2 font-body text-ink"
            />
          </label>

          <label className="flex items-start gap-2 font-body text-xs leading-relaxed text-ink/80">
            <input
              type="checkbox"
              name="consent"
              required
              className="mt-1 h-4 w-4 shrink-0 border-2 border-ink"
            />
            <span>{SMS_CONSENT_TEXT}</span>
          </label>

          <button
            type="submit"
            className="border-2 border-ink bg-olive px-4 py-2 text-sm font-semibold text-paper"
          >
            Sign up for text alerts
          </button>
        </form>

        <p className="font-body text-xs text-ink/50">
          Read our{" "}
          <Link href="/privacy" className="underline">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/terms" className="underline">
            Terms of Service
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
