import React from 'react';
import { ArrowRight, Layers, Zap, ShieldCheck, QrCode } from 'lucide-react';
import { CompositeHeroMockup } from '../ui/DeviceMockup';
import { siteConfig } from '../../config/site';

interface HomeHeroProps {
  onNavigate: (path: string) => void;
  onOpenQuote: () => void;
}

export const HomeHero: React.FC<HomeHeroProps> = ({ onNavigate, onOpenQuote }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F5F8FC] via-white to-white pt-10 sm:pt-16 pb-20 lg:pb-28">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 blueprint-grid opacity-60 pointer-events-none" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-6 text-left space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#EAF1FF] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0B4FE3]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0B4FE3] animate-pulse"></span>
              Modern Web Studio & Guest Intelligence
            </div>

            {/* H1 in exactly two lines as specified */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-[1.08] text-[#0B1B33]">
              <span>Websites That Work</span>
              <br />
              <span className="text-[#0B4FE3]">as Hard as You Do.</span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-[#5B6B82] max-w-xl leading-relaxed">
              Custom websites, web apps and digital concierge guides for businesses and vacation-rental hosts. Engineered from zero for speed, conversion, and effortless guest autonomy.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={() => onNavigate('/services')}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0B4FE3] px-6 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-[#083CB3] transition-all hover:translate-x-0.5 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0B4FE3]"
              >
                <span>Explore Services</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#0B4FE3] bg-white px-6 py-3.5 text-sm font-semibold text-[#0B4FE3] hover:bg-[#EAF1FF]/60 transition-colors focus-visible:ring-2 focus-visible:ring-[#0B4FE3]"
              >
                <span>Get a Free Quote</span>
              </button>
            </div>

            {/* Micro proof line */}
            <div className="pt-2 text-xs text-[#5B6B82] flex items-center gap-2">
              <span className="font-semibold text-[#0B1B33]">No cookie-cutter templates.</span>
              <span>·</span>
              <span>100% custom TypeScript & Next.js/React engineering.</span>
            </div>
          </div>

          {/* Right Column: Composite Hero Mockup */}
          <div className="lg:col-span-6 w-full">
            <CompositeHeroMockup />
          </div>
        </div>

        {/* Floating White Trust Strip overlapping hero bottom */}
        <div className="mt-12 lg:mt-16 rounded-2xl bg-white p-4 sm:p-6 shadow-[0_8px_30px_rgba(11,27,51,0.06)] border border-[#E1E8F2]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#E1E8F2]">
            {/* Item 1 */}
            <div className="flex items-start gap-3.5 text-left pt-3 sm:pt-0 sm:px-3 first:pt-0 first:px-0">
              <div className="h-10 w-10 rounded-xl bg-[#EAF1FF] text-[#0B4FE3] flex items-center justify-center shrink-0">
                <Layers className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0B1B33]">Custom-built, no templates</h4>
                <p className="text-xs text-[#5B6B82] mt-0.5 leading-snug">Engineered from zero for brand authority & speed</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-3.5 text-left pt-3 sm:pt-0 sm:px-3">
              <div className="h-10 w-10 rounded-xl bg-[#EAF1FF] text-[#0B4FE3] flex items-center justify-center shrink-0">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0B1B33]">Fast, SEO-ready launches</h4>
                <p className="text-xs text-[#5B6B82] mt-0.5 leading-snug">Sub-second Core Web Vitals & JSON-LD schema</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start gap-3.5 text-left pt-3 sm:pt-0 sm:px-3">
              <div className="h-10 w-10 rounded-xl bg-[#EAF1FF] text-[#0B4FE3] flex items-center justify-center shrink-0">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0B1B33]">Secure by design</h4>
                <p className="text-xs text-[#5B6B82] mt-0.5 leading-snug">Zero-trust permissions & strict input sanitization</p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-start gap-3.5 text-left pt-3 sm:pt-0 sm:px-3">
              <div className="h-10 w-10 rounded-xl bg-[#EAF1FF] text-[#0B4FE3] flex items-center justify-center shrink-0">
                <QrCode className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0B1B33]">AI concierge for rentals</h4>
                <p className="text-xs text-[#5B6B82] mt-0.5 leading-snug">QR-enabled 24/7 guest support for luxury stays</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
