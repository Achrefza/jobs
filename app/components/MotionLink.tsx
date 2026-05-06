"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import Link, { type LinkProps } from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type AnchorProps = ComponentPropsWithoutRef<"a">;
type ConflictingAnchorMotionProp = "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart";
type CleanAnchorProps = Omit<AnchorProps, ConflictingAnchorMotionProp>;
type AnchorMotionAnimationProps = Pick<HTMLMotionProps<"a">, "whileHover" | "whileTap" | "transition">;

type MotionLinkProps = LinkProps &
  Omit<AnchorProps, keyof LinkProps> & {
    children: ReactNode;
    lift?: "none" | "sm" | "md";
  };

const AnimatedContainer = motion.span;
const AnimatedAnchor = motion.a;
const CONFLICTING_ANCHOR_MOTION_PROPS: readonly ConflictingAnchorMotionProp[] = ["onDrag", "onDragStart", "onDragEnd", "onAnimationStart"];

function getLiftDistance(lift: MotionLinkProps["lift"]) {
  return lift === "md" ? -4 : lift === "sm" ? -2 : 0;
}

function omitConflictingMotionProps(props: AnchorProps): CleanAnchorProps {
  const cleanedProps = { ...props };

  for (const prop of CONFLICTING_ANCHOR_MOTION_PROPS) {
    delete cleanedProps[prop];
  }

  return cleanedProps;
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

type MotionAnchorProps = CleanAnchorProps & {
  children: ReactNode;
  lift?: "none" | "sm" | "md";
};

export function MotionAnchor({ children, lift = "sm", ...props }: MotionAnchorProps) {
  const shouldReduceMotion = useReducedMotion();
  const liftDistance = getLiftDistance(lift);
  const anchorProps = omitConflictingMotionProps(props);
  const motionProps: AnchorMotionAnimationProps = {
    whileHover: shouldReduceMotion || lift === "none" ? undefined : { y: liftDistance, scale: lift === "md" ? 1.015 : 1.01 },
    whileTap: shouldReduceMotion ? undefined : { scale: 0.985 },
    transition: { duration: 0.18, ease: "easeOut" },
  };

  return (
    <AnimatedAnchor
      {...motionProps}
      {...anchorProps}
    >
      {children}
    </AnimatedAnchor>
  );
}
