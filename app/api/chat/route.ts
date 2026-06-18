import { NextRequest, NextResponse } from "next/server";
import { SITE_CONFIG, OWNER_INFO, LOCATIONS } from "@/app/lib/siteData";

// Rate limiting store (in-memory; resets on server restarts)
const chatRateLimitMap = new Map<string, number[]>();
const RATE_LIMIT = 10; // max chat turns
const RATE_WINDOW = 60 * 1000; // 1 minute window

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (chatRateLimitMap.get(ip) || []).filter(
    (t) => now - t < RATE_WINDOW
  );
  if (timestamps.length >= RATE_LIMIT) return true;
  timestamps.push(now);
  chatRateLimitMap.set(ip, timestamps);
  return false;
}

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many messages. Please wait a moment before sending another." },
      { status: 429 }
    );
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.warn("[API Chat] GEMINI_API_KEY is not configured. Falling back to client-side FAQ matching.");
    return NextResponse.json(
      { error: "Chat service is not configured with an API key." },
      { status: 501 } // 501 Not Implemented (triggers local fallback)
    );
  }

  let body: { messages?: { role: "user" | "assistant"; content: string }[] };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (!body.messages || !Array.isArray(body.messages) || body.messages.length === 0) {
    return NextResponse.json({ error: "Missing or invalid messages array." }, { status: 400 });
  }

  // Format messages for Gemini API
  // Gemini expects: role: "user" or "model", parts: [{ text: string }]
  const contents = body.messages.map((m) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: m.content }],
  }));

  // Compile detailed system instructions using live site data
  const systemInstruction = `
You are the official AI Assistant for VIP Impact Windows & Doors.
Your goal is to answer questions about our services, products, locations, and processes honestly and professionally.

Corporate Info:
- Business Name: ${SITE_CONFIG.businessName}
- Phone: ${SITE_CONFIG.phone} (or (833) PICK-VIP / (833) 742-5847)
- Email: ${SITE_CONFIG.email}
- Territory: ${SITE_CONFIG.territory}
- License Number: ${SITE_CONFIG.licenseNumber}
- Founder & Owner: ${OWNER_INFO.name} (${OWNER_INFO.title})
- Owner Bio: ${OWNER_INFO.bio}

Service Areas:
We primarily serve Miami-Dade County and Broward County, along with select cities in Palm Beach County (such as Boca Raton and West Palm Beach).

Our Products & Services:
1. Impact Windows: Single-Hung, Double-Hung, Casement, Sliding, Picture/Fixed, and Specialty Shape windows.
2. Impact Doors: Entry Doors, Patio Doors, French Doors, and heavy-duty configurations.
3. Sliding Glass Doors: Multi-panel impact sliding glass doors for patios and large openings.
4. Commercial & Storefront: Heavy-duty impact storefront systems for local business properties.

Frequently Asked Questions (FAQ Reference):
${LOCATIONS.map((loc) => `
FAQs for ${loc.city}:
${loc.faqs.map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n")}
`).join("\n\n")}

Tone & Behavior Guidelines:
1. Be helpful, professional, polite, and boutique. Answer clearly and keep responses concise (1-3 sentences is usually best, unless answering a complex question).
2. Speak on behalf of VIP Impact Windows & Doors, representing Mark Rosengarten and the team.
3. Stick strictly to facts. Do not invent answers. If a question is outside our scope or database (e.g. weather forecasting, unrelated topics), politely explain that you can only answer questions regarding VIP Impact Windows & Doors, and invite them to call us at ${SITE_CONFIG.phone}.
4. If the user mentions getting a quote, pricing, or an inspection, invite them to request a free VIP Estimate by clicking the "Get My VIP Estimate" button or calling us at ${SITE_CONFIG.phone}.
`;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents,
          systemInstruction: {
            parts: [{ text: systemInstruction }],
          },
          generationConfig: {
            temperature: 0.3,
            maxOutputTokens: 600,
          },
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("[API Chat] Gemini API error response:", errorText);
      return NextResponse.json({ error: "Failed to query Gemini API." }, { status: 502 });
    }

    const resJson = await response.json();
    const reply = resJson.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!reply) {
      console.error("[API Chat] Invalid response structure from Gemini API:", resJson);
      return NextResponse.json({ error: "Invalid response from Gemini API." }, { status: 502 });
    }

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("[API Chat] Network or execution error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
