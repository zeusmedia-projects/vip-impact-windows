import type { Metadata } from "next";
import "./globals.css";
import UtilityBar from "./components/UtilityBar";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import StickyMobileActions from "./components/StickyMobileActions";
import { SITE_CONFIG } from "./lib/siteData";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "VIP Impact Windows & Doors | South Florida Impact Windows & Doors",
    template: "%s | VIP Impact Windows & Doors",
  },
  description:
    "Quality impact windows and doors for South Florida homes and businesses. Personal guidance, competitive pricing, and VIP-level service from Miami-Dade to Broward and select Palm Beach County.",
  openGraph: {
    siteName: SITE_CONFIG.businessName,
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "VIP Impact Windows & Doors LLC",
  telephone: "+18337425847",
  email: "info@myvipwindows.com",
  url: "https://www.myvipwindows.com",
  description: "Boutique impact window and door company serving South Florida with quality products, personal guidance, and competitive pricing.",
  areaServed: [
    { "@type": "County", name: "Miami-Dade County", addressRegion: "FL" },
    { "@type": "County", name: "Broward County", addressRegion: "FL" },
  ],
  serviceType: "Impact Windows and Doors Installation",
  priceRange: "$$",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </head>
      <body className="pb-[72px] lg:pb-0">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 btn-primary">
          Skip to main content
        </a>
        <UtilityBar />
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <StickyMobileActions />
      </body>
    </html>
  );
}
