import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Web Development',
    budget: '$1k - $3k',
    message: '',
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));

      setStatus({ loading: false, success: true, error: null });
      setFormData({
        name: '',
        email: '',
        service: 'Web Development',
        budget: '$1k - $3k',
        message: '',
      });
    } catch (err) {
      console.error('Submission error:', err);
      setStatus({
        loading: false,
        success: false,
        error: 'Failed to submit request. Please try again or book directly.',
      });
    }
  };

  return (
    <section className="relative bg-sunset-bg text-sunset-text py-24 px-6 sm:px-8 lg:px-12 border-b border-sunset-border overflow-hidden">
      <div
        className="absolute bottom-10 right-0 pointer-events-none select-none text-watermark z-0 opacity-[0.04]"
        aria-hidden="true"
      >
        CONTACT
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sunset-pop mb-3">
              <span className="w-2 h-2 rounded-full bg-sunset-pop" />
              Get In Touch
            </div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight uppercase mb-6">
              Let's Build Your <br />
              Next System.
            </h2>
            <p className="text-base text-sunset-muted leading-relaxed mb-8">
              Have a web project, custom AI workflow, or internal software tool in mind? Fill out the inquiry form or schedule a direct consultation call.
            </p>
          </div>

          <div className="p-6 bg-sunset-surface border border-sunset-border rounded-lg">
            <h3 className="text-sm font-bold uppercase tracking-wider mb-2">
              Prefer an Instant Discussion?
            </h3>
            <p className="text-xs text-sunset-muted leading-relaxed mb-4">
              Skip the email delay and reserve a 15-minute introductory technical call directly on our calendar.
            </p>
            <a
              href="/book"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase font-bold text-sunset-pop hover:text-sunset-muted transition-colors"
            >
              <span>Schedule via Cal.com</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-7 bg-sunset-surface border border-sunset-border p-8 sm:p-10 rounded-lg">
          {status.success ? (
            <div className="py-12 text-center flex flex-col items-center justify-center space-y-4 animate-fade-in">
              <CheckCircle2 className="w-12 h-12 text-sunset-pop" />
              <h3 className="text-2xl font-bold tracking-tight">Message Received</h3>
              <p className="text-sm text-sunset-muted max-w-md">
                Thank you for reaching out. Our team will review your project requirements and respond within 24 hours.
              </p>
              <button
                onClick={() => setStatus((prev) => ({ ...prev, success: false }))}
                className="mt-4 px-6 py-2.5 rounded border border-sunset-border text-xs font-mono uppercase font-bold hover:bg-sunset-bg transition-colors"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {status.error && (
                <div className="p-4 rounded border border-red-500/30 bg-red-500/10 text-red-400 text-xs flex items-center gap-3">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{status.error}</span>
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-sunset-muted mb-2">
                  Full Name / Business Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full bg-sunset-bg border border-sunset-border rounded-md px-4 py-3 text-sm text-sunset-text focus-sunset transition-colors placeholder:text-sunset-muted/50"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-sunset-muted mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  className="w-full bg-sunset-bg border border-sunset-border rounded-md px-4 py-3 text-sm text-sunset-text focus-sunset transition-colors placeholder:text-sunset-muted/50"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="service" className="block text-xs font-mono uppercase tracking-wider text-sunset-muted mb-2">
                    Primary Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-sunset-bg border border-sunset-border rounded-md px-4 py-3 text-sm text-sunset-text focus-sunset transition-colors"
                  >
                    <option value="Web Development">Web Engineering</option>
                    <option value="AI Systems & Automation">AI Agents & Automation</option>
                    <option value="Business Software">Custom Portals & Software</option>
                    <option value="Integrations & Security">Third-Party & Security Setup</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-xs font-mono uppercase tracking-wider text-sunset-muted mb-2">
                    Estimated Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-sunset-bg border border-sunset-border rounded-md px-4 py-3 text-sm text-sunset-text focus-sunset transition-colors"
                  >
                    <option value="< $1k">&lt; $1,000</option>
                    <option value="$1k - $3k">$1,000 - $3,000</option>
                    <option value="$3k - $10k">$3,000 - $10,000</option>
                    <option value="$10k+">$10,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-sunset-muted mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project goals, timelines, and technical requirements..."
                  className="w-full bg-sunset-bg border border-sunset-border rounded-md px-4 py-3 text-sm text-sunset-text focus-sunset transition-colors resize-none placeholder:text-sunset-muted/50"
                />
              </div>

              <button
                type="submit"
                disabled={status.loading}
                className="w-full inline-flex items-center justify-center gap-2 bg-sunset-pop text-sunset-bg py-4 rounded-md font-bold text-sm uppercase tracking-wider transition-all duration-200 hover:bg-sunset-pop/90 disabled:opacity-60 focus-sunset"
              >
                {status.loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Submitting Request...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Project Inquiry</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
