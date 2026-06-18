"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/app/lib/siteData";
import { Analytics } from "@/app/lib/analytics";

const NAV_LINKS = [
  { label: "Services", href: "/impact-windows-doors" },
  { label: "Residential", href: "/residential" },
  { label: "Commercial", href: "/commercial" },
  { label: "Our Process", href: "/our-process" },
  { label: "About", href: "/about" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Projects", href: "/projects" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white shadow-md"
          : "bg-white border-b border-black/5"
      }`}
    >
      <div className="container-wide flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0 hover-lift">
          <div className="relative w-40 h-12">
            <Image 
              src="/images/LOGO-long.png" 
              alt="VIP Impact Windows & Doors Logo" 
              fill 
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Right */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={SITE_CONFIG.phoneTel}
            onClick={Analytics.desktopPhoneClick}
            style={{ color: "var(--navy)" }}
            className="text-sm font-semibold hover:text-[var(--aqua)] transition-colors"
          >
            {SITE_CONFIG.phone}
          </a>
          <Link
            href="/contact"
            className="btn-primary !py-2.5 !px-5 !text-sm"
            onClick={Analytics.headerCTAClick}
          >
            Get My VIP Estimate
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2 -mr-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`block h-0.5 bg-current transition-transform duration-200 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
              style={{ color: "var(--navy)" }}
            />
            <span
              className={`block h-0.5 bg-current transition-opacity duration-200 ${
                mobileOpen ? "opacity-0" : ""
              }`}
              style={{ backgroundColor: "var(--navy)" }}
            />
            <span
              className={`block h-0.5 bg-current transition-transform duration-200 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
              style={{ backgroundColor: "var(--navy)" }}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="lg:hidden bg-white border-t border-black/5 pb-6"
          id="mobile-menu"
        >
          <nav
            className="container-wide flex flex-col gap-1 pt-4"
            aria-label="Mobile navigation"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link py-3 border-b border-black/5 text-base"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href={SITE_CONFIG.phoneTel}
                className="btn-navy w-full justify-center"
                onClick={Analytics.mobileCallClick}
              >
                Call {SITE_CONFIG.phone}
              </a>
              <Link
                href="/contact"
                className="btn-primary w-full justify-center"
                onClick={() => {
                  setMobileOpen(false);
                  Analytics.headerCTAClick();
                }}
              >
                Get My VIP Estimate
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
