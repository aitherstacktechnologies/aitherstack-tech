import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Globe, Zap, Shield, Users } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import Button from '../components/Button';

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
    <div className="bg-transparent text-ast-text min-h-screen">
      <div className="relative pt-32 pb-16 px-6 sm:px-8 lg:px-12 border-b border-ast-border overflow-hidden section-gradient-bg">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <span className="absolute -bottom-20 -right-10 text-[20vw] font-black tracking-tighter text-ast-text opacity-[0.04] select-none">
            AST
          </span>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-ast-border bg-ast-surface/50 text-xs font-mono uppercase tracking-wider text-ast-accent mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-ast-accent" />
            About Us
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase mb-4"
          >
            Who We Are
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-ast-muted max-w-3xl leading-relaxed"
          >
            Aither Stack Technologies is a digital solutions agency that builds web platforms, AI systems, and business software for forward-thinking enterprises worldwide.
          </motion.p>
        </div>
      </div>

      <section ref={sectionRef} className="py-24 px-6 sm:px-8 lg:px-12 border-b border-ast-border section-gradient-bg-alt">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                ref={(el) => (statsRef.current[index] = el)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <motion.div
                  className="text-4xl lg:text-5xl font-black tracking-tight mb-2 text-gradient-luxury"
                  whileHover={{ scale: 1.05 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm text-ast-muted font-mono uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 sm:px-8 lg:px-12 border-b border-ast-border section-gradient-bg">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-black tracking-tight uppercase mb-6">
                Built for Business Growth
              </h2>
              <p className="text-ast-muted leading-relaxed mb-6">
                We're not just developers — we're business partners focused on your success. Our team combines technical expertise with strategic thinking to deliver solutions that drive real results.
              </p>
              <p className="text-ast-muted leading-relaxed mb-8">
                From startups to established enterprises, we work with ambitious businesses ready to transform their digital presence. Every project is custom-built to meet your specific needs, goals, and timeline.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ast-surface border border-ast-border text-sm text-ast-text">
                  <span className="w-2 h-2 rounded-full bg-ast-accent" />
                  React & TypeScript
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ast-surface border border-ast-border text-sm text-ast-text">
                  <span className="w-2 h-2 rounded-full bg-ast-accent" />
                  AI & Automation
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ast-surface border border-ast-border text-sm text-ast-text">
                  <span className="w-2 h-2 rounded-full bg-ast-accent" />
                  Cloud & API
                </span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                <span className="absolute -bottom-10 -right-10 text-[15vw] font-black tracking-tighter text-ast-text opacity-[0.04] select-none">
                  AST
                </span>
              </div>
              <div className="glassmorphic-luxury rounded-2xl p-8 glow-luxury">
                <h3 className="text-xl font-bold mb-6 text-gradient-luxury">Why Choose Us?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-ast-accent mt-2 flex-shrink-0" />
                    <span className="text-ast-muted">Dedicated team focused on your success</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-ast-accent mt-2 flex-shrink-0" />
                    <span className="text-ast-muted">Transparent communication throughout</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-ast-accent mt-2 flex-shrink-0" />
                    <span className="text-ast-muted">Clean, maintainable code quality</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-ast-accent mt-2 flex-shrink-0" />
                    <span className="text-ast-muted">Post-launch support and maintenance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-ast-accent mt-2 flex-shrink-0" />
                    <span className="text-ast-muted">Scalable solutions for future growth</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 sm:px-8 lg:px-12 border-b border-ast-border section-gradient-bg-alt">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight uppercase mb-4">
              Our Values
            </h2>
            <p className="text-ast-muted max-w-2xl mx-auto">
              The principles that guide everything we do at Aither Stack Technologies.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                ref={(el) => (valuesRef.current[index] = el)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <motion.div
                  className="w-16 h-16 rounded-2xl glassmorphic-card border border-ast-border flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:border-ast-accent/40 group-hover:shadow-[0_0_30px_rgba(255,107,26,0.2)]"
                  whileHover={{ scale: 1.05, rotate: 3 }}
                >
                  <value.icon className="w-8 h-8 text-ast-accent" />
                </motion.div>
                <h3 className="text-lg font-bold mb-3 text-ast-text">{value.title}</h3>
                <p className="text-sm text-ast-muted leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 sm:px-8 lg:px-12 section-gradient-bg">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight uppercase mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-ast-muted max-w-xl mx-auto mb-8">
              Let's discuss your project and create something amazing together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                as="a"
                href="/contact"
                variant="primary"
                size="lg"
                showArrow
              >
                Start a Project
              </Button>
              <Button
                as="a"
                href="/team"
                variant="ghost"
                size="lg"
              >
                Meet the Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
