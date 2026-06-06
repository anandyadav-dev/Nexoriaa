import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { Globe2, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Tell us what you want to build. We will help shape the next step."
        copy="Reach NEXORIAA Technologies for websites, apps, software, hosting, SEO, payment integrations, and complete IT solution delivery."
      />
      <section className="section-shell grid gap-10 py-20 lg:grid-cols-[1fr_0.8fr]">
        <ContactForm />
        <aside className="grid gap-5">
          <div className="tech-card">
            <Mail className="text-cyan" size={30} />
            <h2 className="mt-5 text-xl font-black text-ink">Email</h2>
            <a href="mailto:info@nexoriaa.co.in" className="mt-2 block text-lg font-bold text-slate-700 transition hover:text-cyan">
              info@nexoriaa.co.in
            </a>
          </div>
          <div className="tech-card">
            <Globe2 className="text-cyan" size={30} />
            <h2 className="mt-5 text-xl font-black text-ink">Service Area</h2>
            <p className="mt-2 text-lg font-bold text-slate-700">India</p>
          </div>
        </aside>
      </section>
    </>
  );
}
