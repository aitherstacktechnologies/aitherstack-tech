import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import Hero, { AccentText } from '../components/Hero';
import Button from '../components/Button';

const categories = [
  {
    title: 'Getting Started',
    items: [
      ['Do we need to rebuild our website entirely from scratch?', 'Not at all. We can upgrade your existing website without starting over. High-value modules such as AI voice or chat agents, automation workflows, or a full landing page redesign can be integrated directly into your current setup where possible.'],
      ['What does the onboarding timeline look like?', 'Standard projects take 8-10 business days: Days 1-2 cover Audit & Strategy, including architecture and UI blueprint approval; Days 3-7 cover Build & Integration, including AI agent training and automation setup; Days 8-10 cover testing, deployment, and the team walkthrough.'],
      ['How is a Monthly Retainer different from a One-Time Project?', 'One-Time Projects are fixed-price builds, such as a landing page, e-commerce site, or AI chatbot setup, delivered once. Monthly Retainers are ongoing services such as website maintenance, AI agent management, marketing, or dedicated developer hours, billed monthly for continuous work.'],
    ],
  },
  {
    title: 'Services & Technology',
    items: [
      ['How accurate are your AI Voice Assistants and Chatbots? Can they give wrong info?', 'Accuracy exceeds 98% thanks to custom knowledge bases and strict system guardrails. The AI speaks based on your specific business data, including services, pricing, and policies. If it gets an unscripted question, it collects the visitor\'s contact details and routes the lead to your team instead of guessing.'],
      ["What's actually included in AI Agent & Voice Bot Management?", 'Ongoing maintenance of your Vapi AI or LLM voice agent, response optimization based on real conversations, new workflow integrations as your business grows, conversation log analysis, and API token or key management.'],
      ['What does Standard Website Maintenance & Support actually cover?', 'Weekly dependency updates, speed optimization, bug fixes, automated database or Supabase backups, downtime monitoring, and up to 2 minor UI updates per month.'],
      ["We're a growing SaaS/e-commerce brand - can you just work as our dev team?", 'Yes. Dedicated Full-Stack & UI/UX Developer Support provides a set number of developer hours each month for continuous feature rollouts rather than a one-off project.'],
      ['What tech do you build with?', 'It depends on the project. We use React, Vite, and Tailwind for fast frontends; Node.js or Express with Supabase or PostgreSQL for backends; n8n or Make.com for automation; and Vapi AI for voice agents. The stack is matched to what the project needs, not a one-size-fits-all template.'],
    ],
  },
  {
    title: 'Pricing & Payment',
    items: [
      ["Why are your prices different from a regular freelancer's?", 'Most freelancers deliver an isolated design or basic script. We build a complete system: modern UI, AI agents, automation, and ongoing support working together. The extra leads and time saved from that system can cover the initial cost within the first few weeks.'],
      ['Is the Monthly Retainer mandatory after a one-time project?', 'No. It is completely optional. You own the code outright once payment is complete. Many clients keep a retainer so our team handles third-party API updates, AI tuning, and maintenance while they focus on running their business.'],
      ['Can we cancel a monthly retainer anytime?', 'Yes. Cancel anytime with no notice period required. Cancellation takes effect at the end of your current billing cycle, and you keep everything already delivered.'],
    ],
  },
  {
    title: 'Policies',
    items: [
      ["What's your refund policy on one-time projects?", 'A full refund is available if you cancel during the Audit & Strategy phase (Days 1-2). Once Build & Integration begins (Day 3 onward), the project is final because development resources are already committed.'],
      ['When do we actually own the code/design?', 'Full ownership and IP transfer to you once payment has fully cleared, not before. Until then, we retain ownership of the build.'],
      ['What happens if something breaks after launch?', 'Every project includes 14 days of free post-launch bug-fix support. Beyond that, ongoing coverage requires an active monthly retainer for uptime monitoring, error tracking, and continuous tuning.'],
      ['What third-party tools does my project depend on, and what if they go down?', 'Depending on your project, we may use Supabase, Cal.com, Google Sheets or CRM, and Vapi AI. We are not liable for outages on their end, but active retainer clients receive direct help resolving issues.'],
    ],
  },
  {
    title: 'Data & Privacy',
    items: [
      ['What client data do you actually store, and where?', 'Contact form and booking details via Cal.com, CRM or business data connected through Google Sheets, and project records in our Supabase database. Full detail is available in our Privacy Policy.'],
      ['Do you track visitors with cookies or analytics?', 'Not currently. No cookies or analytics are running on this site as of now. If that changes, our Privacy Policy will be updated in advance.'],
    ],
  },
];

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(null);

  return (
    <div className="min-h-screen overflow-x-hidden bg-transparent text-ast-ivory pt-12">
      <Hero
        eyebrow="// FREQUENTLY ASKED QUESTIONS"
        title={
          <>
            Frequently Asked<br />
            <AccentText>Questions.</AccentText>
          </>
        }
        subtitle="The practical answers about our projects, retainers, technology, and policies."
        align="left"
        compact
      />
      <section className="py-12 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {categories.map((category, catIndex) => (
            <motion.section
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: catIndex * 0.1 }}
            >
              <h2 className="text-xs font-mono uppercase tracking-widest text-ast-peach mb-4">{category.title}</h2>
              <div className="space-y-3">
                {category.items.map(([question, answer], itemIndex) => {
                  const key = `${category.title}-${question}`;
                  const isOpen = openQuestion === key;
                  return (
                    <motion.div
                      key={question}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: catIndex * 0.1 + itemIndex * 0.03 }}
                      className="glassmorphic-card border border-ast-border rounded-xl overflow-hidden transition-all duration-200 hover:border-ast-warm-orange/40"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenQuestion(isOpen ? null : key)}
                        aria-expanded={isOpen}
                        className="w-full flex items-center justify-between gap-6 text-left px-5 py-5 text-ast-ivory font-semibold hover:text-ast-peach transition-colors"
                      >
                        <span>{question}</span>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-5 h-5 shrink-0 text-ast-peach" />
                        </motion.div>
                      </button>
                      <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                        <div className="overflow-hidden">
                          <p className="px-5 pb-5 text-sm leading-relaxed text-ast-muted">{answer}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          className="relative overflow-hidden rounded-3xl border border-ast-border bg-gradient-to-b from-ast-surface/50 to-ast-bg/10 p-6 sm:p-10 lg:p-12 text-center shadow-[0_0_80px_rgba(243,107,63,0.06)] will-change-transform"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-ast-warm-orange/10 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-4xl font-bold uppercase tracking-tight text-ast-ivory sm:text-6xl leading-[0.92] mb-8">
              HAVE MORE QUESTIONS?
            </h2>
            <p className="text-lg text-ast-muted max-w-2xl mx-auto mb-12 leading-relaxed">
              We're happy to answer any questions about our projects, retainers, or technology.
            </p>
            <Button to="/booking" variant="primary" size="lg" showArrow className="mt-10">
              Book a Call
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}