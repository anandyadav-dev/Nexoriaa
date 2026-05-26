import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-shell flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="eyebrow">404</p>
      <h1 className="section-title mx-auto">This page is still being deployed.</h1>
      <p className="section-copy mx-auto">
        Head back to the main site to explore NEXORIAA Technologies.
      </p>
      <Link href="/" className="button-primary mt-8">
        Back to Home
      </Link>
    </section>
  );
}
