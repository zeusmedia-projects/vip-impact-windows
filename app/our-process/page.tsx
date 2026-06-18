import type { Metadata } from "next";
import Link from "next/link";
import { PROCESS_STEPS } from "@/app/lib/siteData";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "See how VIP Impact Windows & Doors guides you through your impact window or door project—from first conversation to final walkthrough. Personal, transparent, and pressure-free.",
};

export default function OurProcessPage() {
  return (
    <>
      <section
        className="py-16"
        style={{ backgroundColor: "var(--navy)" }}
        aria-labelledby="process-heading"
      >
        <div className="container-wide text-center max-w-2xl mx-auto">
          <p className="eyebrow mb-4">How We Work</p>
          <h1 id="process-heading" className="text-display-lg text-white mb-5">
            A Smoother Way to Upgrade Your Property.
          </h1>
          <p className="text-lg text-white/70 leading-relaxed">
            From the first conversation to the final walkthrough, we keep you informed and involved at every step—with no surprises and no pressure.
          </p>
        </div>
      </section>

      <section className="section-pad-lg" aria-label="Process steps">
        <div className="container-wide max-w-3xl mx-auto">
          <div className="flex flex-col gap-0">
            {PROCESS_STEPS.map((step, i) => (
              <div key={step.number} className="flex gap-8 relative">
                {/* Vertical line */}
                {i < PROCESS_STEPS.length - 1 && (
                  <div
                    className="absolute left-5 top-14 bottom-0 w-px"
                    style={{ backgroundColor: "var(--sand)" }}
                    aria-hidden="true"
                  />
                )}
                <div className="step-number flex-shrink-0" aria-hidden="true">
                  {step.number}
                </div>
                <div className="pb-12">
                  <h2 className="text-display-sm mb-3" style={{ color: "var(--navy)" }}>
                    {step.title}
                  </h2>
                  <p className="text-base leading-relaxed" style={{ color: "var(--text-mid)" }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-black/8 pt-10 mt-4">
            <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--text-mid)" }}>
              Throughout the process, you can reach us directly with questions. We don't hand you off to a call center or a subcontractor team that doesn't know your project.
            </p>
            <Link href="/contact" className="btn-primary">
              Start Your VIP Estimate
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ backgroundColor: "var(--ivory)" }}>
        <div className="container-wide max-w-3xl mx-auto">
          <h2 className="text-display-md mb-8" style={{ color: "var(--navy)" }}>
            Common Questions About the Process
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "How do I know which products are right for my property?",
                a: "We discuss your property type, the number and size of your openings, your goals, and your budget before making any product recommendations. You'll never be pushed toward a product that doesn't fit your situation.",
              },
              {
                q: "Who handles the measurements and ordering?",
                a: "We take care of accurate measurements as part of your project. Incorrect measurements are one of the most common sources of problems in window and door projects, and we treat precision as a baseline expectation.",
              },
              {
                q: "What happens if something doesn't look right after installation?",
                a: "We conduct a final walkthrough to confirm everything meets the standard we set at the beginning of your project. If anything needs attention, we address it before we consider the job complete.",
              },
              {
                q: "How long does a typical project take?",
                a: "Timeline depends on your number of openings, the products selected, and the project type. We provide a realistic timeline during your estimate process so you can plan accordingly.",
              },
            ].map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl p-6 shadow-sm border border-black/5">
                <h3 className="font-semibold mb-3" style={{ color: "var(--navy)" }}>
                  {faq.q}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-mid)" }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad text-center" style={{ backgroundColor: "var(--navy)" }}>
        <div className="container-wide max-w-2xl mx-auto">
          <h2 className="text-display-md text-white mb-5">Ready to Get Started?</h2>
          <p className="text-lg text-white/70 leading-relaxed mb-8">
            Submit a free estimate request and we'll reach out to discuss the first step.
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
