import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, ChevronRight, HelpCircle } from 'lucide-react';
import { servicesConfig, ServiceConfigItem } from '../config/services';
import { projectsConfig } from '../config/work';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { JsonLd } from '../components/ui/JsonLd';
import { generateServiceSchema, generateFaqSchema } from '../lib/schema';
import { LaptopMockup } from '../components/ui/DeviceMockup';

interface ServiceDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
  onOpenQuote: () => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ slug, onNavigate, onOpenQuote }) => {
  const service = servicesConfig.find((s) => s.slug === slug) || servicesConfig[0];
  const relatedServices = servicesConfig.filter((s) => service.relatedSlugs.includes(s.slug));
  const relatedProjects = projectsConfig.filter((p) => !p.isLocked).slice(0, 2);

  return (
    <>
      <JsonLd schema={generateServiceSchema(service.title, service.description, service.slug)} />
      <JsonLd schema={generateFaqSchema(service.faqs)} />

      <div className="bg-white text-left">
        {/* Hero Header */}
        <section className="bg-gradient-to-b from-[#F5F8FC] via-white to-white py-12 sm:py-16 border-b border-[#E1E8F2]/60">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { name: 'Services', href: '/services' },
                { name: service.title },
              ]}
              onNavigate={onNavigate}
            />

            <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-5">
                <span className="inline-block rounded-full bg-[#EAF1FF] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0B4FE3]">
                  HostPilot Specialized Practice
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1B33] tracking-tight leading-tight">
                  {service.title}
                </h1>
                <p className="text-lg font-medium text-[#0B4FE3]">
                  {service.oneLineOutcome}
                </p>
                <p className="text-sm sm:text-base text-[#5B6B82] leading-relaxed max-w-xl">
                  {service.description} We engineer custom web systems and interfaces with a rigorous focus on speed, accessible semantic structure, and maintainable architecture.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={onOpenQuote}
                    className="inline-flex items-center gap-2 rounded-xl bg-[#0B4FE3] px-6 py-3.5 text-xs font-bold text-white hover:bg-[#083CB3] transition-colors shadow-xs"
                  >
                    <span>Request a Free Quote</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => onNavigate('/work')}
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-6 py-3.5 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    <span>View Our Work</span>
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <LaptopMockup
                  title={service.title}
                  subtitle={service.oneLineOutcome}
                  badge="Production Build"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What's Included & Who It's For Grid */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Left: What's Included */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0B4FE3]">
                    DELIVERABLE SCOPE
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B33] mt-1">
                    What's Included in Every Engagement
                  </h2>
                  <p className="text-xs sm:text-sm text-[#5B6B82] mt-1">
                    We leave nothing to chance. Every deliverable is thoroughly tested, documented, and delivered with full source ownership.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  {service.included.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl border border-[#E1E8F2] bg-[#F5F8FC]/50 flex items-start gap-3"
                    >
                      <CheckCircle2 className="h-4 w-4 text-[#0B4FE3] shrink-0 mt-0.5" />
                      <span className="text-xs font-medium text-slate-800 leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Who It's For & Deliverables */}
              <div className="lg:col-span-5 space-y-6">
                <div className="rounded-2xl border border-[#E1E8F2] bg-white p-6 shadow-xs">
                  <h3 className="text-base font-bold text-[#0B1B33] mb-3">
                    Who This Service Is For
                  </h3>
                  <ul className="space-y-2.5 text-xs text-slate-600">
                    {service.whoItsFor.map((w, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#0B4FE3] shrink-0 mt-1.5" />
                        <span>{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-[#E1E8F2] bg-[#EAF1FF]/40 p-6">
                  <h3 className="text-base font-bold text-[#0B1B33] mb-3">
                    Key Tangible Deliverables
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {service.deliverables.map((d, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <ShieldCheck className="h-4 w-4 text-[#0B4FE3] shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4-Step Process Strip */}
        <section className="py-16 bg-[#F5F8FC] border-y border-[#E1E8F2]">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B4FE3]">
                METHODOLOGY
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B33] mt-1">
                Our 4-Step Delivery Pipeline
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.process.map((step) => (
                <div
                  key={step.step}
                  className="rounded-xl bg-white p-6 border border-[#E1E8F2] shadow-xs flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="inline-block h-8 w-8 rounded-lg bg-[#EAF1FF] text-[#0B4FE3] text-xs font-extrabold flex items-center justify-center">
                      0{step.step}
                    </span>
                    <h3 className="text-base font-bold text-[#0B1B33]">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#5B6B82] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service FAQs */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B4FE3]">
                QUESTIONS & ANSWERS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B33] mt-1">
                Service FAQs
              </h2>
            </div>

            <div className="space-y-4 max-w-3xl">
              {service.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-[#E1E8F2] bg-white p-5 space-y-2 shadow-xs"
                >
                  <h3 className="text-sm sm:text-base font-bold text-[#0B1B33] flex items-center gap-2">
                    <HelpCircle className="h-4 w-4 text-[#0B4FE3] shrink-0" />
                    {faq.question}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5B6B82] leading-relaxed pl-6">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services Cards */}
        <section className="py-16 bg-[#F5F8FC] border-t border-[#E1E8F2]">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1B33] mb-8">
              Related Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((rel) => (
                <div
                  key={rel.slug}
                  className="rounded-xl bg-white p-6 border border-[#E1E8F2] shadow-xs hover:shadow-md transition-shadow"
                >
                  <h3 className="text-base font-bold text-[#0B1B33]">{rel.title}</h3>
                  <p className="text-xs text-[#5B6B82] mt-2 line-clamp-2">{rel.oneLineOutcome}</p>
                  <button
                    onClick={() => {
                      onNavigate(`/services/${rel.slug}`);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#0B4FE3]"
                  >
                    <span>View Service</span> <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Band */}
        <section className="bg-[#0B4FE3] text-white py-14">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold">Ready to start with {service.title}?</h2>
            <p className="text-blue-100 max-w-xl mx-auto text-sm">
              We provide direct engineer communication, clear milestone deliverables, and zero technical debt.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-xs font-bold text-[#0B4FE3] hover:bg-blue-50 transition-colors shadow-md"
              >
                <span>Request a Free Quote</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
