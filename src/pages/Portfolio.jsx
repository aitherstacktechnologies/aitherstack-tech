import React, { useEffect, useRef, useState } from 'react';
import { X, ArrowRight, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: '01',
    title: 'Enterprise Digital Platform',
    category: 'WEB DEVELOPMENT',
    client: 'Global Tech Corp',
    year: '2024',
    description: 'High-performance web architecture designed for international scalability, seamless content workflows, and lightning-fast load times. Built with React and Next.js for enterprise-grade reliability.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    metrics: ['99.9% Uptime', '2.5x Faster', '50K+ Users'],
    color: 'from-blue-500/20',
  },
  {
    id: '02',
    title: 'AI Lead Qualification Engine',
    category: 'AI SYSTEMS & AUTOMATION',
    client: 'SalesForce Pro',
    year: '2024',
    description: 'Automated voice and chat system that handles inbound client inquiries, qualifies leads 24/7, and syncs directly with CRM pipelines. Increased conversion rates by 3x.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    tags: ['AI Voice Agents', 'GPT-4', 'Supabase', 'Twilio'],
    metrics: ['24/7 Operation', '3x Conversion', '60% Cost Cut'],
    color: 'from-purple-500/20',
  },
  {
    id: '03',
    title: 'Client Management Portal',
    category: 'BUSINESS SOFTWARE',
    client: 'Meridian Consulting',
    year: '2023',
    description: 'Bespoke client dashboard providing real-time project tracking, document exchange, and automated invoice processing. Streamlined operations and saved 40% time.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    tags: ['React', 'Supabase', 'Stripe', 'Webhooks'],
    metrics: ['40% Time Saved', 'Real-time Sync', 'Auto Billing'],
    color: 'from-green-500/20',
  },
  {
    id: '04',
    title: 'E-commerce Platform',
    category: 'WEB DEVELOPMENT',
    client: 'Urban Threads Co',
    year: '2023',
    description: 'Modern e-commerce solution with inventory management, multi-currency support, and seamless payment processing. Generated $2M+ in revenue.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80',
    tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind'],
    metrics: ['$2M+ Revenue', '99.5% Uptime', 'Global Scale'],
    color: 'from-orange-500/20',
  },
  {
    id: '05',
    title: 'Healthcare Dashboard',
    category: 'BUSINESS SOFTWARE',
    client: 'MedFirst Clinics',
    year: '2023',
    description: 'HIPAA-compliant patient management system with appointment scheduling, medical records, and billing integration. Improved efficiency by 30%.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    tags: ['React', 'Supabase', 'HL7', 'Stripe'],
    metrics: ['HIPAA Compliant', '30% Efficiency', 'Secure Data'],
    color: 'from-red-500/20',
  },
  {
    id: '06',
    title: 'Real Estate Platform',
    category: 'WEB DEVELOPMENT',
    client: 'PropValue Estates',
    year: '2023',
    description: 'Property listing platform with virtual tours, AI-powered valuation, and integrated mortgage calculator. 500+ active listings.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
    tags: ['Next.js', 'Three.js', 'Mapbox', 'Tailwind'],
    metrics: ['500+ Listings', 'Virtual Tours', 'AI Valuation'],
    color: 'from-cyan-500/20',
  },
];

const categories = ['All', 'WEB DEVELOPMENT', 'AI SYSTEMS & AUTOMATION', 'BUSINESS SOFTWARE'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-content',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      );

      gsap.fromTo('.project-card',
        { y: 40, opacity: 0, scale: 0.95 },
        {
          y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.projects-grid', start: 'top 80%' }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <div ref={sectionRef} className="pt-16">
      <section className="relative py-32 px-6 sm:px-8 lg:px-12 border-b border-ast-stone/30 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="hero-content max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-ast-stone/50 bg-ast-surface/50 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-ast-accent" />
              <span className="text-xs font-mono uppercase tracking-wider text-gray-400">
                Our Work
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight uppercase mb-6">
              Case <span className="text-ast-accent">Studies</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              A showcase of digital systems we've engineered for forward-thinking businesses. Each project represents a unique challenge solved through technical excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 px-6 sm:px-8 lg:px-12 border-b border-ast-stone/30 bg-ast-surface/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 text-sm font-mono rounded-xl transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-ast-accent text-white shadow-[0_0_20px_rgba(255,77,0,0.3)]'
                    : 'border border-ast-stone/50 text-gray-400 hover:border-white/30 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="project-card group relative rounded-2xl overflow-hidden border border-ast-stone/50 bg-ast-surface transition-all duration-500 hover:border-ast-accent/30 hover:shadow-2xl hover:shadow-ast-accent/10 hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ast-bg via-ast-bg/30 to-transparent" />
                  <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-ast-bg/90 backdrop-blur-sm border border-ast-stone/50 text-sm font-mono font-bold text-white">
                    {project.id}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-ast-bg/60">
                    <span className="px-6 py-3 rounded-full bg-ast-accent text-white font-bold text-sm">
                      View Details
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="text-xs font-mono uppercase tracking-wider text-ast-accent mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-ast-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 line-clamp-2 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-[10px] font-mono px-3 py-1.5 rounded-full border border-ast-stone/50 text-gray-400 bg-ast-surface/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 sm:px-8 lg:px-12 border-t border-ast-stone/30 bg-ast-surface/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-gray-400 mb-8">
            Let's discuss how we can help bring your vision to life.
          </p>
          <Link
            to="/booking"
            className="group relative inline-flex items-center gap-3 bg-ast-accent text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:bg-ast-accent-hover hover:shadow-[0_0_40px_rgba(255,77,0,0.4)] hover:-translate-y-1 overflow-hidden"
          >
            <span className="relative z-10">Start a Project</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </Link>
        </div>
      </section>

      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-ast-bg/95 backdrop-blur-xl" 
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[90vh] overflow-auto border border-ast-stone/50 bg-ast-surface rounded-2xl animate-scale-in" 
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 p-3 bg-ast-bg/90 backdrop-blur-sm border border-ast-stone/50 rounded-xl text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="relative aspect-video overflow-hidden rounded-t-2xl">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ast-surface via-transparent to-transparent" />
            </div>
            
            <div className="p-8">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="px-4 py-1.5 rounded-full bg-ast-accent/10 text-ast-accent text-xs font-mono">{selectedProject.category}</span>
                <span className="text-sm text-gray-500">{selectedProject.client}</span>
                <span className="text-sm text-gray-500">{selectedProject.year}</span>
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h2>
              <p className="text-gray-400 leading-relaxed mb-8">{selectedProject.description}</p>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                {selectedProject.metrics.map((metric) => (
                  <div key={metric} className="p-4 rounded-xl border border-ast-stone/50 bg-ast-bg/50 text-center">
                    <span className="text-sm font-mono text-ast-accent font-bold">{metric}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map(tag => (
                  <span key={tag} className="text-xs font-mono px-4 py-2 rounded-full border border-ast-stone/50 text-gray-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
