import React from 'react';
import { motion } from 'framer-motion';

export default function ScrollReveal({ children, delay = 0, direction = 'up' }) {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 35 : direction === 'down' ? -35 : 0,
      x: direction === 'left' ? 35 : direction === 'right' ? -35 : 0,
      scale: 0.97
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
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
      viewport={{ once: false, amount: 0.2 }} // `once: false` triggers animation EVERY time you scroll up/down
      variants={variants}
    >
      {children}
    </motion.div>
  );
}