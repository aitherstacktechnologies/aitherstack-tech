import React, { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: '01',
    title: 'Enterprise Digital Platform',
    category: 'WEB DEVELOPMENT',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    description: 'High-performance web architecture designed for international scalability, seamless content workflows, and lightning-fast load times.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    link: '/portfolio',
  },
  {
    id: '02',
    title: 'AI Lead Qualification Engine',
    category: 'AI SYSTEMS & AUTOMATION',
    tags: ['AI Voice Agents', 'Workflow Automation', 'Supabase'],
    description: 'Automated voice and chat system that handles inbound client inquiries, qualifies leads 24/7, and syncs directly with CRM pipelines.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    link: '/portfolio',
  },
  {
    id: '03',
    title: 'Client Management Portal',
    category: 'BUSINESS SOFTWARE',
    tags: ['Custom Dashboards', 'API Integration', 'Security'],
    description: 'Bespoke client dashboard providing real-time project tracking, document exchange, and automated invoice processing.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    link: '/portfolio',
  },
];

export default function PortfolioShowcase() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
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
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <span className="absolute top-10 right-0 pointer-events-none select-none text-watermark z-0 opacity-[0.04]">
          WORK
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-sunset-border gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sunset-pop mb-3">
              <span className="w-2 h-2 rounded-full bg-sunset-pop" />
              Selected Work
            </div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight uppercase">
              Digital Systems <br className="hidden sm:inline" />
              In Production.
            </h2>
          </div>

          <button
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 font-bold text-sm uppercase tracking-wider text-sunset-text hover:text-sunset-pop transition-colors group"
          >
            <span>Explore All Projects</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <article
              key={project.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative bg-sunset-surface border border-sunset-border rounded-lg overflow-hidden flex flex-col justify-between transition-all duration-500 hover:border-sunset-pop hover:shadow-lg hover:shadow-sunset-pop/10"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-sunset-border/20 border-b border-sunset-border">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 rounded border border-sunset-border bg-sunset-bg px-3 py-1 text-xs font-mono font-bold text-sunset-text">
                  {project.id}
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-sunset-muted mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-sunset-text mb-3 group-hover:text-sunset-pop transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-sunset-muted leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2.5 py-1 rounded border border-sunset-border bg-sunset-bg text-sunset-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-sunset-text group-hover:text-sunset-pop transition-colors"
                  >
                    <span>View Project</span>
                    <div className="w-7 h-7 rounded-full bg-sunset-bg border border-sunset-border flex items-center justify-center transition-colors group-hover:bg-sunset-pop group-hover:border-sunset-pop">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
