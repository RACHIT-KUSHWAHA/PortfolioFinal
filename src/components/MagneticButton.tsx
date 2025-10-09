import React, { useRef, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
  title?: string;
  className?: string;
  onClick?: () => void;
}

export function MagneticButton({ 
  children, 
  href, 
  type = 'button',
  ariaLabel,
  title,
  className = '',
  onClick 
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    // Magnetic effect - pulls button towards cursor
    x.set(distanceX * 0.3);
    y.set(distanceY * 0.3);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const baseClasses = 'relative px-8 py-3 rounded-full border border-white/10 backdrop-blur-sm overflow-hidden group';
  
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { 
        duration: 0.4, 
        ease: [0.22, 1, 0.36, 1] 
      }
    },
    tap: { 
      scale: 0.95,
      transition: { 
        duration: 0.1, 
        ease: 'easeOut' 
      }
    }
  };

  const shineVariants = {
    initial: { x: '-100%', opacity: 0 },
    hover: { 
      x: '100%', 
      opacity: [0, 1, 0],
      transition: { 
        duration: 0.8, 
        ease: 'easeInOut',
        repeat: Infinity,
        repeatDelay: 1
      }
    }
  };

  const content = (
    <>
      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        variants={shineVariants}
        initial="initial"
        animate={isHovered ? 'hover' : 'initial'}
      />
      
      {/* Background glow on hover */}
      <motion.div
        className="absolute inset-0 rounded-full bg-white/5"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      />
      
      {/* Content */}
      <span className="relative z-10">{children}</span>
    </>
  );

  if (href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        aria-label={ariaLabel}
        title={title}
        className={`${baseClasses} ${className}`}
        style={{ x: springX, y: springY }}
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      aria-label={ariaLabel}
      title={title}
      onClick={onClick}
      className={`${baseClasses} ${className}`}
      style={{ x: springX, y: springY }}
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {content}
    </motion.button>
  );
}
