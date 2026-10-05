import React, { useState } from 'react';
import { X, Send, CheckCircle2, Phone, Mail, Sparkles, AlertCircle } from 'lucide-react';
import { conciergeApplicationSchema, projectEnquirySchema } from '../../lib/validators';
import { checkClientRateLimit } from '../../lib/rate-limit';
import { trackEvent } from '../../lib/analytics';
import { siteConfig } from '../../config/site';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'enquiry' | 'concierge';
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultTab = 'enquiry',
}) => {
  const [activeTab, setActiveTab] = useState<'enquiry' | 'concierge'>(defaultTab);

  // Form states
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

  if (!isOpen) return null;

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setRateLimitError(null);

    const rateCheck = checkClientRateLimit();
    if (!rateCheck.allowed) {
      setRateLimitError(`Rate limit reached. Please wait ${rateCheck.remainingSeconds} seconds before sending again.`);
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
    // Simulate submission / send to endpoint
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      trackEvent('form_submit', { form: 'project_enquiry', interest: enquiryForm.interest });
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
      trackEvent('form_submit', { form: 'concierge_application', portfolioSize: conciergeForm.portfolioSize });
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setErrors({});
    setRateLimitError(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-fadeIn">
      <div
        className="relative w-full max-w-xl rounded-2xl bg-white p-6 sm:p-8 shadow-2xl border border-[#E1E8F2] overflow-hidden max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 rounded-lg p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close quote modal"
        >
          <X className="h-5 w-5" />
        </button>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="mx-auto h-16 w-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-[#0B1B33]">Message Received</h3>
            <p className="text-sm text-[#5B6B82] max-w-md mx-auto leading-relaxed">
              Thank you for reaching out to HostPilot. Our engineering lead reviews every project personally and will respond within 24 hours.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#0B4FE3] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#083CB3] transition-colors"
              >
                <Phone className="h-3.5 w-3.5" /> Urgent? Chat on WhatsApp
              </a>
              <button
                onClick={handleReset}
                className="w-full sm:w-auto rounded-xl border border-slate-200 px-5 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0B4FE3]">
                Direct Inquiry
              </span>
              <h3 id="modal-title" className="text-xl sm:text-2xl font-extrabold text-[#0B1B33] mt-1">
                Get a Free Quote
              </h3>
              <p className="text-xs sm:text-sm text-[#5B6B82] mt-1">
                Every business deserves a website that works as hard as you do, and the world's finest properties deserve a 24/7 digital concierge.
              </p>
            </div>

            {/* Accessible Tab Switcher */}
            <div className="flex rounded-xl bg-slate-100 p-1 mb-6" role="tablist">
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'enquiry'}
                onClick={() => { setActiveTab('enquiry'); setErrors({}); }}
                className={`flex-1 rounded-lg py-2 text-xs font-semibold transition-all ${
                  activeTab === 'enquiry'
                    ? 'bg-white text-[#0B1B33] shadow-xs'
                    : 'text-[#5B6B82] hover:text-[#0B1B33]'
                }`}
              >
                Project Enquiry
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'concierge'}
                onClick={() => { setActiveTab('concierge'); setErrors({}); }}
                className={`flex-1 rounded-lg py-2 text-xs font-semibold transition-all ${
                  activeTab === 'concierge'
                    ? 'bg-white text-[#0B1B33] shadow-xs'
                    : 'text-[#5B6B82] hover:text-[#0B1B33]'
                }`}
              >
                Concierge Application
              </button>
            </div>

            {rateLimitError && (
              <div className="mb-4 p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-800 flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-amber-600 shrink-0" />
                <span>{rateLimitError}</span>
              </div>
            )}

            {/* TAB 1: Project Enquiry */}
            {activeTab === 'enquiry' && (
              <form onSubmit={handleEnquirySubmit} className="space-y-4 text-left">
                {/* Honeypot hidden field */}
                <input
                  type="text"
                  name="website_verify_hp"
                  value={enquiryForm.honeypot}
                  onChange={(e) => setEnquiryForm({ ...enquiryForm, honeypot: e.target.value })}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0B1B33] mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={enquiryForm.name}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full rounded-xl border border-[#E1E8F2] px-3.5 py-2 text-xs text-slate-800 placeholder-slate-400 focus:border-[#0B4FE3] focus:outline-none"
                    />
                    {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0B1B33] mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={enquiryForm.email}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full rounded-xl border border-[#E1E8F2] px-3.5 py-2 text-xs text-slate-800 placeholder-slate-400 focus:border-[#0B4FE3] focus:outline-none"
                    />
                    {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0B1B33] mb-1">
                      I'm Interested In <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={enquiryForm.interest}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, interest: e.target.value as any })}
                      className="w-full rounded-xl border border-[#E1E8F2] px-3.5 py-2 text-xs text-slate-800 focus:border-[#0B4FE3] focus:outline-none bg-white"
                    >
                      <option value="Custom Website">Custom Website</option>
                      <option value="Web App">Web App</option>
                      <option value="Enterprise Application">Enterprise Application</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="QR Concierge">QR Digital Concierge</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0B1B33] mb-1">
                      Estimated Budget (Optional)
                    </label>
                    <input
                      type="text"
                      value={enquiryForm.budget}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, budget: e.target.value })}
                      placeholder="e.g. $3,000 - $8,000"
                      className="w-full rounded-xl border border-[#E1E8F2] px-3.5 py-2 text-xs text-slate-800 placeholder-slate-400 focus:border-[#0B4FE3] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0B1B33] mb-1">
                    Project Details <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={3}
                    value={enquiryForm.details}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, details: e.target.value })}
                    placeholder="Tell us about your goals, current bottlenecks, and desired timeline..."
                    className="w-full rounded-xl border border-[#E1E8F2] px-3.5 py-2 text-xs text-slate-800 placeholder-slate-400 focus:border-[#0B4FE3] focus:outline-none resize-none"
                  />
                  {errors.details && <p className="text-[11px] text-red-500 mt-1">{errors.details}</p>}
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <div className="text-[11px] text-slate-500">
                    🔒 Direct engineer review · No spam
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 rounded-xl bg-[#0B4FE3] px-5 py-2.5 text-xs font-semibold text-white shadow-xs hover:bg-[#083CB3] transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="h-3.5 w-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

            {/* TAB 2: Concierge Application */}
            {activeTab === 'concierge' && (
              <form onSubmit={handleConciergeSubmit} className="space-y-4 text-left">
                <input
                  type="text"
                  name="concierge_verify_hp"
                  value={conciergeForm.honeypot}
                  onChange={(e) => setConciergeForm({ ...conciergeForm, honeypot: e.target.value })}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="p-3 rounded-xl bg-[#EAF1FF] border border-blue-100 text-xs text-[#0B4FE3] leading-relaxed">
                  <strong>Private Intake:</strong> HostPilot Concierge is invite-only. We personally review every portfolio to ensure brand alignment.
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0B1B33] mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={conciergeForm.fullName}
                      onChange={(e) => setConciergeForm({ ...conciergeForm, fullName: e.target.value })}
                      placeholder="Alex Morgan"
                      className="w-full rounded-xl border border-[#E1E8F2] px-3.5 py-2 text-xs text-slate-800 placeholder-slate-400 focus:border-[#0B4FE3] focus:outline-none"
                    />
                    {errors.fullName && <p className="text-[11px] text-red-500 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0B1B33] mb-1">
                      Professional Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={conciergeForm.email}
                      onChange={(e) => setConciergeForm({ ...conciergeForm, email: e.target.value })}
                      placeholder="alex@estatemanagement.com"
                      className="w-full rounded-xl border border-[#E1E8F2] px-3.5 py-2 text-xs text-slate-800 placeholder-slate-400 focus:border-[#0B4FE3] focus:outline-none"
                    />
                    {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0B1B33] mb-1">
                      Primary Listing URL or Property Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={conciergeForm.listingUrlOrName}
                      onChange={(e) => setConciergeForm({ ...conciergeForm, listingUrlOrName: e.target.value })}
                      placeholder="airbnb.com/rooms/... or Villa Sol"
                      className="w-full rounded-xl border border-[#E1E8F2] px-3.5 py-2 text-xs text-slate-800 placeholder-slate-400 focus:border-[#0B4FE3] focus:outline-none"
                    />
                    {errors.listingUrlOrName && (
                      <p className="text-[11px] text-red-500 mt-1">{errors.listingUrlOrName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0B1B33] mb-1">
                      Portfolio Size <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={conciergeForm.portfolioSize}
                      onChange={(e) => setConciergeForm({ ...conciergeForm, portfolioSize: e.target.value as any })}
                      className="w-full rounded-xl border border-[#E1E8F2] px-3.5 py-2 text-xs text-slate-800 focus:border-[#0B4FE3] focus:outline-none bg-white"
                    >
                      <option value="1 Property">1 Property</option>
                      <option value="2 - 5 Properties">2 - 5 Properties</option>
                      <option value="6 - 15 Properties">6 - 15 Properties</option>
                      <option value="16+ Properties">16+ Properties</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <div className="text-[11px] text-slate-500">
                    Immediate review within 24h
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 rounded-xl bg-[#0B4FE3] px-5 py-2.5 text-xs font-semibold text-white shadow-xs hover:bg-[#083CB3] transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Reviewing...</span>
                    ) : (
                      <>
                        <span>Submit Application</span>
                        <Sparkles className="h-3.5 w-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
