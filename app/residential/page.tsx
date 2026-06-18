import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Residential Impact Windows & Doors",
  description:
    "VIP Impact Windows & Doors installs quality impact windows, doors, and sliding glass doors for South Florida homes and condominiums. Personal guidance and competitive pricing.",
};

export default function ResidentialPage() {
  return (
    <>
      <section className="py-16" style={{ backgroundColor: "var(--navy)" }} aria-labelledby="res-heading">
        <div className="container-wide">
          <p className="eyebrow mb-4">Residential Services</p>
          <h1 id="res-heading" className="text-display-lg text-white mb-5 max-w-2xl">
            Your Home Deserves the VIP Treatment.
          </h1>
          <p className="text-lg text-white/70 leading-relaxed max-w-xl mb-8">
            We serve South Florida homeowners with quality impact windows, doors, and sliding glass doors — and we treat every home like it matters, because it does.
          </p>
          <Link href="/contact" className="btn-primary">Get My VIP Estimate</Link>
        </div>
      </section>

      <section className="section-pad" aria-label="Residential service types">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Single-Family Homes",
                body: "Whether you're upgrading a mid-century neighborhood home or a newer coastal build, we assess your openings and recommend the right impact products for your property's exposure and style.",
              },
              {
                title: "Condominiums",
                body: "Condominium installations often involve building or association coordination requirements. We work closely with homeowners to understand and prepare for these requirements before ordering products.",
              },
              {
                title: "Townhomes & Villas",
                body: "Attached properties often have unique installation requirements based on shared wall conditions and community guidelines. We take the time to assess your specific situation.",
              },
              {
                title: "Waterfront Properties",
                body: "Coastal and Intracoastal properties face direct salt air exposure and elevated wind loads. We select products appropriate for your actual exposure conditions.",
              },
              {
                title: "Renovation Projects",
                body: "Replacing windows and doors during a broader renovation is an ideal time to upgrade to impact glass. We coordinate with your timeline and other contractors as needed.",
              },
              {
                title: "Investment Properties",
                body: "Quality impact windows and doors are a meaningful upgrade for South Florida rental and investment properties. We provide clear, itemized estimates that work within investment property budgets.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl p-7 border border-black/8">
                <h2 className="font-semibold text-base mb-3" style={{ color: "var(--navy)" }}>
                  {item.title}
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-mid)" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ backgroundColor: "var(--ivory)" }} aria-label="Why choose VIP for residential">
        <div className="container-wide grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-display-md mb-5" style={{ color: "var(--navy)" }}>
              Why South Florida Homeowners Choose VIP
            </h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--text-mid)" }}>
              <p>
                Replacing your home's windows and doors is a significant investment. The contractor you choose will be in your home, working around your schedule, and responsible for the quality of a permanent installation.
              </p>
              <p>
                We understand that means something. You're not looking for the most aggressive salesperson or the flashiest marketing—you're looking for someone you can trust inside your home.
              </p>
              <p>
                That's what VIP delivers: personal attention, clear communication, honest recommendations, and a final walkthrough that confirms everything meets the standard we set at the beginning.
              </p>
            </div>
            <Link href="/contact" className="btn-primary mt-8 inline-flex">
              Request Your Estimate →
            </Link>
          </div>
          <div
            className="rounded-xl aspect-square flex items-center justify-center"
            style={{ backgroundColor: "var(--sand)" }}
            aria-label="South Florida residential impact window installation — photo placeholder"
          >
            <div className="text-center">
              <svg className="w-10 h-10 mx-auto mb-2" style={{ color: "var(--champagne)" }} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </svg>
              <p className="text-sm" style={{ color: "var(--text-light)" }}>Residential Project Photo</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad text-center" style={{ backgroundColor: "var(--navy)" }}>
        <div className="container-wide max-w-2xl mx-auto">
          <h2 className="text-display-md text-white mb-5">Ready to Protect Your Home?</h2>
          <p className="text-white/70 text-lg leading-relaxed mb-8">
            Contact us for a free, no-pressure estimate on impact windows and doors for your South Florida home.
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
