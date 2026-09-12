import React from 'react';
import { ArrowLeft, ArrowUpRight, CalendarClock, Check, Clock3, Video } from 'lucide-react';
import { Link } from 'react-router-dom';
import CalBooking from '../components/CalBooking';

export default function Booking() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#08080A] pt-16 text-white">
      <section className="relative border-b border-white/10 px-6 pb-14 pt-20 sm:px-8 lg:px-12 lg:pb-20">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="mobile-motion-lite absolute -right-32 -top-40 h-96 w-96 rounded-full bg-[#FF5500]/10 blur-[120px]" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <Link to="/" className="mb-12 inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to home</span>
          </Link>

          <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-5 font-mono text-xs uppercase tracking-[0.28em] text-[#FF5500]">// A CONVERSATION WITH THE BUILD TEAM</p>
              <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
                Bring the next version into focus.
              </h1>
            </div>
            <p className="max-w-sm text-base leading-relaxed text-gray-400 lg:pb-1">
              Choose a time for a practical strategy call. We will map the opportunity, pressure-test the scope, and leave you with a clear next move.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start lg:gap-14">
          <div>
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-gray-500">Select your slot</p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Let’s make the first move.</h2>
              </div>
              <ArrowUpRight className="hidden h-6 w-6 text-[#FF5500] sm:block" />
            </div>
            <CalBooking />
          </div>

          <aside className="space-y-8 lg:pt-12">
            <div className="border-l-2 border-[#FF5500] pl-5">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF5500]">The briefing</p>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">A focused 30-minute video call with the people who will shape and ship the work.</p>
            </div>

            <div className="space-y-5 border-t border-white/10 pt-6">
              <div className="flex gap-3">
                <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-[#FF5500]" />
                <div><h3 className="text-sm font-semibold">30 minutes, well spent</h3><p className="mt-1 text-xs leading-relaxed text-gray-500">Enough time to get specific without filling your calendar.</p></div>
              </div>
              <div className="flex gap-3">
                <Video className="mt-0.5 h-5 w-5 shrink-0 text-[#FF5500]" />
                <div><h3 className="text-sm font-semibold">Remote by default</h3><p className="mt-1 text-xs leading-relaxed text-gray-500">A simple video link arrives with your confirmation.</p></div>
              </div>
              <div className="flex gap-3">
                <CalendarClock className="mt-0.5 h-5 w-5 shrink-0 text-[#FF5500]" />
                <div><h3 className="text-sm font-semibold">No sales script</h3><p className="mt-1 text-xs leading-relaxed text-gray-500">We focus on fit, constraints, and the highest-leverage path.</p></div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-gray-500">We can cover</p>
              <ul className="space-y-3">
                {['Product direction', 'Technical architecture', 'Timeline and investment'].map((topic) => (
                  <li key={topic} className="flex items-center gap-3 text-sm text-gray-300">
                    <Check className="h-4 w-4 text-[#FF5500]" />{topic}
                  </li>
                ))}
              </ul>
            </div>

          </aside>
        </div>
      </section>
    </main>
  );
}
