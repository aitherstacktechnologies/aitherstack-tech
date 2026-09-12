import React from 'react';
import { motion } from 'framer-motion';
import useMobileMotion from '../lib/useMobileMotion';

export default function ScrollReveal({ children, delay = 0, direction = 'up' }) {
  const isMobile = useMobileMotion();
  const variants = {
    hidden: {
      opacity: 0,
      ...(isMobile ? {} : {
        y: direction === 'up' ? 35 : direction === 'down' ? -35 : 0,
        x: direction === 'left' ? 35 : direction === 'right' ? -35 : 0,
        scale: 0.97
      })
    },
    visible: {
      opacity: 1,
      ...(isMobile ? {} : { y: 0, x: 0, scale: 1 }),
      transition: {
        duration: 0.6,
        delay: delay,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={variants}
      className="transform-gpu will-change-transform"
    >
      {children}
    </motion.div>
  );
}