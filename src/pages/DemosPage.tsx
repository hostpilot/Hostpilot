import React from 'react';
import { ExternalLink, Lock, ShieldCheck, Sparkles, MapPin } from 'lucide-react';
import { projectsConfig } from '../config/work';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { PhoneMockup } from '../components/ui/DeviceMockup';
import { trackEvent } from '../lib/analytics';

interface DemosPageProps {
  onNavigate: (path: string) => void;
  onOpenQuote: () => void;
}

export const DemosPage: React.FC<DemosPageProps> = ({ onNavigate, onOpenQuote }) => {
  const handleLaunch = (name: string) => {
    trackEvent('demo_launch', { demoName: name });
  };

  return (
    <div className="bg-white text-left">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#F5F8FC] to-white py-12 sm:py-16 border-b border-[#E1E8F2]/60">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Live Demos' }]} onNavigate={onNavigate} />

          <div className="mt-4 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#0B4FE3]">
              LIVE EXPERIENCES
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1B33] mt-2 tracking-tight">
              Select a Property
            </h1>
            <p className="mt-3 text-base text-[#5B6B82] leading-relaxed">
              Experience the actual guest view. Launch any live demo below to test the instant Wi-Fi copy, appliance manuals, and local recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* Demos Grid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projectsConfig
              .filter((p) => p.isDemo)
              .map((project) => {
                const isLocked = project.isLocked;

                return (
                  <div
                    key={project.id}
                    className={`rounded-2xl border transition-all overflow-hidden flex flex-col justify-between ${
                      isLocked
                        ? 'border-slate-200 bg-slate-50/70 opacity-75'
                        : 'border-[#E1E8F2] bg-white shadow-[0_8px_30px_rgba(11,27,51,0.06)] hover:shadow-xl hover:-translate-y-1'
                    }`}
                  >
                    {/* Visual mockup container */}
                    <div className="p-6 bg-gradient-to-b from-[#EAF1FF]/60 to-slate-100 flex items-center justify-center blueprint-grid border-b border-[#E1E8F2] min-h-[380px] relative">
                      {isLocked ? (
                        <div className="flex flex-col items-center justify-center space-y-3 py-12 text-slate-500">
                          <div className="h-14 w-14 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 shadow-inner">
                            <Lock className="h-6 w-6" />
                          </div>
                          <span className="text-xs font-bold uppercase tracking-wider bg-slate-200 px-3 py-1 rounded-full text-slate-700">
                            Coming Soon
                          </span>
                        </div>
                      ) : (
                        <div className="scale-85 origin-top">
                          <PhoneMockup
                            title={project.name}
                            location={project.location}
                            tagline={project.description}
                            badge="Access: VIP"
                          />
                        </div>
                      )}
                    </div>

                    {/* Card details */}
                    <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between">
                          <span
                            className={`rounded-md px-2.5 py-1 text-[11px] font-bold ${
                              isLocked
                                ? 'bg-slate-200 text-slate-600'
                                : 'bg-[#EAF1FF] text-[#0B4FE3]'
                            }`}
                          >
                            {isLocked ? 'Coming Soon' : 'Access: VIP'}
                          </span>
                          <span className="text-xs text-[#5B6B82] flex items-center gap-1">
                            <MapPin className="h-3 w-3 text-[#0B4FE3]" />
                            {project.location}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-[#0B1B33] mt-3">
                          {project.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#5B6B82] mt-2 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                        {isLocked ? (
                          <button
                            disabled
                            aria-disabled="true"
                            className="inline-flex items-center gap-2 rounded-xl bg-slate-200 px-5 py-2.5 text-xs font-bold text-slate-500 cursor-not-allowed"
                          >
                            <Lock className="h-3.5 w-3.5" />
                            <span>Coming Soon</span>
                          </button>
                        ) : (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => handleLaunch(project.name)}
                            className="inline-flex items-center gap-2 rounded-xl bg-[#0B4FE3] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#083CB3] transition-colors shadow-xs"
                          >
                            <span>Launch Concierge</span>
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        )}

                        {!isLocked && project.caseStudy && (
                          <button
                            onClick={() => onNavigate(`/work/${project.slug}`)}
                            className="text-xs font-semibold text-[#0B4FE3] hover:underline"
                          >
                            View Case Study →
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>

      {/* Demo Guidance Note */}
      <section className="py-12 bg-[#F5F8FC] border-t border-[#E1E8F2]">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 text-center max-w-xl">
          <ShieldCheck className="h-8 w-8 text-[#0B4FE3] mx-auto mb-2" />
          <h3 className="text-lg font-bold text-[#0B1B33]">Want this for your own property?</h3>
          <p className="text-xs sm:text-sm text-[#5B6B82] mt-1 leading-relaxed">
            We configure your custom domain, upload your property photography, and train your AI knowledge base in under 7 business days.
          </p>
          <div className="mt-4">
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 rounded-xl bg-[#0B4FE3] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#083CB3]"
            >
              Apply for Private Intake
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
