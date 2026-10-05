import React, { useState } from 'react';
import { ChevronDown, Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { faqConfig } from '../config/faq';
import { siteConfig } from '../config/site';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { JsonLd } from '../components/ui/JsonLd';
import { generateFaqSchema } from '../lib/schema';

interface FaqPageProps {
  onNavigate: (path: string) => void;
  onOpenQuote: () => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate, onOpenQuote }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <JsonLd schema={generateFaqSchema(faqConfig)} />

      <div className="bg-white text-left">
        {/* Hero Header */}
        <section className="bg-gradient-to-b from-[#F5F8FC] to-white py-12 sm:py-16 border-b border-[#E1E8F2]/60">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ name: 'FAQ' }]} onNavigate={onNavigate} />

            <div className="mt-4 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#0B4FE3]">
                COMMON QUESTIONS
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1B33] mt-2 tracking-tight">
                Questions, Answered.
              </h1>
              <p className="mt-3 text-base text-[#5B6B82] leading-relaxed">
                Everything you need to know before applying. If you don't find your answer here, reach out directly via WhatsApp.
              </p>

              <div className="mt-6 flex items-center gap-3">
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#0B4FE3] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#083CB3] transition-colors shadow-xs"
                >
                  <Phone className="h-3.5 w-3.5" />
                  <span>Chat on WhatsApp ({siteConfig.contact.phoneFormatted})</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* All 8 Accordion Items */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-4">
            {faqConfig.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-[#E1E8F2] bg-white overflow-hidden shadow-xs transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left text-base sm:text-lg font-bold text-[#0B1B33] hover:text-[#0B4FE3] transition-colors focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-[#0B4FE3] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-0 text-sm text-[#5B6B82] leading-relaxed border-t border-slate-50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Bottom Support Callout */}
            <div className="mt-12 rounded-2xl bg-[#F5F8FC] p-8 border border-[#E1E8F2] text-center space-y-3">
              <h3 className="text-lg font-bold text-[#0B1B33]">Still have questions?</h3>
              <p className="text-xs sm:text-sm text-[#5B6B82] max-w-md mx-auto">
                We're always happy to discuss technical requirements or guide you through a demo.
              </p>
              <div className="pt-2 flex justify-center gap-3">
                <button
                  onClick={onOpenQuote}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-[#0B4FE3] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#083CB3]"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
