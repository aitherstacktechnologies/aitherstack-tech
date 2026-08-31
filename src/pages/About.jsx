import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Globe, Zap, Shield, Users } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { number: '50+', label: 'Projects Delivered' },
  { number: '30+', label: 'Happy Clients' },
  { number: '5+', label: 'Years Experience' },
  { number: '24/7', label: 'Support Available' },
];

const values = [
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We push boundaries with cutting-edge technology and creative solutions that set your business apart from the competition.',
  },
  {
    icon: Shield,
    title: 'Reliability',
    description: 'We deliver on our promises. Every project is built with quality, care, and attention to detail that you can depend on.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'We work with businesses worldwide, understanding diverse markets and delivering solutions that transcend borders.',
  },
  {
    icon: Users,
    title: 'Client Focus',
    description: 'Your success is our success. We build lasting partnerships through transparent communication and genuine care.',
  },
];

export default function About() {
  const sectionRef = useRef(null);
  const statsRef = useRef([]);
  const valuesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      statsRef.current.forEach((stat, index) => {
        if (!stat) return;
        gsap.fromTo(
          stat,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power3.out',
            delay: index * 0.1,
            scrollTrigger: {
              trigger: stat,
              start: 'top 85%',
            },
          }
        );
      });

      valuesRef.current.forEach((value, index) => {
        if (!value) return;
        gsap.fromTo(
          value,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power3.out',
            delay: index * 0.1,
            scrollTrigger: {
              trigger: value,
              start: 'top 85%',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-sunset-bg text-sunset-text min-h-screen">
      <div className="relative pt-32 pb-16 px-6 sm:px-8 lg:px-12 border-b border-sunset-border overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <span className="absolute -bottom-20 -right-10 text-[20vw] font-black tracking-tighter text-sunset-text opacity-[0.04] select-none">
            AST
          </span>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-sunset-border bg-sunset-surface/50 text-xs font-mono uppercase tracking-wider text-sunset-muted mb-6">
            <span className="w-2 h-2 rounded-full bg-sunset-pop" />
            About Us
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase mb-4">
            Who We Are
          </h1>
          <p className="text-lg text-sunset-muted max-w-3xl leading-relaxed">
            Aither Stack Technologies is a digital solutions agency that builds web platforms, AI systems, and business software for forward-thinking enterprises worldwide.
          </p>
        </div>
      </div>

      <section ref={sectionRef} className="py-24 px-6 sm:px-8 lg:px-12 border-b border-sunset-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                ref={(el) => (statsRef.current[index] = el)}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-black tracking-tight text-sunset-pop mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-sunset-muted font-mono uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 sm:px-8 lg:px-12 border-b border-sunset-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-black tracking-tight uppercase mb-6">
                Built for Business Growth
              </h2>
              <p className="text-sunset-muted leading-relaxed mb-6">
                We're not just developers — we're business partners focused on your success. Our team combines technical expertise with strategic thinking to deliver solutions that drive real results.
              </p>
              <p className="text-sunset-muted leading-relaxed mb-8">
                From startups to established enterprises, we work with ambitious businesses ready to transform their digital presence. Every project is custom-built to meet your specific needs, goals, and timeline.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sunset-surface border border-sunset-border text-sm">
                  <span className="w-2 h-2 rounded-full bg-sunset-pop" />
                  React & TypeScript
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sunset-surface border border-sunset-border text-sm">
                  <span className="w-2 h-2 rounded-full bg-sunset-pop" />
                  AI & Automation
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sunset-surface border border-sunset-border text-sm">
                  <span className="w-2 h-2 rounded-full bg-sunset-pop" />
                  Cloud & API
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                <span className="absolute -bottom-10 -right-10 text-[15vw] font-black tracking-tighter text-sunset-text opacity-[0.04] select-none">
                  AST
                </span>
              </div>
              <div className="bg-sunset-surface border border-sunset-border rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-6">Why Choose Us?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-sunset-pop mt-2 flex-shrink-0" />
                    <span className="text-sunset-muted">Dedicated team focused on your success</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-sunset-pop mt-2 flex-shrink-0" />
                    <span className="text-sunset-muted">Transparent communication throughout</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-sunset-pop mt-2 flex-shrink-0" />
                    <span className="text-sunset-muted">Clean, maintainable code quality</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-sunset-pop mt-2 flex-shrink-0" />
                    <span className="text-sunset-muted">Post-launch support and maintenance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-sunset-pop mt-2 flex-shrink-0" />
                    <span className="text-sunset-muted">Scalable solutions for future growth</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 sm:px-8 lg:px-12 border-b border-sunset-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight uppercase mb-4">
              Our Values
            </h2>
            <p className="text-sunset-muted max-w-2xl mx-auto">
              The principles that guide everything we do at Aither Stack Technologies.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                ref={(el) => (valuesRef.current[index] = el)}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-sunset-surface border border-sunset-border flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-sunset-pop" />
                </div>
                <h3 className="text-lg font-bold mb-3">{value.title}</h3>
                <p className="text-sm text-sunset-muted leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-sunset-surface">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-black tracking-tight uppercase mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-sunset-muted max-w-xl mx-auto mb-8">
            Let's discuss your project and create something amazing together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-sunset-pop text-sunset-bg px-8 py-4 rounded-full font-bold text-base transition-all hover:bg-sunset-pop/90"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-5 h-5" />
            </Link>
            <Link
              to="/team"
              className="inline-flex items-center gap-2 text-sunset-text px-8 py-4 rounded-full font-semibold text-base border border-sunset-border transition-all hover:border-sunset-muted"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
