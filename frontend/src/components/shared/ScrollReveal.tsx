import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { fadeUp } from "@/lib/animation/variants";
import { reduceMotionVariants } from "@/lib/animation/motion";
import { cn } from "@/lib/utils";

export function ScrollReveal({ className, ...props }: HTMLMotionProps<"div">) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      variants={reduceMotionVariants(Boolean(shouldReduce), fadeUp)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
      className={cn(className)}
      {...props}
    />
  );
}
