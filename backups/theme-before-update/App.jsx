
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Layout
import Preloader from "./components/layout/Preloader";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Admissions from "./pages/Addmissions";
import Curriculam from "./pages/Curriculam";
import Faculty from "./pages/Faculty";
import Gallery from "./pages/Gallary";
import Contact from "./pages/Contact";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "curriculam", label: "Academics" },
  { id: "faculty", label: "Faculty" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
  { id: "admissions", label: "Admissions" },
];

const getSystemTheme = () => {
  if (typeof window === "undefined") return "light";

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const getSavedTheme = () => {
  if (typeof window === "undefined") return "system";

  try {
    const saved = localStorage.getItem("tiks-theme");

    return ["light", "dark", "system"].includes(saved)
      ? saved
      : "system";
  } catch {
    return "system";
  }
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState("home");

  // User preference: light, dark or system
  const [themeMode, setThemeMode] = useState(getSavedTheme);

  // Current operating system theme
  const [systemTheme, setSystemTheme] = useState(getSystemTheme);

  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Resolve actual theme
  const theme =
    themeMode === "system" ? systemTheme : themeMode;

  // Preloader
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // Listen for operating system theme changes
  useEffect(() => {
    const media = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    const handleSystemThemeChange = (event) => {
      setSystemTheme(event.matches ? "dark" : "light");
    };

    setSystemTheme(media.matches ? "dark" : "light");

    media.addEventListener("change", handleSystemThemeChange);

    return () => {
      media.removeEventListener(
        "change",
        handleSystemThemeChange
      );
    };
  }, []);

  // Apply light/dark class and save preference
  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;

    try {
      localStorage.setItem("tiks-theme", themeMode);
    } catch {
      // Continue even if storage is unavailable.
    }
  }, [theme, themeMode]);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Reset scroll on page navigation
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setIsMenuOpen(false);
  }, [page]);

  // Compatibility with existing Header theme toggle
  const setTheme = (value) => {
    if (typeof value === "function") {
      setThemeMode((previousMode) => {
        const previousResolved =
          previousMode === "system"
            ? systemTheme
            : previousMode;

        const next = value(previousResolved);

        return ["light", "dark", "system"].includes(next)
          ? next
          : previousMode;
      });
    } else if (["light", "dark", "system"].includes(value)) {
      setThemeMode(value);
    }
  };

  // Page rendering
  const renderPage = () => {
    switch (page) {
      case "home":
        return <Home setPage={setPage} />;

      case "about":
        return <About setPage={setPage} />;

      case "admissions":
        return <Admissions setPage={setPage} />;

      case "curriculam":
        return <Curriculam setPage={setPage} />;

      case "faculty":
        return <Faculty setPage={setPage} />;

      case "gallery":
        return <Gallery setPage={setPage} />;

      case "contact":
        return <Contact setPage={setPage} />;

      default:
        return <Home setPage={setPage} />;
    }
  };

  return (
    <div className={theme}>
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">

        {/* Preloader */}
        <AnimatePresence>
          {loading && <Preloader />}
        </AnimatePresence>

        {!loading && (
          <>
            {/* Header */}
            <Header
              page={page}
              setPage={setPage}
              theme={theme}
              setTheme={setTheme}
              themeMode={themeMode}
              setThemeMode={setThemeMode}
              scrolled={scrolled}
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
              navLinks={navLinks}
            />

            {/* Page content */}
            <main className="min-h-screen">
              <AnimatePresence mode="wait">
                <motion.div
                  key={page}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                >
                  {renderPage()}
                </motion.div>
              </AnimatePresence>
            </main>

            {/* Footer */}
            <Footer />
          </>
        )}
      </div>
    </div>
  );
}
