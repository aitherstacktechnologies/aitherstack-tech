import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function ClientPortal() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [msg, setMsg] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setMsg(error.message);
    else setUser(data.user);
    setLoading(false);
  };

  return (
    <div className="section-padding">
      <div className="container">
        <div style={{ maxWidth: '480px', margin: '0 auto', padding: '3rem', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-light)', borderRadius: '12px' }}>
          <h1 style={{ fontSize: '1.85rem', marginBottom: '0.5rem', textAlign: 'center' }}>CLIENT PORTAL</h1>
          <p style={{ color: 'var(--text-muted)', textAlign: 'center', marginBottom: '2rem', fontSize: '0.95rem' }}>
            Access project milestones, status, and team updates.
          </p>

          {user ? (
            <div>
              <h3>Welcome, {user.email}</h3>
              <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>Project dashboard features will appear here.</p>
            </div>
          ) : (
            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {msg && <div style={{ color: 'red', fontSize: '0.875rem' }}>{msg}</div>}
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.4rem' }}>Email</label>
                <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-light)', borderRadius: '6px' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.4rem' }}>Password</label>
                <input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-light)', borderRadius: '6px' }} />
              </div>
              <button type="submit" disabled={loading} style={{
                padding: '0.85rem',
                backgroundColor: 'var(--text-primary)',
                color: '#fff',
                border: 'none',
                borderRadius: '100px',
                fontWeight: '600',
                cursor: 'pointer',
                marginTop: '1rem'
              }}>
                {loading ? 'Authenticating...' : 'Sign In to Portal'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}