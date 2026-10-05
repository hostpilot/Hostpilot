import React, { useState } from 'react';
import { ArrowRight, ExternalLink, PlusCircle, CheckCircle2, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { projectsConfig, ProjectItem } from '../config/work';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { JsonLd } from '../components/ui/JsonLd';
import { generateCreativeWorkSchema } from '../lib/schema';
import { PhoneMockup, LaptopMockup } from '../components/ui/DeviceMockup';

interface WorkPageProps {
  currentSlug?: string;
  onNavigate: (path: string) => void;
  onOpenQuote: () => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({ currentSlug, onNavigate, onOpenQuote }) => {
  const [filter, setFilter] = useState<'all' | 'websites' | 'concierge'>('all');

  // If viewing a specific case study
  const currentProject = currentSlug ? projectsConfig.find((p) => p.slug === currentSlug) : null;

  if (currentProject && currentProject.caseStudy) {
    const caseStudy = currentProject.caseStudy;
    const currentIndex = projectsConfig.findIndex((p) => p.slug === currentSlug);
    const prevProject = currentIndex > 0 ? projectsConfig[currentIndex - 1] : null;
    const nextProject = currentIndex < projectsConfig.length - 1 ? projectsConfig[currentIndex + 1] : null;

    return (
      <>
        <JsonLd schema={generateCreativeWorkSchema({
          name: currentProject.name,
          description: currentProject.headline,
          slug: currentProject.slug,
        })} />

        <div className="bg-white text-left">
          {/* Header & Breadcrumb */}
          <section className="bg-gradient-to-b from-[#F5F8FC] to-white py-12 sm:py-16 border-b border-[#E1E8F2]/60">
            <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
              <Breadcrumbs
                items={[
                  { name: 'Our Work', href: '/work' },
                  { name: currentProject.name },
                ]}
                onNavigate={onNavigate}
              />

              <div className="mt-6 max-w-3xl">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-md bg-[#EAF1FF] px-2.5 py-1 text-xs font-bold text-[#0B4FE3]">
                    {currentProject.tag}
                  </span>
                  <span className="text-xs text-[#5B6B82] font-medium flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-[#0B4FE3]" />
                    {currentProject.location}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1B33] mt-3 tracking-tight leading-tight">
                  {currentProject.headline}
                </h1>
                <p className="mt-3 text-base text-[#5B6B82] leading-relaxed">
                  {currentProject.description}
                </p>

                {currentProject.liveUrl && (
                  <div className="mt-6">
                    <a
                      href={currentProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-[#0B4FE3] px-6 py-3.5 text-xs font-bold text-white hover:bg-[#083CB3] transition-colors shadow-xs"
                    >
                      <span>View Live Project</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Project Details & Device Mockup Section */}
          <section className="py-16 bg-white">
            <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Visual */}
                <div className="lg:col-span-6 bg-[#F5F8FC] p-8 rounded-2xl border border-[#E1E8F2] flex justify-center blueprint-grid">
                  <PhoneMockup
                    title={currentProject.name}
                    location={currentProject.location}
                    tagline={currentProject.description}
                    badge="Production Build"
                  />
                </div>

                {/* Metadata & Case Study Scope */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="grid grid-cols-2 gap-4 pb-6 border-b border-[#E1E8F2]">
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#5B6B82]">Client / Partner</div>
                      <div className="text-sm font-semibold text-[#0B1B33] mt-0.5">{caseStudy.client}</div>
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#5B6B82]">Timeline</div>
                      <div className="text-sm font-semibold text-[#0B1B33] mt-0.5">{caseStudy.timeline}</div>
                    </div>
                    <div className="col-span-2">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#5B6B82]">HostPilot Role</div>
                      <div className="text-xs font-medium text-slate-700 mt-0.5">{caseStudy.role}</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#0B1B33]">The Operational Challenge</h3>
                    <p className="text-xs sm:text-sm text-[#5B6B82] mt-1.5 leading-relaxed">
                      {caseStudy.challenge}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#0B1B33]">The Architectural Solution</h3>
                    <p className="text-xs sm:text-sm text-[#5B6B82] mt-1.5 leading-relaxed">
                      {caseStudy.solution}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Results Row */}
          {currentProject.stats && (
            <section className="py-12 bg-[#0B4FE3] text-white">
              <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                  {currentProject.stats.map((st, i) => (
                    <div key={i} className="p-4">
                      <div className="text-3xl sm:text-4xl font-extrabold text-white">{st.value}</div>
                      <div className="text-xs font-bold text-blue-100 uppercase tracking-wider mt-1">{st.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Key Features & Outcomes */}
          <section className="py-16 bg-[#F5F8FC]">
            <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="rounded-2xl bg-white p-6 sm:p-8 border border-[#E1E8F2]">
                  <h3 className="text-base font-bold text-[#0B1B33] mb-4">Verified Business Outcomes</h3>
                  <ul className="space-y-3 text-xs sm:text-sm text-[#5B6B82]">
                    {caseStudy.results.map((res, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl bg-white p-6 sm:p-8 border border-[#E1E8F2]">
                  <h3 className="text-base font-bold text-[#0B1B33] mb-4">Core Concierge Features</h3>
                  <ul className="space-y-3 text-xs sm:text-sm text-[#5B6B82]">
                    {caseStudy.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-[#0B4FE3] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Prev / Next Case Study Nav */}
              <div className="mt-12 pt-6 border-t border-slate-200 flex items-center justify-between">
                {prevProject ? (
                  <button
                    onClick={() => {
                      onNavigate(`/work/${prevProject.slug}`);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B4FE3] hover:underline"
                  >
                    <ChevronLeft className="h-4 w-4" /> Previous: {prevProject.name}
                  </button>
                ) : <div />}

                {nextProject ? (
                  <button
                    onClick={() => {
                      onNavigate(`/work/${nextProject.slug}`);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B4FE3] hover:underline"
                  >
                    Next: {nextProject.name} <ChevronRight className="h-4 w-4" />
                  </button>
                ) : <div />}
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }

  // Work Archive with Filter Tabs
  const filteredProjects = projectsConfig.filter((p) => {
    if (filter === 'websites') return p.category === 'website' || p.category === 'webapp';
    if (filter === 'concierge') return p.category === 'qr-concierge';
    return true;
  });

  return (
    <div className="bg-white text-left">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#F5F8FC] to-white py-12 sm:py-16 border-b border-[#E1E8F2]/60">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Our Work' }]} onNavigate={onNavigate} />

          <div className="mt-4 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#0B4FE3]">
              PORTFOLIO
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1B33] mt-2 tracking-tight">
              Websites, Web Apps & Digital Concierges
            </h1>
            <p className="mt-3 text-base text-[#5B6B82] leading-relaxed">
              Explore live production demos and web systems engineered by HostPilot.
            </p>

            {/* Filter Tabs */}
            <div className="mt-8 inline-flex rounded-xl bg-slate-100 p-1" role="tablist">
              <button
                onClick={() => setFilter('all')}
                role="tab"
                aria-selected={filter === 'all'}
                className={`rounded-lg px-4 py-2 text-xs font-semibold transition-all ${
                  filter === 'all'
                    ? 'bg-white text-[#0B1B33] shadow-xs'
                    : 'text-[#5B6B82] hover:text-[#0B1B33]'
                }`}
              >
                All Projects
              </button>
              <button
                onClick={() => setFilter('websites')}
                role="tab"
                aria-selected={filter === 'websites'}
                className={`rounded-lg px-4 py-2 text-xs font-semibold transition-all ${
                  filter === 'websites'
                    ? 'bg-white text-[#0B1B33] shadow-xs'
                    : 'text-[#5B6B82] hover:text-[#0B1B33]'
                }`}
              >
                Websites & Apps
              </button>
              <button
                onClick={() => setFilter('concierge')}
                role="tab"
                aria-selected={filter === 'concierge'}
                className={`rounded-lg px-4 py-2 text-xs font-semibold transition-all ${
                  filter === 'concierge'
                    ? 'bg-white text-[#0B1B33] shadow-xs'
                    : 'text-[#5B6B82] hover:text-[#0B1B33]'
                }`}
              >
                QR Concierge Demos
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col rounded-[20px] bg-white border border-[#E1E8F2] shadow-[0_8px_30px_rgba(11,27,51,0.06)] hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden"
              >
                <div className="p-6 bg-gradient-to-b from-[#EAF1FF]/60 to-slate-100 flex items-center justify-center blueprint-grid border-b border-[#E1E8F2] min-h-[300px]">
                  {project.category === 'qr-concierge' ? (
                    <div className="scale-75 origin-center">
                      <PhoneMockup
                        title={project.name}
                        location={project.location}
                        tagline={project.description}
                        badge={project.tag}
                      />
                    </div>
                  ) : (
                    <div className="scale-85 origin-center">
                      <LaptopMockup
                        title={project.name}
                        subtitle={project.description}
                        badge="Custom Build"
                      />
                    </div>
                  )}
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="rounded-md bg-[#EAF1FF] px-2.5 py-1 text-[11px] font-bold text-[#0B4FE3]">
                      {project.tag}
                    </span>
                    <h3 className="text-lg font-bold text-[#0B1B33] mt-3 group-hover:text-[#0B4FE3] transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-xs font-medium text-[#5B6B82] mt-0.5">
                      {project.location}
                    </p>
                    <p className="text-xs text-[#1F2A3D] mt-2 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B4FE3]"
                      >
                        <span>Launch Live</span> <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    ) : (
                      <button
                        onClick={onOpenQuote}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B4FE3]"
                      >
                        <span>Start This Project</span> <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    )}

                    {project.caseStudy && (
                      <button
                        onClick={() => onNavigate(`/work/${project.slug}`)}
                        className="text-xs font-semibold text-[#5B6B82] hover:text-[#0B1B33]"
                      >
                        Case Study →
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Add your project slot */}
          <div className="mt-12 rounded-2xl border-2 border-dashed border-[#0B4FE3]/30 bg-white p-8 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-left">
              <div className="h-12 w-12 rounded-xl bg-[#EAF1FF] text-[#0B4FE3] flex items-center justify-center shrink-0">
                <PlusCircle className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#0B1B33]">
                  Have a project you want featured here?
                </h4>
                <p className="text-xs sm:text-sm text-[#5B6B82] mt-0.5">
                  Let's engineer your custom website, web app or QR concierge.
                </p>
              </div>
            </div>

            <button
              onClick={onOpenQuote}
              className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-[#0B4FE3] px-5 py-3 text-xs font-semibold text-white hover:bg-[#083CB3] transition-colors shadow-xs"
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
