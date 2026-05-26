import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "NEXORIAA Technologies | IT Solutions in Lucknow",
  description:
    "NEXORIAA Technologies is a premium IT solutions provider in Indira Nagar, Lucknow, offering custom software, websites, mobile apps, SEO, hosting, and digital growth services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
