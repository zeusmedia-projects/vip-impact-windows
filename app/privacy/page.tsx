import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for VIP Impact Windows & Doors LLC.",
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <section className="section-pad">
      <div className="container-wide max-w-3xl mx-auto">
        <h1 className="text-display-md mb-3" style={{ color: "var(--navy)" }}>Privacy Policy</h1>
        <p className="text-sm mb-10" style={{ color: "var(--text-light)" }}>
          Last updated: {new Date().getFullYear()}
        </p>

        <div className="prose-vip space-y-8">
          {[
            {
              heading: "Information We Collect",
              body: "When you submit an estimate request through our website, we collect information you provide voluntarily, including your name, phone number, email address, ZIP code, and project details. We may also automatically collect technical information such as your browser type, IP address, and the pages you visit on our site.",
            },
            {
              heading: "How We Use Your Information",
              body: "We use the information you provide to respond to your estimate request, contact you about your project, and provide the services you request. We do not sell your personal information to third parties.",
            },
            {
              heading: "SMS Communications",
              body: "If you provide your phone number and consent to receive text messages, we may contact you via SMS regarding your project estimate or project status. You can opt out at any time by replying STOP to any text message. Message and data rates may apply.",
            },
            {
              heading: "Cookies and Tracking",
              body: "Our website may use cookies and analytics tools to understand how visitors use the site. This helps us improve the website experience. You can disable cookies in your browser settings.",
            },
            {
              heading: "Third-Party Services",
              body: "We may use third-party services such as Google Analytics to analyze site traffic. These services have their own privacy policies governing how they handle data.",
            },
            {
              heading: "Data Security",
              body: "We take reasonable precautions to protect the information you submit through our website. However, no online transmission is completely secure, and we cannot guarantee absolute security.",
            },
            {
              heading: "Contact Us",
              body: "If you have questions about this privacy policy or how we handle your information, contact us at info@myvipwindows.com or call (833) PICK-VIP.",
            },
          ].map((section) => (
            <div key={section.heading}>
              <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--navy)" }}>
                {section.heading}
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "var(--text-mid)" }}>
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
