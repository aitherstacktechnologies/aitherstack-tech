import React, { useState } from 'react';
import { Send, MapPin, Mail, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'muhammadzaman.dev@gmail.com',
    href: 'mailto:muhammadzaman.dev@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Worldwide (Remote)',
    href: null,
  },
  {
    icon: Clock,
    label: 'Availability',
    value: 'Mon-Fri, 9AM-6PM EST',
    href: null,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    console.log('Sending data to Supabase:', {
      name: formData.name,
      email: formData.email,
      company: formData.company,
      service: formData.service,
      budget: formData.budget,
      message: formData.message,
    });

    try {
      const { data, error: supabaseError } = await supabase
        .from('contacts')
        .insert([
          {
            id: crypto.randomUUID(),
            name: formData.name,
            email: formData.email,
            company: formData.company || null,
            service: formData.service || null,
            budget: formData.budget || null,
            message: formData.message,
          },
        ])
        .select();

      if (supabaseError) {
        console.error('Supabase Insertion Error:', supabaseError);
        setError('Failed to send message. Please try again or email us directly.');
        setIsSubmitting(false);
        return;
      }

      console.log('Supabase Insertion Success:', data);

      if (import.meta.env.VITE_GOOGLE_SHEETS_ENDPOINT) {
        fetch(import.meta.env.VITE_GOOGLE_SHEETS_ENDPOINT, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        })
          .then(() => console.log('Sheet request sent successfully'))
          .catch(err => console.error('Sheet fetch error:', err));
      }

      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', company: '', service: '', budget: '', message: '' });
    } catch (err) {
      console.error('Unexpected Error:', err);
      setError('An unexpected error occurred. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-16">
      <section className="relative py-24 px-6 sm:px-8 lg:px-12 border-b border-ast-stone">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-ast-accent mb-4 block">
              // CONTACT US
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              Have a project in mind? Send us a message and we'll get back to you within 24 hours. For immediate assistance, email us directly at{' '}
              <a href="mailto:muhammadzaman.dev@gmail.com" className="text-ast-accent hover:underline break-all">
                muhammadzaman.dev@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="mb-8">
                <h2 className="text-xl font-bold text-white mb-6">Send a Message</h2>
                {submitted ? (
                  <div className="border border-ast-stone bg-ast-surface p-8 rounded-lg text-center animate-fade-in">
                    <CheckCircle2 className="w-12 h-12 text-ast-accent mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-sm text-gray-400">We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                        {error}
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-ast-surface border border-ast-stone rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-ast-accent transition-colors"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-ast-surface border border-ast-stone rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-ast-accent transition-colors"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-ast-surface border border-ast-stone rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-ast-accent transition-colors"
                          placeholder="Acme Inc."
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">
                          Service Interest
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-ast-surface border border-ast-stone rounded-lg text-white focus:outline-none focus:border-ast-accent transition-colors"
                        >
                          <option value="">Select a service</option>
                          <option value="web">Web Development</option>
                          <option value="ai">AI Systems & Automation</option>
                          <option value="software">Business Software</option>
                          <option value="integrations">Integrations & APIs</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">
                          Budget Range
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-ast-surface border border-ast-stone rounded-lg text-white focus:outline-none focus:border-ast-accent transition-colors"
                        >
                          <option value="">Select budget</option>
                          <option value="$1k - $3k">$1k - $3k</option>
                          <option value="$3k - $5k">$3k - $5k</option>
                          <option value="$5k - $10k">$5k - $10k</option>
                          <option value="$10k+">$10k+</option>
                          <option value="Custom / Flexible">Custom / Flexible</option>
                        </select>
                      </div>
                      <div></div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-ast-surface border border-ast-stone rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-ast-accent transition-colors resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 bg-ast-accent text-white px-8 py-4 rounded-lg font-bold text-base transition-all duration-300 hover:bg-ast-accent-hover disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

              <div className="border border-ast-stone bg-ast-surface p-6 rounded-lg">
                <h3 className="text-sm font-mono uppercase tracking-wider text-gray-400 mb-4">
                  // CONTACT INFO
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg border border-ast-stone bg-ast-bg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-ast-accent" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-gray-500 block">{info.label}</span>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-sm text-white hover:text-ast-accent transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span className="text-sm text-white">{info.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="border border-ast-stone bg-ast-surface p-8 rounded-lg">
                <h3 className="text-lg font-bold text-white mb-4">
                  Prefer to Chat in Real-Time?
                </h3>
                <p className="text-gray-400 mb-6">
                  Schedule a free 30-minute consultation to discuss your project requirements and get actionable insights.
                </p>
                <Link
                  to="/booking"
                  className="inline-flex items-center gap-2 bg-ast-accent text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 hover:bg-ast-accent-hover"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <div className="border border-ast-stone bg-ast-surface p-8 rounded-lg">
                <h3 className="text-lg font-bold text-white mb-4">
                  Direct Email
                </h3>
                <p className="text-gray-400 mb-4">
                  For immediate assistance, reach out to us directly:
                </p>
                <a 
                  href="mailto:muhammadzaman.dev@gmail.com" 
                  className="text-xl text-ast-accent hover:underline font-bold break-all"
                >
                  muhammadzaman.dev@gmail.com
                </a>
              </div>

              <div className="border border-ast-stone bg-ast-surface p-8 rounded-lg">
                <h3 className="text-sm font-mono uppercase tracking-wider text-gray-400 mb-4">
                  // RESPONSE TIME
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Email</span>
                    <span className="text-sm text-white font-medium">Within 24 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Consultation</span>
                    <span className="text-sm text-white font-medium">Book instantly</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Urgent</span>
                    <span className="text-sm text-ast-accent font-medium">Email directly</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
