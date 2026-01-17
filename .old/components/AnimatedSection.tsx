/** @jsxImportSource @emotion/react */

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale";
  className?: string;
}

export const AnimatedSection = ({
  children,
  delay = 0,
  direction = "up",
  className,
}: AnimatedSectionProps) => {
  const variants = {
    up: {
      initial: { opacity: 0, y: 60 },
      animate: { opacity: 1, y: 0 },
    },
    down: {
      initial: { opacity: 0, y: -60 },
      animate: { opacity: 1, y: 0 },
    },
    left: {
      initial: { opacity: 0, x: -60 },
      animate: { opacity: 1, x: 0 },
    },
    right: {
      initial: { opacity: 0, x: 60 },
      animate: { opacity: 1, x: 0 },
    },
    scale: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
    },
  };

  return (
    <motion.div
      className={className}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.1 }}
      variants={variants[direction]}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
};
