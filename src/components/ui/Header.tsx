import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight } from 'lucide-react';
import { siteConfig } from '../../config/site';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate, onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Work', href: '/work' },
    { name: 'Live Demos', href: '/demos' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Blog', href: '/blog' },
  ];

  const handleLinkClick = (href: string) => {
    onNavigate(href);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-all duration-200 ${
        isScrolled ? 'border-b border-[#E1E8F2] shadow-xs py-3' : 'border-b border-[#E1E8F2]/60 py-4'
      }`}
    >
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo Left */}
          <button
            onClick={() => handleLinkClick('/')}
            className="flex items-center gap-2.5 text-left focus-visible:ring-2 focus-visible:ring-[#0B4FE3] rounded-lg transition-transform"
            aria-label="HostPilot Home"
          >
            <div className="h-9 w-9 rounded-xl bg-[#0B4FE3] flex items-center justify-center text-white shadow-xs">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 22 8.5 22 12 15 15.5 22 22 22 12 2" />
              </svg>
            </div>
            <div>
              <div className="text-base font-extrabold tracking-tight text-[#0B1B33] leading-none">
                HOSTPILOT
              </div>
              <div className="text-[10px] font-semibold text-[#5B6B82] uppercase tracking-wider mt-0.5">
                Digital Agency
              </div>
            </div>
          </button>

          {/* Desktop Nav Center */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-[#1F2A3D]" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = currentPath === link.href || (link.href !== '/' && currentPath.startsWith(link.href));
              return (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.href)}
                  className={`relative py-1 transition-colors hover:text-[#0B4FE3] whitespace-nowrap ${
                    isActive ? 'text-[#0B4FE3] font-semibold' : 'text-[#1F2A3D]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0B4FE3] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Zone */}
          <div className="hidden sm:flex items-center gap-3 xl:gap-4 shrink-0">
            {/* WhatsApp with phone icon */}
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-[#0B1B33] hover:text-[#0B4FE3] px-2 py-1.5 rounded-lg transition-colors whitespace-nowrap"
              aria-label="Direct WhatsApp contact"
            >
              <div className="h-6 w-6 rounded-full bg-[#EAF1FF] flex items-center justify-center text-[#0B4FE3]">
                <Phone className="h-3 w-3" />
              </div>
              <span>{siteConfig.contact.phoneFormatted}</span>
            </a>

            {/* Primary Get a Free Quote Button */}
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 rounded-xl bg-[#0B4FE3] px-4 py-2.5 text-xs font-semibold text-white shadow-xs hover:bg-[#083CB3] transition-all hover:translate-x-0.5 whitespace-nowrap focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0B4FE3]"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenQuote}
              className="rounded-lg bg-[#0B4FE3] px-2.5 py-1.5 text-xs font-semibold text-white"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-Down Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E1E8F2] bg-white px-4 pt-3 pb-6 shadow-lg animate-fadeIn">
          <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.href)}
                className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  currentPath === link.href ? 'bg-[#EAF1FF] text-[#0B4FE3] font-semibold' : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </button>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-[#0B1B33] bg-slate-50 rounded-lg"
              >
                <Phone className="h-4 w-4 text-[#0B4FE3]" />
                WhatsApp: {siteConfig.contact.phoneFormatted}
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#0B4FE3] py-2.5 text-sm font-semibold text-white shadow-xs"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
