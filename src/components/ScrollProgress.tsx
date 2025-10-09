import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const [percentage, setPercentage] = useState(0);
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Update percentage as user scrolls
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      setPercentage(Math.round(latest * 100));
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <>
      {/* Circular progress indicator with live percentage */}
      <motion.div
        className="fixed bottom-8 left-8 hidden lg:flex items-center justify-center w-14 h-14 rounded-full border-2 border-white/20 bg-black/60 backdrop-blur-xl z-50 shadow-2xl"
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ 
          delay: 1, 
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1]
        }}
        whileHover={{ 
          scale: 1.1,
          boxShadow: '0 0 30px rgba(124, 58, 237, 0.5)',
          transition: { duration: 0.3 }
        }}
      >
        <svg className="w-full h-full -rotate-90 absolute inset-0" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="42"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="6"
            fill="none"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="42"
            stroke="url(#gradient)"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="264"
            style={{
              strokeDashoffset: useSpring(
                scrollYProgress,
                { stiffness: 80, damping: 25, restDelta: 0.001 }
              ).get() * 264 * -1 + 264,
            }}
            animate={{
              strokeDashoffset: 264 - (percentage / 100) * 264
            }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7c3aed" />
              <stop offset="50%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
        </svg>
        <motion.div 
          className="relative text-xs font-bold text-white z-10"
          key={percentage}
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {percentage}%
        </motion.div>
      </motion.div>
    </>
  );
}
