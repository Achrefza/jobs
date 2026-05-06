"use client";

import { AnimatePresence, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { MotionDiv } from "./motion/SafeMotion";

const transition = {
  duration: 0.28,
  ease: [0.22, 1, 0.36, 1],
} as const;

type PageTransitionProps = {
  children?: ReactNode;
};

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <MotionDiv
        key={pathname}
        initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
        transition={transition}
        style={{ willChange: "opacity, transform, filter" }}
      >
        {children}
      </MotionDiv>
    </AnimatePresence>
  );
}
