import React from 'react';
import { ArrowRight, ExternalLink, Sparkles, PlusCircle } from 'lucide-react';
import { projectsConfig } from '../../config/work';
import { PhoneMockup } from '../ui/DeviceMockup';

interface FeaturedProjectsProps {
  onNavigate: (path: string) => void;
  onOpenQuote: () => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onNavigate, onOpenQuote }) => {
  // Only the 3 core live demos + website placeholder slot
  const featured = projectsConfig.filter((p) => p.isDemo && !p.isLocked);

  return (
    <section className="py-20 lg:py-28 bg-[#F5F8FC]" id="featured-projects">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div className="text-left">
            <div className="text-xs font-bold uppercase tracking-[0.12em] text-[#0B4FE3] mb-2">
              FEATURED PROJECTS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B33] tracking-tight">
              Real Projects. Real Results.
            </h2>
          </div>

          <button
            onClick={() => onNavigate('/work')}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0B4FE3] hover:text-[#083CB3] transition-colors"
          >
            <span>View All Projects</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* 3 Live Demo Project Cards + 1 Slot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col rounded-[20px] bg-white border border-[#E1E8F2] shadow-[0_8px_30px_rgba(11,27,51,0.06)] hover:shadow-[0_16px_40px_rgba(11,27,51,0.12)] hover:-translate-y-1 transition-all duration-200 overflow-hidden text-left"
            >
              {/* Visual preview */}
              <div className="bg-gradient-to-b from-[#EAF1FF]/70 to-slate-100 p-6 flex items-center justify-center blueprint-grid border-b border-[#E1E8F2] min-h-[360px]">
                <div className="scale-85 origin-top">
                  <PhoneMockup
                    title={project.name}
                    location={project.location}
                    tagline={project.description}
                    badge={project.tag}
                  />
                </div>
              </div>

              {/* Card body */}
              <div className="flex-1 flex flex-col justify-between p-6">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-block rounded-md bg-[#EAF1FF] px-2.5 py-1 text-[11px] font-bold text-[#0B4FE3]">
                      {project.tag}
                    </span>
                    <span className="text-[11px] text-[#5B6B82]">Live Demo</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0B1B33] mt-3 group-hover:text-[#0B4FE3] transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-xs font-medium text-[#5B6B82] mt-0.5">
                    {project.location}
                  </p>
                  <p className="text-xs text-[#1F2A3D] mt-2 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B4FE3] hover:text-[#083CB3] transition-colors"
                  >
                    <span>Launch Live Demo</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>

                  <button
                    onClick={() => onNavigate(`/work/${project.slug}`)}
                    className="text-xs font-semibold text-[#5B6B82] hover:text-[#0B1B33] transition-colors"
                  >
                    Case Study →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clearly marked "Add your project" slot for website projects */}
        <div className="mt-10 rounded-2xl border-2 border-dashed border-[#0B4FE3]/30 bg-white p-8 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="h-12 w-12 rounded-xl bg-[#EAF1FF] text-[#0B4FE3] flex items-center justify-center shrink-0">
              <PlusCircle className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#0B1B33]">
                Your Custom Website or Web App Project Here
              </h4>
              <p className="text-xs sm:text-sm text-[#5B6B82] mt-0.5">
                Ready to build a high-performance web platform or enterprise portal? Let's engineer it together.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenQuote}
            className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-[#0B4FE3] px-5 py-3 text-xs font-semibold text-white hover:bg-[#083CB3] transition-colors shadow-xs"
          >
            <span>Start Your Build</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
