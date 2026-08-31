import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    number: '01',
    title: 'Business-First Thinking',
    description: 'We deep-dive into your operational workflow and core goals before writing a single line of code. Every feature and integration is strategically built to solve concrete business bottlenecks and directly improve efficiency.',
  },
  {
    number: '02',
    title: 'Premium Engineering Quality',
    description: 'Clean UI/UX design, cutting-edge technology stacks, and enterprise-grade architecture are embedded into everything we build. We prioritize fast load speeds, rock-solid security, and robust error handling at scale.',
  },
  {
    number: '03',
    title: 'AI-Powered Innovation',
    description: 'We help leverage autonomous AI agents, voice receptionists, dynamic routing engines, and smart automations. By delegating repetitive tasks to AI, your team focuses purely on high-value revenue activities.',
  },
  {
    number: '04',
    title: 'Fully Custom Architecture',
    description: 'No rigid templates or generic one-size-fits-all solutions. We engineer custom web applications, booking pipelines, and CRM workflows specifically customized to your unique brand identity and business processes.',
  },
  {
    number: '05',
    title: 'Seamless Execution',
    description: 'With clear communication channels, milestone-based progress updates, and structured development lifecycles, we keep your deployment on schedule. You stay fully informed at every stage from ideation to launch.',
  },
  {
    number: '06',
    title: 'Built for Long-Term Scale',
    description: 'We build digital infrastructure engineered for future growth. As your client base expands and operational needs evolve, your web software and AI systems scale effortlessly alongside your company.',
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            delay: index * 0.1,
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
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sunset-pop mb-3">
            <span className="w-2 h-2 rounded-full bg-sunset-pop" />
            Why Work With Us
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight uppercase">
            Built to Make Your <br />
            Business Better.
          </h2>
          <p className="text-base text-sunset-muted leading-relaxed mt-6 max-w-2xl">
            We don't just deliver digital solutions — we build reliable, high-quality systems designed around your business, your customers, and your long-term goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={reason.number}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group p-8 bg-sunset-surface border border-sunset-border rounded-lg hover:border-sunset-pop transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-sm font-bold text-sunset-pop">{reason.number}</span>
                <div className="w-8 h-[1px] bg-sunset-border group-hover:w-12 group-hover:bg-sunset-pop transition-all duration-300" />
              </div>
              <h3 className="text-lg font-bold tracking-tight text-sunset-text mb-3">
                {reason.title}
              </h3>
              <p className="text-sm text-sunset-muted leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
