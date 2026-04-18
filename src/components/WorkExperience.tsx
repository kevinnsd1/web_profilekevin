import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../utils/animations";
import infiniteLearningLogo from "../assets/image/infinitelearning.jpg";
import skyeLogo from "../assets/image/skye.jpg";
import nolimitLogo from "../assets/image/nolimit.png";

interface ExperienceItem {
  period: string;
  company: string;
  role: string;
  location: string;
  description: string;
  logo: string;
  accentColor: string;
  glowColor: string;
  borderColor: string;
  bgColor: string;
  textColor: string;
  tags: string[];
}

const experiences: ExperienceItem[] = [
  {
    period: "Des 2025 – Apr 2026",
    company: "Nolimit Indonesia",
    role: "Front End Engineer",
    location: "Bandung, Jawa Barat",
    description:
      "Nolimit Indonesia adalah perusahaan teknologi Big Data & AI yang berspesialisasi dalam social media monitoring dan analytics. Berdiri sejak 2010, Nolimit melayani ratusan klien korporat, UMKM, dan pemerintahan dengan produk unggulan NoLimit Dashboard yang menyajikan analisis sentimen, tren media sosial, dan brand intelligence secara real-time.",
    logo: nolimitLogo,
    accentColor: "purple",
    glowColor: "rgba(168,85,247,0.25)",
    borderColor: "border-purple-500/30",
    bgColor: "bg-purple-500/10",
    textColor: "text-purple-400",
    tags: ["React", "TypeScript", "Data Visualization", "API Integration"],
  },
  {
    period: "Jul 2024 – Feb 2025",
    company: "SMK Skye Digipreneur School",
    role: "Web Developer",
    location: "Bandung, Jawa Barat",
    description:
      "Skye Digipreneur School adalah sekolah menengah kejuruan berbasis digital entrepreneurship yang didirikan oleh Yayasan Skye Media Cipta Teknologi. Sekolah ini memadukan pendidikan formal dengan dunia bisnis, melatih siswa menjadi pengusaha muda yang kompeten di bidang desain komunikasi visual, e-commerce, dan pemasaran digital.",
    logo: skyeLogo,
    accentColor: "cyan",
    glowColor: "rgba(6,182,212,0.25)",
    borderColor: "border-cyan-500/30",
    bgColor: "bg-cyan-500/10",
    textColor: "text-cyan-400",
    tags: ["Next.js", "Node.js", "PostgreSQL", "UI/UX"],
  },
  {
    period: "Feb 2024 – Jul 2024",
    company: "Infinite Learning",
    role: "Web Developer",
    location: "Batam, Kepulauan Riau",
    description:
      "Infinite Learning adalah lembaga edukasi teknologi berbasis di Batam yang berfokus pada pengembangan SDM digital melalui program pelatihan intensif. Berkolaborasi dengan industri dan perguruan tinggi, Infinite Learning menghadirkan kurikulum relevan di bidang coding, UI/UX, dan transformasi digital.",
    logo: infiniteLearningLogo,
    accentColor: "indigo",
    glowColor: "rgba(99,102,241,0.25)",
    borderColor: "border-indigo-500/30",
    bgColor: "bg-indigo-500/10",
    textColor: "text-indigo-400",
    tags: ["React", "TypeScript", "Tailwind CSS", "REST API"],
  },
];

export function WorkExperience() {
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
        Work Experience
      </motion.h2>

      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/40 via-cyan-500/20 to-purple-500/40 hidden md:block" />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ x: 4 }}
              className="relative flex flex-col md:flex-row gap-6 md:pl-24 group"
            >
              {/* Timeline dot */}
              <div
                className="absolute left-0 top-8 hidden md:flex items-center justify-center"
                style={{ left: "calc(2rem - 0.5rem)" }}
              >
                <div
                  className={`w-4 h-4 rounded-full border-2 ${exp.borderColor} bg-[#030303] group-hover:scale-125 transition-transform duration-300`}
                  style={{
                    boxShadow: `0 0 12px ${exp.glowColor}`,
                  }}
                />
              </div>

              {/* Card */}
              <div
                className={`flex-1 glass rounded-3xl p-6 sm:p-8 border transition-all duration-500 group-hover:${exp.borderColor} group-hover:shadow-[0_0_30px_-8px_var(--glow)]`}
                style={
                  {
                    "--glow": exp.glowColor,
                  } as React.CSSProperties
                }
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                  {/* Logo */}
                  <div
                    className={`shrink-0 w-14 h-14 rounded-2xl ${exp.bgColor} border ${exp.borderColor} flex items-center justify-center overflow-hidden p-1 group-hover:scale-105 transition-transform duration-500`}
                  >
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-full h-full object-contain rounded-xl"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-1">
                      <h3 className="text-lg font-bold text-white leading-tight">
                        {exp.company}
                      </h3>
                      <span
                        className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full ${exp.bgColor} ${exp.textColor} border ${exp.borderColor} whitespace-nowrap`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
                        {exp.period}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span
                        className={`text-sm font-semibold ${exp.textColor}`}
                      >
                        {exp.role}
                      </span>
                      <span className="text-neutral-600">·</span>
                      <span className="text-xs text-neutral-500">
                        📍 {exp.location}
                      </span>
                    </div>

                    <p className="text-neutral-400 text-sm leading-relaxed mb-5 group-hover:text-neutral-300 transition-colors duration-300">
                      {exp.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, i) => (
                        <span
                          key={i}
                          className={`text-xs font-medium px-2.5 py-1 rounded-lg ${exp.bgColor} ${exp.textColor} border ${exp.borderColor} hover:scale-105 transition-transform duration-200`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
