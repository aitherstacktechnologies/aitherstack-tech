import React from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Check, Code2, Compass, Cpu, Gauge, Palette, ShieldCheck, Sparkles, Waypoints, ClipboardCheck, CheckCircle2 } from 'lucide-react';

const steps = [
  { num: '01', days: 'Days 1–2', title: 'Audit & Strategy', icon: ClipboardCheck, description: 'We review your current system, map out what needs to change, and lock the technical architecture and UI blueprint — with your sign-off before anything is built.', deliverables: 'System audit notes, approved UI blueprint, confirmed project scope' },
  { num: '02', days: 'Days 3–7', title: 'Build & Integration', icon: Cpu, description: 'AI agents are trained on your business data, and your automation pipelines (n8n/Make.com) are built and connected to your CRM, forms, and notifications.', deliverables: 'Trained AI agent, connected pipelines, work-in-progress preview link' },
  { num: '03', days: 'Days 8–10', title: 'Testing & Handoff', icon: CheckCircle2, description: 'Everything is tested live, deployed to production, and your team gets a full walkthrough of how it all works — so you\'re never dependent on us to understand it.', deliverables: 'Live deployment, recorded walkthrough, documentation, 14-day support window starts' },
];

const reveal = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } } };
const gridReveal = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };

export default function Process() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#08080A] text-white">
      {/* HERO SECTION */}
      <section className="relative px-6 py-32 sm:py-48 overflow-hidden">
        <div className="mobile-motion-lite absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-75 bg-orange-500/15 rounded-full blur-[120px] pointer-events-none -z-10" />
        <motion.div initial="hidden" animate="visible" variants={reveal} className="relative mx-auto max-w-5xl transform-gpu text-center will-change-transform">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF5500]">// EXECUTION FRAMEWORK</span>
          <h1 className="mt-7 text-5xl font-black uppercase leading-[0.95] tracking-[-0.04em] sm:text-8xl">
            <span className="text-white">HOW WE ENGINEER </span>
            <span className="text-[#FF5500]">HIGH-IMPACT SYSTEMS.</span>
          </h1>
          <p className="mx-auto mt-10 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
            From initial architecture audit to live production in 8-10 business days. Transparent milestones, zero middle management delay, and 100% code delivery.
          </p>
        </motion.div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.1 }} 
            variants={gridReveal} 
            className="grid gap-8 sm:gap-12 lg:grid-cols-3"
          >
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <motion.article 
                  key={step.num} 
                  variants={reveal} 
                  whileHover={{ y: -6 }} 
                  className="group relative transform-gpu rounded-2xl bg-[#0E0E12]/80 border border-white/10 p-8 transition-all duration-300 will-change-transform hover:border-orange-500/40 hover:shadow-[0_10px_30px_rgba(255,85,0,0.1)]"
                >
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-orange-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative">
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-2xl font-mono text-neutral-500 group-hover:text-orange-500 transition-colors duration-300">
                        {step.num}
                      </span>
                      <div className="p-2 rounded-lg bg-white/5 text-neutral-400 group-hover:text-orange-400 transition-colors">
                        <Icon size={20} />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                    <div className="inline-block px-3 py-1 rounded-full text-[10px] font-mono font-bold border border-white/10 bg-white/5 text-neutral-400 mb-6">
                      {step.days}
                    </div>
                    <p className="text-sm leading-relaxed text-neutral-400 mb-8">
                      {step.description}
                    </p>
                    <div className="p-4 rounded-xl bg-neutral-900/80 border border-white/5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block mb-2">What you get</span>
                      <p className="text-xs text-neutral-300 leading-relaxed">{step.deliverables}</p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.1 }} 
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
          className="relative transform-gpu overflow-hidden rounded-3xl border border-orange-500/30 bg-[#0B0B0E] p-8 text-center shadow-[0_0_50px_rgba(255,85,0,0.08)] will-change-transform sm:p-16"
        >
          {/* Top Ambient Radial Glow */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#FF5500]/10 via-transparent to-transparent pointer-events-none" />
          
          <div className="relative z-10">
            <span className="inline-block text-[10px] font-mono uppercase tracking-[0.3em] text-[#FF5500] mb-6">// DIRECT COLLABORATION</span>
            <h2 className="text-4xl font-black uppercase tracking-tight text-white sm:text-6xl leading-[0.95] mb-8">
              WANT TO WORK WITH US <br />
              <span className="text-[#FF5500]">DIRECTLY?</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
              We're a small, agile technical team — we move fast and ship production-ready systems.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                to="/booking" 
                className="inline-flex items-center gap-3 rounded-full bg-[#FF5500] text-white border border-[#FF5500] px-8 py-4 text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-white hover:text-[#FF5500] hover:border-white hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] hover:-translate-y-0.5 active:scale-95"
              >
                Book a Call <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}