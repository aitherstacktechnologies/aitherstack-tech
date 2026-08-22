import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const quickLinksColumn1 = [
    { name: 'Services', path: '/services' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ];

  const quickLinksColumn2 = [
    { name: 'Book Call', path: '/book' },
    { name: 'Process', path: '/process' },
    { name: 'Portfolio', path: '/portfolio' },
  ];

  return (
    <footer style={{ backgroundColor: '#0a0a0a', color: '#a1a1aa', padding: '4rem 1.5rem 2rem', borderTop: '1px solid #18181b' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
        
        {/* Brand Info */}
        <div>
          <Link to="/" style={{ textDecoration: 'none', color: '#ffffff', fontWeight: '800', fontSize: '1.5rem', display: 'block', marginBottom: '1rem' }}>
            AitherStack<span style={{ color: '#2563eb' }}>.</span>
          </Link>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: '#a1a1aa' }}>
            Architecting high-ticket AI automation systems and enterprise-grade web applications for modern businesses worldwide.
          </p>
        </div>

        {/* Quick Links (2 Columns: 3 Left, 3 Right) */}
        <div>
          <h4 style={{ color: '#ffffff', fontWeight: '700', fontSize: '1.05rem', marginBottom: '1.25rem' }}>
            Quick Links
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem 2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {quickLinksColumn1.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  style={{ 
                    textDecoration: 'none', 
                    color: '#d4d4d8', 
                    fontSize: '0.95rem', 
                    transition: 'all 0.2s ease',
                    display: 'inline-block' 
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = '#38bdf8';
                    e.currentTarget.style.transform = 'translateX(3px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = '#d4d4d8';
                    e.currentTarget.style.transform = 'translateX(0px)';
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {quickLinksColumn2.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  style={{ 
                    textDecoration: 'none', 
                    color: '#d4d4d8', 
                    fontSize: '0.95rem', 
                    transition: 'all 0.2s ease',
                    display: 'inline-block' 
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = '#38bdf8';
                    e.currentTarget.style.transform = 'translateX(3px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = '#d4d4d8';
                    e.currentTarget.style.transform = 'translateX(0px)';
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h4 style={{ color: '#ffffff', fontWeight: '700', fontSize: '1.05rem', marginBottom: '1.25rem' }}>
            Connect With Us
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <a 
              href="https://www.instagram.com/ast_official_7/?hl=en" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ 
                textDecoration: 'none', 
                color: '#d4d4d8', 
                fontSize: '0.95rem', 
                transition: 'all 0.2s ease',
                display: 'inline-block'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = '#e1306c';
                e.currentTarget.style.transform = 'translateX(3px) scale(1.02)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = '#d4d4d8';
                e.currentTarget.style.transform = 'translateX(0px) scale(1)';
              }}
            >
              Instagram →
            </a>
            <a 
              href="https://github.com/aitherstacktechnologies" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ 
                textDecoration: 'none', 
                color: '#d4d4d8', 
                fontSize: '0.95rem', 
                transition: 'all 0.2s ease',
                display: 'inline-block'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = '#38bdf8';
                e.currentTarget.style.transform = 'translateX(3px) scale(1.02)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = '#d4d4d8';
                e.currentTarget.style.transform = 'translateX(0px) scale(1)';
              }}
            >
              GitHub →
            </a>
          </div>
        </div>

      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', paddingTop: '2rem', borderTop: '1px solid #18181b', textAlign: 'center', fontSize: '0.85rem', color: '#71717a' }}>
        © {new Date().getFullYear()} AitherStack Technologies. All rights reserved.
      </div>
    </footer>
  );
}