export interface ServiceConfigItem {
  slug: string;
  title: string;
  oneLineOutcome: string;
  description: string;
  iconName: string;
  imageAlt: string;
  included: string[];
  startingPrice?: string; // Optional: only renders if present
  whoItsFor: string[];
  process: Array<{
    step: number;
    title: string;
    description: string;
  }>;
  deliverables: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  relatedSlugs: string[];
}

export const servicesConfig: ServiceConfigItem[] = [
  {
    slug: 'custom-web-development',
    title: 'Custom Web Development',
    oneLineOutcome: 'Fast, modern, SEO-ready sites that convert visitors into qualified leads.',
    description: 'Bespoke marketing websites and high-performance corporate web platforms built with clean code, tailored animations, and zero template bloat.',
    iconName: 'Globe',
    imageAlt: 'Laptop and smartphone showing custom responsive corporate website developed by HostPilot',
    included: [
      'Discovery session & architecture blueprint',
      'Custom UX wireframes & component design system',
      'Mobile-first responsive build with Next.js/React',
      'Sub-second Core Web Vitals optimization',
      'Technical SEO, JSON-LD Schema & meta tags',
      'Accessible WCAG 2.2 AA compliant markup',
      'Analytics integration & conversion tracking',
      '30 days of dedicated post-launch support',
    ],
    startingPrice: undefined, // Empty: shows "Custom quote"
    whoItsFor: [
      'Growing businesses upgrading from generic WordPress or Squarespace templates',
      'Fintech, B2B services, and modern brands that need instant credibility',
      'Companies demanding sub-second load times and high organic search ranking',
    ],
    process: [
      { step: 1, title: 'Discovery & Audit', description: 'Analyze business goals, competitors, target audience, and site architecture.' },
      { step: 2, title: 'UX & Visual Design', description: 'Create responsive wireframes and clean, branded UI components.' },
      { step: 3, title: 'Engineering & Testing', description: 'Clean, type-safe development with zero bloat and complete accessibility testing.' },
      { step: 4, title: 'SEO & Launch', description: 'Core Web Vitals validation, Schema.org setup, and seamless production deployment.' },
    ],
    deliverables: [
      'Production-grade website codebase with full ownership',
      'Technical SEO audit report and verified schema markup',
      'Performance audit report with 90+ Lighthouse targets',
      'Content management guide and 30-day post-launch warranty',
    ],
    faqs: [
      {
        question: 'Do you use pre-made WordPress or Webflow templates?',
        answer: 'No. Every website we build is custom-engineered from scratch with modern TypeScript, clean CSS, and modular components for maximum speed, security, and brand alignment.',
      },
      {
        question: 'How long does a typical custom website build take?',
        answer: 'Most custom website projects take between 2 to 5 weeks from initial discovery through design, development, SEO review, and final launch.',
      },
      {
        question: 'Will our team be able to update copy and images easily?',
        answer: 'Yes. We configure clean, structured content management or config-driven setups so your marketing team can update pages, copy, and blog posts effortlessly.',
      },
    ],
    relatedSlugs: ['webapp-development', 'ui-ux-design', 'qr-concierge'],
  },
  {
    slug: 'webapp-development',
    title: 'WebApp Development',
    oneLineOutcome: 'Interactive tools, client portals and dashboards built around your workflow.',
    description: 'Scalable full-stack web applications engineered for speed, reliability, and complex business logic with modern state management.',
    iconName: 'LayoutGrid',
    imageAlt: 'Laptop mockup showing high-performance SaaS web application dashboard engineered by HostPilot',
    included: [
      'Product requirements & data model design',
      'Interactive reactive frontend (React / TypeScript)',
      'Secure REST / GraphQL or serverless API integration',
      'Role-based access control (RBAC) & user authentication',
      'Interactive data tables, charts & filters',
      'Robust error handling & client-side validation',
      'Automated unit & end-to-end regression tests',
      'Cloud deployment pipeline (Vercel, AWS, Cloud Run)',
    ],
    startingPrice: undefined,
    whoItsFor: [
      'Startups launching an MVP or initial SaaS product',
      'Established businesses automating manual spreadsheets or client onboarding',
      'Teams requiring secure internal tools or customer-facing portals',
    ],
    process: [
      { step: 1, title: 'Specification', description: 'Map user journeys, data schemas, API contracts, and edge cases.' },
      { step: 2, title: 'Prototyping', description: 'Build interactive UI prototypes to validate complex flows before code.' },
      { step: 3, title: 'Full-Stack Build', description: 'Develop modular frontend components and resilient backend integrations.' },
      { step: 4, title: 'Hardening & QA', description: 'Security audit, cross-browser stress testing, and CI/CD deployment.' },
    ],
    deliverables: [
      'Clean, fully documented TypeScript application codebase',
      'Automated test suite and deployment scripts',
      'API documentation and data dictionary',
      'Handover workshop and ongoing technical support agreements',
    ],
    faqs: [
      {
        question: 'What tech stack do you specialize in for web apps?',
        answer: 'We specialize in React, Next.js, Node.js, TypeScript, PostgreSQL, and modern cloud serverless environments for high scalability and fast time-to-market.',
      },
      {
        question: 'Can you integrate with our existing database or third-party APIs?',
        answer: 'Yes. We regularly build integrations with Stripe, CRMs, authentication providers, and proprietary legacy databases via secure REST or GraphQL endpoints.',
      },
    ],
    relatedSlugs: ['custom-web-development', 'enterprise-applications', 'ui-ux-design'],
  },
  {
    slug: 'enterprise-applications',
    title: 'Enterprise Applications',
    oneLineOutcome: 'Secure internal systems, portals and workflow tools for growing teams.',
    description: 'Mission-critical enterprise software built with a security-first mindset, audit logs, strict permissions, and high-volume data handling.',
    iconName: 'Building2',
    imageAlt: 'Enterprise application interface on modern laptop showing secure multi-role dashboard',
    included: [
      'Enterprise architecture & threat modeling',
      'Multi-role access control & SSO integration (SAML/OAuth)',
      'Audit logging, data encryption & compliance checks',
      'High-throughput database schema optimization',
      'Custom workflow automation & task pipelines',
      'Strict TypeScript typings & invariant validation',
      'Detailed API documentation & runbooks',
      'SLA-backed maintenance and emergency support',
    ],
    startingPrice: undefined,
    whoItsFor: [
      'Mid-market and enterprise organizations replacing brittle internal spreadsheets',
      'Operations teams needing centralized workflow tracking and auditability',
      'Companies requiring enterprise single sign-on and strict data compliance',
    ],
    process: [
      { step: 1, title: 'Security & Architecture', description: 'Define compliance requirements, permissions matrices, and system topology.' },
      { step: 2, title: 'Core Engine Build', description: 'Implement data layer, validation rules, and automated audit logging.' },
      { step: 3, title: 'UI & Workflow Integration', description: 'Construct dense, tabular, keyboard-friendly administrative interfaces.' },
      { step: 4, title: 'Staging & Rollout', description: 'Run penetration tests, load simulations, and phased user rollout.' },
    ],
    deliverables: [
      'Enterprise-grade codebase with strict architectural boundaries',
      'Role matrix and security compliance documentation',
      'Deployment automation and health monitoring configurations',
      'Admin training guides and dedicated SLA options',
    ],
    faqs: [
      {
        question: 'How do you ensure enterprise data security?',
        answer: 'We adhere to zero-trust principles: parameterized queries to eliminate SQL injection, strict input sanitization, TLS encryption in transit, encrypted storage, and granular RBAC.',
      },
      {
        question: 'Can you support enterprise SSO like Okta, Azure AD, or Google Workspace?',
        answer: 'Yes, we implement enterprise SSO with SAML 2.0, OpenID Connect, and directory syncing.',
      },
    ],
    relatedSlugs: ['webapp-development', 'custom-web-development', 'ui-ux-design'],
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Services',
    oneLineOutcome: 'Research, wireframes, prototypes and interfaces people enjoy using.',
    description: 'Human-centered digital design that balances visual elegance with effortless clarity, high conversion rates, and strict accessibility standards.',
    iconName: 'Palette',
    imageAlt: 'UI UX design system tokens, wireframes and interactive prototype on screen',
    included: [
      'User research, persona definition & journey mapping',
      'Information architecture & low-fidelity wireframing',
      'High-fidelity visual design & interactive Figma prototypes',
      'Complete design system (tokens, components, typography)',
      'WCAG 2.2 AA contrast & accessibility validation',
      'Design handoff specifications & developer ready assets',
      'Interactive user testing & usability audit reports',
    ],
    startingPrice: undefined,
    whoItsFor: [
      'Product teams with an existing app that feels clunky or difficult for users',
      'Founders needing production-ready design before writing code',
      'Brands wanting a clean, cohesive, corporate design language',
    ],
    process: [
      { step: 1, title: 'User Research', description: 'Map customer friction points, competitor benchmarks, and core user goals.' },
      { step: 2, title: 'Wireframes', description: 'Rapidly iterate on layouts, hierarchy, and information density.' },
      { step: 3, title: 'Design System', description: 'Establish typography, colors, spacing math, and reusable interactive components.' },
      { step: 4, title: 'Prototype & Testing', description: 'Validate clickable prototypes with real users before engineering handoff.' },
    ],
    deliverables: [
      'Comprehensive Figma workspace with full component library',
      'Design token specifications (colors, spacing, typography scales)',
      'Clickable user-journey prototypes for desktop and mobile',
      'Accessibility audit report and developer handover notes',
    ],
    faqs: [
      {
        question: 'Do you deliver designs ready for developer implementation?',
        answer: 'Yes. Every component includes explicit responsive states (hover, focus, disabled, loading, error) and precise spacing tokens for zero developer friction.',
      },
    ],
    relatedSlugs: ['custom-web-development', 'webapp-development', 'qr-concierge'],
  },
  {
    slug: 'qr-concierge',
    title: 'QR Digital Concierge',
    oneLineOutcome: 'Give guests Wi-Fi, check-in steps, house rules and local tips with one QR scan.',
    description: 'An AI-powered digital guest concierge for luxury vacation rentals and Airbnb hosts that answers guest questions 24/7 and eliminates repetitive phone calls.',
    iconName: 'QrCode',
    imageAlt: 'Smartphone showing HostPilot QR digital concierge answering guest Wi-Fi and parking questions',
    included: [
      'Property guidebook ingestion & structured knowledge base',
      'Bespoke mobile web app tailored to your property brand',
      'Custom engraved or printable SVG QR code generation',
      'Contextual AI trained on your specific house rules & appliances',
      'Instant answers for Wi-Fi, gate codes, parking, and check-out',
      'Local curated dining, sights & secret local spots',
      'Host takeover mode: jump in to answer personally anytime',
      'Multilingual auto-translation for international guests',
    ],
    startingPrice: undefined,
    whoItsFor: [
      'Vacation rental hosts tired of 2:00 AM calls about Wi-Fi and lockboxes',
      'Property managers with multiple listings seeking consistent 5-star guest reviews',
      'Luxury estate owners who want to offer a bespoke, high-touch hospitality experience',
    ],
    process: [
      { step: 1, title: 'Ingest Guide', description: 'We convert your PDF rules, house manual, and codes into a secure knowledge base.' },
      { step: 2, title: 'Custom UI & AI Training', description: 'Configure property photography, colors, emergency contacts, and AI context.' },
      { step: 3, title: 'QR Display Kit', description: 'Generate high-resolution printable or engraved QR displays for kitchen counters.' },
      { step: 4, title: 'Go Live & Relax', description: 'Guests scan upon arrival and enjoy instantaneous 24/7 hospitality.' },
    ],
    deliverables: [
      'Live, ultra-fast branded web application hosted on custom URL',
      'Print-ready vector QR artwork (SVG, PNG, PDF formats)',
      'Host dashboard to update Wi-Fi, door codes, and rules in real-time',
      'Analytics on guest inquiries and upsell opportunities',
    ],
    faqs: [
      {
        question: 'Do guests need to download an app from the App Store?',
        answer: 'No app download is required. Guests simply point their phone camera at the QR code, and the digital concierge opens instantly in their mobile browser.',
      },
      {
        question: 'Can I update door codes or Wi-Fi passwords on the fly?',
        answer: 'Yes! You can update codes, arrival instructions, or rules instantly from your phone. Changes reflect immediately without reprinting QR codes.',
      },
      {
        question: 'What if a guest asks something unique or personal?',
        answer: 'You have real-time visibility into conversations. If a guest asks something deeply personal, you can seamlessly pause autopilot and reply directly.',
      },
    ],
    relatedSlugs: ['custom-web-development', 'webapp-development', 'ui-ux-design'],
  },
];
