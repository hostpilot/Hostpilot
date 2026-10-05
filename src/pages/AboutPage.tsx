import React from 'react';
import { Layers, MessageSquare, ShieldCheck, LifeBuoy, ArrowRight, User, ExternalLink } from 'lucide-react';
import { teamConfig } from '../config/team';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';

interface AboutPageProps {
  onNavigate: (path: string) => void;
  onOpenQuote: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenQuote }) => {
  const values = [
    {
      title: 'Custom-built',
      desc: 'No fragile third-party templates or page-builder bloat. Every system is built to measure.',
      icon: <Layers className="h-6 w-6" />,
    },
    {
      title: 'Clear communication',
      desc: 'Direct access to senior engineers with transparent timelines and no agency runaround.',
      icon: <MessageSquare className="h-6 w-6" />,
    },
    {
      title: 'Secure by design',
      desc: 'Sanitized inputs, robust authentication, zero-trust architecture, and strict encryption.',
      icon: <ShieldCheck className="h-6 w-6" />,
    },
    {
      title: 'Support after launch',
      desc: 'Every project includes dedicated post-launch support and Core Web Vitals monitoring.',
      icon: <LifeBuoy className="h-6 w-6" />,
    },
  ];

  return (
    <div className="bg-white text-left">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#F5F8FC] to-white py-14 sm:py-20 border-b border-[#E1E8F2]/60">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'About' }]} onNavigate={onNavigate} />

          <div className="mt-6 max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#0B4FE3]">
              ABOUT HOSTPILOT
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1B33] tracking-tight leading-tight">
              We Build Things That Work.
            </h1>
            <p className="text-base sm:text-lg text-[#5B6B82] leading-relaxed">
              Founded in 2025, HostPilot is a modern digital agency and engineering studio. We believe that businesses deserve websites that load instantly and convert visitors, while vacation rental operators deserve an intelligent digital concierge that handles late-night questions effortlessly.
            </p>
          </div>
        </div>
      </section>

      {/* Values Row */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0B4FE3]">
              OUR PRINCIPLES
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B33] mt-1">
              Engineering Over Shortcuts
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="rounded-2xl border border-[#E1E8F2] bg-[#F5F8FC]/50 p-6 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="h-12 w-12 rounded-xl bg-[#EAF1FF] text-[#0B4FE3] flex items-center justify-center mb-4">
                    {v.icon}
                  </div>
                  <h3 className="text-base font-bold text-[#0B1B33]">{v.title}</h3>
                  <p className="text-xs text-[#5B6B82] mt-2 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section (Rendered strictly from /config/team.ts) */}
      <section className="py-16 sm:py-24 bg-[#F5F8FC] border-t border-[#E1E8F2]">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0B4FE3]">
              LEADERSHIP
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B33] mt-1">
              Meet the Team
            </h2>
            <p className="text-xs sm:text-sm text-[#5B6B82] mt-1">
              Direct engineering leadership on every client engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamConfig.map((member, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white p-6 sm:p-8 border border-[#E1E8F2] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="h-16 w-16 rounded-2xl bg-[#EAF1FF] text-[#0B4FE3] flex items-center justify-center mb-4 font-bold text-xl">
                    <User className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0B1B33]">{member.name}</h3>
                  <div className="text-xs font-semibold text-[#0B4FE3] mt-0.5">{member.role}</div>
                  <p className="text-xs text-[#5B6B82] mt-3 leading-relaxed">{member.bio}</p>
                </div>

                {member.linkedin && (
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-[#0B4FE3]"
                    >
                      <span>LinkedIn Profile</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="bg-[#0B4FE3] text-white py-14">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold">Ready to build with HostPilot?</h2>
          <p className="text-blue-100 max-w-xl mx-auto text-sm">
            Reach out directly to discuss your project requirements with an engineer.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-xs font-bold text-[#0B4FE3] hover:bg-blue-50 transition-colors shadow-md"
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
