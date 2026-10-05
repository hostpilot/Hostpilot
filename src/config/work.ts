export interface ProjectItem {
  id: string;
  slug: string;
  name: string;
  category: 'qr-concierge' | 'website' | 'webapp';
  tag: string;
  location: string;
  headline: string;
  description: string;
  liveUrl?: string;
  isDemo?: boolean;
  isLocked?: boolean;
  imageAlt: string;
  stats?: Array<{
    label: string;
    value: string;
  }>;
  caseStudy?: {
    client: string;
    role: string;
    timeline: string;
    challenge: string;
    solution: string;
    results: string[];
    features: string[];
  };
}

export const projectsConfig: ProjectItem[] = [
  {
    id: 'pacific-dream',
    slug: 'the-pacific-dream',
    name: 'The Pacific Dream',
    category: 'qr-concierge',
    tag: 'QR Concierge',
    location: 'Malibu, CA · Luxury Oceanfront Villa',
    headline: 'Bespoke Digital Concierge for Premier Pacific Oceanfront Estate',
    description: 'Instant Wi-Fi access, smart beach equipment instructions, and curated Malibu dining picks for high-profile villa guests.',
    liveUrl: 'https://thepacificdream.vercel.app',
    isDemo: true,
    isLocked: false,
    imageAlt: 'The Pacific Dream oceanfront villa digital concierge on a smartphone',
    stats: [
      { label: 'Guest Messages Reduced', value: '-85%' },
      { label: 'Avg Guest Resolution Time', value: '8 sec' },
      { label: '5-Star Check-in Reviews', value: '100%' },
    ],
    caseStudy: {
      client: 'Pacific Dream Estates LLC',
      role: 'Full Experience Design, Digital Concierge Architecture, QR Deployment',
      timeline: '2 Weeks',
      challenge: 'Guests at this \$2,500/night Malibu villa frequently called management at all hours asking about gate codes, smart pool heaters, high-tide beach safety, and Sonos audio settings.',
      solution: 'HostPilot deployed an interactive branded web concierge accessible via an engraved brushed-metal QR stand on the marble kitchen island. Guests get instant answers to any property system with zero friction.',
      results: [
        'Late-night calls eliminated within the first weekend of deployment',
        'Guest satisfaction score reached a perfect 5.0 across 40+ consecutive stays',
        'Upsells for private chef and boat charters increased by 35% through curated local links',
      ],
      features: [
        'Instant 1-tap Wi-Fi connection with QR and copy-to-clipboard',
        'Smart pool heater & spa temperature step-by-step interactive visual guide',
        'Private beach access code and tidal safety instructions',
        'Curated Malibu dining and wine-tasting reservations concierge',
      ],
    },
  },
  {
    id: 'california-getaway',
    slug: 'california-getaway',
    name: 'California Getaway',
    category: 'qr-concierge',
    tag: 'QR Concierge',
    location: 'California · Modern Coastal Retreat',
    headline: 'Seamless Guest Navigation for a Multi-Unit Coastal Compound',
    description: 'Step-by-step parking directions, keypad codes, and house rules accessible in seconds, not buried in an 8-page PDF.',
    liveUrl: 'https://california-getaway.vercel.app/',
    isDemo: true,
    isLocked: false,
    imageAlt: 'California Getaway digital concierge on a smartphone',
    stats: [
      { label: 'Host Hours Saved/Week', value: '14 hrs' },
      { label: 'Repeated Questions', value: 'Zero' },
      { label: 'Guest Engagement Rate', value: '94%' },
    ],
    caseStudy: {
      client: 'Coastal Retreats Collective',
      role: 'Guidebook Ingestion, UI/UX Design, Multi-Unit Concierge Architecture',
      timeline: '10 Days',
      challenge: 'With multiple guest cottages and private driveways, guests constantly confused parking stalls and lockbox codes upon late-evening arrival.',
      solution: 'Implemented unit-specific QR codes that display precise parking maps, illuminated walkway directions, and automated Wi-Fi connection directly on guests mobile screens.',
      results: [
        'Self check-in success rate reached 100% without a single host intervention',
        'House rules (quiet hours and EV charging etiquette) respected with zero complaints',
        'Host saved over 14 hours per week previously spent answering text messages',
      ],
      features: [
        'Interactive property site map with designated parking highlights',
        'EV charger operation guidelines and outdoor fire pit safety instructions',
        'Automated local breakfast spot recommendations within 5 minutes walking distance',
        'One-touch direct host escalation when personalized assistance is required',
      ],
    },
  },
  {
    id: 'bella-vista',
    slug: 'bella-vista',
    name: 'Bella Vista',
    category: 'qr-concierge',
    tag: 'QR Concierge',
    location: 'Luxury Italian-Style Estate',
    headline: 'High-Touch Hospitality Experience for an Expansive Vineyard Manor',
    description: 'Comprehensive estate guide covering climate controls, private wine cellar access, and surrounding vineyard tours.',
    liveUrl: 'https://bella-vista-five-bice.vercel.app/home',
    isDemo: true,
    isLocked: false,
    imageAlt: 'Bella Vista estate digital concierge on a smartphone',
    stats: [
      { label: 'Concierge Queries Resolved', value: '1,200+' },
      { label: 'Concierge Rating', value: '4.9 / 5' },
      { label: 'Wine Experience Bookings', value: '+42%' },
    ],
    caseStudy: {
      client: 'Bella Vista Manor & Vineyards',
      role: 'Estate Guide Architecture, Digital Wine Guidebook, Multilingual Support',
      timeline: '2 Weeks',
      challenge: 'An expansive multi-acre estate with complex zoned HVAC, commercial kitchen appliances, and private wine cellar requiring specialized care and guidance.',
      solution: 'Engineered an elegant, responsive digital concierge that explains every system with video micro-clips and clear photo guides, plus an interactive estate map.',
      results: [
        'Appliance misuse and maintenance dispatches dropped to zero',
        'In-house private wine tasting bookings grew by 42%',
        'International guests praised the seamless multilingual auto-translation',
      ],
      features: [
        'Zoned climate control guides with visual thermostat instructions',
        'Estate grounds map with walking trails and vineyard boundaries',
        'Sommelier-curated cellar catalog and recommended local tasting rooms',
        'Emergency contacts and local hospital / pharmacy directions',
      ],
    },
  },
  {
    id: 'mountain-retreat',
    slug: 'mountain-retreat',
    name: 'Mountain Retreat',
    category: 'qr-concierge',
    tag: 'Coming Soon',
    location: 'Alpine Cabin · Aspen, CO',
    headline: 'Alpine Cabin Digital Guide with Winter Systems & Ski Shuttle Schedules',
    description: 'Upcoming demo featuring heated driveway controls, fireplace operation guides, and real-time mountain snow reports.',
    isDemo: true,
    isLocked: true,
    imageAlt: 'Mountain Retreat alpine cabin digital concierge concept',
  },
  {
    id: 'client-project-slot-1',
    slug: 'your-project-here',
    name: 'Your Project Here',
    category: 'website',
    tag: 'Web Development',
    location: 'Custom Built for Your Business',
    headline: 'Fast, High-Converting Custom Website Engineered for Your Growth',
    description: 'We build bespoke web platforms with clean code, sub-second load times, and technical SEO designed to convert visitors into clients.',
    isDemo: false,
    isLocked: false,
    imageAlt: 'Your custom website shown on laptop and phone, built by HostPilot',
    stats: [
      { label: 'Target Lighthouse Score', value: '95+' },
      { label: 'Design System', value: 'Bespoke' },
      { label: 'SEO & Schema', value: 'Complete' },
    ],
  },
];
