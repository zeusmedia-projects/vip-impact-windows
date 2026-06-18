# TODO: Client-Supplied Content & Verifications

This file lists every item that requires direct confirmation or content from the client before the website is fully production-ready.

**Do not publish the site to production until all items marked [REQUIRED] are resolved.**

Items marked [OPTIONAL] improve the site but are not blocking.

---

## BRAND & IDENTITY

- [ ] **[REQUIRED]** Final logo files (SVG preferred, plus PNG fallback at 2x resolution)
- [ ] **[OPTIONAL]** Confirm color palette matches or revise proposed palette (Navy #102634, Aqua #48B7C7, Champagne #D5B46D)
- [ ] **[OPTIONAL]** Preferred tagline — current: "Get the VIP Treatment Without the VIP Price."
- [ ] **[REQUIRED]** Social media profile URLs (Facebook, Instagram, LinkedIn, Google Business, etc.) — currently set to "#"

---

## OWNER & TEAM

- [ ] **[REQUIRED]** Owner's full name (used on About page, Owner Story section, schema markup)
- [ ] **[REQUIRED]** Owner biography / personal story (1–3 paragraphs, personal tone) — used on About page
- [ ] **[OPTIONAL]** Owner portrait photo (professional, or authentic high-quality candid)
- [ ] **[OPTIONAL]** Team photos (if applicable)
- [ ] **[OPTIONAL]** Owner or team video (used in Owner Story section on homepage and About page)
- [ ] **[OPTIONAL]** Years in business (do not display until confirmed)

---

## LICENSING & CREDENTIALS

- [ ] **[REQUIRED]** Florida contractor license number — currently displays as placeholder in footer
- [ ] **[OPTIONAL]** Insurance certificate details (if to be displayed)
- [ ] **[OPTIONAL]** Manufacturer certifications or authorized-dealer relationships (e.g., PGT, CGI, Andersen, etc.)
- [ ] **[OPTIONAL]** Any verified industry affiliations or memberships

---

## CONTACT & SCHEDULING

- [ ] **[REQUIRED]** Confirm phone number is correct: (833) PICK-VIP / tel:+18337425847
- [ ] **[REQUIRED]** Confirm email is correct: info@myvipwindows.com
- [ ] **[OPTIONAL]** Business hours (to be added to utility bar and contact page)
- [ ] **[OPTIONAL]** Online scheduling link (Calendly or equivalent) for consultation bookings
- [ ] **[OPTIONAL]** Physical showroom or office address — **do not display** unless it is a customer-facing location

---

## PHOTOGRAPHY

All current images are CSS or placeholder. Client must supply:

- [ ] **[REQUIRED]** Hero image — South Florida home or condo exterior with impact windows (not a mansion)
- [ ] **[REQUIRED]** 6–12 completed project photos for Projects gallery
- [ ] **[REQUIRED]** Owner portrait (About page)
- [ ] **[OPTIONAL]** Before/after project pairs
- [ ] **[OPTIONAL]** Installation process photos (measuring, installing, finishing)
- [ ] **[OPTIONAL]** Close-up product detail shots (frame corners, hardware, glass)
- [ ] **[OPTIONAL]** Team-at-work photos
- [ ] **[OPTIONAL]** Customer interaction or walkthrough photos
- [ ] **[OPTIONAL]** Aerial or neighborhood context shots for location pages

**Photography checklist by page:**
- Homepage hero: 1 image
- VIP Difference section: 1 image
- Products page: 1 per product type (7 total)
- Residential page: 1 per property type (6 total)
- Commercial page: 2 images
- About page: owner portrait + optional team
- Projects gallery: 9+ images (more preferred)
- Location pages: 1 placeholder each (7 total)

---

## TESTIMONIALS & REVIEWS

- [ ] **[REQUIRED]** Verified customer reviews — do not display fabricated testimonials
- [ ] **[OPTIONAL]** Review platform links (Google, HomeAdvisor, Houzz, Facebook, BBB, etc.)
- [ ] **[OPTIONAL]** Permission from reviewed customers to use their names
- [ ] **[OPTIONAL]** Review count (e.g., "4.9 stars across 38 Google reviews") — verify before displaying

---

## SERVICES & SCOPE

- [ ] **[REQUIRED]** Confirm exact product lines carried (brands, series, frame types)
- [ ] **[REQUIRED]** Confirm whether permit handling is included in VIP service (currently omitted)
- [ ] **[REQUIRED]** Confirm whether HOA/condo coordination is offered (currently noted as "unverified")
- [ ] **[REQUIRED]** Confirm Palm Beach County service limitations (currently: Boca Raton + West Palm Beach described as "select projects")
- [ ] **[OPTIONAL]** Confirm financing availability (currently omitted from site)
- [ ] **[OPTIONAL]** Confirm warranty terms (manufacturer vs. labor) — do not display until confirmed
- [ ] **[OPTIONAL]** Confirm whether inspection coordination is offered
- [ ] **[OPTIONAL]** Confirm rebate assistance availability
- [ ] **[OPTIONAL]** Confirm insurance documentation assistance availability

---

## ANALYTICS & TRACKING

- [ ] **[REQUIRED]** Google Analytics 4 Measurement ID (format: G-XXXXXXXXXX) — add to `app/layout.tsx`
- [ ] **[OPTIONAL]** Google Ads Conversion ID and Conversion Label
- [ ] **[OPTIONAL]** Meta Pixel ID
- [ ] **[OPTIONAL]** Call tracking number (for PPC campaigns — swap primary phone for tracked number)
- [ ] **[OPTIONAL]** CallRail or similar call tracking configuration

---

## FORM & CRM

- [ ] **[REQUIRED]** Destination email address for form submissions (if not using CRM)
- [ ] **[OPTIONAL]** CRM webhook URL — add to `app/api/estimate/route.ts` (marked with TODO)
- [ ] **[OPTIONAL]** Email service provider (Resend, SendGrid, Postmark) API key
- [ ] **[OPTIONAL]** Auto-responder email content (what the customer receives after submitting)
- [ ] **[OPTIONAL]** Internal notification email template

---

## LEGAL

- [ ] **[OPTIONAL]** Review and approve Privacy Policy content
- [ ] **[OPTIONAL]** Review and approve Terms of Service content
- [ ] **[REQUIRED]** Confirm SMS consent language is accurate and compliant with TCPA
- [ ] **[OPTIONAL]** Confirm opt-out process aligns with SMS marketing compliance requirements

---

## DOMAIN & HOSTING

- [ ] **[REQUIRED]** Confirm production domain: myvipwindows.com
- [ ] **[OPTIONAL]** Confirm www vs. non-www canonical preference (currently set to www)
- [ ] **[OPTIONAL]** Confirm hosting platform (Vercel recommended for Next.js)
- [ ] **[OPTIONAL]** Confirm environment variables are configured in production environment

---

## ENVIRONMENT VARIABLES REQUIRED FOR PRODUCTION

Create a `.env.local` file with the following (do not commit to version control):

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GADS_ID=AW-XXXXXXXXX
FORM_SUBMIT_EMAIL=info@myvipwindows.com
CRM_WEBHOOK_URL=https://your-crm.com/webhook
EMAIL_API_KEY=your-email-provider-key
```

---

## CONTENT ITEMS EMBEDDED IN CODE

The following items are marked with `// TODO:` in the source files:

| File | Item |
|------|------|
| `app/layout.tsx` | GA4 script (replace placeholder measurement ID) |
| `app/components/SiteFooter.tsx` | Contractor license number |
| `app/components/SiteFooter.tsx` | Social media URLs |
| `app/api/estimate/route.ts` | CRM webhook URL |
| `app/api/estimate/route.ts` | Email service integration |
| `app/about/page.tsx` | Owner name, biography, portrait |
| `app/page.tsx` | Owner video embed |
| `app/projects/page.tsx` | Real project photos + verified reviews |
| `app/service-areas/[slug]/page.tsx` | Location-specific project photos |
| `app/lib/siteData.ts` | Social links (currently `#`) |

---

*Last updated: Website initial build — pending client review.*
