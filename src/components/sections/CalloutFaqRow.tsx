import React, { useState } from 'react';
import { MessageSquare, ArrowRight, ChevronDown } from 'lucide-react';
import { faqConfig } from '../../config/faq';
import { generateFaqSchema } from '../../lib/schema';
import { JsonLd } from '../ui/JsonLd';

interface CalloutFaqRowProps {
  onOpenQuote: () => void;
  onNavigate: (path: string) => void;
}

export const CalloutFaqRow: React.FC<CalloutFaqRowProps> = ({ onOpenQuote, onNavigate }) => {
  // First 5 FAQ items for the Home page
  const homeFaqs = faqConfig.slice(0, 5);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <JsonLd schema={generateFaqSchema(homeFaqs)} />
      <section className="py-20 lg:py-28 bg-white" id="faq">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Solid Blue Card */}
            <div className="lg:col-span-5 rounded-[24px] bg-[#0B4FE3] text-white p-8 sm:p-10 shadow-xl flex flex-col justify-between min-h-[420px] text-left relative overflow-hidden">
              <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" aria-hidden="true" />

              <div className="relative z-10 space-y-4">
                <div className="h-12 w-12 rounded-2xl bg-white/15 flex items-center justify-center text-white border border-white/20">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                  Ready to Build Something Better?
                </h3>
                <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
                  Let's discuss your project and show you how HostPilot can save you time and money. Whether you need a high-converting website or a 24/7 guest concierge, we are ready to pilot.
                </p>
              </div>

              <div className="relative z-10 pt-8">
                <button
                  onClick={onOpenQuote}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#0B4FE3] shadow-md hover:bg-blue-50 transition-all hover:translate-x-0.5"
                >
                  <span>Get a Free Quote</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Right Column: FAQ Accordion (5 items) */}
            <div className="lg:col-span-7 text-left space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#0B4FE3]">
                  FAQ
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B33] mt-1 tracking-tight">
                  Frequently Asked Questions
                </h3>
              </div>

              <div className="space-y-3 pt-2">
                {homeFaqs.map((faq, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <div
                      key={faq.id}
                      className="rounded-xl border border-[#E1E8F2] bg-white overflow-hidden transition-colors"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-sm sm:text-base font-bold text-[#0B1B33] hover:text-[#0B4FE3] transition-colors focus:outline-none"
                        aria-expanded={isOpen}
                      >
                        <span className="pr-4">{faq.question}</span>
                        <ChevronDown
                          className={`h-4 w-4 text-[#0B4FE3] shrink-0 transition-transform duration-200 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-4 sm:px-5 pb-5 pt-0 text-xs sm:text-sm text-[#5B6B82] leading-relaxed border-t border-slate-50">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('/faq')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B4FE3] hover:text-[#083CB3] transition-colors"
                >
                  <span>View All 8 Frequently Asked Questions</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
