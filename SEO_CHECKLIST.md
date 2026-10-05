# HostPilot Production SEO & Launch Checklist

This checklist documents all critical steps for deploying **https://hostpilot.online** to production, verifying schema markup, indexing on Google and Bing, and monitoring Core Web Vitals.

---

## 1. Domain, DNS & Edge Routing
- [ ] **Vercel Domain Configuration:**
  - Add `hostpilot.online` as the Primary Production domain.
  - Add `www.hostpilot.online` configured with an automatic 301 Permanent Redirect to `https://hostpilot.online`.
  - Set DNS A record: `76.76.21.21` (or Vercel apex IP).
  - Set DNS CNAME for www: `cname.vercel-dns.com`.
  - Verify SSL certificate generation (Let's Encrypt / Vercel Edge).
- [ ] **Legacy Domain Deprecation:**
  - In `hostpilot-gold.vercel.app`, set HTTP response header `X-Robots-Tag: noindex, nofollow` or configure an edge 301 redirect rule to `https://hostpilot.online/` to prevent duplicate indexing.
- [ ] **HTTPS & Trailing Slash Normalization:**
  - Strict-Transport-Security (HSTS) with `max-age=63072000; includeSubDomains; preload`.
  - Canonical trailing slash consistency (all URLs point to standard non-trailing or trailing slash equivalents).

---

## 2. Search Console & Webmaster Indexing
- [ ] **Google Search Console (GSC):**
  - Add Domain Property via DNS TXT record (`hostpilot.online`).
  - Submit sitemap: `https://hostpilot.online/sitemap.xml`.
  - Use URL Inspection tool to request indexing for priority URLs:
    - `/` (Home)
    - `/services/custom-web-development`
    - `/services/webapp-development`
    - `/services/enterprise-applications`
    - `/services/ui-ux-design`
    - `/services/qr-concierge`
    - `/demos`
    - `/work`
    - `/pricing`
    - `/faq`
    - `/blog/how-a-qr-code-concierge-cuts-guest-messages`
    - `/blog/custom-website-vs-template-small-business`
    - `/blog/what-to-include-in-a-digital-guidebook-for-airbnb`
- [ ] **Bing Webmaster Tools:**
  - Authenticate using GSC one-click import.
  - Verify sitemap pickup and crawl status.

---

## 3. Schema.org & Rich Results Validation
Test the following live URLs using [Google Rich Results Test](https://search.google.com/test/rich-results) and [Schema.org Validator](https://validator.schema.org/):
- [ ] **Sitewide:**
  - `Organization` (name, URL, logo, contactPoint phone and email, foundingDate).
  - `WebSite` (name, URL, publisher).
- [ ] **Service Pages:**
  - `Service` schema on `/services/*` with serviceType and provider linkage.
- [ ] **FAQ Pages:**
  - `FAQPage` schema on `/faq` and `/` matching the visible accordion text verbatim.
- [ ] **Breadcrumbs:**
  - `BreadcrumbList` on all subpages with sequential position indexing.
- [ ] **Blog Posts:**
  - `BlogPosting` schema on `/blog/*` with headline, datePublished, author, and publisher.
- [ ] **Case Studies:**
  - `CreativeWork` schema on `/work/*`.

---

## 4. Performance & Core Web Vitals Audit
- [ ] **Lighthouse Mobile Score Targets:**
  - Performance: $\ge 90$
  - Accessibility: $\ge 90$ (Target: 100)
  - Best Practices: $\ge 90$
  - SEO: $\ge 90$ (Target: 100)
- [ ] **Metrics:**
  - Largest Contentful Paint (LCP) $\le 2.5\text{s}$
  - Cumulative Layout Shift (CLS) $\le 0.1$
  - Interaction to Next Paint (INP) $\le 200\text{ms}$

---

## 5. Local & Off-Page Authority
- [ ] **Google Business Profile:**
  - Create and verify a Google Business Profile if serving designated service areas.
  - Match name ("HostPilot"), primary phone (`+91 6370839897`), and website.
- [ ] **Authority Profiles:**
  - Create LinkedIn Company Page (`linkedin.com/company/hostpilot`).
  - Set up GitHub organization.
  - Create agency profiles on Clutch, GoodFirms, and DesignRush as production case studies launch.
  - Client backlink strategy: append quiet "Built by HostPilot" footer links on client deliveries.

---

## 6. 8-Week Search Performance Monitoring Plan
- [ ] **Weeks 1–2:** Monitor Coverage report in GSC for crawl errors, soft 404s, or exclusion warnings.
- [ ] **Weeks 3–4:** Track initial impressions on high-intent long-tail keywords:
  - *"QR code guest guide for Airbnb"*
  - *"digital concierge for vacation rentals"*
  - *"custom web development for startups"*
- [ ] **Weeks 5–8:** Compare click-through rates (CTR) on SERP snippets; refine meta titles and descriptions based on search query intent.

---

## 7. Realistic Ranking Expectation
A brand new domain (`hostpilot.online`) typically takes 4 to 12 weeks to build search authority. Niche keywords like *"QR guest guide"* and *"Airbnb digital concierge"* will rank substantially faster than broad, high-difficulty terms like *"web development agency"*. Ongoing publication of practical hospitality and engineering articles will steadily build topic cluster authority.
