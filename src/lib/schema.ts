export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://hostpilot.online/#organization',
    name: 'HostPilot',
    url: 'https://hostpilot.online',
    logo: 'https://hostpilot.online/logo.svg',
    foundingDate: '2025',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+916370839897',
      contactType: 'customer service',
      email: 'Gethostpilot@gmail.com',
    },
    sameAs: [
      'https://twitter.com/hostpilot_app',
      'https://linkedin.com/company/hostpilot',
    ],
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://hostpilot.online/#website',
    url: 'https://hostpilot.online',
    name: 'HostPilot',
    publisher: {
      '@id': 'https://hostpilot.online/#organization',
    },
  };
}

export function generateServiceSchema(title: string, description: string, slug: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: title,
    description: description,
    provider: {
      '@id': 'https://hostpilot.online/#organization',
    },
    url: `https://hostpilot.online/services/${slug}`,
    serviceType: title,
  };
}

export function generateFaqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateBlogPostingSchema(post: {
  title: string;
  description: string;
  datePublished: string;
  slug: string;
  author: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.datePublished,
    dateModified: post.datePublished,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@id': 'https://hostpilot.online/#organization',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://hostpilot.online/blog/${post.slug}`,
    },
  };
}

export function generateCreativeWorkSchema(work: {
  name: string;
  description: string;
  slug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: work.name,
    description: work.description,
    creator: {
      '@id': 'https://hostpilot.online/#organization',
    },
    url: `https://hostpilot.online/work/${work.slug}`,
  };
}
