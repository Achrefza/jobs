"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ComponentPropsWithoutRef } from "react";

type SafeMotionTag = "a" | "article" | "aside" | "button" | "details" | "div" | "form" | "li" | "section" | "span";

export type ConflictingMotionProp = "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart";
export type SafeDomProps<Tag extends SafeMotionTag> = Omit<ComponentPropsWithoutRef<Tag>, ConflictingMotionProp>;
export type MotionOnlyProps<Tag extends SafeMotionTag> = Omit<HTMLMotionProps<Tag>, keyof ComponentPropsWithoutRef<Tag> | ConflictingMotionProp>;
export type SafeMotionProps<Tag extends SafeMotionTag> = SafeDomProps<Tag> & MotionOnlyProps<Tag>;

const conflictingMotionProps: readonly ConflictingMotionProp[] = ["onDrag", "onDragStart", "onDragEnd", "onAnimationStart"];

export function omitConflictingMotionProps<Tag extends SafeMotionTag>(props: ComponentPropsWithoutRef<Tag>): SafeDomProps<Tag> {
  const safeProps: Partial<ComponentPropsWithoutRef<Tag>> = { ...props };

  for (const prop of conflictingMotionProps) {
    delete safeProps[prop as keyof ComponentPropsWithoutRef<Tag>];
  }

  return safeProps as SafeDomProps<Tag>;
}


function sanitizeMotionProps<Tag extends SafeMotionTag>(props: SafeMotionProps<Tag>): SafeMotionProps<Tag> {
  const safeProps: Partial<SafeMotionProps<Tag>> = { ...props };

  for (const prop of conflictingMotionProps) {
    delete safeProps[prop as keyof SafeMotionProps<Tag>];
  }

  return safeProps as SafeMotionProps<Tag>;
}

export function MotionAnchor(props: SafeMotionProps<"a">) {
  return <motion.a {...sanitizeMotionProps(props)} />;
}

export function MotionArticle(props: SafeMotionProps<"article">) {
  return <motion.article {...sanitizeMotionProps(props)} />;
}

export function MotionAside(props: SafeMotionProps<"aside">) {
  return <motion.aside {...sanitizeMotionProps(props)} />;
}

export function MotionButton(props: SafeMotionProps<"button">) {
  return <motion.button {...sanitizeMotionProps(props)} />;
}

export function MotionDetails(props: SafeMotionProps<"details">) {
  return <motion.details {...sanitizeMotionProps(props)} />;
}

export function MotionDiv(props: SafeMotionProps<"div">) {
  return <motion.div {...sanitizeMotionProps(props)} />;
}

export function MotionForm(props: SafeMotionProps<"form">) {
  return <motion.form {...sanitizeMotionProps(props)} />;
}

export function MotionLi(props: SafeMotionProps<"li">) {
  return <motion.li {...sanitizeMotionProps(props)} />;
}

export function MotionSection(props: SafeMotionProps<"section">) {
  return <motion.section {...sanitizeMotionProps(props)} />;
}

export function MotionSpan(props: SafeMotionProps<"span">) {
  return <motion.span {...sanitizeMotionProps(props)} />;
}
