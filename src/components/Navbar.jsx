import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, X, Menu } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import logoAsset from '../assets/logo.png';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Process', path: '/process' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Team', path: '/team' },
  { name: 'Contact', path: '/contact' },
  { name: 'About', path: '/about' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const transition = prefersReducedMotion ? { duration: 0 } : { duration: 0.28, ease: 'easeOut' };

  return (
    <>
      <motion.header
        initial={false}
        className="fixed inset-x-0 top-4 z-50 px-4 sm:top-6 sm:px-6"
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3">
           <Link to="/" className="group flex shrink-0 items-center" aria-label="AST home">
             <span className="relative flex h-11 w-11 items-center justify-center rounded-full border border-ast-border bg-ast-bg/55 shadow-[0_8px_24px_rgba(0,0,0,0.24)] backdrop-blur-xl transition-all duration-300 group-hover:border-ast-accent/40 group-hover:shadow-[0_0_16px_rgba(255,100,31,0.15)]">
              <img src={logoAsset} alt="AST" width="36" height="36" className="h-full w-full object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
            </span>
          </Link>

          <nav className="hidden min-w-0 flex-1 items-center justify-center md:flex" aria-label="Main navigation">
            <div className="flex w-full max-w-4xl items-center justify-center gap-1 overflow-x-auto rounded-full border border-ast-border bg-ast-bg/55 px-3 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.24)] backdrop-blur-xl">
              <div className="flex items-center gap-1 flex-1 justify-center min-w-0 overflow-hidden">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      aria-current={isActive ? 'page' : undefined}
                      className={`group relative px-3 py-1.5 text-xs font-medium uppercase tracking-[0.16em] transition-colors duration-300 rounded-full whitespace-nowrap ${
                        isActive ? 'bg-ast-accent text-ast-bg shadow-[0_0_16px_rgba(255,107,26,0.3)]' : 'text-ast-muted hover:text-ast-text hover:bg-ast-bg/50'
                      }`}
                    >
                      <span className="relative z-10">{link.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
</nav>

          <Link
            to="/booking"
            className="hidden md:flex items-center justify-center gap-2 rounded-full border border-ast-accent bg-ast-accent/10 px-5 py-2 text-xs font-medium uppercase tracking-[0.16em] text-ast-accent transition-all duration-300 hover:bg-ast-accent hover:text-ast-bg hover:shadow-[0_0_24px_rgba(255,107,26,0.4)]"
            aria-label="Book a call"
          >
            Book a Call
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
             <motion.button
               type="button"
               aria-label={isOpen ? 'Close menu' : 'Open menu'}
               aria-expanded={isOpen}
               onClick={() => setIsOpen((prev) => !prev)}
               whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
               className="relative flex h-11 w-11 items-center justify-center rounded-full border border-ast-border bg-ast-bg/55 text-ast-text shadow-[0_8px_24px_rgba(0,0,0,0.24)] backdrop-blur-xl transition-all duration-300 hover:border-ast-accent/40 hover:shadow-[0_0_16px_rgba(255,100,31,0.15)] md:hidden"
             >
              <AnimatePresence initial={false} mode="wait">
                {isOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={transition}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <X className="h-5 w-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={transition}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Menu className="h-5 w-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition}
            className="fixed inset-0 z-40 bg-ast-bg/92 backdrop-blur-2xl md:hidden"
            style={{
              background: 'radial-gradient(ellipse at top, rgba(255,100,31,0.08), transparent 60%), var(--ast-bg)',
            }}
          >
            <motion.nav
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.28, ease: 'easeOut' }}
              className="mx-auto flex h-full max-w-7xl flex-col px-6"
              aria-label="Mobile navigation"
            >
              {/* Header with logo and close button */}
              <div className="flex h-20 items-center justify-between border-b border-ast-border/30">
                <Link to="/" className="flex items-center" aria-label="AST home">
                  <span className="relative flex h-10 w-10 items-center justify-center rounded-full border border-ast-border bg-ast-bg/55 shadow-[0_8px_24px_rgba(0,0,0,0.24)] backdrop-blur-xl">
                    <img src={logoAsset} alt="AST" width="32" height="32" className="h-full w-full object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
                  </span>
                </Link>
                <motion.button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setIsOpen(false)}
                  whileTap={prefersReducedMotion ? undefined : { scale: 0.9 }}
                  className="relative flex h-10 w-10 items-center justify-center rounded-full border border-ast-border bg-ast-bg/55 text-ast-text shadow-[0_8px_24px_rgba(0,0,0,0.24)] backdrop-blur-xl transition-all duration-300 hover:border-ast-accent/40 hover:shadow-[0_0_16px_rgba(255,100,31,0.15)]"
                >
                  <X className="h-5 w-5" />
                </motion.button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 flex flex-col justify-center space-y-0 py-8">
                {navLinks.map((link, index) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ delay: prefersReducedMotion ? 0 : index * 0.04, duration: prefersReducedMotion ? 0 : 0.24, ease: 'easeOut' }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        aria-current={isActive ? 'page' : undefined}
                        className={`group flex items-center justify-between rounded-2xl border px-4 py-5 text-lg font-medium transition-all duration-300 ${
                          isActive ? 'border-ast-accent/30 bg-ast-accent/10 text-ast-accent' : 'border-ast-border/30 bg-ast-surface/30 text-ast-text hover:border-ast-accent/30 hover:bg-ast-surface/50'
                        }`}
                      >
                        <span className="flex items-center gap-4">
                          <span className="text-xs font-mono text-ast-muted w-6 text-right">{String(index + 1).padStart(2, '0')}</span>
                          {link.name}
                        </span>
                        <ArrowUpRight className="h-4 w-4 text-ast-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Book a Call CTA */}
              <div className="pb-8 pt-4">
                <Link
                  to="/booking"
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center justify-center gap-3 rounded-2xl border border-ast-accent bg-ast-accent/10 px-6 py-4 text-base font-medium uppercase tracking-[0.1em] text-ast-accent transition-all duration-300 hover:bg-ast-accent hover:text-ast-bg hover:shadow-[0_0_24px_rgba(255,107,26,0.4)]"
                >
                  Book a Call
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>

              {/* Footer */}
              <div className="border-t border-ast-border/30 pt-6 text-center">
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-ast-muted">
                  Aither Stack Technologies
                </p>
                <p className="mt-1 text-xs text-ast-muted/60">
                  Web Engineering &middot; AI Systems &middot; Automation
                </p>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}