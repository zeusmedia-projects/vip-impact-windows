import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SMS Opt-Out",
  robots: { index: false },
};

export default function SmsOptOutPage() {
  return (
    <section className="section-pad">
      <div className="container-wide max-w-2xl mx-auto text-center">
        <h1 className="text-display-md mb-5" style={{ color: "var(--navy)" }}>SMS Opt-Out</h1>
        <p className="text-base leading-relaxed mb-4" style={{ color: "var(--text-mid)" }}>
          To stop receiving text messages from VIP Impact Windows & Doors, simply reply <strong>STOP</strong> to any text message you receive from us.
        </p>
        <p className="text-base leading-relaxed mb-4" style={{ color: "var(--text-mid)" }}>
          You may also email us at <a href="mailto:info@myvipwindows.com" className="underline" style={{ color: "var(--aqua)" }}>info@myvipwindows.com</a> with "Unsubscribe SMS" in the subject line, or call us at <a href="tel:+18337425847" className="underline" style={{ color: "var(--aqua)" }}>(833) PICK-VIP</a>.
        </p>
        <p className="text-sm" style={{ color: "var(--text-light)" }}>
          Message and data rates may apply. For help, reply HELP. Carriers are not liable for delayed or undelivered messages.
        </p>
      </div>
    </section>
  );
}
