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
    category: 'High-Conversion Web Platforms',
    title: 'High-Conversion Web Platforms by AST',
    price: 'Starting $1,499',
    badge: 'Blazing Fast Edge Tech',
    features: [
      'Engineered on modern Next.js architectures to deploy instantly at the edge and load in under 1 second',
      'Custom checkout infrastructure & database integration (Supabase/Postgres)',
      'Dark mode native UI support & interactive product showcases',
      'Sub-second performance optimization & SEO readiness',
    ],
  },
  {
    category: 'Conversion Systems',
    title: 'High-Converting Landing Pages',
    price: 'Starting $499',
    badge: 'Core Web Vitals Optimized',
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
    badge: '24/7 Automated Triage',
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
    badge: 'Production-Ready Figma',
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
className={`card-3d-glass group`}>
       <div className="card-inner flex flex-col h-full">
         <div className="flex min-w-0 flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
           <span className="rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 font-mono text-[11px] uppercase text-orange-500">
             {service.category}
           </span>
           <span className="font-mono text-2xl font-bold text-white">{service.price}</span>
         </div>
         <div className="mt-7 flex items-start justify-between gap-4">
           <h3 className="wrap-break-word text-[clamp(1.25rem,5vw,1.5rem)] font-bold text-white transition-colors group-hover:text-orange-500">
             {service.title}
           </h3>
           {service.featured && (
             <span className="shrink-0 rounded-full bg-orange-500 text-white font-bold text-[10px] tracking-wider uppercase px-2.5 py-0.5">
               Popular
             </span>
           )}
         </div>
         {service.badge && (
           <span className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.2em] text-orange-500 self-start">
             {service.badge}
           </span>
         )}
         <ul className="mb-8 mt-6 space-y-3 flex-1">
           {service.features.map((feature) => (
             <li key={feature} className="flex items-start gap-3 text-sm text-white/70">
               <Check size={16} className="mt-0.5 shrink-0 font-bold text-orange-500" />
               <span>{feature}</span>
             </li>
           ))}
         </ul>
       </div>
      <Button
        to="/booking"
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
whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true, amount: 0.1 }}
       className="card-3d-glass group"
     >
       <div className="card-inner">
         <span className="font-mono text-2xl text-white/70 transition-colors duration-300 group-hover:text-orange-500">
           {step.number}
         </span>
         <Icon size={22} className="text-orange-500 transition-colors duration-300 group-hover:text-orange-500" />
       </div>
      <div className="relative">
        <h3 className="mt-12 text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-orange-500">
          {step.title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-white/70">{step.description}</p>
      </div>
    </motion.article>
  );
}

function Guarantee({ guarantee }) {
  const Icon = guarantee.icon;
  return (
    <motion.article
      variants={reveal}
whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true, amount: 0.1 }}
       className="card-3d-glass group"
    >
      <div className="card-inner">
<Icon size={24} className="text-orange-500 transition-colors duration-300 group-hover:text-orange-500" />
         <h3 className="mt-8 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-orange-500">
           {guarantee.title}
         </h3>
         <p className="mt-3 max-w-md text-sm leading-7 text-white/70">{guarantee.description}</p>
      </div>
    </motion.article>
  );
}

export default function Services() {
  const [activeTab, setActiveTab] = useState('retainers');

  return (
    <main className="min-h-screen min-w-0 max-w-full overflow-x-hidden bg-transparent text-white">
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
            <Button to="/booking" variant="primary" size="lg" showArrow>Book a Strategy Call</Button>
            <Button to="/services" variant="ghost" size="lg">View Packages</Button>
          </>
        )}
      />

      <section className="min-w-0 px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex justify-center mb-12 sm:mb-16">
<div className="flex w-full max-w-md flex-col rounded-2xl bg-white/[0.08] p-1.5 backdrop-blur-xl sm:inline-flex sm:w-auto sm:max-w-none sm:flex-row sm:rounded-full">
               <button
                 onClick={() => setActiveTab('projects')}
                 className={`relative w-full rounded-full px-4 py-2.5 text-xs font-bold uppercase tracking-widest transition-all duration-500 sm:w-auto sm:px-8 ${
                   activeTab === 'projects'
                     ? 'bg-orange-500 text-white shadow-[0_0_20px_rgba(255,85,0,0.3)]'
                     : 'text-white/70 hover:text-white'
                 }`}
               >
                 One-Time Projects
               </button>
               <button
                 onClick={() => setActiveTab('retainers')}
                 className={`relative w-full rounded-full px-4 py-2.5 text-xs font-bold uppercase tracking-widest transition-all duration-500 sm:w-auto sm:px-8 ${
                   activeTab === 'retainers'
                     ? 'bg-orange-500 text-white shadow-[0_0_20px_rgba(255,85,0,0.3)]'
                     : 'text-white/70 hover:text-white'
                 }`}
               >
                 Monthly Retainers
               </button>
             </div>
           </div>
           <div className="mb-8 text-center sm:mb-12">
             <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
               Build the next version of your business.
             </h2>
             <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70">
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

       <section className="px-6 py-12 sm:py-16">
         <div className="mx-auto max-w-6xl">
           <div className="mb-12 max-w-2xl sm:mb-16">
             <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
               A clear path from first conversation to compounding growth.
             </h2>
             <p className="mt-4 text-sm leading-7 text-white/70">
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
             <div className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-10 hidden border-t border-dashed border-white/10 lg:block" />
             {executionSteps.map((step) => (
               <ExecutionStep key={step.number} step={step} />
             ))}
           </motion.div>
         </div>
       </section>

       <section className="border-t border-white/10 px-6 py-12 sm:py-16">
         <div className="mx-auto max-w-6xl">
           <div className="mb-12 max-w-2xl sm:mb-16">
             <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
               Built for ownership, speed, and momentum.
             </h2>
             <p className="mt-4 text-sm leading-7 text-white/70">
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
<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-black/10 p-8 sm:p-10 lg:p-12 text-center">
               <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 via-transparent to-transparent pointer-events-none" />
               <div className="relative z-10">
                 <h2 className="mx-auto max-w-3xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white">
                   LET'S BUILD SOMETHING EXTRAORDINARY.
                 </h2>
                <Button
                  to="/booking"
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