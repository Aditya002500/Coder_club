import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { getAnimationConfig } from '@/lib/animations';
import { Variants } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: Variants;
  delay?: number;
  className?: string;
  threshold?: number;
  rootMargin?: string;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation,
  delay = 0,
  className = '',
  threshold = 0.1,
  rootMargin = '-50px 0px',
}) => {
  const { ref, hasAnimated } = useScrollAnimation({
    threshold,
    rootMargin,
    delay,
  });

  const defaultAnimation: Variants = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const animationVariant = getAnimationConfig(animation || defaultAnimation);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={hasAnimated ? 'visible' : 'hidden'}
      variants={animationVariant}
    >
      {children}
    </motion.div>
  );
};

interface AnimatedContainerProps {
  children: React.ReactNode;
  stagger?: boolean;
  staggerDelay?: number;
  className?: string;
  threshold?: number;
}

export const AnimatedContainer: React.FC<AnimatedContainerProps> = ({
  children,
  stagger = false,
  staggerDelay = 0.1,
  className = '',
  threshold = 0.1,
}) => {
  const { ref, hasAnimated } = useScrollAnimation({ threshold });

  const containerVariants: Variants = stagger
    ? {
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.1,
          },
        },
      }
    : {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={hasAnimated ? 'visible' : 'hidden'}
      variants={getAnimationConfig(containerVariants)}
    >
      {children}
    </motion.div>
  );
};

interface AnimatedItemProps {
  children: React.ReactNode;
  animation?: Variants;
  className?: string;
  index?: number;
}

export const AnimatedItem: React.FC<AnimatedItemProps> = ({
  children,
  animation,
  className = '',
  index = 0,
}) => {
  const defaultItemAnimation: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const animationVariant = getAnimationConfig(animation || defaultItemAnimation);

  return (
    <motion.div
      className={className}
      variants={animationVariant}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {children}
    </motion.div>
  );
};