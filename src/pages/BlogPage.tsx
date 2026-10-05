import React, { useState } from 'react';
import { Clock, Calendar, ArrowRight, ArrowLeft, ChevronRight, BookOpen, Share2, Sparkles } from 'lucide-react';
import { blogPosts, BlogPost } from '../content/blogData';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { JsonLd } from '../components/ui/JsonLd';
import { generateBlogPostingSchema } from '../lib/schema';
import { servicesConfig } from '../config/services';

interface BlogPageProps {
  currentSlug?: string;
  onNavigate: (path: string) => void;
  onOpenQuote: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ currentSlug, onNavigate, onOpenQuote }) => {
  const currentPost = currentSlug ? blogPosts.find((p) => p.slug === currentSlug) : null;

  // Single Article View
  if (currentPost) {
    const relatedService = servicesConfig.find((s) => s.slug === currentPost.relatedServiceSlug);
    const otherPosts = blogPosts.filter((p) => p.published && p.slug !== currentPost.slug).slice(0, 2);

    return (
      <>
        <JsonLd
          schema={generateBlogPostingSchema({
            title: currentPost.title,
            description: currentPost.description,
            datePublished: currentPost.datePublished,
            slug: currentPost.slug,
            author: currentPost.author,
          })}
        />

        <article className="bg-white text-left">
          {/* Article Header */}
          <header className="bg-gradient-to-b from-[#F5F8FC] to-white py-12 sm:py-16 border-b border-[#E1E8F2]/60">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <Breadcrumbs
                items={[
                  { name: 'Blog', href: '/blog' },
                  { name: currentPost.title },
                ]}
                onNavigate={onNavigate}
              />

              <div className="mt-6 space-y-4">
                <div className="flex flex-wrap items-center gap-3 text-xs text-[#5B6B82]">
                  <span className="rounded-md bg-[#EAF1FF] px-2.5 py-1 font-bold text-[#0B4FE3]">
                    {currentPost.tags[0] || 'Guide'}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5 text-slate-400" />
                    {currentPost.datePublished}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-slate-400" />
                    {currentPost.readingTime}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0B1B33] tracking-tight leading-tight">
                  {currentPost.title}
                </h1>
                <p className="text-base sm:text-lg text-[#5B6B82] leading-relaxed">
                  {currentPost.description}
                </p>

                <div className="pt-2 text-xs text-slate-500 font-medium">
                  By {currentPost.author} · Engineering & Product Architecture
                </div>
              </div>
            </div>
          </header>

          {/* Article Body + Table of Contents */}
          <div className="py-12 sm:py-16">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Table of Contents (Sticky on desktop) */}
                {currentPost.toc.length > 0 && (
                  <aside className="lg:col-span-4 order-last lg:order-first">
                    <div className="sticky top-24 rounded-2xl bg-[#F5F8FC] p-5 border border-[#E1E8F2] space-y-3">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#0B1B33]">
                        Table of Contents
                      </div>
                      <nav className="space-y-2 text-xs">
                        {currentPost.toc.map((item) => (
                          <a
                            key={item.id}
                            href={`#${item.id}`}
                            className="block text-[#5B6B82] hover:text-[#0B4FE3] transition-colors leading-snug"
                          >
                            {item.text}
                          </a>
                        ))}
                      </nav>
                    </div>
                  </aside>
                )}

                {/* Main Markdown / Structured Content */}
                <div className={`${currentPost.toc.length > 0 ? 'lg:col-span-8' : 'lg:col-span-12'} prose prose-slate max-w-none space-y-6 text-sm sm:text-base leading-relaxed text-[#1F2A3D]`}>
                  {currentPost.content.split('\n\n').map((paragraph, idx) => {
                    const trimmed = paragraph.trim();
                    if (trimmed.startsWith('### ')) {
                      const headingText = trimmed.replace('### ', '');
                      const headingId = headingText.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                      return (
                        <h2
                          key={idx}
                          id={headingId}
                          className="text-xl sm:text-2xl font-bold text-[#0B1B33] pt-6 pb-2 border-b border-slate-100"
                        >
                          {headingText}
                        </h2>
                      );
                    }
                    if (trimmed.startsWith('- ')) {
                      const items = trimmed.split('\n- ').map((it) => it.replace('- ', ''));
                      return (
                        <ul key={idx} className="list-disc pl-5 space-y-2 text-sm text-[#1F2A3D]">
                          {items.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      );
                    }
                    if (trimmed.startsWith('1. ')) {
                      const items = trimmed.split('\n').filter((l) => l.trim().length > 0);
                      return (
                        <ol key={idx} className="list-decimal pl-5 space-y-2 text-sm text-[#1F2A3D]">
                          {items.map((item, i) => (
                            <li key={i}>{item.replace(/^\d+\.\s*/, '')}</li>
                          ))}
                        </ol>
                      );
                    }
                    if (!trimmed) return null;
                    return (
                      <p key={idx} className="text-[#1F2A3D]">
                        {trimmed}
                      </p>
                    );
                  })}

                  {/* Matching Service CTA Card */}
                  {relatedService && (
                    <div className="mt-12 rounded-2xl bg-[#EAF1FF] p-6 sm:p-8 border border-blue-200 text-left space-y-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#0B4FE3]">
                        Related HostPilot Solution
                      </span>
                      <h3 className="text-xl font-bold text-[#0B1B33]">
                        {relatedService.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#5B6B82] leading-relaxed">
                        {relatedService.oneLineOutcome}
                      </p>
                      <div className="pt-2 flex items-center gap-3">
                        <button
                          onClick={() => onNavigate(`/services/${relatedService.slug}`)}
                          className="inline-flex items-center gap-1.5 rounded-xl bg-[#0B4FE3] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#083CB3] transition-colors"
                        >
                          <span>Explore This Service</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Related Posts */}
              {otherPosts.length > 0 && (
                <div className="mt-16 pt-12 border-t border-slate-200">
                  <h3 className="text-xl font-bold text-[#0B1B33] mb-6">Further Reading</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {otherPosts.map((post) => (
                      <div
                        key={post.slug}
                        className="rounded-xl border border-[#E1E8F2] bg-white p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                      >
                        <div>
                          <div className="text-[11px] font-medium text-[#5B6B82]">{post.readingTime}</div>
                          <h4 className="text-base font-bold text-[#0B1B33] mt-1">{post.title}</h4>
                          <p className="text-xs text-[#5B6B82] mt-2 line-clamp-2">{post.description}</p>
                        </div>
                        <button
                          onClick={() => {
                            onNavigate(`/blog/${post.slug}`);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="mt-4 text-xs font-bold text-[#0B4FE3] inline-flex items-center gap-1 hover:underline"
                        >
                          <span>Read Guide</span> <ChevronRight className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </article>
      </>
    );
  }

  // Blog Archive View
  const publishedPosts = blogPosts.filter((p) => p.published);
  const draftPosts = blogPosts.filter((p) => !p.published);

  return (
    <div className="bg-white text-left">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#F5F8FC] to-white py-12 sm:py-16 border-b border-[#E1E8F2]/60">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Blog' }]} onNavigate={onNavigate} />

          <div className="mt-4 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#0B4FE3]">
              INSIGHTS & GUIDES
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1B33] mt-2 tracking-tight">
              Engineering, UX & Hospitality Tech
            </h1>
            <p className="mt-3 text-base text-[#5B6B82] leading-relaxed">
              Practical guides on web performance, Core Web Vitals, conversion architecture, and AI guest concierges.
            </p>
          </div>
        </div>
      </section>

      {/* Published Posts Grid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {publishedPosts.map((post) => (
              <div
                key={post.slug}
                className="group flex flex-col rounded-2xl bg-white border border-[#E1E8F2] shadow-[0_8px_30px_rgba(11,27,51,0.06)] hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden"
              >
                <div className="h-44 bg-gradient-to-tr from-[#EAF1FF] to-slate-100 p-6 flex flex-col justify-end blueprint-grid border-b border-[#E1E8F2]">
                  <span className="rounded-md bg-white px-2.5 py-1 text-[11px] font-bold text-[#0B4FE3] shadow-xs w-fit">
                    {post.tags[0] || 'Article'}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[#5B6B82]">
                      <span>{post.datePublished}</span>
                      <span>·</span>
                      <span>{post.readingTime}</span>
                    </div>

                    <h2 className="text-lg font-bold text-[#0B1B33] mt-2 group-hover:text-[#0B4FE3] transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-xs text-[#5B6B82] mt-2 line-clamp-3 leading-relaxed">
                      {post.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <button
                      onClick={() => onNavigate(`/blog/${post.slug}`)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B4FE3] hover:text-[#083CB3]"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Upcoming Editorial Roadmaps (Drafts) */}
          <div className="mt-20 pt-12 border-t border-slate-200">
            <div className="max-w-xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                EDITORIAL PIPELINE
              </span>
              <h3 className="text-xl font-bold text-[#0B1B33] mt-1">
                Upcoming Guides in Editorial Review
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {draftPosts.map((post) => (
                <div
                  key={post.slug}
                  className="rounded-xl border border-dashed border-slate-300 bg-slate-50/60 p-4 text-left space-y-1"
                >
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    In Review
                  </span>
                  <h4 className="text-sm font-semibold text-slate-800">{post.title}</h4>
                  <p className="text-xs text-slate-500 line-clamp-2">{post.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
