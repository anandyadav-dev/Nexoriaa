"use client";

import Link from "next/link";
import { RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="section-shell flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="eyebrow">Something went wrong</p>
      <h1 className="section-title mx-auto">We could not load this page properly.</h1>
      <p className="section-copy mx-auto">
        Please try refreshing the page. If the issue continues, head back home and start again.
      </p>
      {error.digest ? (
        <p className="mt-4 text-xs font-semibold text-slate-400">Error ID: {error.digest}</p>
      ) : null}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button type="button" onClick={reset} className="button-primary">
          <RefreshCw size={18} />
          Try Again
        </button>
        <Link href="/" className="button-secondary">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
