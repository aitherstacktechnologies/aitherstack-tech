import React, { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const badgeRef = useRef(null);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        badgeRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      )
        .fromTo(
          line1Ref.current,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.3'
        )
        .fromTo(
          line2Ref.current,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.6'
        )
        .fromTo(
          subtitleRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          '-=0.4'
        )
        .fromTo(
          ctaRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          '-=0.3'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[85vh] flex flex-col justify-center bg-sunset-bg text-sunset-text px-6 sm:px-8 lg:px-12 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] font-black tracking-tighter text-sunset-text opacity-[0.04] select-none">
          AST
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div ref={badgeRef} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sunset-border bg-sunset-surface/50 backdrop-blur-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-sunset-pop animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-wider text-sunset-muted">
            Digital Solutions Agency
          </span>
        </div>

        <div className="max-w-4xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1] uppercase mb-6">
            <span ref={line1Ref} className="block">
              We Build
            </span>
            <span ref={line2Ref} className="block text-sunset-text mt-2">
              Digital Systems.
            </span>
          </h1>

          <p
            ref={subtitleRef}
            className="text-lg sm:text-xl text-sunset-muted max-w-xl mb-10 leading-relaxed"
          >
            Aither Stack Technologies specializes in web development, AI automation, and custom business software. We help forward-thinking businesses scale through intelligent digital solutions.
          </p>

          <div ref={ctaRef} className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-2 bg-sunset-pop text-sunset-bg px-8 py-4 rounded-full font-bold text-base transition-all duration-300 hover:bg-sunset-pop/90 hover:shadow-xl hover:shadow-sunset-pop/20 focus-sunset"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>

            <button
              onClick={() => scrollToSection('services')}
              className="inline-flex items-center gap-2 text-sunset-text px-8 py-4 rounded-full font-semibold text-base border border-sunset-border transition-all duration-300 hover:border-sunset-muted hover:bg-sunset-surface focus-sunset"
            >
              Our Services
            </button>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-sunset-border/50">
          <div className="flex flex-wrap items-center gap-8 text-sm text-sunset-muted">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-sunset-pop" />
              Web Development
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-sunset-pop" />
              AI Systems & Automation
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-sunset-pop" />
              Business Software
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-sunset-pop" />
              Integrations
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
