import type { Metadata } from "next";
import MultiStepEstimateForm from "@/app/components/MultiStepEstimateForm";
import { SITE_CONFIG } from "@/app/lib/siteData";

export const metadata: Metadata = {
  title: "Request a Free Estimate",
  description:
    "Request a free impact window or door estimate from VIP Impact Windows & Doors. Serving Miami-Dade, Broward, and select Palm Beach County.",
  openGraph: {
    title: "Request a Free Estimate | VIP Impact Windows & Doors",
    description: "Get a free, no-pressure estimate for impact windows and doors in South Florida.",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section
        className="py-16"
        style={{ backgroundColor: "var(--navy)" }}
        aria-labelledby="contact-heading"
      >
        <div className="container-wide text-center">
          <p className="eyebrow mb-4">Free Estimate</p>
          <h1 id="contact-heading" className="text-display-lg text-white mb-4">
            Tell Us About Your Project.
          </h1>
          <p className="text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
            Fill out the short form below and a member of the VIP team will review your details and reach out to discuss the next step.
          </p>
        </div>
      </section>

      <section className="section-pad" aria-label="Estimate request form">
        <div className="container-wide grid lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-black/5 p-8">
              <h2 className="text-display-sm mb-6" style={{ color: "var(--navy)" }}>
                Your VIP Estimate Request
              </h2>
              <MultiStepEstimateForm />
            </div>
          </div>

          {/* Sidebar */}
          <aside aria-label="Contact information">
            <div className="sticky top-24 flex flex-col gap-6">
              {/* Contact card */}
              <div
                className="rounded-xl p-7"
                style={{ backgroundColor: "var(--navy)" }}
              >
                <h3 className="font-semibold text-white mb-5">Prefer to Call?</h3>
                <a
                  href={SITE_CONFIG.phoneTel}
                  className="flex items-center gap-3 text-white hover:text-[var(--aqua)] transition-colors mb-4"
                >
                  <svg className="w-5 h-5 text-[var(--aqua)]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  <span className="font-bold text-lg">{SITE_CONFIG.phone}</span>
                </a>
                <a
                  href={SITE_CONFIG.emailLink}
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm"
                >
                  <svg className="w-4 h-4 text-[var(--aqua)]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  {SITE_CONFIG.email}
                </a>
              </div>

              {/* What to expect */}
              <div className="rounded-xl p-7 border border-black/8">
                <h3 className="font-semibold mb-4" style={{ color: "var(--navy)" }}>What to Expect</h3>
                <ul className="flex flex-col gap-4">
                  {[
                    "We review your project details and reach out to schedule a site visit.",
                    "You receive an honest, itemized estimate without pressure.",
                    "We answer your questions and explain your options clearly.",
                    "You decide when and if you're ready to move forward.",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: "var(--text-mid)" }}>
                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "var(--aqua)" }} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service area note */}
              <div
                className="rounded-xl p-6 text-sm"
                style={{ backgroundColor: "var(--ivory)" }}
              >
                <p className="font-semibold mb-1" style={{ color: "var(--navy)" }}>Service Area</p>
                <p style={{ color: "var(--text-mid)" }}>
                  We serve Miami-Dade and Broward County, with select projects in Palm Beach County depending on scope. Include your ZIP code or city above and we'll confirm availability.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
