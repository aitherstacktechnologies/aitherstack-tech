import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Gauge,
  Palette,
  ShieldCheck,
  Sparkles,
  Wand2,
  Workflow,
} from 'lucide-react';
import Button from '../components/Button';
import Hero, { AccentText } from '../components/Hero';

const serviceCards = [
  {
    icon: Wand2,
    title: 'High-Conversion Web Platforms by AST',
    description:
      'Engineered on modern Next.js architectures to deploy instantly at the edge and load in under 1 second. Maximize user retention and turn your web traffic into revenue with flawless digital infrastructure.',
    badge: 'Blazing Fast Edge Tech',
    link: '/services#web-platforms',
  },
  {
    icon: Bot,
    title: 'AI-Powered Operations & Support',
    description:
      'Custom, bespoke LLM workflows and intelligent conversational agents engineered to manage 24/7 client intake, smart lead routing, and tier-1 support triage autonomously without expanding your team\'s payroll.',
    badge: '24/7 Automated Triage',
    link: '/services#ai-ops',
  },
  {
    icon: Workflow,
    title: 'Intelligent Workflow Automation',
    description:
      'Eliminate repetitive copy-pasting and manual data bottlenecks. We seamlessly stitch your custom CRMs, internal APIs, and databases together with automated background tasks that scale natively.',
    badge: 'Zero Manual Bottlenecks',
    link: '/services#automation',
  },
  {
    icon: Gauge,
    title: 'Performance & Growth',
    description:
      'Sub-second experiences, conversion refinement, and technical optimization under one roof.',
    badge: 'Core Web Vitals Optimized',
    link: '/services#performance',
  },
];

const whyChooseUs = [
  {
    number: '01',
    title: 'Bespoke Craftsmanship',
    description: 'No template-first shortcuts. Every screen, motion cue, and conversion layer is custom built in React and Framer Motion.',
    icon: Palette,
  },
  {
    number: '02',
    title: 'Enterprise AI Architecture',
    description: 'Vapi, Supabase, LLM orchestration, and automation that connect with your business logic instead of sitting on top.',
    icon: Bot,
  },
  {
    number: '03',
    title: 'Sub-Second Speed & Conversion',
    description: 'We optimize for every meaningful interaction so your site feels premium, loads fast, and converts harder.',
    icon: Gauge,
  },
  {
    number: '04',
    title: 'End-to-End Ownership',
    description: 'Design, engineering, integrations, QA, and launch support all managed by one expert team without handoff chaos.',
    icon: ShieldCheck,
  },
];

