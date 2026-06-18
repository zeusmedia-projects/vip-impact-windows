"use client";
import { useState, useRef } from "react";
import { Analytics } from "@/app/lib/analytics";

interface FormData {
  // Step 1
  name: string;
  phone: string;
  email: string;
  zip: string;
  // Step 2
  propertyType: string;
  projectInterest: string;
  // Step 3
  openings: string;
  timeline: string;
  address: string;
  message: string;
  // Step 4
  contactMethod: string;
  smsConsent: boolean;
  privacyAck: boolean;
  // Honeypot (hidden)
  honeypot: string;
}

const INITIAL_DATA: FormData = {
  name: "", phone: "", email: "", zip: "",
  propertyType: "", projectInterest: "",
  openings: "", timeline: "", address: "", message: "",
  contactMethod: "phone", smsConsent: false, privacyAck: false,
  honeypot: "",
};

const STEPS = ["Contact Info", "Project Type", "Project Details", "Preferences"];

export default function MultiStepEstimateForm({ compact = false }: { compact?: boolean }) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>(INITIAL_DATA);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const startedRef = useRef(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value, type } = e.target;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    setData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (!startedRef.current) {
      startedRef.current = true;
      Analytics.formStart();
    }
  }

  function validateStep(s: number): boolean {
    const newErrors: typeof errors = {};
    if (s === 0) {
      if (!data.name.trim()) newErrors.name = "Your name is required.";
      if (!data.phone.trim()) newErrors.phone = "A phone number is required.";
      if (!data.email.trim() || !/\S+@\S+\.\S+/.test(data.email)) newErrors.email = "A valid email is required.";
      if (!data.zip.trim()) newErrors.zip = "ZIP code is required.";
    }
    if (s === 1) {
      if (!data.propertyType) newErrors.propertyType = "Please select a property type.";
      if (!data.projectInterest) newErrors.projectInterest = "Please select a project interest.";
    }
    if (s === 3) {
      if (!data.privacyAck) newErrors.privacyAck = "Please acknowledge our privacy policy.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function nextStep() {
    if (!validateStep(step)) return;
    Analytics.formStepComplete(step + 1);
    setStep((s) => s + 1);
  }

  async function handleSubmit() {
    if (!validateStep(step)) return;
    if (data.honeypot) return; // Bot detected
    setLoading(true);
    try {
      const payload = {
        ...data,
        source: typeof window !== "undefined" ? window.location.href : "",
        referrer: typeof document !== "undefined" ? document.referrer : "",
        utmParams: typeof window !== "undefined" ? window.location.search : "",
      };
      const res = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        Analytics.formSubmit();
        setSubmitted(true);
      } else {
        setErrors({ honeypot: "Something went wrong. Please try calling us directly." });
      }
    } catch {
      setErrors({ honeypot: "Unable to submit. Please call us at (833) PICK-VIP." });
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-10 px-6">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
          style={{ backgroundColor: "rgba(72,183,199,0.12)" }}
        >
          <svg className="w-8 h-8 text-[var(--aqua)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-display-sm mb-3" style={{ color: "var(--navy)" }}>
          Your VIP Request Is In.
        </h3>
        <p style={{ color: "var(--text-mid)" }} className="text-base leading-relaxed max-w-sm mx-auto">
          A member of the VIP team will review your project details and contact you to discuss the next step.
        </p>
      </div>
    );
  }

  const inputClass = (field: keyof FormData) =>
    `form-input ${errors[field] ? "!border-red-400" : ""}`;

  return (
    <div>
      {/* Progress */}
      {!compact && (
        <div className="flex gap-2 mb-8">
          {STEPS.map((label, i) => (
            <div key={i} className="flex-1">
              <div
                className="h-1 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: i <= step ? "var(--aqua)" : "var(--sand)",
                }}
              />
              <span className="text-xs mt-1.5 block" style={{ color: i <= step ? "var(--aqua)" : "var(--text-light)" }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Honeypot (hidden) */}
      <input type="text" name="honeypot" value={data.honeypot} onChange={handleChange} className="hidden" tabIndex={-1} aria-hidden="true" />

      {/* Step 1 */}
      {step === 0 && (
        <div className="flex flex-col gap-4">
          <div>
            <label className="form-label" htmlFor="name">Full Name <span aria-hidden>*</span></label>
            <input id="name" name="name" type="text" value={data.name} onChange={handleChange} className={inputClass("name")} placeholder="Jane Smith" autoComplete="name" />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="form-label" htmlFor="phone">Phone Number <span aria-hidden>*</span></label>
            <input id="phone" name="phone" type="tel" value={data.phone} onChange={handleChange} className={inputClass("phone")} placeholder="(555) 000-0000" autoComplete="tel" />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>
          <div>
            <label className="form-label" htmlFor="email">Email Address <span aria-hidden>*</span></label>
            <input id="email" name="email" type="email" value={data.email} onChange={handleChange} className={inputClass("email")} placeholder="jane@example.com" autoComplete="email" />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          <div>
            <label className="form-label" htmlFor="zip">ZIP Code <span aria-hidden>*</span></label>
            <input id="zip" name="zip" type="text" value={data.zip} onChange={handleChange} className={inputClass("zip")} placeholder="33101" autoComplete="postal-code" maxLength={10} />
            {errors.zip && <p className="text-red-500 text-xs mt-1">{errors.zip}</p>}
          </div>
        </div>
      )}

      {/* Step 2 */}
      {step === 1 && (
        <div className="flex flex-col gap-5">
          <div>
            <label className="form-label" htmlFor="propertyType">Property Type <span aria-hidden>*</span></label>
            <select id="propertyType" name="propertyType" value={data.propertyType} onChange={handleChange} className={inputClass("propertyType")}>
              <option value="">Select one…</option>
              <option value="single-family">Single-Family Home</option>
              <option value="condo">Condominium</option>
              <option value="townhome">Townhome</option>
              <option value="commercial">Commercial Property</option>
              <option value="other">Other</option>
            </select>
            {errors.propertyType && <p className="text-red-500 text-xs mt-1">{errors.propertyType}</p>}
          </div>
          <div>
            <label className="form-label" htmlFor="projectInterest">Project Interest <span aria-hidden>*</span></label>
            <select id="projectInterest" name="projectInterest" value={data.projectInterest} onChange={handleChange} className={inputClass("projectInterest")}>
              <option value="">Select one…</option>
              <option value="impact-windows">Impact Windows</option>
              <option value="impact-doors">Impact Doors</option>
              <option value="sliding-glass-doors">Sliding Glass Doors</option>
              <option value="storefront">Storefront or Commercial Glass</option>
              <option value="multiple">Multiple Products</option>
              <option value="not-sure">Not Sure Yet</option>
            </select>
            {errors.projectInterest && <p className="text-red-500 text-xs mt-1">{errors.projectInterest}</p>}
          </div>
        </div>
      )}

      {/* Step 3 */}
      {step === 2 && (
        <div className="flex flex-col gap-4">
          <div>
            <label className="form-label" htmlFor="openings">Approximate Number of Openings</label>
            <select id="openings" name="openings" value={data.openings} onChange={handleChange} className="form-input">
              <option value="">Not sure yet</option>
              <option value="1-5">1–5 openings</option>
              <option value="6-10">6–10 openings</option>
              <option value="11-20">11–20 openings</option>
              <option value="20+">More than 20</option>
            </select>
          </div>
          <div>
            <label className="form-label" htmlFor="timeline">Desired Timeline</label>
            <select id="timeline" name="timeline" value={data.timeline} onChange={handleChange} className="form-input">
              <option value="">Flexible</option>
              <option value="asap">As soon as possible</option>
              <option value="1-3months">Within 1–3 months</option>
              <option value="3-6months">Within 3–6 months</option>
              <option value="planning">Just planning ahead</option>
            </select>
          </div>
          <div>
            <label className="form-label" htmlFor="address">Project Address or City</label>
            <input id="address" name="address" type="text" value={data.address} onChange={handleChange} className="form-input" placeholder="Miami Beach, FL" />
          </div>
          <div>
            <label className="form-label" htmlFor="message">Additional Details</label>
            <textarea id="message" name="message" rows={4} value={data.message} onChange={handleChange} className="form-input resize-none" placeholder="Tell us about your project, specific goals, or any questions you have." />
          </div>
        </div>
      )}

      {/* Step 4 */}
      {step === 3 && (
        <div className="flex flex-col gap-5">
          <div>
            <label className="form-label">Preferred Contact Method</label>
            <div className="flex gap-4 mt-1">
              {["phone", "email", "text"].map((method) => (
                <label key={method} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="contactMethod"
                    value={method}
                    checked={data.contactMethod === method}
                    onChange={handleChange}
                    className="accent-[var(--aqua)]"
                  />
                  <span className="text-sm capitalize" style={{ color: "var(--text-mid)" }}>
                    {method === "text" ? "Text/SMS" : method.charAt(0).toUpperCase() + method.slice(1)}
                  </span>
                </label>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3 pt-2">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="smsConsent"
                checked={data.smsConsent}
                onChange={handleChange}
                className="mt-0.5 accent-[var(--aqua)]"
              />
              <span className="text-sm leading-relaxed" style={{ color: "var(--text-mid)" }}>
                I agree to receive text messages from VIP Impact Windows & Doors about my project estimate. Message frequency varies. Message and data rates may apply. Reply STOP to opt out.
              </span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="privacyAck"
                checked={data.privacyAck}
                onChange={handleChange}
                className="mt-0.5 accent-[var(--aqua)]"
                aria-required="true"
              />
              <span className="text-sm leading-relaxed" style={{ color: "var(--text-mid)" }}>
                I have read and agree to the{" "}
                <a href="/privacy" className="underline hover:text-[var(--aqua)]" target="_blank">Privacy Policy</a>.
                My information will only be used to respond to my estimate request.
              </span>
            </label>
            {errors.privacyAck && <p className="text-red-500 text-xs">{errors.privacyAck}</p>}
          </div>
          {errors.honeypot && (
            <p className="text-red-500 text-sm p-3 bg-red-50 rounded">{errors.honeypot}</p>
          )}
        </div>
      )}

      {/* Navigation */}
      <div className={`flex gap-3 mt-8 ${step === 0 ? "justify-end" : "justify-between"}`}>
        {step > 0 && (
          <button
            type="button"
            onClick={() => setStep((s) => s - 1)}
            className="text-sm font-medium px-5 py-3 rounded border transition-colors"
            style={{ borderColor: "var(--sand)", color: "var(--text-mid)" }}
          >
            Back
          </button>
        )}
        {step < 3 ? (
          <button type="button" onClick={nextStep} className="btn-primary">
            Continue →
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={loading}
            className="btn-primary"
          >
            {loading ? "Sending…" : "Submit My VIP Request"}
          </button>
        )}
      </div>
    </div>
  );
}
