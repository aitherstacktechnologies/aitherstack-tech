import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Check, Code2, Compass, Cpu, Gauge, Palette, ShieldCheck, Sparkles, Waypoints } from 'lucide-react';

const oneTimeProjects = [
  { icon: Sparkles, category: 'E-Commerce & Apps', title: 'Luxury E-Commerce & Web Apps', price: 'Starting $1,499', description: 'High-performance digital storefronts and web applications built around your product and customer journey.', features: ['Fast frontend with smooth Framer Motion animation transitions', 'Custom checkout infrastructure & database integration (Supabase/Postgres)', 'Dark mode native UI support & interactive product showcases', 'Sub-second performance optimization & SEO readiness'] },
  { icon: Gauge, category: 'Conversion Systems', title: 'High-Converting Landing Pages', price: 'Starting $499', description: 'Focused landing pages designed to turn paid and organic attention into qualified leads.', features: ['Ultra-responsive UI with conversion-focused micro-interactions', 'Enterprise security, anti-spam & reCAPTCHA protection', 'Google Search Console/GA4 setup & direct API lead capture forms', 'Bespoke copywriting layout structure & dynamic asset loading'] },
  { icon: Cpu, category: 'AI & Automation', title: 'AI Voice Assistant & Chatbot Setup', price: 'Starting $899', description: 'Website-based AI assistant that answers questions, captures intent, and moves visitors toward a booking.', features: ['Custom Vapi AI voice agent & LLM knowledge base configuration', 'Real-time Cal.com / Calendly automated booking integration', 'Supabase lead storage & automated n8n/Make CRM workflows', 'Custom voice prompt tuning & continuous fallback handling'] },
  { icon: Palette, category: 'Design Systems', title: 'UI/UX Design & Brand System', price: 'Starting $599', description: 'A practical visual system that gives your product a clear, consistent, and build-ready identity.', features: ['Production-ready Figma design system, auto-layout kits & wireframes', 'Pixel-perfect design-to-code implementation guidelines', 'High-resolution SVG iconography, vector assets & design tokens', 'Interactive desktop & mobile prototype walkthroughs'] },
];

const retainers = [
  { category: 'Care & Stability', title: 'Website Maintenance & Support', price: '$299/mo', features: ['Weekly updates, speed fixes, bug fixes', 'Auto backups and downtime monitoring', '2 minor UI edits per month', 'Monthly performance health check', 'Priority support for critical production issues'] },
  { category: 'AI Operations', title: 'AI Agent & Voice Bot Management', price: '$499/mo', features: ['Vapi/LLM maintenance and response tuning', 'n8n/Make integrations and workflow upkeep', 'Conversation log review and API token management', 'Knowledge base updates for new offers and FAQs', 'Monthly quality and fallback-flow review'] },
  { category: 'Growth Engine', title: 'Performance Marketing & Social Media', price: '$599/mo', features: ['Social content and ad creative design', 'Lead form optimization and landing page insights', 'Conversion tracking setup and reporting', 'Campaign testing for offers and messaging', 'Monthly growth recommendations'] },
  { category: 'Embedded Engineering', title: 'Dedicated Developer Support', price: '$899/mo', featured: true, features: ['Monthly dev hours for feature builds', 'Ongoing feature rollouts and release planning', 'Continuous product support', 'Technical backlog grooming and prioritization', 'Direct engineering communication and progress updates'] },
];

const executionSteps = [
  { number: '01', icon: Compass, title: 'Discovery & Strategy', description: 'We clarify the opportunity, audience, technical requirements, and success metrics before a line of code is written.' },
  { number: '02', icon: Code2, title: 'Custom Engineering', description: 'We design and build the system around your workflow, with fast interfaces, durable integrations, and clear ownership.' },
  { number: '03', icon: Waypoints, title: 'Launch & AI Automation', description: 'We launch with confidence, connect the automations that matter, and give your team a system that keeps improving.' },
];

const guarantees = [
  { icon: ShieldCheck, title: '100% Code & Asset Ownership', description: 'You retain full ownership of the Git repo, Figma files, and Supabase database.' },
  { icon: Gauge, title: 'Sub-Second Speed SLA', description: 'Every build is optimized for fast load times and clean core web vitals.' },
  { icon: Waypoints, title: 'Seamless Handover', description: 'Video walkthroughs and 30-day post-launch bug warranty included with every project.' },
  { icon: Sparkles, title: 'Direct Dev Communication', description: 'Direct communication via Slack and Loom updates with zero middle management delay.' },
];

const reveal = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } } };
const gridReveal = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };

