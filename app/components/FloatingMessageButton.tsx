"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { SITE_CONFIG, LOCATIONS } from "@/app/lib/siteData";
import { Analytics } from "@/app/lib/analytics";

interface Message {
  role: "user" | "assistant";
  content: string;
  showCTAs?: boolean;
}

// Flat list of all FAQ items from siteData locations for client-side fallback matching
const ALL_FAQS = LOCATIONS.flatMap((loc) =>
  loc.faqs.map((faq) => ({
    q: faq.q,
    a: faq.a,
    city: loc.city,
  }))
);

// Simple token-based matching algorithm
function findBestFaqMatch(userQuery: string): { q: string; a: string; score: number } | null {
  const queryWords = userQuery
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .split(/\s+/)
    .filter((w) => w.length > 2); // ignore short words

  if (queryWords.length === 0) return null;

  let bestMatch: { q: string; a: string; score: number } | null = null;

  for (const faq of ALL_FAQS) {
    const questionWords = faq.q
      .toLowerCase()
      .replace(/[^\w\s]/g, "")
      .split(/\s+/);

    let overlapCount = 0;
    for (const qw of queryWords) {
      if (questionWords.includes(qw)) {
        overlapCount++;
      }
    }

    const score = overlapCount / Math.max(queryWords.length, 1);
    if (score > 0 && (!bestMatch || score > bestMatch.score)) {
      bestMatch = { q: faq.q, a: faq.a, score };
    }
  }

  // Require matching score threshold of 0.2 to avoid weak random matches
  if (bestMatch && bestMatch.score >= 0.2) {
    return bestMatch;
  }

  return null;
}

export default function FloatingMessageButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm the VIP Assistant. How can I help you today with your impact window & door questions?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat log when messages or loading state changes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMsg = text.trim();
    const newUserMessage: Message = { role: "user", content: userMsg };
    setMessages((prev) => [...prev, newUserMessage]);
    setInput("");
    setLoading(true);

    const updatedHistory = [...messages, newUserMessage];

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedHistory }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.reply) {
          setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
          setLoading(false);
          return;
        }
      }

      // If API responds with an error (e.g. rate limit, missing key), run local matching fallback
      triggerLocalFallback(userMsg);
    } catch (error) {
      console.warn("[Chat Widget] API unavailable, using local matching:", error);
      triggerLocalFallback(userMsg);
    }
  };

  const triggerLocalFallback = (query: string) => {
    // Artificial delay to make bot feel "thoughtful"
    setTimeout(() => {
      const match = findBestFaqMatch(query);
      if (match) {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: match.a,
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: "I couldn't find a direct answer to that specific question in our FAQ database, but I would be glad to connect you with our team! You can get a free estimate or call Mark Rosengarten directly.",
            showCTAs: true,
          },
        ]);
      }
      setLoading(false);
    }, 600);
  };

  const handleSuggestionClick = (suggestion: string) => {
    Analytics.heroCTAClick(); // Track interactive event
    handleSendMessage(suggestion);
  };

  const initialSuggestions = [
    "Are your windows hurricane-rated?",
    "Do you serve Boca Raton?",
    "Who is the owner?",
    "How do I request an estimate?",
  ];

  return (
    <>
      {/* Self-contained styling for bouncing dot typing indicator */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounce-dot {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .dot-bounce {
          animation: bounce-dot 1s infinite ease-in-out;
        }
        .dot-bounce:nth-child(2) {
          animation-delay: 0.2s;
        }
        .dot-bounce:nth-child(3) {
          animation-delay: 0.4s;
        }
      `}} />

      <div className="fixed z-50 bottom-24 lg:bottom-8 right-4 lg:right-8 flex flex-col items-end">
        {/* Toggle Button */}
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            Analytics.heroCTAClick();
          }}
          className="group flex items-center justify-center w-14 h-14 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.15)] hover:scale-105 transition-transform duration-300 cursor-pointer"
          style={{ backgroundColor: "var(--aqua)", color: "var(--navy)" }}
          aria-label={isOpen ? "Close assistant" : "Chat with VIP Assistant"}
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
          )}
        </button>

        {/* Chat Window Panel */}
        {isOpen && (
          <div className="absolute bottom-18 right-0 w-[360px] max-w-[calc(100vw-32px)] h-[480px] rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.25)] border border-black/10 flex flex-col bg-white overflow-hidden transition-all duration-300 scale-100 origin-bottom-right">
            {/* Header */}
            <div className="px-4 py-3 flex items-center justify-between" style={{ backgroundColor: "var(--navy)", color: "var(--white)" }}>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <div>
                  <h4 className="text-sm font-semibold tracking-wider font-display">VIP AI Assistant</h4>
                  <p className="text-[10px] text-white/60">Typically replies instantly</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white transition-colors p-1"
                aria-label="Minimize chat"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 flex flex-col">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}
                >
                  <div
                    className={`px-4 py-2.5 text-sm leading-relaxed max-w-[85%] ${
                      msg.role === "user"
                        ? "rounded-2xl rounded-tr-none text-white"
                        : "rounded-2xl rounded-tl-none text-[var(--navy)]"
                    }`}
                    style={{
                      backgroundColor: msg.role === "user" ? "var(--navy)" : "var(--sand)",
                      opacity: msg.role === "assistant" ? 0.95 : 1,
                    }}
                  >
                    <p className="whitespace-pre-line">{msg.content}</p>

                    {/* Quick Call to Actions for Fallback */}
                    {msg.showCTAs && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        <Link
                          href="/contact"
                          onClick={() => setIsOpen(false)}
                          className="px-3 py-1.5 rounded bg-[var(--aqua)] hover:bg-[var(--aqua-light)] text-white font-semibold text-xs shadow-sm transition-all duration-200"
                        >
                          Request Estimate
                        </Link>
                        <a
                          href={SITE_CONFIG.phoneTel}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded bg-white text-[var(--navy)] font-semibold text-xs border border-[var(--navy)]/10 hover:bg-gray-100 transition-colors shadow-sm"
                        >
                          Call (833) PICK-VIP
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {loading && (
                <div className="flex items-start">
                  <div className="px-4 py-3 rounded-2xl rounded-tl-none flex items-center gap-1.5" style={{ backgroundColor: "var(--sand)" }}>
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--navy)]/50 dot-bounce" />
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--navy)]/50 dot-bounce" />
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--navy)]/50 dot-bounce" />
                  </div>
                </div>
              )}

              {/* Render initial chips only if we only have the welcome message */}
              {messages.length === 1 && !loading && (
                <div className="pt-2 space-y-2">
                  <p className="text-[10px] uppercase tracking-wider text-[var(--text-light)] font-semibold mb-2">Suggested Questions</p>
                  <div className="flex flex-col gap-2 items-start">
                    {initialSuggestions.map((suggestion, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="text-left text-xs px-3.5 py-2 rounded-full border border-black/10 hover:border-[var(--aqua)] hover:bg-white text-[var(--navy)] font-medium transition-all duration-200 cursor-pointer shadow-sm bg-white/50"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Footer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(input);
              }}
              className="p-3 border-t border-black/5 bg-white flex gap-2 items-center"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                disabled={loading}
                className="flex-1 px-4 py-2 text-sm border border-black/10 rounded-full focus:outline-none focus:ring-2 focus:ring-[var(--aqua)] bg-gray-50 text-[var(--navy)] disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="w-9 h-9 rounded-full flex items-center justify-center text-white transition-all duration-200 cursor-pointer disabled:opacity-40 disabled:cursor-default"
                style={{ backgroundColor: "var(--aqua)" }}
                aria-label="Send message"
              >
                <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
