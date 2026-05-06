"use client";

import { useReducedMotion } from "framer-motion";
import { MotionDiv } from "./motion/SafeMotion";

type AnimatedLoadingOverlayProps = {
  eyebrow?: string;
  message: string;
  detail?: string;
};

export function AnimatedLoadingOverlay({ eyebrow = "Loading", message, detail }: AnimatedLoadingOverlayProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <MotionDiv
      aria-live="polite"
      className="fixed inset-0 z-50 grid place-items-center bg-white/95 px-6 backdrop-blur-md"
      initial={shouldReduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={shouldReduceMotion ? undefined : { opacity: 0 }}
      role="status"
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      <MotionDiv
        className="w-full max-w-sm text-center"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 12, filter: "blur(5px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-xs font-black uppercase tracking-[0.28em] text-[#0a66c2]">{eyebrow}</p>
        <div className="mx-auto mt-6 loader-ring" />
        <div className="mt-8 space-y-3">
          <div className="mx-auto h-3 w-40 overflow-hidden rounded-full bg-blue-100">
            <MotionDiv
              className="h-full w-1/2 rounded-full bg-[#0a66c2]"
              animate={shouldReduceMotion ? undefined : { x: ["-100%", "220%"] }}
              transition={{ duration: 1.2, ease: "easeInOut", repeat: Infinity }}
            />
          </div>
          <p className="text-2xl font-bold text-slate-950">{message}</p>
          {detail ? <p className="text-sm font-medium text-slate-600">{detail}</p> : null}
        </div>
      </MotionDiv>
    </MotionDiv>
  );
}
