import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const alignmentClasses = {
  center: 'text-center items-center',
  left: 'text-left items-start',
};

function AccentText({ children }) {
  return (
    <span className="font-heading">
      {children}
    </span>
  );
}

export default function Hero({
  eyebrow,
  title,
  subtitle,
  actions,
  align = 'center',
  compact = false,
  children,
  className = '',
  showBlobs = true,
}) {
  const prefersReducedMotion = useReducedMotion();
  const transition = prefersReducedMotion ? { duration: 0 } : { duration: 0.85, ease: [0.16, 1, 0.3, 1] };

  return (
    <section
      className={`relative isolate overflow-hidden bg-transparent px-4 sm:px-6 lg:px-8 xl:px-12 pt-44 pb-16 ${compact ? 'min-h-[50vh]' : 'min-h-[60vh]'} flex flex-col justify-center ${className}`}
    >
      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-600/20 via-transparent to-orange-500/10 blur-[120px] rounded-full pointer-events-none animate-pulse-slow" aria-hidden="true" />
      
      {showBlobs && (
        <>
          <div className="hero-blob hero-blob-1" aria-hidden="true" />
          <div className="hero-blob hero-blob-2" aria-hidden="true" />
          <div className="hero-blob hero-blob-3" aria-hidden="true" />
          <div className="grid-pattern" aria-hidden="true" />
        </>
      )}
      <div className="pointer-events-none absolute inset-0 hero-scene-grid" aria-hidden="true" />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
        className={`relative z-10 mx-auto flex w-full max-w-6xl flex-col ${alignmentClasses[align]}`}
      >
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.12 }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-orange-400 backdrop-blur-[16px]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500 shadow-[0_0_12px_rgba(255,85,0,0.9)] animate-pulse" />
            {eyebrow}
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 26, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ ...transition, delay: 0.22 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[0.94] tracking-tight uppercase text-gradient-shimmer"
          style={{ fontFamily: "'Krona One', sans-serif" }}
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.38 }}
          className={`mt-6 max-w-2xl text-base leading-[1.6] text-white/80 sm:text-lg ${align === 'center' ? 'mx-auto' : ''}`}
          style={{ fontFamily: "'Krona One', sans-serif" }}
        >
          {subtitle}
        </motion.p>

        {actions && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.52 }}
            className={`mt-10 flex flex-col sm:flex-row items-center gap-4 ${align === 'center' ? 'mx-auto' : ''} flex-wrap`}
          >
            {actions}
          </motion.div>
        )}

        {children}
      </motion.div>
    </section>
  );
}

export function HeroArrow({ label = 'Learn more' }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-orange-500" style={{ fontFamily: "'Inter', sans-serif" }}>
      {label}
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </span>
  );
}

export { AccentText };