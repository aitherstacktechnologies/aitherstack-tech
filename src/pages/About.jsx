import React from 'react';
import { ArrowRight, ArrowUpRight, Cpu, Bot, Workflow, Layers } from 'lucide-react';
import Button from '../components/Button';
import Hero, { AccentText } from '../components/Hero';

const capabilities = [
  { title: 'WEB ENGINEERING', description: 'Modern websites, web platforms and custom web applications.', details: ['React & TypeScript', 'Tailwind CSS', 'Framer Motion', 'Sub-second load times'], icon: Layers },
  { title: 'AI SYSTEMS', description: 'AI agents, assistants and intelligent business workflows.', details: ['Vapi / Retell AI', 'LLM orchestration', 'Voice & chat agents', 'Automated workflows', 'Knowledge bases'], icon: Bot },
  { title: 'BUSINESS SOFTWARE', description: 'Dashboards, portals, booking systems and custom platforms.', details: ['Custom dashboards', 'Booking systems', 'Internal portals', 'CRM integrations', 'Data pipelines'], icon: Cpu },
  { title: 'AUTOMATION', description: 'APIs, integrations and automated business workflows.', details: ['n8n & Make.com', 'API development', 'CRM connections', 'Payment systems', 'Custom middleware'], icon: Workflow },
];

const howWeWorkSteps = [
  { number: '01', title: 'DISCOVER', description: 'Understand the business, users and requirements.', deliverables: 'System audit, approved UI blueprint, confirmed project scope', points: ['Business review', 'User research', 'Technical mapping', 'Scope confirmation'] },
  { number: '02', title: 'PLAN', description: 'Define the product structure, technology and implementation.', deliverables: 'Product architecture, tech stack, implementation roadmap', points: ['Architecture design', 'Tech stack selection', 'Milestone planning', 'Resource allocation'] },
  { number: '03', title: 'BUILD', description: 'Develop the experience, functionality and backend systems.', deliverables: 'Working feature set, backend systems, integration layers', points: ['Frontend development', 'Backend engineering', 'API integration', 'Database setup'] },
  { number: '04', title: 'REFINE', description: 'Test, optimize and polish the product.', deliverables: 'Optimized performance, bug fixes, polished interactions', points: ['QA testing', 'Performance tuning', 'UI polishing', 'Accessibility check'] },
  { number: '05', title: 'LAUNCH', description: 'Deploy and prepare the system for real-world use.', deliverables: 'Live deployment, documentation, 14-day support window', points: ['Production deployment', 'Documentation handoff', 'Team walkthrough', 'Support window'] },
];

const whyAst = [
  { title: 'Purpose-driven engineering', description: 'We start with the problem, not unnecessary features.', points: ['Problem-first approach', 'No unnecessary features', 'Focused solutions', 'Real business impact'] },
  { title: 'Modern technology', description: 'We choose current tools and architectures appropriate for the product.', points: ['Current tools only', 'Appropriate architecture', 'Future-proof systems', 'Proven tech stack'] },
  { title: 'Clear communication', description: 'Clients should understand what is being built and why.', points: ['Transparent updates', 'Shared understanding', 'Regular checkpoints', 'No black boxes'] },
  { title: 'Built for real use', description: 'The goal is a product that works beyond the presentation.', points: ['Production-ready output', 'Beyond presentation', 'Real-world testing', 'Usability first'] },
  { title: 'Long-term thinking', description: 'We consider maintainability, scalability and future requirements.', points: ['Maintainability focus', 'Scalable architecture', 'Future requirements', 'Sustainable code'] },
];

const values = [
  { title: 'INNOVATION', description: 'We explore better ways to solve difficult problems.', points: ['Better approaches', 'Difficult problems', 'Creative solutions', 'Continuous improvement'] },
  { title: 'RELIABILITY', description: 'We care about stable, maintainable systems.', points: ['Stable systems', 'Maintainable code', 'Dependable output', 'Quality focus'] },
  { title: 'CLARITY', description: 'Good engineering starts with clear thinking and communication.', points: ['Clear thinking', 'Good communication', 'Simple solutions', 'Understandable code'] },
  { title: 'OWNERSHIP', description: 'We take responsibility for the work we build.', points: ['Full ownership', 'Accountability', 'End-to-end responsibility', 'No handoff chaos'] },
];

