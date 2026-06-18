import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { REVIEWS } from "../lib/siteData";
import ScrollReveal from "../components/ScrollReveal";

export const metadata: Metadata = {
  title: "Projects & Customer Stories",
  description:
    "See impact window and door projects completed by VIP Impact Windows & Doors across South Florida, including residential and commercial installations.",
};

const CATEGORIES = ["All", "Windows", "Doors", "Sliding Glass Doors", "Residential", "Commercial"];

export default function ProjectsPage() {
  return (
    <>
      <section className="py-16" style={{ backgroundColor: "var(--navy)" }} aria-labelledby="projects-heading">
        <div className="container-wide text-center">
          <p className="eyebrow mb-4">Our Work</p>
          <h1 id="projects-heading" className="text-display-lg text-white mb-5">
            South Florida Impact Projects
          </h1>
          <p className="text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
            Each project represents a homeowner or business owner who trusted us with their property. Here's a look at our work across the region.
          </p>
        </div>
      </section>

      <section className="section-pad" aria-label="Project gallery">
        <div className="container-wide">
          {/* Category filter */}
          <div className="flex gap-2 flex-wrap mb-10" role="list" aria-label="Project categories">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 text-sm font-medium rounded-lg border transition-colors ${
                  cat === "All"
                    ? "border-[var(--aqua)] bg-[var(--aqua)] text-white"
                    : "border-black/10 text-[var(--navy)] hover:border-[var(--aqua)]"
                }`}
                aria-label={`Filter by ${cat}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <ScrollReveal key={i} delay={`delay-${(i % 3) * 100 + 100}`} className="rounded-xl overflow-hidden border border-black/5 group hover-lift shadow-sm bg-white">
                <div className="aspect-[4/3] relative overflow-hidden group hover-scale-img">
                  <Image src={`/images/project-${i}.jpg`} alt={`VIP Impact Windows Project ${i}`} fill className="object-cover transition-transform duration-700" />
                </div>
                <div className="p-5">
                  <p className="font-semibold text-sm mb-1" style={{ color: "var(--navy)" }}>
                    South Florida Installation {i}
                  </p>
                  <p className="text-xs" style={{ color: "var(--text-light)" }}>
                    Miami-Dade / Broward · Complete Upgrade
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Customer stories */}
      <section className="section-pad" style={{ backgroundColor: "var(--ivory)" }} aria-labelledby="stories-heading">
        <div className="container-wide">
          <div className="text-center max-w-xl mx-auto mb-12">
            <p className="eyebrow mb-3">Customer Stories</p>
            <h2 id="stories-heading" className="text-display-md" style={{ color: "var(--navy)" }}>
              What Our Clients Are Saying
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-sm" style={{ color: "var(--navy)" }}>{review.name}</p>
                    <p className="text-xs" style={{ color: "var(--text-light)" }}>{review.location} · Verified</p>
                  </div>
                  <span className="text-xs px-2 py-1 rounded font-medium" style={{ backgroundColor: "var(--sand)", color: "var(--navy)" }}>
                    Google
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad text-center" style={{ backgroundColor: "var(--navy)" }}>
        <div className="container-wide max-w-2xl mx-auto">
          <h2 className="text-display-md text-white mb-5">Start Your VIP Project.</h2>
          <p className="text-white/70 text-lg leading-relaxed mb-8">
            Get a free estimate and add your property to our portfolio of South Florida impact installations.
          </p>
          <Link href="/contact" className="btn-primary">Get My VIP Estimate</Link>
        </div>
      </section>
    </>
  );
}
