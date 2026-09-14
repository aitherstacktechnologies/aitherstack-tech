import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
import Hero from '../components/Hero';

const serviceCards = [
  {
    icon: Wand2,
    title: 'Bespoke Experience Design',
    description: 'Custom React interfaces and premium motion systems built for high-trust conversion.',
    link: '/services#strategy',
  },
  {
    icon: Bot,
    title: 'AI Voice & Chat Agents',
    description: '24/7 lead capture, qualification, and support flows tailored to your funnel.',
    link: '/services#voice-chat',
  },
  {
    icon: Workflow,
    title: 'Automation Architecture',
    description: 'Operational systems that eliminate repetitive tasks and connect your tools seamlessly.',
    link: '/services#automation',
  },
  {
    icon: Gauge,
    title: 'Performance & Growth',
    description: 'Sub-second experiences, conversion refinement, and technical optimization under one roof.',
    link: '/services#speed-tech',
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

const marqueeItems = [
  'Luxury E-Commerce Stores',
  'High-Converting Landing Pages',
  'Enterprise AI Agents',
  'Bespoke Web Architecture',
  'Ultra-Fast Performance',
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
    <div className="min-h-screen overflow-x-hidden bg-transparent text-ast-text">
      <main className="relative overflow-hidden">
        <Hero
          eyebrow="Engineering Digital Excellence"
          title={
            <>
              Premium Digital Experiences,
              <span className="mt-2 block bg-gradient-to-r from-ast-text via-ast-accent to-ast-text bg-clip-text text-transparent">
                Engineered Without Compromise
              </span>
            </>
          }
          align="center"
          subtitle="We design and build websites, AI systems, and digital products for brands that demand more than ordinary — precision, performance, and presence."
          actions={
            <>
              <Button as="a" href="/booking" variant="primary" size="lg" showArrow className="min-w-[200px]">
                Start a Project
              </Button>
              <Button as="a" href="/services" variant="ghost" size="lg" showArrow arrowIcon={ArrowRight} className="min-w-[200px]">
                Explore Services
              </Button>
            </>
          }
        />

        {/* Marquee */}
        <section className="relative py-6 border-y border-ast-border bg-ast-surface/30">
          <div className="mx-auto max-w-[1700px] px-2">
            <div className="overflow-hidden py-4">
              <div className="marquee-track flex min-w-max animate-marquee transform-gpu items-center gap-6 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.36em] text-ast-muted sm:text-xs">
                {[...marqueeItems, ...marqueeItems].map((item, index) => (
                  <span className="marquee-label" key={`${item}-${index}`}>
                    <span>{item}</span>
                    <span className="text-ast-accent/50">◆</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack & Approach Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 xl:px-12 section-gradient-bg">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                className="inline-flex items-center gap-2 rounded-full border border-ast-border bg-ast-surface/50 px-4 py-1.5 text-xs font-mono uppercase tracking-[0.2em] text-ast-accent backdrop-blur-sm"
              >
                <span className="relative flex h-1.5 w-1.5 rounded-full bg-ast-accent animate-pulse" />
                Our Stack & Approach
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: 0.1 }}
                className="mt-5 text-4xl font-bold uppercase tracking-tight text-ast-text sm:text-5xl lg:text-6xl font-display"
              >
                Why We Choose <span className="bg-gradient-to-r from-ast-accent via-ast-text to-ast-accent bg-clip-text text-transparent">The Right Tool</span>{' '}
                <span className="bg-gradient-to-r from-ast-accent via-ast-text to-ast-accent bg-clip-text text-transparent">Every Time</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: 0.2 }}
                className="mt-4 max-w-2xl mx-auto text-lg leading-relaxed text-ast-muted"
              >
                No dogma. No legacy baggage. We pick the technology that serves the product — not our resume.
              </motion.p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {techCategories.map((category, index) => (
                <motion.article
                  key={category.title}
                  initial={{ opacity: 0, y: 28, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative overflow-hidden rounded-2xl border border-ast-border bg-ast-surface/50 p-6 sm:p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-ast-accent/30 hover:shadow-[0_32px_64px_rgba(0,0,0,0.4)] hover:shadow-ast-accent/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-ast-accent/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative z-10">
                    <div className="mb-7 flex items-center justify-between">
                      <div className="group-hover:scale-110 transition-transform duration-500 flex h-14 w-14 items-center justify-center rounded-xl border border-ast-border bg-ast-surface/80 text-ast-accent">
                        <category.icon className="h-6 w-6" />
                      </div>
                      <span className="text-[10px] font-medium uppercase tracking-[0.26em] text-ast-muted">0{index + 1}</span>
                    </div>

                    <h3 className="text-2xl font-semibold text-ast-text">{category.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-ast-muted">{category.description}</p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {category.tech.map((t, i) => (
                        <span
                          key={t}
                          className="text-[11px] font-mono text-ast-muted border border-ast-border px-3 py-1.5 rounded-full bg-ast-surface/50 hover:bg-ast-accent/10 hover:text-ast-accent hover:border-ast-accent/30 transition-all duration-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="px-4 py-24 sm:px-6 lg:px-8 xl:px-12 section-gradient-bg-alt">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                className="inline-flex items-center gap-2 rounded-full border border-ast-border bg-ast-surface/50 px-4 py-1.5 text-xs font-mono uppercase tracking-[0.2em] text-ast-accent backdrop-blur-sm"
              >
                <span className="relative flex h-1.5 w-1.5 rounded-full bg-ast-accent animate-pulse" />
                Core Capabilities
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: 0.1 }}
                className="mt-5 text-4xl font-bold uppercase tracking-tight text-ast-text sm:text-5xl lg:text-6xl font-display"
              >
                Signature Solutions for{' '}
                <span className="bg-gradient-to-r from-ast-accent via-ast-text to-ast-accent bg-clip-text text-transparent">
                  Ambitious Brands
                </span>
              </motion.h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {serviceCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <motion.article
                    key={card.title}
                    initial={{ opacity: 0, y: 28, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="group relative overflow-hidden rounded-2xl border border-ast-border bg-ast-surface/50 p-6 sm:p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-ast-accent/30 hover:shadow-[0_32px_64px_rgba(0,0,0,0.4)] hover:shadow-ast-accent/10"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-ast-accent/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative z-10">
                      <div className="mb-7 flex items-center justify-between">
                        <div className="group-hover:scale-110 transition-transform duration-500 flex h-14 w-14 items-center justify-center rounded-xl border border-ast-border bg-ast-surface/80 text-ast-accent">
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className="text-[10px] font-medium uppercase tracking-[0.26em] text-ast-muted">0{index + 1}</span>
                      </div>

                      <h3 className="text-2xl font-semibold text-ast-text">{card.title}</h3>
                      <p className="mt-4 text-sm leading-relaxed text-ast-muted">{card.description}</p>

                      <Link
                        to={card.link}
                        className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ast-accent transition-transform duration-300 hover:translate-x-1"
                      >
                        <span>Learn more</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </motion.article>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: 0.4 }}
              className="mt-16 text-center"
            >
              <Link
                to="/services"
                className="inline-flex items-center gap-3 rounded-full border border-ast-accent/40 bg-transparent px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-ast-accent transition-all duration-300 hover:bg-ast-accent hover:text-ast-bg hover:shadow-[0_0_24px_rgba(0,212,255,0.35)]"
              >
                View All Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="px-4 py-16 sm:px-6 lg:px-8 xl:px-12 section-gradient-bg border-y border-ast-border">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                className="inline-flex items-center gap-2 rounded-full border border-ast-border bg-ast-surface/50 px-4 py-1.5 text-xs font-mono uppercase tracking-[0.2em] text-ast-accent backdrop-blur-sm"
              >
                <span className="relative flex h-1.5 w-1.5 rounded-full bg-ast-accent animate-pulse" />
                Our Philosophy
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: 0.1 }}
                className="mt-5 text-4xl font-bold uppercase tracking-tight text-ast-text sm:text-5xl lg:text-6xl font-display"
              >
                Built for Scale.{' '}
                <span className="bg-gradient-to-r from-ast-accent via-ast-text to-ast-accent bg-clip-text text-transparent">
                  Engineered for Prestige.
                </span>
              </motion.h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {whyChooseUs.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="group relative overflow-hidden rounded-2xl border border-ast-border bg-ast-surface/50 p-6 sm:p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-ast-accent/30 hover:shadow-[0_32px_64px_rgba(0,0,0,0.4)] hover:shadow-ast-accent/10"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-ast-accent/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="mb-6 flex items-center justify-between">
                      <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-ast-accent">{item.number}</span>
                      <div className="group-hover:scale-110 transition-transform duration-500 flex h-12 w-12 items-center justify-center rounded-xl border border-ast-border bg-ast-surface/80 text-ast-accent">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-ast-text">{item.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-ast-muted">{item.description}</p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            className="relative overflow-hidden rounded-3xl border border-ast-border bg-gradient-to-b from-ast-surface/50 to-ast-bg p-8 sm:p-12 lg:p-16 text-center shadow-[0_0_80px_rgba(0,212,255,0.06)]"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-ast-accent/10 via-transparent to-transparent pointer-events-none" />
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-ast-border bg-ast-surface/50 px-4 py-1.5 text-xs font-mono uppercase tracking-[0.2em] text-ast-accent backdrop-blur-sm mb-6">
                <span className="relative flex h-1.5 w-1.5 rounded-full bg-ast-accent animate-pulse" />
                Ready to Begin
              </span>
              <h2 className="text-4xl font-bold uppercase tracking-tight text-ast-text sm:text-6xl lg:text-7xl font-display leading-[0.92] mb-8">
                LET'S BUILD YOUR NEXT{' '}
                <span className="bg-gradient-to-r from-ast-accent via-ast-text to-ast-accent bg-clip-text text-transparent">
                  DIGITAL MASTERPIECE
                </span>
              </h2>
              <p className="text-lg text-ast-muted max-w-2xl mx-auto mb-12 leading-relaxed">
                Strategic design, custom development, and AI automation that make your business
                feel as premium as the value you deliver.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button
                  as="a"
                  href="/booking"
                  variant="primary"
                  size="lg"
                  showArrow
                  className="min-w-[220px]"
                >
                  Book a Strategy Call
                </Button>
                <Button
                  as="a"
                  href="/portfolio"
                  variant="ghost"
                  size="lg"
                  showArrow
                  className="min-w-[220px]"
                  arrowIcon={ArrowUpRight}
                >
                  View Our Work
                </Button>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}