import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Code2, Brain, BarChart3, Zap, Sparkles, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'High-performance web platforms built with modern frameworks. React, Next.js, and enterprise-grade architecture.',
    tags: ['React', 'Next.js', 'TypeScript'],
    color: 'from-blue-500/20 to-blue-600/20',
    borderColor: 'hover:border-blue-500/50',
    glowColor: 'hover:shadow-blue-500/20',
  },
  {
    icon: Brain,
    title: 'AI Systems',
    description: 'Bespoke AI agents and automation pipelines. Voice agents, chatbots, and intelligent workflow systems.',
    tags: ['AI Agents', 'NLP', 'Automation'],
    color: 'from-purple-500/20 to-purple-600/20',
    borderColor: 'hover:border-purple-500/50',
    glowColor: 'hover:shadow-purple-500/20',
  },
  {
    icon: BarChart3,
    title: 'Business Software',
    description: 'Custom dashboards, CRM systems, and enterprise tools. Streamlined operations for modern businesses.',
    tags: ['Dashboards', 'CRM', 'API'],
    color: 'from-green-500/20 to-green-600/20',
    borderColor: 'hover:border-green-500/50',
    glowColor: 'hover:shadow-green-500/20',
  },
  {
    icon: Zap,
    title: 'Integrations',
    description: 'Seamless connections between platforms. API development, third-party integrations, and data synchronization.',
    tags: ['API', 'Webhooks', 'Sync'],
    color: 'from-orange-500/20 to-orange-600/20',
    borderColor: 'hover:border-orange-500/50',
    glowColor: 'hover:shadow-orange-500/20',
  },
];

const processSteps = [
  { num: '01', title: 'Discovery', desc: 'We analyze your requirements and map out the optimal technical architecture.' },
  { num: '02', title: 'Build', desc: 'Iterative development with continuous feedback loops and transparent progress.' },
  { num: '03', title: 'Deploy', desc: 'Careful deployment with monitoring, testing, and performance optimization.' },
];

const featuredProjects = [
  {
    id: '01',
    title: 'Enterprise Digital Platform',
    category: 'WEB DEVELOPMENT',
    description: 'High-performance web architecture for international scalability.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '02',
    title: 'AI Lead Qualification Engine',
    category: 'AI SYSTEMS',
    description: 'Automated voice and chat system qualifying leads 24/7.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '03',
    title: 'Client Management Portal',
    category: 'BUSINESS SOFTWARE',
    description: 'Real-time project tracking with automated workflows.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
  },
];

const techStack = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 
  'PostgreSQL', 'Supabase', 'AWS', 'Vercel', 'Tailwind',
  'GSAP', 'OpenAI', 'Stripe', 'GraphQL', 'Docker'
];

