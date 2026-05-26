"use client";

import "./globals.css";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <section className="section-shell flex min-h-screen flex-col items-center justify-center text-center">
          <p className="eyebrow">Application Error</p>
          <h1 className="section-title mx-auto">NEXORIAA Technologies could not load.</h1>
          <p className="section-copy mx-auto">
            The app hit a temporary issue. Please retry once after clearing the local Next.js cache.
          </p>
          <button type="button" onClick={reset} className="button-primary mt-8">
            Try Again
          </button>
        </section>
      </body>
    </html>
  );
}
