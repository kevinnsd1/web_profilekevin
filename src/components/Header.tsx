import { Mail, Download } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../utils/animations";
import imgKevin from "../assets/image/foto_kevin.jpg";
import cvFile from "../assets/file/CV.KevinSD.pdf";

export function Header() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-12 sm:gap-16 w-full relative"
    >
      {/* Hero Text Glow */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Text Info */}
      <div className="space-y-8 flex-1 text-center md:text-left pt-4 md:pt-0 relative z-10">
        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wide uppercase">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Available for new projects
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]"
        >
          Hi, I'm Kevin.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 via-neutral-600 to-neutral-400">I build software.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-neutral-400 text-lg sm:text-xl leading-relaxed max-w-xl mx-auto md:mx-0"
        >
          A software engineer focused on crafting clean, high-performance
          web applications and reliable systems.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row flex-wrap items-center justify-center md:justify-start gap-4 pt-2"
        >
          <a
            href="mailto:kevinsatrd01@gmail.com"
            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
          >
            <Mail size={18} />
            Say Hello
          </a>
          <a
            href={cvFile}
            download="CV_KevinSD.pdf"
            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-8 py-4 bg-transparent border border-neutral-800 text-white font-bold rounded-full hover:bg-neutral-900 hover:border-neutral-700 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <Download size={18} />
            Download CV
          </a>
          <div className="flex items-center justify-center gap-4 sm:ml-2 pt-2 sm:pt-0">
            <a
              href="https://github.com/kevinnsd1"
              target="_blank"
              rel="noreferrer"
              className="p-3 text-neutral-400 hover:text-white transition-colors duration-200 hover:bg-neutral-800 rounded-full flex items-center justify-center hover:scale-110 active:scale-95"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/kevinsatriad"
              target="_blank"
              rel="noreferrer"
              className="p-3 text-neutral-400 hover:text-white transition-colors duration-200 hover:bg-neutral-800 rounded-full flex items-center justify-center hover:scale-110 active:scale-95"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Profile Photo */}
      <motion.div
        variants={fadeUp}
        className="w-56 h-56 md:w-64 md:h-64 shrink-0 relative group mt-8 md:mt-0"
      >
        <div className="absolute inset-0 bg-neutral-600 rounded-full blur-[2.5rem] opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
        <div className="relative w-full h-full rounded-full border-2 border-white/10 p-2 overflow-hidden bg-[#030303] group-hover:border-indigo-500/30 transition-all duration-500">
          <img
            src={imgKevin}
            alt="Kevin"
            className="w-full h-full object-cover rounded-full filter grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
