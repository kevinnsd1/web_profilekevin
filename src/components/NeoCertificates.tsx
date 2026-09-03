import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Eye, Sparkles, ArrowLeft, ExternalLink, CheckCircle } from "lucide-react";
import { NeoCard, NeoBadge, NeoTabs, NeoModal, NeoButton } from "./neobrutalism";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { translations } from "../utils/translations";

import imgMsib1 from "../assets/image/sertifikat/infinite/msibinfinite.png";
import imgMsib2 from "../assets/image/sertifikat/infinite/msibinfinitw2.png";
import imgTalenthub from "../assets/image/sertifikat/talenthub/talent hub.jpg";
import imgMyskillUiux from "../assets/image/sertifikat/myskill/uiux.png";
import imgMyskillData from "../assets/image/sertifikat/myskill/datanalys.png";

type CertTranslationKey = "msib1" | "msib2" | "talenthub" | "myskillUiux" | "myskillData";

interface CertItemBase {
  id: string;
  transKey: CertTranslationKey;
  category: "msib" | "talenthub" | "myskill";
  image: string;
  badgeVariant: "yellow" | "pink" | "cyan" | "green" | "orange" | "purple";
  tags: string[];
}

const certificatesData: CertItemBase[] = [
  {
    id: "msib1",
    transKey: "msib1",
    category: "msib",
    image: imgMsib1,
    badgeVariant: "yellow",
    tags: ["MSIB Kampus Merdeka", "Web Development", "UI/UX", "Infinite Learning"],
  },
  {
    id: "msib2",
    transKey: "msib2",
    category: "msib",
    image: imgMsib2,
    badgeVariant: "pink",
    tags: ["MSIB Batch Program", "Team Project", "Web Application", "Transcript"],
  },
  {
    id: "talenthub",
    transKey: "talenthub",
    category: "talenthub",
    image: imgTalenthub,
    badgeVariant: "green",
    tags: ["Kemnaker RI", "TalentHub", "Full Stack Development", "Backend API"],
  },
  {
    id: "myskill-uiux",
    transKey: "myskillUiux",
    category: "myskill",
    image: imgMyskillUiux,
    badgeVariant: "cyan",
    tags: ["MySkill Academy", "UI/UX Design", "Figma Prototyping", "User Research"],
  },
  {
    id: "myskill-data",
    transKey: "myskillData",
    category: "myskill",
    image: imgMyskillData,
    badgeVariant: "purple",
    tags: ["MySkill Academy", "Data Analysis", "SQL", "Data Visualization"],
  },
];

interface NeoCertificatesProps {
  onBackToPortfolio?: () => void;
}

