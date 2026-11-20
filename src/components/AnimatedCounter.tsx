import React, { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'motion/react';

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  durationMs?: number;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  target,
  suffix = '',
  durationMs = 1100,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const [count, setCount] = useState<number>(target);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (prefersReducedMotion || hasAnimated) {
      setCount(target);
      return;
    }

    const element = ref.current;
    if (!element || typeof IntersectionObserver === 'undefined') {
      setCount(target);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setHasAnimated(true);
          let startTime: number | null = null;
          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / durationMs, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) {
              requestAnimationFrame(step);
            }
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [target, durationMs, prefersReducedMotion, hasAnimated]);

  return (
    <span ref={ref} className="font-mono-tabular">
      {count}
      {suffix}
    </span>
  );
};
