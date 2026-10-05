# HostPilot — Production Web & Digital Concierge Studio

Official production platform for **HostPilot** (https://hostpilot.online), a digital agency establishing high-performance websites, custom web applications, enterprise platforms, UI/UX systems, and QR-powered AI digital concierges for luxury vacation rentals.

---

## 1. Quick Start & Commands

```bash
# Install dependencies
npm install

# Start development server on port 3000
npm run dev

# Run TypeScript typechecks & linter
npm run lint

# Compile production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 2. Environment Variables

Copy `.env.example` to `.env.local` or configure in your deployment hosting dashboard (e.g. Vercel):

```bash
VITE_SITE_URL="https://hostpilot.online"
NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"          # Google Analytics 4 (only activated after consent)
RESEND_API_KEY="re_..."                   # Optional email forwarding
CONTACT_TO_EMAIL="Gethostpilot@gmail.com" # Intake destination email
```

---

## 3. How to Update Content (Config-Driven)

All content, pricing, services, and projects are strictly type-safe and config-driven:

### A. Updating Services or "What's Included"
Edit `/src/config/services.ts`. Every service requires:
- `slug`: Route identifier (`/services/[slug]`)
- `title`: Display name
- `oneLineOutcome`: 1-line client benefit
- `imageAlt`: Accessible description (missing alt fails compilation)
- `included`: Array of bullet deliverables

### B. Adding a New Project or Case Study
Edit `/src/config/work.ts`. Add a new item to `projectsConfig`:
```typescript
{
  id: 'my-new-client',
  slug: 'my-new-client',
  name: 'Client Brand Name',
  category: 'website', // 'website' | 'webapp' | 'qr-concierge'
  tag: 'Custom Website',
  location: 'Austin, TX',
  headline: 'High-Converting Web Platform for Solar Energy',
  description: 'Sub-second load times and custom quote calculator.',
  imageAlt: 'Laptop and phone displaying new client website',
  caseStudy: {
    client: 'Client Inc',
    role: 'Full-Stack Engineering & UX',
    timeline: '3 Weeks',
    challenge: '...',
    solution: '...',
    results: ['+40% Form Submissions', 'Lighthouse 98/100'],
    features: ['Custom lead funnel', 'PostgreSQL database']
  }
}
```

### C. Adding a Blog Post
Edit `/src/content/blogData.ts`. Add a new post:
- Set `published: true` to make it live on `/blog` and in `/sitemap.xml`.
- Set `published: false` to keep it as an editorial draft.
- Provide a `toc` array for automatic sticky table-of-contents generation.

### D. Setting Prices
By default, prices are hidden and render as `"Custom quote"`. To set a public starting price, simply set `startingPrice: "$3,500"` in `/src/config/services.ts` or add `price: "$2,400"` to `/src/pages/PricingPage.tsx`.

### E. Adding Team Members
Edit `/src/config/team.ts`. Add a new member object with `name`, `role`, `bio`, and `linkedin`.

---

## 4. Architecture & Technical Rules

- **Zero-Pill Discipline:** Clean unboxed typographic metadata with `·` dividers.
- **Color Tokens:**
  - Royal Blue: `#0B4FE3`
  - Navy: `#0B1B33` (Footer: `#101B30`)
  - Tint: `#EAF1FF`
  - Soft Background: `#F5F8FC`
- **Responsive Baseline:** Desktop 1440px container, tablet, and mobile 390px viewports.
- **Accessibility:** WCAG 2.2 AA compliant focus rings, contrast $\ge 4.5:1$, aria labels, skip links, and `prefers-reduced-motion` fallbacks.
