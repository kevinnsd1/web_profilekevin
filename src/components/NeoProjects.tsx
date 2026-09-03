import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderGit2, Lock, Eye, Sparkles } from "lucide-react";
import { NeoCard, NeoBadge, NeoTabs, NeoModal, NeoButton } from "./neobrutalism";
import { GithubIcon, FigmaIcon } from "./icons/SocialIcons";

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

interface ProjectItem {
  id: string;
  title: string;
  category: "dashboards" | "ecommerce" | "reports";
  description: string;
  image: string;
  badge: string;
  badgeVariant: "yellow" | "pink" | "cyan" | "green" | "orange" | "purple";
  tags: string[];
  githubUrl?: string;
  backendGithubUrl?: string;
  figmaUrl?: string;
  isInternal?: boolean;
}

const projectsData: ProjectItem[] = [
  {
    id: "telkomsel",
    title: "Telkomsel Social Media Dashboard",
    category: "dashboards",
    description:
      "A comprehensive data analysis command center built for Telkomsel and IndiHome. Features real-time tracking of social media traffic, day-to-day metrics, and granular sentiment analysis.",
    image: imgTelkomsel,
    badge: "ENTERPRISE DASHBOARD",
    badgeVariant: "pink",
    tags: ["React", "Data Viz", "Dashboard", "Real-Time"],
    isInternal: true,
  },
  {
    id: "aegis",
    title: "AEGIS Issue Monitoring Dashboard",
    category: "dashboards",
    description:
      "A secure internal dashboard designed for monitoring vast social and online media issues. Includes advanced filtering (include/exclude phrases), talk breakdown, and top topics tracking.",
    image: imgAegis,
    badge: "MONITORING SYSTEM",
    badgeVariant: "cyan",
    tags: ["React", "Secure Auth", "Analytics", "Filtering"],
    isInternal: true,
  },
  {
    id: "komdigi-dashboard",
    title: "KOMDIGI Social Media Dashboard",
    category: "dashboards",
    description:
      "A highly secure monitoring command center deployed for KOMDIGI. Provides extensive tracking of online media trends, sentiment analysis, and discourse modeling at scale.",
    image: imgKomdigiDashboard,
    badge: "GOVTECH COMMAND",
    badgeVariant: "green",
    tags: ["React", "GovTech", "Sentiment Analysis", "Big Data"],
    isInternal: true,
  },
  {
    id: "komdigi-report",
    title: "KOMDIGI Executive Report Gen",
    category: "reports",
    description:
      "A robust reporting dashboard that automatically generates pixel-perfect PDF and PPT executive reports from real-time monitoring data, complete with customized chart visualizations.",
    image: imgKomdigi,
    badge: "REPORT AUTOMATION",
    badgeVariant: "yellow",
    tags: ["React", "Puppeteer", "Automation", "PPT/PDF"],
    isInternal: true,
  },
  {
    id: "jemput-seller",
    title: "JemputSeller Logistics Platform",
    category: "ecommerce",
    description:
      "A shipping platform enabling business owners to manage bulk deliveries efficiently. Includes warehouse pickup scheduling, multi-courier selection, and cashback tracking for high-volume sellers.",
    image: imgJemputSeller,
    badge: "LOGISTICS PLATFORM",
    badgeVariant: "orange",
    tags: ["React", "Logistics", "REST API", "Courier Integration"],
    githubUrl: "https://github.com/kevinnsd1/jemputseller",
  },
  {
    id: "rafel-id",
    title: "Rafel.id Influencer Giveaway",
    category: "ecommerce",
    description:
      "A specialized application helping influencers distribute items to fans securely. Features a built-in payment gateway system for seamless ticket purchases and safe participation in exclusive giveaways.",
    image: imgRafel,
    badge: "FINTECH & GIVEAWAY",
    badgeVariant: "purple",
    tags: ["React", "Fintech", "Payment Gateway", "UI/UX"],
    githubUrl: "https://github.com/kevinnsd1/Rafel.id_Giveaway",
    figmaUrl: "https://www.figma.com/design/E9zRUzrwNUS6NdOgthWcDP/Aplikasi-Giveaway?node-id=1504-1153&p=f&t=iUVSz7spXVBeAtBF-0",
  },
  {
    id: "skyefood",
    title: "SkyeFood Merchant App",
    category: "ecommerce",
    description:
      "A robust cross-platform mobile application for food merchants. Enables business owners to sell items, manage promotions, request driver pickups, and run targeted advertisements similar to leading food delivery platforms.",
    image: imgSkyefood,
    badge: "MERCHANT MOBILE APP",
    badgeVariant: "yellow",
    tags: ["React Native", "Expo", "E-Commerce", "Promotions"],
    githubUrl: "https://github.com/SkyeFood/skye-food-merchant",
    figmaUrl: "https://www.figma.com/design/weGRXTBYC3Ar5r7ejVUaTg/Food-Apps?node-id=2-287&p=f&t=xUtkVSwyKXCtIzjl-0",
  },
  {
    id: "gereja-efata",
    title: "Gereja Efata Donation Portal",
    category: "ecommerce",
    description:
      "A community service web platform designed for the Gereja Efata congregation. It streamlines digital donation payments and broadcasts essential church information. Published in an academic journal.",
    image: imgGerejaEfata,
    badge: "JOURNAL PUBLISHED",
    badgeVariant: "cyan",
    tags: ["React", "REST API", "Donations", "Academic Journal"],
    githubUrl: "https://github.com/kevinnsd1/gerejaefata",
    backendGithubUrl: "https://github.com/kevinnsd1/backend-gereja-efata",
  },
  {
    id: "foy-report",
    title: "FOY Report Generator",
    category: "reports",
    description:
      "An internal corporate reporting tool for FOY Communications. Automatically aggregates social media intelligence and visualizes complex data sets into highly structured, automated PowerPoint charts.",
    image: imgReportFoy,
    badge: "DATA VISUALIZATION",
    badgeVariant: "pink",
    tags: ["React", "Data Viz", "PPT Automation", "Analytics"],
    githubUrl: "https://github.com/kevinnsd1/Report_FOY_PPT",
    isInternal: true,
  },
  {
    id: "kemenlu-report",
    title: "KEMENLU Report Generator",
    category: "reports",
    description:
      "A highly secure internal reporting application for the Ministry of Foreign Affairs (Kementrian Luar Negeri). Produces automated presentations featuring real-time data scraping, analysis, and metric benchmarks.",
    image: imgKemenlu,
    badge: "GOVTECH REPORTING",
    badgeVariant: "cyan",
    tags: ["React", "Scraping", "GovTech", "Presentation Gen"],
    githubUrl: "https://github.com/kevinnsd1/PPT_KEMENLU",
    isInternal: true,
  },
  {
    id: "infinite-shop",
    title: "Infinite Shop Merchandise",
    category: "ecommerce",
    description:
      "An internal e-commerce platform specifically developed for Infinite Learning. It facilitates the seamless purchase of official corporate merchandise and learning materials directly by internal team members.",
    image: imgInfiniteShop,
    badge: "INTERNAL E-COMMERCE",
    badgeVariant: "pink",
    tags: ["React", "E-Commerce", "Storefront", "Cart & Checkout"],
    githubUrl: "https://github.com/Suandika12/Infinite_Shop/tree/main/frontend",
    isInternal: true,
  },
];

