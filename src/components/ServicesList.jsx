import React, { useState, useEffect, useRef } from 'react';
import { Plus } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: '01',
    title: 'Web Development',
    subtitle: 'Custom Websites & Web Applications',
    description:
      'We build high-performance websites and web applications tailored to your business goals. From landing pages to complex e-commerce platforms, we deliver pixel-perfect designs with flawless functionality.',
    deliverables: ['Business Websites', 'E-commerce Platforms', 'Landing Pages', 'Web Applications', 'Custom CMS Solutions'],
  },
  {
    number: '02',
    title: 'AI Systems & Automation',
    subtitle: 'Intelligent Agents & Workflow Tools',
    description:
      'Leverage the power of artificial intelligence to automate your business processes. We create AI voice agents, chatbots, and workflow automation systems that work 24/7 to grow your business.',
    deliverables: ['AI Voice Agents', 'AI Chatbots', 'Workflow Automation', 'Lead Qualification', 'CRM Integrations'],
  },
  {
    number: '03',
    title: 'Business Software',
    subtitle: 'Custom Dashboards & Client Portals',
    description:
      'Streamline your operations with custom software solutions. We build dashboards, client portals, and internal tools that give you complete control over your business data and workflows.',
    deliverables: ['Admin Dashboards', 'Client Portals', 'Booking Systems', 'Inventory Management', 'Custom Software'],
  },
  {
    number: '04',
    title: 'Integrations & Security',
    subtitle: 'API Connections & Protection',
    description:
      'Connect all your tools and protect your digital assets. We integrate payment gateways, third-party APIs, and implement enterprise-grade security to keep your business running smoothly.',
    deliverables: ['Payment Gateways', 'API Integrations', 'Security Setup', 'Performance Optimization', 'Third-party Tools'],
  },
];

export default function ServicesList() {
  const [activeIndex, setActiveIndex] = useState(null);
  const sectionRef = useRef(null);
  const listRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      listRef.current.forEach((item) => {
        if (!item) return;
        gsap.fromTo(
          item,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-ast-bg text-ast-text py-24 px-6 sm:px-8 lg:px-12 border-b border-ast-border overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <span className="absolute -bottom-20 -right-10 text-[20vw] font-black tracking-tighter text-ast-text opacity-[0.04] select-none">
          AST
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-ast-accent mb-4">
            <span className="w-2 h-2 rounded-full bg-ast-accent" />
            What We Do
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight mb-4">
            Services Built for
            <br />
            Business Growth.
          </h2>
          <p className="text-base text-ast-muted leading-relaxed max-w-xl">
            We engineer digital systems that solve real business problems. Every solution is custom-built to scale with your growth.
          </p>
        </div>

        <div className="space-y-4">
          {services.map((service, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={service.number}
                ref={(el) => (listRef.current[index] = el)}
                className={`border border-ast-border rounded-xl overflow-hidden transition-all duration-300 ${
                  isOpen ? 'bg-ast-surface shadow-lg shadow-ast-accent/5' : 'hover:border-ast-accent/50'
                }`}
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full py-6 px-8 flex items-center justify-between text-left focus:ring-2 focus:ring-ast-accent focus:border-ast-accent"
                >
                  <div className="flex items-center gap-6 md:gap-10">
                    <span className="font-mono text-sm font-bold text-ast-accent">{service.number}</span>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold tracking-tight text-ast-text">{service.title}</h3>
                      <p className="text-sm text-ast-muted mt-1 hidden sm:block">{service.subtitle}</p>
                    </div>
                  </div>
                  <div className={`w-10 h-10 rounded-full border border-ast-border flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-ast-accent border-ast-accent rotate-45' : 'hover:bg-ast-surface'}`}>
                    <Plus className="w-5 h-5 text-ast-text" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-8 pb-8 animate-fade-in">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 border-t border-ast-border/50">
                      <div className="lg:col-span-7">
                        <p className="text-base text-ast-muted leading-relaxed mb-6">
                          {service.description}
                        </p>
                        <button
                          onClick={scrollToContact}
                          className="inline-flex items-center gap-2 bg-ast-accent text-ast-bg px-6 py-3 rounded-full font-semibold text-sm transition-all hover:bg-ast-accent/90 focus:ring-2 focus:ring-ast-accent focus:border-ast-accent"
                        >
                          <span>Discuss This Service</span>
                        </button>
                      </div>

                      <div className="lg:col-span-5">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-ast-muted/70 mb-4">
                          Deliverables
                        </h4>
                        <ul className="space-y-3">
                          {service.deliverables.map((item) => (
                            <li key={item} className="flex items-center gap-3 text-sm text-ast-muted">
                              <span className="w-1.5 h-1.5 rounded-full bg-ast-accent flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
