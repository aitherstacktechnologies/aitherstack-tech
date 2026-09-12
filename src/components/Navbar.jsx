import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import logoAsset from '../assets/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hidden, setHidden] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);
  const scrollFrame = useRef(null);
  const { scrollY } = useScroll();

  useEffect(() => {
    return () => {
      if (scrollFrame.current) cancelAnimationFrame(scrollFrame.current);
    };
  }, []);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? latest;
    if (scrollFrame.current) return;
    scrollFrame.current = requestAnimationFrame(() => {
      setHidden(latest > previous && latest > 80);
      scrollFrame.current = null;
    });
  });

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsOpen(false));
    return () => cancelAnimationFrame(frame);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Process', path: '/process' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <motion.header
        initial={false}
        animate={{ y: hidden ? -110 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed top-4 left-0 right-0 z-50 flex transform-gpu will-change-transform justify-center px-3 sm:px-4"
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-white/10 bg-[#0B0B0D]/70 px-3 py-2 shadow-[0_12px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:px-4">
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="h-8 w-8 sm:h-10 sm:w-10">
              <img
                src={logoAsset}
                alt="AST"
                width="40"
                height="40"
                className="h-full w-full object-contain"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
          </Link>

          <nav ref={navRef} className="hidden items-center gap-1 md:flex" aria-label="Main Navigation">
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                to={link.path}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`nav-spotlight relative rounded-full px-3 py-2 text-xs font-medium tracking-[0.16em] uppercase transition-all duration-200 ${
                  isActive(link.path) ? 'text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                <motion.span
                  layoutId="navbar-pill"
                  className={`absolute inset-0 rounded-full ${isActive(link.path) ? 'bg-[#FF5500]/15 border border-[#FF5500]/30' : 'bg-white/3'}`}
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
                {hoveredIndex === i && !isActive(link.path) && (
                  <motion.span
                    layoutId="nav-hover-pill"
                    className="absolute inset-0 rounded-full border border-white/10 bg-white/5"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/booking"
              className="hidden rounded-full bg-[#FF5500] text-white border border-[#FF5500] px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-300 hover:bg-white hover:text-[#FF5500] hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] md:inline-flex"
            >
              Book a Call
            </Link>

            <motion.button
              type="button"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setIsOpen((prev) => !prev)}
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/3 md:hidden"
              whileTap={{ scale: 0.96 }}
            >
              <span className="relative block h-4 w-5">
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 7, width: '100%' } : { rotate: 0, y: 0, width: '100%' }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="absolute left-0 top-0 block h-0.5 w-full rounded-full bg-white"
                />
                <motion.span
                  animate={isOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-1.5 block h-0.5 w-full rounded-full bg-white"
                />
                <motion.span
                  animate={isOpen ? { rotate: -45, y: -7, width: '100%' } : { rotate: 0, y: 0, width: '100%' }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="absolute left-0 bottom-0 block h-0.5 w-full rounded-full bg-white"
                />
              </span>
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
            className="fixed inset-0 z-40 transform-gpu bg-[#08080A]/95 pt-24 px-6 will-change-transform md:hidden"
          >
            <motion.nav
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="flex h-full flex-col justify-center"
            >
              <div className="space-y-3">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.06, duration: 0.22 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between rounded-2xl border px-4 py-4 text-lg font-medium ${
                        isActive(link.path) ? 'border-[#FF5500]/30 bg-[#FF5500]/10 text-[#FF5500]' : 'border-white/10 bg-white/3 text-white'
                      }`}
                    >
                      <span>{link.name}</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22, duration: 0.22 }}
                className="mt-8"
              >
                <Link
                  to="/booking"
                  onClick={() => setIsOpen(false)}
                  className="flex w-full items-center justify-center gap-3 rounded-full bg-[#FF5500] px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white"
                >
                  <span>Book a Call</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}