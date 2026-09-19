import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Compass, Code2, Waypoints } from 'lucide-react';
import Button from '../components/Button';
import Hero, { AccentText } from '../components/Hero';

const monthlyRetainers = [
  {
    category: 'Care & Stability',
    title: 'Website Maintenance & Support',
    price: '$299/mo',
    features: [
      'Weekly updates, speed fixes, bug fixes',
      'Auto backups and downtime monitoring',
      '2 minor UI edits per month',
      'Monthly performance health check',
      'Priority support for critical production issues',
    ],
  },
  {
    category: 'AI Operations',
    title: 'AI Agent & Voice Bot Management',
    price: '$499/mo',
    features: [
      'Vapi/LLM maintenance and response tuning',
      'n8n/Make integrations and workflow upkeep',
      'Conversation log review and API token management',
      'Knowledge base updates for new offers and FAQs',
      'Monthly quality and fallback-flow review',
    ],
  },
  {
    category: 'Growth Engine',
    title: 'Performance Marketing & Social Media',
    price: '$599/mo',
    features: [
      'Social content and ad creative design',
      'Lead form optimization and landing page insights',
      'Conversion tracking setup and reporting',
      'Campaign testing for offers and messaging',
      'Monthly growth recommendations',
    ],
  },
  {
    category: 'Embedded Engineering',
    title: 'Dedicated Developer Support',
    price: '$899/mo',
    featured: true,
    features: [
      'Monthly dev hours for feature builds',
      'Ongoing feature rollouts and release planning',
      'Continuous product support',
      'Technical backlog grooming and prioritization',
      'Direct engineering communication and progress updates',
    ],
  },
];

const oneTimeProjects = [
  {
    category: 'E-Commerce & Web Apps',
    title: 'Luxury E-Commerce & Web Apps',
    price: 'Starting $1,499',
    features: [
      'Fast frontend with smooth Framer Motion animation transitions',
      'Custom checkout infrastructure & database integration (Supabase/Postgres)',
      'Dark mode native UI support & interactive product showcases',
      'Sub-second performance optimization & SEO readiness',
    ],
  },
  {
    category: 'Conversion Systems',
    title: 'High-Converting Landing Pages',
    price: 'Starting $499',
    features: [
      'Ultra-responsive UI with conversion-focused micro-interactions',
      'Enterprise security, anti-spam & reCAPTCHA protection',
      'Google Search Console/GA4 setup & direct API lead capture forms',
      'Bespoke copywriting layout structure & dynamic asset loading',
    ],
  },
  {
    category: 'AI & Automation',
    title: 'AI Voice Assistant & Chatbot Setup',
    price: 'Starting $899',
    features: [
      'Custom Vapi AI voice agent & LLM knowledge base configuration',
      'Real-time Cal.com / Calendly automated booking integration',
      'Supabase lead storage & automated n8n/Make CRM workflows',
      'Custom voice prompt tuning & continuous fallback handling',
    ],
  },
  {
    category: 'Design Systems',
    title: 'UI/UX Design & Brand System',
    price: 'Starting $599',
    features: [
      'Production-ready Figma design system, auto-layout kits & wireframes',
      'Pixel-perfect design-to-code implementation guidelines',
      'High-resolution SVG iconography, vector assets & design tokens',
      'Interactive desktop & mobile prototype walkthroughs',
    ],
  },
];

const executionSteps = [
  { number: '01', icon: Compass, title: 'Discovery & Strategy', description: 'We clarify the opportunity, audience, technical requirements, and success metrics before a line of code is written.' },
  { number: '02', icon: Code2, title: 'Custom Engineering', description: 'We design and build the system around your workflow, with fast interfaces, durable integrations, and clear ownership.' },
  { number: '03', icon: Waypoints, title: 'Launch & AI Automation', description: 'We launch with confidence, connect the automations that matter, and give your team a system that keeps improving.' },
];

const guarantees = [
  { icon: Check, title: '100% Code & Asset Ownership', description: 'You retain full ownership of the Git repo, Figma files, and Supabase database.' },
  { icon: Check, title: 'Sub-Second Speed SLA', description: 'Every build is optimized for fast load times and clean core web vitals.' },
  { icon: Check, title: 'Seamless Handover', description: 'Video walkthroughs and 30-day post-launch bug warranty included with every project.' },
  { icon: Check, title: 'Direct Dev Communication', description: 'Direct communication via Slack and Loom updates with zero middle management delay.' },
];

