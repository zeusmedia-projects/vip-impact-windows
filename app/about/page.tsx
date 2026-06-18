import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { OWNER_INFO } from "../lib/siteData";
import ScrollReveal from "../components/ScrollReveal";

export const metadata: Metadata = {
  title: "About VIP Impact Windows & Doors",
  description:
    "Learn about VIP Impact Windows & Doors — a boutique, owner-led impact window and door company built on personal guidance, honest recommendations, and competitive pricing for South Florida.",
};

export default function AboutPage() {
  return (
    <>
      <section
        className="py-16"
        style={{ backgroundColor: "var(--navy)" }}
        aria-labelledby="about-heading"
      >
        <div className="container-wide max-w-2xl">
          <p className="eyebrow mb-4">About VIP</p>
          <h1 id="about-heading" className="text-display-lg text-white mb-5">
            Built Around Care, Not Volume.
          </h1>
          <p className="text-lg text-white/70 leading-relaxed">
            VIP Impact Windows & Doors is a boutique, owner-led impact window and door company serving South Florida homeowners and businesses with personal guidance, honest recommendations, and competitive pricing.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-pad-lg" aria-labelledby="story-heading">
        <div className="container-wide grid lg:grid-cols-2 gap-16 items-center">
          {/* Owner photo */}
          <ScrollReveal delay="delay-100" className="rounded-xl aspect-[3/4] md:aspect-square relative overflow-hidden shadow-xl hover-scale-img">
            <Image src={OWNER_INFO.image} alt={OWNER_INFO.name} fill className="object-cover transition-transform duration-700" />
          </ScrollReveal>

          <div>
            <span className="accent-line" aria-hidden="true" />
            <h2 id="story-heading" className="text-display-md mb-6" style={{ color: "var(--navy)" }}>
              The VIP Story
            </h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--text-mid)" }}>
              <p>
                VIP Impact Windows & Doors was built around a simple belief: a major property improvement should feel personal. Customers deserve an honest conversation, clear expectations, and someone who remains involved throughout the process—not someone who disappears after the contract is signed.
              </p>
              <p>
                We're not a national franchise or a high-volume operation that processes your project like a transaction. Every project receives direct attention from the same people you spoke with on day one.
              </p>
              <p>
                Our name reflects our commitment: every customer receives the kind of attentive, personalized service that usually comes with an inflated price tag—without the inflated price tag.
              </p>
              <p>{OWNER_INFO.bio}</p>
              <p className="italic font-display text-xl pt-4" style={{ color: "var(--navy)" }}>
                — {OWNER_INFO.name}, {OWNER_INFO.title}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad" style={{ backgroundColor: "var(--ivory)" }} aria-labelledby="values-heading">
        <div className="container-wide">
          <div className="max-w-xl mb-12">
            <h2 id="values-heading" className="text-display-md" style={{ color: "var(--navy)" }}>
              What We Stand For
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Honesty",
                body: "We give you our honest assessment of your options, including when a more affordable solution is the right call. We'd rather earn your trust than maximize a single transaction.",
              },
              {
                title: "Personal Responsibility",
                body: "We stay involved throughout your project. When something requires follow-up, we handle it — we don't pass it off.",
              },
              {
                title: "Transparency",
                body: "You receive a clear, itemized estimate before any work begins. No surprises at the end of a project.",
              },
              {
                title: "Competitive Value",
                body: "Quality impact windows and doors shouldn't require paying a premium for overhead you don't benefit from. We pass competitive pricing to every customer.",
              },
              {
                title: "South Florida Understanding",
                body: "We know what the coastal environment, storm season, and South Florida building standards actually require — and we design our recommendations around your real conditions.",
              },
              {
                title: "The Final Walkthrough",
                body: "Every project ends with a walkthrough to confirm everything is right. We're not finished until you are.",
              },
            ].map((val) => (
              <div key={val.title} className="bg-white rounded-xl p-7 shadow-sm border border-black/5">
                <div
                  className="w-1.5 h-8 rounded-full mb-5"
                  style={{ backgroundColor: "var(--aqua)" }}
                  aria-hidden="true"
                />
                <h3 className="font-semibold text-base mb-3" style={{ color: "var(--navy)" }}>
                  {val.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-mid)" }}>
                  {val.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video placeholder */}
      <section className="section-pad" aria-label="Brand story video">
        <div className="container-wide max-w-3xl mx-auto text-center">
          <p className="eyebrow mb-4">Hear From Us</p>
          <h2 className="text-display-md mb-8" style={{ color: "var(--navy)" }}>
            Our Story in Our Own Words
          </h2>
          <div
            className="rounded-xl aspect-video flex items-center justify-center"
            style={{ backgroundColor: "var(--navy)" }}
          >
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "rgba(72,183,199,0.2)", border: "1.5px solid var(--aqua)" }}
                aria-hidden="true"
              >
                <svg className="w-7 h-7 text-[var(--aqua)] ml-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-white/50 text-sm">Brand Story Video</p>
              <p className="text-white/30 text-xs mt-1">
                {/* TODO: Client to supply video URL or embed */}
                Video content pending client approval
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad text-center" style={{ backgroundColor: "var(--navy)" }}>
        <div className="container-wide max-w-2xl mx-auto">
          <h2 className="text-display-md text-white mb-5">Experience the VIP Difference.</h2>
          <p className="text-lg text-white/70 leading-relaxed mb-8">
            Request a free estimate and see what personal guidance and honest recommendations feel like.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Get My VIP Estimate</Link>
            <a href="tel:+18337425847" className="btn-outline">Call (833) PICK-VIP</a>
          </div>
        </div>
      </section>
    </>
  );
}