export default function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.fromTo('.hero-badge', 
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }
      )
      .fromTo('.hero-title-line', 
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' },
        '-=0.3'
      )
      .fromTo('.hero-subtitle', 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
        '-=0.4'
      )
      .fromTo('.hero-cta', 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' },
        '-=0.2'
      );

      gsap.fromTo('.tech-item',
        { y: 20, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: 'power3.out',
          scrollTrigger: { trigger: '.tech-section', start: 'top 85%' }
        }
      );

      gsap.fromTo('.capability-card',
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: '.capabilities-section', start: 'top 75%' }
        }
      );

      gsap.fromTo('.process-step',
        { x: -40, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.5, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: '.process-section', start: 'top 80%' }
        }
      );

      gsap.fromTo('.project-card',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.5, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: '.projects-section', start: 'top 80%' }
        }
      );

      gsap.fromTo('.cta-section',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, ease: 'power3.out',
          scrollTrigger: { trigger: '.cta-section', start: 'top 85%' }
        }
      );

      gsap.fromTo('.floating-element',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 0.5, duration: 2, repeat: -1, yoyo: true, ease: 'power1.inOut', stagger: 0.5 }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="pt-16">
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="floating-element absolute top-1/4 left-1/4 w-64 h-64 bg-ast-accent/10 rounded-full blur-[100px]" />
          <div className="floating-element absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
          <div className="floating-element absolute top-1/2 right-1/3 w-48 h-48 bg-blue-500/10 rounded-full blur-[80px]" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-ast-bg via-transparent to-ast-bg" />
        
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-ast-accent/5 rounded-full blur-[150px] opacity-50" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 text-center">
          <div className="hero-badge inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-ast-stone/50 bg-ast-surface/50 backdrop-blur-sm mb-8">
            <Sparkles className="w-4 h-4 text-ast-accent" />
            <span className="text-xs font-mono uppercase tracking-wider text-gray-300">
              Premium Digital Solutions
            </span>
          </div>

          <h1 className="hero-title-line text-5xl sm:text-6xl lg:text-[5.5rem] xl:text-7xl font-black tracking-tight leading-[0.95] uppercase mb-8">
            <span className="block text-white">We Build</span>
            <span className="block relative">
              <span className="bg-gradient-to-r from-ast-accent via-orange-400 to-ast-accent bg-clip-text text-transparent">
                Digital Systems.
              </span>
              <span className="absolute -inset-1 bg-gradient-to-r from-ast-accent/20 via-transparent to-ast-accent/20 blur-xl opacity-50" />
            </span>
          </h1>

          <p className="hero-subtitle text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Aither Stack Technologies specializes in web development, AI automation, and custom business software. We help forward-thinking businesses scale through intelligent digital solutions.
          </p>

          <div className="hero-cta flex flex-wrap items-center justify-center gap-5">
            <Link
              to="/booking"
              className="group relative inline-flex items-center gap-3 bg-ast-accent text-white px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:bg-ast-accent-hover hover:shadow-[0_0_40px_rgba(255,77,0,0.4)] hover:-translate-y-1 overflow-hidden"
            >
              <span className="relative z-10">Start a Project</span>
              <ArrowUpRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Link>
            <Link
              to="/services"
              className="group inline-flex items-center gap-3 text-white px-8 py-4 rounded-xl font-semibold text-base border-2 border-ast-stone/50 transition-all duration-300 hover:border-white/30 hover:bg-white/5 hover:-translate-y-1"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <div className="h-px bg-gradient-to-r from-transparent via-ast-stone/30 to-transparent" />
        </div>
      </section>

      <section className="tech-section relative py-16 px-6 sm:px-8 lg:px-12 border-y border-ast-stone/30 bg-ast-surface/20 overflow-hidden">
        <div className="absolute inset-0 flex items-center">
          <div className="w-32 h-full bg-gradient-to-r from-ast-bg to-transparent z-10" />
          <div className="flex-1 overflow-hidden">
            <div className="flex gap-12 animate-marquee whitespace-nowrap">
              {[...techStack, ...techStack, ...techStack].map((tech, i) => (
                <span key={i} className="tech-item flex items-center gap-3 text-sm font-mono text-gray-500 hover:text-ast-accent transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-ast-accent/50" />
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="w-32 h-full bg-gradient-to-l from-ast-bg to-transparent z-10" />
        </div>
      </section>

      <section className="capabilities-section relative py-32 px-6 sm:px-8 lg:px-12">
        <div className="absolute inset-0 grid-bg-subtle opacity-30" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-ast-accent mb-4">
              <span className="w-8 h-px bg-ast-accent" />
              Our Capabilities
              <span className="w-8 h-px bg-ast-accent" />
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight uppercase text-white">
              What We <span className="text-ast-accent">Build</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className={`capability-card group relative border border-ast-stone/50 bg-ast-surface/80 p-8 rounded-2xl transition-all duration-500 hover:-translate-y-3 ${cap.borderColor} ${cap.glowColor} hover:shadow-2xl overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${cap.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-ast-surface to-ast-surface/50 border border-ast-stone/50 flex items-center justify-center mb-6 group-hover:border-ast-accent/50 transition-colors duration-300 group-hover:scale-110">
                    <cap.icon className="w-7 h-7 text-ast-accent" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-ast-accent transition-colors duration-300">
                    {cap.title}
                  </h3>
                  
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">
                    {cap.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {cap.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-mono px-3 py-1.5 rounded-full border border-ast-stone/50 text-gray-400 bg-ast-surface/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute -bottom-1 -right-1 w-24 h-24 bg-ast-accent/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section relative py-32 px-6 sm:px-8 lg:px-12 bg-ast-surface/30 border-y border-ast-stone/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-ast-accent mb-4">
              <span className="w-8 h-px bg-ast-accent" />
              How We Work
              <span className="w-8 h-px bg-ast-accent" />
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight uppercase text-white">
              Our <span className="text-ast-accent">Process</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, i) => (
              <div key={step.num} className="process-step group relative p-8 rounded-2xl border border-ast-stone/50 bg-ast-surface/80 transition-all duration-500 hover:border-ast-accent/30 hover:bg-ast-surface overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-ast-accent/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="text-5xl font-black text-ast-stone/20 mb-4 group-hover:text-ast-accent/20 transition-colors duration-500">
                    {step.num}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-ast-accent transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-20">
                    <ChevronRight className="w-8 h-8 text-ast-stone/30" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/process"
              className="inline-flex items-center gap-2 text-ast-accent font-semibold hover:text-white transition-colors group"
            >
              <span>View Full Process</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <section className="projects-section relative py-32 px-6 sm:px-8 lg:px-12">
        <div className="absolute inset-0 grid-bg-subtle opacity-20" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-ast-accent mb-4">
                <span className="w-8 h-px bg-ast-accent" />
                Featured Work
              </span>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight uppercase text-white">
                Selected <span className="text-ast-accent">Projects</span>
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-white font-semibold hover:text-ast-accent transition-colors group"
            >
              <span>View All</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <article key={project.id} className="project-card group relative rounded-2xl overflow-hidden border border-ast-stone/50 bg-ast-surface transition-all duration-500 hover:border-ast-accent/30 hover:shadow-2xl hover:shadow-ast-accent/10 hover:-translate-y-2">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ast-bg via-ast-bg/50 to-transparent" />
                  <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-ast-bg/90 backdrop-blur-sm border border-ast-stone/50 text-xs font-mono font-bold text-white">
                    {project.id}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="text-xs font-mono uppercase tracking-wider text-ast-accent mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-ast-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400">{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section relative py-32 px-6 sm:px-8 lg:px-12">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-ast-accent/10 via-transparent to-ast-accent/10" />
          <div className="absolute inset-0 grid-bg-subtle opacity-20" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase mb-6">
            Have a Project in <span className="text-ast-accent">Mind</span>?
          </h2>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with custom digital solutions. Book a free consultation today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link
              to="/booking"
              className="group relative inline-flex items-center gap-3 bg-ast-accent text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:bg-ast-accent-hover hover:shadow-[0_0_50px_rgba(255,77,0,0.5)] hover:-translate-y-1 overflow-hidden"
            >
              <span className="relative z-10">Book a Consultation</span>
              <ArrowUpRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Link>
            <Link
              to="/services"
              className="group inline-flex items-center gap-3 text-white px-10 py-5 rounded-xl font-semibold text-lg border-2 border-ast-stone/50 transition-all duration-300 hover:border-white/30 hover:bg-white/5 hover:-translate-y-1"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
