'use client';

import { useEffect, useRef } from 'react';
import { useInView, animate } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  decimals?: number;
}

export default function AnimatedCounter({ value, suffix = '', decimals = 0 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(0, value, {
        duration: 2.0,
        ease: [0.16, 1, 0.3, 1], // Custom premium ease-out
        onUpdate(val) {
          if (ref.current) {
            ref.current.textContent = val.toFixed(decimals) + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [value, inView, decimals, suffix]);

  return (
    <span ref={ref} className="font-display font-black text-4xl text-white tracking-tight">
      0{suffix}
    </span>
  );
}
