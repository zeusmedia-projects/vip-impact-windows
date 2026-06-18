// ============================================================
// Analytics Utility
// Central location for all tracking events
// ============================================================

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    fbq?: (...args: unknown[]) => void;
  }
}

// GA4 / Google Ads measurement IDs
// TODO: Replace with actual IDs from client
export const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID || "";
export const GADS_ID = process.env.NEXT_PUBLIC_GADS_ID || "";
export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID || "";

// ---- Event tracking ----
type EventParams = Record<string, string | number | boolean | undefined>;

export function trackEvent(eventName: string, params?: EventParams) {
  if (typeof window === "undefined") return;
  if (window.gtag) {
    window.gtag("event", eventName, params);
  }
  // Facebook Pixel
  if (window.fbq && params) {
    window.fbq("track", eventName);
  }
}

// Specific events - call these from components
export const Analytics = {
  headerCTAClick: () => trackEvent("header_cta_click"),
  heroCTAClick: () => trackEvent("hero_cta_click"),
  mobileCallClick: () => trackEvent("mobile_call_click"),
  desktopPhoneClick: () => trackEvent("desktop_phone_click"),
  formStart: () => trackEvent("form_start"),
  formStepComplete: (step: number) =>
    trackEvent("form_step_complete", { step }),
  formSubmit: () => trackEvent("form_submit"),
  emailClick: () => trackEvent("email_click"),
  locationCTAClick: (city: string) =>
    trackEvent("location_cta_click", { city }),
  serviceCardClick: (service: string) =>
    trackEvent("service_card_click", { service }),
  videoPlay: () => trackEvent("video_play"),
  galleryInteraction: () => trackEvent("gallery_interaction"),
};
