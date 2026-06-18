"use client";
import Link from "next/link";
import { Analytics } from "@/app/lib/analytics";

export default function FloatingMessageButton() {
  return (
    <div className="fixed z-50 bottom-24 lg:bottom-8 right-4 lg:right-8 flex flex-col items-end">
      {/* Tooltip (optional, can be hovered) */}
      <div className="hidden lg:block absolute bottom-full right-0 mb-3 bg-white text-[var(--navy)] text-xs font-semibold px-3 py-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        Message Us
      </div>
      
      <Link
        href="/contact"
        onClick={() => Analytics.heroCTAClick()}
        className="group flex items-center justify-center w-14 h-14 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:scale-105 transition-transform duration-300"
        style={{ backgroundColor: "var(--aqua)", color: "var(--navy)" }}
        aria-label="Send us a message"
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      </Link>
    </div>
  );
}
