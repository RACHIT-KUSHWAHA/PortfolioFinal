import React from 'react';
import { useReducedMotion } from 'framer-motion';

function parseValue(input: string) {
  const match = input.trim().match(/^(.*?)([0-9]+(?:\.[0-9]+)?)\s*(.*)$/);
  if (!match) return { prefix: '', number: 0, suffix: input };
  const [, prefix, num, suffix] = match;
  return { prefix: prefix ?? '', number: parseFloat(num), suffix: suffix ?? '' };
}

export const CountUp: React.FC<{ value: string; durationMs?: number; className?: string }>
  = ({ value, durationMs = 1200, className }) => {
  const reduce = useReducedMotion();
  const ref = React.useRef<HTMLSpanElement>(null);
  const { prefix, number, suffix } = React.useMemo(() => parseValue(value), [value]);

  React.useEffect(() => {
    if (!ref.current) return;
    if (reduce) {
      ref.current.textContent = `${prefix}${value.replace(/^[^0-9.]*/, '')}`;
      return;
    }
    let frame: number;
    let start: number | null = null;
    const startVal = 0;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const p = Math.min(1, (ts - start) / durationMs);
      const current = startVal + (number - startVal) * p;
      ref.current!.textContent = `${prefix}${current.toFixed(Number.isInteger(number) ? 0 : 1)}${suffix}`;
      if (p < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [number, prefix, suffix, durationMs, reduce, value]);

  return <span ref={ref} className={className} aria-label={value}></span>;
};

export default CountUp;
