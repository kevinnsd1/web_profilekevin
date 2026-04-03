import { Header } from "./components/Header";
import { Expertise } from "./components/Expertise";
import { Projects } from "./components/Projects";
import { motion } from "framer-motion";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-[#030303] text-neutral-200 font-sans selection:bg-indigo-500/30 selection:text-white overflow-x-hidden">
      {/* Background Decorations */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Subtle Grain Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
          }}
        ></div>
        
        {/* Ambient Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse-glow"></div>
        <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] bg-cyan-500/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '-2s' }}></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] bg-indigo-600/5 rounded-full blur-[150px] animate-pulse-glow" style={{ animationDelay: '-1s' }}></div>
      </div>

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-20 sm:py-32 flex flex-col justify-center min-h-screen">
        <Header />

        <motion.hr
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="border-neutral-800/50 my-24 origin-left"
        />

        <Expertise />

        <motion.hr
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="border-neutral-800/50 my-24 origin-left"
        />

        <Projects />
      </main>
    </div>
  );
}

export default App;
