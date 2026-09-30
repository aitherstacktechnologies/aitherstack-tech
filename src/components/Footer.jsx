import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Globe, Clock, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10 text-gray-300 pt-16 pb-8 overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-orange-600/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main 12-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info (Cols 1 to 4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-wider text-white">AST</span>
            </div>
            <p className="text-sm text-gray-400 font-normal leading-relaxed max-w-sm">
              Engineering high-impact web platforms, bespoke AI agents, and custom business software for modern enterprises.
            </p>
            
            <div className="space-y-2 pt-2 text-xs font-mono text-gray-400">
              <a href="mailto:muhammadzaman.dev@gmail.com" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
                <Mail className="w-4 h-4 text-orange-500" />
                <span>muhammadzaman.dev@gmail.com</span>
              </a>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-orange-500" />
                <span>Worldwide (Remote-First)</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-orange-500" />
                <span>Mon-Fri, 9AM-6PM EST</span>
              </div>
            </div>
          </div>

          {/* Navigation Links (Cols 5 to 7) */}
          <div className="lg:col-span-3">
            <span className="text-xs font-mono text-orange-500 tracking-widest uppercase block mb-4">// PAGES</span>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              <li><Link to="/" className="hover:text-orange-400 transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-orange-400 transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-orange-400 transition-colors">Portfolio</Link></li>
              <li><Link to="/team" className="hover:text-orange-400 transition-colors">Team</Link></li>
              <li><Link to="/contact" className="hover:text-orange-400 transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="hover:text-orange-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Legal Links (Cols 8 to 9) */}
          <div className="lg:col-span-2">
            <span className="text-xs font-mono text-orange-500 tracking-widest uppercase block mb-4">// LEGAL</span>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy" className="hover:text-orange-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-orange-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Connect & Call to Action (Cols 10 to 12) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-mono text-orange-500 tracking-widest uppercase block mb-2">// CONNECT</span>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-sm hover:border-orange-500/50 hover:bg-white/10 transition-all"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.361 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.305-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.002.404 2.291-1.552 3.297-1.23 3.297-3.221 0-.719-.203-1.31-.572-1.763C13.856 4.747 12.74 4 12 4c-.74 0-1.856.747-2.124 2.12C9.408 5.69 9.205 6.281 9.08 6.636c-.136.392.295 1.221.12 3.176 0 1.901-.718 2.89-1.665 3.138.098.295.209.647.054.93-.505 1.538-1.872 1.526-3.054 1.496-1.957-.015-3.82-.872-5.227-2.164-.327.47-.69 1.014-.69 1.592 0 .584.226 1.168.587 1.524C6.5 15.487 7.154 17 8 17c.847 0 1.62-.13 2.38-.39.337-.521.63-1.122.83-1.778C12.83 14.12 13.98 14 15.12 14c.114 0 .225-.008.335-.023.017-.016.15-.036.209-.036 1.268 0 2.318.976 2.318 2.182 0 1.425-.945 2.472-2.128 2.584.161.16.31.366.448.582-.105.982-.535 1.96-1.022 2.526-.457.54-.987 1.135-1.572 1.766-.029.07-.046.132-.046.223v.672c0 .319.192.694.807.576C21.399 17.54 24 13.005 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </a>

            <div className="pt-2">
              <Link 
                to="/booking" 
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-600 to-amber-500 text-white font-semibold text-sm hover:scale-105 hover:shadow-[0_0_25px_rgba(255,85,0,0.4)] transition-all duration-300"
              >
                <span>Book a Call</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 font-mono gap-4">
          <p>© 2026 AST. All rights reserved.</p>
          <p className="text-gray-400">Engineered for Ambitious Brands</p>
        </div>
      </div>
    </footer>
  );
}