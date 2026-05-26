import Link from "next/link";
import { ArrowRight } from "lucide-react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  copy: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function PageHero({ eyebrow, title, copy, ctaLabel, ctaHref }: PageHeroProps) {
  return (
    <section className="mesh-bg border-b border-slate-200/80">
      <div className="section-shell py-20 sm:py-24">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-ink sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="section-copy">{copy}</p>
        {ctaLabel && ctaHref ? (
          <Link href={ctaHref} className="button-primary mt-8">
            {ctaLabel}
            <ArrowRight size={18} />
          </Link>
        ) : null}
      </div>
    </section>
  );
}
