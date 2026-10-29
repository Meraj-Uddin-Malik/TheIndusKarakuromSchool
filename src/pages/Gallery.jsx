import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowUpRight, Camera, School, BookOpen, Palette,
  CalendarDays, Users, X, ChevronLeft, ChevronRight
} from "lucide-react";

const categories = [
  { id: "all", label: "All Moments" },
  { id: "campus", label: "Campus" },
  { id: "classroom", label: "Classrooms" },
  { id: "activities", label: "Activities" },
  { id: "events", label: "Events" },
];

// Add approved school photo imports and assign them to image.
// Empty images intentionally display clearly marked placeholders.
const photos = [
  { id: 1, title: "A View of Our Campus", category: "campus", icon: School, image: null, size: "md:col-span-2 md:row-span-2" },
  { id: 2, title: "Inside the Classroom", category: "classroom", icon: BookOpen, image: null, size: "" },
  { id: 3, title: "Learning Moments", category: "classroom", icon: Users, image: null, size: "" },
  { id: 4, title: "Creative Activities", category: "activities", icon: Palette, image: null, size: "md:row-span-2" },
  { id: 5, title: "School Gatherings", category: "events", icon: CalendarDays, image: null, size: "md:col-span-2" },
  { id: 6, title: "Around the School", category: "campus", icon: School, image: null, size: "" },
];

function PhotoVisual({ photo, enlarged = false }) {
  const Icon = photo.icon;

  if (photo.image) {
    return (
      <img
        src={photo.image}
        alt={photo.title}
        loading="lazy"
        className={`h-full w-full ${enlarged ? "object-contain" : "object-cover transition-transform duration-700 group-hover:scale-105"}`}
      />
    );
  }

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#203958] via-[#14263F] to-[#0B1426] px-5 text-center">
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-blue-400/10" />
      <div className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full border border-blue-400/10" />
      <div className="relative rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5">
        <Icon size={enlarged ? 48 : 32} strokeWidth={1.3} className="text-blue-300" />
      </div>
      <span className="relative mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-blue-200/70">
        School Photo Pending
      </span>
    </div>
  );
}

