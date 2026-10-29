
import HeroSection from "../components/Home/HeroSection";
import ScrollingTicker from "../components/Home/ScrollingTicker";
import StatsSection from "../components/Home/StatsSection";
import AboutPreview from "../components/Home/AboutPreview";
import PillarsSection from "../components/Home/PillarsSection";
import CampusSection from "../components/Home/CampusSection";
import CTASection from "../components/Home/CTASection";

import SchoolImage from "../assets/Tiks.jpeg";

const Home = ({ setPage }) => {
  return (
    <main className="relative isolate min-h-screen text-slate-900 dark:text-white">

      {/* ========================================
          FULL HOME PAGE SCHOOL BACKGROUND
          Uses your actual Tiks.jpeg photograph
      ======================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
      >
        <img
          src={SchoolImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Navy transparent overlay */}
<div className="absolute inset-0 bg-white/85 dark:bg-[#041225]/90" />
        {/* Subtle gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-slate-200/20 dark:from-[#071b35]/20 dark:via-transparent dark:to-[#071b35]/40" />
      </div>

      {/* ========================================
          HOME PAGE CONTENT
      ======================================== */}
      <div className="relative z-10">

        {/* HERO */}
        <HeroSection setPage={setPage} />

        {/* SCROLLING TICKER */}
        <ScrollingTicker />

        {/* WHY CHOOSE TIKS */}
        <StatsSection />

        {/* ABOUT SCHOOL */}
        <AboutPreview setPage={setPage} />

        {/* CORE VALUES */}
        <PillarsSection />

        {/* CAMPUS GALLERY */}
        <CampusSection setPage={setPage} />

        {/* ADMISSIONS CTA */}
        <CTASection setPage={setPage} />

      </div>
    </main>
  );
};

export default Home;
