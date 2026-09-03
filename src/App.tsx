import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

// Neo-Brutalism Redesign Components
import { NeoHeader } from "./components/NeoHeader";
import { NeoWorkExperience } from "./components/NeoWorkExperience";
import { NeoEducation } from "./components/NeoEducation";
import { NeoExpertise } from "./components/NeoExpertise";
import { NeoProjects } from "./components/NeoProjects";
import { NeoCertificates } from "./components/NeoCertificates";
import { NeoFooter } from "./components/NeoFooter";

type RouteType = "home" | "certificates";

function MainApp() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [route, setRoute] = useState<RouteType>(() => {
    return window.location.hash === "#certificates" ? "certificates" : "home";
  });

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#certificates") {
        setRoute("certificates");
      } else {
        setRoute("home");
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigateTo = (newRoute: RouteType) => {
    setRoute(newRoute);
    if (newRoute === "certificates") {
      window.location.hash = "#certificates";
    } else {
      window.location.hash = "";
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`min-h-screen font-sans selection:bg-[#FFE600] selection:text-black overflow-x-hidden transition-colors duration-300 ${
        isDark ? "bg-[#0d0d0f] text-white" : "bg-[#FAF9F5] text-black"
      }`}
    >
      {/* Neo-Brutalism Grid pattern overlay */}
      <div
        className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-300"
        style={{
          backgroundImage: `radial-gradient(${isDark ? "#ffffff" : "#000000"} 1px, transparent 1px)`,
          backgroundSize: `24px 24px`,
          opacity: isDark ? 0.12 : 0.15,
        }}
      />

      {/* Main Content Area */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-20">
        <AnimatePresence mode="wait">
          {route === "certificates" ? (
            <motion.div
              key="certificates"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              <NeoHeader onNavigate={navigateTo} currentRoute={route} />
              <NeoCertificates />
              <NeoFooter />
            </motion.div>
          ) : (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-16"
            >
              <NeoHeader onNavigate={navigateTo} currentRoute={route} />

              <div
                className={`border-t-4 border-dashed my-12 transition-colors duration-300 ${
                  isDark ? "border-neutral-800" : "border-neutral-400"
                }`}
              />
              <NeoWorkExperience />

              <div
                className={`border-t-4 border-dashed my-12 transition-colors duration-300 ${
                  isDark ? "border-neutral-800" : "border-neutral-400"
                }`}
              />
              <NeoEducation />

              <div
                className={`border-t-4 border-dashed my-12 transition-colors duration-300 ${
                  isDark ? "border-neutral-800" : "border-neutral-400"
                }`}
              />
              <NeoExpertise />

              <div
                className={`border-t-4 border-dashed my-12 transition-colors duration-300 ${
                  isDark ? "border-neutral-800" : "border-neutral-400"
                }`}
              />
              <NeoProjects />

              <NeoFooter />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <MainApp />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
