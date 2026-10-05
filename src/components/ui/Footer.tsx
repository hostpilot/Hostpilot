import React from 'react';
import { Phone, Mail, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';
import { siteConfig } from '../../config/site';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#101B30] text-white pt-16 pb-12 border-t border-slate-800" role="contentinfo">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => handleNav('/')}
              className="flex items-center gap-2.5 text-left focus:outline-none"
              aria-label="HostPilot Home"
            >
              <div className="h-9 w-9 rounded-xl bg-[#0B4FE3] flex items-center justify-center text-white shadow-xs">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 22 8.5 22 12 15 15.5 22 22 22 12 2" />
                </svg>
              </div>
              <div>
                <div className="text-base font-extrabold tracking-tight text-white leading-none">
                  HOSTPILOT
                </div>
                <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mt-0.5">
                  Digital Agency
                </div>
              </div>
            </button>
            <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
              {siteConfig.subTagline}
            </p>
            <div className="pt-2 text-xs text-slate-400">
              Est. {siteConfig.established} · Modern Web Engineering & Hospitality Intelligence
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Services
            </div>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <button onClick={() => handleNav('/services/custom-web-development')} className="hover:text-white transition-colors text-left">
                  Custom Web Development
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/services/webapp-development')} className="hover:text-white transition-colors text-left">
                  WebApp Development
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/services/enterprise-applications')} className="hover:text-white transition-colors text-left">
                  Enterprise Applications
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/services/ui-ux-design')} className="hover:text-white transition-colors text-left">
                  UI/UX Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/services/qr-concierge')} className="hover:text-[#0B4FE3] text-blue-400 font-medium transition-colors text-left">
                  QR Digital Concierge
                </button>
              </li>
            </ul>
          </div>

          {/* Company & Resources */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Company
            </div>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <button onClick={() => handleNav('/about')} className="hover:text-white transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/work')} className="hover:text-white transition-colors">
                  Our Work
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/demos')} className="hover:text-white transition-colors">
                  Live Demos
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/pricing')} className="hover:text-white transition-colors">
                  Pricing Plans
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/faq')} className="hover:text-white transition-colors">
                  FAQ
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/blog')} className="hover:text-white transition-colors">
                  Blog & Guides
                </button>
              </li>
            </ul>
          </div>

          {/* Get In Touch Column */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Get in Touch
            </div>
            <div className="space-y-2.5 text-sm text-slate-300">
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#0B4FE3] transition-colors"
                aria-label="Direct WhatsApp message"
              >
                <div className="h-7 w-7 rounded-full bg-slate-800 flex items-center justify-center text-blue-400 shrink-0">
                  <Phone className="h-3.5 w-3.5" />
                </div>
                <span className="text-xs">{siteConfig.contact.phoneFormatted}</span>
              </a>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2 hover:text-[#0B4FE3] transition-colors"
                aria-label="Send direct email"
              >
                <div className="h-7 w-7 rounded-full bg-slate-800 flex items-center justify-center text-blue-400 shrink-0">
                  <Mail className="h-3.5 w-3.5" />
                </div>
                <span className="text-xs truncate">{siteConfig.contact.emailDisplay}</span>
              </a>

              <div className="pt-2">
                <button
                  onClick={() => handleNav('/contact')}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#0B4FE3] px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-[#083CB3] transition-colors"
                >
                  Request a Quote <ArrowUpRight className="h-3 w-3" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-4">
            <span>© {currentYear} HostPilot. All rights reserved.</span>
            <span className="hidden sm:inline">·</span>
            <span>Built for hosts and businesses who refuse to settle.</span>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={() => handleNav('/privacy')} className="hover:text-white transition-colors">
              Privacy Policy
            </button>
            <span>·</span>
            <button onClick={() => handleNav('/terms')} className="hover:text-white transition-colors">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
