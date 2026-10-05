export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'concierge' | 'web';
}

export const faqConfig: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Do my guests need to download an app?',
    answer: 'No app download is ever required. Guests simply scan the QR code located in the property with their standard smartphone camera, and the digital concierge opens instantly in their default mobile web browser. It feels like a high-end native app with zero friction.',
    category: 'concierge',
  },
  {
    id: 'faq-2',
    question: 'How does commission tracking work?',
    answer: 'HostPilot does not take any commission on your bookings, stays, or property rental income. If you choose to offer local experiences, private chef bookings, or late checkout upsells, 100% of that revenue remains directly with you.',
    category: 'concierge',
  },
  {
    id: 'faq-3',
    question: 'Can I update guide details in real-time?',
    answer: 'Yes! You have a dedicated host portal where you can update Wi-Fi passwords, lockbox codes, house rules, or maintenance notices at any time. Updates are reflected immediately for current and upcoming guests without re-printing or replacing the QR codes.',
    category: 'concierge',
  },
  {
    id: 'faq-4',
    question: 'How do I share the guidebook with guests?',
    answer: 'You can share it in two effortless ways: physically inside the home via our elegant printable or engraved QR stands, and digitally by including the private web link in your pre-arrival automated Airbnb, VRBO, or direct booking messages.',
    category: 'concierge',
  },
  {
    id: 'faq-5',
    question: 'Is HostPilot only for luxury properties?',
    answer: 'While our aesthetic is polished and tailored for high-end properties, HostPilot is designed for any host or property manager who wants to save hours each week, stop answering repetitive questions, and deliver a standout 5-star guest experience.',
    category: 'concierge',
  },
  {
    id: 'faq-6',
    question: 'What kinds of websites and apps do you build?',
    answer: 'We build custom corporate marketing websites, high-converting lead generation pages, interactive SaaS dashboards, internal enterprise portals, and bespoke web applications. We do not use bloated pre-made templates; every build is engineered specifically for your brand and business workflow.',
    category: 'web',
  },
  {
    id: 'faq-7',
    question: 'How long does a website project take?',
    answer: 'A standard custom corporate website typically takes between 2 to 4 weeks from kickoff to launch. More complex web applications, interactive portals, or enterprise systems typically range from 4 to 8 weeks depending on scope and integrations.',
    category: 'web',
  },
  {
    id: 'faq-8',
    question: 'How much does a website cost?',
    answer: 'Because every business has distinct requirements, we provide transparent, itemized quotes tailored to your scope rather than arbitrary one-size-fits-all packages. Starter marketing websites begin around competitive studio rates, while complex custom web applications are quoted based on technical deliverables.',
    category: 'web',
  },
];
