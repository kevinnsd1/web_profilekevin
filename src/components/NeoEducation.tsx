import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from "lucide-react";
import { NeoCard, NeoBadge } from "./neobrutalism";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { translations } from "../utils/translations";
import itenasLogo from "../assets/image/itenas.png";

export function NeoEducation() {
  const { lang } = useLanguage();
  const { theme } = useTheme();
  const t = translations[lang].education;
  const isDark = theme === "dark";

  return (
    <div className="space-y-8">
      {/* Section Header Banner */}
      <div
        className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-4 pb-4 transition-colors duration-300 ${
          isDark ? "border-black" : "border-black"
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#00E5FF] text-black border-3 border-black flex items-center justify-center font-black shadow-[3px_3px_0px_0px_#000]">
            <GraduationCap size={22} strokeWidth={2.5} />
          </div>
          <div>
            <h2
              className={`font-heading font-black text-2xl sm:text-3xl uppercase tracking-tight ${
                isDark ? "text-white" : "text-black"
              }`}
            >
              {t.title}
            </h2>
            <p
              className={`text-xs font-bold uppercase tracking-wider ${
                isDark ? "text-[#FFE600]" : "text-[#B39700]"
              }`}
            >
              {t.subtitle}
            </p>
          </div>
        </div>

        <NeoBadge
          variant="cyan"
          rotate="right"
          size="md"
          icon={<Award size={14} />}
        >
          {t.badge}
        </NeoBadge>
      </div>

      {/* Education Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        <NeoCard
          windowHeader
          title={`${t.institution} // INFORMATICS`}
          bg="white"
          shadowSize="md"
          hoverEffect
        >
          <div className="flex flex-col md:flex-row items-start gap-6">
            {/* Logo Frame */}
            <div className="shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl border-3 border-black bg-white p-2 shadow-[4px_4px_0px_0px_#000] overflow-hidden flex items-center justify-center">
              <img
                src={itenasLogo}
                alt={`${t.institution} logo`}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Content & Degree Info */}
            <div className="flex-1 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-dashed border-neutral-300 pb-3">
                <div>
                  <h3 className="font-heading font-black text-xl sm:text-2xl text-black uppercase tracking-tight">
                    {t.institution}
                  </h3>
                  <p className="font-extrabold text-sm sm:text-base text-[#FF2E93] uppercase tracking-wide flex items-center gap-1.5 mt-0.5">
                    <BookOpen size={16} />
                    {t.degree}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <NeoBadge
                    variant="yellow"
                    size="md"
                    icon={<Award size={14} />}
                  >
                    {t.gpa}
                  </NeoBadge>
                  <NeoBadge
                    variant="purple"
                    size="sm"
                    icon={<Calendar size={12} />}
                  >
                    {t.period}
                  </NeoBadge>
                  <span className="inline-flex items-center gap-1 text-xs font-black text-neutral-600 uppercase bg-neutral-100 border-2 border-black px-2 py-0.5 rounded-md">
                    <MapPin size={12} />
                    {t.location}
                  </span>
                </div>
              </div>

              <p className="text-black font-semibold text-sm leading-relaxed">
                {t.description}
              </p>

              {/* Highlights / Specializations Pills */}
              <div className="pt-2 flex flex-wrap gap-2">
                {t.highlights.map((item, i) => (
                  <NeoBadge
                    key={i}
                    variant={i % 2 === 0 ? "cyan" : "pink"}
                    size="sm"
                  >
                    {item}
                  </NeoBadge>
                ))}
              </div>
            </div>
          </div>
        </NeoCard>
      </motion.div>
    </div>
  );
}
