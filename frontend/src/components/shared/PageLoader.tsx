import { motion, useReducedMotion } from "framer-motion";

export function PageLoader() {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      className="fixed inset-0 z-[100] overflow-hidden bg-brand-red text-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: shouldReduce ? 0 : -24 }}
      transition={{ duration: shouldReduce ? 0.12 : 0.34, ease: "easeOut" }}
      role="status"
      aria-label="Loading Ken Isaac portfolio"
    >
      <motion.div
        className="absolute inset-x-0 top-[47%] h-20 bg-black/[0.88]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: shouldReduce ? 0.1 : 0.62, ease: "easeOut" }}
        style={{ originX: 0 }}
      />
      <motion.div
        className="absolute inset-x-0 top-[58%] h-16 bg-white/10"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: shouldReduce ? 0.1 : 0.7, delay: 0.08, ease: "easeOut" }}
        style={{ originX: 1 }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.p
          className="text-sm font-semibold uppercase tracking-[0.38em] text-white/70"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduce ? 0.1 : 0.28, ease: "easeOut" }}
        >
          Lead SDET Portfolio
        </motion.p>
        <motion.h1
          className="mt-4 text-4xl font-semibold tracking-normal text-white sm:text-6xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduce ? 0.1 : 0.32, delay: 0.12, ease: "easeOut" }}
        >
          Ken <span className="text-white drop-shadow-[0_3px_14px_rgba(0,0,0,0.42)]">Isaac</span>
        </motion.h1>
        <motion.p
          className="mt-5 text-sm font-medium text-white/[0.82]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: shouldReduce ? 0.1 : 0.24, delay: 0.28, ease: "easeOut" }}
        >
          Automation Architecture / API / Mobile / CI/CD
        </motion.p>
      </div>
    </motion.div>
  );
}
