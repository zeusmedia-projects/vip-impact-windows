# VIP Impact Windows & Doors — Website

Production-ready Next.js website for **VIP Impact Windows & Doors LLC**, a boutique South Florida impact window and door company.

**Live domain:** https://www.myvipwindows.com  
**Phone:** (833) PICK-VIP — `tel:+18337425847`  
**Email:** info@myvipwindows.com

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + CSS variables (design tokens in `globals.css`)
- **Fonts:** DM Serif Display + Inter (Google Fonts, via `next/font`)
- **Forms:** React multi-step form with server-side API route
- **SEO:** Metadata API, JSON-LD structured data, dynamic sitemap, robots.txt

---

## Project Structure

```
app/
├── layout.tsx                  # Root layout, nav, footer, schema, analytics
├── globals.css                 # Design tokens, typography, utility classes
├── page.tsx                    # Homepage
├── sitemap.ts                  # Auto-generated XML sitemap
├── robots.ts                   # robots.txt
│
├── components/
│   ├── UtilityBar.tsx          # Top bar (territory + phone)
│   ├── SiteHeader.tsx          # Sticky nav with mobile hamburger
│   ├── SiteFooter.tsx          # 4-column footer
│   ├── StickyMobileActions.tsx # Fixed bottom bar (Call + Estimate)
│   ├── Breadcrumbs.tsx         # With BreadcrumbList schema
│   ├── FAQAccordion.tsx        # With FAQPage schema
│   └── MultiStepEstimateForm.tsx # 4-step estimate form
│
├── lib/
│   ├── siteData.ts             # All editable content: services, locations, config
│   └── analytics.ts            # Centralized analytics event tracking
│
├── api/
│   └── estimate/route.ts       # Form submission handler (rate limiting, validation)
│
├── about/page.tsx
├── commercial/page.tsx
├── contact/page.tsx
├── impact-windows-doors/page.tsx
├── our-process/page.tsx
├── privacy/page.tsx
├── projects/page.tsx
├── residential/page.tsx
├── service-areas/
│   ├── page.tsx                # Service areas hub
│   └── [slug]/page.tsx         # Dynamic location pages (7 cities)
├── sms-opt-out/page.tsx
└── terms/page.tsx
```

---

## Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm or yarn

### Install dependencies
```bash
cd vip-impact-windows
npm install
```

### Run locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### Build for production
```bash
npm run build
npm start
```

### Type check
```bash
npx tsc --noEmit
```

---

## Environment Variables

Create a `.env.local` file in the project root. **Never commit this file.**

```env
# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GADS_ID=AW-XXXXXXXXX

# Form handling
FORM_SUBMIT_EMAIL=info@myvipwindows.com
CRM_WEBHOOK_URL=https://your-crm.com/webhook/endpoint
EMAIL_API_KEY=your-sendgrid-or-resend-api-key
```

---

## How to Edit Content

### Global contact info, phone, email, territory
Edit `app/lib/siteData.ts` → `SITE_CONFIG` object at the top:

```ts
export const SITE_CONFIG = {
  phone: '(833) PICK-VIP',
  phoneHref: 'tel:+18337425847',
  email: 'info@myvipwindows.com',
  territory: 'Miami-Dade, Broward & Select Palm Beach County',
  ...
}
```

### Service cards (products/services)
Edit `app/lib/siteData.ts` → `SERVICES` array.  
Each service has: `id`, `title`, `description`, `href`, `icon`, `image`.

### Process steps
Edit `app/lib/siteData.ts` → `PROCESS_STEPS` array.

### Benefit tiles
Edit `app/lib/siteData.ts` → `BENEFITS` array.

### Social media links
Edit `app/lib/siteData.ts` → `SITE_CONFIG.social` object.  
Replace `'#'` with actual profile URLs.

---

## How to Edit Location Pages

All location content lives in `app/lib/siteData.ts` → `LOCATIONS` array.

Each location object contains:
- `slug` — URL slug (must match folder name in `service-areas/`)
- `city`, `state` — display name
- `metaTitle`, `metaDescription` — unique SEO metadata
- `h1` — unique page headline
- `intro` — unique introductory paragraph (1–2 sentences)
- `propertyFocus` — property types common in that city
- `localConsiderations` — unique local angle (3–4 sentences)
- `faqs` — array of unique Q&A pairs
- `nearby` — array of 2–3 nearby city slugs for internal linking

To edit a city's content, find its entry in the `LOCATIONS` array and update the relevant fields.

### How to add a new location page

1. Add a new entry to the `LOCATIONS` array in `siteData.ts`
2. The dynamic route `app/service-areas/[slug]/page.tsx` will automatically generate the page
3. Add the new slug to `app/sitemap.ts` → `locationSlugs` array
4. Add a link to `app/service-areas/page.tsx` hub page

