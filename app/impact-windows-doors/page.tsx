import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impact Windows & Doors",
  description:
    "Quality impact windows, impact doors, and sliding glass doors for South Florida residential and commercial properties. Personal guidance from VIP Impact Windows & Doors.",
};

const PRODUCTS = [
  {
    id: "windows",
    title: "Impact Windows",
    subtitle: "Every Opening. Every Standard.",
    body: "Impact windows replace standard glass with laminated, impact-resistant glazing designed to withstand high wind pressure and windborne debris. They provide year-round protection without requiring any action before a storm.",
    types: [
      { name: "Fixed Windows", desc: "Stationary picture and accent windows for areas where ventilation is not required. Available in a wide range of sizes and configurations." },
      { name: "Casement Windows", desc: "Hinged windows that open outward, offering full ventilation and clean sightlines. Popular in modern South Florida homes." },
      { name: "Single-Hung Windows", desc: "A classic operable window style where the lower sash opens while the upper remains stationary. Well-suited for retrofit and renovation projects." },
      { name: "Horizontal Sliding Windows", desc: "Side-by-side panels that slide open for ventilation. A common choice for kitchens, bathrooms, and coastal properties." },
    ],
  },
  {
    id: "doors",
    title: "Impact Doors",
    subtitle: "Strength at the Entry Point.",
    body: "Your entry door is one of the most important openings in your home. Impact-rated entry and French doors combine security, storm resistance, and lasting curb appeal in a single investment.",
    types: [
      { name: "Entry Doors", desc: "Impact-rated single and double entry doors in a range of panel styles, glass configurations, and finish options. Built to complement your home's exterior." },
      { name: "French Doors", desc: "Classic hinged double-door configurations with impact-rated glass, ideal for living rooms, master suites, and patio access points." },
    ],
  },
  {
    id: "sliding",
    title: "Sliding Glass Doors",
    subtitle: "Open Space. Closed to the Storm.",
    body: "Large-format impact sliding glass doors are one of the most popular upgrades for South Florida homes and condominiums — connecting interior living areas to outdoor spaces while meeting hurricane protection requirements.",
    types: [
      { name: "Impact Sliding Glass Doors", desc: "Multi-panel configurations from standard two-panel to larger multi-track systems. Available in a range of frame finishes and glass options for residential and commercial applications." },
    ],
  },
  {
    id: "commercial",
    title: "Commercial Storefront Glass",
    subtitle: "Built for Business.",
    body: "We install impact-rated storefront glass systems for retail spaces, office buildings, restaurants, and mixed-use commercial properties across South Florida.",
    types: [
      { name: "Storefront Impact Glass", desc: "Curtain wall and storefront configurations with impact-rated glazing and commercial-grade aluminum framing systems." },
      { name: "Commercial Impact Doors", desc: "Heavy-duty impact-rated door systems for commercial entry points, including single and double configurations with panic hardware compatibility." },
    ],
  },
];

export default function ImpactWindowsDoorsPage() {
  return (
    <>
      <section
        className="py-16"
        style={{ backgroundColor: "var(--navy)" }}
        aria-labelledby="products-heading"
      >
        <div className="container-wide">
          <p className="eyebrow mb-4">What We Install</p>
          <h1 id="products-heading" className="text-display-lg text-white mb-5 max-w-2xl">
            Impact Windows & Doors for South Florida.
          </h1>
          <p className="text-lg text-white/70 leading-relaxed max-w-xl mb-8">
            We offer a full range of impact-rated windows, doors, and storefront glass for residential and commercial properties across Miami-Dade, Broward, and select Palm Beach County communities.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">Get My VIP Estimate</Link>
            <a href="tel:+18337425847" className="btn-outline">Call (833) PICK-VIP</a>
          </div>
        </div>
      </section>

      {PRODUCTS.map((product, idx) => (
        <section
          key={product.id}
          id={product.id}
          className="section-pad"
          style={{ backgroundColor: idx % 2 === 0 ? "var(--white)" : "var(--ivory)" }}
          aria-labelledby={`${product.id}-heading`}
        >
          <div className="container-wide grid lg:grid-cols-2 gap-12 items-start">
            {/* Image placeholder */}
            <div
              className={`rounded-xl aspect-[4/3] flex items-center justify-center ${idx % 2 === 1 ? "lg:order-2" : ""}`}
              style={{ backgroundColor: "var(--sand)" }}
              aria-label={`${product.title} installation photography — to be replaced with actual VIP project photos`}
            >
              <div className="text-center">
                <svg className="w-10 h-10 mx-auto mb-2" style={{ color: "var(--champagne)" }} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                </svg>
                <p className="text-sm" style={{ color: "var(--text-light)" }}>{product.title} Photo</p>
              </div>
            </div>

            {/* Content */}
            <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
              <span className="accent-line" aria-hidden="true" />
              <h2 id={`${product.id}-heading`} className="text-display-md mb-2" style={{ color: "var(--navy)" }}>
                {product.title}
              </h2>
              <p className="text-sm font-semibold mb-4" style={{ color: "var(--aqua)" }}>
                {product.subtitle}
              </p>
              <p className="text-base leading-relaxed mb-7" style={{ color: "var(--text-mid)" }}>
                {product.body}
              </p>
              <div className="flex flex-col gap-5">
                {product.types.map((type) => (
                  <div key={type.name} className="border-l-2 pl-4" style={{ borderColor: "var(--champagne)" }}>
                    <h3 className="font-semibold text-sm mb-1" style={{ color: "var(--navy)" }}>
                      {type.name}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-mid)" }}>
                      {type.desc}
                    </p>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary mt-8 inline-flex">
                Request an Estimate →
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* Final CTA */}
      <section className="section-pad text-center" style={{ backgroundColor: "var(--navy)" }}>
        <div className="container-wide max-w-2xl mx-auto">
          <h2 className="text-display-md text-white mb-5">
            Not Sure Which Product Is Right for You?
          </h2>
          <p className="text-lg text-white/70 leading-relaxed mb-8">
            That's exactly what we're here for. Contact us and we'll help you understand your options clearly—no pressure, no jargon.
          </p>
          <Link href="/contact" className="btn-primary">Get My VIP Estimate</Link>
        </div>
      </section>
    </>
  );
}
