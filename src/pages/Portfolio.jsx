import React from 'react';

export default function Work() {
  return (
    <div style= {{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 1.5rem', minHeight: '70vh' }}>
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <h1 style={{ fontSize: '2.8rem', fontWeight: '800', color: '#0f172a', marginBottom: '1rem' }}>
          Our Work
        </h1>
        <p style={{ color: '#64748b', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
          Explore our latest client projects and Web & AI builds.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        <div className="light-card" style={{ padding: '2.5rem', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🚀</div>
          <h3 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '0.75rem', color: '#0f172a' }}>Portfolio Updates Coming Soon</h3>
          <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6' }}>
            We are curating custom case studies and live agency integrations to display here.
          </p>
        </div>
      </div>
    </div>
  );
}