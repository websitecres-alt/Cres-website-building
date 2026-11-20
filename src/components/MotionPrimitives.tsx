import React from 'react';
import { motion, useReducedMotion, type HTMLMotionProps } from 'motion/react';

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  className = '',
  delay = 0,
}) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.06,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface RevealItemProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  hoverLift?: boolean;
}

export const RevealItem: React.FC<RevealItemProps> = ({
  children,
  className = '',
  hoverLift = false,
  ...rest
}) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.36, ease: [0.16, 1, 0.3, 1] },
        },
      }}
      whileHover={hoverLift ? { y: -4, transition: { duration: 0.18, ease: [0.16, 1, 0.3, 1] } } : undefined}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

interface RevealBlockProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const RevealBlock: React.FC<RevealBlockProps> = ({
  children,
  className = '',
  delay = 0,
}) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.04 }}
      transition={{ duration: 0.4, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
