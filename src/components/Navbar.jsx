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
  const [hidden, setHidden] = useState(false);
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

  useEffect(() => {
    let lastScrollY = 0;
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > 100 && currentScrollY > lastScrollY) {
          setHidden(true);
        } else {
          setHidden(false);
        }
        lastScrollY = currentScrollY;
        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const transition = prefersReducedMotion ? { duration: 0 } : { duration: 0.28, ease: 'easeOut' };

  return (
    <>
      <motion.header
        initial={false}
        animate={hidden ? { y: -100 } : { y: 0 }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className="fixed inset-x-0 top-4 z-50 px-4 sm:top-6 sm:px-6"
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3">
          <Link to="/" className="group flex shrink-0 items-center" aria-label="AST home">
            <span className="nav-pill relative flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-[16px] shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all duration-300 group-hover:border-orange-500/40 group-hover:shadow-[0_0_16px_rgba(255,85,0,0.2)]">
              <img src={logoAsset} alt="AST" width="36" height="36" className="h-full w-full object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
            </span>
          </Link>

          <nav className="hidden min-w-0 flex-1 items-center justify-center md:flex" aria-label="Main navigation">
            <div className="nav-pill flex items-center gap-1 p-1.5">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    aria-current={isActive ? 'page' : undefined}
                    className={`relative px-4 py-2 text-sm font-medium uppercase tracking-[0.12em] transition-all duration-300 whitespace-nowrap ${
                      isActive ? 'text-orange-500 bg-white/10' : 'text-white/85 hover:text-white hover:bg-white/10'
                    }`}
                    style={{ borderRadius: '9999px' }}
                  >
                    <span className="relative z-10">{link.name}</span>
                  </Link>
                );
              })}
            </div>
          </nav>

          <div className="flex items-center gap-3 md:gap-4">
            <Link
              to="/booking"
              className="hidden md:flex items-center justify-center gap-2 rounded-full border border-orange-500 bg-orange-500 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_24px_rgba(255,85,0,0.5)]"
              aria-label="Book a call"
              style={{ fontFamily: "'Krona One', -apple-system, sans-serif" }}
            >
              Book a Call
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300" aria-hidden="true" />
            </Link>

            <motion.button
              type="button"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((prev) => !prev)}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white/85 shadow-[0_4px_24px_rgba(0,0,0,0.4)] backdrop-blur-[16px] transition-all duration-300 hover:border-orange-500/40 hover:shadow-[0_0_16px_rgba(255,85,0,0.2)] md:hidden"
              style={{ fontFamily: "'Inter', sans-serif" }}
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
                    <X className="h-5 w-5" aria-hidden="true" />
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
                    <Menu className="h-5 w-5" aria-hidden="true" />
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
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-[16px] md:hidden"
          >
            <motion.nav
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.28, ease: 'easeOut' }}
              className="mx-auto flex h-full max-w-7xl flex-col px-6"
              aria-label="Mobile navigation"
            >
              <div className="flex h-20 items-center justify-between border-b border-white/10">
                <Link to="/" className="flex items-center" aria-label="AST home">
                  <span className="nav-pill relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-[16px] shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
                    <img src={logoAsset} alt="AST" width="32" height="32" className="h-full w-full object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
                  </span>
                </Link>
                <motion.button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setIsOpen(false)}
                  whileTap={prefersReducedMotion ? undefined : { scale: 0.9 }}
                  className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white/85 backdrop-blur-[16px] shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-orange-500/40"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </motion.button>
              </div>

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
                          isActive ? 'border-orange-500/30 bg-orange-500/10 text-orange-500' : 'border-white/10 bg-white/[0.03] text-white/85 hover:border-orange-500/30 hover:bg-orange-500/10'
                        }`}
                        style={{ fontFamily: "'Krona One', sans-serif" }}
                      >
                        <span className="flex items-center gap-4">
                          <span className="text-xs font-mono text-white/40 w-6 text-right">{String(index + 1).padStart(2, '0')}</span>
                          {link.name}
                        </span>
                        <ArrowUpRight className="h-4 w-4 text-white/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <div className="pb-8 pt-4">
                <Link
                  to="/booking"
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center justify-center gap-3 rounded-full border border-orange-500 bg-orange-500/10 px-6 py-4 text-base font-bold uppercase tracking-[0.1em] text-orange-500 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_24px_rgba(255,85,0,0.45)]"
                  style={{ fontFamily: "'Krona One', sans-serif" }}
                  aria-label="Book a call"
                >
                  Book a Call
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
                </Link>
              </div>

              <div className="border-t border-white/10 pt-6 text-center">
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-white/40">
                  Aither Stack Technologies
                </p>
                <p className="mt-1 text-xs text-white/30">
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