import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const pageMeta = {
  '/': {
    title: 'Aither Stack Technologies (AST) | Web Engineering, AI Systems & Automation',
    description: 'AST builds premium digital systems — high-performance websites, AI voice agents, automation workflows, and custom business software. Engineered for growth. Book a strategy call.',
  },
  '/about': {
    title: 'About AST | Web Engineering, AI Systems & Automation',
    description: 'Learn about AST — a team of engineers building modern websites, web applications, AI systems, and automation workflows for ambitious businesses worldwide.',
  },
  '/services': {
    title: 'Services | Custom Web Development, AI Agents & Automation',
    description: 'AST offers luxury e-commerce, high-converting landing pages, AI voice assistants, UI/UX design systems, and monthly retainers for maintenance, AI operations, and growth.',
  },
  '/process': {
    title: 'Process | Audit, Build & Launch in 8-10 Days',
    description: 'AST\'s transparent process: Audit & Strategy (Days 1-2), Build & Integration (Days 3-7), Testing & Handoff (Days 8-10). Direct dev communication, zero middle management.',
  },
  '/portfolio': {
    title: 'Portfolio | Proven Deployments by AST',
    description: 'Explore AST\'s proven deployments: luxury e-commerce platforms, high-converting landing pages, AI voice agents, and design systems engineered for ambitious brands.',
  },
  '/team': {
    title: 'Team | The Engineering Squad Behind AST',
    description: 'Meet the AST team — full-stack developers, AI & automation leads, software engineers, and operations leads shipping production-ready systems fast.',
  },
  '/contact': {
    title: 'Contact | Start a Project with AST',
    description: 'Get in touch with AST\'s engineering team. Fill out the inquiry form or book a direct consultation call. We respond within 24 hours.',
  },
  '/booking': {
    title: 'Book a Call | Strategy Consultation with AST',
    description: 'Schedule a 30-minute strategy call with AST\'s build team. Map the opportunity, pressure-test the scope, and leave with a clear next move.',
  },
  '/faq': {
    title: 'FAQ | Frequently Asked Questions about AST',
    description: 'Answers about AST\'s projects, retainers, technology, pricing, refunds, ownership, and data privacy. Get the practical information you need.',
  },
  '/privacy': {
    title: 'Privacy Policy | Aither Stack Technologies',
    description: 'AST\'s privacy policy: what we collect, why we collect it, third-party processors, data retention, international clients, your rights, cookies, and security.',
  },
  '/terms': {
    title: 'Terms of Service | Aither Stack Technologies',
    description: 'AST\'s terms of service: services, payment, refunds, ownership, retainer cancellation, timelines, third-party dependencies, support, liability, and governing law.',
  },
};

export function usePageMeta() {
  const location = useLocation();
  const pathname = location.pathname;
  
  const meta = pageMeta[pathname] || pageMeta['/'];
  
  useEffect(() => {
    document.title = meta.title;
    
    let descriptionMeta = document.querySelector('meta[name="description"]');
    if (!descriptionMeta) {
      descriptionMeta = document.createElement('meta');
      descriptionMeta.name = 'description';
      document.head.appendChild(descriptionMeta);
    }
    descriptionMeta.content = meta.description;
    
    let ogTitleMeta = document.querySelector('meta[property="og:title"]');
    if (!ogTitleMeta) {
      ogTitleMeta = document.createElement('meta');
      ogTitleMeta.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitleMeta);
    }
    ogTitleMeta.content = meta.title;
    
    let ogDescMeta = document.querySelector('meta[property="og:description"]');
    if (!ogDescMeta) {
      ogDescMeta = document.createElement('meta');
      ogDescMeta.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescMeta);
    }
    ogDescMeta.content = meta.description;
    
    let twitterTitleMeta = document.querySelector('meta[name="twitter:title"]');
    if (!twitterTitleMeta) {
      twitterTitleMeta = document.createElement('meta');
      twitterTitleMeta.name = 'twitter:title';
      document.head.appendChild(twitterTitleMeta);
    }
    twitterTitleMeta.content = meta.title;
    
    let twitterDescMeta = document.querySelector('meta[name="twitter:description"]');
    if (!twitterDescMeta) {
      twitterDescMeta = document.createElement('meta');
      twitterDescMeta.name = 'twitter:description';
      document.head.appendChild(twitterDescMeta);
    }
    twitterDescMeta.content = meta.description;
  }, [meta.title, meta.description]);
  
  return meta;
}

export function SEOHead() {
  usePageMeta();
  return null;
}