import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import Button from '../components/Button';
import Hero, { AccentText } from '../components/Hero';
import GlassSelect from '../components/GlassSelect';

const GOOGLE_APPS_SCRIPT_URL = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL;

const initialFormData = {
  name: '',
  email: '',
  phone: '',
  service: 'Luxury E-Commerce & Web Apps',
  budget: '$3k - $5k',
  timeline: 'Within 2-4 Weeks',
  message: '',
  company: ''
};

const inputClassName = 'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/40 focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20';

const serviceOptions = [
  { value: 'Luxury E-Commerce & Web Apps', label: 'Luxury E-Commerce & Web Apps — Starting $1,499' },
  { value: 'High-Converting Landing Pages', label: 'High-Converting Landing Pages — Starting $499' },
  { value: 'AI Voice Assistant & Chatbot Setup', label: 'AI Voice Assistant & Chatbot Setup — Starting $899' },
  { value: 'UI/UX Design & Brand System', label: 'UI/UX Design & Brand System — Starting $599' },
  { value: 'Website Maintenance & Support', label: 'Website Maintenance & Support — $299/mo' },
  { value: 'AI Agent & Voice Bot Management', label: 'AI Agent & Voice Bot Management — $499/mo' },
  { value: 'Performance Marketing & Social Media', label: 'Performance Marketing & Social Media — $599/mo' },
  { value: 'Dedicated Developer Support', label: 'Dedicated Developer Support — $899/mo' },
];

const budgetOptions = [
  { value: '$299 - $999', label: '$299 - $999' },
  { value: '$1k - $3k', label: '$1k - $3k' },
  { value: '$3k - $5k', label: '$3k - $5k' },
  { value: '$5k - $10k', label: '$5k - $10k' },
  { value: '$10k+ / Enterprise', label: '$10k+ / Enterprise' },
];

const timelineOptions = [
  { value: 'Within 2-4 Weeks', label: 'Within 2-4 Weeks' },
  { value: 'Immediate (< 2 Weeks)', label: 'Immediate (Under 2 Weeks)' },
  { value: '1-2 Months', label: '1-2 Months' },
  { value: 'Exploring / Flexible', label: 'Exploring / Flexible' },
];

