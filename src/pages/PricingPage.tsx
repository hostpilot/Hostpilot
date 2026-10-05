import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';

interface PricingPageProps {
  onNavigate: (path: string) => void;
  onOpenQuote: () => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onNavigate, onOpenQuote }) => {
  const [activeGroup, setActiveGroup] = useState<'websites' | 'concierge'>('websites');

  const webTiers = [
    {
      title: 'Starter Marketing Site',
      desc: 'High-speed custom landing page or single-page site for focused offers and new ventures.',
      price: null, // Renders as "Custom quote"
      included: [
        'Custom single-page responsive layout',
        'Sub-second Core Web Vitals optimization',
        'Zod validated contact & lead capture form',
        'Technical SEO, OpenGraph & meta tags',
        'Vercel / Cloud serverless deployment',
        '14 days post-launch support',
      ],
      featured: false,
    },
    {
      title: 'Business Platform',
      desc: 'Complete multi-page corporate web presence designed for high brand authority and conversions.',
      price: null, // "Custom quote"
      included: [
        'Multi-page architecture (5-10 core pages)',
        'Bespoke design system & UI tokens',
        'Schema.org structured data (Organization, FAQ, Services)',
        'Content management or structured MDX setup',
        'Analytics integration & custom event tracking',
        '30 days dedicated warranty & post-launch support',
      ],
      featured: true,
    },
    {
      title: 'Custom Web Application',
      desc: 'Interactive dashboards, client portals, and SaaS tools built with custom databases.',
      price: null, // "Custom quote"
      included: [
        'Full-stack React / Next.js / TypeScript build',
        'Role-based access control (RBAC) & authentication',
        'Custom database schemas & REST/GraphQL APIs',
        'Interactive data tables, charts & filter engines',
        'Automated regression & end-to-end tests',
        'Dedicated SLA & ongoing maintenance plans',
      ],
      featured: false,
    },
  ];

  const conciergeTiers = [
    {
      title: 'Single Property Starter',
      desc: 'Perfect for independent hosts with 1 property wanting 24/7 guest autonomy.',
      price: null, // "Custom quote"
      included: [
        '1 Complete property guidebook ingestion',
        'Bespoke mobile web app on custom URL',
        'Print-ready vector QR code kit (SVG, PNG, PDF)',
        '1-Tap Wi-Fi & appliance guides',
        'Host emergency takeover dashboard',
        'Standard ongoing email support',
      ],
      featured: false,
    },
    {
      title: 'Growth Portfolio',
      desc: 'Tailored for professional hosts and managers with 2 to 5 vacation rentals.',
      price: null, // "Custom quote"
      included: [
        'Up to 5 properties with individual QR portals',
        'Bespoke property branding for each listing',
        'Multilingual auto-translation for international guests',
        'Automated upsell engine for late checkouts',
        'Centralized host management portal',
        'Priority technical support',
      ],
      featured: true,
    },
    {
      title: 'Enterprise Portfolio',
      desc: 'For boutique hospitality groups and managers with 6+ properties requiring custom integration.',
      price: null, // "Custom quote"
      included: [
        'Unlimited properties & volume onboarding',
        'PMS / channel manager API integration',
        'Custom domain setup per property',
        'Engraved acrylic or metal QR hardware kits',
        'Dedicated account engineer',
        'Custom SLA & 24/7 uptime guarantee',
      ],
      featured: false,
    },
  ];

  const activeTiers = activeGroup === 'websites' ? webTiers : conciergeTiers;

  return (
    <div className="bg-white text-left">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#F5F8FC] to-white py-12 sm:py-16 border-b border-[#E1E8F2]/60">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Pricing' }]} onNavigate={onNavigate} />

          <div className="mt-4 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#0B4FE3]">
              TRANSPARENT VALUE
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1B33] mt-2 tracking-tight">
              Pricing: Websites, Web Apps & QR Concierge
            </h1>
            <p className="mt-3 text-base text-[#5B6B82] leading-relaxed">
              Every business and property has distinct needs. We provide transparent, itemized scopes rather than arbitrary template packages.
            </p>

            {/* Toggle switch between the two groups */}
            <div className="mt-8 inline-flex rounded-xl bg-slate-100 p-1" role="tablist">
              <button
                onClick={() => setActiveGroup('websites')}
                role="tab"
                aria-selected={activeGroup === 'websites'}
                className={`rounded-lg px-5 py-2.5 text-xs font-bold transition-all ${
                  activeGroup === 'websites'
                    ? 'bg-white text-[#0B1B33] shadow-xs'
                    : 'text-[#5B6B82] hover:text-[#0B1B33]'
                }`}
              >
                Websites & Web Apps
              </button>
              <button
                onClick={() => setActiveGroup('concierge')}
                role="tab"
                aria-selected={activeGroup === 'concierge'}
                className={`rounded-lg px-5 py-2.5 text-xs font-bold transition-all ${
                  activeGroup === 'concierge'
                    ? 'bg-white text-[#0B1B33] shadow-xs'
                    : 'text-[#5B6B82] hover:text-[#0B1B33]'
                }`}
              >
                QR Concierge Guides
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {activeTiers.map((tier, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 ${
                  tier.featured
                    ? 'border-2 border-[#0B4FE3] bg-white shadow-xl relative'
                    : 'border border-[#E1E8F2] bg-white shadow-xs hover:shadow-md'
                }`}
              >
                {tier.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#0B4FE3] px-3.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-xs">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-[#0B1B33]">
                    {tier.title}
                  </h3>
                  <p className="text-xs text-[#5B6B82] mt-2 min-h-[36px] leading-relaxed">
                    {tier.desc}
                  </p>

                  <div className="my-6 py-4 border-y border-[#E1E8F2]">
                    <div className="text-2xl font-extrabold text-[#0B1B33]">
                      {tier.price ? tier.price : 'Custom Quote'}
                    </div>
                    <div className="text-[11px] text-[#5B6B82] mt-0.5">
                      Tailored to your technical specifications
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      What's Included:
                    </div>
                    <ul className="space-y-2.5 text-xs text-slate-700">
                      {tier.included.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="h-4 w-4 text-[#0B4FE3] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <button
                    onClick={onOpenQuote}
                    className={`w-full inline-flex items-center justify-center gap-2 rounded-xl py-3 text-xs font-bold transition-all shadow-xs ${
                      tier.featured
                        ? 'bg-[#0B4FE3] text-white hover:bg-[#083CB3]'
                        : 'border border-[#0B4FE3] text-[#0B4FE3] hover:bg-[#EAF1FF]/50'
                    }`}
                  >
                    <span>Get a Free Quote</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-2xl bg-[#F5F8FC] p-6 sm:p-8 border border-[#E1E8F2] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3.5 text-left">
              <ShieldCheck className="h-8 w-8 text-[#0B4FE3] shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-[#0B1B33]">Need a customized scope or retainer?</h4>
                <p className="text-xs text-[#5B6B82]">We offer flexible milestone billing and ongoing maintenance SLAs.</p>
              </div>
            </div>
            <button
              onClick={onOpenQuote}
              className="shrink-0 rounded-xl bg-white border border-[#E1E8F2] px-5 py-2.5 text-xs font-bold text-[#0B1B33] hover:bg-slate-50 transition-colors"
            >
              Discuss Custom Agreement
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
