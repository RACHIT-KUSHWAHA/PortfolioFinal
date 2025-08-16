import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import clsx from 'clsx';

type Props = React.PropsWithChildren<{
  className?: string;
}>;

export function TiltCard({ children, className }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rX = useTransform(y, [0, 1], [8, -8]);
  const rY = useTransform(x, [0, 1], [-8, 8]);

  const onMove: React.MouseEventHandler = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    x.set(px);
    y.set(py);
  };
  const onLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rX, rotateY: rY, transformStyle: 'preserve-3d' }}
      className={clsx('glass rounded-2xl p-6 border-white/10', className)}
    >
      <div style={{ transform: 'translateZ(40px)' }}>{children}</div>
    </motion.div>
  );
}
