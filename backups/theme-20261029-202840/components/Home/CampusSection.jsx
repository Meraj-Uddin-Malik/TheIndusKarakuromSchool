
import { motion, useReducedMotion } from "framer-motion";
import { Images } from "lucide-react";
import CampusImage from "../../assets/Tiks.jpeg";

const campusPhotos = [
  {
    src: CampusImage,
    alt: "The Indus Karakuram School building",
    label: "Our Campus",
  },
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85",
    alt: "Illustrative classroom photograph",
    label: "Learning Spaces",
  },
  {
    src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=85",
    alt: "Illustrative library photograph",
    label: "Reading & Discovery",
  },
];

const CampusSection = ({ setPage }) => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative bg-transparent px-5 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl">

        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-blue-300">
              Discover Our Campus
            </span>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              A Place to{" "}
              <span className="text-blue-200">
                Learn & Grow.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
              Explore the spaces that support
              learning, curiosity, and personal growth.
            </p>
          </div>

          {typeof setPage === "function" && (
            <button
              type="button"
              onClick={() => setPage("gallery")}
              className="inline-flex w-fit items-center gap-3 rounded-lg border border-[#526A87] bg-[#041225] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#091C36]"
            >
              <Images size={18} />
              Explore Gallery
            </button>
          )}
        </div>

        <div className="grid gap-4 md:h-[520px] md:grid-cols-[1.65fr_1fr]">

          <motion.figure
            initial={
              reduceMotion ? false : { opacity: 0, y: 20 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="group relative h-[340px] overflow-hidden rounded-2xl border border-[#526A87]/50 bg-[#041225] md:h-full"
          >
            <img
              src={campusPhotos[0].src}
              alt={campusPhotos[0].alt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#041225]/90 via-transparent to-transparent" />

            <figcaption className="absolute bottom-6 left-6 text-xl font-bold text-white">
              {campusPhotos[0].label}
            </figcaption>
          </motion.figure>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1 md:grid-rows-2">
            {campusPhotos.slice(1).map((photo, index) => (
              <motion.figure
                key={photo.label}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 20 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: reduceMotion ? 0 : index * 0.1,
                }}
                className="group relative h-[220px] overflow-hidden rounded-2xl border border-[#526A87]/50 bg-[#041225] sm:h-[240px] md:h-full"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#041225]/90 via-transparent to-transparent" />

                <figcaption className="absolute bottom-5 left-5 text-lg font-bold text-white">
                  {photo.label}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>

        <p className="mt-4 text-xs text-slate-300">
          Classroom and library photographs are temporary
          placeholders until actual school images are added.
        </p>
      </div>
    </section>
  );
};

export default CampusSection;
