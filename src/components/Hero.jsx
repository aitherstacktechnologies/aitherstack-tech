import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const alignmentClasses = {
  center: 'text-center items-center',
  left: 'text-left items-start',
};

function AccentText({ children }) {
  return (
    <span className="bg-gradient-to-r from-ast-peach via-ast-warm-orange to-ast-peach bg-clip-text text-transparent">
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
}) {
  const prefersReducedMotion = useReducedMotion();
  const transition = prefersReducedMotion ? { duration: 0 } : { duration: 0.85, ease: [0.16, 1, 0.3, 1] };

  return (
    <section className={`relative isolate overflow-hidden bg-transparent px-4 pb-8 pt-12 sm:px-6 sm:pb-12 sm:pt-20 lg:px-8 lg:pt-28 xl:px-12 ${compact ? 'min-h-[55vh]' : 'min-h-[70vh]'} flex flex-col justify-center ${className}`} style={{ aspectRatio: '16 / 9', minHeight: '55vh', contain: 'layout' }}>
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
            className="mb-7 inline-flex items-center gap-3 rounded-full border border-ast-border/80 bg-ast-surface/60 px-4 py-2 text-[11px] font-mono uppercase tracking-[0.24em] text-ast-peach backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-ast-peach shadow-[0_0_12px_rgba(255,154,120,0.9)] animate-pulse" />
            {eyebrow}
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 26, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ ...transition, delay: 0.22 }}
          className="font-display text-[clamp(2.85rem,7.2vw,7.25rem)] font-semibold leading-[0.94] tracking-[-0.045em] text-ast-ivory"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.38 }}
          className={`mt-7 max-w-2xl text-base leading-relaxed text-ast-muted sm:text-lg ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </motion.p>

        {actions && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.52 }}
            className={`mt-10 flex flex-col items-center gap-3 sm:flex-row ${align === 'center' ? 'mx-auto' : ''}`}
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
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-ast-peach">
      {label}
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </span>
  );
}

export { AccentText };