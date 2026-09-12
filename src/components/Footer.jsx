import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import logoAsset from '../assets/logo.png';

export default function Footer() {
  const pages = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Process', path: '/process' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
    { name: 'FAQ', path: '/faq' },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#08080A] px-4 pb-8 pt-16 text-white sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-full max-w-7xl -translate-x-1/2 bg-[#FF5500]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-5">
            <Link className="inline-flex items-center" to="/" aria-label="Aither Stack home">
              <img src={logoAsset} alt="Aither Stack" width="48" height="48" className="h-12 w-12 object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
            </Link>

            <p className="max-w-sm text-sm leading-relaxed text-neutral-400">
              Engineering high-impact web platforms, bespoke AI agents, and custom business software for modern enterprises.
            </p>

            <div className="space-y-3 pt-2 font-mono text-xs text-neutral-400">
              <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-[#FF5500]" /><a href="mailto:muhammadzaman.dev@gmail.com" className="transition-colors hover:text-white">muhammadzaman.dev@gmail.com</a></div>
              <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-[#FF5500]" /><span>Worldwide (Remote-First)</span></div>
              <div className="flex items-center gap-3"><Clock className="h-4 w-4 text-[#FF5500]" /><span>Mon-Fri, 9AM-6PM EST</span></div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#FF5500]">// PAGES</span>
            <ul className="mt-6 space-y-3 text-sm text-neutral-400">
              {pages.map((page) => <li key={page.name}><Link to={page.path} className="block transition-colors duration-200 hover:text-[#FF5500]">{page.name}</Link></li>)}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#FF5500]">// LEGAL</span>
            <ul className="mt-6 space-y-3 text-sm text-neutral-400">
              <li><Link className="transition-colors duration-200 hover:text-[#FF5500]" to="/privacy">Privacy Policy</Link></li>
              <li><Link className="transition-colors duration-200 hover:text-[#FF5500]" to="/terms">Terms of Service</Link></li>
            </ul>
          </div>

          <div className="flex flex-col items-center space-y-6 text-center lg:col-span-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#FF5500]">// CONNECT</span>
            <a href="https://github.com/aitherstacktechnologies" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm text-neutral-400 transition-colors duration-200 hover:text-[#FF5500]">
              <span>GitHub</span><ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <div className="w-full pt-1">
              <Link className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#FF5500] bg-[#FF5500] px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(255,85,0,0.3)] transition-all duration-300 hover:border-white hover:bg-white hover:text-[#FF5500]" to="/booking">
                <span>Book a Call</span><ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 font-mono text-xs text-neutral-500 sm:flex-row">
          <p>© 2026 Aither Stack Technologies. All rights reserved.</p>
          <p className="text-neutral-600">Architected with React &amp; Supabase</p>
        </div>
      </div>
    </footer>
  );
}