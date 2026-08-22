import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowUpRight, Zap, Bot, ShieldCheck, CheckCircle, ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="section-padding">
      <div className="container">

        {/* Hero Section */}
        <ScrollReveal delay={0.1}>
          <div style={{ textAlign: 'center', maxWidth: '950px', margin: '0 auto 6rem auto' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', display: 'block', marginBottom: '1.25rem' }}>
              AITHER STACK TECHNOLOGIES
            </span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.75rem)', lineHeight: '1.1', fontWeight: '800', marginBottom: '1.75rem' }}>
              Architecting High-Performance AI Systems & Web Infrastructure.
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
              We design automated lead systems, AI receptionists, and enterprise web applications engineered to scale modern business operations.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <Link to="/contact" className="animated-btn" style={{ padding: '0.95rem 2.2rem', backgroundColor: 'var(--text-primary)', color: '#fff', borderRadius: '100px', textDecoration: 'none', fontWeight: '600' }}>
                Start Inquiry <ArrowUpRight size={18} />
              </Link>
              <Link to="/book" className="animated-btn" style={{ padding: '0.95rem 2.2rem', border: '1px solid var(--border-light)', color: 'var(--text-primary)', borderRadius: '100px', textDecoration: 'none', fontWeight: '600' }}>
                Book Call
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* Clickable Feature Cards with Scale & Shadow Animation */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '8rem' }}>
          
          <ScrollReveal delay={0.1}>
            <div 
              className="animated-card"
              onClick={() => navigate('/services')} 
              style={{ padding: '3rem 2.5rem', border: '1px solid var(--border-light)', borderRadius: '24px', backgroundColor: '#fff', cursor: 'pointer' }}
            >
              <Zap size={36} style={{ color: 'var(--accent)', marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.75rem' }}>Instant Automation</h3>
              <p style={{ color: 'var(--text-muted)' }}>Automate customer acquisition, form processing, and qualified lead routing effortlessly.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <div 
              className="animated-card"
              onClick={() => navigate('/services')} 
              style={{ padding: '3rem 2.5rem', border: '1px solid var(--border-light)', borderRadius: '24px', backgroundColor: '#fff', cursor: 'pointer' }}
            >
              <Bot size={36} style={{ color: 'var(--accent)', marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.75rem' }}>AI Voice Agents</h3>
              <p style={{ color: 'var(--text-muted)' }}>Deploy 24/7 intelligent voice receptionists and context-aware customer support engines.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div 
              className="animated-card"
              onClick={() => navigate('/services')} 
              style={{ padding: '3rem 2.5rem', border: '1px solid var(--border-light)', borderRadius: '24px', backgroundColor: '#fff', cursor: 'pointer' }}
            >
              <ShieldCheck size={36} style={{ color: 'var(--accent)', marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.75rem' }}>Enterprise Web Apps</h3>
              <p style={{ color: 'var(--text-muted)' }}>High-converting React & Vite web applications tailored specifically for digital agencies.</p>
            </div>
          </ScrollReveal>

        </div>

        {/* Extended Section: How We Scale Agencies */}
        <ScrollReveal delay={0.1}>
          <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '5rem 3rem', borderRadius: '32px', marginBottom: '6rem' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1.5rem' }}>Engineered For Measurable Growth</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '3rem' }}>
                We replace fragmented sales pipelines with fully synchronized AI infrastructure that operates around the clock.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', textAlign: 'left' }}>
                <div style={{ display: 'flex', gap: '1rem' }}><CheckCircle size={24} style={{ color: 'var(--accent)', flexShrink: 0 }} /><div><strong>0.8s Page Load</strong><p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Ultra-fast React engines.</p></div></div>
                <div style={{ display: 'flex', gap: '1rem' }}><CheckCircle size={24} style={{ color: 'var(--accent)', flexShrink: 0 }} /><div><strong>24/7 Voice Support</strong><p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Vapi & Twilio setups.</p></div></div>
                <div style={{ display: 'flex', gap: '1rem' }}><CheckCircle size={24} style={{ color: 'var(--accent)', flexShrink: 0 }} /><div><strong>Zero Lead Leakage</strong><p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Automated instant CRM syncing.</p></div></div>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
}