import { Layout, Server, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../utils/animations";

export function Expertise() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="space-y-10"
    >
      <motion.h2
        variants={fadeUp}
        className="text-xs font-bold tracking-[0.2em] text-indigo-500 uppercase text-center md:text-left"
      >
        Expertise
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Frontend */}
        <motion.div
          variants={fadeUp}
          whileHover={{ y: -5 }}
          className="glass p-8 rounded-3xl group transition-all duration-500 hover:border-indigo-500/50 hover:glow-indigo"
        >
          <div className="mb-6 p-4 rounded-2xl bg-indigo-500/10 w-fit group-hover:scale-110 transition-transform duration-500">
            <Layout className="text-indigo-400 group-hover:text-indigo-300" size={32} />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Frontend Dev</h3>
          <p className="text-neutral-400 text-sm leading-relaxed translate-y-0 group-hover:text-neutral-300 transition-colors">
            Building responsive, high-performance web interfaces using React,
            TypeScript, and Tailwind CSS.
          </p>
        </motion.div>

        {/* Backend */}
        <motion.div
          variants={fadeUp}
          whileHover={{ y: -5 }}
          className="glass p-8 rounded-3xl group transition-all duration-500 hover:border-cyan-500/50 hover:glow-cyan"
        >
          <div className="mb-6 p-4 rounded-2xl bg-cyan-500/10 w-fit group-hover:scale-110 transition-transform duration-500">
            <Server className="text-cyan-400 group-hover:text-cyan-300" size={32} />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Backend & API</h3>
          <p className="text-neutral-400 text-sm leading-relaxed group-hover:text-neutral-300 transition-colors">
            Designing robust RESTful APIs and managing databases with a focus on
            security and scalability.
          </p>
        </motion.div>

        {/* Architecture */}
        <motion.div
          variants={fadeUp}
          whileHover={{ y: -5 }}
          className="glass p-8 rounded-3xl group transition-all duration-500 hover:border-purple-500/50 shadow-[0_0_20px_-5px_rgba(168,85,247,0.2)]"
        >
          <div className="mb-6 p-4 rounded-2xl bg-purple-500/10 w-fit group-hover:scale-110 transition-transform duration-500">
            <Shield className="text-purple-400 group-hover:text-purple-300" size={32} />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Architecture</h3>
          <p className="text-neutral-400 text-sm leading-relaxed group-hover:text-neutral-300 transition-colors">
            Planning system structures that are maintainable, efficient, and
            ready for growth.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
