import type { Metadata } from "next";
import Link from "next/link";
import { LOCATIONS } from "@/app/lib/siteData";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "VIP Impact Windows & Doors serves Miami-Dade, Broward, and select Palm Beach County communities including Miami Beach, Fort Lauderdale, Bal Harbour, and more.",
};

export default function ServiceAreasPage() {
  return (
    <>
      <section
        className="py-16"
        style={{ backgroundColor: "var(--navy)" }}
        aria-labelledby="areas-heading"
      >
        <div className="container-wide text-center">
          <p className="eyebrow mb-4">Where We Work</p>
          <h1 id="areas-heading" className="text-display-lg text-white mb-4">
            VIP Service Across South Florida.
          </h1>
          <p className="text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
            We serve homeowners and businesses across Miami-Dade and Broward County, with select projects in Palm Beach County depending on scope.
          </p>
        </div>
      </section>

      <section className="section-pad" aria-label="Service location list">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                href={`/service-areas/${loc.slug}`}
                className="group rounded-xl border border-black/8 p-7 transition-all duration-200 hover:shadow-lg hover:border-[var(--aqua)]"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="font-semibold text-lg" style={{ color: "var(--navy)" }}>
                      {loc.city}
                    </h2>
                    <p className="text-sm" style={{ color: "var(--text-light)" }}>
                      {loc.county} County, FL
                    </p>
                  </div>
                  <svg
                    className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
                    style={{ color: "var(--aqua)" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-mid)" }}>
                  {loc.intro.substring(0, 110)}…
                </p>
                <span
                  className="inline-flex items-center gap-1 text-sm font-semibold mt-4"
                  style={{ color: "var(--aqua)" }}
                >
                  Impact Windows in {loc.city} →
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 rounded-xl p-8 text-center" style={{ backgroundColor: "var(--ivory)" }}>
            <p className="text-base leading-relaxed max-w-xl mx-auto mb-6" style={{ color: "var(--text-mid)" }}>
              Don't see your city listed? Contact us to discuss your project. We serve Miami-Dade and Broward County communities throughout the area, and consider select Palm Beach County projects depending on scope.
            </p>
            <Link href="/contact" className="btn-primary">
              Get My VIP Estimate
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
