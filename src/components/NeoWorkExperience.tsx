import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Sparkles } from "lucide-react";
import { NeoCard, NeoBadge } from "./neobrutalism";
import infiniteLearningLogo from "../assets/image/infinitelearning.jpg";
import skyeLogo from "../assets/image/skye.jpg";
import nolimitLogo from "../assets/image/nolimit.png";

interface ExperienceItem {
  id: string;
  period: string;
  company: string;
  role: string;
  location: string;
  description: string;
  logo: string;
  badgeVariant: "purple" | "cyan" | "yellow" | "pink" | "green";
  cardBg: "white" | "yellow" | "pink" | "cyan" | "green" | "dark-card";
  tags: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: "nolimit",
    period: "DES 2025 – APR 2026",
    company: "Nolimit Indonesia",
    role: "Front End Engineer",
    location: "Bandung, Jawa Barat",
    description:
      "Nolimit Indonesia adalah perusahaan teknologi Big Data & AI yang berspesialisasi dalam social media monitoring dan analytics. Berdiri sejak 2010, Nolimit melayani ratusan klien korporat, UMKM, dan pemerintahan dengan produk unggulan NoLimit Dashboard yang menyajikan analisis sentimen, tren media sosial, dan brand intelligence secara real-time.",
    logo: nolimitLogo,
    badgeVariant: "purple",
    cardBg: "white",
    tags: ["React", "TypeScript", "Data Visualization", "API Integration", "Tailwind CSS"],
  },
  {
    id: "skye",
    period: "JUL 2024 – FEB 2025",
    company: "SMK Skye Digipreneur School",
    role: "Web Developer",
    location: "Bandung, Jawa Barat",
    description:
      "Skye Digipreneur School adalah sekolah menengah kejuruan berbasis digital entrepreneurship yang didirikan oleh Yayasan Skye Media Cipta Teknologi. Sekolah ini memadukan pendidikan formal dengan dunia bisnis, melatih siswa menjadi pengusaha muda yang kompeten di bidang desain komunikasi visual, e-commerce, dan pemasaran digital.",
    logo: skyeLogo,
    badgeVariant: "cyan",
    cardBg: "white",
    tags: ["Next.js", "Node.js", "PostgreSQL", "UI/UX", "REST API"],
  },
  {
    id: "infinite",
    period: "FEB 2024 – JUL 2024",
    company: "Infinite Learning",
    role: "Web Developer",
    location: "Batam, Kepulauan Riau",
    description:
      "Infinite Learning adalah lembaga edukasi teknologi berbasis di Batam yang berfokus pada pengembangan SDM digital melalui program pelatihan intensif. Berkolaborasi dengan industri dan perguruan tinggi, Infinite Learning menghadirkan kurikulum relevan di bidang coding, UI/UX, dan transformasi digital.",
    logo: infiniteLearningLogo,
    badgeVariant: "yellow",
    cardBg: "white",
    tags: ["React", "TypeScript", "Tailwind CSS", "REST API", "Figma"],
  },
];

export function NeoWorkExperience() {
  return (
    <div className="space-y-8">
      {/* Section Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-4 border-black pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#FFE600] text-black border-3 border-black flex items-center justify-center font-black shadow-[3px_3px_0px_0px_#000]">
            <Briefcase size={22} strokeWidth={2.5} />
          </div>
          <div>
            <h2 className="font-heading font-black text-2xl sm:text-3xl uppercase tracking-tight text-white">
              WORK EXPERIENCE
            </h2>
            <p className="text-xs font-bold text-[#00E5FF] uppercase tracking-wider">
              CAREER JOURNEY & PROFESSIONAL ROLES
            </p>
          </div>
        </div>

        <NeoBadge variant="pink" rotate="right" size="md" icon={<Sparkles size={14} />}>
          3+ ROLES EXECUTED
        </NeoBadge>
      </div>

      {/* Experience Cards Grid */}
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <NeoCard
              windowHeader
              title={`${exp.company} // ${exp.role}`}
              bg="white"
              shadowSize="md"
              hoverEffect
            >
              <div className="flex flex-col md:flex-row items-start gap-6">
                {/* Logo Frame */}
                <div className="shrink-0 w-20 h-20 rounded-2xl border-3 border-black bg-[#FFE600] p-1.5 shadow-[4px_4px_0px_0px_#000] overflow-hidden flex items-center justify-center">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>

                {/* Company Info & Description */}
                <div className="flex-1 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-dashed border-neutral-300 pb-2">
                    <div>
                      <h3 className="font-heading font-black text-xl text-black uppercase tracking-tight">
                        {exp.company}
                      </h3>
                      <p className="font-extrabold text-sm text-[#FF2E93] uppercase tracking-wide">
                        ⚡ {exp.role}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <NeoBadge variant={exp.badgeVariant} size="sm" icon={<Calendar size={12} />}>
                        {exp.period}
                      </NeoBadge>
                      <span className="inline-flex items-center gap-1 text-xs font-black text-neutral-600 uppercase bg-neutral-100 border-2 border-black px-2 py-0.5 rounded-md">
                        <MapPin size={12} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-black font-semibold text-sm leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="pt-2 flex flex-wrap gap-2">
                    {exp.tags.map((tag, i) => (
                      <NeoBadge
                        key={i}
                        variant={i % 3 === 0 ? "yellow" : i % 3 === 1 ? "cyan" : "pink"}
                        size="sm"
                      >
                        {tag}
                      </NeoBadge>
                    ))}
                  </div>
                </div>
              </div>
            </NeoCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
