import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export function AnimationProvider({ children }) {
  return <>{children}</>;
}

export function PageTransition({ children, routeKey }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
      }}
      key={routeKey}
      className="transform-gpu will-change-transform"
    >
      {children}
    </motion.div>
  );
}

export function MagneticButton({ children, className = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (window.matchMedia('(pointer: coarse), (max-width: 767px)').matches) return;
    let frameId;
    let pointer;
    let rect;
    const updateRect = () => { rect = element.getBoundingClientRect(); };
    const handlePointerEnter = () => { updateRect(); };
    const handlePointerMove = (event) => {
      pointer = event;
      if (!frameId && rect) {
        frameId = requestAnimationFrame(() => {
          if (rect && pointer) {
            const x = pointer.clientX - rect.left - rect.width / 2;
            const y = pointer.clientY - rect.top - rect.height / 2;
            element.style.transform = `translate3d(${x * 0.3}px, ${y * 0.3}px, 0)`;
          }
          frameId = undefined;
        });
      }
    };
    const handleMouseLeave = () => {
      element.style.transform = '';
    };
    element.addEventListener('pointerenter', handlePointerEnter);
    element.addEventListener('pointermove', handlePointerMove);
    element.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', updateRect, { passive: true });
    updateRect();
    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      element.removeEventListener('pointerenter', handlePointerEnter);
      element.removeEventListener('pointermove', handlePointerMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', updateRect);
    };
  }, []);
  return <div ref={ref} className={`transform-gpu will-change-transform ${className}`}>{children}</div>;
}

export function TiltCard({ children, className = '', intensity = 15 }) {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (window.matchMedia('(pointer: coarse), (max-width: 767px)').matches) return;
    let frameId;
    let pointer;
    let rect;
    const updateRect = () => { rect = element.getBoundingClientRect(); };
    const handlePointerEnter = () => { updateRect(); };
    const handlePointerMove = (event) => {
      pointer = event;
      if (!frameId && rect) {
        frameId = requestAnimationFrame(() => {
          if (rect && pointer) {
            const x = (pointer.clientX - rect.left) / rect.width - 0.5;
            const y = (pointer.clientY - rect.top) / rect.height - 0.5;
            element.style.transform = `perspective(1000px) rotateY(${x * intensity}deg) rotateX(${-y * intensity}deg)`;
          }
          frameId = undefined;
        });
      }
    };
    const handleMouseLeave = () => {
      element.style.transform = '';
    };
    element.addEventListener('pointerenter', handlePointerEnter);
    element.addEventListener('pointermove', handlePointerMove);
    element.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', updateRect, { passive: true });
    updateRect();
    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      element.removeEventListener('pointerenter', handlePointerEnter);
      element.removeEventListener('pointermove', handlePointerMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', updateRect);
    };
  }, [intensity]);
  return (
    <div ref={ref} className={`card-3d transform-gpu will-change-transform ${className}`}>
      <div className="card-3d-inner">{children}</div>
    </div>
  );
}

/* Simple, performant scroll reveal - no external deps */
export function ScrollReveal({ children, className = '', stagger = true }) {
  return (
    <div className={`reveal-container ${className}`} data-scroll-reveal>
      {React.Children.map(children, (child, i) => (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: stagger ? i * 0.08 : 0, ease: [0.16, 1, 0.3, 1] }}
          className="transform-gpu will-change-transform"
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}

export function HoverSpotlight({ children, className = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    let frameId;
    const handleMouseMove = (e) => {
      if (!frameId) {
        frameId = requestAnimationFrame(() => {
          const rect = element.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * 100;
          const y = ((e.clientY - rect.top) / rect.height) * 100;
          element.style.setProperty('--mouse-x', `${x}%`);
          element.style.setProperty('--mouse-y', `${y}%`);
          frameId = undefined;
        });
      }
    };
    element.addEventListener('mousemove', handleMouseMove);
    return () => { element.removeEventListener('mousemove', handleMouseMove); };
  }, []);
  return <div ref={ref} className={`spotlight-glow ${className}`}>{children}</div>;
}

export default AnimationProvider;