import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Menu, X, Sun, Moon } from "lucide-react";
import Logo from "../../assets/Logo.png";


const Header = ({
  page,
  setPage,
  theme,
  setTheme,
  scrolled,
  isMenuOpen,
  setIsMenuOpen,
  navLinks,
}) => {
  return (
    <>
      {/* --- DESKTOP DYNAMIC ISLAND HEADER --- */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center pt-0 transition-all duration-500 ${scrolled ? "pt-2" : ""}`}
      >
        <div
          className={`flex items-center justify-between gap-12 px-8 py-4 rounded-full border transition-all duration-500 ${
            scrolled
              ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl border-slate-200 dark:border-white/10 shadow-2xl w-[95%] md:w-[85%]"
              : "bg-transparent border-transparent w-full container mx-auto"
          }`}
        >
          {/* Logo Section */}
          <div
            onClick={() => setPage("home")}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-15 h-15 rounded-lg flex items-center justify-center text-white group-hover:rotate-12 transition-transform">
              <img
            src={Logo}
                alt="School Logo"
                className="w-14 h-14 object-contain rounded-full"
              />
            </div>
            <span className="font-black text-xs tracking-tighter uppercase text-slate-500 dark:text-white">
              The Indus Karakuram School
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks
              .filter((l) => !l.isAction)
              .map((link) => (
                <button
                  key={link.id}
                  onClick={() => setPage(link.id)}
                  className={`text-[12px] font-black uppercase tracking-widest transition-all hover:text-blue-600 ${
                    page === link.id ? "text-blue-600" : "text-slate-400"
                  }`}
                >
                  {link.label}
                </button>
              ))}
          </nav>

          {/* Actions (Theme & Mobile Toggle) */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
              className="p-2 text-slate-400 hover:text-blue-600 transition-colors"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setPage("portal")}
              className="hidden md:flex px-6 py-2 bg-blue-600 text-white rounded-full font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-transform"
            >
              TIKS Portal
            </button>

            <button
              className="lg:hidden p-2 text-slate-900 dark:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* --- INTEGRATED MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white dark:bg-slate-950 flex flex-col justify-center p-12"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-10 right-10 text-slate-400 hover:text-blue-600 transition-colors"
            >
              <X size={40} />
            </button>

            {/* Menu Links */}
            <div className="space-y-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                >
                  <button
                    onClick={() => {
                      setPage(link.id);
                      setIsMenuOpen(false); // Auto-close menu on click
                    }}
                    className={`block text-5xl md:text-7xl font-black tracking-tighter text-left w-full transition-colors ${
                      page === link.id
                        ? "text-blue-600"
                        : "text-slate-900 dark:text-white hover:text-blue-400"
                    }`}
                  >
                    {link.label}
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Mobile Footer Branding */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-12 left-12 text-[10px] font-black uppercase tracking-widest text-slate-400"
            >
              The Indus Karakuram School <br />
              Version 4.2.0
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