export default function Gallery() {
  const pageRef = useRef(null);
  const [category, setCategory] = useState("all");
  const [selectedId, setSelectedId] = useState(null);

  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const visible = photos.filter(
    (photo) => category === "all" || photo.category === category
  );

  const selectedIndex = visible.findIndex((photo) => photo.id === selectedId);
  const selected = selectedIndex >= 0 ? visible[selectedIndex] : null;

  useEffect(() => {
    if (selectedId === null) return;

    const handleKey = (event) => {
      if (event.key === "Escape") setSelectedId(null);
      if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        const direction = event.key === "ArrowRight" ? 1 : -1;
        setSelectedId((current) => {
          const index = visible.findIndex((photo) => photo.id === current);
          return visible[(index + direction + visible.length) % visible.length].id;
        });
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedId, visible]);

  const move = (direction) => {
    if (selectedIndex < 0) return;
    const next = (selectedIndex + direction + visible.length) % visible.length;
    setSelectedId(visible[next].id);
  };

  return (
    <main ref={pageRef} className="min-w-0 overflow-x-clip bg-[#080F1D] text-white">
      {/* EDITORIAL HERO */}
      <section className="relative overflow-hidden border-b border-white/10 bg-[#0B1527] px-5 pb-12 pt-32 sm:px-6 lg:pb-16 lg:pt-40">
        <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-end gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
              <Camera size={16} /> The Indus Karakuram School
            </div>
            <h1 className="text-2xl font-bold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
              Life in
              <span className="block font-serif italic font-normal text-blue-400">
                Pictures.
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="lg:pb-3"
          >
            <div className="mb-5 h-px w-14 bg-blue-400" />
            <p className="max-w-md text-base leading-8 text-slate-300">
              A dedicated space for photographs of our school,
              the people who make it special, and moments worth remembering.
            </p>
            <a
              href="#photo-collection"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300"
            >
              Explore the gallery <ArrowUpRight size={17} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* FEATURED PHOTO */}
      <section className="px-5 pt-8 sm:px-6 lg:pt-12">
        <div className="mx-auto max-w-7xl">
          <button
            type="button"
            onClick={() => setSelectedId(1)}
            className="group relative block h-[300px] w-full overflow-hidden rounded-[1.5rem] border border-white/10 text-left sm:h-[420px] lg:h-[520px]"
          >
            <PhotoVisual photo={photos[0]} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 flex flex-wrap items-end justify-between gap-4 p-6 sm:p-10">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
                  Featured Frame / Campus
                </span>
                <h2 className="mt-3 text-xl font-bold sm:text-4xl">
                  A View of Our Campus
                </h2>
              </div>
              <span className="rounded-full border border-white/30 bg-white/10 p-3">
                <ArrowUpRight size={23} />
              </span>
            </div>
          </button>
        </div>
      </section>

      {/* PHOTO COLLECTION */}
      <section id="photo-collection" className="scroll-mt-28 px-5 pb-24 pt-20 sm:px-6 lg:pt-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-400">
                Explore Our Collection
              </span>
              <h2 className="mt-3 text-xl font-bold tracking-tight sm:text-4xl">
                Photo Gallery
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-slate-400">
              Select a category to browse the photo spaces.
              Official school images will be added when available.
            </p>
          </div>

          <div className="mb-8 flex gap-2 overflow-x-auto border-b border-white/10 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {categories.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-pressed={category === item.id}
                onClick={() => {
                  setCategory(item.id);
                  setSelectedId(null);
                }}
                className={`shrink-0 rounded-full px-5 py-3 text-xs font-semibold transition-colors sm:text-sm ${
                  category === item.id
                    ? "bg-blue-600 text-white"
                    : "border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="grid auto-rows-[240px] grid-cols-1 gap-4 sm:grid-cols-2 md:auto-rows-[260px] md:grid-cols-3 lg:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {visible.map((photo) => (
                <motion.button
                  key={photo.id}
                  layout
                  type="button"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedId(photo.id)}
                  aria-label={`View ${photo.title}`}
                  className={`group relative min-w-0 overflow-hidden rounded-2xl border border-white/10 text-left transition-colors hover:border-blue-400/50 focus-visible:outline-2 focus-visible:outline-blue-400 ${photo.size}`}
                >
                  <PhotoVisual photo={photo} />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-5">
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-300">
                      {photo.category}
                    </span>
                    <div className="mt-2 flex items-center justify-between gap-2">
                      <h3 className="text-base font-semibold sm:text-lg">
                        {photo.title}
                      </h3>
                      <ArrowUpRight size={18} className="shrink-0" />
                    </div>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* PHOTO VIEWER */}
      <AnimatePresence>
        {selected && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Gallery photo viewer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 p-4 sm:p-8"
          >
            <button
              type="button"
              aria-label="Close photo viewer"
              onClick={() => setSelectedId(null)}
              className="absolute right-4 top-4 z-10 rounded-full border border-white/20 bg-white/10 p-3 hover:bg-white/20"
            >
              <X size={22} />
            </button>

            <div
              className="flex w-full max-w-5xl flex-col gap-5"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex h-[55vh] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#0B1527] sm:h-[68vh]">
                <PhotoVisual photo={selected} enlarged />
              </div>
              <div className="flex items-center justify-between gap-3">
                <button
                  type="button"
                  aria-label="Previous photo"
                  onClick={() => move(-1)}
                  className="rounded-full border border-white/20 p-3 hover:bg-white/10"
                >
                  <ChevronLeft size={22} />
                </button>
                <div className="min-w-0 text-center">
                  <h3 className="truncate text-sm font-semibold sm:text-lg">
                    {selected.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-400">
                    {selectedIndex + 1} / {visible.length}
                  </p>
                </div>
                <button
                  type="button"
                  aria-label="Next photo"
                  onClick={() => move(1)}
                  className="rounded-full border border-white/20 p-3 hover:bg-white/10"
                >
                  <ChevronRight size={22} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed bottom-0 left-0 top-0 z-[100] w-1 origin-top bg-blue-600"
        style={{ scaleY: progress }}
      />
    </main>
  );
}
