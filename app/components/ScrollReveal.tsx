"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { HTMLAttributes, ReactNode } from "react";

type RevealTag = "div" | "section" | "article" | "aside" | "li" | "details";

type ScrollRevealProps = HTMLAttributes<HTMLElement> & {
  as?: RevealTag;
  children: ReactNode;
  delay?: number;
};

const revealTransition = {
  duration: 0.48,
  ease: [0.22, 1, 0.36, 1],
} as const;

export function ScrollReveal({ as = "div", children, delay = 0, ...props }: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = {
    div: motion.div,
    section: motion.section,
    article: motion.article,
    aside: motion.aside,
    li: motion.li,
    details: motion.details,
  }[as];

  if (shouldReduceMotion) {
    const Tag = as;
    return <Tag {...props}>{children}</Tag>;
  }

  return (
    <MotionTag
      initial={{ opacity: 0, y: 18, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.18, margin: "0px 0px -80px 0px" }}
      transition={{ ...revealTransition, delay }}
      style={{ willChange: "opacity, transform, filter" }}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
