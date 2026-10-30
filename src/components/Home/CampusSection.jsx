import { motion, useReducedMotion } from "framer-motion";
import { Images } from "lucide-react";

import resultImage from "../../assets/gallery/tiks-photo-015.jpeg";
import eventImage from "../../assets/gallery/tiks-photo-002.jpeg";
import assemblyImage from "../../assets/gallery/tiks-photo-003.jpeg";

const campusPhotos = [
  {
    src: resultImage,
    alt: "Result Day at The Indus Karakuram School",
    label: "Celebrating Achievements",
  },
  {
    src: eventImage,
    alt: "School events and activities",
    label: "School Events & Activities",
  },
  {
    src: assemblyImage,
    alt: "School morning assembly",
    label: "Morning Assembly",
  },
];

const CampusSection = ({ setPage }) => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative bg-transparent px-5 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl">

        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700 dark:text-blue-300">
              Discover Our Campus
            </span>

            <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              A Place to{" "}
              <span className="text-blue-700 dark:text-blue-200">
                Learn & Grow.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-300">
              Explore the spaces that support learning, curiosity,
              and personal growth.
            </p>
          </div>

          {typeof setPage === "function" && (
            <button
              type="button"
              onClick={() => setPage("gallery")}
              className="inline-flex w-fit items-center gap-3 rounded-lg border border-slate-300 dark:border-[#526A87] bg-white dark:bg-[#041225] px-6 py-3.5 text-sm font-semibold text-slate-900 dark:text-white transition-colors hover:bg-slate-100 dark:hover:bg-[#091C36]"
            >
              <Images size={18} />
              Explore Gallery
            </button>
          )}
        </div>

        <div className="grid gap-4 md:h-[456px] md:grid-cols-1">

          <motion.figure
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="group relative h-[280px] min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-[#041225] sm:h-[360px] md:h-full"
          >
            <img
              src={campusPhotos[0].src}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full scale-110 object-cover blur-xl brightness-75"
            />
            <img
              src={campusPhotos[0].src}
              alt={campusPhotos[0].alt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-contain object-center"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#041225]/75 via-[#0B3765]/20 to-transparent transition-opacity duration-500 group-hover:opacity-0" />

            <figcaption className="pointer-events-none absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#041225]/85 to-transparent px-6 pb-6 pt-12 text-xl font-bold text-white">
              {campusPhotos[0].label}
            </figcaption>
          </motion.figure>

          {/* TEMPORARILY HIDDEN: RIGHT-SIDE PHOTOS
          <div className="grid min-h-0 gap-4 sm:grid-cols-2 md:grid-cols-1 md:grid-rows-2">
            {campusPhotos.slice(1).map((photo, index) => (
              <motion.figure
                key={photo.label}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: reduceMotion ? 0 : index * 0.1,
                }}
                className="group relative h-[220px] min-h-0 min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-[#041225] sm:h-[240px] md:h-full"
              >
                <img
                  src={photo.src}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full scale-110 object-cover blur-xl brightness-75"
                />

                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-contain object-center"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#041225]/75 via-[#0B3765]/20 to-transparent transition-opacity duration-500 group-hover:opacity-0" />

                <figcaption className="pointer-events-none absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#041225]/85 to-transparent px-5 pb-5 pt-10 text-lg font-bold text-white">
                  {photo.label}
                </figcaption>
              </motion.figure>
            ))}
          </div>
          */}

        </div>
      </div>
    </section>
  );
};

export default CampusSection;
