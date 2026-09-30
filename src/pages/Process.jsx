import React from 'react';
import { Cpu, CheckCircle2, ClipboardCheck } from 'lucide-react';
import Button from '../components/Button';
import Hero, { AccentText } from '../components/Hero';

const steps = [
  { num: '01', days: 'Days 1–2', title: 'Audit & Strategy', icon: ClipboardCheck, description: 'We review your current system, map out what needs to change, and lock the technical architecture and UI blueprint — with your sign-off before anything is built.', deliverables: 'System audit notes, approved UI blueprint, confirmed project scope', points: ['Business review', 'User research', 'Technical mapping', 'Scope confirmation', 'Architecture sign-off', 'UI blueprint approved'] },
  { num: '02', days: 'Days 3–7', title: 'Build & Integration', icon: Cpu, description: 'AI agents are trained on your business data, and your automation pipelines (n8n/Make.com) are built and connected to your CRM, forms, and notifications.', deliverables: 'Trained AI agent, connected pipelines, work-in-progress preview link', points: ['AI agent training', 'n8n/Make pipelines', 'CRM connections', 'Form integrations', 'Notification setup', 'Preview link shared'] },
  { num: '03', days: 'Days 8–10', title: 'Testing & Handoff', icon: CheckCircle2, description: 'Everything is tested live, deployed to production, and your team gets a full walkthrough of how it all works — so you\'re never dependent on us to understand it.', deliverables: 'Live deployment, recorded walkthrough, documentation, 14-day support window starts', points: ['Live testing', 'Bug fixes', 'Performance tuning', 'Production deployment', 'Documentation handoff', 'Team walkthrough'] },
];

export default function Process() {
  return (
    <main className="min-h-screen overflow-hidden bg-transparent text-white">
      <Hero
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
      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 xl:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.num}
                  className="card-3d-glass group reveal"
                >
                  <div className="card-inner">
                    <div className="flex items-center justify-between mb-8">
                      <span className="process-step-number">
                        {step.num}
                      </span>
                      <div className="process-step-icon">
                        <Icon size={24} />
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 text-gradient-shimmer">{step.title}</h3>
                    <div className="inline-block px-3 py-1 rounded-full text-[10px] font-mono font-bold border border-white/10 bg-white/5 text-white/60 mb-6">
                      {step.days}
                    </div>
                    <p className="text-sm leading-relaxed text-white/70 mb-8">
                      {step.description}
                    </p>
                    <div className="p-4 rounded-xl glassmorphic-card border border-white/10">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-orange-400 block mb-2">What you get</span>
                      <p className="text-xs text-white/60 leading-relaxed">{step.deliverables}</p>
                    </div>
                    <div className="mt-4 space-y-2">
                      {step.points.map((point, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-white/60">
                          <span className="w-1 h-1 rounded-full bg-orange-500" />
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="relative py-12 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-orange-500/30 glassmorphic-luxury p-6 sm:p-10 text-center shadow-[0_0_80px_rgba(255,85,0,0.06)] reveal">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-orange-600/10 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10">
            <span className="inline-block text-[10px] font-mono uppercase tracking-[0.3em] text-orange-400 mb-6">// DIRECT COLLABORATION</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[0.95] mb-8 text-gradient-shimmer">
              WANT TO WORK WITH US <br />
              DIRECTLY?
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
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
        </div>
      </section>
    </main>
  );
}