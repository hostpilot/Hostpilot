import React from 'react';
import { ArrowRight, Globe, LayoutGrid, Building2, Palette, QrCode } from 'lucide-react';
import { servicesConfig } from '../../config/services';

interface SolutionsGridProps {
  onNavigate: (path: string) => void;
}

export const SolutionsGrid: React.FC<SolutionsGridProps> = ({ onNavigate }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe className="h-5 w-5" />;
      case 'LayoutGrid': return <LayoutGrid className="h-5 w-5" />;
      case 'Building2': return <Building2 className="h-5 w-5" />;
      case 'Palette': return <Palette className="h-5 w-5" />;
      case 'QrCode': return <QrCode className="h-5 w-5" />;
      default: return <Globe className="h-5 w-5" />;
    }
  };

  // Visual header previews for each card (clean stylized device / interface mockup)
  const getCardVisual = (slug: string) => {
    switch (slug) {
      case 'custom-web-development':
        return (
          <div className="h-44 w-full bg-gradient-to-tr from-[#EAF1FF] to-blue-50/50 p-3.5 flex flex-col justify-end blueprint-grid border-b border-[#E1E8F2] relative overflow-hidden">
            <div className="rounded-t-lg bg-white p-2.5 shadow-sm border border-slate-200 text-left space-y-1.5 translate-y-2">
              <div className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-slate-400"></span>
                <span className="h-1.5 w-1.5 rounded-full bg-slate-300"></span>
                <span className="text-[9px] text-slate-500 font-mono ml-1">hostpilot.online</span>
              </div>
              <div className="h-2 w-3/4 rounded bg-slate-200"></div>
              <div className="h-2 w-1/2 rounded bg-[#0B4FE3]"></div>
            </div>
          </div>
        );
      case 'webapp-development':
        return (
          <div className="h-44 w-full bg-gradient-to-tr from-slate-50 to-blue-50/40 p-3.5 flex flex-col justify-end blueprint-grid border-b border-[#E1E8F2] relative overflow-hidden">
            <div className="rounded-t-lg bg-[#0B1B33] p-2.5 shadow-sm border border-slate-700 text-left space-y-1.5 translate-y-2 text-white">
              <div className="flex items-center justify-between text-[8px] text-slate-400">
                <span>PORTAL_API</span>
                <span className="text-emerald-400">STATUS: 200</span>
              </div>
              <div className="grid grid-cols-2 gap-1">
                <div className="h-4 rounded bg-slate-800 p-0.5 text-[8px] text-slate-300">RBAC Active</div>
                <div className="h-4 rounded bg-[#0B4FE3] p-0.5 text-[8px] text-white">PostgreSQL</div>
              </div>
            </div>
          </div>
        );
      case 'enterprise-applications':
        return (
          <div className="h-44 w-full bg-gradient-to-tr from-blue-50/60 to-slate-100 p-3.5 flex flex-col justify-end blueprint-grid border-b border-[#E1E8F2] relative overflow-hidden">
            <div className="rounded-t-lg bg-white p-2.5 shadow-sm border border-slate-200 text-left space-y-1.5 translate-y-2">
              <div className="text-[9px] font-bold text-slate-800">Internal Audit & SSO</div>
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-8 rounded bg-emerald-500"></div>
                <div className="h-2 w-12 rounded bg-slate-200"></div>
              </div>
            </div>
          </div>
        );
      case 'ui-ux-design':
        return (
          <div className="h-44 w-full bg-gradient-to-tr from-indigo-50/50 to-[#EAF1FF] p-3.5 flex flex-col justify-end blueprint-grid border-b border-[#E1E8F2] relative overflow-hidden">
            <div className="rounded-t-lg bg-white p-2.5 shadow-sm border border-slate-200 text-left space-y-1.5 translate-y-2">
              <div className="flex items-center gap-1">
                <span className="h-2.5 w-2.5 rounded-full bg-[#0B4FE3]"></span>
                <span className="text-[9px] font-bold text-slate-800">Design System Tokens</span>
              </div>
              <div className="flex gap-1">
                <span className="h-2 w-5 rounded bg-blue-100"></span>
                <span className="h-2 w-7 rounded bg-blue-200"></span>
                <span className="h-2 w-6 rounded bg-[#0B4FE3]"></span>
              </div>
            </div>
          </div>
        );
      case 'qr-concierge':
        return (
          <div className="h-44 w-full bg-gradient-to-tr from-[#EAF1FF] to-blue-100/50 p-3.5 flex flex-col justify-end blueprint-grid border-b border-[#E1E8F2] relative overflow-hidden">
            <div className="rounded-t-lg bg-white p-2.5 shadow-sm border border-slate-200 text-left space-y-1.5 translate-y-2">
              <div className="flex items-center justify-between text-[9px] font-bold text-[#0B4FE3]">
                <span>24/7 Guest Guide</span>
                <span>1-Tap Wi-Fi</span>
              </div>
              <div className="h-2 w-2/3 rounded bg-slate-200"></div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#F5F8FC]" id="solutions">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-bold uppercase tracking-[0.12em] text-[#0B4FE3] mb-2">
            OUR SOLUTIONS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B33] tracking-tight">
            Built for Every Need
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5B6B82] leading-relaxed">
            High-converting web engineering, internal business tools, and modern guest intelligence platforms engineered to perform without compromise.
          </p>
        </div>

        {/* 5-Column Responsive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {servicesConfig.map((service) => (
            <div
              key={service.slug}
              className="group relative flex flex-col rounded-[20px] bg-white border border-[#E1E8F2] shadow-[0_8px_30px_rgba(11,27,51,0.06)] hover:shadow-[0_16px_40px_rgba(11,27,51,0.12)] hover:-translate-y-1 transition-all duration-200 overflow-hidden text-left"
            >
              {/* Card visual mockup */}
              <div className="relative">
                {getCardVisual(service.slug)}

                {/* Overlapping circular blue-tint icon badge on image bottom edge */}
                <div className="absolute -bottom-5 left-5 h-11 w-11 rounded-full bg-[#EAF1FF] border-2 border-white text-[#0B4FE3] flex items-center justify-center shadow-sm">
                  {getIcon(service.iconName)}
                </div>
              </div>

              {/* Card Content */}
              <div className="flex-1 flex flex-col justify-between p-5 pt-8">
                <div>
                  <h3 className="text-base font-bold text-[#0B1B33] group-hover:text-[#0B4FE3] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs text-[#5B6B82] line-clamp-2 leading-relaxed">
                    {service.oneLineOutcome}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => onNavigate(`/services/${service.slug}`)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B4FE3] hover:text-[#083CB3] group-hover:translate-x-0.5 transition-all"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
