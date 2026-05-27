import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { scaleIn } from "@/lib/animation/variants";
import { reduceMotionVariants } from "@/lib/animation/motion";
import { cn } from "@/lib/utils";

export function AnimatedCard({ className, ...props }: HTMLMotionProps<"div">) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      variants={reduceMotionVariants(Boolean(shouldReduce), scaleIn)}
      whileHover={shouldReduce ? undefined : { y: -2 }}
      className={cn("rounded-lg", className)}
      {...props}
    />
  );
}
