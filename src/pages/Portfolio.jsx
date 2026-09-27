import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, Sparkles, Zap, Layers } from 'lucide-react';
import Button from '../components/Button';
import Hero, { AccentText } from '../components/Hero';

const projects = [
  {
    id: 1,
    title: 'Vanguard Luxe',
    category: 'Luxury E-Commerce & Web Apps',
    tech: ['React', 'Vite', 'Tailwind', 'Supabase', 'Stripe'],
    description: 'A high-end digital storefront for luxury goods with seamless checkout and immersive product storytelling.',
    problem: 'Client needed a premium e-commerce platform that could handle complex product variants while maintaining sub-second load times.',
    built: 'Custom React architecture with Supabase backend, Stripe checkout, and Framer Motion animations for premium feel.',
    result: '40% increase in conversion rate, 60% faster load times, featured in CSS Design Awards.',
    image: '/projects logo/Gemini_Generated_Image_5ouw6l5ouw6l5ouw.jpg',
    liveUrl: '#',
  },
  {
    id: 2,
    title: 'Kinetix OS',
    category: 'Luxury E-Commerce & Web Apps',
    tech: ['React', 'TypeScript', 'Supabase Auth', 'Stripe'],
    description: 'Enterprise-grade operating system for e-commerce management and real-time inventory tracking.',
    problem: 'Multi-vendor marketplace required real-time inventory sync across 500+ SKUs with role-based access control.',
    built: 'TypeScript React app with Supabase real-time subscriptions, row-level security, and custom dashboard.',
    result: 'Zero inventory discrepancies, 3x faster order processing, scales to 10k concurrent users.',
    image: '/projects logo/Gemini_Generated_Image_z45rqiz45rqiz45r.jpg',
    liveUrl: '#',
  },
  {
    id: 3,
    title: 'StrataFlow',
    category: 'High-Converting Landing Pages',
    tech: ['React', 'Tailwind', 'Framer Motion', 'Supabase'],
    description: 'Conversion-optimized landing system designed for high-ticket lead generation and rapid scaling.',
    problem: 'SaaS startup needed landing pages that could A/B test dynamically while maintaining 95+ Lighthouse scores.',
    built: 'Modular component system with Framer Motion, Supabase forms, and edge-deployed static generation.',
    result: '3.2x lead increase, 98 Lighthouse score, 50% reduction in CAC.',
    image: '/projects logo/Gemini_Generated_Image_p2mrdjp2mrdjp2mr.jpg',
    liveUrl: '#',
  },
  {
    id: 4,
    title: 'PulseApex',
    category: 'High-Converting Landing Pages',
    tech: ['React', 'Vite', 'Tailwind', 'Custom Player'],
    description: 'Ultra-fast landing page for digital products featuring a custom-engineered media player.',
    problem: 'Digital course creator needed video-heavy landing page without performance penalty.',
    built: 'Custom lazy-loading video player, IntersectionObserver animations, and optimized asset delivery.',
    result: 'Sub-800ms load with 4K video, 2.8x engagement increase, 45% completion rate.',
    image: '/projects logo/Gemini_Generated_Image_nxyfevnxyfevnxyf.jpg',
    liveUrl: '#',
  },
  {
    id: 5,
    title: 'Synthetix Voice',
    category: 'AI Voice Assistant & Chatbots',
    tech: ['React', 'Retell AI', 'Cal.com API', 'Supabase'],
    description: 'Autonomous AI voice agent that handles lead qualification and booking without human intervention.',
    problem: 'Agency needed 24/7 lead qualification without hiring night-shift staff.',
    built: 'Vapi voice agent with custom LLM prompts, Cal.com booking flow, Supabase lead logging.',
    result: '85% qualification accuracy, 200+ bookings/month automated, 90% cost reduction vs human SDRs.',
    image: '/projects logo/Gemini_Generated_Image_11tm8411tm8411tm.jpg',
    liveUrl: '#',
  },
  {
    id: 6,
    title: 'CogniCores AI',
    category: 'AI Voice Assistant & Chatbots',
    tech: ['React', 'DeepSeek LLM', 'Vector DB', 'Tailwind'],
    description: 'Knowledge-driven AI system capable of complex reasoning and real-time data retrieval.',
    problem: 'Enterprise client needed internal knowledge assistant with citation-backed responses.',
    built: 'RAG pipeline with vector embeddings, streaming responses, and source attribution UI.',
    result: '92% answer accuracy, 10x faster info retrieval, adopted by 500+ employees.',
    image: '/projects logo/Gemini_Generated_Image_vo7wrlvo7wrlvo7w.jpg',
    liveUrl: '#',
  },
  {
    id: 7,
    title: 'Aetherium Design System',
    category: 'UI/UX Design & Brand Systems',
    tech: ['Figma 5.0', 'Design Tokens', 'Tailwind CSS', 'Auto Layout'],
    description: 'Production-ready Figma UI component library with dark/light themes and developer code-mapping guidelines.',
    problem: 'Design team needed scalable system to hand off to 20+ developers across 5 products.',
    built: 'Figma component library with 200+ variants, design tokens, Storybook integration, and dev handoff docs.',
    result: '60% faster design-to-dev handoff, 100% component consistency, zero design debt.',
    image: '/projects logo/Gemini_Generated_Image_bkkrh0bkkrh0bkkr.jpg',
    liveUrl: '#',
  },
  {
    id: 8,
    title: 'ApexPay UI',
    category: 'UI/UX Design & Brand Systems',
    tech: ['Figma', 'SVG Vector Engine', 'Micro-Interactions', 'Data Vis'],
    description: 'Dark glassmorphic fintech dashboard interface featuring interactive data analytics and custom vector icons.',
    problem: 'Fintech startup needed premium dashboard that builds trust with complex financial data visualization.',
    built: 'Glassmorphic design system with custom SVG icons, Recharts integration, and micro-interaction specs.',
    result: 'Series A funding secured, 4.9/5 user trust score, featured in Figma Community.',
    image: '/projects logo/Gemini_Generated_Image_abms9zabms9zabms.jpg',
    liveUrl: '#',
  },
  {
    id: 9,
    title: 'AuraSEO',
    category: 'AI Voice Assistant & Chatbots',
    tech: ['React', 'Vite', 'Tailwind', 'Vapi AI', 'OpenAI', 'Supabase'],
    description: 'AI-powered SEO automation platform that generates, optimizes, and publishes SEO-optimized content at scale.',
    problem: 'Businesses needed automated SEO content creation that ranks without manual intervention.',
    built: 'AI-powered content pipeline with Vapi AI for voice-driven content strategy, OpenAI for generation, Supabase for data, deployed on Vercel.',
    result: 'Automated 500+ SEO articles/month, 3x organic traffic growth, 80% reduction in content costs.',
    image: '/projects logo/Gemini_Generated_Image_11tm8411tm8411tm.jpg',
    liveUrl: 'https://auraseo-eosin.vercel.app/',
  },
];

