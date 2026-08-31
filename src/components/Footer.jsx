import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, MapPin, Clock } from 'lucide-react';
import logoAsset from '../assets/logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Process', path: '/process' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/aitherstacktechnologies' },
    { name: 'Instagram', href: 'https://www.instagram.com/muhammad_official.dev/' },
  ];

  return (
    <footer className="relative border-t border-ast-stone/50 bg-ast-bg">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-bg-subtle opacity-20" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ast-accent/30 to-transparent" />
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 border-b border-ast-stone/50">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <Link to="/" className="inline-flex items-center gap-4 mb-6 group">
                <div className="w-12 h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={logoAsset}
                    alt="AST Logo"
                    className="w-full h-full object-contain"
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                </div>
                <span className="font-mono font-bold text-lg tracking-tight text-white">
                  Aither Stack
                </span>
              </Link>
              <p className="text-sm text-gray-400 max-w-sm leading-relaxed mb-6">
                Engineering high-impact web platforms, bespoke AI agents, and custom business software for modern enterprises.
              </p>
              
              <div className="space-y-3">
                <a 
                  href="mailto:muhammadzaman.dev@gmail.com" 
                  className="flex items-center gap-3 text-sm text-gray-400 hover:text-ast-accent transition-colors group break-all"
                >
                  <div className="w-8 h-8 rounded-lg border border-ast-stone/50 bg-ast-surface flex items-center justify-center group-hover:border-ast-accent/50 transition-colors flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  muhammadzaman.dev@gmail.com
                </a>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <div className="w-8 h-8 rounded-lg border border-ast-stone/50 bg-ast-surface flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  Worldwide (Remote-First)
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <div className="w-8 h-8 rounded-lg border border-ast-stone/50 bg-ast-surface flex items-center justify-center">
                    <Clock className="w-4 h-4" />
                  </div>
                  Mon-Fri, 9AM-6PM EST
                </div>
              </div>
            </div>

            <div className="md:col-span-3">
              <h4 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-6">
                Navigation
              </h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-6">
                Connect
              </h4>
              <ul className="space-y-3">
                {socialLinks.map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-ast-accent transition-colors group"
                    >
                      <span>{social.name}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-6">
                Start a Project
              </h4>
              <Link
                to="/booking"
                className="group relative inline-flex items-center gap-2 bg-ast-accent text-white px-5 py-3 rounded-lg font-bold text-sm transition-all duration-300 hover:bg-ast-accent-hover hover:shadow-[0_0_20px_rgba(255,77,0,0.2)]"
              >
                <span>Book Now</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-mono text-gray-500">
            © {currentYear} Aither Stack Technologies. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-xs font-mono">
            <Link to="/privacy" className="text-gray-500 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
