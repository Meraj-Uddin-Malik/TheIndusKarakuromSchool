
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Layout Components
import Preloader from "./components/layout/Preloader";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Admissions from "./pages/Addmissions";
import Curriculam from "./pages/Curriculam";
import Faculty from "./pages/Faculty";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

// Navigation
const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "curriculam", label: "Academics" },
  { id: "faculty", label: "Faculty" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
  { id: "admissions", label: "Admissions" },
];

export default function App() {
  // Application states
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState("home");


  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  // Preloader
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => window.clearTimeout(timer);
  }, []);


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

  // Reset scroll after navigation
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  }, [page]);

  // Navigate and close mobile menu
  const navigateToPage = (nextPage) => {
    setPage(nextPage);
    setIsMenuOpen(false);
  };

  const renderPage = () => {
    switch (page) {
      case "home":
        return <Home setPage={navigateToPage} />;

      case "about":
        return <About setPage={navigateToPage} />;

      case "admissions":
        return <Admissions setPage={navigateToPage} />;

      case "curriculam":
        return <Curriculam setPage={navigateToPage} />;

      case "faculty":
        return <Faculty setPage={navigateToPage} />;

      case "gallery":
        return <Gallery setPage={navigateToPage} />;

      case "contact":
        return <Contact setPage={navigateToPage} />;

      default:
        return <Home setPage={navigateToPage} />;
    }
  };

  return (
    <div className="dark">
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">

        {/* PRELOADER */}
        <AnimatePresence>
          {loading && <Preloader />}
        </AnimatePresence>

        {!loading && (
          <>
            {/* HEADER */}
            <Header
              page={page}
              setPage={navigateToPage}

              scrolled={scrolled}
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
              navLinks={navLinks}
            />

            {/* PAGE CONTENT */}
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

            {/* FOOTER */}
            <Footer />
          </>
        )}
      </div>
    </div>
  );
}
