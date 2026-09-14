import React from 'react';
import { ArrowLeft, ArrowUpRight, CalendarClock, Check, Clock3, Video } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CalBooking from '../components/CalBooking';
import Hero from '../components/Hero';

export default function Booking() {
  return (
    <main className="min-h-screen overflow-hidden bg-transparent pt-16 text-ast-text">
      <Hero
        eyebrow="// A CONVERSATION WITH THE BUILD TEAM"
        title="Bring the Next Version into Focus."
        subtitle="Choose a time for a practical strategy call. We will map the opportunity, pressure-test the scope, and leave you with a clear next move."
        align="left"
        compact
        showScroll={false}
      >
        <Link to="/" className="mb-8 inline-flex items-center gap-2 text-sm text-ast-muted transition-colors hover:text-ast-accent">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to home</span>
        </Link>
      </Hero>

      <section className="px-6 py-12 sm:px-8 lg:px-12 lg:py-16 section-gradient-bg-alt">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-ast-muted">Select your slot</p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl text-ast-text">Let's make the first move.</h2>
              </div>
              <ArrowUpRight className="hidden h-6 w-6 text-ast-accent sm:block" />
            </div>
            <CalBooking />
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: 0.2 }}
            className="space-y-8 lg:pt-12"
          >
            <div className="border-l-2 border-ast-accent pl-5">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ast-accent">The briefing</p>
              <p className="mt-3 text-sm leading-relaxed text-ast-muted">A focused 30-minute video call with the people who will shape and ship the work.</p>
            </div>

            <div className="space-y-5 border-t border-ast-border pt-6">
              <div className="flex gap-3">
                <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-ast-accent" />
                <div><h3 className="text-sm font-semibold text-ast-text">30 minutes, well spent</h3><p className="mt-1 text-xs leading-relaxed text-ast-muted">Enough time to get specific without filling your calendar.</p></div>
              </div>
              <div className="flex gap-3">
                <Video className="mt-0.5 h-5 w-5 shrink-0 text-ast-accent" />
                <div><h3 className="text-sm font-semibold text-ast-text">Remote by default</h3><p className="mt-1 text-xs leading-relaxed text-ast-muted">A simple video link arrives with your confirmation.</p></div>
              </div>
              <div className="flex gap-3">
                <CalendarClock className="mt-0.5 h-5 w-5 shrink-0 text-ast-accent" />
                <div><h3 className="text-sm font-semibold text-ast-text">No sales script</h3><p className="mt-1 text-xs leading-relaxed text-ast-muted">We focus on fit, constraints, and the highest-leverage path.</p></div>
              </div>
            </div>

            <div className="border-t border-ast-border pt-6">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-ast-muted">We can cover</p>
              <ul className="space-y-3">
                {['Product direction', 'Technical architecture', 'Timeline and investment'].map((topic) => (
                  <li key={topic} className="flex items-center gap-3 text-sm text-ast-muted">
                    <Check className="h-4 w-4 text-ast-accent" />{topic}
                  </li>
                ))}
              </ul>
            </div>

          </motion.aside>
        </div>
      </section>
    </main>
  );
}
