import { motion, useReducedMotion } from "framer-motion";
import type { PropsWithChildren } from "react";
import { fadeUp } from "@/lib/animation/variants";
import { reduceMotionVariants } from "@/lib/animation/motion";

export function AnimatedPage({ children }: PropsWithChildren) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.main
      variants={reduceMotionVariants(Boolean(shouldReduce), fadeUp)}
      initial="hidden"
      animate="visible"
      className="min-h-screen"
    >
      {children}
    </motion.main>
  );
}
