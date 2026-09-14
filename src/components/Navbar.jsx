import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, X, Menu } from 'lucide-react';
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from 'framer-motion';
import logoAsset from '../assets/logo.png';
import Button from './Button';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Process', path: '/process' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Team', path: '/team' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();
  const prefersReducedMotion = useReducedMotion();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 24);
  });

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
        animate={{ y: scrolled ? 0 : -72 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.32, ease: 'easeInOut' }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-ast-bg/90 backdrop-blur-xl border-b border-ast-border/50 shadow-[0_4px_24px_rgba(0,0,0,0.3)]'
            : 'bg-transparent border-transparent'
        }`}
      >
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
          {/* Left: Logo */}
          <Link to="/" className="group flex items-center gap-2 sm:gap-3" aria-label="Aither Stack home">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-ast-border bg-ast-surface/50 transition-all duration-300 group-hover:border-ast-accent/40 group-hover:bg-ast-surface group-hover:shadow-[0_0_16px_rgba(255,107,26,0.15)]">
              <img src={logoAsset} alt="AST" width="36" height="36" className="h-full w-full object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
            </span>
            <span className="hidden sm:block text-sm font-medium uppercase tracking-[0.22em] text-ast-text">AST</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1 mx-8 flex-1 justify-center" aria-label="Main navigation">
            <div className="relative flex items-center gap-1 bg-ast-surface/50 border border-ast-border rounded-full px-4 py-1.5 w-full max-w-5xl min-w-0">
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

          {/* Right: CTA + Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Button
              as="a"
              href="/booking"
              variant="primary"
              size="sm"
              showArrow
              className="hidden md:inline-flex"
            >
              Book a Call
            </Button>

            <motion.button
              type="button"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((prev) => !prev)}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-ast-border bg-ast-surface/50 text-ast-text transition-all duration-300 hover:border-ast-accent/40 hover:bg-ast-surface hover:shadow-[0_0_16px_rgba(255,107,26,0.15)] md:hidden"
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
            className="fixed inset-0 z-40 bg-ast-bg/98 backdrop-blur-2xl md:hidden"
            style={{
              background: 'radial-gradient(ellipse at top, rgba(255,107,26,0.08), transparent 60%), var(--ast-bg)',
            }}
          >
            <motion.nav
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.28, ease: 'easeOut' }}
              className="mx-auto flex h-full max-w-7xl flex-col justify-center px-6"
              aria-label="Mobile navigation"
            >
              <div className="space-y-2">
                {navLinks.map((link, index) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -14 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -14 }}
                      transition={{ delay: prefersReducedMotion ? 0 : index * 0.035, duration: prefersReducedMotion ? 0 : 0.22, ease: 'easeOut' }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        aria-current={isActive ? 'page' : undefined}
                        className={`group flex items-center justify-between rounded-2xl border px-4 py-4 text-base font-medium transition-all duration-300 ${
                          isActive ? 'border-ast-accent/30 bg-ast-accent/10 text-ast-accent' : 'border-ast-border bg-ast-surface/50 text-ast-text hover:border-ast-accent/30 hover:bg-ast-surface'
                        }`}
                      >
                        <span>{link.name}</span>
                        <ArrowUpRight className="h-4 w-4 text-ast-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ delay: prefersReducedMotion ? 0 : 0.18, duration: prefersReducedMotion ? 0 : 0.26, ease: 'easeOut' }}
                className="mt-8"
              >
                <Button
                  as="a"
                  href="/booking"
                  variant="primary"
                  size="md"
                  fullWidth
                  showArrow
                  onClick={() => setIsOpen(false)}
                >
                  Book a Call
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}