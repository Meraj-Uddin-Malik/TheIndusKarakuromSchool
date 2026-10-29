import { motion, useReducedMotion } from "framer-motion";
import Logo from "../../assets/Logo.png";

const Preloader = () => {
  const reduceMotion = useReducedMotion();

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading The Indus Karakuram School"
      className="fixed inset-0 z-[100] flex min-h-screen items-center justify-center overflow-hidden bg-[#F8FAFC] px-6 text-[#102746] dark:bg-[#080F1D] dark:text-white"
    >
      {/* Subtle background */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-blue-500/[0.07] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-48 -right-40 h-[480px] w-[480px] rounded-full bg-blue-500/[0.08] blur-3xl" />

      <div className="relative flex w-full max-w-md flex-col items-center text-center">

        {/* Logo and circular loader */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative flex h-44 w-44 items-center justify-center sm:h-48 sm:w-48"
        >
          {/* Static outer circle */}
          <div className="absolute inset-0 rounded-full border border-blue-600/10 dark:border-blue-400/15" />

          {/* Rotating ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-blue-600 border-r-blue-400/60 dark:border-t-blue-400 dark:border-r-blue-300/50"
            animate={reduceMotion ? {} : { rotate: 360 }}
            transition={
              reduceMotion
                ? {}
                : {
                    duration: 2.5,
                    ease: "linear",
                    repeat: Infinity,
                  }
            }
          />

          {/* Logo stays still */}
          <motion.img
            src={Logo}
            alt="The Indus Karakuram School"
            className="h-32 w-32 rounded-full object-cover sm:h-36 sm:w-36"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.15 }}
          />
        </motion.div>

        {/* School identity */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-9"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-blue-600 dark:text-blue-400">
            Welcome to
          </p>

          <h1 className="mt-4 text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
            The Indus
            <span className="block">Karakuram School</span>
          </h1>

          <div className="mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-blue-500/40" />
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              Learning · Growth · Opportunity
            </p>
            <span className="h-px w-7 bg-blue-500/40" />
          </div>
        </motion.div>

        {/* Indeterminate loading bar */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="mt-12 w-full max-w-[240px]"
        >
          <div className="relative h-1 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
            <motion.div
              className="absolute inset-y-0 left-0 w-1/3 rounded-full bg-gradient-to-r from-blue-600 to-sky-400"
              animate={
                reduceMotion
                  ? { x: "100%" }
                  : { x: ["-100%", "300%"] }
              }
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : {
                      duration: 1.4,
                      ease: "easeInOut",
                      repeat: Infinity,
                    }
              }
            />
          </div>

          <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
            Loading
          </p>
        </motion.div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#102746] via-blue-500 to-[#102746]" />
    </div>
  );
};

export default Preloader;
