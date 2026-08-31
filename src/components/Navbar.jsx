import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import logoAsset from '../assets/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const location = useLocation();
  const lastScrollY = useRef(0);

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
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      } ${
        scrolled 
          ? 'bg-ast-bg/95 backdrop-blur-md border-b border-ast-stone/50' 
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
              className={`px-4 py-2 text-sm font-medium tracking-wide transition-all duration-200 rounded-md ${
                isActive(link.path)
                  ? 'text-ast-accent bg-ast-surface/80'
                  : 'text-gray-300 hover:text-white hover:bg-ast-surface/50'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/booking"
            className="group relative inline-flex items-center gap-2 bg-ast-accent text-white px-6 py-3 rounded-lg font-bold text-sm transition-all duration-300 hover:bg-ast-accent-hover hover:shadow-[0_0_30px_rgba(255,77,0,0.3)] hover:-translate-y-0.5 overflow-hidden"
          >
            <span className="relative z-10">Book a Call</span>
            <ArrowUpRight className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-ast-accent to-ast-accent-hover opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-white hover:bg-ast-surface/50 rounded-md transition-colors"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden fixed inset-0 top-0 left-0 w-full h-screen bg-ast-bg z-[9999] flex flex-col justify-between px-6 py-6 border-l border-ast-stone/50">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-3 text-base font-medium tracking-wide rounded-md transition-all ${
                  isActive(link.path)
                    ? 'text-ast-accent bg-ast-surface/80'
                    : 'text-gray-300 hover:text-white hover:bg-ast-surface/50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="pt-6 border-t border-ast-stone/50 space-y-4">
            <Link
              to="/booking"
              className="w-full inline-flex items-center justify-center gap-2 bg-ast-accent text-white px-6 py-4 rounded-lg font-bold text-base transition-all hover:bg-ast-accent-hover"
            >
              <span>Book a Call</span>
              <ArrowUpRight className="w-5 h-5" />
            </Link>

            <div className="text-xs text-gray-500 text-center font-mono">
              © 2024 Aither Stack Technologies
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
