import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, Mail, MapPin, Send } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

const GOOGLE_APPS_SCRIPT_URL = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL;

const initialFormData = {
  name: '',
  email: '',
  phone: '',
  service: 'Luxury E-Commerce & Web Apps',
  budget: '$1k - $3k',
  timeline: 'Within 2-4 Weeks',
  message: ''
};

const inputClassName = 'w-full rounded-xl border border-white/10 bg-[#08080A] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-gray-600 focus:border-[#FF5500]';

export default function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim() || null,
      service: formData.service,
      budget: formData.budget,
      timeline: formData.timeline,
      message: formData.message.trim()
    };

    try {
      const { error } = await supabase.from('contacts').insert([payload]);
      if (error) throw error;

      if (GOOGLE_APPS_SCRIPT_URL) {
        await fetch(GOOGLE_APPS_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify(payload)
        }).catch((notificationError) => {
          console.warn('Supabase insert succeeded, but email notification failed:', notificationError);
        });
      }

      setStatus({ loading: false, success: true, error: null });
      setFormData(initialFormData);
    } catch (error) {
      console.error('Submission Error:', error);
      setStatus({ loading: false, success: false, error: error.message || 'Failed to submit form.' });
    }
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#08080A] px-6 pb-20 pt-28 text-white sm:px-8 lg:px-12">
      <section className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-[#FF5500]">// INQUIRIES OPEN</p>
          <h1 className="text-4xl font-black uppercase tracking-tight sm:text-6xl">Let&apos;s build something real.</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-400">Tell us what you are building and our engineering team will respond within 24 hours.</p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-[#0D0D11] p-8">
              <h2 className="text-xl font-bold">Direct reach</h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">Skip the bureaucracy and speak directly with the developers executing your build.</p>
              <div className="mt-8 space-y-5 text-sm text-gray-300">
                <a href="mailto:muhammadzaman.dev@gmail.com" className="flex items-center gap-3 transition-colors hover:text-[#FF5500]"><Mail className="h-5 w-5 text-[#FF5500]" />muhammadzaman.dev@gmail.com</a>
                <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-[#FF5500]" />Worldwide, remote-first</div>
              </div>
            </div>
          </aside>

          <div className="rounded-3xl border border-white/10 bg-[#0D0D11] p-8 shadow-2xl sm:p-10">
            {status.success && <div className="mb-6 flex items-center gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-400"><CheckCircle2 className="h-5 w-5 shrink-0" />Message received. We will reach out within 24 hours.</div>}
            {status.error && <div className="mb-6 flex items-center gap-3 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-400"><AlertCircle className="h-5 w-5 shrink-0" />{status.error}</div>}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="space-y-2"><span className="block text-xs font-mono uppercase tracking-wider text-gray-400">Name *</span><input className={inputClassName} name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" /></label>
                <label className="space-y-2"><span className="block text-xs font-mono uppercase tracking-wider text-gray-400">Email *</span><input className={inputClassName} type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="email@company.com" /></label>
                <label className="space-y-2"><span className="block text-xs font-mono uppercase tracking-wider text-gray-400">Phone</span><input className={inputClassName} type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" /></label>
                <label className="space-y-2"><span className="block text-xs font-mono uppercase tracking-wider text-gray-400">Service *</span><select className={inputClassName} name="service" value={formData.service} onChange={handleChange} required><option>Luxury E-Commerce &amp; Web Apps</option><option>High-Converting Landing Pages</option><option>AI Voice Assistant &amp; Chatbot Setup</option><option>UI/UX Design &amp; Brand System</option></select></label>
                <label className="space-y-2"><span className="block text-xs font-mono uppercase tracking-wider text-gray-400">Budget *</span><select className={inputClassName} name="budget" value={formData.budget} onChange={handleChange} required><option>$1k - $3k</option><option>$3k - $5k</option><option>$5k - $10k</option><option>$10k+ / Enterprise</option></select></label>
                <label className="space-y-2"><span className="block text-xs font-mono uppercase tracking-wider text-gray-400">Timeline *</span><select className={inputClassName} name="timeline" value={formData.timeline} onChange={handleChange} required><option>Within 2-4 Weeks</option><option>Immediate (&lt; 2 Weeks)</option><option>1-2 Months</option><option>Exploring / Flexible</option></select></label>
              </div>
              <label className="block space-y-2"><span className="block text-xs font-mono uppercase tracking-wider text-gray-400">Project details *</span><textarea className={`${inputClassName} resize-none`} name="message" value={formData.message} onChange={handleChange} required rows={6} placeholder="Tell us about your project goals and requirements..." /></label>
              <button type="submit" disabled={status.loading} className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#FF5500] bg-[#FF5500] px-6 py-4 text-sm font-semibold text-white shadow-[0_0_20px_rgba(255,85,0,0.3)] transition-all hover:border-white hover:bg-white hover:text-[#FF5500] disabled:opacity-50">{status.loading ? 'Sending...' : 'Send Message'} {!status.loading && <Send className="h-4 w-4" />}</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
