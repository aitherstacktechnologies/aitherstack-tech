import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const steps = [
  {
    number: "01",
    title: "DISCOVER",
    subtitle: "Understanding the problem space",
    description: "We dive deep into your business goals, target audience, existing systems, and specific technical obstacles."
  },
  {
    number: "02",
    title: "DEFINE",
    subtitle: "Structuring the digital strategy",
    description: "We turn raw ideas into an actionable plan, selecting the right architecture, user journeys, and feature scope."
  },
  {
    number: "03",
    title: "DESIGN",
    subtitle: "Crafting modern, accessible UX/UI",
    description: "We create clean, editorial visual layouts, intuitive navigation, and interactive prototypes tailored to your brand identity."
  },
  {
    number: "04",
    title: "BUILD",
    subtitle: "Clean, performant engineering",
    description: "We build your product using modern React tools, ensuring fast response times, accessibility, and robust integrations."
  },
  {
    number: "05",
    title: "LAUNCH",
    subtitle: "Testing and smooth deployment",
    description: "Thorough testing across browsers and devices ensures a secure, high-quality deployment to live servers."
  },
  {
    number: "06",
    title: "GROW",
    subtitle: "Continuous improvement & scaling",
    description: "We help evolve your platform post-launch through performance tuning, feature expansions, and automated workflows."
  }
];

export default function Process() {
  const navigate = useNavigate();

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 1.5rem 8rem' }}>
      
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <span style={{ backgroundColor: '#eff6ff', color: '#2563eb', fontWeight: '800', fontSize: '0.85rem', padding: '0.5rem 1.25rem', borderRadius: '50px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          Our Framework
        </span>
        <h1 style={{ fontSize: '3rem', fontWeight: '800', color: '#0f172a', margin: '1rem 0 0.5rem' }}>
          How We Architect Your Systems
        </h1>
        <p style={{ color: '#475569', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
          A battle-tested 6-step execution framework designed to deliver production-ready software with zero friction.
        </p>
      </div>

      {/* 6-Step Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.75rem', marginBottom: '5rem' }}>
        {steps.map((item, index) => (
          <ScrollReveal key={item.number} delay={index * 0.08}>
            <div 
              style={{ 
                backgroundColor: '#ffffff', 
                border: '1px solid #e2e8f0', 
                borderRadius: '12px', 
                padding: '2rem', 
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = '#2563eb';
                e.currentTarget.style.boxShadow = '0 12px 20px -5px rgba(37, 99, 235, 0.12)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0px)';
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.05)';
              }}
            >
              <div>
                <span style={{ color: '#2563eb', fontWeight: '800', fontSize: '1.8rem', display: 'block', marginBottom: '0.5rem' }}>
                  {item.number}
                </span>
                <h3 style={{ color: '#0f172a', fontWeight: '800', fontSize: '1.3rem', letterSpacing: '0.03em', margin: '0 0 0.25rem' }}>
                  {item.title}
                </h3>
                <h4 style={{ color: '#2563eb', fontWeight: '600', fontSize: '0.9rem', marginBottom: '1rem' }}>
                  {item.subtitle}
                </h4>
                <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.65', margin: 0 }}>
                  {item.description}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* CTA Box with Hover Scale Button */}
      <ScrollReveal delay={0.2}>
        <div style={{ textAlign: 'center', backgroundColor: '#0a0a0a', borderRadius: '16px', padding: '3.5rem 1.5rem', color: '#ffffff' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1rem' }}>Ready to Launch Your Project?</h2>
          <p style={{ color: '#a1a1aa', marginBottom: '2rem', fontSize: '1.05rem' }}>Book a discovery call to walk through your technical requirements.</p>
          <button 
            onClick={() => navigate('/book')}
            style={{ 
              backgroundColor: '#2563eb', 
              color: '#ffffff', 
              border: 'none', 
              padding: '0.9rem 2.2rem', 
              borderRadius: '10px', 
              fontWeight: '700', 
              fontSize: '1rem', 
              cursor: 'pointer',
              transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: '0 10px 20px -5px rgba(37, 99, 235, 0.4)',
              display: 'inline-block'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.backgroundColor = '#1d4ed8';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.backgroundColor = '#2563eb';
            }}
          >
            Book Strategy Call →
          </button>
        </div>
      </ScrollReveal>

    </div>
  );
}