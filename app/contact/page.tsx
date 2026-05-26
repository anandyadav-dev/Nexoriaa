import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { MapPin, Phone } from "lucide-react";

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
            <Phone className="text-cyan" size={30} />
            <h2 className="mt-5 text-xl font-black text-ink">Phone</h2>
            <a href="tel:+917786021786" className="mt-2 block text-lg font-bold text-slate-700 transition hover:text-cyan">
              +91 7786021786
            </a>
          </div>
          <div className="tech-card">
            <MapPin className="text-cyan" size={30} />
            <h2 className="mt-5 text-xl font-black text-ink">Location</h2>
            <p className="mt-2 text-lg font-bold text-slate-700">Indira Nagar, Lucknow</p>
          </div>
          <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-card">
            <iframe
              title="Indira Nagar Lucknow map"
              src="https://www.google.com/maps?q=Indira%20Nagar%2C%20Lucknow&output=embed"
              className="h-80 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </aside>
      </section>
    </>
  );
}
