
import { motion, useReducedMotion } from "framer-motion";
import SchoolVideo from "../../assets/gallery/tiks-video-001.mp4";

const AboutPreview = ({ setPage }) => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative bg-transparent px-5 py-10 sm:px-6 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={
            reduceMotion ? false : { opacity: 0, y: 20 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid overflow-hidden rounded-3xl border border-slate-200 dark:border-[#526A87]/50 bg-white dark:bg-[#041225] lg:grid-cols-2"
        >
          <div className="relative min-h-[210px] overflow-hidden sm:min-h-[320px] lg:min-h-[480px]">
            <video src={SchoolVideo} autoPlay muted loop playsInline preload="metadata" aria-label="School video" className="absolute inset-0 h-full w-full object-cover" />
          </div>

          <div className="flex flex-col justify-center p-5 sm:p-12 lg:p-14">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700 dark:text-blue-300">
              About Our School
            </span>

            <h2 className="mt-3 text-2xl font-bold sm:mt-5 leading-tight tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              More Than
              <span className="block text-blue-700 dark:text-blue-200">
                A Classroom.
              </span>
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300 sm:mt-6 sm:text-base sm:leading-8">
              At The Indus Karakuram School, we believe
              education is about more than lessons and
              textbooks. It is about helping every child
              discover their abilities, develop strong
              values, and grow with confidence.
            </p>

            {typeof setPage === "function" && (
              <button
                type="button"
                onClick={() => setPage("about")}
                className="mt-6 w-fit rounded-lg sm:mt-8 border border-slate-300 dark:border-[#526A87] bg-white dark:bg-[#041225] px-6 py-3.5 text-sm font-semibold text-slate-900 dark:text-white transition-colors hover:border-blue-300 hover:bg-slate-100 dark:hover:bg-[#091C36]"
              >
                Discover Our Story
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;
