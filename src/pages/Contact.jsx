import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabaseClient';
import Button from '../components/Button';
import Hero from '../components/Hero';

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

const inputClassName = 'w-full rounded-xl border border-ast-border bg-ast-surface/50 px-4 py-3 text-sm text-ast-text outline-none transition-colors placeholder:text-ast-muted focus:border-ast-accent/50';

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
    <main className="min-h-screen overflow-x-hidden bg-transparent px-6 pb-20 pt-28 text-ast-text sm:px-8 lg:px-12">
      <Hero
        eyebrow="// INQUIRIES OPEN"
        title="Let's Build Your Next System."
        subtitle="Tell us what you are building and our engineering team will respond within 24 hours."
        align="left"
        actions={<Button as="a" href="/booking" variant="primary" size="lg" showArrow>Book a Call</Button>}
      />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]"
        >
          <aside className="space-y-6">
            <div className="glassmorphic-luxury rounded-3xl p-8 glow-luxury">
              <h2 className="text-xl font-bold text-ast-text">Direct reach</h2>
              <p className="mt-3 text-sm leading-relaxed text-ast-muted">
                Skip the bureaucracy and speak directly with the developers executing your build.
              </p>
              <div className="mt-8 space-y-5 text-sm text-ast-muted">
                <a href="mailto:muhammadzaman.dev@gmail.com" className="flex items-center gap-3 transition-colors duration-200 hover:text-ast-accent">
                  <Mail className="h-5 w-5 text-ast-accent" />
                  muhammadzaman.dev@gmail.com
                </a>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-ast-accent" />
                  Worldwide, remote-first
                </div>
              </div>
            </div>
          </aside>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            className="glassmorphic-luxury rounded-3xl p-8 shadow-2xl sm:p-10 glow-luxury"
          >
            {status.success && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 flex items-center gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-400"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0" />
                Message received. We will reach out within 24 hours.
              </motion.div>
            )}
            {status.error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 flex items-center gap-3 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-400"
              >
                <AlertCircle className="h-5 w-5 shrink-0" />
                {status.error}
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="block text-xs font-mono uppercase tracking-wider text-ast-muted">Name *</span>
                  <input
                    className={inputClassName}
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </label>
                <label className="space-y-2">
                  <span className="block text-xs font-mono uppercase tracking-wider text-ast-muted">Email *</span>
                  <input
                    className={inputClassName}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="email@company.com"
                  />
                </label>
                <label className="space-y-2">
                  <span className="block text-xs font-mono uppercase tracking-wider text-ast-muted">Phone</span>
                  <input
                    className={inputClassName}
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                  />
                </label>
                <label className="space-y-2">
                  <span className="block text-xs font-mono uppercase tracking-wider text-ast-muted">Service *</span>
                  <select className={inputClassName} name="service" value={formData.service} onChange={handleChange} required>
                    <option>Luxury E-Commerce &amp; Web Apps</option>
                    <option>High-Converting Landing Pages</option>
                    <option>AI Voice Assistant &amp; Chatbot Setup</option>
                    <option>UI/UX Design &amp; Brand System</option>
                    <option>Website Maintenance &amp; Support</option>
                    <option>AI Agent &amp; Voice Bot Management</option>
                    <option>Performance Marketing &amp; Social Media</option>
                    <option>Dedicated Developer Support</option>
                  </select>
                </label>
                <label className="space-y-2">
                  <span className="block text-xs font-mono uppercase tracking-wider text-ast-muted">Budget *</span>
                  <select className={inputClassName} name="budget" value={formData.budget} onChange={handleChange} required>
                    <option>$1k - $3k</option>
                    <option>$3k - $5k</option>
                    <option>$5k - $10k</option>
                    <option>$10k+ / Enterprise</option>
                  </select>
                </label>
                <label className="space-y-2">
                  <span className="block text-xs font-mono uppercase tracking-wider text-ast-muted">Timeline *</span>
                  <select className={inputClassName} name="timeline" value={formData.timeline} onChange={handleChange} required>
                    <option>Within 2-4 Weeks</option>
                    <option>Immediate (&lt; 2 Weeks)</option>
                    <option>1-2 Months</option>
                    <option>Exploring / Flexible</option>
                  </select>
                </label>
              </div>
              <label className="block space-y-2">
                <span className="block text-xs font-mono uppercase tracking-wider text-ast-muted">Project details *</span>
                <textarea
                  className={`${inputClassName} resize-none`}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell us about your project goals and requirements..."
                />
              </label>
              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                disabled={status.loading}
                showArrow
              >
                {status.loading ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </motion.div>
        </motion.div>
    </main>
  );
}
