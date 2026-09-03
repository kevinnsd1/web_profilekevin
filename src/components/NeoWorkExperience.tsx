import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Sparkles } from "lucide-react";
import { NeoCard, NeoBadge } from "./neobrutalism";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { translations } from "../utils/translations";
import infiniteLearningLogo from "../assets/image/infinitelearning.jpg";
import skyeLogo from "../assets/image/skye.jpg";
import nolimitLogo from "../assets/image/nolimit.png";
import awhLogo from "../assets/image/awh.png";

interface ExperienceBase {
  id: "awh" | "nolimit" | "skye" | "infinite";
  logo: string;
  badgeVariant: "purple" | "cyan" | "yellow" | "pink" | "green";
  tags: string[];
}

const baseExperiences: ExperienceBase[] = [
  {
    id: "awh",
    logo: awhLogo,
    badgeVariant: "green",
    tags: ["React", "TypeScript", "Angular", "PHP", "Laravel", "REST API", "Tailwind CSS"],
  },
  {
    id: "nolimit",
    logo: nolimitLogo,
    badgeVariant: "purple",
    tags: ["React", "TypeScript", "Data Visualization", "API Integration", "Tailwind CSS"],
  },
  {
    id: "skye",
    logo: skyeLogo,
    badgeVariant: "cyan",
    tags: ["Next.js", "Node.js", "PostgreSQL", "UI/UX", "REST API"],
  },
  {
    id: "infinite",
    logo: infiniteLearningLogo,
    badgeVariant: "yellow",
    tags: ["React", "TypeScript", "Tailwind CSS", "REST API", "Figma"],
  },
];

export function NeoWorkExperience() {
  const { lang } = useLanguage();
  const { theme } = useTheme();
  const t = translations[lang].workExperience;
  const isDark = theme === "dark";

  return (
    <div className="space-y-8">
      {/* Section Header Banner */}
      <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-4 pb-4 transition-colors duration-300 ${
        isDark ? "border-black" : "border-black"
      }`}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#FFE600] text-black border-3 border-black flex items-center justify-center font-black shadow-[3px_3px_0px_0px_#000]">
            <Briefcase size={22} strokeWidth={2.5} />
          </div>
          <div>
            <h2 className={`font-heading font-black text-2xl sm:text-3xl uppercase tracking-tight ${
              isDark ? "text-white" : "text-black"
            }`}>
              {t.title}
            </h2>
            <p className={`text-xs font-bold uppercase tracking-wider ${
              isDark ? "text-[#00E5FF]" : "text-[#007A8C]"
            }`}>
              {t.subtitle}
            </p>
          </div>
        </div>

        <NeoBadge variant="pink" rotate="right" size="md" icon={<Sparkles size={14} />}>
          {t.badge}
        </NeoBadge>
      </div>

      {/* Experience Cards Grid */}
      <div className="space-y-6">
        {baseExperiences.map((base, index) => {
          const item = t.roles[base.id];
          return (
            <motion.div
              key={base.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <NeoCard
                windowHeader
                title={`${item.company} // ${item.role}`}
                bg="white"
                shadowSize="md"
                hoverEffect
              >
                <div className="flex flex-col md:flex-row items-start gap-6">
                  {/* Logo Frame */}
                  <div className="shrink-0 w-20 h-20 rounded-2xl border-3 border-black bg-[#FFE600] p-1.5 shadow-[4px_4px_0px_0px_#000] overflow-hidden flex items-center justify-center">
                    <img
                      src={base.logo}
                      alt={`${item.company} logo`}
                      className="w-full h-full object-contain rounded-xl"
                    />
                  </div>

                  {/* Company Info & Description */}
                  <div className="flex-1 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-dashed border-neutral-300 pb-2">
                      <div>
                        <h3 className="font-heading font-black text-xl text-black uppercase tracking-tight">
                          {item.company}
                        </h3>
                        <p className="font-extrabold text-sm text-[#FF2E93] uppercase tracking-wide flex items-center gap-1.5">
                          <Briefcase size={14} />
                          {item.role}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        <NeoBadge variant={base.badgeVariant} size="sm" icon={<Calendar size={12} />}>
                          {item.period}
                        </NeoBadge>
                        <span className="inline-flex items-center gap-1 text-xs font-black text-neutral-600 uppercase bg-neutral-100 border-2 border-black px-2 py-0.5 rounded-md">
                          <MapPin size={12} />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-black font-semibold text-sm leading-relaxed">
                      {item.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="pt-2 flex flex-wrap gap-2">
                      {base.tags.map((tag, i) => (
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
          );
        })}
      </div>
    </div>
  );
}
