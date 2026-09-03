import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Download, Terminal, Code2, Globe, Sun, Moon, Award, ChevronLeft } from "lucide-react";
import { NeoButton, NeoBadge } from "./neobrutalism";
import { NeoContactModal } from "./NeoContactModal";
import { GithubIcon, LinkedinIcon } from "./icons/SocialIcons";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { translations } from "../utils/translations";
import imgKevin from "../assets/image/foto_kevin.jpg";
import cvFile from "../assets/file/CV.KevinSD.pdf";

interface NeoHeaderProps {
  onNavigate?: (route: "home" | "certificates") => void;
  currentRoute?: "home" | "certificates";
}

export function NeoHeader({ onNavigate, currentRoute = "home" }: NeoHeaderProps) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const { lang, toggleLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = translations[lang].header;
  const isDark = theme === "dark";

  const handleCertificatesClick = () => {
    if (onNavigate) {
      onNavigate("certificates");
    } else {
      window.location.hash = "#certificates";
    }
  };

  return (
    <div className="relative pt-2 pb-8">
      {/* Top Controls Header Bar */}
      <div className={`flex items-center justify-between pb-6 mb-8 border-b-2 border-dashed transition-colors duration-300 ${
        isDark ? "border-neutral-800" : "border-neutral-400"
      }`}>
        {/* Left Side: Back to Portfolio button (Shown when inside certificates) */}
        <div>
          {currentRoute === "certificates" && (
            <button
              onClick={() => (onNavigate ? onNavigate("home") : (window.location.hash = ""))}
              className="flex items-center gap-1 px-3 py-1.5 bg-[#FFE600] text-black font-heading font-black text-xs uppercase border-3 border-black shadow-[3px_3px_0px_0px_#000] rounded-xl hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all cursor-pointer select-none"
              title="Back to Portfolio"
            >
              <ChevronLeft size={18} strokeWidth={3} className="shrink-0" />
              <span>{lang === "en" ? "PORTFOLIO" : "PORTOFOLIO"}</span>
            </button>
          )}
        </div>

        {/* Right Side: Action Controls (Theme Toggle, Certificates Route, & Language Switcher) */}
        <div className="flex flex-wrap items-center gap-3">
          {currentRoute !== "certificates" && (
            <button
              onClick={handleCertificatesClick}
              className="flex items-center gap-2 px-3.5 py-1.5 bg-[#FF2E93] text-white font-heading font-black text-xs uppercase border-3 border-black shadow-[3px_3px_0px_0px_#FFE600] rounded-xl hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_#FFE600] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all cursor-pointer select-none"
              title="View Certificates / Lihat Sertifikat"
            >
              <Award size={15} strokeWidth={2.5} className="shrink-0" />
              <span>{t.certificatesBtn}</span>
            </button>
          )}

          {/* Light / Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className={`flex items-center gap-2 px-3.5 py-1.5 font-heading font-black text-xs uppercase border-3 border-black shadow-[3px_3px_0px_0px_#000] rounded-xl hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all cursor-pointer select-none ${
              isDark
                ? "bg-[#00E5FF] text-black shadow-[3px_3px_0px_0px_#FFE600]"
                : "bg-[#9D4EDD] text-white shadow-[3px_3px_0px_0px_#000]"
            }`}
            title="Toggle Light / Dark Mode"
          >
            {isDark ? (
              <>
                <Sun size={15} strokeWidth={2.5} className="text-black shrink-0" />
                <span>LIGHT MODE</span>
              </>
            ) : (
              <>
                <Moon size={15} strokeWidth={2.5} className="text-white shrink-0" />
                <span>DARK MODE</span>
              </>
            )}
          </button>

          {/* Language Switcher Button */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-2 px-3.5 py-1.5 bg-[#FFE600] text-black font-heading font-black text-xs uppercase border-3 border-black shadow-[3px_3px_0px_0px_#FF2E93] rounded-xl hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_#FF2E93] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all cursor-pointer select-none"
            title="Switch Language / Ganti Bahasa"
          >
            <Globe size={15} strokeWidth={2.5} className="shrink-0" />
            <span>{lang === "en" ? "EN 🇬🇧" : "ID 🇮🇩"}</span>
            <span className="text-[10px] bg-black text-white px-1.5 py-0.5 rounded border border-black font-mono font-bold">
              TRANSLATE
            </span>
          </button>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-10 md:gap-14 w-full">
        {/* Bio Text & Actions */}
        <div className="space-y-6 flex-1 text-center md:text-left">
          {/* Status Badges */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
            <NeoBadge variant="green" rotate="left" size="md">
              {t.available}
            </NeoBadge>
            <NeoBadge variant="yellow" rotate="right" size="md" icon={<Terminal size={14} />}>
              {t.roleBadge}
            </NeoBadge>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className={`text-4xl sm:text-6xl lg:text-7xl font-heading font-black tracking-tight uppercase leading-[1.05] ${
                isDark ? "text-white" : "text-black"
              }`}
            >
              {t.greeting} <span className="inline-block bg-[#FFE600] text-black px-4 py-1 rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_#FF2E93] rotate-[-2deg]">{t.name}</span>
            </motion.h1>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className={`text-2xl sm:text-3xl font-heading font-extrabold tracking-tight uppercase ${
                isDark ? "text-[#00E5FF]" : "text-[#007A8C]"
              }`}
            >
              {t.headline}
            </motion.div>
          </div>

          {/* Description */}
          <p className={`text-base sm:text-lg leading-relaxed max-w-xl font-medium mx-auto md:mx-0 ${
            isDark ? "text-neutral-300" : "text-neutral-800"
          }`}>
            {t.bio}
          </p>

          {/* Buttons & Social Links */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center md:justify-start gap-4 pt-3">
            <NeoButton
              variant="yellow"
              size="lg"
              shadowSize="lg"
              icon={<Mail size={20} />}
              onClick={() => setIsContactOpen(true)}
            >
              {t.sayHello}
            </NeoButton>

            <NeoButton
              href={cvFile}
              download="CV_KevinSD.pdf"
              variant="white"
              size="lg"
              shadowSize="lg"
              icon={<Download size={20} />}
            >
              {t.downloadCv}
            </NeoButton>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2 sm:pt-0 sm:ml-2">
              <a
                href="https://github.com/kevinnsd1"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-12 h-12 rounded-xl bg-[#FF2E93] text-white border-3 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
              >
                <GithubIcon size={22} />
              </a>
              <a
                href="https://linkedin.com/in/kevinsatriad"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-12 h-12 rounded-xl bg-[#00E5FF] text-black border-3 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
              >
                <LinkedinIcon size={22} />
              </a>
            </div>
          </div>
        </div>

        {/* Profile Avatar Card */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="shrink-0 relative group mt-4 md:mt-0"
        >
          {/* Top Floating Badge directly attached to Avatar frame */}
          <div className="absolute -top-5 -right-3 z-30 pointer-events-none">
            <NeoBadge variant="pink" rotate="right-lg" size="md" icon={<Code2 size={14} />}>
              {t.creativeDev}
            </NeoBadge>
          </div>

          {/* Sticker background frame */}
          <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-3xl border-4 border-black bg-[#FF2E93] p-2 shadow-[10px_10px_0px_0px_#FFE600] relative rotate-2 transition-transform duration-300 group-hover:rotate-0">
            <div className="w-full h-full rounded-2xl overflow-hidden border-3 border-black bg-black relative">
              <img
                src={imgKevin}
                alt="Kevin Satria"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <NeoContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
