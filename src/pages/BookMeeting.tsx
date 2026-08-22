import React from 'react';

export default function BookMeeting() {
  return (
    <div style={{ width: '100%', padding: '3rem 1rem' }} id="book-meeting">
      {/* Forced Centered Header */}
      <div style={{ textAlign: 'center', width: '100%', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#0f172a', margin: '0 0 0.5rem 0', textAlign: 'center' }}>
          Book a Strategy Call
        </h2>
        <p style={{ color: '#475569', fontSize: '1.125rem', margin: 0, textAlign: 'center' }}>
          Select a time slot that works best for you.
        </p>
      </div>

      {/* Calendar Box */}
      <div style={{ maxWidth: '1150px', margin: '0 auto', backgroundColor: '#ffffff', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)', height: '700px', border: '1px solid #e2e8f0' }}>
        <iframe
          src="https://cal.com/aitherstacktechnologies-official/aither-stack-appointments?embed=true&theme=light"
          title="Aither Stack - Appointments"
          style={{ width: '100%', height: '100%', border: 'none' }}
        ></iframe>
      </div>
    </div>
  );
}