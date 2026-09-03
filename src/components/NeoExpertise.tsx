import { motion } from "framer-motion";
import { Layout, Server, Shield, Layers, Code, Cpu, CheckCircle } from "lucide-react";
import { NeoCard, NeoBadge } from "./neobrutalism";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { translations } from "../utils/translations";

const baseIcons = [
  {
    icon: <Layout size={28} strokeWidth={2.5} />,
    bg: "yellow" as const,
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Vite"],
  },
  {
    icon: <Server size={28} strokeWidth={2.5} />,
    bg: "cyan" as const,
    skills: ["Node.js", "Express", "PostgreSQL", "REST APIs", "SQL", "Authentication"],
  },
  {
    icon: <Shield size={28} strokeWidth={2.5} />,
    bg: "pink" as const,
    skills: ["Clean Code", "Design Patterns", "State Management", "Git Workflow", "Performance Optimization"],
  },
];

export function NeoExpertise() {
  const { lang } = useLanguage();
  const { theme } = useTheme();
  const t = translations[lang].expertise;
  const isDark = theme === "dark";

  return (
    <div className="space-y-8">
      {/* Section Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-4 border-black pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#00E5FF] text-black border-3 border-black flex items-center justify-center font-black shadow-[3px_3px_0px_0px_#000]">
            <Layers size={22} strokeWidth={2.5} />
          </div>
          <div>
            <h2 className={`font-heading font-black text-2xl sm:text-3xl uppercase tracking-tight ${
              isDark ? "text-white" : "text-black"
            }`}>
              {t.title}
            </h2>
            <p className={`text-xs font-bold uppercase tracking-wider ${
              isDark ? "text-[#FFE600]" : "text-[#B39700]"
            }`}>
              {t.subtitle}
            </p>
          </div>
        </div>

        <NeoBadge variant="yellow" rotate="left" size="md" icon={<Cpu size={14} />}>
          {t.badge}
        </NeoBadge>
      </div>

      {/* Expertise Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {t.items.map((item, index) => {
          const base = baseIcons[index];
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <NeoCard
                bg="white"
                shadowSize="md"
                hoverEffect
                className="h-full flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Header Icon Block */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-14 h-14 rounded-2xl border-3 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_#000] ${
                        base.bg === "yellow"
                          ? "bg-[#FFE600] text-black"
                          : base.bg === "cyan"
                          ? "bg-[#00E5FF] text-black"
                          : "bg-[#FF2E93] text-[#FFFFFF]"
                      }`}
                    >
                      {base.icon}
                    </div>
                    <NeoBadge variant={base.bg} size="sm">
                      {item.subtitle}
                    </NeoBadge>
                  </div>

                  <div>
                    <h3 className="font-heading font-black text-xl text-black uppercase tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-black font-semibold text-sm leading-relaxed mt-2">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Skill Pills */}
                <div className="pt-6 border-t-2 border-dashed border-neutral-300 mt-6">
                  <div className="text-xs font-black uppercase tracking-wider text-neutral-500 mb-2 flex items-center gap-1">
                    <Code size={12} /> {t.techStack}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {base.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs font-extrabold bg-neutral-100 text-black border-2 border-black rounded-lg shadow-[1.5px_1.5px_0px_0px_#000] inline-flex items-center gap-1"
                      >
                        <CheckCircle size={10} className="text-[#FF2E93]" />
                        {skill}
                      </span>
                    ))}
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
