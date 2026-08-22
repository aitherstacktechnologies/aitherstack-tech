import React from 'react';

export default function WhyChooseUs() {
  return (
    <section style={{ borderTop: '1px solid #e2e8f0', paddingTop: '5rem', marginTop: '5rem', marginBottom: '4rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <h2 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', color: '#2563eb', fontWeight: '700', marginBottom: '0.5rem' }}>
          WHY CHOOSE US
        </h2>
        <h3 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0f172a', marginBottom: '1rem' }}>
          Built to Make Your Business Better.
        </h3>
        <p style={{ color: '#475569', fontSize: '1.1rem', maxWidth: '820px', margin: '0 auto', lineHeight: '1.7' }}>
          We don’t just deliver digital solutions — we build reliable, high-quality systems designed around your business, your customers, and your long-term goals. From strategy and architecture to flawless execution, every project is focused on delivering real, scalable value, exceptional user experience, and measurable business outcomes.
        </p>
      </div>

      {/* Grid Layout - All 6 Cards Uniform */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        
        {/* Card 01 */}
        <div className="animated-card" style={{ padding: '2.2rem', borderRadius: '16px', border: '1px solid #e2e8f0', background: '#ffffff', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
          <span style={{ color: '#2563eb', fontWeight: '800', fontSize: '1.1rem', display: 'block', marginBottom: '0.75rem' }}>01 — Business-First Thinking</span>
          <p style={{ color: '#64748b', lineHeight: '1.7', margin: 0, fontSize: '0.98rem' }}>
            We deep-dive into your operational workflow and core goals before writing a single line of code. Every feature, integration, and UI component is strategically built to solve a concrete business bottleneck, eliminate manual work, and directly improve your operational efficiency rather than just looking good on paper.
          </p>
        </div>

        {/* Card 02 */}
        <div className="animated-card" style={{ padding: '2.2rem', borderRadius: '16px', border: '1px solid #e2e8f0', background: '#ffffff', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
          <span style={{ color: '#2563eb', fontWeight: '800', fontSize: '1.1rem', display: 'block', marginBottom: '0.75rem' }}>02 — Premium Engineering Quality</span>
          <p style={{ color: '#64748b', lineHeight: '1.7', margin: 0, fontSize: '0.98rem' }}>
            Clean UI/UX design, cutting-edge modern technology stacks, and enterprise-grade system architecture are embedded into everything we build. We prioritize fast load speeds, rock-solid security protocols, and robust error handling so your platforms run reliably at scale without performance drops.
          </p>
        </div>

        {/* Card 03 */}
        <div className="animated-card" style={{ padding: '2.2rem', borderRadius: '16px', border: '1px solid #e2e8f0', background: '#ffffff', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
          <span style={{ color: '#2563eb', fontWeight: '800', fontSize: '1.1rem', display: 'block', marginBottom: '0.75rem' }}>03 — AI-Powered Innovation</span>
          <p style={{ color: '#64748b', lineHeight: '1.7', margin: 0, fontSize: '0.98rem' }}>
            We help your agency leverage autonomous AI agents, voice receptionists, dynamic routing engines, and smart automations. By delegating repetitive customer inquiries and back-office tasks to AI, your team can save countless hours and focus purely on high-value revenue activities.
          </p>
        </div>

        {/* Card 04 */}
        <div className="animated-card" style={{ padding: '2.2rem', borderRadius: '16px', border: '1px solid #e2e8f0', background: '#ffffff', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
          <span style={{ color: '#2563eb', fontWeight: '800', fontSize: '1.1rem', display: 'block', marginBottom: '0.75rem' }}>04 — Fully Custom Architecture</span>
          <p style={{ color: '#64748b', lineHeight: '1.7', margin: 0, fontSize: '0.98rem' }}>
            No rigid templates or generic one-size-fits-all solutions. We engineer custom web applications, booking pipelines, and CRM workflows specifically customized to your unique brand identity, target client persona, and business processes.
          </p>
        </div>

        {/* Card 05 */}
        <div className="animated-card" style={{ padding: '2.2rem', borderRadius: '16px', border: '1px solid #e2e8f0', background: '#ffffff', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
          <span style={{ color: '#2563eb', fontWeight: '800', fontSize: '1.1rem', display: 'block', marginBottom: '0.75rem' }}>05 — Seamless & Transparent Execution</span>
          <p style={{ color: '#64748b', lineHeight: '1.7', margin: 0, fontSize: '0.98rem' }}>
            With clear communication channels, milestone-based progress updates, and a structured agile development lifecycle, we keep your deployment on schedule. You stay fully informed at every stage from ideation to production launch.
          </p>
        </div>

        {/* Card 06 — Exactly match with all other cards */}
        <div className="animated-card" style={{ padding: '2.2rem', borderRadius: '16px', border: '1px solid #e2e8f0', background: '#ffffff', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
          <span style={{ color: '#2563eb', fontWeight: '800', fontSize: '1.1rem', display: 'block', marginBottom: '0.75rem' }}>06 — Built for Long-Term Scale</span>
          <p style={{ color: '#64748b', lineHeight: '1.7', margin: 0, fontSize: '0.98rem' }}>
            We build digital infrastructure engineered for future growth. As your client base expands and operational needs evolve, your web software and AI systems will scale effortlessly alongside your company without requiring costly complete redesigns.
          </p>
        </div>

      </div>
    </section>
  );
}