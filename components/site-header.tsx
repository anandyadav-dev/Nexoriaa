"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <nav className="section-shell flex h-20 items-center justify-between">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-11 w-11 place-items-center rounded-lg bg-gradient-to-br from-cyan to-aurora text-lg font-black text-white shadow-glow">
            N
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-black tracking-tight text-ink">NEXORIAA</span>
            <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Technologies
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-bold transition hover:text-cyan ${
                  active ? "text-cyan" : "text-slate-700"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link href="/contact#quote" className="button-primary">
            Get a Quote
          </Link>
        </div>

        <button
          aria-label="Toggle navigation"
          className="grid h-11 w-11 place-items-center rounded-lg border border-slate-200 bg-white text-ink lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="section-shell grid gap-2 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50 hover:text-cyan"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact#quote" onClick={() => setOpen(false)} className="button-primary mt-2">
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
