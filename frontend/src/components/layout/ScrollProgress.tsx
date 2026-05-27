import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 24,
    mass: 0.2
  });

  return (
    <motion.div
      aria-hidden="true"
      className="section-progress-shadow fixed left-0 top-0 z-50 h-1 w-full origin-left bg-brand-red"
      style={{ scaleX }}
    />
  );
}
