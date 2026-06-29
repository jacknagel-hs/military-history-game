import { signIn, signUp } from "./actions";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; message?: string }>;
}) {
  const { error, message } = await searchParams;

  return (
    <main className="mx-auto flex min-h-screen max-w-sm flex-col justify-center gap-6 px-4 py-12">
      <div className="paper-panel flex flex-col gap-5 px-6 py-8">
        <div>
          <span className="stamp px-2 py-0.5 text-xs">Dossier Access</span>
          <h1 className="font-display mt-3 text-3xl text-ink">War &amp; Peace Daily</h1>
        </div>

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

        <form className="flex flex-col gap-3">
          <label className="font-stamp text-xs uppercase text-ink/70">
            Username (sign up only)
            <input
              name="username"
              className="mt-1 w-full border-2 border-ink bg-paper px-3 py-2 font-body text-ink"
              placeholder="historybuff42"
            />
          </label>
          <label className="font-stamp text-xs uppercase text-ink/70">
            Email
            <input
              name="email"
              type="email"
              required
              className="mt-1 w-full border-2 border-ink bg-paper px-3 py-2 font-body text-ink"
            />
          </label>
          <label className="font-stamp text-xs uppercase text-ink/70">
            Password
            <input
              name="password"
              type="password"
              required
              minLength={6}
              className="mt-1 w-full border-2 border-ink bg-paper px-3 py-2 font-body text-ink"
            />
          </label>

          <div className="mt-2 flex gap-3">
            <button
              formAction={signIn}
              className="flex-1 border-2 border-ink bg-olive px-3 py-2 text-sm font-semibold text-paper"
            >
              Sign in
            </button>
            <button
              formAction={signUp}
              className="flex-1 border-2 border-ink bg-paper px-3 py-2 text-sm font-semibold text-ink"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
