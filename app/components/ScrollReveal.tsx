"use client";

import { useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import {
  MotionArticle,
  MotionAside,
  MotionDetails,
  MotionDiv,
  MotionLi,
  MotionSection,
  type SafeDomProps,
  type SafeMotionProps,
} from "./motion/SafeMotion";

type RevealTag = "div" | "section" | "article" | "aside" | "li" | "details";

type ScrollRevealBaseProps = {
  children?: ReactNode;
  delay?: number;
};

type ScrollRevealProps =
  | (SafeDomProps<"div"> & ScrollRevealBaseProps & { as?: undefined | "div" })
  | (SafeDomProps<"section"> & ScrollRevealBaseProps & { as: "section" })
  | (SafeDomProps<"article"> & ScrollRevealBaseProps & { as: "article" })
  | (SafeDomProps<"aside"> & ScrollRevealBaseProps & { as: "aside" })
  | (SafeDomProps<"li"> & ScrollRevealBaseProps & { as: "li" })
  | (SafeDomProps<"details"> & ScrollRevealBaseProps & { as: "details" });

const revealTransition = {
  duration: 0.48,
  ease: [0.22, 1, 0.36, 1],
} as const;

const revealMotionProps = {
  initial: { opacity: 0, y: 18, filter: "blur(5px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.18, margin: "0px 0px -80px 0px" },
  style: { willChange: "opacity, transform, filter" },
} as const;

function renderStaticTag<Tag extends RevealTag>(as: Tag, props: SafeDomProps<Tag>, children: ReactNode) {
  switch (as) {
    case "article":
      return <article {...(props as SafeDomProps<"article">)}>{children}</article>;
    case "aside":
      return <aside {...(props as SafeDomProps<"aside">)}>{children}</aside>;
    case "details":
      return <details {...(props as SafeDomProps<"details">)}>{children}</details>;
    case "li":
      return <li {...(props as SafeDomProps<"li">)}>{children}</li>;
    case "section":
      return <section {...(props as SafeDomProps<"section">)}>{children}</section>;
    case "div":
    default:
      return <div {...(props as SafeDomProps<"div">)}>{children}</div>;
  }
}

function renderMotionTag<Tag extends RevealTag>(as: Tag, props: SafeDomProps<Tag>, children: ReactNode, delay: number) {
  const motionProps = {
    ...revealMotionProps,
    transition: { ...revealTransition, delay },
    ...props,
  };

  switch (as) {
    case "article":
      return <MotionArticle {...(motionProps as SafeMotionProps<"article">)}>{children}</MotionArticle>;
    case "aside":
      return <MotionAside {...(motionProps as SafeMotionProps<"aside">)}>{children}</MotionAside>;
    case "details":
      return <MotionDetails {...(motionProps as SafeMotionProps<"details">)}>{children}</MotionDetails>;
    case "li":
      return <MotionLi {...(motionProps as SafeMotionProps<"li">)}>{children}</MotionLi>;
    case "section":
      return <MotionSection {...(motionProps as SafeMotionProps<"section">)}>{children}</MotionSection>;
    case "div":
    default:
      return <MotionDiv {...(motionProps as SafeMotionProps<"div">)}>{children}</MotionDiv>;
  }
}

export function ScrollReveal({ as, children, delay = 0, ...props }: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const tag = as ?? "div";
  const domProps = props as SafeDomProps<typeof tag>;

  if (shouldReduceMotion) {
    return renderStaticTag(tag, domProps, children);
  }

  return renderMotionTag(tag, domProps, children, delay);
}
