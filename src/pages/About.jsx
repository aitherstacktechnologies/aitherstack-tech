import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Cpu, Bot, Workflow, Layers } from 'lucide-react';
import Button from '../components/Button';

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
    <div className="bg-transparent text-ast-ivory min-h-screen overflow-x-hidden">
      <div className="relative pt-16 pb-12 px-4 sm:px-6 lg:px-8 xl:px-12 border-b border-ast-border overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <span className="absolute -bottom-20 -right-10 text-[20vw] font-black tracking-tighter text-ast-ivory opacity-[0.04] select-none">
            AST
          </span>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight uppercase mb-4 leading-[1.1]"
          >
            WE BUILD DIGITAL SYSTEMS
            FOR AMBITIOUS BUSINESSES.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-ast-muted max-w-2xl leading-relaxed mt-6"
          >
            AST builds modern websites, web applications, AI systems, automation workflows, and custom business software designed around real business needs.
          </motion.p>
        </div>
      </div>

      {/* CAPABILITIES */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, index) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl border border-ast-border bg-ast-surface/50 p-6 transition-all duration-500 hover:border-ast-warm-orange/40 hover:shadow-[0_32px_64px_rgba(243,107,63,0.4)]"
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-ast-warm-orange/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative z-10">
                    <div className="mb-6 flex items-center justify-between">
                      <div className="group-hover:scale-110 transition-transform duration-500 flex h-12 w-12 items-center justify-center rounded-xl border border-ast-border bg-ast-surface/80 text-ast-peach">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-[10px] font-mono text-ast-peach uppercase tracking-[0.2em]">{cap.title}</span>
                    </div>
                    <h3 className="text-xl font-bold text-ast-ivory mb-3">{cap.title}</h3>
                    <p className="text-sm text-ast-muted leading-relaxed mb-4">{cap.description}</p>
                    <ul className="space-y-2">
                      {cap.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-ast-muted">
                          <span className="w-1 h-1 rounded-full bg-ast-peach" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BUILT AROUND THE BUSINESS */}
      <section className="py-12 sm:py-14 px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight uppercase mb-4">
              BUILT AROUND THE BUSINESS
            </h2>
            <p className="text-ast-muted leading-relaxed mb-6 max-w-3xl">
              Every business has different users, workflows and problems. We don't start with a fixed template — we start by understanding what needs to be built and why.
            </p>
            <div className="flex flex-wrap gap-2">
              {['WEB ENGINEERING', 'AI & AUTOMATION', 'CLOUD & API'].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-transparent border border-ast-border text-sm text-ast-ivory"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-ast-peach" />
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight uppercase mb-4">
              HOW WE WORK
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {howWeWorkSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-ast-border bg-ast-surface/50 p-6 transition-all duration-500 hover:border-ast-warm-orange/40 hover:shadow-[0_32px_64px_rgba(243,107,63,0.4)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-ast-warm-orange/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black tracking-tighter text-ast-ivory">{step.number}</span>
                    <ArrowRight className="h-4 w-4 text-ast-peach transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  <h3 className="text-sm font-bold mb-2 text-ast-ivory uppercase tracking-wider">{step.title}</h3>
                  <p className="text-xs text-ast-muted leading-relaxed mb-4">{step.description}</p>
                  <div className="pt-4 border-t border-ast-border">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-ast-peach block mb-2">What you get</span>
                    <p className="text-xs text-ast-muted leading-relaxed">{step.deliverables}</p>
                  </div>
                  <div className="mt-4 space-y-1">
                    {step.points.map((point, i) => (
                      <div key={i} className="flex items-center gap-2 text-[10px] text-ast-muted">
                        <span className="w-1 h-1 rounded-full bg-ast-peach" />
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY AST */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight uppercase mb-4">
              WHY AST
            </h2>
            <p className="text-ast-muted max-w-2xl mx-auto">
              The principles that guide everything we do at AST.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyAst.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-ast-border bg-ast-surface/50 p-6 transition-all duration-500 hover:border-ast-accent/40 hover:-translate-y-1"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-ast-warm-orange/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative z-10">
                  <h3 className="text-lg font-bold mb-3 text-ast-ivory">{value.title}</h3>
                  <p className="text-sm text-ast-muted leading-relaxed mb-4">{value.description}</p>
                  <div className="space-y-2">
                    {value.points.map((point, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-ast-muted">
                        <span className="w-1 h-1 rounded-full bg-ast-peach" />
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight uppercase mb-4">
              OUR VALUES
            </h2>
            <p className="text-ast-muted max-w-2xl mx-auto">
              The principles that guide everything we do at AST.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-ast-border bg-ast-surface/50 p-6 transition-all duration-500 hover:border-ast-accent/40 hover:-translate-y-1"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-ast-warm-orange/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative z-10">
                  <h3 className="text-lg font-bold mb-3 text-ast-ivory">{value.title}</h3>
                  <p className="text-sm text-ast-muted leading-relaxed mb-4">{value.description}</p>
                  <div className="space-y-2">
                    {value.points.map((point, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-ast-muted">
                        <span className="w-1 h-1 rounded-full bg-ast-peach" />
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          className="relative overflow-hidden rounded-3xl border border-ast-border bg-gradient-to-b from-ast-surface/50 to-ast-bg/10 p-6 sm:p-10 lg:p-12 text-center shadow-[0_0_80px_rgba(255,100,31,0.06)] will-change-transform"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-ast-warm-orange/10 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase tracking-tight text-ast-ivory font-display leading-[0.92] mb-8">
              HAVE SOMETHING WORTH BUILDING?
            </h2>
            <p className="text-lg text-ast-muted max-w-2xl mx-auto mb-12 leading-relaxed">
              Tell us what you're trying to solve. We'll explore the technology needed to turn it into a working product.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Button to="/contact" variant="primary" size="lg" showArrow className="min-w-[220px] w-full sm:w-auto">
                START A PROJECT
              </Button>
              <Button to="/team" variant="ghost" size="lg" showArrow arrowIcon={ArrowUpRight} className="min-w-[220px] w-full sm:w-auto">
                MEET THE TEAM
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}