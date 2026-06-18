import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/app/lib/siteData";

const SERVICE_LINKS = [
  { label: "Impact Windows", href: "/impact-windows-doors#windows" },
  { label: "Impact Doors", href: "/impact-windows-doors#doors" },
  { label: "Sliding Glass Doors", href: "/impact-windows-doors#sliding" },
  { label: "Residential", href: "/residential" },
  { label: "Commercial & Storefront", href: "/commercial" },
];

const LOCATION_LINKS = [
  { label: "West Palm Beach", href: "/service-areas/west-palm-beach-impact-windows" },
  { label: "Boca Raton", href: "/service-areas/boca-raton-impact-windows" },
  { label: "Bal Harbour", href: "/service-areas/bal-harbour-impact-windows" },
  { label: "Bay Harbor Islands", href: "/service-areas/bay-harbor-islands-impact-windows" },
  { label: "Fort Lauderdale", href: "/service-areas/fort-lauderdale-impact-windows" },
  { label: "Wilton Manors", href: "/service-areas/wilton-manors-impact-windows" },
  { label: "Miami Beach", href: "/service-areas/miami-beach-impact-windows" },
];

const COMPANY_LINKS = [
  { label: "About VIP", href: "/about" },
  { label: "Our Process", href: "/our-process" },
  { label: "Projects", href: "/projects" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Contact", href: "/contact" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "SMS Opt-Out", href: "/sms-opt-out" },
];

export default function SiteFooter() {
  return (
    <footer style={{ backgroundColor: "var(--charcoal)" }} className="text-white">
      {/* Main footer */}
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2 lg:pr-8">
            <div className="relative w-40 h-12 mb-6">
              <Image
                src="/images/logo-long.png"
                alt="VIP Impact Windows & Doors Logo"
                fill
                sizes="160px"
                className="object-contain object-left"
                priority
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Quality impact windows and doors with personal guidance and competitive pricing for South Florida homes and businesses.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={SITE_CONFIG.phoneTel}
                className="flex items-center gap-2 text-sm font-semibold text-white hover:text-[var(--aqua)] transition-colors"
              >
                <svg className="w-4 h-4 text-[var(--aqua)]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                {SITE_CONFIG.phone}
              </a>
              <a
                href={SITE_CONFIG.emailLink}
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 text-[var(--aqua)]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                {SITE_CONFIG.email}
              </a>
              <p className="text-xs text-white/40 mt-1">
                Serving Miami-Dade, Broward & Select Palm Beach County
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[15px] font-semibold tracking-widest uppercase text-[var(--aqua)] mb-5">
              Services
            </h3>
            <ul className="flex flex-col gap-2.5">
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[15px] font-semibold tracking-widest uppercase text-[var(--aqua)] mb-5">
              Company
            </h3>
            <ul className="flex flex-col gap-2.5">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-[15px] font-semibold tracking-widest uppercase text-[var(--aqua)] mb-5">
              Service Areas
            </h3>
            <ul className="flex flex-col gap-2.5">
              {LOCATION_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-wide py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <p className="text-xs text-white/40">
              © {new Date().getFullYear()} VIP Impact Windows & Doors LLC. All rights reserved.
            </p>
            <p className="text-xs text-white/30">
              FL Contractor License: {SITE_CONFIG.licenseNumber}
            </p>
          </div>
          <div className="flex items-center gap-5">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-white/40 hover:text-white/70 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
