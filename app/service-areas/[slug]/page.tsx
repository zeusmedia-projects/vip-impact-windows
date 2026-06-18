import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { LOCATIONS } from "@/app/lib/siteData";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import FAQAccordion from "@/app/components/FAQAccordion";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return LOCATIONS.map((loc) => ({ slug: loc.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const loc = LOCATIONS.find((l) => l.slug === slug);
  if (!loc) return {};
  return {
    title: loc.metaTitle,
    description: loc.metaDescription,
    openGraph: {
      title: loc.metaTitle,
      description: loc.metaDescription,
      url: `https://www.myvipwindows.com/service-areas/${loc.slug}`,
    },
    alternates: {
      canonical: `https://www.myvipwindows.com/service-areas/${loc.slug}`,
    },
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const loc = LOCATIONS.find((l) => l.slug === slug);
  if (!loc) notFound();

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Impact Windows and Doors in ${loc.city}, FL`,
    provider: {
      "@type": "LocalBusiness",
      name: "VIP Impact Windows & Doors LLC",
      telephone: "+18337425847",
      email: "info@myvipwindows.com",
      url: "https://www.myvipwindows.com",
    },
    areaServed: {
      "@type": "City",
      name: loc.city,
      addressRegion: "FL",
    },
    description: loc.metaDescription,
    url: `https://www.myvipwindows.com/service-areas/${loc.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Hero */}
      <section
        className="py-16"
        style={{ backgroundColor: "var(--navy)" }}
        aria-labelledby="location-heading"
      >
        <div className="container-wide">
          <Breadcrumbs
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Service Areas", href: "/service-areas" },
              { label: `${loc.city}, FL` },
            ]}
          />
          <p className="eyebrow mt-4 mb-4">Serving {loc.county} County, FL</p>
          <h1
            id="location-heading"
            className="text-display-lg text-white mb-5 max-w-2xl"
          >
            {loc.h1}
          </h1>
          <p className="text-lg text-white/70 max-w-xl leading-relaxed mb-8">
            {loc.intro}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">
              Get My VIP Estimate
            </Link>
            <a href="tel:+18337425847" className="btn-outline">
              Call (833) PICK-VIP
            </a>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="section-pad">
        <div className="container-wide grid lg:grid-cols-3 gap-12">
          {/* Main column */}
          <div className="lg:col-span-2 space-y-10">
            {/* Property types */}
            <div>
              <h2 className="text-display-sm mb-4" style={{ color: "var(--navy)" }}>
                Common {loc.city} Property Types
              </h2>
              <p className="leading-relaxed mb-5" style={{ color: "var(--text-mid)" }}>
                {loc.localConsiderations}
              </p>
              <ul className="grid sm:grid-cols-2 gap-3">
                {loc.propertyFocus.map((prop) => (
                  <li key={prop} className="flex items-center gap-3 text-sm" style={{ color: "var(--text-mid)" }}>
                    <svg className="w-4 h-4 flex-shrink-0" style={{ color: "var(--aqua)" }} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                    {prop}
                  </li>
                ))}
              </ul>
            </div>

            {/* Residential services */}
            <div>
              <h2 className="text-display-sm mb-4" style={{ color: "var(--navy)" }}>
                Residential Services in {loc.city}
              </h2>
              <p className="leading-relaxed mb-5" style={{ color: "var(--text-mid)" }}>
                We serve {loc.city} homeowners with the full range of impact window and door products, including:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { label: "Impact Windows", href: "/impact-windows-doors#windows" },
                  { label: "Impact Entry Doors", href: "/impact-windows-doors#doors" },
                  { label: "French Doors", href: "/impact-windows-doors#doors" },
                  { label: "Sliding Glass Doors", href: "/impact-windows-doors#sliding" },
                ].map((svc) => (
                  <Link
                    key={svc.label}
                    href={svc.href}
                    className="flex items-center gap-2 text-sm font-medium rounded-lg p-4 border border-black/8 hover:border-[var(--aqua)] transition-colors"
                    style={{ color: "var(--navy)" }}
                  >
                    <svg className="w-4 h-4" style={{ color: "var(--aqua)" }} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    {svc.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Why impact windows */}
            <div>
              <h2 className="text-display-sm mb-4" style={{ color: "var(--navy)" }}>
                Why Impact Windows Matter in {loc.city}
              </h2>
              <div className="prose-vip">
                <p>
                  South Florida's storm exposure is well-documented, and {loc.city} properties sit squarely in the region where quality impact protection makes a real difference. Beyond storm season, impact glass can help reduce street noise, limit UV exposure, and provide an added layer of security for your home or business every day of the year.
                </p>
                <p>
                  Unlike hurricane shutters, impact windows and doors don't require deployment before a storm and don't need to be stored between seasons. They provide continuous protection while maintaining the appearance and functionality of standard windows.
                </p>
              </div>
            </div>

            {/* Process */}
            <div>
              <h2 className="text-display-sm mb-5" style={{ color: "var(--navy)" }}>
                The VIP Process for {loc.city} Projects
              </h2>
              <div className="flex flex-col gap-5">
                {[
                  "Submit a short estimate request or call us directly.",
                  "We review your project and provide honest, personalized recommendations.",
                  "You receive a clear, itemized estimate at no obligation.",
                  "We coordinate everything needed to prepare for your installation.",
                  "After installation, we complete a final walkthrough to confirm everything meets your expectations.",
                ].map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="step-number flex-shrink-0" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <p className="text-sm leading-relaxed pt-2" style={{ color: "var(--text-mid)" }}>
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery placeholder */}
            <div>
              <h2 className="text-display-sm mb-4" style={{ color: "var(--navy)" }}>
                {loc.city} Projects
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2].map((i) => (
                  <div
                    key={i}
                    className="rounded-lg aspect-[4/3] flex items-center justify-center"
                    style={{ backgroundColor: "var(--sand)" }}
                    aria-label={`${loc.city} impact window project photo placeholder — to be replaced with actual project photography`}
                  >
                    <div className="text-center">
                      <svg className="w-7 h-7 mx-auto mb-1.5" style={{ color: "var(--champagne)" }} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                      </svg>
                      <p className="text-xs" style={{ color: "var(--text-light)" }}>
                        {loc.city} Project
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs mt-2" style={{ color: "var(--text-light)" }}>
                {/* TODO: Replace with actual project photos from {loc.city} installations */}
                Project photos to be provided by client.
              </p>
            </div>

            {/* Customer review placeholder */}
            <div
              className="rounded-xl p-7 border border-black/8"
              aria-label="Customer review placeholder"
            >
              <div className="flex gap-1 mb-4" aria-label="Five stars" role="img">
                {Array.from({ length: 5 }).map((_, j) => (
                  <svg key={j} className="w-4 h-4" style={{ color: "var(--yellow)" }} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm italic leading-relaxed mb-4" style={{ color: "var(--text-mid)" }}>
                "Verified customer review from a {loc.city} homeowner to be added."
              </p>
              <p className="text-xs" style={{ color: "var(--text-light)" }}>
                {/* TODO: Replace with actual verified review from {loc.city} or nearby customer */}
                Verified review — pending client verification.
              </p>
            </div>

            {/* FAQs */}
            <div>
              <h2 className="text-display-sm mb-6" style={{ color: "var(--navy)" }}>
                Frequently Asked Questions
              </h2>
              <FAQAccordion faqs={loc.faqs} />
            </div>

            {/* Nearby locations */}
            <div>
              <h2 className="text-lg font-semibold mb-4" style={{ color: "var(--navy)" }}>
                Nearby Service Areas
              </h2>
              <div className="flex flex-wrap gap-3">
                {loc.nearby.map((n) => (
                  <Link
                    key={n.slug}
                    href={`/service-areas/${n.slug}`}
                    className="text-sm font-medium px-4 py-2 rounded-lg border border-black/10 hover:border-[var(--aqua)] hover:text-[var(--aqua)] transition-colors"
                    style={{ color: "var(--navy)" }}
                  >
                    Impact Windows in {n.city} →
                  </Link>
                ))}
                <Link
                  href="/service-areas"
                  className="text-sm font-medium px-4 py-2 rounded-lg border border-black/10 hover:border-[var(--aqua)] hover:text-[var(--aqua)] transition-colors"
                  style={{ color: "var(--navy)" }}
                >
                  View All Areas →
                </Link>
              </div>
            </div>
          </div>

          {/* Sticky sidebar */}
          <aside aria-label="Estimate sidebar">
            <div className="sticky top-24 space-y-5">
              <div
                className="rounded-xl p-7"
                style={{ backgroundColor: "var(--navy)" }}
              >
                <h3 className="font-semibold text-white mb-3">
                  Serving {loc.city}, FL
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  Get a free, no-pressure estimate for your {loc.city} impact window or door project.
                </p>
                <Link href="/contact" className="btn-primary w-full justify-center">
                  Get My VIP Estimate
                </Link>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <a
                    href="tel:+18337425847"
                    className="flex items-center gap-2 text-white text-sm hover:text-[var(--aqua)] transition-colors"
                  >
                    <svg className="w-4 h-4 text-[var(--aqua)]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                    (833) PICK-VIP
                  </a>
                </div>
              </div>

              <div
                className="rounded-xl p-6 text-sm"
                style={{ backgroundColor: "var(--ivory)" }}
              >
                <p className="font-semibold mb-2" style={{ color: "var(--navy)" }}>
                  Our Services
                </p>
                <ul className="flex flex-col gap-2">
                  {[
                    { label: "Impact Windows", href: "/impact-windows-doors#windows" },
                    { label: "Impact Doors", href: "/impact-windows-doors#doors" },
                    { label: "Sliding Glass Doors", href: "/impact-windows-doors#sliding" },
                    { label: "Commercial Storefront", href: "/commercial" },
                    { label: "Residential", href: "/residential" },
                  ].map((svc) => (
                    <li key={svc.label}>
                      <Link
                        href={svc.href}
                        className="hover:text-[var(--aqua)] transition-colors"
                        style={{ color: "var(--text-mid)" }}
                      >
                        → {svc.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* CTA */}
      <section
        className="section-pad text-center"
        style={{ backgroundColor: "var(--navy)" }}
      >
        <div className="container-wide max-w-2xl mx-auto">
          <h2 className="text-display-md text-white mb-4">
            Ready to Protect Your {loc.city} Property?
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-8">
            Contact us for a free, no-obligation estimate on impact windows and doors for your {loc.city} home or business.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Get My VIP Estimate
            </Link>
            <a href="tel:+18337425847" className="btn-outline">
              Call (833) PICK-VIP
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
