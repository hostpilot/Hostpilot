// Draft: have it reviewed before launch.
import React from 'react';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';

export const PrivacyPage: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="bg-white text-left py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-6">
        <Breadcrumbs items={[{ name: 'Privacy Policy' }]} onNavigate={onNavigate} />

        <div className="border-b border-[#E1E8F2] pb-6">
          <h1 className="text-3xl font-extrabold text-[#0B1B33]">Privacy Policy</h1>
          <p className="text-xs text-[#5B6B82] mt-1">Last updated: March 2026 · HostPilot</p>
        </div>

        <div className="prose prose-slate text-xs sm:text-sm text-slate-700 space-y-4 leading-relaxed">
          <p>
            HostPilot ("we", "us", or "our") operates https://hostpilot.online. This policy outlines how we collect, use, and protect your information when you interact with our website, request quotes, or submit applications for our digital concierge service.
          </p>

          <h2 className="text-base font-bold text-[#0B1B33]">1. Information We Collect</h2>
          <p>
            When you complete our contact or concierge intake forms, we collect your name, professional email, project details, and listing URLs. We do not collect payment credentials or passwords directly on this marketing website.
          </p>

          <h2 className="text-base font-bold text-[#0B1B33]">2. Cookies and Analytics</h2>
          <p>
            We use privacy-preserving, first-party performance analytics to measure page load times, Core Web Vitals, and conversion funnel efficacy. We do not deploy third-party advertising tracking pixels or resell your data to data brokers.
          </p>

          <h2 className="text-base font-bold text-[#0B1B33]">3. How We Use Your Data</h2>
          <p>
            Information provided through inquiries is used solely to respond to your project request, prepare accurate quotes, and configure digital concierges.
          </p>

          <h2 className="text-base font-bold text-[#0B1B33]">4. Contact & Inquiries</h2>
          <p>
            If you have questions regarding this Privacy Policy or your data, please email Gethostpilot@gmail.com.
          </p>
        </div>
      </div>
    </div>
  );
};
