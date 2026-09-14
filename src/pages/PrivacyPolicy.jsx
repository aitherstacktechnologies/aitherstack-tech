import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';

const sections = [
  ['collect', 'What We Collect', 'Your contact info, booking details, and any project data you share with us.', 'Contact form submissions (name, email, message, and service interest); booking details via Cal.com (name, email, and meeting time); business or CRM data you provide access to via Google Sheets integrations for automation and AI-agent setup; and project data stored in our Supabase database, including client records and project status.'],
  ['why', 'Why We Collect It', "To respond to you, schedule calls, and deliver what you've hired us for.", 'We collect and use this information to respond to inquiries, schedule calls, deliver contracted services such as AI-agent knowledge bases and automation pipelines, and maintain accurate project records.'],
  ['processors', 'Third-Party Processors', 'We use Supabase, Cal.com, and Google Workspace to run these services.', 'We use Supabase for database hosting, Cal.com for scheduling, and Google Workspace for Sheets and CRM sync to operate these services. Each provider has its own privacy policy governing the data it processes on our behalf.'],
  ['retention', 'Data Retention', 'We keep project data for the engagement plus 12 months after, unless you are on an active retainer.', 'Client project data is retained for the duration of the engagement plus 12 months after project completion, then deleted unless a retainer is active or a longer period is required by law or needed to resolve an open matter.'],
  ['international', 'International Clients', 'As an international agency, your data may be processed outside your home country; we take reasonable steps to keep it secure.', 'As we serve clients in the US, UK, EU, and Australia, data may be processed outside your home country through the platforms above. We take reasonable steps to protect it in transit and storage and limit access to people and services that need it for the engagement.'],
  ['rights', 'Your Rights', 'You can ask us to access, fix, or delete your data anytime.', 'You can request access to, correction of, or deletion of your data at any time by contacting muhammadzaman.dev@gmail.com. We may need to verify your identity before completing a request, and legal or contractual obligations may limit what we can delete immediately.'],
  ['cookies', 'Cookies & Analytics', "We don't currently use cookies or analytics on this site.", 'We do not currently use cookies, tracking pixels, or analytics services such as Google Analytics on this site. If that changes in the future, this policy will be updated in advance and the last updated date will reflect it.'],
  ['security', 'Security', "We use standard access controls; we don't store payment details ourselves.", "We use industry-standard access controls on Supabase and do not store payment card details directly. Payment card details are handled by Stripe once payments go live. No online system can guarantee absolute security, but we work to reduce unauthorized access and exposure."],
  ['contact', 'Contact', 'Questions? Reach out directly.', 'Questions about this policy can be sent to muhammadzaman.dev@gmail.com.'],
];

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState(sections[0][0]);
  const [isJumpMenuOpen, setIsJumpMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: '-18% 0px -65% 0px', threshold: 0 });
    sections.forEach(([id]) => document.getElementById(id) && observer.observe(document.getElementById(id)));
    return () => observer.disconnect();
  }, []);

  const jumpToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveSection(id);
    setIsJumpMenuOpen(false);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-transparent text-ast-text pt-16">
      <Hero
        eyebrow="// LEGAL"
        title="Privacy Policy."
        subtitle="What we collect, why, and how it's handled."
        align="left"
        compact
        showScroll={false}
      >
        <Link to="/" className="mb-8 inline-flex items-center gap-2 text-ast-muted hover:text-ast-accent transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-mono">Back to Home</span>
        </Link>
        <span className="inline-flex text-xs font-mono text-ast-muted border border-ast-border bg-ast-surface/80 rounded-full px-3 py-1">Last updated: September 8, 2026</span>
      </Hero>

      <section className="py-12 sm:py-16 px-6 sm:px-8 lg:px-12 section-gradient-bg-alt">
        <div className="max-w-5xl mx-auto">
          <div className="lg:hidden mb-8 relative">
            <button
              type="button"
              onClick={() => setIsJumpMenuOpen((open) => !open)}
              className="w-full flex items-center justify-between glassmorphic-card border border-ast-border px-4 py-3 text-left text-sm font-medium text-ast-text"
              aria-expanded={isJumpMenuOpen}
            >
              Jump to section
              <motion.div animate={{ rotate: isJumpMenuOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown className="w-4 h-4 text-ast-accent" />
              </motion.div>
            </button>
            {isJumpMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute z-20 w-full border border-ast-border bg-ast-surface shadow-xl"
              >
                {sections.map(([id, title], index) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => jumpToSection(id)}
                    className={`block w-full px-4 py-3 text-left text-sm transition-colors ${
                      activeSection === id
                        ? 'bg-ast-accent/10 text-ast-accent'
                        : 'text-ast-muted hover:bg-ast-surface/50'
                    }`}
                  >
                    {String(index + 1).padStart(2, '0')} / {title}
                  </button>
                ))}
              </motion.div>
            )}
          </div>
          <div className="lg:grid lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-16">
            <aside className="hidden lg:block">
              <nav className="sticky top-28" aria-label="Privacy Policy sections">
                <p className="text-xs uppercase tracking-widest text-ast-muted font-mono mb-4">Contents</p>
                <div className="space-y-1 border-l border-ast-border">
                  {sections.map(([id, title], index) => (
                    <button
                      key={id}
                      type="button"
                      onClick={() => jumpToSection(id)}
                      className={`block w-full border-l-2 -ml-px px-3 py-2 text-left text-xs transition-colors duration-300 ${
                        activeSection === id
                          ? 'border-ast-accent text-ast-accent'
                          : 'border-transparent text-ast-muted hover:text-ast-text'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')} <span className="ml-1">{title}</span>
                    </button>
                  ))}
                </div>
              </nav>
            </aside>
            <main className="min-w-0 space-y-6">
              {sections.map(([id, title, summary, body], index) => (
                <motion.article
                  id={id}
                  key={id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ delay: index * 0.05 }}
                  className="scroll-mt-28 glassmorphic-card border border-ast-border rounded-xl p-6 sm:p-8"
                >
                  <div className="flex items-start gap-4 mb-5">
                    <span className="text-xs font-mono text-ast-accent pt-1">{String(index + 1).padStart(2, '0')}</span>
                    <h2 className="text-xl sm:text-2xl font-bold text-ast-text">{title}</h2>
                  </div>
                  <div className="border-l-2 border-ast-accent bg-ast-accent/5 px-4 py-3 mb-6">
                    <p className="text-sm text-ast-muted leading-relaxed">
                      <span className="font-semibold text-ast-accent">In short:</span> {summary}
                    </p>
                  </div>
                  <p className="text-ast-muted leading-relaxed">{body}</p>
                </motion.article>
              ))}
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}