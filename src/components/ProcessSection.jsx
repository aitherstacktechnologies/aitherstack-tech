import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    step: '01',
    phase: 'Discovery & Architecture',
    objective: 'System mapping, tech stack selection, and scoping deliverable milestones.',
    details:
      'We analyze your target workflow, user paths, and technical requirements to define a clean architecture blueprint prior to writing production code.',
  },
  {
    step: '02',
    phase: 'Bespoke Engineering',
    objective: 'Full-stack development utilizing React, Vite, TypeScript, and custom APIs.',
    details:
      'Building fast, accessible, and responsive user interfaces paired with robust back-end integrations, Supabase databases, and third-party tools.',
  },
  {
    step: '03',
    phase: 'AI & Automation Sync',
    objective: 'Deploying voice agents, CRM workflows, and lead qualification engines.',
    details:
      'Integrating automated agent pipelines (Vapi, custom LLMs) to handle client communication, scheduling via Cal.com, and data collection automatically.',
  },
  {
    step: '04',
    phase: 'Security, Testing & Launch',
    objective: 'reCAPTCHA defense, performance audits, and live deployment.',
    details:
      'Rigorous cross-browser testing, security layer verification, performance optimizations, and final launch to production environments.',
  },
];

export default function ProcessSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-sunset-bg text-sunset-text py-24 px-6 sm:px-8 lg:px-12 border-b border-sunset-border overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <span className="absolute top-1/2 left-0 -translate-y-1/2 pointer-events-none select-none text-watermark z-0 opacity-[0.04]">
          METHOD
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16 pb-6 border-b border-sunset-border">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sunset-pop mb-3">
            <span className="w-2 h-2 rounded-full bg-sunset-pop" />
            Execution Methodology
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight uppercase">
            From Blueprint To <br className="hidden sm:inline" />
            Production Engine.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((item, index) => (
            <div
              key={item.step}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative bg-sunset-surface border border-sunset-border p-8 rounded-lg flex flex-col justify-between transition-all duration-300 hover:border-sunset-pop hover:shadow-lg hover:shadow-sunset-pop/10"
            >
              <div>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-sunset-border/60">
                  <span className="font-mono text-2xl font-bold text-sunset-pop/50 group-hover:text-sunset-pop transition-colors">
                    {item.step}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-sunset-pop opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <h3 className="text-xl font-bold tracking-tight text-sunset-text mb-3">
                  {item.phase}
                </h3>
                
                <p className="text-xs font-mono font-semibold text-sunset-muted mb-4 leading-relaxed">
                  {item.objective}
                </p>

                <p className="text-sm text-sunset-muted leading-relaxed">
                  {item.details}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-sunset-border/40 text-[11px] font-mono text-sunset-muted uppercase tracking-wider">
                Phase {item.step} / 04
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