export default function About() {
  return (
    <div className="bg-transparent text-white min-h-screen overflow-x-hidden">
      <Hero
        title={
          <>
            We Build Digital Systems<br />
            for Ambitious Businesses.<AccentText>.</AccentText>
          </>
        }
        subtitle="AST builds modern websites, web applications, AI systems, automation workflows, and custom business software designed around real business needs."
        align="center"
      />

      {/* CAPABILITIES */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 sm:mb-12 text-center reveal">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-orange-400 backdrop-blur-[16px]">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse" />
              Core Capabilities
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight font-heading text-gradient-shimmer">
              What We Build
            </h2>
          </div>
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2">
            {capabilities.map((cap, index) => {
              const Icon = cap.icon;
              return (
                <article
                  key={cap.title}
                  className="card-3d-glass group reveal"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <div className="card-inner">
                    <div className="mb-6 flex items-center justify-between">
                      <div className="group-hover:scale-110 transition-transform duration-500 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.08] text-orange-500">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-[10px] font-mono text-orange-400 uppercase tracking-[0.2em]">{cap.title}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 text-gradient-shimmer">{cap.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed mb-4">{cap.description}</p>
                    <ul className="space-y-2">
                      {cap.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-white/60">
                          <span className="w-1 h-1 rounded-full bg-orange-500" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 sm:mb-12 text-center reveal">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-orange-400 backdrop-blur-[16px]">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse" />
              Our Process
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight font-heading text-gradient-shimmer">
              How We Work
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {howWeWorkSteps.map((step, index) => (
              <article
                key={step.number}
                className="card-3d-glass group reveal w-full sm:w-[calc(50%_-_0.75rem)] lg:w-[calc(33.333%_-_1rem)]"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="card-inner">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black tracking-tighter text-white">{step.number}</span>
                    <ArrowRight className="h-4 w-4 text-orange-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  <h3 className="text-sm font-bold mb-2 text-white uppercase tracking-wider text-gradient-shimmer">{step.title}</h3>
                  <p className="text-xs text-white/60 leading-relaxed mb-4">{step.description}</p>
                  <div className="pt-4 border-t border-white/10">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-orange-400 block mb-2">What you get</span>
                    <p className="text-xs text-white/60 leading-relaxed">{step.deliverables}</p>
                  </div>
                  <div className="mt-4 space-y-1">
                    {step.points.map((point, i) => (
                      <div key={i} className="flex items-center gap-2 text-[10px] text-white/60">
                        <span className="w-1 h-1 rounded-full bg-orange-500" />
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY AST */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 sm:mb-12 text-center reveal">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-orange-400 backdrop-blur-[16px]">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse" />
              Why AST
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight font-heading text-gradient-shimmer">
              Why AST
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto mt-4">The principles that guide everything we do at AST.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {whyAst.map((value, index) => (
              <article
                key={value.title}
                className="card-3d-glass group reveal w-full sm:w-[calc(50%_-_0.75rem)] lg:w-[calc(33.333%_-_1rem)]"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="card-inner">
                  <h3 className="text-lg font-bold mb-3 text-white text-gradient-shimmer">{value.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed mb-4">{value.description}</p>
                  <div className="space-y-2">
                    {value.points.map((point, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-white/60">
                        <span className="w-1 h-1 rounded-full bg-orange-500" />
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 sm:mb-12 text-center reveal">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-orange-400 backdrop-blur-[16px]">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse" />
              Our Values
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight font-heading text-gradient-shimmer">
              Our Values
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto mt-4">The principles that guide everything we do at AST.</p>
          </div>
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2">
            {values.map((value, index) => (
              <article
                key={value.title}
                className="card-3d-glass group reveal"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="card-inner">
                  <h3 className="text-lg font-bold mb-3 text-white text-gradient-shimmer">{value.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed mb-4">{value.description}</p>
                  <div className="space-y-2">
                    {value.points.map((point, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-white/60">
                        <span className="w-1 h-1 rounded-full bg-orange-500" />
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative px-4 py-12 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-orange-500/30 glassmorphic-luxury p-6 sm:p-10 lg:p-12 text-center shadow-[0_0_80px_rgba(255,85,0,0.06)] reveal">
          <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10">
            <span className="inline-block text-[10px] font-mono uppercase tracking-[0.3em] text-orange-400 mb-6">// THE TEAM</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[0.92] mb-8 text-gradient-shimmer">
              WANT TO WORK WITH US?
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed">
              We're a small team that ships real systems fast.
            </p>
            <Button to="/booking" variant="primary" size="lg" showArrow className="mt-10">
              Book a Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}