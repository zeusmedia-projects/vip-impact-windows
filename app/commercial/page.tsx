import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Commercial Impact Windows & Storefront Glass",
  description:
    "VIP Impact Windows & Doors installs impact-rated storefront glass and commercial door systems for South Florida retail, office, restaurant, and mixed-use properties.",
};

export default function CommercialPage() {
  return (
    <>
      <section className="py-16" style={{ backgroundColor: "var(--navy)" }} aria-labelledby="comm-heading">
        <div className="container-wide">
          <p className="eyebrow mb-4">Commercial Services</p>
          <h1 id="comm-heading" className="text-display-lg text-white mb-5 max-w-2xl">
            Commercial & Storefront Impact Glass for South Florida.
          </h1>
          <p className="text-lg text-white/70 leading-relaxed max-w-xl mb-8">
            We install impact-rated storefront glass and commercial door systems for retail, office, restaurant, and mixed-use properties across Miami-Dade and Broward County.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">Request a Commercial Estimate</Link>
            <a href="tel:+18337425847" className="btn-outline">Call (833) PICK-VIP</a>
          </div>
        </div>
      </section>

      <section className="section-pad" aria-label="Commercial service types">
        <div className="container-wide grid lg:grid-cols-2 gap-12">
          {[
            {
              title: "Storefront Impact Glass",
              body: "Commercial curtain wall and storefront glass configurations using impact-rated glazing and commercial-grade aluminum framing. Suitable for ground-floor retail, restaurants, and office building facades.",
              uses: ["Retail storefronts", "Restaurant fronts", "Office building entrances", "Medical office properties", "Mixed-use ground floor"],
            },
            {
              title: "Commercial Impact Doors",
              body: "Heavy-duty impact-rated door systems for commercial entry points. Available in single and double configurations with commercial hardware options.",
              uses: ["Retail entry doors", "Office building entries", "Restaurant entries", "Multi-tenant commercial spaces"],
            },
          ].map((svc) => (
            <div key={svc.title} className="rounded-xl border border-black/8 p-8">
              <h2 className="text-display-sm mb-3" style={{ color: "var(--navy)" }}>
                {svc.title}
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-mid)" }}>
                {svc.body}
              </p>
              <h3 className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--text-light)" }}>
                Common Applications
              </h3>
              <ul className="flex flex-col gap-2">
                {svc.uses.map((use) => (
                  <li key={use} className="flex items-center gap-2 text-sm" style={{ color: "var(--text-mid)" }}>
                    <svg className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "var(--aqua)" }} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                    {use}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad" style={{ backgroundColor: "var(--ivory)" }} aria-labelledby="comm-approach-heading">
        <div className="container-wide max-w-3xl">
          <h2 id="comm-approach-heading" className="text-display-md mb-5" style={{ color: "var(--navy)" }}>
            Our Approach to Commercial Projects
          </h2>
          <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--text-mid)" }}>
            <p>
              Commercial impact glass projects require careful assessment of opening sizes, traffic patterns, hardware requirements, and in some cases, building code or tenant lease specifications. We approach each commercial project with the same attention we bring to residential work.
            </p>
            <p>
              We primarily serve small to mid-size commercial property owners, general contractors, and property managers who need a reliable partner for impact glass and storefront installations.
            </p>
            <p>
              If you're a general contractor or property manager coordinating a larger scope, contact us to discuss your project. We're happy to assess whether your timeline and requirements are a fit for our team.
            </p>
          </div>
          <Link href="/contact" className="btn-primary mt-8 inline-flex">
            Request a Commercial Estimate →
          </Link>
        </div>
      </section>

      <section className="section-pad text-center" style={{ backgroundColor: "var(--navy)" }}>
        <div className="container-wide max-w-2xl mx-auto">
          <h2 className="text-display-md text-white mb-5">Let's Discuss Your Commercial Project.</h2>
          <p className="text-white/70 text-lg leading-relaxed mb-8">
            Contact us with your property type, location, and a description of your project and we'll follow up to discuss the right approach.
          </p>
          <Link href="/contact" className="btn-primary">Request a Commercial Estimate</Link>
        </div>
      </section>
    </>
  );
}