const techCategories = [
  {
    title: 'Frontend & Motion',
    icon: Wand2,
    description: 'React 18, Next.js 14, TypeScript, Framer Motion, GSAP, Tailwind CSS — performant, animated, accessible.',
    tech: ['React 18', 'Next.js 14', 'TypeScript', 'Framer Motion', 'GSAP', 'Tailwind CSS'],
  },
  {
    title: 'Backend & Data',
    icon: Workflow,
    description: 'Node.js, Go, PostgreSQL, Supabase, Redis, Prisma — scalable APIs, real-time, edge-ready.',
    tech: ['Node.js', 'Go', 'PostgreSQL', 'Supabase', 'Redis', 'Prisma'],
  },
  {
    title: 'AI & Voice',
    icon: Bot,
    description: 'Vapi, Retell, OpenAI, Anthropic, LangChain, Pinecone — agents that converse, reason, and act.',
    tech: ['Vapi', 'Retell', 'OpenAI', 'Anthropic', 'LangChain', 'Pinecone'],
  },
  {
    title: 'Automation & Integration',
    icon: Sparkles,
    description: 'n8n, Make, Zapier, webhooks, custom middleware — connect anything to anything, reliably.',
    tech: ['n8n', 'Make', 'Zapier', 'Webhooks', 'Custom Middleware'],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-transparent text-white">
      <main className="relative overflow-hidden">
        <Hero
          title={
            <>
              Engineering the Future<br />
              of Business.<AccentText>.</AccentText>
            </>
          }
          align="center"
          subtitle="AST combines modern web engineering, intelligent AI systems, and automation to build digital products that perform, convert, and scale."
          actions={
            <>
              <Button to="/booking" variant="primary" size="lg" showArrow className="min-w-[200px] sm:min-w-[220px]">
                Start a Project
              </Button>
              <Button to="/services" variant="ghost" size="lg" showArrow arrowIcon={ArrowRight} className="min-w-[200px] sm:min-w-[220px]">
                Explore Services
              </Button>
            </>
          }
        />

        {/* Value-First Service Cards */}
        <section className="relative px-4 py-12 sm:px-6 sm:py-16 lg:px-8 xl:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 sm:mb-12 text-center reveal">
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-orange-400 backdrop-blur-[16px]">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse" />
                Core Capabilities
              </span>
              <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight font-heading text-gradient-shimmer">
                Signature Solutions for{' '}
                Ambitious Brands
              </h2>
            </div>

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
              {serviceCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <article
                    key={card.title}
                    className="card-uniform group reveal"
                    style={{ animationDelay: `${index * 120}ms` }}
                  >
                    <div className="card-inner flex flex-col h-full">
                      <div className="card-icon-box">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="card-content">
                        <div className="card-number">0{index + 1}</div>
                        <h3 className="card-title text-gradient-shimmer">{card.title}</h3>
                        <p className="card-description">{card.description}</p>
                        <div className="card-badge">{card.badge}</div>
                        <Link
                          to={card.link}
                          className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-orange-500 transition-transform duration-300 hover:translate-x-1"
                        >
                          <span>Learn more</span>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-12 sm:mt-16 text-center reveal" style={{ animationDelay: '400ms' }}>
              <Link
                to="/services"
                className="inline-flex items-center gap-3 rounded-full border border-orange-500/40 bg-transparent px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-orange-500 transition-all duration-300 hover:border-orange-500 hover:scale-105 hover:shadow-[0_0_24px_rgba(255,85,0,0.35)]"
              >
                View All Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Tech Stack & Approach Section */}
        <section className="relative px-4 py-12 sm:px-6 sm:py-16 lg:px-8 xl:px-12 border-y border-white/10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 sm:mb-12 text-center reveal">
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-orange-400 backdrop-blur-[16px]">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse" />
                Our Stack & Approach
              </span>
              <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight font-heading text-gradient-shimmer">
                Why We Choose The Right Tool{' '}
                Every Time
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg leading-relaxed text-white/70">
                No dogma. No legacy baggage. We pick the technology that serves the product — not our resume.
              </p>
            </div>

            <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
              {techCategories.map((category, index) => {
                return (
                  <article
                    key={category.title}
                    className="card-3d-glass group reveal"
                    style={{ animationDelay: `${index * 120}ms` }}
                  >
                    <div className="card-inner">
                      <div className="mb-7 flex items-center justify-between">
                        <div className="group-hover:scale-110 transition-transform duration-500 flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/[0.08] text-orange-500">
                          <category.icon className="h-6 w-6" />
                        </div>
                        <span className="text-[10px] font-medium uppercase tracking-[0.26em] text-white/50">0{index + 1}</span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-semibold text-white text-gradient-shimmer">{category.title}</h3>
                      <p className="mt-4 text-sm leading-relaxed text-white/70">{category.description}</p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {category.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[11px] font-mono text-white/50 border border-white/10 px-3 py-1.5 rounded-full bg-white/[0.05] hover:bg-orange-500/10 hover:text-orange-500 hover:border-orange-500/30 transition-all duration-200"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="px-4 py-12 sm:px-6 lg:px-8 xl:px-12 border-y border-white/10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 sm:mb-12 text-center reveal">
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-orange-400 backdrop-blur-[16px]">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse" />
                Our Philosophy
              </span>
              <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight font-heading text-gradient-shimmer">
                Built for Scale.{' '}
                Engineered for Prestige.
              </h2>
            </div>

            <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
              {whyChooseUs.map((item, index) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="card-3d-glass group reveal"
                    style={{ animationDelay: `${index * 120}ms` }}
                  >
                    <div className="card-inner">
                      <div className="mb-6 flex items-center justify-between">
                        <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-orange-500">{item.number}</span>
                        <div className="group-hover:scale-110 transition-transform duration-500 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.08] text-orange-500">
                          <Icon className="h-5 w-5" />
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold text-white text-gradient-shimmer">{item.title}</h3>
                      <p className="mt-4 text-sm leading-relaxed text-white/70">{item.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative px-4 py-12 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl border border-orange-500/30 glassmorphic-luxury p-8 sm:p-12 lg:p-16 text-center shadow-[0_0_80px_rgba(255,85,0,0.06)] reveal">
            <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 via-transparent to-transparent pointer-events-none" />
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-orange-400 backdrop-blur-sm mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse" />
                Ready to Begin
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold uppercase tracking-tight font-heading leading-[0.92] mb-8 text-gradient-shimmer">
                LET'S BUILD YOUR NEXT{' '}
                DIGITAL MASTERPIECE
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10 sm:mb-12 leading-relaxed">
                Strategic design, custom development, and AI automation that make your business
                feel as premium as the value you deliver.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <Button
                  to="/booking"
                  variant="primary"
                  size="lg"
                  showArrow
                  className="min-w-[220px] w-full sm:w-auto"
                >
                  Book a Strategy Call
                </Button>
                <Button
                  to="/portfolio"
                  variant="ghost"
                  size="lg"
                  showArrow
                  className="min-w-[220px] w-full sm:w-auto"
                  arrowIcon={ArrowUpRight}
                >
                  View Our Work
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}