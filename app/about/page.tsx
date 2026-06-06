import { PageHero } from "@/components/page-hero";
import { BadgeCheck, Globe2, Goal, Lightbulb } from "lucide-react";

const values = [
  { icon: Lightbulb, title: "Vision", copy: "To make premium, future-ready technology accessible for businesses that want to move faster and serve customers better." },
  { icon: Goal, title: "Mission", copy: "To deliver reliable software, modern websites, mobile applications, and digital systems that create measurable business value." },
  { icon: BadgeCheck, title: "Commitment", copy: "To combine sharp UI/UX, scalable engineering, honest communication, and launch-focused execution." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About NEXORIAA"
        title="A trusted technology partner serving businesses across India."
        copy="NEXORIAA Technologies helps businesses turn ideas into dependable digital products through strong engineering, thoughtful design, and practical growth support."
        ctaLabel="Talk to Our Team"
        ctaHref="/contact"
      />
      <section className="section-shell grid gap-12 py-20 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow">Who We Are</p>
          <h2 className="section-title">Built for companies that need a complete technical team without complexity.</h2>
          <p className="section-copy">
            We work across enterprise-level frameworks like .NET and Next.js, agile CMS platforms
            like WordPress, Divi, Elementor, and WooCommerce, and mobile technologies including
            React Native, native Android, and iOS.
          </p>
          <p className="mt-5 text-base leading-7 text-slate-600">
            Our role is simple: understand your business, design the right digital system, build it
            cleanly, and support the growth channels that help it perform after launch.
          </p>
        </div>
        <div className="rounded-lg bg-ink p-6 text-white shadow-glow">
          <Globe2 className="text-cyan" size={34} />
          <h3 className="mt-8 text-3xl font-black">India presence. Global execution standards.</h3>
          <p className="mt-4 leading-7 text-slate-300">
            NEXORIAA supports businesses, startups, and service providers across India with
            digital products that feel polished, perform reliably, and scale with real operational
            needs.
          </p>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="section-shell">
          <p className="eyebrow">What Guides Us</p>
          <h2 className="section-title">Technology should feel clear, useful, and built around business outcomes.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {values.map(({ icon: Icon, title, copy }) => (
              <div key={title} className="tech-card">
                <Icon className="text-cyan" size={30} />
                <h3 className="mt-5 text-xl font-black text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
