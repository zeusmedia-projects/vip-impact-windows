import { NextRequest, NextResponse } from "next/server";

// Rate limiting store (in-memory; use Redis in production)
const submissionMap = new Map<string, number[]>();
const RATE_LIMIT = 3; // max submissions
const RATE_WINDOW = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (submissionMap.get(ip) || []).filter(
    (t) => now - t < RATE_WINDOW
  );
  if (timestamps.length >= RATE_LIMIT) return true;
  timestamps.push(now);
  submissionMap.set(ip, timestamps);
  return false;
}

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later or call us directly." },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot check
  if (body.honeypot) {
    // Silently succeed to fool bots
    return NextResponse.json({ success: true });
  }

  // Validate required fields
  const required = ["name", "phone", "email", "zip"];
  for (const field of required) {
    if (!body[field] || typeof body[field] !== "string" || !body[field]) {
      return NextResponse.json(
        { error: `Missing required field: ${field}` },
        { status: 400 }
      );
    }
  }

  // Email format check
  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(body.email as string)) {
    return NextResponse.json({ error: "Invalid email format." }, { status: 400 });
  }

  // File size check (if file upload is later added)
  // Max 10MB per file, images/PDFs only

  // TODO: Connect to CRM or webhook
  // Example: POST to HubSpot, Zapier, or your CRM endpoint
  // const crmPayload = {
  //   firstname: body.name,
  //   phone: body.phone,
  //   email: body.email,
  //   zip: body.zip,
  //   property_type: body.propertyType,
  //   project_interest: body.projectInterest,
  //   message: body.message,
  //   source_url: body.source,
  //   referrer: body.referrer,
  //   utm_params: body.utmParams,
  // };
  // const crmRes = await fetch(process.env.CRM_WEBHOOK_URL!, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(crmPayload),
  // });

  // TODO: Send notification email
  // Use Resend, SendGrid, or Postmark to notify the team

  console.log("[VIP Estimate Submission]", {
    name: body.name,
    phone: body.phone,
    email: body.email,
    zip: body.zip,
    propertyType: body.propertyType,
    projectInterest: body.projectInterest,
    timeline: body.timeline,
    openings: body.openings,
    address: body.address,
    source: body.source,
    timestamp: new Date().toISOString(),
  });

  return NextResponse.json({ success: true });
}
