import React, { useState } from 'react';
import { Phone, Mail, Clock, Send, Sparkles, CheckCircle2, AlertCircle, ShieldCheck } from 'lucide-react';
import { conciergeApplicationSchema, projectEnquirySchema } from '../lib/validators';
import { checkClientRateLimit } from '../lib/rate-limit';
import { trackEvent } from '../lib/analytics';
import { siteConfig } from '../config/site';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'enquiry' | 'concierge'>('enquiry');

  // Forms
  const [enquiryForm, setEnquiryForm] = useState({
    name: '',
    email: '',
    interest: 'Custom Website' as 'Custom Website' | 'Web App' | 'Enterprise Application' | 'UI/UX Design' | 'QR Concierge',
    details: '',
    budget: '',
    honeypot: '',
  });

  const [conciergeForm, setConciergeForm] = useState({
    fullName: '',
    email: '',
    listingUrlOrName: '',
    portfolioSize: '1 Property' as '1 Property' | '2 - 5 Properties' | '6 - 15 Properties' | '16+ Properties',
    honeypot: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [rateLimitError, setRateLimitError] = useState<string | null>(null);

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setRateLimitError(null);

    const rateCheck = checkClientRateLimit();
    if (!rateCheck.allowed) {
      setRateLimitError(`Rate limit reached. Please wait ${rateCheck.remainingSeconds} seconds before trying again.`);
      return;
    }

    const result = projectEnquirySchema.safeParse(enquiryForm);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const err of result.error.issues) {
        if (err.path[0] !== undefined) fieldErrors[String(err.path[0])] = err.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      trackEvent('form_submit', { form: 'project_enquiry' });
    }, 600);
  };

  const handleConciergeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setRateLimitError(null);

    const rateCheck = checkClientRateLimit();
    if (!rateCheck.allowed) {
      setRateLimitError(`Rate limit reached. Please wait ${rateCheck.remainingSeconds} seconds before submitting again.`);
      return;
    }

    const result = conciergeApplicationSchema.safeParse(conciergeForm);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const err of result.error.issues) {
        if (err.path[0] !== undefined) fieldErrors[String(err.path[0])] = err.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      trackEvent('form_submit', { form: 'concierge_application' });
    }, 600);
  };

  return (
    <div className="bg-white text-left">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#F5F8FC] to-white py-12 sm:py-16 border-b border-[#E1E8F2]/60">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Contact' }]} onNavigate={onNavigate} />

          <div className="mt-4 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#0B4FE3]">
              START A PROJECT
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1B33] mt-2 tracking-tight">
              Get a Free Quote
            </h1>
            <p className="mt-3 text-base sm:text-lg text-[#5B6B82] leading-relaxed">
              The world's finest properties deserve the finest concierge, and every business deserves a website that works.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Form + Side Panel */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Form Area */}
            <div className="lg:col-span-8 rounded-2xl border border-[#E1E8F2] bg-white p-6 sm:p-10 shadow-[0_8px_30px_rgba(11,27,51,0.06)]">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="mx-auto h-16 w-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0B1B33]">Message Sent Successfully</h3>
                  <p className="text-sm text-[#5B6B82] max-w-md mx-auto leading-relaxed">
                    Thank you. We have received your submission. A senior engineer will review your project requirements and respond within 24 hours.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                    <a
                      href={siteConfig.contact.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0B4FE3] px-6 py-3 text-xs font-bold text-white hover:bg-[#083CB3]"
                    >
                      <Phone className="h-3.5 w-3.5" /> Need immediate reply? Chat on WhatsApp
                    </a>
                  </div>
                </div>
              ) : (
                <div>
                  {/* Two Accessible Tabs */}
                  <div className="flex rounded-xl bg-slate-100 p-1 mb-8" role="tablist">
                    <button
                      type="button"
                      role="tab"
                      aria-selected={activeTab === 'enquiry'}
                      onClick={() => { setActiveTab('enquiry'); setErrors({}); }}
                      className={`flex-1 rounded-lg py-2.5 text-xs font-bold transition-all ${
                        activeTab === 'enquiry'
                          ? 'bg-white text-[#0B1B33] shadow-xs'
                          : 'text-[#5B6B82] hover:text-[#0B1B33]'
                      }`}
                    >
                      Project Enquiry (Web & Apps)
                    </button>
                    <button
                      type="button"
                      role="tab"
                      aria-selected={activeTab === 'concierge'}
                      onClick={() => { setActiveTab('concierge'); setErrors({}); }}
                      className={`flex-1 rounded-lg py-2.5 text-xs font-bold transition-all ${
                        activeTab === 'concierge'
                          ? 'bg-white text-[#0B1B33] shadow-xs'
                          : 'text-[#5B6B82] hover:text-[#0B1B33]'
                      }`}
                    >
                      Private Concierge Application
                    </button>
                  </div>

                  {rateLimitError && (
                    <div className="mb-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-800 flex items-center gap-2" role="alert">
                      <AlertCircle className="h-4 w-4 text-amber-600 shrink-0" />
                      <span>{rateLimitError}</span>
                    </div>
                  )}

                  {/* TAB 1: Project Enquiry */}
                  {activeTab === 'enquiry' && (
                    <form onSubmit={handleEnquirySubmit} className="space-y-5" noValidate>
                      <input
                        type="text"
                        name="hp_lead_verify"
                        value={enquiryForm.honeypot}
                        onChange={(e) => setEnquiryForm({ ...enquiryForm, honeypot: e.target.value })}
                        className="hidden"
                        tabIndex={-1}
                        autoComplete="off"
                      />

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="enquiry-name" className="block text-xs font-bold text-[#0B1B33] mb-1.5">
                            Your Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="enquiry-name"
                            type="text"
                            value={enquiryForm.name}
                            onChange={(e) => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
                            placeholder="Sarah Jenkins"
                            className="w-full rounded-xl border border-[#E1E8F2] px-4 py-2.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:border-[#0B4FE3] focus:outline-none"
                            aria-describedby={errors.name ? 'enquiry-name-err' : undefined}
                          />
                          {errors.name && (
                            <p id="enquiry-name-err" className="text-xs text-red-500 mt-1" role="alert">
                              {errors.name}
                            </p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="enquiry-email" className="block text-xs font-bold text-[#0B1B33] mb-1.5">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="enquiry-email"
                            type="email"
                            value={enquiryForm.email}
                            onChange={(e) => setEnquiryForm({ ...enquiryForm, email: e.target.value })}
                            placeholder="sarah@company.com"
                            className="w-full rounded-xl border border-[#E1E8F2] px-4 py-2.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:border-[#0B4FE3] focus:outline-none"
                            aria-describedby={errors.email ? 'enquiry-email-err' : undefined}
                          />
                          {errors.email && (
                            <p id="enquiry-email-err" className="text-xs text-red-500 mt-1" role="alert">
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="enquiry-interest" className="block text-xs font-bold text-[#0B1B33] mb-1.5">
                            I'm Interested In <span className="text-red-500">*</span>
                          </label>
                          <select
                            id="enquiry-interest"
                            value={enquiryForm.interest}
                            onChange={(e) => setEnquiryForm({ ...enquiryForm, interest: e.target.value as any })}
                            className="w-full rounded-xl border border-[#E1E8F2] px-4 py-2.5 text-xs sm:text-sm text-slate-800 focus:border-[#0B4FE3] focus:outline-none bg-white"
                          >
                            <option value="Custom Website">Custom Website</option>
                            <option value="Web App">Web App</option>
                            <option value="Enterprise Application">Enterprise Application</option>
                            <option value="UI/UX Design">UI/UX Design</option>
                            <option value="QR Concierge">QR Digital Concierge</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="enquiry-budget" className="block text-xs font-bold text-[#0B1B33] mb-1.5">
                            Estimated Budget (Optional)
                          </label>
                          <input
                            id="enquiry-budget"
                            type="text"
                            value={enquiryForm.budget}
                            onChange={(e) => setEnquiryForm({ ...enquiryForm, budget: e.target.value })}
                            placeholder="e.g. $5,000 - $10,000"
                            className="w-full rounded-xl border border-[#E1E8F2] px-4 py-2.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:border-[#0B4FE3] focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="enquiry-details" className="block text-xs font-bold text-[#0B1B33] mb-1.5">
                          Project Details & Goals <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="enquiry-details"
                          rows={4}
                          value={enquiryForm.details}
                          onChange={(e) => setEnquiryForm({ ...enquiryForm, details: e.target.value })}
                          placeholder="Describe your current setup, target launch date, and key outcomes..."
                          className="w-full rounded-xl border border-[#E1E8F2] px-4 py-2.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:border-[#0B4FE3] focus:outline-none"
                          aria-describedby={errors.details ? 'enquiry-details-err' : undefined}
                        />
                        {errors.details && (
                          <p id="enquiry-details-err" className="text-xs text-red-500 mt-1" role="alert">
                            {errors.details}
                          </p>
                        )}
                      </div>

                      <div className="pt-2 flex items-center justify-between">
                        <div className="text-xs text-slate-500 flex items-center gap-1.5">
                          <ShieldCheck className="h-4 w-4 text-emerald-600" />
                          <span>Strict client confidentiality guaranteed</span>
                        </div>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="inline-flex items-center gap-2 rounded-xl bg-[#0B4FE3] px-6 py-3 text-xs font-bold text-white shadow-xs hover:bg-[#083CB3] transition-colors disabled:opacity-50"
                        >
                          {isSubmitting ? <span>Sending...</span> : <><span>Send Message</span> <Send className="h-3.5 w-3.5" /></>}
                        </button>
                      </div>
                    </form>
                  )}

                  {/* TAB 2: Private Concierge Application */}
                  {activeTab === 'concierge' && (
                    <form onSubmit={handleConciergeSubmit} className="space-y-5" noValidate>
                      <input
                        type="text"
                        name="hp_concierge_verify"
                        value={conciergeForm.honeypot}
                        onChange={(e) => setConciergeForm({ ...conciergeForm, honeypot: e.target.value })}
                        className="hidden"
                        tabIndex={-1}
                        autoComplete="off"
                      />

                      <div className="p-4 rounded-xl bg-[#EAF1FF] border border-blue-100 text-xs text-[#0B4FE3] leading-relaxed">
                        <span className="font-bold">Private Intake:</span> HostPilot is invite-only. We review every portfolio personally to ensure our AI concierge matches the high standards of your property.
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="concierge-name" className="block text-xs font-bold text-[#0B1B33] mb-1.5">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="concierge-name"
                            type="text"
                            value={conciergeForm.fullName}
                            onChange={(e) => setConciergeForm({ ...conciergeForm, fullName: e.target.value })}
                            placeholder="Michael Scott"
                            className="w-full rounded-xl border border-[#E1E8F2] px-4 py-2.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:border-[#0B4FE3] focus:outline-none"
                            aria-describedby={errors.fullName ? 'concierge-name-err' : undefined}
                          />
                          {errors.fullName && (
                            <p id="concierge-name-err" className="text-xs text-red-500 mt-1" role="alert">
                              {errors.fullName}
                            </p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="concierge-email" className="block text-xs font-bold text-[#0B1B33] mb-1.5">
                            Professional Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="concierge-email"
                            type="email"
                            value={conciergeForm.email}
                            onChange={(e) => setConciergeForm({ ...conciergeForm, email: e.target.value })}
                            placeholder="michael@luxuryrentals.com"
                            className="w-full rounded-xl border border-[#E1E8F2] px-4 py-2.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:border-[#0B4FE3] focus:outline-none"
                            aria-describedby={errors.email ? 'concierge-email-err' : undefined}
                          />
                          {errors.email && (
                            <p id="concierge-email-err" className="text-xs text-red-500 mt-1" role="alert">
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="concierge-url" className="block text-xs font-bold text-[#0B1B33] mb-1.5">
                            Primary Listing URL or Property Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="concierge-url"
                            type="text"
                            value={conciergeForm.listingUrlOrName}
                            onChange={(e) => setConciergeForm({ ...conciergeForm, listingUrlOrName: e.target.value })}
                            placeholder="airbnb.com/rooms/... or Malibu Haven"
                            className="w-full rounded-xl border border-[#E1E8F2] px-4 py-2.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:border-[#0B4FE3] focus:outline-none"
                            aria-describedby={errors.listingUrlOrName ? 'concierge-url-err' : undefined}
                          />
                          {errors.listingUrlOrName && (
                            <p id="concierge-url-err" className="text-xs text-red-500 mt-1" role="alert">
                              {errors.listingUrlOrName}
                            </p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="concierge-size" className="block text-xs font-bold text-[#0B1B33] mb-1.5">
                            Portfolio Size <span className="text-red-500">*</span>
                          </label>
                          <select
                            id="concierge-size"
                            value={conciergeForm.portfolioSize}
                            onChange={(e) => setConciergeForm({ ...conciergeForm, portfolioSize: e.target.value as any })}
                            className="w-full rounded-xl border border-[#E1E8F2] px-4 py-2.5 text-xs sm:text-sm text-slate-800 focus:border-[#0B4FE3] focus:outline-none bg-white"
                          >
                            <option value="1 Property">1 Property</option>
                            <option value="2 - 5 Properties">2 - 5 Properties</option>
                            <option value="6 - 15 Properties">6 - 15 Properties</option>
                            <option value="16+ Properties">16+ Properties</option>
                          </select>
                        </div>
                      </div>

                      <div className="pt-2 flex items-center justify-between">
                        <div className="text-xs text-slate-500">
                          Reviewed within 24 hours
                        </div>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="inline-flex items-center gap-2 rounded-xl bg-[#0B4FE3] px-6 py-3 text-xs font-bold text-white shadow-xs hover:bg-[#083CB3] transition-colors disabled:opacity-50"
                        >
                          {isSubmitting ? <span>Reviewing...</span> : <><span>Submit Application</span> <Sparkles className="h-3.5 w-3.5" /></>}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              )}
            </div>

            {/* Right Column: Side Panel */}
            <div className="lg:col-span-4 space-y-6">
              <div className="rounded-2xl border border-[#E1E8F2] bg-[#F5F8FC] p-6 space-y-4">
                <h3 className="text-base font-bold text-[#0B1B33]">Direct Communication</h3>
                <p className="text-xs text-[#5B6B82] leading-relaxed">
                  Prefer a conversation right away? Reach our team directly via WhatsApp or email.
                </p>

                <div className="space-y-3 pt-2">
                  <a
                    href={siteConfig.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#E1E8F2] text-xs font-bold text-[#0B1B33] hover:text-[#0B4FE3] transition-colors"
                  >
                    <div className="h-8 w-8 rounded-lg bg-[#EAF1FF] text-[#0B4FE3] flex items-center justify-center shrink-0">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase font-semibold">WhatsApp</div>
                      <div>{siteConfig.contact.phoneFormatted}</div>
                    </div>
                  </a>

                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#E1E8F2] text-xs font-bold text-[#0B1B33] hover:text-[#0B4FE3] transition-colors"
                  >
                    <div className="h-8 w-8 rounded-lg bg-[#EAF1FF] text-[#0B4FE3] flex items-center justify-center shrink-0">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase font-semibold">Email</div>
                      <div className="truncate">{siteConfig.contact.emailDisplay}</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-[#E1E8F2] bg-white p-6 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0B1B33]">
                  <Clock className="h-4 w-4 text-[#0B4FE3]" />
                  <span>Guaranteed Response Time</span>
                </div>
                <p className="text-xs text-[#5B6B82] leading-relaxed">
                  We reply to all inquiries within 24 hours on business days. Emergency host requests via WhatsApp receive expedited handling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
