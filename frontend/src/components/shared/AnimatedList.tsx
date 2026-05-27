import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { staggerContainer } from "@/lib/animation/variants";
import { reduceMotionVariants } from "@/lib/animation/motion";
import { cn } from "@/lib/utils";

export function AnimatedList({ className, ...props }: HTMLMotionProps<"div">) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      variants={reduceMotionVariants(Boolean(shouldReduce), staggerContainer)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.16, margin: "0px 0px -90px 0px" }}
      className={cn(className)}
      {...props}
    />
  );
}
