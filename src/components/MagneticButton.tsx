import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

type Props = React.PropsWithChildren<{
  className?: string;
  onClick?: () => void;
  href?: string;
  ariaLabel?: string;
  title?: string;
  type?: 'button' | 'submit' | 'reset';
}>;

export function MagneticButton({ children, className, onClick, href, ariaLabel, title, type }: Props) {
  const ref = useRef<HTMLElement | null>(null);

  const handleMove: React.MouseEventHandler = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    el.style.setProperty('--tx', `${dx * 0.2}px`);
    el.style.setProperty('--ty', `${dy * 0.2}px`);
  };
  const reset: React.MouseEventHandler = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--tx', '0px');
    el.style.setProperty('--ty', '0px');
  };

  const Comp: any = href ? 'a' : 'button';

  return (
    <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
  <Comp
        ref={ref}
        href={href}
        onClick={onClick}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        aria-label={ariaLabel}
        title={title}
        type={href ? undefined : (type || 'button')}
        className={clsx(
          'relative inline-flex items-center gap-2 rounded-full px-5 py-2.5',
          'bg-white/5 text-zinc-100 border border-white/10 backdrop-blur',
          'transition-transform duration-200',
          className
        )}
        style={{ transform: 'translate(var(--tx, 0px), var(--ty, 0px))' }}
      >
        <span className="absolute inset-0 rounded-full bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        <span className="relative z-10">{children}</span>
      </Comp>
    </motion.div>
  );
}
