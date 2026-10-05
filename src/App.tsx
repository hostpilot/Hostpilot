import React, { useState, useEffect } from 'react';
import { Header } from './components/ui/Header';
import { Footer } from './components/ui/Footer';
import { CookieBanner } from './components/ui/CookieBanner';
import { QuoteModal } from './components/ui/QuoteModal';

// Home Page Sections
import { HomeHero } from './components/sections/HomeHero';
import { SolutionsGrid } from './components/sections/SolutionsGrid';
import { HowItWorks } from './components/sections/HowItWorks';
import { BlueStatsBand } from './components/sections/BlueStatsBand';
import { FeaturedProjects } from './components/sections/FeaturedProjects';
import { CalloutFaqRow } from './components/sections/CalloutFaqRow';

// Inner Pages
import { ServicesOverview } from './pages/ServicesOverview';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { QrConciergePage } from './pages/QrConciergePage';
import { DemosPage } from './pages/DemosPage';
import { WorkPage } from './pages/WorkPage';
import { PricingPage } from './pages/PricingPage';
import { FaqPage } from './pages/FaqPage';
import { AboutPage } from './pages/AboutPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { NotFoundPage } from './pages/NotFoundPage';

import { seoConfig } from './config/seo';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteModalTab, setQuoteModalTab] = useState<'enquiry' | 'concierge'>('enquiry');

  // Handle client navigation and history
  const navigate = (path: string) => {
    // Check 301 redirects requested in spec:
    // /how-it-works -> /services/qr-concierge
    // /demo -> /demos
    let targetPath = path;
    if (path === '/how-it-works') targetPath = '/services/qr-concierge';
    if (path === '/demo') targetPath = '/demos';

    setCurrentPath(targetPath);
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', targetPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Sync document title and meta description dynamically based on current route
  useEffect(() => {
    let title = seoConfig.home.title;
    let desc = seoConfig.home.description;

    if (currentPath === '/services') {
      title = seoConfig.services.title;
      desc = seoConfig.services.description;
    } else if (currentPath === '/services/custom-web-development') {
      title = seoConfig.customWebDevelopment.title;
      desc = seoConfig.customWebDevelopment.description;
    } else if (currentPath === '/services/webapp-development') {
      title = seoConfig.webappDevelopment.title;
      desc = seoConfig.webappDevelopment.description;
    } else if (currentPath === '/services/enterprise-applications') {
      title = seoConfig.enterpriseApplications.title;
      desc = seoConfig.enterpriseApplications.description;
    } else if (currentPath === '/services/ui-ux-design') {
      title = seoConfig.uiUxDesign.title;
      desc = seoConfig.uiUxDesign.description;
    } else if (currentPath === '/services/qr-concierge') {
      title = seoConfig.qrConcierge.title;
      desc = seoConfig.qrConcierge.description;
    } else if (currentPath === '/demos') {
      title = seoConfig.demos.title;
      desc = seoConfig.demos.description;
    } else if (currentPath.startsWith('/work')) {
      title = seoConfig.work.title;
      desc = seoConfig.work.description;
    } else if (currentPath === '/pricing') {
      title = seoConfig.pricing.title;
      desc = seoConfig.pricing.description;
    } else if (currentPath === '/faq') {
      title = seoConfig.faq.title;
      desc = seoConfig.faq.description;
    } else if (currentPath === '/about') {
      title = seoConfig.about.title;
      desc = seoConfig.about.description;
    } else if (currentPath.startsWith('/blog')) {
      title = seoConfig.blog.title;
      desc = seoConfig.blog.description;
    } else if (currentPath === '/contact') {
      title = seoConfig.contact.title;
      desc = seoConfig.contact.description;
    }

    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', desc);
  }, [currentPath]);

  const openQuoteModal = (tab: 'enquiry' | 'concierge' = 'enquiry') => {
    setQuoteModalTab(tab);
    setQuoteModalOpen(true);
  };

  // Route resolver
  const renderCurrentRoute = () => {
    // 301 redirects normalized
    if (currentPath === '/how-it-works') {
      return <QrConciergePage onNavigate={navigate} onOpenQuote={() => openQuoteModal('concierge')} />;
    }
    if (currentPath === '/demo') {
      return <DemosPage onNavigate={navigate} onOpenQuote={() => openQuoteModal('concierge')} />;
    }

    // Home
    if (currentPath === '/' || currentPath === '') {
      return (
        <main id="main-content">
          <HomeHero onNavigate={navigate} onOpenQuote={() => openQuoteModal('enquiry')} />
          <SolutionsGrid onNavigate={navigate} />
          <HowItWorks />
          <BlueStatsBand />
          <FeaturedProjects onNavigate={navigate} onOpenQuote={() => openQuoteModal('enquiry')} />
          <CalloutFaqRow onOpenQuote={() => openQuoteModal('enquiry')} onNavigate={navigate} />
        </main>
      );
    }

    // Services
    if (currentPath === '/services') {
      return (
        <main id="main-content">
          <ServicesOverview onNavigate={navigate} onOpenQuote={() => openQuoteModal('enquiry')} />
        </main>
      );
    }

    if (currentPath === '/services/qr-concierge') {
      return (
        <main id="main-content">
          <QrConciergePage onNavigate={navigate} onOpenQuote={() => openQuoteModal('concierge')} />
        </main>
      );
    }

    if (currentPath.startsWith('/services/')) {
      const slug = currentPath.replace('/services/', '');
      return (
        <main id="main-content">
          <ServiceDetailPage slug={slug} onNavigate={navigate} onOpenQuote={() => openQuoteModal('enquiry')} />
        </main>
      );
    }

    // Live Demos
    if (currentPath === '/demos') {
      return (
        <main id="main-content">
          <DemosPage onNavigate={navigate} onOpenQuote={() => openQuoteModal('concierge')} />
        </main>
      );
    }

    // Work / Case Studies
    if (currentPath === '/work') {
      return (
        <main id="main-content">
          <WorkPage onNavigate={navigate} onOpenQuote={() => openQuoteModal('enquiry')} />
        </main>
      );
    }

    if (currentPath.startsWith('/work/')) {
      const slug = currentPath.replace('/work/', '');
      return (
        <main id="main-content">
          <WorkPage currentSlug={slug} onNavigate={navigate} onOpenQuote={() => openQuoteModal('enquiry')} />
        </main>
      );
    }

    // Pricing
    if (currentPath === '/pricing') {
      return (
        <main id="main-content">
          <PricingPage onNavigate={navigate} onOpenQuote={() => openQuoteModal('enquiry')} />
        </main>
      );
    }

    // FAQ
    if (currentPath === '/faq') {
      return (
        <main id="main-content">
          <FaqPage onNavigate={navigate} onOpenQuote={() => openQuoteModal('enquiry')} />
        </main>
      );
    }

    // About
    if (currentPath === '/about') {
      return (
        <main id="main-content">
          <AboutPage onNavigate={navigate} onOpenQuote={() => openQuoteModal('enquiry')} />
        </main>
      );
    }

    // Blog
    if (currentPath === '/blog') {
      return (
        <main id="main-content">
          <BlogPage onNavigate={navigate} onOpenQuote={() => openQuoteModal('enquiry')} />
        </main>
      );
    }

    if (currentPath.startsWith('/blog/')) {
      const slug = currentPath.replace('/blog/', '');
      return (
        <main id="main-content">
          <BlogPage currentSlug={slug} onNavigate={navigate} onOpenQuote={() => openQuoteModal('enquiry')} />
        </main>
      );
    }

    // Contact
    if (currentPath === '/contact') {
      return (
        <main id="main-content">
          <ContactPage onNavigate={navigate} />
        </main>
      );
    }

    // Legal
    if (currentPath === '/privacy') {
      return (
        <main id="main-content">
          <PrivacyPage onNavigate={navigate} />
        </main>
      );
    }

    if (currentPath === '/terms') {
      return (
        <main id="main-content">
          <TermsPage onNavigate={navigate} />
        </main>
      );
    }

    // 404
    return (
      <main id="main-content">
        <NotFoundPage onNavigate={navigate} />
      </main>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#1F2A3D]">
      {/* Skip to Content Link (WCAG 2.2 AA) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-[#0B4FE3] focus:px-4 focus:py-2 focus:text-xs focus:font-bold focus:text-white focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Global Sticky Header */}
      <Header
        currentPath={currentPath}
        onNavigate={navigate}
        onOpenQuote={() => openQuoteModal('enquiry')}
      />

      {/* Main View */}
      <div className="flex-1">
        {renderCurrentRoute()}
      </div>

      {/* Global Footer */}
      <Footer onNavigate={navigate} />

      {/* Interactive Global Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        defaultTab={quoteModalTab}
      />

      {/* Cookie Consent Banner */}
      <CookieBanner />
    </div>
  );
}
