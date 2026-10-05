import React from 'react';
import { ArrowRight, CheckCircle2, Globe, LayoutGrid, Building2, Palette, QrCode } from 'lucide-react';
import { servicesConfig } from '../config/services';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { JsonLd } from '../components/ui/JsonLd';
import { seoConfig } from '../config/seo';

interface ServicesOverviewProps {
  onNavigate: (path: string) => void;
  onOpenQuote: () => void;
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({ onNavigate, onOpenQuote }) => {
  const seo = seoConfig.services;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe className="h-6 w-6" />;
      case 'LayoutGrid': return <LayoutGrid className="h-6 w-6" />;
      case 'Building2': return <Building2 className="h-6 w-6" />;
      case 'Palette': return <Palette className="h-6 w-6" />;
      case 'QrCode': return <QrCode className="h-6 w-6" />;
      default: return <Globe className="h-6 w-6" />;
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#F5F8FC] to-white py-12 sm:py-16 border-b border-[#E1E8F2]/60">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 text-left">
          <Breadcrumbs items={[{ name: 'Services' }]} onNavigate={onNavigate} />

          <div className="mt-4 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#0B4FE3]">
              SERVICES
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1B33] mt-2 tracking-tight leading-tight">
              Websites, Web Apps and Digital Concierges Built to Perform
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#5B6B82] leading-relaxed">
              Every build is engineered with clean code, sub-second response times, and robust security. From corporate web platforms to vacation rental AI concierges, we build solutions that last.
            </p>
          </div>
        </div>
      </section>

      {/* Services List at Larger Size */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 space-y-12">
          {servicesConfig.map((service, index) => (
            <div
              key={service.slug}
              className="rounded-2xl border border-[#E1E8F2] bg-white p-6 sm:p-10 shadow-[0_8px_30px_rgba(11,27,51,0.06)] hover:shadow-lg transition-all text-left"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-xl bg-[#EAF1FF] text-[#0B4FE3] flex items-center justify-center shrink-0">
                      {getIcon(service.iconName)}
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-[#5B6B82] uppercase tracking-wider">
                        Core Service 0{index + 1}
                      </span>
                      <h2 className="text-2xl font-bold text-[#0B1B33]">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-base text-[#1F2A3D] font-medium">
                    {service.oneLineOutcome}
                  </p>

                  <p className="text-sm text-[#5B6B82] leading-relaxed">
                    {service.description}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-4 items-center">
                    <button
                      onClick={() => onNavigate(`/services/${service.slug}`)}
                      className="inline-flex items-center gap-2 rounded-xl bg-[#0B4FE3] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#083CB3] transition-colors"
                    >
                      <span>Explore Service Details</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>

                    <button
                      onClick={onOpenQuote}
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-5 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      <span>Request Quote</span>
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-[#F5F8FC] rounded-xl p-5 border border-slate-200/80">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1B33] mb-3">
                    What's Included:
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {service.included.slice(0, 5).map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#0B4FE3] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {service.startingPrice && (
                    <div className="mt-4 pt-3 border-t border-slate-200 text-xs font-semibold text-slate-800">
                      Starting at: <span className="text-[#0B4FE3] font-bold">{service.startingPrice}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Band */}
      <section className="bg-[#0B4FE3] text-white py-14">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold">Ready to discuss your scope?</h2>
          <p className="text-blue-100 max-w-xl mx-auto text-sm">
            Whether you need a full enterprise web app or a simple high-converting company website, we deliver fast, clean builds.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-xs font-bold text-[#0B4FE3] hover:bg-blue-50 transition-colors shadow-md"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
