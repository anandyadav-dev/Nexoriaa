import { PageHero } from "@/components/page-hero";
import { Cloud, Code2, Mail, Megaphone, Search, Server, ShoppingCart, Smartphone, WalletCards } from "lucide-react";

const serviceGroups = [
  {
    title: "Core Development",
    copy: "Custom digital products built around your workflow, users, and business model.",
    items: [
      { icon: Code2, title: "Custom Website Development", copy: "Fast, conversion-focused websites with responsive UI and clean code." },
      { icon: Server, title: "Software Development", copy: "Business portals, internal systems, dashboards, and scalable web apps." },
      { icon: Cloud, title: "Desktop Applications", copy: "Reliable tools for operations, reporting, and offline-first business needs." },
      { icon: Smartphone, title: "Mobile App Development", copy: "iOS, Android, native, and React Native app experiences." },
    ],
  },
  {
    title: "Marketing & Growth",
    copy: "Digital visibility services designed to turn your website into a growth channel.",
    items: [
      { icon: Search, title: "SEO", copy: "Search optimization for technical health, local ranking, and content visibility." },
      { icon: Megaphone, title: "Digital Marketing", copy: "Campaign setup, landing pages, analytics, and growth strategy." },
      { icon: ShoppingCart, title: "Social Media Management", copy: "Consistent brand presence, content planning, and audience engagement." },
    ],
  },
  {
    title: "Infrastructure & Cloud Services",
    copy: "The essential foundations needed to keep your digital presence stable and professional.",
    items: [
      { icon: Cloud, title: "Domain Registration", copy: "Domain discovery, registration, DNS setup, and launch configuration." },
      { icon: Server, title: "Web Hosting", copy: "Secure hosting setup for websites, apps, CMS platforms, and stores." },
      { icon: Server, title: "Shared Server Hosting", copy: "Cost-effective hosting plans for growing businesses and early-stage launches." },
      { icon: Mail, title: "Professional Business Emails", copy: "Branded email setup for credible communication and team workflows." },
    ],
  },
  {
    title: "Integration Services",
    copy: "Seamless API and payment connections for smoother customer journeys.",
    items: [
      { icon: WalletCards, title: "Payment Gateway Integration", copy: "Razorpay, Stripe, PayU, and other gateway integrations with clean checkout flows." },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="One IT partner for development, cloud, marketing, and integrations."
        copy="NEXORIAA Technologies covers the full delivery cycle: strategy, design, development, hosting, payments, SEO, and ongoing digital support."
        ctaLabel="Start a Project"
        ctaHref="/contact#quote"
      />
      <section className="section-shell py-20">
        <div className="grid gap-12">
          {serviceGroups.map((group) => (
            <div key={group.title} className="grid gap-6 lg:grid-cols-[0.42fr_1fr]">
              <div>
                <p className="eyebrow">{group.title}</p>
                <p className="mt-4 text-base leading-7 text-slate-600">{group.copy}</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {group.items.map(({ icon: Icon, title, copy }) => (
                  <article key={title} className="tech-card">
                    <Icon className="text-cyan" size={28} />
                    <h2 className="mt-5 text-xl font-black text-ink">{title}</h2>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{copy}</p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