export function NeoProjects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const tabs = [
    { id: "all", label: "ALL PROJECTS", badge: `${projectsData.length}` },
    { id: "dashboards", label: "DASHBOARDS & GOVTECH", badge: "3" },
    { id: "ecommerce", label: "E-COMMERCE & FINTECH", badge: "5" },
    { id: "reports", label: "REPORTS & TOOLS", badge: "3" },
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
            <h2 className="font-heading font-black text-2xl sm:text-3xl uppercase tracking-tight text-white">
              FEATURED PROJECTS
            </h2>
            <p className="text-xs font-bold text-[#A3E635] uppercase tracking-wider">
              REAL-WORLD APPLICATIONS & DASHBOARDS
            </p>
          </div>
        </div>

        <NeoBadge variant="yellow" rotate="right" size="md" icon={<Sparkles size={14} />}>
          11 WORKS DELIVERED
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
          {filteredProjects.map((project, index) => (
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
                title={project.title}
                bg="white"
                shadowSize="md"
                hoverEffect
                headerAction={
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-2 py-0.5 text-[10px] sm:text-[11px] font-black uppercase bg-[#FFE600] text-black border-2 border-black rounded shadow-[1px_1px_0px_0px_#000] hover:scale-105 active:scale-95 transition-transform flex items-center gap-1 cursor-pointer shrink-0"
                  >
                    <Eye size={12} /> <span className="hidden xs:inline">VIEW</span>
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
                      alt={project.title}
                      className="w-full h-full object-cover object-left-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-[#FFE600] text-black font-heading font-black text-[11px] sm:text-xs uppercase border-2 sm:border-3 border-black shadow-[2px_2px_0px_0px_#000] sm:shadow-[3px_3px_0px_0px_#000] rounded-xl flex items-center gap-1.5 sm:gap-2">
                        <Eye size={14} /> INSPECT PROJECT
                      </span>
                    </div>

                    {/* Badge Overlay */}
                    <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10 max-w-[85%] truncate">
                      <NeoBadge variant={project.badgeVariant} size="sm">
                        {project.badge}
                      </NeoBadge>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div>
                    <h3 className="font-heading font-black text-lg sm:text-xl text-black uppercase tracking-tight line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-black font-semibold text-xs sm:text-sm leading-relaxed mt-1.5 sm:mt-2 line-clamp-3">
                      {project.description}
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
                        <Lock size={12} /> INTERNAL DASHBOARD
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
                          <GithubIcon size={13} /> SOURCE
                        </a>
                      )}
                      {project.backendGithubUrl && (
                        <a
                          href={project.backendGithubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="px-2.5 py-1 text-[11px] sm:text-xs font-black uppercase bg-[#00E5FF] text-black border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_#000] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all inline-flex items-center gap-1"
                        >
                          <GithubIcon size={13} /> BACKEND
                        </a>
                      )}
                      {project.figmaUrl && (
                        <a
                          href={project.figmaUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="px-2.5 py-1 text-[11px] sm:text-xs font-black uppercase bg-[#FF2E93] text-white border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_#000] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all inline-flex items-center gap-1"
                        >
                          <FigmaIcon size={13} /> FIGMA
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </NeoCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <NeoModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject.title}
          headerBg={selectedProject.badgeVariant}
          maxWidth="xl"
          footer={
            <div className="flex flex-wrap items-center gap-3 w-full justify-between">
              <NeoBadge variant={selectedProject.badgeVariant} size="md">
                {selectedProject.badge}
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
                    REPO
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
                    FIGMA
                  </NeoButton>
                )}
                <NeoButton
                  variant="white"
                  size="sm"
                  shadowSize="sm"
                  onClick={() => setSelectedProject(null)}
                >
                  CLOSE
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
                alt={selectedProject.title}
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Description */}
            <div className="space-y-2 sm:space-y-3 text-black">
              <h3 className="font-heading font-black text-xl sm:text-2xl uppercase tracking-tight">
                {selectedProject.title}
              </h3>
              <p className="font-semibold text-xs sm:text-base leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="space-y-2">
              <span className="font-heading font-black text-xs uppercase tracking-wider text-black">
                TECHNOLOGY & TOOLS:
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
