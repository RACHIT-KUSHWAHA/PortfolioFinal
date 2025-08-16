import React from 'react';
import { motion, Variants, HTMLMotionProps, useReducedMotion } from 'framer-motion';

interface RevealProps extends HTMLMotionProps<'div'> {
  delay?: number;
  y?: number;
  once?: boolean;
}

const variants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export const Reveal: React.FC<RevealProps> = ({ children, delay = 0, y = 16, once = true, className, ...rest }) => {
  const reduce = useReducedMotion();
  if (reduce) {
    return (
      <motion.div className={className} {...rest}>
        {children}
      </motion.div>
    );
  }
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView="show"
      viewport={{ once, margin: '-10% 0px -10% 0px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
      variants={variants}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