function ProjectCard({ project }) {
  const Icon = project.icon;
  return (
    <motion.article variants={reveal} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} whileHover={{ y: -6 }} className="group relative flex min-w-0 transform-gpu flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#0E0E12] p-6 transition-all duration-300 will-change-transform sm:p-10">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-orange-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative">
        <div className="flex min-w-0 flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <span className="rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 font-mono text-[11px] uppercase text-orange-400">{project.category}</span>
          <span className="font-mono text-2xl font-bold text-white">{project.price}</span>
        </div>
        <div className="mt-7 flex h-11 w-11 items-center justify-center rounded-xl bg-white/4 text-[#FF5500]"><Icon size={21} strokeWidth={1.7} /></div>
        <h3 className="mt-4 mb-2 wrap-break-word text-[clamp(1.35rem,6vw,1.5rem)] font-bold text-white transition-colors group-hover:text-orange-400">{project.title}</h3>
        <p className="mb-6 text-sm leading-relaxed text-neutral-400">{project.description}</p>
        <ul className="mb-8 space-y-3">{project.features.map((feature) => <li key={feature} className="flex items-start gap-3 text-sm text-neutral-300"><Check size={16} className="mt-0.5 shrink-0 font-bold text-orange-500" /><span>{feature}</span></li>)}</ul>
      </div>
      <Link to="/booking" className="group/btn relative z-10 mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#FF5500] text-white border border-[#FF5500] px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:bg-white hover:text-[#FF5500] hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] active:scale-95">Book Strategy Call <ArrowUpRight size={17} className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" /></Link>
    </motion.article>
  );
}

function RetainerCard({ plan }) {
  return (
    <motion.article variants={reveal} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} whileHover={{ y: -6 }} className={`group relative flex min-w-0 transform-gpu flex-col justify-between overflow-hidden rounded-3xl border p-6 transition-all duration-300 will-change-transform hover:border-orange-500/40 sm:p-10 ${plan.featured ? 'border-orange-500/40 bg-linear-to-b from-orange-500/10 via-[#0E0E12] to-[#0E0E12] shadow-[0_0_25px_rgba(255,85,0,0.12)]' : 'border-white/10 bg-[#0E0E12]'}`}>
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-orange-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative">
        <div className="flex min-w-0 flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <span className="rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 font-mono text-[11px] uppercase text-orange-400">{plan.category}</span>
          <span className="font-mono text-2xl font-bold text-white">{plan.price}</span>
        </div>
        <div className="mt-7 flex items-center justify-between gap-4">
          <h3 className="wrap-break-word text-[clamp(1.35rem,6vw,1.5rem)] font-bold text-white transition-colors group-hover:text-orange-400">{plan.title}</h3>
          {plan.featured && <span className="shrink-0 rounded-full bg-orange-500 text-black font-bold text-[10px] tracking-wider uppercase px-2.5 py-0.5">Popular</span>}
        </div>
        <ul className="mb-8 mt-6 space-y-3">{plan.features.map((feature) => <li key={feature} className="flex items-start gap-3 text-sm text-neutral-300"><Check size={16} className="mt-0.5 shrink-0 font-bold text-orange-500" /><span>{feature}</span></li>)}</ul>
      </div>
      <Link to="/booking" className="group/btn relative z-10 mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#FF5500] text-white border border-[#FF5500] px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:bg-white hover:text-[#FF5500] hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] active:scale-95">Select Package <ArrowUpRight size={17} className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" /></Link>
    </motion.article>
  );
}

