import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Process', path: '/process' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0', position: 'sticky', top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', color: '#0f172a', fontWeight: '800', fontSize: '1.4rem' }}>
          AitherStack<span style={{ color: '#2563eb' }}>.</span>
        </Link>

        {/* Links */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              style={{
                textDecoration: 'none',
                color: location.pathname === link.path ? '#2563eb' : '#475569',
                fontWeight: location.pathname === link.path ? '700' : '500',
                fontSize: '0.95rem',
                transition: 'all 0.2s ease',
                display: 'inline-block'
              }}
              onMouseOver={(e) => {
                if (location.pathname !== link.path) e.currentTarget.style.color = '#2563eb';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseOut={(e) => {
                if (location.pathname !== link.path) e.currentTarget.style.color = '#475569';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              {link.name}
            </Link>
          ))}

          {/* Scalable Book Call CTA */}
          <Link
            to="/book"
            style={{
              backgroundColor: '#2563eb',
              color: '#ffffff',
              padding: '0.6rem 1.25rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '0.9rem',
              boxShadow: '0 4px 12px rgba(37, 99, 235, 0.2)',
              transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
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
            Book Call
          </Link>
        </div>

      </div>
    </nav>
  );
}