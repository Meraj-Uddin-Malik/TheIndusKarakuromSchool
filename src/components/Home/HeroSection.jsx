
import { motion, useReducedMotion } from "framer-motion";
import { BookOpen, HeartHandshake, Lightbulb } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Quality Learning",
    description: "Building strong foundations",
  },
  {
    icon: HeartHandshake,
    title: "Strong Values",
    description: "Growing with character",
  },
  {
    icon: Lightbulb,
    title: "Creative Thinking",
    description: "Encouraging curiosity",
  },
];

const HeroSection = ({ setPage }) => {
  const reduceMotion = useReducedMotion();

  const navigate = (page) => {
    if (typeof setPage === "function") {
      setPage(page);
    }
  };

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-0 items-center bg-transparent px-5 pb-10 pt-24 sm:min-h-[90vh] sm:px-6 sm:pb-16 sm:pt-32 lg:pt-36"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl">

        {/* HERO CONTENT */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          {/* EYEBROW */}
          <div className="mb-4 flex items-center gap-2 sm:mb-7 sm:gap-3">
            <span className="h-[2px] w-9 bg-blue-300" />

            <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-blue-100 sm:text-xs sm:tracking-[0.2em]">
              Welcome to The Indus Karakuram School
            </span>
          </div>

          {/* MAIN HEADING */}
          <h1
            id="hero-heading"
            className="text-[30px] font-bold leading-[1.15] tracking-tight text-slate-900 dark:text-white sm:text-6xl sm:leading-[1.08] lg:text-[76px]"
          >
            Learn Today.
            <span className="block text-blue-700 dark:text-blue-200">
              Build Tomorrow.
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-700 dark:text-slate-100 sm:mt-7 sm:text-lg sm:leading-8">
            A welcoming place where young minds are
            encouraged to learn, explore, and grow
            through meaningful education and strong values.
          </p>

          {/* BUTTONS */}
          <div className="mt-6 grid grid-cols-2 gap-2 sm:mt-9 sm:flex sm:gap-4">
            <button
              type="button"
              onClick={() => navigate("admissions")}
className="inline-flex min-h-[46px] items-center justify-center sm:min-h-[54px] rounded-lg border border-slate-500/60 bg-white dark:bg-[#041225] px-3 py-3 text-xs font-semibold sm:px-8 sm:py-4 sm:text-sm text-slate-900 dark:text-white transition-colors duration-300 hover:bg-slate-100 dark:hover:bg-[#091C36] hover:border-blue-300"            >
              Explore Admissions
            </button>

            <button
              type="button"
              onClick={() => navigate("about")}
              className="inline-flex min-h-[46px] items-center justify-center sm:min-h-[54px] rounded-lg border border-white/50 bg-white/10 px-3 py-3 text-xs font-semibold sm:px-8 sm:py-4 sm:text-sm text-slate-900 dark:text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              Discover Our School
            </button>
          </div>
        </motion.div>

        {/* TRANSPARENT FEATURE CARDS */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8 grid gap-2 sm:mt-16 sm:grid-cols-3 sm:gap-4 lg:mt-20"
        >
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
className="grid grid-cols-[36px_1fr] items-center gap-x-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm sm:block sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg dark:border-[#355477] dark:bg-[#041225] dark:shadow-none dark:hover:border-blue-400/50"              >
                <Icon
                  size={25}
                  className="row-span-2 mb-0 text-blue-700 dark:text-blue-200 sm:mb-5"
                  aria-hidden="true"
                />

                <h3 className="text-sm font-bold text-slate-900 dark:text-white sm:text-base">
                  {feature.title}
                </h3>

                <p className="mt-0.5 text-xs text-slate-600 dark:text-slate-200 sm:mt-2 sm:text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
