import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Code2,
  Gauge,
  Palette,
  ShieldCheck,
  Sparkles,
  Wand2,
  Workflow,
} from 'lucide-react';
import heroImage from '../assets/hero.png';

const serviceCards = [
  {
    icon: Wand2,
    title: 'Bespoke Experience Design',
    description: 'Custom React interfaces and premium motion systems built for high-trust conversion.',
    link: '/services#strategy',
  },
  {
    icon: Bot,
    title: 'AI Voice & Chat Agents',
    description: '24/7 lead capture, qualification, and support flows tailored to your funnel.',
    link: '/services#voice-chat',
  },
  {
    icon: Workflow,
    title: 'Automation Architecture',
    description: 'Operational systems that eliminate repetitive tasks and connect your tools seamlessly.',
    link: '/services#automation',
  },
  {
    icon: Gauge,
    title: 'Performance & Growth',
    description: 'Sub-second experiences, conversion refinement, and technical optimization under one roof.',
    link: '/services#speed-tech',
  },
];

const whyChooseUs = [
  {
    number: '01',
    title: 'Bespoke Craftsmanship',
    description: 'No template-first shortcuts. Every screen, motion cue, and conversion layer is custom built in React and Framer Motion.',
    icon: Palette,
  },
  {
    number: '02',
    title: 'Enterprise AI Architecture',
    description: 'Vapi, Supabase, LLM orchestration, and automation that connect with your business logic instead of sitting on top.',
    icon: Bot,
  },
  {
    number: '03',
    title: 'Sub-Second Speed & Conversion',
    description: 'We optimize for every meaningful interaction so your site feels premium, loads fast, and converts harder.',
    icon: Gauge,
  },
  {
    number: '04',
    title: 'End-to-End Ownership',
    description: 'Design, engineering, integrations, QA, and launch support all managed by one expert team without handoff chaos.',
    icon: ShieldCheck,
  },
];

const featuredProjects = [
  {
    id: '01',
    title: 'Nexus Commerce',
    category: 'Luxury eCommerce system',
    description: 'A conversion-first storefront engineered for premium products and high-intent buyers.',
    tech: ['React', 'Supabase', 'AI Voice'],
    image: heroImage,
  },
  {
    id: '02',
    title: 'Aether Growth OS',
    category: 'Bespoke lead generation platform',
    description: 'An AI-powered conversion engine combining UX precision, CRM automation, and lifecycle customer journeys.',
    tech: ['React', 'Vapi', 'LLM'],
    image: heroImage,
  },
];

