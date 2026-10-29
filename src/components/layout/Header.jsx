
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "../../assets/Logo.png";

const Header = ({
  page,
  setPage,

  scrolled,
  isMenuOpen,
  setIsMenuOpen,
  navLinks,
}) => {
  const mainLinks = navLinks.filter(
    (link) =>
      link.id !== "admissions" &&
      link.id !== "portal" &&
      link.id !== "events"
  );

  const navigate = (id) => {
    setPage(id);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* MAIN NAVBAR */}
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-slate-200 bg-white/95 shadow-md backdrop-blur-lg dark:border-blue-500/25 dark:bg-[#0B1220]"
            : "border-slate-200/70 bg-white/95 backdrop-blur-md dark:border-blue-500/25 dark:bg-[#0B1220]"
        }`}
      >
        <div className="mx-auto flex h-[84px] max-w-7xl items-center justify-between gap-5 px-5 sm:px-6 lg:px-8">

          {/* BRAND */}
          <button
            type="button"
            onClick={() => navigate("home")}
            aria-label="Go to TIKS homepage"
            className="flex min-w-0 shrink-0 items-center gap-3 text-left"
          >
            <img
              src={Logo}
              alt="TIKS Logo"
              className="h-14 w-14 shrink-0 rounded-full object-cover"
            />

            <div className="hidden min-w-0 sm:block">
              <span className="block text-xl font-extrabold leading-tight tracking-tight text-slate-950 dark:text-white">
                TIKS
              </span>

              <span className="block max-w-[190px] text-[10px] font-semibold uppercase leading-4 tracking-[0.04em] text-slate-600 dark:text-slate-300">
                The Indus Karakuram School
              </span>
            </div>
          </button>

          {/* DESKTOP NAVIGATION */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-4 lg:flex xl:gap-7"
          >
            {mainLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => navigate(link.id)}
                aria-current={
                  page === link.id ? "page" : undefined
                }
                className={`relative whitespace-nowrap py-3 text-[14px] font-semibold tracking-[0.01em] transition-colors duration-200 ${
                  page === link.id
                    ? "text-blue-700 dark:text-blue-400"
                    : "text-slate-800 hover:text-blue-700 dark:text-slate-100 dark:hover:text-blue-400"
                }`}
              >
                {link.label}

                {page === link.id && (
                  <span className="absolute bottom-1 left-0 h-[2px] w-full rounded-full bg-blue-700 dark:bg-blue-400" />
                )}
              </button>
            ))}
          </nav>

          {/* ACTIONS */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">


            {/* ADMISSIONS BUTTON */}
            <button
              type="button"
              onClick={() => navigate("admissions")}
              className={`hidden items-center justify-center rounded-lg px-5 py-3 text-sm font-bold transition-colors sm:inline-flex ${
                page === "admissions"
                  ? "bg-blue-900 text-white dark:bg-blue-600"
                  : "bg-blue-700 text-white hover:bg-blue-800"
              }`}
            >
              Admissions
            </button>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={
                isMenuOpen ? "Close menu" : "Open menu"
              }
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-900 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-800 lg:hidden"
            >
              {isMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE NAVIGATION */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-[60] overflow-y-auto bg-white px-6 pb-10 pt-24 dark:bg-[#0B1220] lg:hidden"
          >
            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close navigation"
              className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-lg text-slate-900 dark:text-white"
            >
              <X size={26} />
            </button>

            <div className="mx-auto max-w-lg">

              {/* MOBILE BRAND */}
              <div className="mb-8 flex items-center gap-3 border-b border-slate-200 pb-6 dark:border-blue-500/25">
                <img
                  src={Logo}
                  alt="TIKS Logo"
                  className="h-14 w-14 rounded-full object-cover"
                />

                <div>
                  <h2 className="text-lg font-extrabold text-slate-900 dark:text-white">
                    TIKS
                  </h2>

                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    The Indus Karakuram School
                  </p>
                </div>
              </div>

              {/* MOBILE LINKS */}
              <nav
                aria-label="Mobile navigation"
                className="flex flex-col"
              >
                {mainLinks.map((link) => (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => navigate(link.id)}
                    aria-current={
                      page === link.id ? "page" : undefined
                    }
                    className={`border-b border-slate-100 py-4 text-left text-xl font-semibold transition-colors dark:border-blue-500/25 ${
                      page === link.id
                        ? "text-blue-700 dark:text-blue-400"
                        : "text-slate-900 dark:text-white"
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </nav>

              {/* MOBILE ADMISSIONS */}
              <button
                type="button"
                onClick={() => navigate("admissions")}
                className="mt-8 w-full rounded-lg bg-blue-700 px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-blue-800"
              >
                Explore Admissions
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
