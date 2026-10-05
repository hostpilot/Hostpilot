import React from 'react';
import { Wifi, Key, MapPin, Sparkles, CheckCircle2, ChevronRight, ShieldCheck, Thermometer, Waves, ExternalLink } from 'lucide-react';

interface DeviceMockupProps {
  type?: 'phone' | 'laptop' | 'composite';
  variant?: 'pacific-dream' | 'california-getaway' | 'bella-vista' | 'corporate-site' | 'concierge-interactive';
  activeStep?: number;
  className?: string;
}

export const PhoneMockup: React.FC<{
  title: string;
  location: string;
  tagline: string;
  badge?: string;
  wifiName?: string;
  highlights?: string[];
  activeStep?: number;
  variant?: string;
}> = ({
  title,
  location,
  tagline,
  badge = 'Guest Concierge',
  wifiName = 'PacificDream_5G',
  highlights = ['Door Code: 8492#', 'Pool Temp: 84°F', 'Quiet Hours: 10 PM'],
  activeStep = 1,
  variant,
}) => {
  return (
    <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[310px] rounded-[36px] bg-[#0B1B33] p-2.5 shadow-2xl ring-1 ring-slate-900/10">
      {/* Phone outer bezel */}
      <div className="relative overflow-hidden rounded-[28px] bg-white border border-slate-100 flex flex-col h-[520px]">
        {/* Dynamic Island / speaker */}
        <div className="relative z-20 flex h-7 w-full items-center justify-between px-5 pt-1.5 text-[10px] font-semibold text-slate-800">
          <span>9:41</span>
          <div className="h-4 w-20 rounded-full bg-slate-950 flex items-center justify-end px-2">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-400"></div>
          </div>
          <div className="flex items-center gap-1">
            <Wifi className="h-3 w-3 text-slate-700" />
            <span className="text-[9px]">5G</span>
          </div>
        </div>

        {/* Mockup screen header */}
        <div className="bg-gradient-to-b from-[#EAF1FF] to-white px-4 pt-3 pb-3 border-b border-[#E1E8F2]">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1 rounded-full bg-[#0B4FE3] px-2.5 py-0.5 text-[10px] font-medium text-white">
              <Sparkles className="h-2.5 w-2.5" /> {badge}
            </span>
            <span className="text-[10px] text-slate-500 font-medium">VIP Access</span>
          </div>
          <h4 className="mt-2 text-base font-bold text-[#0B1B33] tracking-tight leading-tight">
            {title}
          </h4>
          <p className="flex items-center gap-1 text-[11px] text-[#5B6B82] mt-0.5">
            <MapPin className="h-3 w-3 text-[#0B4FE3] shrink-0" />
            <span className="truncate">{location}</span>
          </p>
        </div>

        {/* Screen content based on activeStep or variant */}
        <div className="flex-1 overflow-y-auto p-3.5 space-y-2.5 text-left text-xs">
          {variant === 'concierge-interactive' ? (
            activeStep === 1 ? (
              <div className="space-y-2 animate-fadeIn">
                <div className="p-2.5 rounded-xl bg-[#EAF1FF] border border-blue-200">
                  <div className="flex items-center gap-1.5 text-[#0B4FE3] font-semibold text-[11px]">
                    <CheckCircle2 className="h-3.5 w-3.5" /> Knowledge Base Synced
                  </div>
                  <p className="text-[11px] text-slate-600 mt-1">
                    House rules, Wi-Fi keys, and appliances mapped to vector embeddings.
                  </p>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-[11px] text-slate-700">
                  📄 Property Guidebook.pdf (100% Ingested)
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-[11px] text-slate-700">
                  🔑 4 Door & Gate Codes Verified
                </div>
              </div>
            ) : activeStep === 2 ? (
              <div className="space-y-2 animate-fadeIn">
                <div className="rounded-xl bg-slate-100 p-2.5 text-[11px] text-slate-800">
                  <p className="font-semibold text-slate-900">Guest asks at 2:14 AM:</p>
                  <p className="italic text-slate-600">"Where do I park our SUV?"</p>
                </div>
                <div className="rounded-xl bg-[#0B4FE3] p-2.5 text-[11px] text-white space-y-1">
                  <p className="font-semibold flex items-center gap-1">
                    <Sparkles className="h-3 w-3" /> Concierge Reply (0.4s):
                  </p>
                  <p className="text-blue-50 text-[10.5px]">
                    "Park in Stall #2 on the left. The gate code is 8492#. Here is the illuminated walkway."
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-2 animate-fadeIn">
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-[11px] text-emerald-800">
                  <div className="font-semibold flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" /> Guest Issue Resolved
                  </div>
                  <p className="text-[10px] text-emerald-700 mt-0.5">
                    Zero host intervention needed. Autopilot running 24/7.
                  </p>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[11px]">
                  <div className="text-[#0B1B33] font-semibold">Late Checkout Option</div>
                  <div className="text-slate-500 text-[10px] mt-0.5">Offered to guest at 9:00 AM</div>
                </div>
              </div>
            )
          ) : (
            <>
              {/* Quick Wi-Fi Pill */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#EAF1FF] border border-blue-100">
                <div className="flex items-center gap-2">
                  <div className="h-7 w-7 rounded-lg bg-[#0B4FE3] text-white flex items-center justify-center">
                    <Wifi className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-[#0B1B33]">Wi-Fi Network</div>
                    <div className="text-[10px] text-slate-600 font-mono">{wifiName}</div>
                  </div>
                </div>
                <span className="text-[10px] font-semibold text-[#0B4FE3] hover:underline cursor-pointer">
                  Copy
                </span>
              </div>

              {/* Highlights cards */}
              <div className="space-y-1.5">
                <div className="text-[11px] font-bold text-slate-800 px-0.5">Essential Property Codes</div>
                {highlights.map((h, i) => (
                  <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100 text-[11px]">
                    <span className="text-slate-700 font-medium flex items-center gap-1.5">
                      <Key className="h-3 w-3 text-[#0B4FE3]" /> {h}
                    </span>
                    <ChevronRight className="h-3 w-3 text-slate-400" />
                  </div>
                ))}
              </div>

              {/* Local curation teaser */}
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center justify-between text-[11px] font-bold text-[#0B1B33]">
                  <span>Curated Dining Picks</span>
                  <span className="text-[9px] text-[#0B4FE3] font-medium">Local Secret</span>
                </div>
                <p className="text-[10.5px] text-slate-600 mt-1 line-clamp-2">
                  {tagline}
                </p>
              </div>
            </>
          )}
        </div>

        {/* Phone bottom bar */}
        <div className="p-2.5 border-t border-slate-100 bg-slate-50 flex items-center justify-center">
          <div className="h-1 w-24 rounded-full bg-slate-300"></div>
        </div>
      </div>
    </div>
  );
};

export const LaptopMockup: React.FC<{
  title?: string;
  subtitle?: string;
  badge?: string;
  className?: string;
}> = ({
  title = 'HostPilot Enterprise Platform',
  subtitle = 'High-Performance Web Architecture & Client Portal',
  badge = 'Production Ready',
  className = '',
}) => {
  return (
    <div className={`relative mx-auto w-full max-w-xl ${className}`}>
      {/* Laptop lid */}
      <div className="relative rounded-t-2xl bg-[#0B1B33] p-2.5 shadow-2xl border border-slate-700/50">
        {/* Screen camera */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
          <div className="h-1.5 w-1.5 rounded-full bg-slate-700"></div>
        </div>

        {/* Screen content */}
        <div className="overflow-hidden rounded-lg bg-white border border-slate-200 flex flex-col h-[280px] sm:h-[320px]">
          {/* Browser header */}
          <div className="flex items-center justify-between border-b border-slate-200 bg-slate-100 px-3 py-1.5 text-xs">
            <div className="flex items-center gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-rose-400"></div>
              <div className="h-2.5 w-2.5 rounded-full bg-amber-400"></div>
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-400"></div>
            </div>
            <div className="flex items-center gap-1 rounded bg-white px-3 py-0.5 text-[10px] text-slate-600 border border-slate-200 font-mono w-64 truncate justify-center">
              <ShieldCheck className="h-2.5 w-2.5 text-emerald-600" />
              https://hostpilot.online/platform
            </div>
            <div className="text-[10px] text-slate-400">v2.5</div>
          </div>

          {/* Web interface */}
          <div className="flex-1 bg-[#F5F8FC] p-4 text-left overflow-hidden flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div>
                <span className="inline-flex items-center gap-1 rounded bg-[#EAF1FF] px-2 py-0.5 text-[10px] font-semibold text-[#0B4FE3]">
                  {badge}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#0B1B33] mt-1 tracking-tight">
                  {title}
                </h3>
                <p className="text-xs text-[#5B6B82] mt-0.5 line-clamp-1">
                  {subtitle}
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[10px] font-semibold text-emerald-700">99.98% Uptime</span>
              </div>
            </div>

            {/* Simulated UI metrics */}
            <div className="grid grid-cols-3 gap-2.5 my-2">
              <div className="rounded-lg bg-white p-2.5 border border-[#E1E8F2] shadow-xs">
                <div className="text-[10px] text-slate-500">Core Web Vitals</div>
                <div className="text-sm font-bold text-emerald-600 tabular-nums">99 / 100</div>
                <div className="text-[9px] text-slate-400 mt-0.5">LCP 0.8s · CLS 0.00</div>
              </div>
              <div className="rounded-lg bg-white p-2.5 border border-[#E1E8F2] shadow-xs">
                <div className="text-[10px] text-slate-500">Structured Data</div>
                <div className="text-sm font-bold text-[#0B4FE3]">Verified</div>
                <div className="text-[9px] text-slate-400 mt-0.5">Schema.org valid</div>
              </div>
              <div className="rounded-lg bg-white p-2.5 border border-[#E1E8F2] shadow-xs">
                <div className="text-[10px] text-slate-500">Code Architecture</div>
                <div className="text-sm font-bold text-slate-800">TypeScript</div>
                <div className="text-[9px] text-slate-400 mt-0.5">0 Template Bloat</div>
              </div>
            </div>

            {/* Simulated bar chart / activity table */}
            <div className="rounded-lg bg-white p-2.5 border border-[#E1E8F2] flex items-center justify-between">
              <div className="text-[11px] font-semibold text-[#0B1B33]">Conversion Tracking & Security Handshake</div>
              <span className="text-[10px] font-semibold text-[#0B4FE3] flex items-center gap-1">
                Active <ChevronRight className="h-3 w-3" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Laptop base */}
      <div className="relative mx-auto h-3 w-full rounded-b-xl bg-slate-300 shadow-md">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1 w-16 rounded-b-sm bg-slate-400"></div>
      </div>
    </div>
  );
};

export const CompositeHeroMockup: React.FC = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto flex items-center justify-center pt-4 pb-8">
      {/* Background soft blueprint grid and glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-blue-50/50 via-white to-blue-50/30 rounded-3xl -z-10 blueprint-grid opacity-75"></div>

      {/* Laptop in background */}
      <div className="w-full pl-0 sm:pl-4 transition-transform duration-300">
        <LaptopMockup
          title="HostPilot Digital Infrastructure"
          subtitle="Custom Web Systems, Web Apps & Vacation Rental Concierges"
          badge="Engineered for Performance"
        />
      </div>

      {/* Floating smartphone in foreground right */}
      <div className="absolute -right-2 sm:-right-4 -bottom-4 z-20 w-[190px] sm:w-[220px] transition-transform duration-300 hover:scale-[1.02] shadow-2xl">
        <div className="rounded-[28px] bg-[#0B1B33] p-1.5 ring-1 ring-slate-900/10">
          <div className="rounded-[22px] bg-white p-2.5 border border-slate-100 flex flex-col space-y-2 text-left">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-bold text-[#0B4FE3] bg-[#EAF1FF] px-1.5 py-0.5 rounded">
                Live Concierge
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
            </div>
            <div>
              <div className="text-[11px] font-bold text-[#0B1B33]">The Pacific Dream</div>
              <div className="text-[9px] text-[#5B6B82]">Malibu, CA · Luxury Villa</div>
            </div>
            <div className="p-1.5 rounded bg-[#EAF1FF] text-[9px] text-[#0B4FE3] font-medium flex items-center justify-between">
              <span>Wi-Fi: PacificDream_5G</span>
              <span className="font-bold">Copy</span>
            </div>
            <div className="p-1.5 rounded bg-slate-50 text-[9px] text-slate-700 flex items-center justify-between border border-slate-100">
              <span>Gate: 8492#</span>
              <CheckCircle2 className="h-2.5 w-2.5 text-emerald-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Subtle floating QR badge on bottom left */}
      <div className="absolute -left-2 sm:left-2 bottom-2 z-20 rounded-xl bg-white p-2.5 shadow-xl border border-[#E1E8F2] flex items-center gap-2.5">
        <div className="h-10 w-10 rounded-lg bg-[#EAF1FF] p-1 flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#0B4FE3]" fill="currentColor">
            <path d="M3 3h6v6H3V3zm2 2v2h2V5H5zm8-2h6v6h-6V3zm2 2v2h2V5h-2zM3 13h6v6H3v-6zm2 2v2h2v-2H5zm10 0h2v2h-2v-2zm-2 2h2v2h-2v-2zm4 0h2v2h-2v-2zm0-4h2v2h-2v-2zm-4 0h2v2h-2v-2z" />
          </svg>
        </div>
        <div>
          <div className="text-[10px] font-bold text-[#0B1B33]">1-Scan Guest Access</div>
          <div className="text-[9px] text-[#5B6B82]">No app download required</div>
        </div>
      </div>
    </div>
  );
};
