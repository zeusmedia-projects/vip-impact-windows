import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG, SERVICES, PROCESS_STEPS, BENEFITS, LOCATIONS, OWNER_INFO, REVIEWS } from "./lib/siteData";
import ScrollReveal from "./components/ScrollReveal";

export const metadata: Metadata = {
  title: "VIP Impact Windows & Doors | South Florida Impact Windows & Doors",
  description:
    "Upgrade your South Florida home or business with quality impact windows and doors. Personal guidance, competitive pricing, and VIP-level service from Miami-Dade to Broward.",
  openGraph: {
    title: "VIP Impact Windows & Doors | South Florida Impact Windows & Doors",
    description: "Quality impact windows and doors with personal guidance and competitive pricing for South Florida.",
    url: "https://www.myvipwindows.com",
  },
};

const BENEFIT_ICONS: Record<string, string> = {
  storm: "M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.58 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z",
  security: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z",
  noise: "M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z",
  comfort: "M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm0-11.5c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 5.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z",
  uv: "M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12s-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6z",
  energy: "M7 2v11h3v9l7-12h-4l4-8z",
  appearance: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z",
  peace: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
};

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative min-h-[92vh] flex items-center overflow-hidden"
        style={{ backgroundColor: "var(--navy)" }}
        aria-label="Hero section"
      >
        {/* Background image */}
        <Image src="/images/hero.jpg" alt="South Florida Impact Windows" fill priority className="object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#102634] to-transparent opacity-80" aria-hidden="true" />

        <div className="container-wide relative z-10 py-20 grid lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div>
            <p className="eyebrow mb-5">South Florida Impact Windows & Doors</p>
            <h1 className="text-display-xl text-white mb-6 leading-tight">
              Impact Protection<br />
              <span style={{ color: "var(--aqua)" }}>With the VIP Treatment.</span>
            </h1>
            <p className="text-lg text-white/75 leading-relaxed mb-8 max-w-lg">
              Upgrade your home or business with quality impact windows and doors, personal guidance, and competitive wholesale pricing—without the contractor runaround.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                href="/contact"
                className="btn-primary !bg-[var(--aqua)] !border-[var(--aqua)] !text-white"
              >
                Get My VIP Estimate
              </Link>
              <a href="tel:+18337425847" className="btn-outline">
                Call (833) PICK-VIP
              </a>
            </div>
            <p className="text-sm text-white/50">
              Personal service from consultation through completion.
            </p>
          </div>

          {/* Quick Estimate Form */}
          <div
            className="bg-white rounded-xl p-7 shadow-2xl"
            aria-label="Quick estimate form"
          >
            <div className="flex items-center gap-2 mb-5">
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: "var(--aqua)" }}
                aria-hidden="true"
              />
              <h2 className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--text-mid)" }}>
                Start Your Free Estimate
              </h2>
            </div>
            <QuickEstimateForm />
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section
        style={{ backgroundColor: "var(--ivory)" }}
        className="py-5 border-b border-black/6"
        aria-label="Trust indicators"
      >
        <div className="container-wide">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-x-8 gap-y-3">
            {[
              "Licensed Florida Contractor",
              "Residential & Commercial",
              "Miami-Dade & Broward Service",
              "Free Project Estimates",
              "Personal Guidance Included",
            ].map((item, i) => (
              <div key={i} className="trust-item">
                <svg className="w-4 h-4 flex-shrink-0" style={{ color: "var(--aqua)" }} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIP DIFFERENCE ── */}
      <section className="section-pad-lg" aria-labelledby="vip-diff-heading">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="accent-line mx-auto" aria-hidden="true" />
            <h2 id="vip-diff-heading" className="text-display-lg" style={{ color: "var(--navy)" }}>
              Your Property Should Never Feel Like Just Another Job.
            </h2>
            <p className="text-lg mt-4 leading-relaxed" style={{ color: "var(--text-mid)" }}>
              We built VIP Impact Windows & Doors around the belief that a major home improvement should feel personal—with clear communication, honest guidance, and someone who stays involved from first conversation to final walkthrough.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Personal Attention",
                body: "You receive direct, responsive guidance instead of being passed between departments or waiting for a callback that never comes.",
              },
              {
                title: "Clear Recommendations",
                body: "We help you understand your options without drowning you in technical jargon—so you can make a confident decision at your own pace.",
              },
              {
                title: "Quality Without the Markup",
                body: "Access quality window and door solutions with competitive wholesale-style pricing. You shouldn't have to overpay to get a professional result.",
              },
              {
                title: "Care From Start to Finish",
                body: "Your project receives real attention from the first conversation through the final walkthrough. We're not done until everything is right.",
              },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                  style={{ backgroundColor: "rgba(72,183,199,0.1)" }}
                  aria-hidden="true"
                >
                  <span style={{ color: "var(--aqua)" }} className="font-display text-lg">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--navy)" }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-mid)" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section
        className="section-pad"
        style={{ backgroundColor: "var(--ivory)" }}
        aria-labelledby="services-heading"
      >
        <div className="container-wide">
          <div className="mb-12">
            <p className="eyebrow mb-3">What We Install</p>
            <h2 id="services-heading" className="text-display-md" style={{ color: "var(--navy)" }}>
              Quality Impact Products<br />for Every Opening
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((svc) => (
              <Link
                key={svc.id}
                href={`/impact-windows-doors#${svc.id}`}
                className="card-editorial group bg-white block"
                aria-label={`Learn more about ${svc.title}`}
              >
                <div
                  className="h-44 flex items-end relative overflow-hidden"
                  style={{ backgroundColor: "var(--navy)" }}
                >
                  <Image src={svc.image} alt={svc.imageAlt} fill className="object-cover img-mask group-hover:scale-105 transition-transform duration-500" />
                  <div
                    className="absolute inset-0 opacity-60 group-hover:opacity-40 transition-opacity duration-300 bg-navy"
                    aria-hidden="true"
                  />
                  <div className="relative p-5 z-10">
                    <span className="badge-aqua shadow-sm">{svc.title}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-base mb-2" style={{ color: "var(--navy)" }}>
                    {svc.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-mid)" }}>
                    {svc.description}
                  </p>
                  <span
                    className="inline-flex items-center gap-1 text-sm font-semibold mt-4"
                    style={{ color: "var(--aqua)" }}
                  >
                    Explore →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="section-pad-lg" aria-labelledby="process-heading">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="eyebrow mb-3">How It Works</p>
              <h2 id="process-heading" className="text-display-md mb-5" style={{ color: "var(--navy)" }}>
                A Smoother Way to Upgrade Your Property.
              </h2>
              <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--text-mid)" }}>
                From the first conversation to the final walkthrough, we keep you informed and involved at every step—with no surprises and no pressure.
              </p>
              <Link href="/our-process" className="btn-navy">
                See Our Full Process
              </Link>
            </div>
            <div className="flex flex-col gap-8">
              {PROCESS_STEPS.map((step) => (
                <div key={step.number} className="flex gap-5">
                  <div className="step-number flex-shrink-0" aria-hidden="true">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-1.5" style={{ color: "var(--navy)" }}>
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-mid)" }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OWNER STORY ── */}
      <section
        className="section-pad"
        style={{ backgroundColor: "var(--navy)" }}
        aria-labelledby="owner-heading"
      >
        <div className="container-wide grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal delay="delay-100" className="rounded-xl aspect-square md:aspect-[4/5] relative overflow-hidden shadow-2xl">
            <Image src={OWNER_INFO.image} alt={OWNER_INFO.name} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#102634] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white font-display text-2xl">{OWNER_INFO.name}</p>
              <p className="text-aqua text-sm font-semibold tracking-wider uppercase">{OWNER_INFO.title}</p>
            </div>
          </ScrollReveal>

          {/* Copy */}
          <ScrollReveal delay="delay-200">
            <p className="eyebrow mb-4">About VIP</p>
            <h2 id="owner-heading" className="text-display-md text-white mb-6">
              Built Around Care, Not Volume.
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>{OWNER_INFO.bio}</p>
            </div>
            <Link href="/about" className="btn-outline mt-8 inline-flex">
              Learn More About VIP →
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section
        className="section-pad"
        style={{ backgroundColor: "var(--ivory)" }}
        aria-labelledby="benefits-heading"
      >
        <div className="container-wide">
          <div className="max-w-xl mb-12">
            <p className="eyebrow mb-3">Why Impact Glass</p>
            <h2 id="benefits-heading" className="text-display-md" style={{ color: "var(--navy)" }}>
              Protection That Works Year-Round.
            </h2>
            <p className="text-lg mt-4 leading-relaxed" style={{ color: "var(--text-mid)" }}>
              Impact windows and doors are built for South Florida life—not just hurricane season. Here's what quality impact glass can do for your property every day.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map((b) => (
              <div
                key={b.title}
                className="bg-white rounded-lg p-6 shadow-sm border border-black/5"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: "rgba(72,183,199,0.08)" }}
                  aria-hidden="true"
                >
                  <svg className="w-5 h-5" style={{ color: "var(--aqua)" }} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={BENEFIT_ICONS[b.icon] || BENEFIT_ICONS.peace} />
                  </svg>
                </div>
                <h3 className="font-semibold text-sm mb-2" style={{ color: "var(--navy)" }}>
                  {b.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-mid)" }}>
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECT GALLERY (placeholder) ── */}
      <section className="section-pad" aria-labelledby="gallery-heading">
        <div className="container-wide">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <p className="eyebrow mb-2">Our Work</p>
              <h2 id="gallery-heading" className="text-display-md" style={{ color: "var(--navy)" }}>
                South Florida Projects
              </h2>
            </div>
            <Link href="/projects" className="text-sm font-semibold" style={{ color: "var(--aqua)" }}>
              View All Projects →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <ScrollReveal key={i} delay={`delay-${(i % 3) * 100 + 100}`} className="rounded-lg aspect-[4/3] relative overflow-hidden group hover-scale-img shadow-sm">
                <Image src={`/images/project-${i}.jpg`} alt={`VIP Impact Windows Project ${i}`} fill className="object-cover transition-transform duration-700" />
                <div className="absolute inset-0 bg-navy opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CUSTOMER STORIES ── */}
      <section
        className="section-pad"
        style={{ backgroundColor: "var(--ivory)" }}
        aria-labelledby="reviews-heading"
      >
        <div className="container-wide">
          <div className="text-center max-w-xl mx-auto mb-12">
            <p className="eyebrow mb-3">Customer Stories</p>
            <h2 id="reviews-heading" className="text-display-md" style={{ color: "var(--navy)" }}>
              What Our Clients Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((review, i) => (
              <ScrollReveal key={i} delay={`delay-${(i % 3) * 100 + 100}`} className="bg-white rounded-xl p-7 shadow-sm border border-black/5 hover-lift">
                <div className="flex gap-1 mb-4" aria-label="Five stars" role="img">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <svg key={j} className="w-4 h-4" style={{ color: "var(--yellow)" }} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm leading-relaxed italic mb-5" style={{ color: "var(--text-mid)" }}>
                  "{review.text}"
                </p>
                <div>
                  <p className="font-semibold text-sm" style={{ color: "var(--navy)" }}>
                    {review.name}
                  </p>
                  <p className="text-xs" style={{ color: "var(--text-light)" }}>
                    {review.location} · Verified Review
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS ── */}
      <section className="section-pad" aria-labelledby="areas-heading">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow mb-3">Where We Serve</p>
              <h2 id="areas-heading" className="text-display-md mb-5" style={{ color: "var(--navy)" }}>
                VIP Service Across South Florida.
              </h2>
              <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--text-mid)" }}>
                Our primary service territory covers Miami-Dade and Broward County communities, with select projects in Palm Beach County depending on scope.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {LOCATIONS.map((loc) => (
                  <Link
                    key={loc.slug}
                    href={`/service-areas/${loc.slug}`}
                    className="flex items-center gap-2 text-sm font-medium transition-colors"
                    style={{ color: "var(--navy)" }}
                  >
                    <svg className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "var(--aqua)" }} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    {loc.city}, FL
                  </Link>
                ))}
              </div>
              <Link href="/service-areas" className="btn-navy">
                View All Service Areas
              </Link>
            </div>
            {/* Service Area Map */}
            <div className="relative rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] aspect-square md:aspect-[4/3]">
              <Image 
                src="/images/service-map.png"
                alt="South Florida service area map — showing VIP Impact Windows locations in Miami-Dade, Broward, and Palm Beach County"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section
        className="section-pad-lg text-center"
        style={{ backgroundColor: "var(--navy)" }}
        aria-labelledby="final-cta-heading"
      >
        <div className="container-wide max-w-3xl mx-auto">
          <span className="accent-line mx-auto" aria-hidden="true" style={{ backgroundColor: "var(--champagne)" }} />
          <h2 id="final-cta-heading" className="text-display-lg text-white mb-5">
            Ready to Give Your Property the VIP Treatment?
          </h2>
          <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-xl mx-auto">
            Tell us about your project and receive personal guidance on the right impact window or door solution for your property.
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

