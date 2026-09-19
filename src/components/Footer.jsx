import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Clock, GitBranch } from 'lucide-react';
import Button from './Button';
import logoAsset from '../assets/logo.png';

const pages = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Team', path: '/team' },
  { name: 'Contact', path: '/contact' },
  { name: 'FAQ', path: '/faq' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-ast-border bg-transparent px-4 pb-12 pt-16 text-ast-ivory sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-full max-w-7xl -translate-x-1/2 bg-ast-peach/4 blur-3xl" />
      <div className="pointer-events-none absolute top-0 left-1/2 h-64 w-full max-w-7xl -translate-x-1/2 bg-ast-peach/2 blur-3xl" />
      
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 border-b border-ast-border pb-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-5">
             <Link className="inline-flex items-center gap-3" to="/" aria-label="AST home">
               <span className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-ast-border bg-ast-surface/50 transition-all duration-300 hover:border-ast-accent/40 hover:bg-ast-surface hover:shadow-[0_0_16px_rgba(255,100,31,0.15)]">
                 <img src={logoAsset} alt="AST" width="40" height="40" className="h-full w-full object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
               </span>
               <span className="hidden sm:block text-base font-medium uppercase tracking-[0.22em] text-ast-ivory">AST</span>
            </Link>

            <p className="max-w-sm text-sm leading-relaxed text-ast-muted">
              Engineering high-impact web platforms, bespoke AI agents, and custom business software for modern enterprises.
            </p>

            <div className="space-y-3 pt-2 font-mono text-xs text-ast-muted">
              <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-ast-peach" /><a href="mailto:muhammadzaman.dev@gmail.com" className="transition-colors hover:text-ast-peach">muhammadzaman.dev@gmail.com</a></div>
              <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-ast-peach" /><span>Worldwide (Remote-First)</span></div>
              <div className="flex items-center gap-3"><Clock className="h-4 w-4 text-ast-peach" /><span>Mon-Fri, 9AM-6PM EST</span></div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <span className="font-mono text-xs uppercase tracking-wider text-ast-peach">// PAGES</span>
            <ul className="mt-6 space-y-3 text-sm text-ast-muted">
              {pages.map((page) => <li key={page.name}><Link to={page.path} className="block text-ast-ivory/80 transition-colors duration-200 hover:text-ast-peach">{page.name}</Link></li>)}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <span className="font-mono text-xs uppercase tracking-wider text-ast-peach">// LEGAL</span>
            <ul className="mt-6 space-y-3 text-sm text-ast-muted">
              <li><Link className="text-ast-ivory/80 transition-colors duration-200 hover:text-ast-peach" to="/privacy">Privacy Policy</Link></li>
              <li><Link className="text-ast-ivory/80 transition-colors duration-200 hover:text-ast-peach" to="/terms">Terms of Service</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2 flex flex-col items-center text-center">
            <span className="font-mono text-xs uppercase tracking-wider text-ast-peach">// CONNECT</span>
            <div className="mt-6">
              <a href="https://github.com/aitherstacktechnologies" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-1.5 text-sm text-ast-ivory/80 transition-colors duration-200 hover:text-ast-peach">
                <GitBranch className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                <span>GitHub</span>
              </a>
            </div>
            <div className="mt-8 w-full max-w-xs">
              <Button
                as="a"
                href="/booking"
                variant="primary"
                size="md"
                fullWidth
                showArrow
              >
                Book a Call
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 font-mono text-xs text-ast-muted sm:flex-row">
          <p>               © 2026 AST. All rights reserved.</p>
          <p>Engineered for Ambitious Brands</p>
        </div>
      </div>
    </footer>
  );
}