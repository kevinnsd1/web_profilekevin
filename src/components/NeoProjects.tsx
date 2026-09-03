import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderGit2, Lock, Eye, Sparkles } from "lucide-react";
import { NeoCard, NeoBadge, NeoTabs, NeoModal, NeoButton } from "./neobrutalism";
import { GithubIcon, FigmaIcon } from "./icons/SocialIcons";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { translations } from "../utils/translations";

import imgTelkomsel from "../assets/image/telkomsel.png";
import imgAegis from "../assets/image/aegis.png";
import imgKomdigiDashboard from "../assets/image/komdigi.png";
import imgKomdigi from "../assets/image/komdigireport.png";
import imgJemputSeller from "../assets/image/JemputSeller.png";
import imgRafel from "../assets/image/Rafel.id.png";
import imgSkyefood from "../assets/image/skyefood.png";
import imgGerejaEfata from "../assets/image/gerejaefata.png";
import imgReportFoy from "../assets/image/reportfoy.png";
import imgKemenlu from "../assets/image/kemenlu.png";
import imgInfiniteShop from "../assets/image/infiniteshop.png";

type ProjectTranslationKey =
  | "telkomsel"
  | "aegis"
  | "komdigiDashboard"
  | "komdigiReport"
  | "jemputSeller"
  | "rafelId"
  | "skyefood"
  | "gerejaEfata"
  | "foyReport"
  | "kemenluReport"
  | "infiniteShop";

interface ProjectItemBase {
  id: string;
  transKey: ProjectTranslationKey;
  category: "dashboards" | "ecommerce" | "reports";
  image: string;
  badgeVariant: "yellow" | "pink" | "cyan" | "green" | "orange" | "purple";
  tags: string[];
  githubUrl?: string;
  backendGithubUrl?: string;
  figmaUrl?: string;
  isInternal?: boolean;
}

const projectsData: ProjectItemBase[] = [
  {
    id: "telkomsel",
    transKey: "telkomsel",
    category: "dashboards",
    image: imgTelkomsel,
    badgeVariant: "pink",
    tags: ["React", "Data Viz", "Dashboard", "Real-Time"],
    isInternal: true,
  },
  {
    id: "aegis",
    transKey: "aegis",
    category: "dashboards",
    image: imgAegis,
    badgeVariant: "cyan",
    tags: ["React", "Secure Auth", "Analytics", "Filtering"],
    isInternal: true,
  },
  {
    id: "komdigi-dashboard",
    transKey: "komdigiDashboard",
    category: "dashboards",
    image: imgKomdigiDashboard,
    badgeVariant: "green",
    tags: ["React", "GovTech", "Sentiment Analysis", "Big Data"],
    isInternal: true,
  },
  {
    id: "komdigi-report",
    transKey: "komdigiReport",
    category: "reports",
    image: imgKomdigi,
    badgeVariant: "yellow",
    tags: ["React", "Puppeteer", "Automation", "PPT/PDF"],
    isInternal: true,
  },
  {
    id: "jemput-seller",
    transKey: "jemputSeller",
    category: "ecommerce",
    image: imgJemputSeller,
    badgeVariant: "orange",
    tags: ["React", "Logistics", "REST API", "Courier Integration"],
    githubUrl: "https://github.com/kevinnsd1/jemputseller",
  },
  {
    id: "rafel-id",
    transKey: "rafelId",
    category: "ecommerce",
    image: imgRafel,
    badgeVariant: "purple",
    tags: ["React", "Fintech", "Payment Gateway", "UI/UX"],
    githubUrl: "https://github.com/kevinnsd1/Rafel.id_Giveaway",
    figmaUrl: "https://www.figma.com/design/E9zRUzrwNUS6NdOgthWcDP/Aplikasi-Giveaway?node-id=1504-1153&p=f&t=iUVSz7spXVBeAtBF-0",
  },
  {
    id: "skyefood",
    transKey: "skyefood",
    category: "ecommerce",
    image: imgSkyefood,
    badgeVariant: "yellow",
    tags: ["React Native", "Expo", "E-Commerce", "Promotions"],
    githubUrl: "https://github.com/SkyeFood/skye-food-merchant",
    figmaUrl: "https://www.figma.com/design/weGRXTBYC3Ar5r7ejVUaTg/Food-Apps?node-id=2-287&p=f&t=xUtkVSwyKXCtIzjl-0",
  },
  {
    id: "gereja-efata",
    transKey: "gerejaEfata",
    category: "ecommerce",
    image: imgGerejaEfata,
    badgeVariant: "cyan",
    tags: ["React", "REST API", "Donations", "Academic Journal"],
    githubUrl: "https://github.com/kevinnsd1/gerejaefata",
    backendGithubUrl: "https://github.com/kevinnsd1/backend-gereja-efata",
  },
  {
    id: "foy-report",
    transKey: "foyReport",
    category: "reports",
    image: imgReportFoy,
    badgeVariant: "pink",
    tags: ["React", "Data Viz", "PPT Automation", "Analytics"],
    githubUrl: "https://github.com/kevinnsd1/Report_FOY_PPT",
    isInternal: true,
  },
  {
    id: "kemenlu-report",
    transKey: "kemenluReport",
    category: "reports",
    image: imgKemenlu,
    badgeVariant: "cyan",
    tags: ["React", "Scraping", "GovTech", "Presentation Gen"],
    githubUrl: "https://github.com/kevinnsd1/PPT_KEMENLU",
    isInternal: true,
  },
  {
    id: "infinite-shop",
    transKey: "infiniteShop",
    category: "ecommerce",
    image: imgInfiniteShop,
    badgeVariant: "pink",
    tags: ["React", "E-Commerce", "Storefront", "Cart & Checkout"],
    githubUrl: "https://github.com/Suandika12/Infinite_Shop/tree/main/frontend",
    isInternal: true,
  },
];