const reveal = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } } };
const gridReveal = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };

function ServiceCard({ service, isRetainer }) {
  return (
    <motion.article
      variants={reveal}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      whileHover={{ y: -8 }}
      className={`group relative flex min-w-0 transform-gpu flex-col justify-between overflow-hidden rounded-3xl border p-6 transition-all duration-300 will-change-transform hover:border-ast-accent/40 sm:p-8 ${
        service.featured
          ? 'border-ast-accent/40 bg-gradient-to-b from-ast-accent/10 via-ast-surface to-ast-surface shadow-[0_0_25px_rgba(255,100,31,0.12)]'
          : 'border-ast-border bg-ast-surface/50'
      }`}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ast-accent/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative z-10">
        <div className="flex min-w-0 flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <span className="rounded-full border border-ast-accent/20 bg-ast-accent/10 px-3 py-1 font-mono text-[11px] uppercase text-ast-accent">
            {service.category}
          </span>
          <span className="font-mono text-2xl font-bold text-ast-text">{service.price}</span>
        </div>
        <div className="mt-7 flex items-center justify-between gap-4">
          <h3 className="wrap-break-word text-[clamp(1.25rem,5vw,1.5rem)] font-bold text-ast-text transition-colors group-hover:text-ast-accent">
            {service.title}
          </h3>
          {service.featured && (
            <span className="shrink-0 rounded-full bg-ast-accent text-ast-bg font-bold text-[10px] tracking-wider uppercase px-2.5 py-0.5">
              Popular
            </span>
          )}
        </div>
        <ul className="mb-8 mt-6 space-y-3">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm text-ast-muted">
              <Check size={16} className="mt-0.5 shrink-0 font-bold text-ast-accent" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <Button
        as="a"
        href="/booking"
        variant={service.featured ? 'primary' : 'outline'}
        size="md"
        fullWidth
        showArrow
        className="relative z-10 mt-2"
      >
        {isRetainer ? 'Select Package' : 'Book Strategy Call'}
      </Button>
    </motion.article>
  );
}

