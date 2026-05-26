import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  CreditCard,
  Globe2,
  Layers3,
  MapPin,
  MessageSquareQuote,
  Search,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
} from "lucide-react";

const serviceHighlights = [
  {
    icon: Code2,
    title: "Custom Websites",
    copy: "High-converting business websites, portals, and web apps built for performance.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    copy: "React Native, Android, and iOS products with smooth customer journeys.",
  },
  {
    icon: Search,
    title: "Digital Growth",
    copy: "SEO, campaigns, social media, and landing pages that turn attention into leads.",
  },
  {
    icon: Server,
    title: "Cloud & Hosting",
    copy: "Domains, hosting, business email, server setup, and reliable launch support.",
  },
];

const techStack = [
  "ASP.NET C#",
  "Laravel",
  "Python",
  "Django",
  "FastAPI",
  "React.js",
  "Next.js",
  "WordPress",
  "WooCommerce",
  "React Native",
  "Android",
  "iOS",
  "AI/ML",
  "Generative AI",
  "API Automation",
  "Cloud Integrations",
];

const reasons = [
  "Local Lucknow presence with responsive support",
  "Full-stack delivery from UI to deployment",
  "CMS, commerce, software, and mobile expertise",
  "Clean handover, training, and growth support",
];

const process = [
  { step: "01", title: "Plan", copy: "We map the business goal, core users, and launch priorities." },
  { step: "02", title: "Design", copy: "We shape a clean interface and practical user flow before development." },
  { step: "03", title: "Build", copy: "We develop with scalable frameworks, tested integrations, and responsive UI." },
  { step: "04", title: "Launch", copy: "We deploy, optimize, and support the product after go-live." },
];

const projects = [
  { title: "Service booking platform", type: "Web App" },
  { title: "WooCommerce retail store", type: "E-commerce" },
  { title: "Business CRM dashboard", type: "Software" },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,182,212,.06)_1px,transparent_1px),linear-gradient(rgba(15,23,42,.05)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="section-shell relative grid min-h-[calc(100vh-5rem)] items-center gap-14 py-16 lg:grid-cols-[1.04fr_0.96fr] lg:py-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm">
              <MapPin size={16} className="text-cyan" />
              Indira Nagar, Lucknow
            </div>
            <h1 className="mt-7 max-w-4xl text-4xl font-black tracking-tight text-ink sm:text-5xl lg:text-7xl">
              Premium IT solutions for websites, apps, software, and digital growth.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              NEXORIAA Technologies helps businesses launch modern websites, mobile apps,
              custom software, hosting infrastructure, and growth systems with reliable execution.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact#quote" className="button-primary">
                Get a Quote
                <ArrowRight size={18} />
              </Link>
              <Link href="/services" className="button-secondary">
                Explore Services
              </Link>
            </div>
            <div className="mt-10 grid max-w-2xl gap-4 border-y border-slate-200 py-6 sm:grid-cols-3">
              {[
                ["360 deg", "IT delivery"],
                ["Local", "Lucknow team"],
                ["Modern", "Tech stack"],
              ].map(([value, label]) => (
                <div key={label}>
                  <p className="text-2xl font-black text-ink">{value}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="home-visual" aria-label="Modern technology product visual">
            <div className="home-visual-shell">
              <div className="home-visual-topbar">
                <span />
                <span />
                <span />
              </div>
              <div className="home-visual-main">
                <div className="home-visual-mark">
                  <Layers3 size={34} />
                </div>
                <p className="text-xs font-black uppercase tracking-[0.26em] text-cyan">
                  NEXORIAA Delivery System
                </p>
                <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                  Strategy, design, development, launch.
                </h2>
                <div className="mt-8 grid gap-3">
                  {["Custom software", "Web & mobile apps", "SEO-ready launch"].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.06] p-3 text-sm font-bold text-slate-100">
                      <CheckCircle2 size={18} className="text-cyan" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="home-visual-orbit orbit-a" />
              <div className="home-visual-orbit orbit-b" />
              <div className="home-visual-chip chip-a">Next.js</div>
              <div className="home-visual-chip chip-b">.NET</div>
              <div className="home-visual-chip chip-c">React Native</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="section-shell py-16">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Core Services</p>
              <h2 className="section-title">Everything your digital business needs, under one roof.</h2>
            </div>
            <Link href="/services" className="button-secondary md:mb-1">
              View All Services
              <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {serviceHighlights.map(({ icon: Icon, title, copy }) => (
              <article key={title} className="tech-card min-h-64">
                <Icon className="text-cyan" size={30} />
                <h3 className="mt-6 text-xl font-black text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell grid gap-12 py-20 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow">Why NEXORIAA</p>
          <h2 className="section-title">A technology partner that thinks beyond just building pages.</h2>
          <p className="section-copy">
            We connect design, development, hosting, integrations, and marketing so your product
            is ready for real business use from day one.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {reasons.map((reason) => (
            <div key={reason} className="flex gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-card">
              <ShieldCheck className="mt-1 shrink-0 text-cyan" size={24} />
              <p className="font-bold leading-6 text-ink">{reason}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink py-20 text-white">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="eyebrow">Technology Stack</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Enterprise frameworks and agile platforms for practical delivery.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <span key={tech} className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-bold text-slate-100">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-20">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Our Process</p>
            <h2 className="section-title">A clean path from idea to launch.</h2>
            <p className="section-copy">
              No confusing handoffs. One team guides the project from planning to deployment.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {process.map((item) => (
              <div key={item.step} className="rounded-lg border border-slate-200 bg-white p-6 shadow-card">
                <p className="text-sm font-black text-cyan">{item.step}</p>
                <h3 className="mt-5 text-xl font-black text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-shell">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Recent Work</p>
              <h2 className="section-title">Project directions built for measurable outcomes.</h2>
            </div>
            <Link href="/contact" className="button-secondary md:mb-1">
              Discuss Your Project
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {projects.map((project, index) => (
              <article key={project.title} className="group rounded-lg border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-card">
                <p className="text-sm font-black text-cyan">0{index + 1}</p>
                <h3 className="mt-16 text-2xl font-black tracking-tight text-ink">{project.title}</h3>
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.18em] text-slate-500">{project.type}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-20">
        <div className="grid gap-8 rounded-lg border border-slate-200 bg-white p-6 shadow-card md:grid-cols-[0.8fr_1.2fr] md:p-8">
          <div>
            <MessageSquareQuote className="text-cyan" size={36} />
            <div className="mt-6 flex gap-1 text-cyan">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={18} fill="currentColor" />
              ))}
            </div>
          </div>
          <div>
            <p className="text-2xl font-black leading-9 tracking-tight text-ink">
              "NEXORIAA brings clear thinking, fast execution, and dependable technical guidance
              from planning to launch."
            </p>
            <p className="mt-5 text-sm font-bold text-slate-500">Client testimonial placeholder</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact#quote" className="button-primary">
                Start a Project
                <ArrowRight size={18} />
              </Link>
              <a href="tel:+917786021786" className="button-secondary">
                Call +91 7786021786
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
