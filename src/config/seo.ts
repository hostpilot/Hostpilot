export interface SeoConfigItem {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogType?: 'website' | 'article';
}

export const seoConfig: Record<string, SeoConfigItem> = {
  home: {
    title: 'HostPilot | Website Development, Web Apps & QR Concierge',
    description: 'HostPilot builds custom websites, web apps, UI/UX and QR digital concierges for businesses and vacation-rental hosts. Start your project today.',
    keywords: [
      'website development agency',
      'custom web development',
      'web app development company',
      'UI/UX design services',
      'enterprise application development',
      'QR code digital guestbook',
      'QR code guest guide for Airbnb',
      'digital concierge for vacation rentals',
      'AI guest guide for Airbnb hosts',
      'digital guidebook for vacation rentals',
    ],
    canonical: 'https://hostpilot.online/',
  },
  services: {
    title: 'Web Development, WebApp & UI/UX Services | HostPilot',
    description: 'Custom web development, web app development, enterprise applications and UI/UX design from a focused studio. See services and start a project.',
    keywords: [
      'custom web development',
      'web app development company',
      'enterprise applications',
      'UI/UX design services',
      'digital concierge services',
    ],
    canonical: 'https://hostpilot.online/services',
  },
  customWebDevelopment: {
    title: 'Custom Web Development Services | HostPilot',
    description: 'Fast, modern, SEO-ready custom websites built around your business goals. Design, development and launch support from HostPilot.',
    keywords: ['custom web development', 'high performance websites', 'SEO ready website build', 'clean code agency'],
    canonical: 'https://hostpilot.online/services/custom-web-development',
  },
  webappDevelopment: {
    title: 'Web App Development Company | HostPilot',
    description: 'Interactive web apps, dashboards and portals built around your workflow. Scalable, secure and easy to use. Talk to HostPilot.',
    keywords: ['web app development', 'SaaS dashboards', 'client portals', 'interactive web applications'],
    canonical: 'https://hostpilot.online/services/webapp-development',
  },
  enterpriseApplications: {
    title: 'Enterprise Application Development | HostPilot',
    description: 'Secure internal systems, portals and workflow tools for growing teams. Built with a security-first mindset by HostPilot.',
    keywords: ['enterprise application development', 'internal portals', 'workflow automation', 'secure business systems'],
    canonical: 'https://hostpilot.online/services/enterprise-applications',
  },
  uiUxDesign: {
    title: 'UI/UX Design Services | HostPilot',
    description: 'Research, wireframes, prototypes and interface design that people enjoy using. UI/UX services for websites and web apps.',
    keywords: ['UI UX design services', 'product design', 'user research', 'interactive wireframes', 'design systems'],
    canonical: 'https://hostpilot.online/services/ui-ux-design',
  },
  qrConcierge: {
    title: 'QR Code Digital Concierge for Vacation Rentals | HostPilot',
    description: 'Give guests Wi-Fi, check-in steps, house rules and local tips with one QR scan. An AI digital concierge for Airbnb and vacation rentals.',
    keywords: [
      'QR code digital guestbook',
      'digital concierge for vacation rentals',
      'Airbnb digital guidebook',
      'AI guest guide',
      'vacation rental guest portal',
    ],
    canonical: 'https://hostpilot.online/services/qr-concierge',
  },
  demos: {
    title: 'Live Demos: AI Digital Concierge for Rentals | HostPilot',
    description: 'Explore live digital concierge demos for a Malibu villa, a California retreat and an Italian-style estate. See the guest experience first-hand.',
    keywords: ['vacation rental concierge demo', 'Airbnb guidebook demo', 'HostPilot live demos'],
    canonical: 'https://hostpilot.online/demos',
  },
  work: {
    title: 'Our Work: Websites, Web Apps & Digital Concierges | HostPilot',
    description: 'Explore live demos and projects from HostPilot, from custom websites to QR digital concierges for vacation rentals.',
    keywords: ['HostPilot portfolio', 'web development case studies', 'digital concierge portfolio'],
    canonical: 'https://hostpilot.online/work',
  },
  pricing: {
    title: 'Pricing: Websites, Web Apps & QR Concierge | HostPilot',
    description: 'Clear starting prices for websites, web apps and QR digital concierges. Request a custom quote tailored to your project.',
    keywords: ['web development pricing', 'digital concierge cost', 'custom web app pricing'],
    canonical: 'https://hostpilot.online/pricing',
  },
  faq: {
    title: 'FAQ: Web Development & QR Concierge | HostPilot',
    description: 'Answers about timelines, pricing, updates and how the QR digital concierge works for guests and hosts.',
    keywords: ['HostPilot FAQ', 'website development questions', 'digital concierge FAQ'],
    canonical: 'https://hostpilot.online/faq',
  },
  about: {
    title: 'About HostPilot | Web & Digital Concierge Studio',
    description: 'Meet HostPilot, a studio building websites, web apps and digital concierge guides for businesses and vacation-rental hosts.',
    keywords: ['about HostPilot', 'digital agency team', 'web development studio'],
    canonical: 'https://hostpilot.online/about',
  },
  contact: {
    title: 'Get a Free Quote | Contact HostPilot',
    description: 'Tell us about your website, web app or QR concierge project. Reach us by form, WhatsApp or email.',
    keywords: ['contact HostPilot', 'hire web developer', 'request quote', 'digital concierge application'],
    canonical: 'https://hostpilot.online/contact',
  },
  blog: {
    title: 'HostPilot Insights: Web Engineering & Hospitality Tech',
    description: 'Practical guides and articles on web development, UX strategy, Core Web Vitals, and AI guest guides for vacation rentals.',
    keywords: ['web development blog', 'vacation rental tech', 'Airbnb host tips', 'modern web design'],
    canonical: 'https://hostpilot.online/blog',
  },
};
