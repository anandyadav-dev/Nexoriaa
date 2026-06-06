import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, Server, Smartphone, Sparkles } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const services = [
  "Custom Website Development",
  "Software Development",
  "Mobile Apps",
  "SEO & Digital Marketing",
  "Hosting & Emails",
  "Payment Integration",
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#07111f] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(6,182,212,.22),transparent_30%),radial-gradient(circle_at_88%_18%,rgba(124,58,237,.26),transparent_32%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/70 to-transparent" />

      <div className="section-shell relative py-12">
        <div className="grid gap-6 rounded-lg border border-white/10 bg-white/[0.06] p-6 shadow-[0_24px_90px_rgba(0,0,0,.22)] backdrop-blur-xl md:grid-cols-[1fr_auto] md:items-center lg:p-8">
          <div>
            <p className="eyebrow">Ready to build?</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight sm:text-4xl">
              Let NEXORIAA turn your next digital idea into a polished product.
            </h2>
          </div>
          <Link href="/contact#quote" className="button-primary">
            Get a Quote
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      <div className="section-shell relative grid gap-10 pb-12 md:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_1fr_1fr]">
        <div>
          <div className="inline-flex rounded-lg bg-white px-3 py-2 shadow-glow">
            <Image
              src="/nexoriaa-logo.jpeg"
              alt="NEXORIAA Technologies"
              width={250}
              height={64}
              className="h-14 w-auto object-contain"
            />
          </div>
          <p className="mt-4 text-sm font-semibold text-slate-300">Premium IT solutions partner</p>
          <p className="mt-5 max-w-md text-sm leading-6 text-slate-300">
            A one-stop IT company in India for custom software, websites, mobile apps, hosting,
            SEO, and digital growth.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              { icon: Sparkles, label: "Strategy" },
              { icon: Server, label: "Cloud" },
              { icon: Smartphone, label: "Apps" },
            ].map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-bold text-slate-200"
              >
                <Icon size={14} className="text-cyan" />
                {label}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="font-bold">Company</p>
          <div className="mt-4 grid gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-slate-300 transition hover:translate-x-1 hover:text-cyan"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="font-bold">Services</p>
          <div className="mt-4 grid gap-3">
            {services.map((service) => (
              <Link
                key={service}
                href="/services"
                className="text-sm text-slate-300 transition hover:translate-x-1 hover:text-cyan"
              >
                {service}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="font-bold">Contact</p>
          <div className="mt-4 grid gap-4 text-sm text-slate-300">
            <a href="mailto:info@nexoriaa.co.in" className="flex items-center gap-3 transition hover:text-cyan">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/[0.06] text-cyan">
                <Mail size={16} />
              </span>
              info@nexoriaa.co.in
            </a>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 py-5">
        <div className="section-shell flex flex-col gap-3 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} NEXORIAA Technologies. All rights reserved.</p>
          <p>Built for reliable digital growth.</p>
        </div>
      </div>
    </footer>
  );
}
