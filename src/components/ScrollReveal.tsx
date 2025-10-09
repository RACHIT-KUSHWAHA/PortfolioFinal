import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fade' | 'slide' | 'scale' | 'perspective';
  delay?: number;
  className?: string;
}

export function ScrollReveal({ 
  children, 
  animation = 'fade', 
  delay = 0,
  className = '' 
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let animationConfig: gsap.TweenVars = {};

    switch (animation) {
      case 'fade':
        animationConfig = {
          opacity: 0,
          y: 60,
          filter: 'blur(6px)',
        };
        break;
      case 'slide':
        animationConfig = {
          opacity: 0,
          x: -80,
          filter: 'blur(5px)',
        };
        break;
      case 'scale':
        animationConfig = {
          opacity: 0,
          scale: 0.85,
          filter: 'blur(4px)',
        };
        break;
      case 'perspective':
        animationConfig = {
          opacity: 0,
          rotationX: 35,
          y: 40,
          transformPerspective: 1200,
          transformOrigin: 'center top',
          filter: 'blur(5px)',
        };
        break;
    }

    gsap.set(element, animationConfig);

    const scrollTrigger = ScrollTrigger.create({
      trigger: element,
      start: 'top 85%',
      end: 'bottom 15%',
      onEnter: () => {
        gsap.to(element, {
          ...Object.keys(animationConfig).reduce((acc, key) => {
            if (key === 'opacity') acc[key] = 1;
            else if (key === 'y' || key === 'x') acc[key] = 0;
            else if (key === 'scale') acc[key] = 1;
            else if (key === 'rotationX') acc[key] = 0;
            else if (key === 'filter') acc[key] = 'blur(0px)';
            return acc;
          }, {} as Record<string, any>),
          duration: 1.2,
          ease: 'power3.out',
          delay,
        });
      },
      once: true,
    });

    return () => {
      scrollTrigger.kill();
    };
  }, [animation, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
