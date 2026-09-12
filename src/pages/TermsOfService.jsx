import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown } from 'lucide-react';

const sections = [
  ['services', 'Services', 'We offer one-time projects and monthly retainers, scoped per your quote.', 'One-time projects and Monthly Retainers (Starter, Growth, and Pro) are scoped per the written quote or invoice for that engagement. The applicable quote or invoice defines the deliverables, milestones, revisions, and fees for the service selected.'],
  ['payment', 'Payment', 'Payment is due before we start; retainers bill monthly in advance.', 'Full payment or the agreed deposit is due before work begins on one-time projects. Retainers are billed monthly in advance through Stripe. We may pause work or access to project deliverables if an invoice remains unpaid.'],
  ['refunds', 'Refunds', 'Full refund if you cancel before build starts (Days 1-2); final after that.', 'A full refund is available if the client cancels during the Audit & Strategy phase (Days 1-2). Once Build & Integration begins (Day 3 onward), the project is non-refundable because development resources are already committed.'],
  ['ownership', 'Ownership & IP', 'You own the code once payment fully clears, not before.', 'All code, designs, and configurations transfer to the client only once full payment has cleared. Until then, Aither Stack retains ownership and may withhold delivery or access. You retain ownership of materials you provide and grant us permission to use them solely to perform the agreed services.'],
  ['retainer-cancellation', 'Retainer Cancellation', 'Cancel anytime, no notice needed; it takes effect at the end of the billing cycle.', 'Retainers may be cancelled at any time with no notice period required. Cancellation takes effect at the end of the current billing cycle. No partial-month refund is issued for a cycle already in progress.'],
  ['timelines', 'Timelines', 'Standard build is 8-10 business days; delays on your end extend it.', 'Standard onboarding is 8-10 business days (Audit -> Build -> Testing/Handoff), as outlined on the Process page. Delays caused by late client feedback, content, access, or approvals extend this timeline accordingly.'],
  ['dependencies', 'Third-Party Dependencies', "We rely on Supabase, Cal.com, and your CRM or Sheets; we'll help fix retainer issues, but cannot control their outages.", 'Our work may depend on third-party services such as Supabase, Cal.com, payment processors, hosting providers, CRMs, and Google Sheets. We are not responsible for outages, policy changes, rate limits, data loss, or other failures caused by those providers. For active retainer clients, we will reasonably assist with diagnosing and adapting integrations; work beyond the agreed retainer scope may be quoted separately.'],
  ['support', 'Post-Launch Support', 'Every project includes 14 free days of bug fixes after launch.', 'Each project includes 14 calendar days of post-launch support for reproducing and fixing bugs in the delivered work. Support does not include new features, content changes, third-party outages, changes to client systems, or issues caused by modifications made after handoff. Those requests may be handled under a retainer or a separate quote.'],
  ['liability', 'Liability', 'Our liability is capped at what you paid for that specific service.', 'To the maximum extent permitted by Pakistani law, Aither Stack Technologies will not be liable for indirect, incidental, special, consequential, or punitive damages, or for lost profits, revenue, data, or business opportunities. Our total liability arising from a specific service is limited to the amount you paid for that service during the six months before the event giving rise to the claim.'],
  ['governing-law', 'Governing Law', 'These terms follow Pakistani law.', 'These Terms are governed by the laws of Pakistan, without regard to conflict-of-law rules. The parties will first try to resolve any dispute through good-faith negotiation. If negotiation does not resolve the dispute within 30 days, the courts located in Lahore, Pakistan will have exclusive jurisdiction.'],
  ['changes', 'Changes to Terms', "We'll email active clients before any changes take effect.", 'We may update these Terms from time to time. We will email active clients about material changes before they take effect. The updated Terms will apply to new engagements and to ongoing services after the stated effective date; the version accepted for a completed project continues to govern that project unless we agree otherwise in writing.'],
];

export default function TermsOfService() {
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
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight uppercase mb-4">Terms of Service</h1>
          <span className="inline-flex text-xs font-mono text-gray-300 border border-ast-stone/50 bg-ast-surface/80 rounded-full px-3 py-1 mb-4">Last updated: September 8, 2026</span>
          <p className="text-gray-400 max-w-xl">The straightforward rules for working with Aither Stack.</p>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-6 sm:px-8 lg:px-12"><div className="max-w-5xl mx-auto">
        <div className="lg:hidden mb-8 relative"><button type="button" onClick={() => setIsJumpMenuOpen((open) => !open)} className="w-full flex items-center justify-between border border-ast-stone/50 bg-ast-surface px-4 py-3 text-left text-sm font-medium text-white" aria-expanded={isJumpMenuOpen}>Jump to section <ChevronDown className={`w-4 h-4 transition-transform ${isJumpMenuOpen ? 'rotate-180' : ''}`} /></button>
          {isJumpMenuOpen && <div className="absolute z-20 w-full border-x border-b border-ast-stone/50 bg-ast-surface shadow-xl">{sections.map(([id, title], index) => <button type="button" key={id} onClick={() => jumpToSection(id)} className={`block w-full px-4 py-3 text-left text-sm transition-colors hover:bg-ast-surface-2 ${activeSection === id ? 'text-ast-accent' : 'text-gray-400'}`}>{String(index + 1).padStart(2, '0')} / {title}</button>)}</div>}
        </div>
        <div className="lg:grid lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-16">
          <aside className="hidden lg:block"><nav className="sticky top-28" aria-label="Terms sections"><p className="text-xs uppercase tracking-widest text-gray-600 font-mono mb-4">Contents</p><div className="space-y-1 border-l border-ast-stone/50">{sections.map(([id, title], index) => <button type="button" key={id} onClick={() => jumpToSection(id)} className={`block w-full border-l-2 -ml-px px-3 py-2 text-left text-xs transition-colors duration-300 ${activeSection === id ? 'border-ast-accent text-ast-accent' : 'border-transparent text-gray-500 hover:text-gray-200'}`}>{String(index + 1).padStart(2, '0')} <span className="ml-1">{title}</span></button>)}</div></nav></aside>
          <main className="min-w-0 space-y-6">{sections.map(([id, title, summary, body], index) => <article id={id} key={id} className="scroll-mt-28 border border-ast-stone/30 bg-ast-surface/50 rounded-xl p-6 sm:p-8 animate-slide-up"><div className="flex items-start gap-4 mb-5"><span className="text-xs font-mono text-ast-accent pt-1">{String(index + 1).padStart(2, '0')}</span><h2 className="text-xl sm:text-2xl font-bold text-white">{title}</h2></div><div className="border-l-2 border-ast-accent bg-orange-500/5 px-4 py-3 mb-6"><p className="text-sm text-gray-200 leading-relaxed"><span className="font-semibold text-ast-accent">In short:</span> {summary}</p></div><p className="text-gray-400 leading-relaxed">{body}</p></article>)}</main>
        </div>
      </div></section>
    </div>
  );
}
