"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type MotionLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    children: ReactNode;
    lift?: "none" | "sm" | "md";
  };

const AnimatedContainer = motion.span;

function getLiftDistance(lift: MotionLinkProps["lift"]) {
  return lift === "md" ? -4 : lift === "sm" ? -2 : 0;
}

export function MotionLink({ children, lift = "sm", ...props }: MotionLinkProps) {
  const shouldReduceMotion = useReducedMotion();
  const liftDistance = getLiftDistance(lift);

  return (
    <AnimatedContainer
      style={{ display: "inline-block" }}
      whileHover={shouldReduceMotion || lift === "none" ? undefined : { y: liftDistance, scale: lift === "md" ? 1.015 : 1.01 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
    >
      <Link {...props}>{children}</Link>
    </AnimatedContainer>
  );
}

const AnimatedAnchor = motion.a;

type MotionAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  lift?: "none" | "sm" | "md";
};

export function MotionAnchor({ children, lift = "sm", ...props }: MotionAnchorProps) {
  const shouldReduceMotion = useReducedMotion();
  const liftDistance = getLiftDistance(lift);

  return (
    <AnimatedAnchor
      whileHover={shouldReduceMotion || lift === "none" ? undefined : { y: liftDistance, scale: lift === "md" ? 1.015 : 1.01 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      {...props}
    >
      {children}
    </AnimatedAnchor>
  );
}
