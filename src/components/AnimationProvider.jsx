import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Lenis from '@studio-freight/lenis';

export function AnimationProvider({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const lenis = new Lenis({
      duration: prefersReducedMotion ? 0 : 1.35,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: !prefersReducedMotion,
      wheelMultiplier: prefersReducedMotion ? 0 : 1,
      syncTouch: !prefersReducedMotion && !isTouchDevice,
      touchMultiplier: 1,
    });

    lenisRef.current = lenis;
    let frameId;
    let scrollTrigger;
    let idleId;
    let isActive = true;
    if (!prefersReducedMotion) {
      const animate = (time) => {
        lenis.raf(time);
        frameId = requestAnimationFrame(animate);
      };
      frameId = requestAnimationFrame(animate);

      const loadScrollTrigger = async () => {
        const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
          import('gsap'),
          import('gsap/ScrollTrigger'),
        ]);
        if (!isActive) return;
        gsap.registerPlugin(ScrollTrigger);
        scrollTrigger = ScrollTrigger;
        lenis.on('scroll', ScrollTrigger.update);
      };

      if ('requestIdleCallback' in window) {
        idleId = window.requestIdleCallback(loadScrollTrigger, { timeout: 2000 });
      } else {
        idleId = window.setTimeout(loadScrollTrigger, 1000);
      }
    }

    return () => {
      isActive = false;
      if (frameId) cancelAnimationFrame(frameId);
      if (idleId) {
        if ('cancelIdleCallback' in window) {
          window.cancelIdleCallback(idleId);
        } else {
          window.clearTimeout(idleId);
        }
      }
      if (scrollTrigger) {
        lenis.off('scroll', scrollTrigger.update);
      }
      lenis.destroy();
    };
  }, []);

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
    let rect;
    let frameId;
    let pointer;
    const updateRect = () => { rect = element.getBoundingClientRect(); };
    const handlePointerEnter = () => updateRect();
    const handlePointerMove = (event) => {
      pointer = event;
      if (!frameId) {
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
    let rect;
    let frameId;
    let pointer;
    const updateRect = () => { rect = element.getBoundingClientRect(); };
    const handlePointerEnter = () => updateRect();
    const handlePointerMove = (event) => {
      pointer = event;
      if (!frameId) {
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

export function ScrollReveal({ children, className = '', stagger = true }) {
  return (
    <div className={`stagger-children ${className}`} data-scroll-reveal>
      {React.Children.map(children, (child, i) => (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: stagger ? i * 0.1 : 0, ease: [0.16, 1, 0.3, 1] }}
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
    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      element.style.setProperty('--mouse-x', `${x}%`);
      element.style.setProperty('--mouse-y', `${y}%`);
    };
    element.addEventListener('mousemove', handleMouseMove);
    return () => { element.removeEventListener('mousemove', handleMouseMove); };
  }, []);
  return <div ref={ref} className={`spotlight-glow ${className}`}>{children}</div>;
}

export default AnimationProvider;