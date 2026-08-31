import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Code2, Brain, BarChart3, Zap, ArrowUpRight, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'High-performance web platforms built with modern frameworks and enterprise-grade architecture. From custom applications to e-commerce solutions.',
    features: [
      'Custom Web Applications',
      'E-commerce Platforms',
      'Progressive Web Apps',
      'Landing Pages',
      'Web Portals',
      'Performance Optimization',
    ],
    tags: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind'],
    color: 'from-blue-500',
    gradient: 'group-hover:from-blue-500/20',
  },
  {
    icon: Brain,
    title: 'AI Systems & Automation',
    description: 'Bespoke AI agents and automation pipelines that streamline operations and enhance customer interactions across all touchpoints.',
    features: [
      'AI Voice Agents',
      'Chatbot Development',
      'Workflow Automation',
      'Lead Qualification',
      'Document Processing',
      'Custom AI Solutions',
    ],
    tags: ['OpenAI', 'Vapi', 'LangChain', 'Supabase', 'GPT-4'],
    color: 'from-purple-500',
    gradient: 'group-hover:from-purple-500/20',
  },
  {
    icon: BarChart3,
    title: 'Business Software',
    description: 'Custom dashboards, CRM systems, and enterprise tools designed for your specific workflows and business requirements.',
    features: [
      'Custom Dashboards',
      'CRM Systems',
      'Inventory Management',
      'Project Tracking',
      'Invoice Processing',
      'Analytics & Reporting',
    ],
    tags: ['React', 'Supabase', 'PostgreSQL', 'REST APIs', 'GraphQL'],
    color: 'from-green-500',
    gradient: 'group-hover:from-green-500/20',
  },
  {
    icon: Zap,
    title: 'Integrations & APIs',
    description: 'Seamless connections between platforms with robust API development and third-party integrations for unified ecosystems.',
    features: [
      'API Development',
      'Third-party Integrations',
      'Payment Processing',
      'Webhooks',
      'Data Synchronization',
      'Webhook Automation',
    ],
    tags: ['REST', 'GraphQL', 'Stripe', 'Zapier', 'Webhook'],
    color: 'from-orange-500',
    gradient: 'group-hover:from-orange-500/20',
  },
];

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-content',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      );

      gsap.fromTo('.service-card',
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: '.services-grid', start: 'top 75%' }
        }
      );

      gsap.fromTo('.cta-content',
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, ease: 'power3.out',
          scrollTrigger: { trigger: '.cta-section', start: 'top 85%' }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="pt-16">
      <section className="relative py-32 px-6 sm:px-8 lg:px-12 border-b border-ast-stone/30 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-ast-accent/5 rounded-full blur-[150px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="hero-content max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-ast-stone/50 bg-ast-surface/50 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-ast-accent" />
              <span className="text-xs font-mono uppercase tracking-wider text-gray-400">
                Our Capabilities
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight uppercase mb-6">
              What We <span className="text-ast-accent">Build</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              From high-performance web platforms to intelligent AI systems, we deliver comprehensive digital solutions engineered for scale, reliability, and growth.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="services-grid grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`service-card group relative border border-ast-stone/50 bg-ast-surface/80 p-8 lg:p-10 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:border-ast-accent/30 hover:shadow-2xl hover:shadow-ast-accent/10 overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color}/0 ${service.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-ast-surface to-ast-surface/50 border border-ast-stone/50 flex items-center justify-center group-hover:border-ast-accent/50 transition-colors duration-300 group-hover:scale-110">
                      <service.icon className="w-8 h-8 text-ast-accent" />
                    </div>
                    <span className="text-sm font-mono text-gray-500">
                      0{i + 1}
                    </span>
                  </div>

                  <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-ast-accent transition-colors duration-300">
                    {service.title}
                  </h2>
                  
                  <p className="text-gray-400 leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-ast-accent flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {service.tags.map(tag => (
                      <span key={tag} className="text-[11px] font-mono px-3 py-1.5 rounded-full border border-ast-stone/50 text-gray-400 bg-ast-surface/50">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to="/booking"
                    className="group/btn inline-flex items-center gap-2 text-sm font-bold text-ast-accent hover:text-white transition-colors duration-300"
                  >
                    <span>Book Consultation</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <div className="absolute -bottom-2 -right-2 w-32 h-32 bg-ast-accent/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section py-24 px-6 sm:px-8 lg:px-12 border-t border-ast-stone/30 bg-ast-surface/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="cta-content">
            <h2 className="text-4xl font-black tracking-tight uppercase mb-6">
              Ready to Start Your <span className="text-ast-accent">Project</span>?
            </h2>
            <p className="text-lg text-gray-400 mb-10">
              Book a consultation to discuss your requirements and get a custom solution tailored to your needs.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-5">
              <Link
                to="/booking"
                className="group relative inline-flex items-center gap-3 bg-ast-accent text-white px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:bg-ast-accent-hover hover:shadow-[0_0_40px_rgba(255,77,0,0.4)] hover:-translate-y-1 overflow-hidden"
              >
                <span className="relative z-10">Book a Consultation</span>
                <ArrowUpRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Link>
              <a
                href="mailto:muhammadzaman.dev@gmail.com"
                className="inline-flex items-center gap-3 text-white px-8 py-4 rounded-xl font-semibold text-base border-2 border-ast-stone/50 transition-all duration-300 hover:border-white/30 hover:bg-white/5 hover:-translate-y-1"
              >
                <span>Email Us Directly</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