---

## How to Replace Placeholder Images

All images are currently CSS-rendered placeholders. To replace with real photography:

1. Add images to `public/images/` (organized by section, e.g., `public/images/projects/`)
2. Replace placeholder `<div>` elements with Next.js `<Image>` components:

```tsx
import Image from 'next/image'

// Replace placeholder div with:
<Image
  src="/images/projects/miami-beach-sliding-doors.jpg"
  alt="Impact sliding glass doors installed in Miami Beach condo"
  width={800}
  height={600}
  className="w-full h-full object-cover"
/>
```

3. Use descriptive filenames and alt text for SEO
4. Recommended formats: WebP with JPEG fallback
5. Recommended sizes: hero 1920×1080, cards 800×600, thumbnails 400×300

---

## How to Connect the Estimate Form

### Option A: Email only
In `app/api/estimate/route.ts`, uncomment and configure the email section.  
Set `FORM_SUBMIT_EMAIL` in `.env.local`.

Add a transactional email provider:
```bash
npm install @sendgrid/mail
# or
npm install resend
```

### Option B: CRM webhook
In `app/api/estimate/route.ts`, set `CRM_WEBHOOK_URL` in `.env.local`.  
The route will POST the form payload as JSON to your CRM endpoint.

### Option C: Both
Uncomment both sections in the route handler to notify via email and create a CRM record.

---

## How to Configure Analytics

### Google Analytics 4
1. Get your Measurement ID from Google Analytics (format: `G-XXXXXXXXXX`)
2. Add to `.env.local`: `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`
3. The GA script is loaded in `app/layout.tsx`

### Google Ads Conversion Tracking
1. Get your Conversion ID from Google Ads
2. Add to `.env.local`: `NEXT_PUBLIC_GADS_ID=AW-XXXXXXXXX`
3. Fire conversion events using `trackFormSubmit()` from `app/lib/analytics.ts`

### Analytics Event Map

All events are defined in `app/lib/analytics.ts`:

| Event | Trigger | Function |
|-------|---------|----------|
| `header_cta_click` | Header "Get My VIP Estimate" click | `trackHeaderCTAClick()` |
| `hero_cta_click` | Hero CTA click | `trackHeroCTAClick()` |
| `mobile_call_click` | Mobile bottom bar Call tap | `trackMobileCallClick()` |
| `desktop_phone_click` | Desktop phone number click | `trackDesktopPhoneClick()` |
| `form_start` | First form field interaction | `trackFormStart()` |
| `form_step_complete` | Each step completion | `trackFormStepComplete(step)` |
| `form_submit` | Successful form submission | `trackFormSubmit()` |
| `email_click` | Email link click | `trackEmailClick()` |
| `location_cta_click` | Location page CTA click | `trackLocationCTAClick(city)` |
| `service_card_click` | Service card click | `trackServiceCardClick(service)` |
| `video_play` | Owner video play | `trackVideoPlay()` |
| `gallery_interaction` | Gallery filter or image click | `trackGalleryInteraction()` |

---

## Deployment

### Recommended: Vercel
1. Push to GitHub
2. Import repo in Vercel dashboard
3. Add all environment variables in Vercel project settings
4. Deploy

### Other platforms
The build output is standard Next.js. Any platform supporting Node.js 18+ works.  
Run `npm run build` then `npm start`, or use `next export` for static if needed.

---

## Pending Client Verification

See `TODO_CLIENT_INPUTS.md` for the complete list of items requiring client input before the site goes live. Key blocking items:

- Owner name and biography (About page)
- Florida contractor license number (Footer)
- Project photography (all gallery/placeholder sections)
- Verified customer reviews (Projects, location pages)
- Google Analytics ID
- Form submission email or CRM webhook
- Social media profile URLs

---

## QA Checklist

Before going live, verify:

- [ ] No lorem ipsum anywhere
- [ ] No broken nav links
- [ ] No fake testimonials or statistics
- [ ] Phone links use `tel:+18337425847`
- [ ] Email links use `info@myvipwindows.com`
- [ ] Every page has unique `<title>` and meta description
- [ ] Location pages have breadcrumbs
- [ ] Forms work on mobile and desktop
- [ ] Mobile bottom bar doesn't cover content
- [ ] Contractor license number is filled in
- [ ] Social links point to real profiles
- [ ] GA4 ID is configured
- [ ] Form submission route is connected
- [ ] All images have descriptive alt text
- [ ] No horizontal scroll on mobile
- [ ] Build passes: `npm run build`

---

*Built by Zeus Media for VIP Impact Windows & Doors LLC.*
