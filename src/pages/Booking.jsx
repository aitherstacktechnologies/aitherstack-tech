import React from 'react';
import { ArrowLeft, ArrowUpRight, CalendarClock, Check, Clock3, Video } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CalBooking from '../components/CalBooking';
import Hero, { AccentText } from '../components/Hero';
import Button from '../components/Button';

export default function Booking() {
  return (
    <main className="min-h-screen overflow-hidden bg-transparent pt-16 text-white booking-page-cta">
      <Hero
        title={
          <>
            Bring the Next Version<br />
            into <AccentText>Focus.</AccentText>
          </>
        }
        subtitle="Choose a time for a practical strategy call. We will map the opportunity, pressure-test the scope, and leave you with a clear next move."
        align="left"
        compact
      >
        <Link to="/" className="back-to-home mb-8 inline-flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to home</span>
        </Link>
      </Hero>

      <section className="px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16 xl:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/50">Select your slot</p>
                <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-white text-gradient-shimmer">Let's make the first move.</h2>
              </div>
              <ArrowUpRight className="hidden h-6 w-6 text-orange-500 sm:block" />
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
            <div className="border-l-2 border-orange-500 pl-5">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-orange-400">The briefing</p>
              <p className="mt-3 text-sm leading-relaxed text-white/60">A focused 30-minute video call with the people who will shape and ship the work.</p>
            </div>

            <div className="space-y-5 border-t border-white/10 pt-6">
              <div className="flex gap-3">
                <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
                <div><h3 className="text-sm font-semibold text-white">30 minutes, well spent</h3><p className="mt-1 text-xs leading-relaxed text-white/60">Enough time to get specific without filling your calendar.</p></div>
              </div>
              <div className="flex gap-3">
                <Video className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
                <div><h3 className="text-sm font-semibold text-white">Remote by default</h3><p className="mt-1 text-xs leading-relaxed text-white/60">A simple video link arrives with your confirmation.</p></div>
              </div>
              <div className="flex gap-3">
                <CalendarClock className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
                <div><h3 className="text-sm font-semibold text-white">No sales script</h3><p className="mt-1 text-xs leading-relaxed text-white/60">We focus on fit, constraints, and the highest-leverage path.</p></div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-white/50">We can cover</p>
              <ul className="space-y-3">
                {['Product direction', 'Technical architecture', 'Timeline and investment'].map((topic) => (
                  <li key={topic} className="flex items-center gap-3 text-sm text-white/60">
                    <Check className="h-4 w-4 text-orange-500" />{topic}
                  </li>
                ))}
              </ul>
            </div>

          </motion.aside>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          className="relative overflow-hidden rounded-3xl border border-orange-500/30 glassmorphic-luxury p-6 sm:p-10 lg:p-12 text-center shadow-[0_0_80px_rgba(255,85,0,0.06)]"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10">
            <span className="inline-block text-[10px] font-mono uppercase tracking-[0.3em] text-orange-400 mb-6">// NOT READY?</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[0.92] mb-8 text-gradient-shimmer">
              Not Ready to Book Yet?<br />Start With the Brief.
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
              Tell us what you're building, what you need, and where you want to go. Our team will review your requirements and get back to you within 24 hours.
            </p>
            <Button to="/contact" variant="primary" size="lg" showArrow className="mt-10">
              Send a Project Inquiry
            </Button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}