export default function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    const submitData = new URLSearchParams();
    submitData.append('name', formData.name.trim());
    submitData.append('email', formData.email.trim());
    submitData.append('phone', formData.phone.trim() || '');
    submitData.append('service', formData.service || '');
    submitData.append('budget', formData.budget || '');
    submitData.append('timeline', formData.timeline || '');
    submitData.append('message', formData.message.trim());
    submitData.append('source', 'website');
    submitData.append('company', formData.company.trim() || '');

    try {
      if (!GOOGLE_APPS_SCRIPT_URL) {
        throw new Error('Application endpoint is not configured.');
      }

      console.log('Contact submission payload:', Object.fromEntries(submitData));

      const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        body: submitData
      });

      let result;
      try {
        result = await response.json();
      } catch {
        const text = await response.text();
        console.error('Apps Script response (not JSON):', text);
        throw new Error(`Server error: ${response.status} - ${text.slice(0, 200)}`);
      }

      console.log('Apps Script response:', result);

      if (!response.ok) {
        throw new Error(result?.message || `HTTP ${response.status}: ${response.statusText}`);
      }

      if (!result.success) {
        throw new Error(result.message || 'Unable to process submission. Please check the form data.');
      }

      setStatus({ loading: false, success: true, error: null });
      setFormData(initialFormData);
    } catch (error) {
      console.error('Submission Error:', error);
      const errorMessage = error.message.includes('HTTP') || error.message.includes('Server error')
        ? 'Server configuration error. Please try again later.'
        : 'Something went wrong while sending your message. Please try again.';
      setStatus({ loading: false, success: false, error: errorMessage });
    }
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-transparent px-4 py-12 sm:px-6 sm:py-16 lg:px-8 xl:px-12 text-white">
      <Hero
        title={
          <>
            Let's Build Your Next<br />
            <AccentText>System.</AccentText>
          </>
        }
        subtitle="Tell us what you are building and our engineering team will respond within 24 hours."
        align="left"
        actions={<Button to="/booking" variant="primary" size="lg" showArrow>Book a Call</Button>}
      />

      <div className="mt-10 sm:mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] reveal">
        <aside className="space-y-6">
          <div className="glassmorphic-luxury rounded-3xl p-6 sm:p-8 glow-luxury reveal">
            <h2 className="text-xl font-bold text-white text-gradient-shimmer">Direct reach</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Skip the bureaucracy and speak directly with the developers executing your build.
            </p>
            <div className="mt-8 space-y-5 text-sm text-white/60">
              <a href="mailto:muhammadzaman.dev@gmail.com" className="flex items-center gap-3 transition-colors duration-200 hover:text-orange-500">
                <Mail className="h-5 w-5 text-orange-500" />
                muhammadzaman.dev@gmail.com
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-orange-500" />
                Worldwide, remote-first
              </div>
            </div>
          </div>
        </aside>

        <div className="glassmorphic-luxury rounded-3xl p-6 sm:p-8 shadow-2xl glow-luxury reveal">
          {status.success && (
            <div className="mb-6 flex items-center gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-400">
              <CheckCircle2 className="h-5 w-5 shrink-0" />
              Message received. We will reach out within 24 hours.
            </div>
          )}
          {status.error && (
            <div className="mb-6 flex items-center gap-3 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-400">
              <AlertCircle className="h-5 w-5 shrink-0" />
              {status.error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:gap-8 sm:grid-cols-2">
              <label className="space-y-2">
                <span className="block text-xs font-mono uppercase tracking-wider text-white/50">Name *</span>
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
                <span className="block text-xs font-mono uppercase tracking-wider text-white/50">Email *</span>
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
                <span className="block text-xs font-mono uppercase tracking-wider text-white/50">Phone</span>
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
                <span className="block text-xs font-mono uppercase tracking-wider text-white/50">Service *</span>
                <GlassSelect
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  options={serviceOptions}
                  required
                  ariaLabel="Select service"
                />
              </label>
              <label className="space-y-2">
                <span className="block text-xs font-mono uppercase tracking-wider text-white/50">Budget *</span>
                <GlassSelect
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  options={budgetOptions}
                  required
                  ariaLabel="Select budget"
                />
              </label>
              <label className="space-y-2">
                <span className="block text-xs font-mono uppercase tracking-wider text-white/50">Timeline *</span>
                <GlassSelect
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  options={timelineOptions}
                  required
                  ariaLabel="Select timeline"
                />
              </label>
            </div>
            <label className="space-y-2">
              <span className="block text-xs font-mono uppercase tracking-wider text-white/50">Company</span>
              <input
                className={inputClassName}
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company or organization"
              />
            </label>
            <label className="block space-y-2">
              <span className="block text-xs font-mono uppercase tracking-wider text-white/50">Project details *</span>
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
        </div>
      </div>

      {/* FINAL CTA */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-orange-500/30 glassmorphic-luxury p-6 sm:p-10 lg:p-12 text-center shadow-[0_0_80px_rgba(255,85,0,0.06)] reveal">
          <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10">
            <span className="inline-block text-[10px] font-mono uppercase tracking-[0.3em] text-orange-400 mb-6">// READY TO START</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold uppercase tracking-tight text-white leading-[0.92] mb-8 text-gradient-shimmer">
              LET'S BUILD YOUR NEXT DIGITAL MASTERPIECE
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed">
              Strategic design, custom development, and AI automation that make your business
              feel as premium as the value you deliver.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Button to="/booking" variant="primary" size="lg" showArrow className="min-w-[220px] w-full sm:w-auto">
                Book a Strategy Call
              </Button>
              <Button to="/portfolio" variant="ghost" size="lg" showArrow arrowIcon={ArrowUpRight} className="min-w-[220px] w-full sm:w-auto">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}