const marqueeItems = [
  'Luxury E-Commerce Stores',
  'High-Converting Landing Pages',
  'Enterprise AI Agents',
  'Bespoke Web Architecture',
  'Ultra-Fast Performance',
];

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#08080A] text-white">
      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,85,0,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,85,0,0.1),transparent_30%)]" />

        <section className="relative isolate overflow-hidden px-4 pb-10 pt-20 sm:px-6 lg:px-8 lg:pt-28 xl:px-12">
          <div className="mobile-motion-lite pointer-events-none absolute left-1/2 top-1/2 -z-10 h-87.5 w-150 -translate-x-1/2 -translate-y-1/2 transform-gpu rounded-full will-change-transform sm:h-112.5 sm:w-200"
            style={{
              background: 'radial-gradient(circle, rgba(255, 85, 0, 0.28) 0%, rgba(120, 40, 200, 0.15) 45%, rgba(8, 8, 10, 0) 70%)',
              filter: 'blur(80px)'
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="mx-auto flex max-w-4xl transform-gpu flex-col items-center justify-center text-center will-change-transform"
          >
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
              <span className="block text-[#FF5500]">WE BUILD</span>
              <span className="block text-white">DIGITAL SYSTEMS</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-300 sm:text-lg">
              We transform ordinary web presences into high-converting, ultra-fast digital platforms. From bespoke luxury e-commerce stores to custom AI workflows, we engineer scalable systems that command authority and drive revenue.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/booking"
                className="group inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[#FF5500] text-white border border-[#FF5500] px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-white hover:text-[#FF5500] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] hover:-translate-y-0.5"
              >
                <span>Book a Call</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-white/5 text-white border border-white/10 px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:bg-white/10 hover:border-[#FF5500]/50 hover:text-[#FF5500]"
              >
                <span>See Services</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </section>

        <section className="relative pb-8">
          <div className="mx-auto max-w-[1700px] px-2">
            <div className="-rotate-2 overflow-hidden border-y border-orange-500/20 bg-[#0E0E12] py-4">
              <div className="marquee-track flex min-w-max animate-marquee transform-gpu items-center gap-6 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.36em] text-orange-400 sm:text-xs">
                {[...marqueeItems, ...marqueeItems].map((item, index) => (
                  <React.Fragment key={`${item}-${index}`}>
                    <span>{item}</span>
                    <span className="text-orange-400">✦</span>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-24 sm:px-6 lg:px-8 xl:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <p className="text-xs font-medium uppercase tracking-[0.32em] text-[#FF5500]">// Our Services</p>
              <h2 className="mt-5 text-4xl font-black uppercase tracking-[-0.05em] text-white sm:text-5xl">
                Signature solutions for <span className="text-[#FF5500]">ambitious brands</span>
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {serviceCards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="group relative transform-gpu overflow-hidden rounded-[28px] border border-white/10 bg-[#0D0D10]/80 p-6 transition-all duration-300 will-change-transform hover:-translate-y-1 hover:border-[#FF5500]/40 hover:shadow-[0_25px_60px_rgba(255,85,0,0.14)]"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,85,0,0.12),transparent_35%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="relative z-10">
                      <div className="mb-7 flex items-center justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#FF5500]/25 bg-[#FF5500]/8 text-[#FF5500]">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="text-[10px] font-medium uppercase tracking-[0.26em] text-white/35">0{index + 1}</span>
                      </div>

                      <h3 className="text-2xl font-semibold text-white">{card.title}</h3>
                      <p className="mt-4 text-sm leading-relaxed text-white/60">{card.description}</p>

                      <Link
                        to={card.link}
                        className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#FF5500] transition-transform duration-300 hover:translate-x-1"
                      >
                        <span>Learn more</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 lg:px-8 xl:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <p className="text-xs font-medium uppercase tracking-[0.32em] text-[#FF5500]">// Why Aither Stack</p>
              <h2 className="mt-5 text-4xl font-black uppercase tracking-[-0.05em] text-white sm:text-5xl">
                Built for Scale. <span className="text-[#FF5500]">Engineered for Luxury.</span>
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {whyChooseUs.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="group relative transform-gpu overflow-hidden rounded-[26px] border border-white/10 bg-[#0C0C10]/80 p-6 transition-all duration-300 will-change-transform hover:-translate-y-1 hover:border-[#FF5500]/35 hover:shadow-[0_25px_60px_rgba(255,85,0,0.12)]"
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#FF5500]">{item.number}</span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#FF5500]/25 bg-[#FF5500]/8 text-[#FF5500]">
                        <Icon className="h-4 w-4" />
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-white/60">{item.description}</p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.1 }} 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="relative transform-gpu overflow-hidden rounded-3xl border border-orange-500/30 bg-[#0B0B0E] p-8 text-center shadow-[0_0_50px_rgba(255,85,0,0.08)] will-change-transform sm:p-16"
          >
            {/* Top Ambient Radial Glow */}
            <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-[#FF5500]/10 via-transparent to-transparent pointer-events-none" />
            
            <div className="relative z-10">
              <span className="inline-block text-[10px] font-mono uppercase tracking-[0.3em] text-[#FF5500] mb-6">// READY TO BUILD</span>
              <h2 className="text-4xl font-black uppercase tracking-tight text-white sm:text-6xl leading-[0.95] mb-8">
                LET’S TURN YOUR NEXT OFFER <br />
                INTO A <span className="text-[#FF5500]">PREMIUM REVENUE ENGINE.</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
                Strategic design, custom development, and AI automation that make your business feel as premium as the value you sell.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link 
                  to="/booking" 
                  className="inline-flex items-center gap-3 rounded-full bg-[#FF5500] text-white border border-[#FF5500] px-8 py-4 text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-white hover:text-[#FF5500] hover:border-white hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] hover:-translate-y-0.5 active:scale-95"
                >
                  Book a Free Call <ArrowUpRight size={18} />
                </Link>
                <Link 
                  to="/portfolio" 
                  className="inline-flex items-center gap-3 rounded-full bg-white/5 text-white border border-white/10 px-8 py-4 text-sm font-semibold transition-all duration-300 hover:bg-white/10 hover:border-[#FF5500]/50 hover:text-[#FF5500] active:scale-95"
                >
                  View Portfolio <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
