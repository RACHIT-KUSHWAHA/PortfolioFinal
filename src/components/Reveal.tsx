import React from 'react';
import { motion, Variants, HTMLMotionProps, useReducedMotion } from 'framer-motion';

interface RevealProps extends HTMLMotionProps<'div'> {
  delay?: number;
  y?: number;
  once?: boolean;
}

const variants: Variants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(6px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)' },
};

export const Reveal: React.FC<RevealProps> = ({ children, delay = 0, y = 20, once = true, className, ...rest }) => {
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
      initial={{ opacity: 0, y, filter: 'blur(6px)' }}
      whileInView="show"
      viewport={{ once, margin: '-5% 0px -5% 0px', amount: 0.1 }}
      transition={{ 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1],
        delay 
      }}
      variants={variants}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
