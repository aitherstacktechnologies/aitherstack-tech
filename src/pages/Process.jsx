import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, Hammer, Rocket, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const phases = [
  {
    num: '01',
    title: 'Discovery & Planning',
    icon: Search,
    description: 'We analyze your requirements, technical landscape, and business objectives to create a comprehensive project roadmap.',
    activities: [
      'Requirements Analysis',
      'Technical Architecture Design',
      'Timeline & Milestone Planning',
      'Resource Allocation',
    ],
    duration: '1-2 Weeks',
  },
  {
    num: '02',
    title: 'Design & Prototyping',
    icon: Hammer,
    description: 'We create detailed designs and functional prototypes to ensure alignment before full development begins.',
    activities: [
      'UI/UX Design',
      'Interactive Prototypes',
      'Design Review Cycles',
      'Technical Specifications',
    ],
    duration: '1-3 Weeks',
  },
  {
    num: '03',
    title: 'Development & Testing',
    icon: Rocket,
    description: 'Iterative development with continuous integration, automated testing, and transparent progress updates.',
    activities: [
      'Agile Development',
      'Unit & Integration Testing',
      'Performance Optimization',
      'Weekly Progress Updates',
    ],
    duration: '4-12 Weeks',
  },
  {
    num: '04',
    title: 'Deployment & Scale',
    icon: TrendingUp,
    description: 'Careful deployment with monitoring, documentation, and ongoing support to ensure long-term success.',
    activities: [
      'Production Deployment',
      'Performance Monitoring',
      'Documentation & Training',
      'Ongoing Support',
    ],
    duration: '1-2 Weeks + Ongoing',
  },
];

export default function Process() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-content',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      );

      gsap.fromTo('.phase-card',
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.5, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: '.phases-grid', start: 'top 80%' }
        }
      );

      gsap.fromTo('.cta-section',
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, ease: 'power3.out',
          scrollTrigger: { trigger: '.cta-section', start: 'top 85%' }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="pt-16">
      <section className="relative py-24 px-6 sm:px-8 lg:px-12 border-b border-ast-stone">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="hero-content max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-ast-accent mb-4 block">
              // EXECUTION PROCESS
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase mb-6">
              How We Operate
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              A structured, transparent approach to delivering high-quality digital solutions. Every project follows our proven four-phase methodology.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="phases-grid relative">
            <div className="hidden lg:block absolute left-[calc(12.5%+1px)] top-0 bottom-0 w-px bg-ast-stone" />
            <div className="hidden lg:block absolute left-[calc(37.5%+1px)] top-0 bottom-0 w-px bg-ast-stone" />
            <div className="hidden lg:block absolute left-[calc(62.5%+1px)] top-0 bottom-0 w-px bg-ast-stone" />
            <div className="hidden lg:block absolute left-[calc(87.5%+1px)] top-0 bottom-0 w-px bg-ast-stone" />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {phases.map((phase, i) => (
                <div key={phase.num} className="phase-card relative group">
                  <div className="flex items-center gap-4 mb-6 lg:flex-col lg:items-start">
                    <div className="w-12 h-12 rounded-lg border border-ast-stone bg-ast-surface flex items-center justify-center flex-shrink-0 group-hover:border-ast-accent group-hover:bg-ast-accent/10 transition-all duration-300">
                      <phase.icon className="w-6 h-6 text-ast-accent" />
                    </div>
                    <div className="lg:mt-4">
                      <span className="text-xs font-mono text-ast-accent">
                        PHASE {phase.num}
                      </span>
                      <h3 className="text-xl font-bold text-white mt-1 group-hover:text-ast-accent transition-colors duration-300">
                        {phase.title}
                      </h3>
                    </div>
                  </div>

                  <div className="border border-ast-stone bg-ast-surface rounded-lg p-6 group-hover:border-ast-accent transition-all duration-500">
                    <p className="text-sm text-gray-400 leading-relaxed mb-4">
                      {phase.description}
                    </p>

                    <ul className="space-y-2 mb-4">
                      {phase.activities.map((activity) => (
                        <li key={activity} className="flex items-center gap-2 text-sm text-gray-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-ast-accent flex-shrink-0" />
                          {activity}
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4 border-t border-ast-stone">
                      <span className="text-xs font-mono text-gray-500">
                        Duration: {phase.duration}
                      </span>
                    </div>
                  </div>

                  {i < phases.length - 1 && (
                    <div className="hidden lg:flex absolute -right-4 top-6 z-10">
                      <ArrowRight className="w-8 h-8 text-ast-stone" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section py-24 px-6 sm:px-8 lg:px-12 border-t border-ast-stone">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-ast-accent mb-4 block">
            // START YOUR PROJECT
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight uppercase mb-6">
            Ready to Begin?
          </h2>
          <p className="text-lg text-gray-400 mb-10">
            Let's discuss your project and create a custom roadmap for success.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 bg-ast-accent text-white px-8 py-4 rounded-lg font-bold text-base transition-all duration-300 hover:bg-ast-accent-hover hover:-translate-y-1"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-lg font-semibold text-base border border-ast-stone transition-all duration-300 hover:border-gray-500 hover:bg-ast-surface hover:-translate-y-1"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
