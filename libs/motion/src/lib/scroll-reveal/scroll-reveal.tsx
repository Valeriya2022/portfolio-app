import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';

export type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
}: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const canObserveViewport = typeof IntersectionObserver !== 'undefined';
  const shouldAnimate = !prefersReducedMotion && canObserveViewport;

  return (
    <motion.div
      animate={
        shouldAnimate ? undefined : { opacity: 1, transform: 'translateY(0px)' }
      }
      className={className}
      initial={
        shouldAnimate ? { opacity: 0, transform: 'translateY(24px)' } : false
      }
      transition={{
        delay,
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={shouldAnimate ? { amount: 0.12, once: true } : undefined}
      whileInView={
        shouldAnimate ? { opacity: 1, transform: 'translateY(0px)' } : undefined
      }
    >
      {children}
    </motion.div>
  );
}
