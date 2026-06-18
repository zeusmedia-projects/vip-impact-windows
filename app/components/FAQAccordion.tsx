"use client";
import { useState } from "react";

interface FAQ {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
  className?: string;
}

export default function FAQAccordion({ faqs, className = "" }: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(null);

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className={`divide-y divide-black/8 ${className}`}>
        {faqs.map((faq, i) => (
          <div key={i}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-start justify-between gap-4 py-5 text-left"
              aria-expanded={open === i}
            >
              <span
                className="font-semibold text-base leading-snug"
                style={{ color: "var(--navy)" }}
              >
                {faq.q}
              </span>
              <span
                className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center border transition-all duration-200"
                style={{
                  borderColor: open === i ? "var(--aqua)" : "var(--sand)",
                  backgroundColor: open === i ? "var(--aqua)" : "transparent",
                }}
                aria-hidden="true"
              >
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${open === i ? "rotate-180 text-white" : "text-[var(--text-light)]"}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            {open === i && (
              <div className="pb-5 pr-10">
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "var(--text-mid)" }}
                >
                  {faq.a}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
