import { motion } from "framer-motion";

// Neo-Brutalism Redesign Components
import { NeoHeader } from "./components/NeoHeader";
import { NeoWorkExperience } from "./components/NeoWorkExperience";
import { NeoExpertise } from "./components/NeoExpertise";
import { NeoProjects } from "./components/NeoProjects";
import { NeoFooter } from "./components/NeoFooter";

function App() {
  return (
    <div className="min-h-screen bg-[#0d0d0f] text-white font-sans selection:bg-[#FFE600] selection:text-black overflow-x-hidden">
      {/* Neo-Brutalism Grid pattern overlay */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.12]"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: `24px 24px`,
        }}
      />

      {/* Main Content Area */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-20"
        >
          <NeoHeader />

          <div className="border-t-4 border-dashed border-neutral-800 my-12" />
          <NeoWorkExperience />

          <div className="border-t-4 border-dashed border-neutral-800 my-12" />
          <NeoExpertise />

          <div className="border-t-4 border-dashed border-neutral-800 my-12" />
          <NeoProjects />

          <NeoFooter />
        </motion.div>
      </main>
    </div>
  );
}

export default App;