const categoryIcons = {
  'Luxury E-Commerce & Web Apps': Sparkles,
  'High-Converting Landing Pages': Zap,
  'AI Voice Assistant & Chatbots': Code,
  'UI/UX Design & Brand Systems': Layers,
};

export default function Portfolio() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <div className="min-h-screen overflow-x-hidden bg-transparent text-white">
      <Hero
        eyebrow="// PROVEN DEPLOYMENTS"
        title={
          <>
            Digital Work,<br />
            Built to Make <AccentText>an Impact.</AccentText>
          </>
        }
        subtitle="A selection of websites, applications, AI systems, and digital experiences engineered by AST."
        align="left"
      />

      {/* PROJECTS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 sm:gap-x-12 sm:gap-y-20">
          {projects.map((project, index) => {
            const CategoryIcon = categoryIcons[project.category] || Code;
            const isHovered = hoveredCard === project.id;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative mx-auto w-full max-w-lg transform-gpu will-change-transform"
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => { setHoveredCard(null); setHoveredImage(null); }}
              >
                {/* Card */}
                <div
                  className="card-3d-glass group overflow-hidden relative"
                  onMouseEnter={() => setHoveredCard(project.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Image Section */}
                  <div className="relative aspect-16/10 flex items-center justify-center overflow-hidden bg-transparent">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      width={677}
                      height={369}
                      loading={index >= 2 ? 'lazy' : 'eager'}
                      className={`w-full h-full object-cover transition-all duration-500 grayscale group-hover:grayscale-0 opacity-80 ${
                        isHovered ? 'opacity-100 blur-sm scale-105' : 'opacity-80 group-hover:opacity-100 group-hover:scale-103 group-hover:blur-0'
                      }`}
                      style={{ transformOrigin: 'center center' }}
                      whileHover={{ scale: 1.03 }}
                      onMouseEnter={() => setHoveredImage(project.id)}
                      onMouseLeave={() => setHoveredImage(null)}
                    />

                    {/* Category badge on image */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-sm border border-white/10 text-[10px] font-mono uppercase tracking-wider text-orange-500">
                        <CategoryIcon className="h-3 w-3" />
                        {project.category.split(' & ')[0]}
                      </span>
                    </div>

                    {/* Visit CTA Button on image hover */}
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.25 }}
                        className="absolute inset-0 flex items-center justify-center z-20"
                      >
                        <Button
                          as="a"
                          href={project.liveUrl}
                          external={project.liveUrl !== '#'}
                          variant="primary"
                          size="sm"
                          showArrow
                          arrowIcon={ExternalLink}
                          onClick={(e) => {
                            e.stopPropagation();
                            if (project.liveUrl && project.liveUrl !== '#') {
                              window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
                            }
                          }}
                        >
                          Visit Project
                        </Button>
                      </motion.div>
                    )}

                    {/* Overlay blur on image when hovered */}
                    {isHovered && (
                      <div className="absolute inset-0 bg-black/30 pointer-events-none" />
                    )}
                  </div>

                  {/* Expandable Content Section - reveals on hover */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: isHovered ? 'auto' : 0, opacity: isHovered ? 1 : 0 }}
                    transition={{
                      height: { duration: 0.35, ease: [0.33, 1, 0.68, 1] },
                      opacity: { duration: 0.2 }
                    }}
                    className="overflow-hidden flex-1"
                  >
                    <div className="p-6 pt-0 pb-8 space-y-6 text-left flex-1">
                      {/* Project Title & Category */}
                      <div className="pt-4 border-t border-white/10">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{project.title}</h3>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-orange-500/70">{project.category}</span>
                      </div>

                      {/* Description */}
                      <p className="text-white/70 text-base leading-relaxed">{project.description}</p>

                      {/* Problem → Built → Result */}
                      <div className="space-y-5">
                        <div className="relative pl-4 border-l-2 border-orange-500/30">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-orange-500 block mb-2">Problem</span>
                          <p className="text-white/70 text-base leading-relaxed">{project.problem}</p>
                        </div>
                        <div className="relative pl-4 border-l-2 border-orange-500/30">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-orange-500 block mb-2">Solution</span>
                          <p className="text-white/70 text-base leading-relaxed">{project.built}</p>
                        </div>
                        <div className="relative pl-4 border-l-2 border-orange-500/30">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-orange-500 block mb-2">Result</span>
                          <p className="text-white text-base leading-relaxed font-medium">{project.result}</p>
                        </div>
                      </div>

                      {/* Tech Stack Pill Tags */}
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-orange-500 block mb-3">Engineering Stack</span>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((t, i) => (
                            <span
                              key={t}
                              className="text-[11px] font-mono text-white/70 border border-white/10 px-3 py-1.5 rounded-full bg-white/[0.05] hover:bg-orange-500/10 hover:text-orange-500 hover:border-orange-500/30 transition-all duration-200 cursor-default"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="pt-4 border-t border-white/10 flex justify-center">
                        <Button
                          as="a"
                          href={project.liveUrl}
                          external={project.liveUrl !== '#'}
                          variant="primary"
                          size="sm"
                          showArrow
                          arrowIcon={ExternalLink}
                          onClick={(e) => {
                            e.stopPropagation();
                            if (project.liveUrl && project.liveUrl !== '#') {
                              window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
                            }
                          }}
                        >
                          Visit Project
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="relative px-6 py-12 sm:py-16 text-center sm:py-20 mt-24">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="relative transform-gpu overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-black/10 p-6 sm:p-10 text-center shadow-[0_0_80px_rgba(255,85,0,0.06)] will-change-transform"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-orange-500/10 via-transparent to-transparent pointer-events-none" />

            <div className="relative z-10">
              <span className="inline-block text-[10px] font-mono uppercase tracking-[0.3em] text-orange-500 mb-6">// PROVEN RESULTS</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[0.95] mb-8">
                WANT TO BE OUR <br />
                <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 bg-clip-text text-transparent">
                  NEXT CASE STUDY?
                </span>
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
                Let's build a high-converting web platform or automated AI system worth showing off.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button
                  to="/booking"
                  variant="primary"
                  size="lg"
                  showArrow
                >
                  Book a Strategy Call
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}