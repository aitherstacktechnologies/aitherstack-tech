import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown } from 'lucide-react';

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
    <div className="min-h-screen overflow-x-hidden pt-16">
      <section className="relative py-16 px-6 sm:px-8 lg:px-12 border-b border-ast-stone/30">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="max-w-5xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"><ArrowLeft className="w-4 h-4" /><span className="text-sm font-mono">Back to Home</span></Link>
          <span className="text-xs font-mono uppercase tracking-widest text-ast-accent mb-4 block">// LEGAL</span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight uppercase mb-4">Privacy Policy</h1>
          <span className="inline-flex text-xs font-mono text-gray-300 border border-ast-stone/50 bg-ast-surface/80 rounded-full px-3 py-1 mb-4">Last updated: September 8, 2026</span>
          <p className="text-gray-400 max-w-xl">What we collect, why, and how it's handled.</p>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-6 sm:px-8 lg:px-12"><div className="max-w-5xl mx-auto">
        <div className="lg:hidden mb-8 relative"><button type="button" onClick={() => setIsJumpMenuOpen((open) => !open)} className="w-full flex items-center justify-between border border-ast-stone/50 bg-ast-surface px-4 py-3 text-left text-sm font-medium text-white" aria-expanded={isJumpMenuOpen}>Jump to section <ChevronDown className={`w-4 h-4 transition-transform ${isJumpMenuOpen ? 'rotate-180' : ''}`} /></button>
          {isJumpMenuOpen && <div className="absolute z-20 w-full border-x border-b border-ast-stone/50 bg-ast-surface shadow-xl">{sections.map(([id, title], index) => <button type="button" key={id} onClick={() => jumpToSection(id)} className={`block w-full px-4 py-3 text-left text-sm transition-colors hover:bg-ast-surface-2 ${activeSection === id ? 'text-ast-accent' : 'text-gray-400'}`}>{String(index + 1).padStart(2, '0')} / {title}</button>)}</div>}
        </div>
        <div className="lg:grid lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-16">
          <aside className="hidden lg:block"><nav className="sticky top-28" aria-label="Privacy Policy sections"><p className="text-xs uppercase tracking-widest text-gray-600 font-mono mb-4">Contents</p><div className="space-y-1 border-l border-ast-stone/50">{sections.map(([id, title], index) => <button type="button" key={id} onClick={() => jumpToSection(id)} className={`block w-full border-l-2 -ml-px px-3 py-2 text-left text-xs transition-colors duration-300 ${activeSection === id ? 'border-ast-accent text-ast-accent' : 'border-transparent text-gray-500 hover:text-gray-200'}`}>{String(index + 1).padStart(2, '0')} <span className="ml-1">{title}</span></button>)}</div></nav></aside>
          <main className="min-w-0 space-y-6">{sections.map(([id, title, summary, body], index) => <article id={id} key={id} className="scroll-mt-28 border border-ast-stone/30 bg-ast-surface/50 rounded-xl p-6 sm:p-8 animate-slide-up"><div className="flex items-start gap-4 mb-5"><span className="text-xs font-mono text-ast-accent pt-1">{String(index + 1).padStart(2, '0')}</span><h2 className="text-xl sm:text-2xl font-bold text-white">{title}</h2></div><div className="border-l-2 border-ast-accent bg-orange-500/5 px-4 py-3 mb-6"><p className="text-sm text-gray-200 leading-relaxed"><span className="font-semibold text-ast-accent">In short:</span> {summary}</p></div><p className="text-gray-400 leading-relaxed">{body}</p></article>)}</main>
        </div>
      </div></section>
    </div>
  );
}