import type { ReactNode } from "react";

export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <div className="paper-panel flex flex-col gap-6 px-6 py-8 sm:px-10 sm:py-12">
        <div>
          <span className="stamp px-2 py-0.5 text-xs">Dossier</span>
          <h1 className="font-display mt-3 text-4xl text-ink">{title}</h1>
          <p className="mt-1 font-stamp text-xs uppercase tracking-wide text-ink/50">
            Last updated {updated}
          </p>
        </div>
        <div className="legal-copy flex flex-col gap-4 font-body text-ink/90">{children}</div>
      </div>
    </main>
  );
}