export function NeoProjects() {
  const { lang } = useLanguage();
  const { theme } = useTheme();
  const t = translations[lang].projects;
  const isDark = theme === "dark";

  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItemBase | null>(null);

  const tabs = [
    { id: "all", label: t.tabs.all, badge: `${projectsData.length}` },
    { id: "dashboards", label: t.tabs.dashboards, badge: "3" },
    { id: "ecommerce", label: t.tabs.ecommerce, badge: "5" },
    { id: "reports", label: t.tabs.reports, badge: "3" },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <div className="space-y-8">
      {/* Section Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-4 border-black pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#FF2E93] text-white border-3 border-black flex items-center justify-center font-black shadow-[3px_3px_0px_0px_#000] shrink-0">
            <FolderGit2 size={22} strokeWidth={2.5} />
          </div>
          <div>
            <h2 className={`font-heading font-black text-2xl sm:text-3xl uppercase tracking-tight ${
              isDark ? "text-white" : "text-black"
            }`}>
              {t.title}
            </h2>
            <p className={`text-xs font-bold uppercase tracking-wider ${
              isDark ? "text-[#A3E635]" : "text-[#4D7C0F]"
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

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => {
            const item = t.items[project.transKey];
            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, delay: index * 0.05 }}
                className="w-full min-w-0"
              >
                <NeoCard
                  windowHeader
                  title={item.title}
                  bg="white"
                  shadowSize="md"
                  hoverEffect
                  headerAction={
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-2 py-0.5 text-[10px] sm:text-[11px] font-black uppercase bg-[#FFE600] text-black border-2 border-black rounded shadow-[1px_1px_0px_0px_#000] hover:scale-105 active:scale-95 transition-transform flex items-center gap-1 cursor-pointer shrink-0"
                    >
                      <Eye size={12} /> <span className="hidden xs:inline">{t.view}</span>
                    </button>
                  }
                  className="h-full flex flex-col justify-between"
                >
                  <div className="space-y-3 sm:space-y-4">
                    {/* Screenshot Frame */}
                    <div
                      onClick={() => setSelectedProject(project)}
                      className="w-full h-44 sm:h-60 rounded-xl border-3 border-black bg-black overflow-hidden relative shadow-[3px_3px_0px_0px_#000] sm:shadow-[4px_4px_0px_0px_#000] cursor-pointer group"
                    >
                      <img
                        src={project.image}
                        alt={item.title}
                        className="w-full h-full object-cover object-left-top group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-[#FFE600] text-black font-heading font-black text-[11px] sm:text-xs uppercase border-2 sm:border-3 border-black shadow-[2px_2px_0px_0px_#000] sm:shadow-[3px_3px_0px_0px_#000] rounded-xl flex items-center gap-1.5 sm:gap-2">
                          <Eye size={14} /> {t.inspect}
                        </span>
                      </div>

                      {/* Badge Overlay */}
                      <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10 max-w-[85%] truncate">
                        <NeoBadge variant={project.badgeVariant} size="sm">
                          {item.badge}
                        </NeoBadge>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div>
                      <h3 className="font-heading font-black text-lg sm:text-xl text-black uppercase tracking-tight line-clamp-1">
                        {item.title}
                      </h3>
                      <p className="text-black font-semibold text-xs sm:text-sm leading-relaxed mt-1.5 sm:mt-2 line-clamp-3">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer: Tech tags + Links */}
                  <div className="pt-3 sm:pt-4 border-t-2 border-dashed border-neutral-300 mt-3 sm:mt-4 space-y-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 text-[10px] sm:text-[11px] font-extrabold bg-neutral-100 text-black border-2 border-black rounded shadow-[1px_1px_0px_0px_#000]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                      {project.isInternal && (
                        <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-black text-neutral-500 uppercase">
                          <Lock size={12} /> {t.internalBadge}
                        </span>
                      )}

                      <div className="flex items-center gap-1.5 sm:gap-2 ml-auto flex-wrap">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="px-2.5 py-1 text-[11px] sm:text-xs font-black uppercase bg-[#FFE600] text-black border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_#000] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all inline-flex items-center gap-1"
                          >
                            <GithubIcon size={13} /> {t.source}
                          </a>
                        )}
                        {project.backendGithubUrl && (
                          <a
                            href={project.backendGithubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="px-2.5 py-1 text-[11px] sm:text-xs font-black uppercase bg-[#00E5FF] text-black border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_#000] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all inline-flex items-center gap-1"
                          >
                            <GithubIcon size={13} /> {t.backend}
                          </a>
                        )}
                        {project.figmaUrl && (
                          <a
                            href={project.figmaUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="px-2.5 py-1 text-[11px] sm:text-xs font-black uppercase bg-[#FF2E93] text-white border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_#000] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all inline-flex items-center gap-1"
                          >
                            <FigmaIcon size={13} /> {t.figma}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </NeoCard>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <NeoModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={t.items[selectedProject.transKey].title}
          headerBg={selectedProject.badgeVariant}
          maxWidth="xl"
          footer={
            <div className="flex flex-wrap items-center gap-3 w-full justify-between">
              <NeoBadge variant={selectedProject.badgeVariant} size="md">
                {t.items[selectedProject.transKey].badge}
              </NeoBadge>

              <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                {selectedProject.githubUrl && (
                  <NeoButton
                    asAnchor
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    variant="yellow"
                    size="sm"
                    shadowSize="sm"
                    icon={<GithubIcon size={14} />}
                  >
                    {t.repo}
                  </NeoButton>
                )}
                {selectedProject.figmaUrl && (
                  <NeoButton
                    asAnchor
                    href={selectedProject.figmaUrl}
                    target="_blank"
                    rel="noreferrer"
                    variant="pink"
                    size="sm"
                    shadowSize="sm"
                    icon={<FigmaIcon size={14} />}
                  >
                    {t.figma}
                  </NeoButton>
                )}
                <NeoButton
                  variant="white"
                  size="sm"
                  shadowSize="sm"
                  onClick={() => setSelectedProject(null)}
                >
                  {t.close}
                </NeoButton>
              </div>
            </div>
          }
        >
          <div className="space-y-4 sm:space-y-6">
            {/* Modal Large Screenshot */}
            <div className="w-full h-48 sm:h-80 rounded-xl border-3 sm:border-4 border-black bg-black overflow-hidden shadow-[4px_4px_0px_0px_#000] sm:shadow-[6px_6px_0px_0px_#000]">
              <img
                src={selectedProject.image}
                alt={t.items[selectedProject.transKey].title}
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Description */}
            <div className="space-y-2 sm:space-y-3 text-black">
              <h3 className="font-heading font-black text-xl sm:text-2xl uppercase tracking-tight">
                {t.items[selectedProject.transKey].title}
              </h3>
              <p className="font-semibold text-xs sm:text-base leading-relaxed">
                {t.items[selectedProject.transKey].description}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="space-y-2">
              <span className="font-heading font-black text-xs uppercase tracking-wider text-black">
                {t.techTools}
              </span>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {selectedProject.tags.map((tag) => (
                  <NeoBadge key={tag} variant="cyan" size="sm">
                    {tag}
                  </NeoBadge>
                ))}
              </div>
            </div>
          </div>
        </NeoModal>
      )}
    </div>
  );
}
