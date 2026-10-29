
import { motion, useReducedMotion } from "framer-motion";
import {
  BookOpen,
  Lightbulb,
  HeartHandshake,
  GraduationCap,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Quality Education",
    description:
      "Building a strong foundation for meaningful learning.",
  },
  {
    icon: Lightbulb,
    title: "Creative Thinking",
    description:
      "Encouraging curiosity, ideas, and independent thinking.",
  },
  {
    icon: HeartHandshake,
    title: "Character Building",
    description:
      "Helping learners grow with confidence and values.",
  },
  {
    icon: GraduationCap,
    title: "Future Ready",
    description:
      "Developing the skills and mindset for tomorrow.",
  },
];

const StatsSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative bg-transparent px-5 py-16 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700 dark:text-blue-300">
            Why Choose TIKS
          </span>

          <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            A Better Place to Learn & Grow.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
            An approach to education that values
            learning, creativity, and personal growth.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 20 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: reduceMotion ? 0 : index * 0.08,
                }}
                className="flex h-full flex-col rounded-2xl border border-slate-200 dark:border-[#526A87]/50 bg-white dark:bg-[#041225] p-7 transition-colors hover:border-blue-400/60"
              >
                <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 dark:bg-[#102B53] text-blue-700 dark:text-blue-300">
                  <Icon size={24} strokeWidth={1.8} />
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
