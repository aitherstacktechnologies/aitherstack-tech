import { useLocation } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Aither Stack — Flowing Gradient Background
 * No 3D model, no WebGL. Just soft, slow-moving orange/black gradient
 * blobs that drift and pulse. Much lighter than the old Three.js scene.
 */
export default function ThreeBackground() {
  const { pathname } = useLocation();
  const reducedMotion = useReducedMotion();

  const isBooking = pathname === '/booking';
  const isLegal = pathname === '/privacy' || pathname === '/terms';
  const intensity = isBooking ? 0.5 : isLegal ? 0.6 : 1;

  return (
    <div className="three-background" aria-hidden="true">
      <div className="relative h-full w-full overflow-hidden bg-ast-bg">
        {/* Primary orange blob — top right, drifting slowly */}
        <motion.div
          className="absolute -top-1/4 -right-1/4 h-[70vh] w-[70vh] rounded-full"
          style={{
            background:
              'radial-gradient(circle at center, rgba(255,107,26,0.35) 0%, rgba(255,107,26,0.08) 45%, transparent 70%)',
            filter: 'blur(60px)',
            opacity: intensity,
          }}
          animate={
            reducedMotion
              ? {}
              : {
                  x: [0, -40, 20, 0],
                  y: [0, 30, -20, 0],
                }
          }
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Secondary softer orange blob — bottom left */}
        <motion.div
          className="absolute -bottom-1/4 -left-1/4 h-[65vh] w-[65vh] rounded-full"
          style={{
            background:
              'radial-gradient(circle at center, rgba(255,140,66,0.28) 0%, rgba(255,107,26,0.06) 45%, transparent 70%)',
            filter: 'blur(70px)',
            opacity: intensity,
          }}
          animate={
            reducedMotion
              ? {}
              : {
                  x: [0, 30, -20, 0],
                  y: [0, -25, 15, 0],
                }
          }
          transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />

        {/* Faint center glow to tie the two together */}
        <motion.div
          className="absolute top-1/2 left-1/2 h-[50vh] w-[50vh] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              'radial-gradient(circle at center, rgba(255,107,26,0.12) 0%, transparent 65%)',
            filter: 'blur(90px)',
            opacity: intensity,
          }}
          animate={reducedMotion ? {} : { opacity: [intensity * 0.6, intensity, intensity * 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Subtle grain/texture overlay for depth, not motion */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
      </div>
      <div className="three-background-vignette" />
    </div>
  );
}