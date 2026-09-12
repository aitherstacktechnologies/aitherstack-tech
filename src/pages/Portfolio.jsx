import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  { 
    title: 'Vanguard Luxe', 
    category: 'Luxury E-Commerce & Web Apps', 
    tech: ['React', 'Vite', 'Tailwind', 'Supabase', 'Stripe'], 
    description: 'A high-end digital storefront for luxury goods with seamless checkout and immersive product storytelling.', 
    image: '/projects logo/Gemini_Generated_Image_5ouw6l5ouw6l5ouw.jpg' 
  },
  { 
    title: 'Kinetix OS', 
    category: 'Luxury E-Commerce & Web Apps', 
    tech: ['React', 'TypeScript', 'Supabase Auth', 'Stripe'], 
    description: 'Enterprise-grade operating system for e-commerce management and real-time inventory tracking.', 
    image: '/projects logo/Gemini_Generated_Image_z45rqiz45rqiz45r.jpg' 
  },
  { 
    title: 'StrataFlow', 
    category: 'High-Converting Landing Pages', 
    tech: ['React', 'Tailwind', 'Framer Motion', 'Supabase'], 
    description: 'Conversion-optimized landing system designed for high-ticket lead generation and rapid scaling.', 
    image: '/projects logo/Gemini_Generated_Image_p2mrdjp2mrdjp2mr.jpg' 
  },
  { 
    title: 'PulseApex', 
    category: 'High-Converting Landing Pages', 
    tech: ['React', 'Vite', 'Tailwind', 'Custom Player'], 
    description: 'Ultra-fast landing page for digital products featuring a custom-engineered media player.', 
    image: '/projects logo/Gemini_Generated_Image_nxyfevnxyfevnxyf.jpg' 
  },
  { 
    title: 'Synthetix Voice', 
    category: 'AI Voice Assistant & Chatbots', 
    tech: ['React', 'Retell AI', 'Cal.com API', 'Supabase'], 
    description: 'Autonomous AI voice agent that handles lead qualification and booking without human intervention.', 
    image: '/projects logo/Gemini_Generated_Image_11tm8411tm8411tm.jpg' 
  },
  { 
    title: 'CogniCores AI', 
    category: 'AI Voice Assistant & Chatbots', 
    tech: ['React', 'DeepSeek LLM', 'Vector DB', 'Tailwind'], 
    description: 'Knowledge-driven AI system capable of complex reasoning and real-time data retrieval.', 
    image: 'projects logo/Gemini_Generated_Image_vo7wrlvo7wrlvo7w.jpg' 
  },
  { 
    title: 'Aetherium Design System',
    category: 'UI/UX Design & Brand Systems',
    tech: ['Figma 5.0', 'Design Tokens', 'Tailwind CSS', 'Auto Layout'],
    description: 'Production-ready Figma UI component library with dark/light themes and developer code-mapping guidelines.',
    image: '/projects logo/Gemini_Generated_Image_bkkrh0bkkrh0bkkr.jpg'
  },
  { 
    title: 'ApexPay UI',
    category: 'UI/UX Design & Brand Systems',
    tech: ['Figma', 'SVG Vector Engine', 'Micro-Interactions', 'Data Vis'],
    description: 'Dark glassmorphic fintech dashboard interface featuring interactive data analytics and custom vector icons.',
    image: '/projects logo/Gemini_Generated_Image_abms9zabms9zabms.jpg' 
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#08080A] px-6 pb-20 pt-20 text-white sm:px-8 lg:px-12">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto mb-32 relative">
        <div className="mobile-motion-lite absolute -top-24 -left-24 w-96 h-96 bg-ast-accent/10 rounded-full blur-[120px] pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 transform-gpu will-change-transform"
        >
          <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-ast-accent mb-6">
            <span className="w-8 h-px bg-ast-accent" />
            Proven Deployments
          </span>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
            Engineering <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-white to-white/40">
              Digital Alpha
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl leading-relaxed">
            We don't just build websites. We engineer high-performance digital assets 
            that dominate markets and scale effortlessly.
          </p>
        </motion.div>
      </section>

      {/* PROJECTS GRID */}
      <section className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative mx-auto w-full max-w-lg transform-gpu will-change-transform"
            >
              {/* Expandable Card */}
              <div className="relative overflow-hidden rounded-3xl bg-[#0E0E12] border border-white/10 transition-all duration-300 ease-out group-hover:border-ast-accent/50 shadow-2xl group-hover:shadow-ast-accent/10">
                
                {/* Logo Section - Clean & Focused */}
                <div className="relative aspect-16/10 flex items-center justify-center p-6 sm:p-12 bg-transparent">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-contain transition-all duration-300 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 group-hover:scale-110"
                  />
                </div>

                {/* Expandable Content Section - Faster & Smoother */}
                <div className="max-h-0 opacity-0 group-hover:max-h-175 group-hover:opacity-100 transition-all duration-300 ease-out overflow-hidden">
                  <div className="p-8 pt-0 space-y-8 text-left">
                    {/* Project Title & Category */}
                    <div className="pt-6 border-t border-white/5">
                      <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-ast-accent/70">{project.category}</span>
                    </div>

                    {/* Purpose Section */}
                    <div className="relative pl-4 border-l-2 border-ast-accent/30">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-ast-accent block mb-2">Purpose & Impact</span>
                      <p className="text-gray-300 text-base leading-relaxed line-clamp-6">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Section */}
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-ast-accent block mb-3">Engineering Stack</span>
                      <div className="flex flex-wrap gap-3">
                        {project.tech.map(t => (
                          <span key={t} className="text-[11px] font-mono text-gray-300 border border-white/10 px-3 py-1 rounded-full bg-white/5 hover:bg-ast-accent/10 hover:text-ast-accent transition-colors duration-200">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Section */}
                    <div className="pt-4 pb-4">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-ast-accent block mb-4">Deployment Link</span>
                      <a 
                        href="#" 
                        className="inline-flex items-center justify-center gap-2 bg-[#FF5500] text-white border border-[#FF5500] px-8 py-3 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg active:scale-95 hover:bg-white hover:text-[#FF5500] hover:border-white"
                      >
                        Visit Project <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="relative px-6 py-24 text-center sm:py-32 mt-40">
        <div className="mx-auto max-w-5xl">
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
              <span className="inline-block text-[10px] font-mono uppercase tracking-[0.3em] text-[#FF5500] mb-6">// PROVEN RESULTS</span>
              <h2 className="text-4xl font-black uppercase tracking-tight text-white sm:text-6xl leading-[0.95] mb-8">
                WANT TO BE OUR <br />
                <span className="text-[#FF5500]">NEXT CASE STUDY?</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
                Let's build a high-converting web platform or automated AI system worth showing off.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link 
                  to="/booking" 
                  className="inline-flex items-center gap-3 rounded-full bg-[#FF5500] text-white border border-[#FF5500] px-8 py-4 text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-white hover:text-[#FF5500] hover:border-white hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] hover:-translate-y-0.5 active:scale-95"
                >
                  Book a Strategy Call <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}