"use client";
import Link from "next/link";
import { SITE_CONFIG } from "@/app/lib/siteData";
import { Analytics } from "@/app/lib/analytics";

export default function UtilityBar() {
  return (
    <div
      style={{ backgroundColor: "var(--navy)" }}
      className="hidden md:block text-white py-2"
    >
      <div className="container-wide flex items-center justify-between">
        <span className="text-xs font-medium text-white/70 tracking-wide">
          Serving {SITE_CONFIG.territory}
        </span>
        <div className="flex items-center gap-6">
          <a
            href={SITE_CONFIG.phoneTel}
            onClick={Analytics.desktopPhoneClick}
            className="flex items-center gap-2 text-sm font-semibold text-white hover:text-[var(--aqua)] transition-colors"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            {SITE_CONFIG.phone}
          </a>
          <a
            href={SITE_CONFIG.emailLink}
            onClick={Analytics.emailClick}
            className="text-xs text-white/70 hover:text-white transition-colors"
          >
            {SITE_CONFIG.email}
          </a>
        </div>
      </div>
    </div>
  );
}
