"use client";

import { useReducedMotion, type HTMLMotionProps } from "framer-motion";
import Link, { type LinkProps } from "next/link";
import type { ReactNode } from "react";
import { MotionAnchor as SafeMotionAnchor, MotionSpan, omitConflictingMotionProps, type SafeDomProps } from "./motion/SafeMotion";

type AnchorProps = SafeDomProps<"a">;
type AnchorMotionAnimationProps = Pick<HTMLMotionProps<"a">, "whileHover" | "whileTap" | "transition">;

type MotionLinkProps = LinkProps &
  Omit<AnchorProps, keyof LinkProps> & {
    children?: ReactNode;
    lift?: "none" | "sm" | "md";
  };

function getLiftDistance(lift: MotionLinkProps["lift"]) {
  return lift === "md" ? -4 : lift === "sm" ? -2 : 0;
}

export function MotionLink({ children, lift = "sm", ...props }: MotionLinkProps) {
  const shouldReduceMotion = useReducedMotion();
  const liftDistance = getLiftDistance(lift);

  return (
    <MotionSpan
      style={{ display: "inline-block" }}
      whileHover={shouldReduceMotion || lift === "none" ? undefined : { y: liftDistance, scale: lift === "md" ? 1.015 : 1.01 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
    >
      <Link {...props}>{children}</Link>
    </MotionSpan>
  );
}

type MotionAnchorProps = AnchorProps & {
  children?: ReactNode;
  lift?: "none" | "sm" | "md";
};

export function MotionAnchor({ children, lift = "sm", ...props }: MotionAnchorProps) {
  const shouldReduceMotion = useReducedMotion();
  const liftDistance = getLiftDistance(lift);
  const anchorProps = omitConflictingMotionProps<"a">(props);
  const motionProps: AnchorMotionAnimationProps = {
    whileHover: shouldReduceMotion || lift === "none" ? undefined : { y: liftDistance, scale: lift === "md" ? 1.015 : 1.01 },
    whileTap: shouldReduceMotion ? undefined : { scale: 0.985 },
    transition: { duration: 0.18, ease: "easeOut" },
  };

  return (
    <SafeMotionAnchor
      {...motionProps}
      {...anchorProps}
    >
      {children}
    </SafeMotionAnchor>
  );
}
