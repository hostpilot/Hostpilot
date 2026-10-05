// Draft: have it reviewed before launch.
import React from 'react';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';

export const TermsPage: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="bg-white text-left py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-6">
        <Breadcrumbs items={[{ name: 'Terms of Service' }]} onNavigate={onNavigate} />

        <div className="border-b border-[#E1E8F2] pb-6">
          <h1 className="text-3xl font-extrabold text-[#0B1B33]">Terms of Service</h1>
          <p className="text-xs text-[#5B6B82] mt-1">Last updated: March 2026 · HostPilot</p>
        </div>

        <div className="prose prose-slate text-xs sm:text-sm text-slate-700 space-y-4 leading-relaxed">
          <p>
            By accessing or using the HostPilot website (https://hostpilot.online) and our services, you agree to be bound by these terms.
          </p>

          <h2 className="text-base font-bold text-[#0B1B33]">1. Services & Engagements</h2>
          <p>
            HostPilot provides custom web design, web application engineering, enterprise software development, and QR-powered digital concierges. Project scopes, timelines, milestone deliverables, and fees are defined in individual statements of work (SOW) executed between HostPilot and each client.
          </p>

          <h2 className="text-base font-bold text-[#0B1B33]">2. Code Ownership</h2>
          <p>
            Upon full settlement of project invoices, clients receive 100% intellectual property ownership of their bespoke application codebase, design tokens, and digital assets, excluding HostPilot proprietary core libraries or third-party open-source components.
          </p>

          <h2 className="text-base font-bold text-[#0B1B33]">3. Digital Concierge Uptime & SLA</h2>
          <p>
            Our vacation rental concierges run on global edge infrastructure designed for high availability. Scheduled maintenance and system updates are communicated in advance.
          </p>

          <h2 className="text-base font-bold text-[#0B1B33]">4. Governing Law & Contact</h2>
          <p>
            For questions regarding these terms, reach us at Gethostpilot@gmail.com or via WhatsApp at +91 6370839897.
          </p>
        </div>
      </div>
    </div>
  );
};