export default function Services() {
  const [activeTab, setActiveTab] = useState('projects');
  return (
    <main className="min-h-screen min-w-0 max-w-full overflow-x-hidden bg-[#08080A] text-white">
      <section className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-48">
        <div className="mobile-motion-lite pointer-events-none absolute inset-x-0 top-0 h-175 bg-linear-to-t from-orange-500/20 via-purple-900/10 to-transparent blur-3xl opacity-60" />
        <div className="mobile-motion-lite absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-75 bg-orange-500/15 rounded-full blur-[120px] pointer-events-none -z-10" />
        <motion.div initial="hidden" animate="visible" variants={reveal} className="relative mx-auto max-w-5xl text-center">
          <h1 className="wrap-break-word text-[clamp(2.5rem,11vw,5rem)] font-black uppercase leading-[0.95] tracking-[-0.04em] sm:text-8xl">
            <span className="text-[#FF5500]">TRANSPARENT</span>{' '}
            <span className="text-white">ARCHITECTURE.</span>
            <br className="hidden sm:block" />
            <span className="text-white">EXPONENTIAL VALUE.</span>
          </h1>
          <p className="mx-auto mt-12 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
            Clear scope, high-end execution, and no template bloat. Select a bespoke one-time build or an ongoing engineering retainer.
          </p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.6, duration: 1 }}
            className="mt-16 flex justify-center"
          >
            <div className="h-px w-24 bg-linear-to-r from-transparent via-[#FF5500] to-transparent opacity-60" />
          </motion.div>
        </motion.div>
      </section>

      <section className="min-w-0 px-4 py-20 sm:px-6 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="flex justify-center mb-16">
            <div className="flex w-full max-w-md flex-col rounded-2xl bg-neutral-900/80 p-1.5 backdrop-blur-xl sm:inline-flex sm:w-auto sm:max-w-none sm:flex-row sm:rounded-full">
              <button 
                onClick={() => setActiveTab('projects')} 
                className={`relative w-full rounded-full px-4 py-2.5 text-xs font-bold uppercase tracking-widest transition-all duration-500 sm:w-auto sm:px-8 ${activeTab === 'projects' ? 'bg-[#FF5500] text-white shadow-[0_0_20px_rgba(255,85,0,0.3)]' : 'text-neutral-500 hover:text-neutral-200'}`}
              >
                One-Time Projects
              </button>
              <button 
                onClick={() => setActiveTab('retainers')} 
                className={`relative w-full rounded-full px-4 py-2.5 text-xs font-bold uppercase tracking-widest transition-all duration-500 sm:w-auto sm:px-8 ${activeTab === 'retainers' ? 'bg-[#FF5500] text-white shadow-[0_0_20px_rgba(255,85,0,0.3)]' : 'text-neutral-500 hover:text-neutral-200'}`}
              >
                Monthly Retainers
              </button>
            </div>
          </div>
          <div className="mb-8 text-center sm:mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">Build the next version of your business.</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-400">Choose a focused build for immediate momentum or ongoing support that keeps your digital system sharp.</p>
          </div>
          <AnimatePresence mode="wait">
            {activeTab === 'projects' ? <motion.div key="projects" initial="hidden" animate="visible" exit={{ opacity: 0, y: -12 }} variants={gridReveal} className="grid min-w-0 grid-cols-1 gap-8 sm:gap-12 md:grid-cols-2">{oneTimeProjects.map((project) => <ProjectCard key={project.title} project={project} />)}</motion.div> : <motion.div key="retainers" initial="hidden" animate="visible" exit={{ opacity: 0, y: -12 }} variants={gridReveal} className="grid min-w-0 grid-cols-1 gap-8 sm:gap-12 md:grid-cols-2">{retainers.map((plan) => <RetainerCard key={plan.title} plan={plan} />)}</motion.div>}
          </AnimatePresence>
        </div>
      </section>

      <section className="px-6 py-24 sm:py-32"><div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl sm:mb-16"><h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">A clear path from first conversation to compounding growth.</h2><p className="mt-4 text-sm leading-7 text-neutral-400">A disciplined process keeps every decision clear, useful, and connected to the outcome.</p></div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={gridReveal} className="relative grid transform-gpu gap-8 will-change-transform sm:gap-12 lg:grid-cols-3">
          <div className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-10 hidden border-t border-dashed border-white/10 lg:block" />
          {executionSteps.map((step) => { const Icon = step.icon; return <motion.article key={step.number} variants={reveal} whileHover={{ y: -6 }} className="group relative transform-gpu overflow-hidden rounded-2xl bg-[#0E0E12]/80 border border-white/10 p-8 transition-all duration-300 hover:border-orange-500/40 hover:shadow-[0_10px_30px_rgba(255,85,0,0.1)] sm:p-10"><div className="pointer-events-none absolute inset-0 bg-linear-to-b from-orange-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" /><div className="relative flex items-center justify-between"><span className="font-mono text-2xl text-neutral-500 transition-colors duration-300 group-hover:text-orange-500">{step.number}</span><Icon size={22} className="text-neutral-500 transition-colors duration-300 group-hover:text-orange-400" /></div><div className="relative"><h3 className="mt-12 text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-orange-400">{step.title}</h3><p className="mt-4 text-sm leading-7 text-neutral-400">{step.description}</p></div></motion.article>; })}
        </motion.div>
      </div></section>

      <section className="border-t border-white/5 bg-white/1.5 px-6 py-24 sm:py-32"><div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl sm:mb-16"><h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">Built for ownership, speed, and momentum.</h2><p className="mt-4 text-sm leading-7 text-neutral-400">The details that protect your investment before, during, and after launch.</p></div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={gridReveal} className="grid transform-gpu gap-8 will-change-transform sm:gap-12 sm:grid-cols-2">{guarantees.map((guarantee) => { const Icon = guarantee.icon; return <motion.article key={guarantee.title} variants={reveal} whileHover={{ y: -6 }} className="group relative transform-gpu overflow-hidden rounded-3xl border border-white/10 bg-[#0E0E12] p-8 transition-all duration-300 will-change-transform hover:border-orange-500/40 sm:p-10"><div className="pointer-events-none absolute inset-0 bg-linear-to-b from-orange-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" /><div className="relative"><Icon size={24} className="text-[#FF5500] transition-colors duration-300 group-hover:text-orange-300" /><h3 className="mt-8 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-orange-400">{guarantee.title}</h3><p className="mt-3 max-w-md text-sm leading-7 text-neutral-400">{guarantee.description}</p></div></motion.article>; })}</motion.div>
      </div></section>

      <section className="bg-[#08080A] px-6 py-24 text-center sm:py-32"><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={reveal} className="transform-gpu will-change-transform"><h2 className="mx-auto max-w-3xl text-4xl font-black uppercase tracking-tight text-white sm:text-6xl">LET&apos;S BUILD SOMETHING EXTRAORDINARY.</h2><Link to="/booking" className="mt-10 inline-flex items-center gap-3 rounded-xl bg-linear-to-r from-[#FF5500] to-orange-600 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-none hover:bg-white hover:text-[#FF5500] hover:shadow-[0_0_25px_rgba(255,85,0,0.4)] active:scale-95">Book Strategy Call <ArrowUpRight size={18} /></Link></motion.div></section>
    </main>
  );
}