export function NeoCertificates({ onBackToPortfolio }: NeoCertificatesProps) {
  const { lang } = useLanguage();
  const { theme } = useTheme();
  const t = translations[lang].certificates;
  const isDark = theme === "dark";

  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedCert, setSelectedCert] = useState<CertItemBase | null>(null);

  const tabs = [
    { id: "all", label: t.tabs.all, badge: `${certificatesData.length}` },
    { id: "msib", label: t.tabs.msib, badge: "2" },
    { id: "talenthub", label: t.tabs.talenthub, badge: "1" },
    { id: "myskill", label: t.tabs.myskill, badge: "2" },
  ];

  const filteredCerts =
    activeCategory === "all"
      ? certificatesData
      : certificatesData.filter((c) => c.category === activeCategory);

  return (
    <div className="space-y-8">
      {/* Section Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-4 border-black pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#FF2E93] text-white border-3 border-black flex items-center justify-center font-black shadow-[3px_3px_0px_0px_#000] shrink-0">
            <Award size={22} strokeWidth={2.5} />
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

        <NeoBadge variant="yellow" rotate="right" size="md" icon={<Sparkles size={14} />}>
          {t.badge}
        </NeoBadge>
      </div>

      {/* Filter Tabs */}
      <NeoTabs
        tabs={tabs}
        activeTab={activeCategory}
        onChange={setActiveCategory}
        activeVariant="yellow"
      />

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredCerts.map((cert, index) => {
            const item = t.items[cert.transKey];
            return (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, delay: index * 0.05 }}
                className="w-full min-w-0"
              >
                <NeoCard
                  windowHeader
                  title={item.issuer}
                  bg="white"
                  shadowSize="md"
                  hoverEffect
                  className="h-full flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Certificate Thumbnail Preview Frame */}
                    <div
                      onClick={() => setSelectedCert(cert)}
                      className="w-full h-52 sm:h-56 rounded-xl border-3 border-black bg-black overflow-hidden relative shadow-[3px_3px_0px_0px_#000] cursor-pointer group"
                    >
                      <img
                        src={cert.image}
                        alt={item.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-3.5 py-2 bg-[#FFE600] text-black font-heading font-black text-xs uppercase border-3 border-black shadow-[3px_3px_0px_0px_#000] rounded-xl flex items-center gap-2">
                          <Eye size={16} /> {t.inspectBtn}
                        </span>
                      </div>

                      {/* Badge Overlay */}
                      <div className="absolute top-2 left-2 z-10 max-w-[85%] truncate">
                        <NeoBadge variant={cert.badgeVariant} size="sm">
                          {item.badge}
                        </NeoBadge>
                      </div>
                    </div>

                    {/* Certificate Information */}
                    <div>
                      <h3 className="font-heading font-black text-lg text-black uppercase tracking-tight line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-xs font-bold text-[#FF2E93] uppercase tracking-wide mt-1 flex items-center gap-1">
                        <CheckCircle size={12} /> {item.issuer}
                      </p>
                      <p className="text-black font-semibold text-xs leading-relaxed mt-2 line-clamp-3">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer: Tech tags + Inspect button */}
                  <div className="pt-4 border-t-2 border-dashed border-neutral-300 mt-4 space-y-3">
                    <div className="flex flex-wrap gap-1.5">
                      {cert.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 text-[10px] font-extrabold bg-neutral-100 text-black border-2 border-black rounded shadow-[1px_1px_0px_0px_#000]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-1 flex justify-end">
                      <button
                        onClick={() => setSelectedCert(cert)}
                        className="w-full py-2 text-xs font-black uppercase bg-[#FFE600] text-black border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_#000] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Eye size={14} /> {t.inspectBtn}
                      </button>
                    </div>
                  </div>
                </NeoCard>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Full Resolution Inspection Modal */}
      {selectedCert && (
        <NeoModal
          isOpen={!!selectedCert}
          onClose={() => setSelectedCert(null)}
          title={t.items[selectedCert.transKey].title}
          headerBg={selectedCert.badgeVariant}
          maxWidth="xl"
          footer={
            <div className="flex flex-wrap items-center justify-between gap-3 w-full">
              <NeoBadge variant={selectedCert.badgeVariant} size="md">
                {t.items[selectedCert.transKey].badge}
              </NeoBadge>

              <div className="flex items-center gap-2">
                <a
                  href={selectedCert.image}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 text-xs font-heading font-black uppercase bg-[#00E5FF] text-black border-2 sm:border-3 border-black rounded-xl shadow-[2px_2px_0px_0px_#000] hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-1.5"
                >
                  <ExternalLink size={14} /> {t.viewBtn}
                </a>
                <NeoButton
                  variant="white"
                  size="sm"
                  shadowSize="sm"
                  onClick={() => setSelectedCert(null)}
                >
                  {t.closeBtn}
                </NeoButton>
              </div>
            </div>
          }
        >
          <div className="space-y-4">
            {/* Modal Large High-Res Image Preview */}
            <div className="w-full max-h-[70vh] rounded-xl border-3 sm:border-4 border-black bg-black overflow-hidden shadow-[4px_4px_0px_0px_#000] flex items-center justify-center p-1">
              <img
                src={selectedCert.image}
                alt={t.items[selectedCert.transKey].title}
                className="w-full h-full object-contain max-h-[65vh] rounded-lg"
              />
            </div>

            <div className="space-y-2 text-black">
              <h3 className="font-heading font-black text-xl uppercase tracking-tight">
                {t.items[selectedCert.transKey].title}
              </h3>
              <p className="font-bold text-xs text-[#FF2E93] uppercase">
                ISSUED BY: {t.items[selectedCert.transKey].issuer}
              </p>
              <p className="font-semibold text-xs sm:text-sm leading-relaxed">
                {t.items[selectedCert.transKey].description}
              </p>
            </div>
          </div>
        </NeoModal>
      )}
    </div>
  );
}
