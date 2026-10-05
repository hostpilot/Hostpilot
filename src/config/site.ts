export interface SiteConfig {
  name: string;
  tagline: string;
  subTagline: string;
  url: string;
  established: number;
  contact: {
    phone: string;
    phoneFormatted: string;
    whatsappUrl: string;
    email: string;
    emailDisplay: string;
    addressCity?: string;
    addressCountry?: string;
  };
  navigation: Array<{
    name: string;
    href: string;
    badge?: string;
  }>;
  trustStrip: Array<{
    title: string;
    desc: string;
    icon: string;
  }>;
  stats: Array<{
    value: number;
    suffix: string;
    label: string;
    description: string;
    icon: string;
  }>;
}

export const siteConfig: SiteConfig = {
  name: 'HostPilot',
  tagline: 'Digital Agency',
  subTagline: 'Websites that work as hard as you do. Every stay, piloted.',
  url: 'https://hostpilot.online',
  established: 2025,
  contact: {
    phone: '+91 6370839897',
    phoneFormatted: '+91 6370839897',
    whatsappUrl: 'https://wa.me/916370839897',
    email: 'Gethostpilot@gmail.com',
    emailDisplay: 'Gethostpilot@gmail.com', // easily switched to hello@hostpilot.online via config
  },
  navigation: [
    { name: 'Services', href: '/services' },
    { name: 'Work', href: '/work' },
    { name: 'Live Demos', href: '/demos' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Blog', href: '/blog' },
  ],
  trustStrip: [
    {
      title: 'Custom-built, no templates',
      desc: 'Engineered from zero for unmatched speed & brand precision',
      icon: 'Layers',
    },
    {
      title: 'Fast, SEO-ready launches',
      desc: 'Core Web Vitals optimized with structured data built in',
      icon: 'Zap',
    },
    {
      title: 'Secure by design',
      desc: 'Enterprise grade sanitation, encryption & zero security bloat',
      icon: 'ShieldCheck',
    },
    {
      title: 'AI concierge for rentals',
      desc: 'QR-enabled 24/7 guest support that eliminates repetitive calls',
      icon: 'QrCode',
    },
  ],
  stats: [
    {
      value: 3,
      suffix: '+',
      label: 'Live Demos',
      description: 'Production vacation-rental concierges running right now',
      icon: 'MonitorSmartphone',
    },
    {
      value: 5,
      suffix: '',
      label: 'Core Services',
      description: 'From bespoke websites and apps to AI guest guides',
      icon: 'Briefcase',
    },
    {
      value: 24,
      suffix: '/7',
      label: 'Guest Concierge',
      description: 'Instant answers for late check-ins, Wi-Fi & rules',
      icon: 'Clock',
    },
    {
      value: 100,
      suffix: '%',
      label: 'Custom Builds',
      description: 'No bloated theme templates or fragile page builders',
      icon: 'Code2',
    },
  ],
};
