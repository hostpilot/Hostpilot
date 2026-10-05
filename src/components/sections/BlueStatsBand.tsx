import React from 'react';
import { MonitorSmartphone, Briefcase, Clock, Code2, ShieldCheck } from 'lucide-react';
import { StatsCounter } from '../ui/StatsCounter';
import { siteConfig } from '../../config/site';

export const BlueStatsBand: React.FC = () => {
  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        {/* Rounded full container width blue band */}
        <div className="relative overflow-hidden rounded-[24px] bg-[#0B4FE3] text-white p-8 sm:p-12 lg:p-14 shadow-xl">
          {/* Blueprint grid overlay */}
          <div className="absolute inset-0 blueprint-grid-dense opacity-20 pointer-events-none" aria-hidden="true" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Blueprint-style device illustration */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm rounded-2xl bg-white/10 p-4 border border-white/20 backdrop-blur-xs text-left shadow-2xl">
                <div className="flex items-center justify-between pb-3 border-b border-white/15 text-xs">
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-blue-100">
                    <ShieldCheck className="h-3.5 w-3.5 text-blue-200" />
                    <span>SYSTEM_BLUEPRINT_v2</span>
                  </div>
                  <span className="rounded bg-white/20 px-2 py-0.5 text-[9px] font-semibold text-white">
                    OPTIMIZED
                  </span>
                </div>

                <div className="mt-3 space-y-2.5 text-xs text-blue-50 font-mono">
                  <div className="p-2 rounded-lg bg-black/20 border border-white/10 flex justify-between">
                    <span>Performance Target</span>
                    <span className="text-emerald-300 font-bold">100/100 CWV</span>
                  </div>
                  <div className="p-2 rounded-lg bg-black/20 border border-white/10 flex justify-between">
                    <span>Template Bloat</span>
                    <span className="text-blue-200 font-bold">0 KB (Purged)</span>
                  </div>
                  <div className="p-2 rounded-lg bg-black/20 border border-white/10 flex justify-between">
                    <span>Concierge Autopilot</span>
                    <span className="text-white font-bold">24/7 Vector DB</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between text-[11px] text-blue-100">
                  <span>HostPilot Infrastructure</span>
                  <span className="font-semibold text-white">Production Ready</span>
                </div>
              </div>
            </div>

            {/* Right: Eyebrow, Heading, and 4 Stat Items */}
            <div className="lg:col-span-7 text-left space-y-6">
              <div>
                <span className="inline-block text-xs font-extrabold uppercase tracking-[0.14em] text-blue-200">
                  SPEED & EFFICIENCY
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-1 tracking-tight leading-tight">
                  Better Websites. Better Outcomes.
                </h2>
                <p className="text-sm sm:text-base text-blue-100 mt-2 max-w-xl leading-relaxed">
                  We don't settle for bloated page builders or fragile plugins. Every line of code is engineered for speed, clean search engine indexing, and effortless host autonomy.
                </p>
              </div>

              {/* 4 Stat Items in a 2x2 grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-2 border-t border-white/20">
                {/* Stat 1 */}
                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white flex items-center">
                    <StatsCounter value={3} suffix="+" />
                  </div>
                  <div className="text-xs font-bold text-blue-100">Live Demos</div>
                  <div className="text-[11px] text-blue-200/90 leading-tight">Tested in production</div>
                </div>

                {/* Stat 2 */}
                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white flex items-center">
                    <StatsCounter value={5} suffix="" />
                  </div>
                  <div className="text-xs font-bold text-blue-100">Core Services</div>
                  <div className="text-[11px] text-blue-200/90 leading-tight">Web apps to AI guides</div>
                </div>

                {/* Stat 3 */}
                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white flex items-center">
                    <StatsCounter value={24} suffix="/7" />
                  </div>
                  <div className="text-xs font-bold text-blue-100">Guest Concierge</div>
                  <div className="text-[11px] text-blue-200/90 leading-tight">Instant guest answers</div>
                </div>

                {/* Stat 4 */}
                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white flex items-center">
                    <StatsCounter value={100} suffix="%" />
                  </div>
                  <div className="text-xs font-bold text-blue-100">Custom Builds</div>
                  <div className="text-[11px] text-blue-200/90 leading-tight">Zero template bloat</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
