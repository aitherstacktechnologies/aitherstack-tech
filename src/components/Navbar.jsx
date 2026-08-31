import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import logoAsset from '../assets/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const location = useLocation();
  const lastScrollY = useRef(0);
  const bookBtnRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 100) {
        setScrolled(true);
        
        if (currentScrollY > lastScrollY.current && currentScrollY > 200) {
          setHidden(true);
        } else {
          setHidden(false);
        }
      } else {
        setScrolled(false);
        setHidden(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const btn = bookBtnRef.current;
    if (!btn) return;

    const handleMouseMove = (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      gsap.to(btn, {
        x: x * 0.25,
        y: y * 0.25,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    const handleMouseLeave = () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)'
      });
    };

    btn.addEventListener('mousemove', handleMouseMove);
    btn.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      btn.removeEventListener('mousemove', handleMouseMove);
      btn.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
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
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          hidden ? '-translate-y-full' : 'translate-y-0'
        } ${
          scrolled 
            ? 'glassmorphic border-b border-white/5' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
          
          <Link to="/" className="flex items-center gap-4 group">
            <div className="w-14 h-14 transition-transform duration-300 group-hover:scale-105 flex items-center justify-center">
              <img 
                src={logoAsset} 
                alt="AST" 
                className="w-full h-full object-contain" 
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <div className="hidden sm:block">
              <span className="font-mono text-sm font-bold tracking-wider text-white">
                AITHER STACK
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-200 rounded-full ${
                  isActive(link.path)
                    ? 'text-white bg-ast-surface/80'
                    : 'text-gray-300 hover:text-white hover:bg-ast-surface/50'
                }`}
              >
                {isActive(link.path) && (
                  <motion.span
                    layoutId="navbar-pill"
                    className="absolute inset-0 bg-ast-accent/20 border border-ast-accent/30 rounded-full"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/booking"
              className="group relative inline-flex items-center gap-2 bg-ast-accent text-white px-6 py-3 rounded-lg font-bold text-sm transition-all duration-300 hover:bg-ast-accent-hover hover:shadow-[0_0_30px_rgba(255,77,0,0.3)] hover:-translate-y-0.5 overflow-hidden magnetic-hover"
              ref={bookBtnRef}
            >
              <span className="relative z-10">Book a Call</span>
              <svg className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-ast-accent to-ast-accent-hover opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 text-white hover:bg-ast-surface/50 rounded-md transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {isOpen && (
        <div 
          className="fixed inset-0 z-[9999] flex flex-col animate-slideDown"
          style={{
            background: 'rgba(0, 0, 0, 0.97)',
            backdropFilter: 'blur(20px)',
            animation: 'slideDown 0.3s ease-in-out forwards'
          }}
        >
          <div className="flex items-center justify-between px-6 h-20 border-b border-ast-stone/30">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src={logoAsset} 
                alt="AST" 
                className="w-12 h-12 object-contain" 
                style={{ filter: 'brightness(0) invert(1)' }}
              />
              <span className="font-mono text-sm font-bold tracking-wider text-white">
                AITHER STACK
              </span>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-white hover:bg-ast-surface/50 rounded-md transition-all duration-200 hover:scale-110"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-6 py-8">
            <div className="space-y-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`group flex items-center justify-between px-5 py-4 rounded-xl text-lg font-medium transition-all duration-300 ${
                    isActive(link.path)
                      ? 'bg-ast-accent/10 text-ast-accent border border-ast-accent/30'
                      : 'text-gray-300 hover:text-white hover:bg-ast-surface/50 border border-transparent'
                  }`}
                  style={{
                    animation: `slideIn 0.3s ease-in-out ${index * 0.05}s forwards`,
                    opacity: 0,
                    transform: 'translateX(-20px)'
                  }}
                >
                  <span>{link.name}</span>
                  <svg className={`w-5 h-5 transition-transform duration-300 ${isActive(link.path) ? 'text-ast-accent translate-x-1' : 'text-gray-500 group-hover:translate-x-2 group-hover:text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-ast-stone/30">
              <Link
                to="/booking"
                onClick={() => setIsOpen(false)}
                className="group flex items-center justify-center gap-3 w-full bg-ast-accent text-white px-6 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:bg-ast-accent-hover hover:shadow-[0_0_40px_rgba(255,77,0,0.4)] hover:-translate-y-0.5"
                style={{
                  animation: `slideIn 0.3s ease-in-out ${navLinks.length * 0.05}s forwards`,
                  opacity: 0,
                  transform: 'translateY(20px)'
                }}
              >
                <span>Book a Call</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </Link>
            </div>

            <div 
              className="mt-8 pt-8 border-t border-ast-stone/30"
              style={{
                animation: `fadeIn 0.5s ease-in-out ${(navLinks.length + 1) * 0.05}s forwards`,
                opacity: 0
              }}
            >
              <p className="text-center text-sm text-gray-500 font-mono">
                © 2024 Aither Stack Technologies
              </p>
            </div>
          </nav>
        </div>
      )}

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
