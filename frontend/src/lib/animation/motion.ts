import type { Variants } from "framer-motion";

export function reduceMotionVariants(shouldReduce: boolean, variants: Variants): Variants {
  if (!shouldReduce) {
    return variants;
  }

  return {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { duration: 0 } }
  };
}
