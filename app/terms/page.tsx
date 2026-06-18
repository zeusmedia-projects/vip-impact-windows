import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <section className="section-pad">
      <div className="container-wide max-w-3xl mx-auto">
        <h1 className="text-display-md mb-3" style={{ color: "var(--navy)" }}>Terms of Service</h1>
        <p className="text-sm mb-10" style={{ color: "var(--text-light)" }}>Last updated: {new Date().getFullYear()}</p>
        <div className="prose-vip space-y-6">
          <p>By using the VIP Impact Windows & Doors website, you agree to these terms.</p>
          {[
            {
              h: "Website Use",
              b: "This website is provided for informational purposes and to facilitate estimate requests. You agree not to use the site for any unlawful purpose or in any way that could damage or interfere with the site's operation.",
            },
            {
              h: "Estimate Requests",
              b: "Submitting an estimate request does not constitute a binding agreement or guarantee of service availability, pricing, or timeline. We will contact you to discuss your project after receiving your request.",
            },
            {
              h: "Accuracy of Information",
              b: "We make reasonable efforts to keep the information on this site accurate and up to date. However, we do not warrant that all information is complete or error-free. Product availability, pricing, and services are subject to change.",
            },
            {
              h: "Limitation of Liability",
              b: "VIP Impact Windows & Doors LLC shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website.",
            },
            {
              h: "Contact",
              b: "Questions about these terms? Email info@myvipwindows.com or call (833) PICK-VIP.",
            },
          ].map((s) => (
            <div key={s.h}>
              <h2 className="text-lg font-semibold mb-2" style={{ color: "var(--navy)" }}>{s.h}</h2>
              <p className="leading-relaxed" style={{ color: "var(--text-mid)" }}>{s.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
