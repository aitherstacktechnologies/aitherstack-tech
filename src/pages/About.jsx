import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const journeyEvents = [
  {
    phase: "FOUNDATION",
    title: "The Beginning",
    description: "AITHER begins with a simple goal: build meaningful digital solutions."
  },
  {
    phase: "EARLY WORK",
    title: "First Digital Products",
    description: "The team begins developing custom web applications and working with early clients."
  },
  {
    phase: "TECHNICAL EXPANSION",
    title: "Scaling Systems & AI",
    description: "The team grows technical capabilities into full-stack web platforms and automated workflows."
  },
  {
    phase: "AGENCY DEVELOPMENT",
    title: "Aither Stack Technologies",
    description: "AITHER evolves into a dedicated digital technology agency serving ambitious clients."
  },
  {
    phase: "TODAY",
    title: "Building What Comes Next",
    description: "AITHER continues building modern digital experiences, products, and tailored systems."
  }
];

export default function About() {
  return (
    <div className="section-padding">
      <div className="container">
        {/* Editorial Heading */}
        <div style={{ borderBottom: '1px solid var(--border-light)', pb: '4rem', marginBottom: '5rem' }}>
          <div style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            ABOUT AITHER STACK TECHNOLOGIES
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: '1.1', maxWidth: '1000px', marginBottom: '2.5rem' }}>
            WE'RE A DIGITAL TECHNOLOGY TEAM BUILDING WHAT COMES NEXT.
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '750px', lineHeight: '1.6' }}>
            AITHER STACK TECHNOLOGIES is a modern digital technology agency. We turn complex ideas, operational challenges, and new opportunities into clean, high-performance digital products and systems.
          </p>
        </div>

        {/* Philosophy Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem', marginBottom: '8rem' }}>
          <h2 style={{ fontSize: '1rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>HOW WE THINK</h2>
          <div>
            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', lineHeight: '1.3' }}>
              Built around the problem, not a rigid preset template.
            </h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
              We believe technology should serve a practical purpose. We don't push trendy gimmicks or bloated frameworks. Instead, we analyze what your business actually needs, then design and engineer scalable web products to solve it directly.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
              From initial strategy through long-term maintenance, our approach combines thoughtful UX/UI, modern frontend frameworks, and resilient backend integrations.
            </p>
          </div>
        </div>

        {/* AITHER JOURNEY TIMELINE */}
        <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '5rem' }}>
          <h2 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '4rem' }}>
            OUR JOURNEY
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {journeyEvents.map((item, index) => (
              <div 
                key={index} 
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '1fr 2fr 3fr', 
                  gap: '2rem', 
                  padding: '2.5rem 0', 
                  borderBottom: '1px solid var(--border-light)',
                  alignItems: 'baseline'
                }}
              >
                <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--accent)', letterSpacing: '0.05em' }}>
                  [{item.phase}]
                </div>
                <h3 style={{ fontSize: '1.5rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.6' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ marginTop: '8rem', padding: '4rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '12px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.25rem', marginBottom: '1rem' }}>Want to work with our team?</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>We're always ready for new ideas and ambitious technical projects.</p>
          <Link to="/contact" style={{
            padding: '1rem 2rem',
            backgroundColor: 'var(--text-primary)',
            color: '#fff',
            borderRadius: '100px',
            textDecoration: 'none',
            fontWeight: '600',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            Get In Touch <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}