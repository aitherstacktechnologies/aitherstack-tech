import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

const alignmentClasses = {
  center: 'text-center items-center',
  left: 'text-left items-start',
};

export default function Hero({
  eyebrow,
  title,
  subtitle,
  actions,
  align = 'center',
  compact = false,
  showScroll = true,
  children,
  className = '',
}) {
  const prefersReducedMotion = useReducedMotion();
  const transition = prefersReducedMotion ? { duration: 0 } : { duration: 0.85, ease: [0.16, 1, 0.3, 1] };

  return (
    <section className={`relative isolate overflow-hidden bg-transparent px-4 pb-16 pt-24 sm:px-6 sm:pb-24 sm:pt-32 lg:px-8 lg:pt-40 xl:px-12 ${compact ? 'min-h-[68vh]' : 'min-h-[88vh]'} flex flex-col justify-center ${className}`}>
      <div className="pointer-events-none absolute inset-0 hero-scene-grid" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-ast-accent/10 blur-[100px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-ast-accent/5 blur-[120px]" aria-hidden="true" />

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
            className="mb-7 inline-flex items-center gap-3 rounded-full border border-ast-border/80 bg-ast-surface/60 px-4 py-2 text-[11px] font-mono uppercase tracking-[0.24em] text-ast-accent backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-ast-accent shadow-[0_0_12px_rgba(255,107,26,0.9)] animate-pulse" />
            {eyebrow}
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 26, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ ...transition, delay: 0.22 }}
          className="font-display text-[clamp(2.85rem,7.2vw,7.25rem)] font-semibold leading-[0.94] tracking-[-0.045em] text-ast-text"
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

      {showScroll && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-ast-muted"
          aria-hidden="true"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.3em]">Scroll to explore</span>
          <motion.span animate={{ y: [0, 7, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}>
            <ArrowDown className="h-4 w-4 stroke-ast-accent/70" />
          </motion.span>
        </motion.div>
      )}
    </section>
  );
}

export function HeroArrow({ label = 'Learn more' }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-ast-accent">
      {label}
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </span>
  );
}
