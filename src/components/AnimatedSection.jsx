import React from 'react';
import { motion } from 'framer-motion';
import useMobileMotion from '../lib/useMobileMotion';

export default function AnimatedSection({ children, delay = 0 }) {
  const isMobile = useMobileMotion();

  return (
    <motion.div
      initial={isMobile ? { opacity: 0 } : { opacity: 0, y: 35, scale: 0.98 }}
      whileInView={isMobile ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.7,
        delay: delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      className="transform-gpu will-change-transform"
    >
      {children}
    </motion.div>
  );
}