function ExecutionStep({ step }) {
  const Icon = step.icon;
  return (
    <motion.article
      variants={reveal}
      whileHover={{ y: -6 }}
      className="group relative transform-gpu overflow-hidden rounded-2xl bg-ast-surface/80 border border-ast-border p-8 transition-all duration-300 hover:border-ast-accent/40 hover:shadow-[0_10px_30px_rgba(255,100,31,0.1)] sm:p-10"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ast-accent/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative flex items-center justify-between">
        <span className="font-mono text-2xl text-ast-muted transition-colors duration-300 group-hover:text-ast-accent">
          {step.number}
        </span>
        <Icon size={22} className="text-ast-muted transition-colors duration-300 group-hover:text-ast-accent" />
      </div>
      <div className="relative">
        <h3 className="mt-12 text-2xl font-semibold text-ast-text transition-colors duration-300 group-hover:text-ast-accent">
          {step.title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-ast-muted">{step.description}</p>
      </div>
    </motion.article>
  );
}

function Guarantee({ guarantee }) {
  const Icon = guarantee.icon;
  return (
    <motion.article
      variants={reveal}
      whileHover={{ y: -6 }}
      className="group relative transform-gpu overflow-hidden rounded-3xl border border-ast-border bg-ast-surface/50 p-8 transition-all duration-300 will-change-transform hover:border-ast-accent/40 sm:p-10"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ast-accent/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative">
        <Icon size={24} className="text-ast-accent transition-colors duration-300 group-hover:text-ast-accent/70" />
        <h3 className="mt-8 text-xl font-semibold text-ast-text transition-colors duration-300 group-hover:text-ast-accent">
          {guarantee.title}
        </h3>
        <p className="mt-3 max-w-md text-sm leading-7 text-ast-muted">{guarantee.description}</p>
      </div>
    </motion.article>
  );
}

export default function Services() {
  const [activeTab, setActiveTab] = useState('retainers');

  return (
    <main className="min-h-screen min-w-0 max-w-full overflow-x-hidden bg-transparent text-ast-text">
      <Hero
        eyebrow="// DIGITAL SYSTEMS"
        title={
          <>
            Digital Systems,<br />
            Built to Move <AccentText>Business Forward.</AccentText>
          </>
        }
        subtitle="Web experiences, AI systems, and automation engineered around how your business actually works."
        actions={(
          <>
            <Button as="a" href="/booking" variant="primary" size="lg" showArrow>Book a Strategy Call</Button>
            <Button as="a" href="/services" variant="ghost" size="lg">View Packages</Button>
          </>
        )}
      />

      <section className="min-w-0 px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex justify-center mb-16">
            <div className="flex w-full max-w-md flex-col rounded-2xl bg-ast-surface/80 p-1.5 backdrop-blur-xl sm:inline-flex sm:w-auto sm:max-w-none sm:flex-row sm:rounded-full">
              <button
                onClick={() => setActiveTab('projects')}
                className={`relative w-full rounded-full px-4 py-2.5 text-xs font-bold uppercase tracking-widest transition-all duration-500 sm:w-auto sm:px-8 ${
                  activeTab === 'projects'
                    ? 'bg-ast-accent text-ast-bg shadow-[0_0_20px_rgba(255,100,31,0.3)]'
                    : 'text-ast-muted hover:text-ast-text'
                }`}
              >
                One-Time Projects
              </button>
              <button
                onClick={() => setActiveTab('retainers')}
                className={`relative w-full rounded-full px-4 py-2.5 text-xs font-bold uppercase tracking-widest transition-all duration-500 sm:w-auto sm:px-8 ${
                  activeTab === 'retainers'
                    ? 'bg-ast-accent text-ast-bg shadow-[0_0_20px_rgba(255,100,31,0.3)]'
                    : 'text-ast-muted hover:text-ast-text'
                }`}
              >
                Monthly Retainers
              </button>
            </div>
          </div>
          <div className="mb-8 text-center sm:mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-ast-text sm:text-5xl">
              Build the next version of your business.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ast-muted">
              Choose a focused build for immediate momentum or ongoing support that keeps your digital system sharp.
            </p>
          </div>
          <AnimatePresence mode="wait">
            {activeTab === 'projects' ? (
              <motion.div
                key="projects"
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -12 }}
                variants={gridReveal}
                className="grid min-w-0 grid-cols-1 gap-8 sm:gap-12 md:grid-cols-2"
              >
                {oneTimeProjects.map((project) => (
                  <ServiceCard key={project.title} service={project} isRetainer={false} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="retainers"
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -12 }}
                variants={gridReveal}
                className="grid min-w-0 grid-cols-1 gap-8 sm:gap-12 md:grid-cols-2"
              >
                {monthlyRetainers.map((plan) => (
                  <ServiceCard key={plan.title} service={plan} isRetainer={true} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl sm:mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-ast-text sm:text-5xl">
              A clear path from first conversation to compounding growth.
            </h2>
            <p className="mt-4 text-sm leading-7 text-ast-muted">
              A disciplined process keeps every decision clear, useful, and connected to the outcome.
            </p>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={gridReveal}
            className="relative grid transform-gpu gap-8 will-change-transform sm:gap-12 lg:grid-cols-3"
          >
            <div className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-10 hidden border-t border-dashed border-ast-border lg:block" />
            {executionSteps.map((step) => (
              <ExecutionStep key={step.number} step={step} />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="border-t border-ast-border px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl sm:mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-ast-text sm:text-5xl">
              Built for ownership, speed, and momentum.
            </h2>
            <p className="mt-4 text-sm leading-7 text-ast-muted">
              The details that protect your investment before, during, and after launch.
            </p>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={gridReveal}
            className="grid transform-gpu gap-8 will-change-transform sm:gap-12 sm:grid-cols-2"
          >
            {guarantees.map((guarantee) => (
              <Guarantee key={guarantee.title} guarantee={guarantee} />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={reveal}
            className="transform-gpu will-change-transform"
          >
            <div className="relative overflow-hidden rounded-3xl border border-ast-border bg-gradient-to-b from-ast-surface/50 to-ast-bg/10 p-8 sm:p-10 lg:p-12 text-center">
              <div className="absolute inset-0 bg-gradient-to-b from-ast-accent/10 via-transparent to-transparent pointer-events-none" />
              <div className="relative z-10">
                <h2 className="mx-auto max-w-3xl text-4xl font-black uppercase tracking-tight text-ast-text sm:text-6xl">
                  LET'S BUILD SOMETHING EXTRAORDINARY.
                </h2>
                <Button
                  as="a"
                  href="/booking"
                  variant="primary"
                  size="lg"
                  showArrow
                  className="mt-10"
                >
                  Book Strategy Call
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}