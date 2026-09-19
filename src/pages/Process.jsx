import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, CheckCircle2, ClipboardCheck } from 'lucide-react';
import Button from '../components/Button';
import Hero, { AccentText } from '../components/Hero';

const steps = [
  { num: '01', days: 'Days 1–2', title: 'Audit & Strategy', icon: ClipboardCheck, description: 'We review your current system, map out what needs to change, and lock the technical architecture and UI blueprint — with your sign-off before anything is built.', deliverables: 'System audit notes, approved UI blueprint, confirmed project scope', points: ['Business review', 'User research', 'Technical mapping', 'Scope confirmation', 'Architecture sign-off', 'UI blueprint approved'] },
  { num: '02', days: 'Days 3–7', title: 'Build & Integration', icon: Cpu, description: 'AI agents are trained on your business data, and your automation pipelines (n8n/Make.com) are built and connected to your CRM, forms, and notifications.', deliverables: 'Trained AI agent, connected pipelines, work-in-progress preview link', points: ['AI agent training', 'n8n/Make pipelines', 'CRM connections', 'Form integrations', 'Notification setup', 'Preview link shared'] },
  { num: '03', days: 'Days 8–10', title: 'Testing & Handoff', icon: CheckCircle2, description: 'Everything is tested live, deployed to production, and your team gets a full walkthrough of how it all works — so you\'re never dependent on us to understand it.', deliverables: 'Live deployment, recorded walkthrough, documentation, 14-day support window starts', points: ['Live testing', 'Bug fixes', 'Performance tuning', 'Production deployment', 'Documentation handoff', 'Team walkthrough'] },
];

const reveal = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } } };
const gridReveal = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };

export default function Process() {
  return (
    <main className="min-h-screen overflow-hidden bg-transparent text-ast-ivory">
      <Hero
        eyebrow="// EXECUTION FRAMEWORK"
        title={
          <>
            How We Engineer<br />
            High-Impact <AccentText>Systems.</AccentText>
          </>
        }
        subtitle="From initial architecture audit to live production in 8-10 business days. Transparent milestones, zero middle management delay, and 100% code delivery."
        align="left"
      />

      {/* PROCESS TIMELINE */}
      <section className="px-6 py-16 sm:py-24">
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
                  whileHover={{ y: -8 }} 
                  className="group relative transform-gpu glassmorphic-card rounded-2xl p-8 transition-all duration-300 will-change-transform hover:border-ast-warm-orange/40 hover:shadow-[0_10px_30px_rgba(243,107,63,0.15)]"
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ast-warm-orange/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-2xl font-mono text-ast-muted group-hover:text-ast-peach transition-colors duration-300">
                        {step.num}
                      </span>
                      <div className="p-2 rounded-lg glassmorphic-card text-ast-muted group-hover:text-ast-peach transition-colors">
                        <Icon size={20} />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-ast-ivory mb-3">{step.title}</h3>
                    <div className="inline-block px-3 py-1 rounded-full text-[10px] font-mono font-bold border border-ast-border bg-ast-surface/50 text-ast-muted mb-6">
                      {step.days}
                    </div>
                    <p className="text-sm leading-relaxed text-ast-muted mb-8">
                      {step.description}
                    </p>
                    <div className="p-4 rounded-xl glassmorphic-card border border-ast-border">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-ast-peach block mb-2">What you get</span>
                      <p className="text-xs text-ast-muted leading-relaxed">{step.deliverables}</p>
                    </div>
                    <div className="mt-4 space-y-2">
                      {step.points.map((point, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-ast-muted">
                          <span className="w-1 h-1 rounded-full bg-ast-accent" />
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="relative py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.1 }} 
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
          className="relative transform-gpu overflow-hidden rounded-3xl border border-ast-warm-orange/30 glassmorphic-luxury p-6 sm:p-10 text-center shadow-[0_0_80px_rgba(243,107,63,0.06)] will-change-transform glow-luxury"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-ast-warm-orange/10 via-transparent to-transparent pointer-events-none" />
          
          <div className="relative z-10">
            <span className="inline-block text-[10px] font-mono uppercase tracking-[0.3em] text-ast-peach mb-6">// DIRECT COLLABORATION</span>
            <h2 className="text-4xl font-black uppercase tracking-tight text-ast-ivory sm:text-6xl leading-[0.95] mb-8">
              WANT TO WORK WITH US <br />
              <span className="text-gradient-luxury">DIRECTLY?</span>
            </h2>
            <p className="text-ast-muted text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
              We're a small, agile technical team — we move fast and ship production-ready systems.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button
                to="/booking"
                variant="primary"
                size="lg"
                showArrow
              >
                Book a Call
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}