// Quick hero form (not the full multi-step)
function QuickEstimateForm() {
  return (
    <form action="/contact" method="get" className="flex flex-col gap-4">
      <div>
        <label className="form-label" htmlFor="hero-name">Your Name</label>
        <input id="hero-name" name="name" type="text" className="form-input" placeholder="Jane Smith" autoComplete="name" />
      </div>
      <div>
        <label className="form-label" htmlFor="hero-phone">Phone</label>
        <input id="hero-phone" name="phone" type="tel" className="form-input" placeholder="(555) 000-0000" autoComplete="tel" />
      </div>
      <div>
        <label className="form-label" htmlFor="hero-zip">ZIP Code</label>
        <input id="hero-zip" name="zip" type="text" className="form-input" placeholder="33101" maxLength={10} />
      </div>
      <div>
        <label className="form-label" htmlFor="hero-project">Project Type</label>
        <select id="hero-project" name="project" className="form-input">
          <option value="">Select one…</option>
          <option value="impact-windows">Impact Windows</option>
          <option value="impact-doors">Impact Doors</option>
          <option value="sliding-glass">Sliding Glass Doors</option>
          <option value="commercial">Commercial / Storefront</option>
          <option value="not-sure">Not Sure Yet</option>
        </select>
      </div>
      <button type="submit" className="btn-primary w-full justify-center mt-1">
        Start My Estimate →
      </button>
      <p className="text-xs text-center" style={{ color: "var(--text-light)" }}>
        No commitment. We'll contact you to discuss your project.
      </p>
    </form>
  );
}
