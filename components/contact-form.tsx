"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";

const services = [
  "Custom Website Development",
  "Software Development",
  "Mobile App Development",
  "SEO & Digital Marketing",
  "Hosting & Business Email",
  "Payment Gateway Integration",
];

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const service = String(form.get("service") || "");
    const message = String(form.get("message") || "");
    const subject = encodeURIComponent(`Project enquiry from ${name}`);
    const body = encodeURIComponent(
      `Hello NEXORIAA Technologies,\n\nI am ${name}.\nEmail: ${email}\nService needed: ${service}\n\nMessage:\n${message}`,
    );

    setSent(true);
    window.open(`mailto:info@nexoriaa.co.in?subject=${subject}&body=${body}`, "_blank", "noopener,noreferrer");
    event.currentTarget.reset();
  }

  return (
    <form id="quote" onSubmit={handleSubmit} className="rounded-lg border border-slate-200 bg-white p-5 shadow-card sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-slate-700">
          Name
          <input
            name="name"
            required
            placeholder="Your name"
            className="min-h-12 rounded-lg border border-slate-200 px-4 font-medium outline-none transition focus:border-cyan focus:ring-4 focus:ring-cyan/10"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-700">
          Email
          <input
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="min-h-12 rounded-lg border border-slate-200 px-4 font-medium outline-none transition focus:border-cyan focus:ring-4 focus:ring-cyan/10"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-700">
          Service Needed
          <select
            name="service"
            required
            className="min-h-12 rounded-lg border border-slate-200 bg-white px-4 font-medium outline-none transition focus:border-cyan focus:ring-4 focus:ring-cyan/10"
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="mt-5 grid gap-2 text-sm font-bold text-slate-700">
        Message
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project goals, timeline, and budget range."
          className="rounded-lg border border-slate-200 px-4 py-3 font-medium outline-none transition focus:border-cyan focus:ring-4 focus:ring-cyan/10"
        />
      </label>
      <button type="submit" className="button-primary mt-6 w-full sm:w-auto">
        <Send size={18} />
        Send Enquiry
      </button>
      {sent ? (
        <p className="mt-4 rounded-lg bg-cyan/10 px-4 py-3 text-sm font-semibold text-cyan">
          Your email enquiry is ready. Our team will respond shortly.
        </p>
      ) : null}
    </form>
  );
}
