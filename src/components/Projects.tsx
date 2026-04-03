import { motion } from "framer-motion";
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
import { fadeUp, staggerContainer } from "../utils/animations";

export function Projects() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
      className="space-y-12 pb-24"
    >
      <motion.h2
        variants={fadeUp}
        className="text-xs font-bold tracking-[0.2em] text-indigo-500 uppercase text-center md:text-left"
      >
        Featured Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Project 1: Telkomsel */}
        <motion.div
          variants={fadeUp}
          className="group flex flex-col gap-6 p-4 rounded-[2rem] glass hover:bg-white/[0.05] hover:border-indigo-500/30 transition-all duration-500 hover:glow-indigo"
        >
          {/* Screenshot */}
          <div className="w-full h-52 sm:h-64 rounded-2xl bg-neutral-900 border border-white/5 overflow-hidden relative group-hover:border-white/10 transition-colors">
            <img src={imgTelkomsel} alt="Telkomsel Dashboard" className="absolute w-full h-full object-cover object-left-top transform group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030303]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Project Info */}
          <div className="flex-1 flex flex-col">
            <div className="mb-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-300">
                Telkomsel Social Media Dashboard
              </h3>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed line-clamp-4">
                A comprehensive data analysis command center built for
                Telkomsel and IndiHome. Features real-time tracking of
                social media traffic, day-to-day metrics, and granular
                sentiment analysis.
              </p>
            </div>

            {/* Tech Pills */}
            <div className="flex flex-wrap gap-2 mt-auto mb-6">
              <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-red-500/10 text-red-400 rounded-lg">
                React
              </span>
              <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-white/5 text-neutral-400 rounded-lg">
                Data Viz
              </span>
              <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-white/5 text-neutral-400 rounded-lg">
                Dashboard
              </span>
            </div>

            {/* Links */}
            <div>
              <span
                className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-500 cursor-not-allowed"
                title="Internal Project"
              >
                Internal Dashboard
              </span>
            </div>
          </div>
        </motion.div>

        {/* Project 2: AEGIS */}
        <motion.div
          variants={fadeUp}
          className="group flex flex-col gap-6 p-4 rounded-[2rem] glass hover:bg-white/[0.05] hover:border-blue-500/30 transition-all duration-500 hover:glow-cyan"
        >
          {/* Screenshot */}
          <div className="w-full h-52 sm:h-64 rounded-2xl bg-neutral-900 border border-white/5 overflow-hidden relative group-hover:border-white/10 transition-colors">
            <img src={imgAegis} alt="AEGIS Dashboard" className="absolute w-full h-full object-cover object-left-top transform group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030303]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Project Info */}
          <div className="flex-1 flex flex-col">
            <div className="mb-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                AEGIS Issue Monitoring Dashboard
              </h3>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed line-clamp-4">
                A secure internal dashboard designed for monitoring vast
                social and online media issues. Includes advanced filtering
                (include/exclude phrases), talk breakdown, and top topics
                tracking.
              </p>
            </div>

            {/* Tech Pills */}
            <div className="flex flex-wrap gap-2 mt-auto mb-6">
              <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-blue-500/10 text-blue-400 rounded-lg">
                React
              </span>
              <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-white/5 text-neutral-400 rounded-lg">
                Secure Auth
              </span>
              <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-white/5 text-neutral-400 rounded-lg">
                Analytics
              </span>
            </div>

            {/* Links */}
            <div>
              <span
                className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-500 cursor-not-allowed"
                title="Internal Project"
              >
                Internal Dashboard
              </span>
            </div>
          </div>
        </motion.div>

        {/* Project 3: KOMDIGI Dashboard */}
        <motion.div
          variants={fadeUp}
          className="group flex flex-col gap-6 p-4 rounded-[2rem] glass hover:bg-white/[0.05] hover:border-emerald-500/30 transition-all duration-500 hover:glow-indigo"
        >
          {/* Screenshot */}
          <div className="w-full h-52 sm:h-64 rounded-2xl bg-neutral-900 border border-white/5 overflow-hidden relative group-hover:border-white/10 transition-colors">
            <img src={imgKomdigiDashboard} alt="Komdigi Dashboard" className="absolute w-full h-full object-cover object-left-top transform group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030303]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Project Info */}
          <div className="flex-1 flex flex-col px-2">
            <div className="mb-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                KOMDIGI Social Media Dashboard
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed line-clamp-4">
                A highly secure monitoring command center deployed for KOMDIGI. Provides extensive tracking of online media trends, sentiment analysis, and discourse modeling at scale.
              </p>
            </div>

            {/* Tech Pills */}
            <div className="flex flex-wrap gap-2 mt-auto mb-6">
              <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-emerald-500/10 text-emerald-400 rounded-lg">
                React
              </span>
              <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-white/5 text-neutral-400 rounded-lg">
                Monitoring
              </span>
              <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-white/5 text-neutral-400 rounded-lg">
                GovTech
              </span>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4 mt-2">
              <span
                className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-500 cursor-not-allowed"
                title="Internal Project"
              >
                Internal Dashboard
              </span>
            </div>
          </div>
        </motion.div>

        {/* Project 4: KOMDIGI Report Gen */}
        <motion.div
          variants={fadeUp}
          className="group flex flex-col gap-6 p-4 rounded-[2rem] glass hover:bg-white/[0.05] hover:border-emerald-500/30 transition-all duration-500 hover:glow-indigo"
        >
          {/* Screenshot */}
          <div className="w-full h-52 sm:h-64 rounded-2xl bg-neutral-900 border border-white/5 overflow-hidden relative group-hover:border-white/10 transition-colors">
            <img src={imgKomdigi} alt="Komdigi Dashboard" className="absolute w-full h-full object-cover object-left-top transform group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030303]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Project Info */}
          <div className="flex-1 flex flex-col px-2">
            <div className="mb-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                KOMDIGI Executive Report Gen
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed line-clamp-4">
                A robust reporting dashboard that automatically generates
                pixel-perfect PDF and PPT executive reports from real-time monitoring
                data, complete with customized chart visualizations.
              </p>
            </div>

            {/* Tech Pills */}
            <div className="flex flex-wrap gap-2 mt-auto mb-6">
              <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-emerald-500/10 text-emerald-400 rounded-lg">
                React
              </span>
              <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-white/5 text-neutral-400 rounded-lg">
                Puppeteer
              </span>
              <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-white/5 text-neutral-400 rounded-lg">
                Automation
              </span>
            </div>

            {/* Links */}
            <div>
              <span
                className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-500 cursor-not-allowed"
                title="Internal Project"
              >
                Internal Dashboard
              </span>
            </div>
          </div>
        </motion.div>

        {/* Project 5: JemputSeller */}
        <motion.div
          variants={fadeUp}
          className="group flex flex-col gap-6 p-4 rounded-[2rem] glass hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-500 hover:glow-indigo"
        >
          {/* Screenshot */}
          <div className="w-full h-52 sm:h-64 rounded-2xl bg-neutral-900 border border-white/5 overflow-hidden relative group-hover:border-white/10 transition-colors">
            <img src={imgJemputSeller} alt="JemputSeller Dashboard" className="absolute w-full h-full object-cover object-left-top transform group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030303]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Project Info */}
          <div className="flex-1 flex flex-col px-2">
            <div className="mb-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                JemputSeller Logistics Platform
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed line-clamp-4">
                A shipping platform enabling business owners to manage bulk deliveries efficiently. Includes warehouse pickup scheduling, multi-courier selection, and cashback tracking for high-volume sellers.
              </p>
            </div>

            {/* Tech Pills */}
            <div className="flex flex-wrap gap-2 mt-auto mb-6">
              <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-orange-500/10 text-orange-400 rounded-lg">
                React
              </span>
              <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-white/5 text-neutral-400 rounded-lg">
                Logistics
              </span>
              <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-white/5 text-neutral-400 rounded-lg">
                API
              </span>
            </div>

            {/* Links */}
            <div>
              <a
                href="https://github.com/kevinnsd1/jemputseller"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-orange-400 transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg> View Source
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project 6: Rafel.id */}
        <motion.div
          variants={fadeUp}
          className="group flex flex-col gap-6 p-4 rounded-[2rem] glass hover:bg-white/[0.05] hover:border-purple-500/30 transition-all duration-500 hover:glow-indigo"
        >
          {/* Screenshot */}
          <div className="w-full h-52 sm:h-64 rounded-2xl bg-neutral-900 border border-white/5 overflow-hidden relative group-hover:border-white/10 transition-colors">
            <img src={imgRafel} alt="Rafel.id Application" className="absolute w-full h-full object-cover object-left-top transform group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030303]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Project Info */}
          <div className="flex-1 flex flex-col px-2">
            <div className="mb-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                Rafel.id Influencer Giveaway
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed line-clamp-4">
                A specialized application helping influencers distribute items to fans securely. Features a built-in payment gateway system for seamless ticket purchases and safe participation in exclusive giveaways.
              </p>
            </div>

            {/* Tech Pills */}
            <div className="flex flex-wrap gap-2 mt-auto mb-6">
              <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-purple-500/10 text-purple-400 rounded-lg">
                React
              </span>
              <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-white/5 text-neutral-400 rounded-lg">
                Fintech
              </span>
              <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-white/5 text-neutral-400 rounded-lg">
                Payment
              </span>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4 mt-2">
              <a
                href="https://github.com/kevinnsd1/Rafel.id_Giveaway"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-purple-400 transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg> View Source
              </a>
              <a
                href="https://www.figma.com/design/E9zRUzrwNUS6NdOgthWcDP/Aplikasi-Giveaway?node-id=1504-1153&p=f&t=iUVSz7spXVBeAtBF-0"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-purple-400 transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/><path d="M12 9H8.5a3.5 3.5 0 1 0 0 7H12V9z"/><path d="M12 16H8.5a3.5 3.5 0 1 0 3.5 3.5V16z"/><path d="M12 9h3.5a3.5 3.5 0 1 1-3.5 3.5V9z"/></svg> Figma Design
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project 7: SkyeFood Merchant */}
        <motion.div
          variants={fadeUp}
          className="group flex flex-col gap-6 p-4 rounded-[2rem] glass hover:bg-white/[0.05] hover:border-yellow-500/30 transition-all duration-500 hover:glow-indigo"
        >
          {/* Screenshot */}
          <div className="w-full h-52 sm:h-64 rounded-2xl bg-neutral-900 border border-white/5 overflow-hidden relative group-hover:border-white/10 transition-colors">
            <img src={imgSkyefood} alt="SkyeFood Merchant Application" className="absolute w-full h-full object-cover object-left-top transform group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030303]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Project Info */}
          <div className="flex-1 flex flex-col px-2">
            <div className="mb-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                SkyeFood Merchant App
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed line-clamp-4">
                A robust cross-platform mobile application for food merchants. Enables business owners to sell items, manage promotions, request driver pickups, and run targeted advertisements similar to leading food delivery platforms.
              </p>
            </div>

            {/* Tech Pills */}
            <div className="flex flex-wrap gap-2 mt-auto mb-6">
              <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-yellow-500/10 text-yellow-400 rounded-lg">
                React Native
              </span>
              <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-white/5 text-neutral-400 rounded-lg">
                Expo
              </span>
              <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-white/5 text-neutral-400 rounded-lg">
                E-Commerce
              </span>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4 mt-2">
              <a
                href="https://github.com/SkyeFood/skye-food-merchant"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-yellow-400 transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg> View Source
              </a>
              <a
                href="https://www.figma.com/design/weGRXTBYC3Ar5r7ejVUaTg/Food-Apps?node-id=2-287&p=f&t=xUtkVSwyKXCtIzjl-0"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-yellow-400 transition-colors duration-200"
              >
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/><path d="M12 9H8.5a3.5 3.5 0 1 0 0 7H12V9z"/><path d="M12 16H8.5a3.5 3.5 0 1 0 3.5 3.5V16z"/><path d="M12 9h3.5a3.5 3.5 0 1 1-3.5 3.5V9z"/></svg> Figma Design
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project 8: Gereja Efata */}
        <motion.div
          variants={fadeUp}
          className="group flex flex-col gap-6 p-4 rounded-[2rem] glass hover:bg-white/[0.05] hover:border-cyan-500/30 transition-all duration-500 hover:glow-indigo md:col-span-2 lg:col-span-1"
        >
          {/* Screenshot */}
          <div className="w-full h-52 sm:h-64 rounded-2xl bg-neutral-900 border border-white/5 overflow-hidden relative group-hover:border-white/10 transition-colors">
            <img src={imgGerejaEfata} alt="Gereja Efata Web Portal" className="absolute w-full h-full object-cover object-left-top transform group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030303]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Project Info */}
          <div className="flex-1 flex flex-col px-2">
            <div className="mb-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                Gereja Efata Donation Portal
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed line-clamp-4">
                A community service web platform designed for the Gereja Efata congregation. It streamlines digital donation payments and broadcasts essential church information. This project is officially published in an academic journal.
              </p>
            </div>

            {/* Tech Pills */}
            <div className="flex flex-wrap gap-2 mt-auto mb-6">
              <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-cyan-500/10 text-cyan-400 rounded-lg">
                React
              </span>
              <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-white/5 text-neutral-400 rounded-lg">
                REST API
              </span>
              <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-white/5 text-neutral-400 rounded-lg">
                Journal
              </span>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4 mt-2">
              <a
                href="https://github.com/kevinnsd1/gerejaefata"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-cyan-400 transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg> Frontend
              </a>
              <a
                href="https://github.com/kevinnsd1/backend-gereja-efata"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-cyan-400 transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg> Backend
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project 9: FOY Report */}
        <motion.div
          variants={fadeUp}
          className="group flex flex-col gap-6 p-4 rounded-[2rem] glass hover:bg-white/[0.05] hover:border-amber-500/30 transition-all duration-500 hover:glow-indigo"
        >
          {/* Screenshot */}
          <div className="w-full h-52 sm:h-64 rounded-2xl bg-neutral-900 border border-white/5 overflow-hidden relative group-hover:border-white/10 transition-colors">
            <img src={imgReportFoy} alt="FOY Report Generator" className="absolute w-full h-full object-cover object-left-top transform group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030303]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Project Info */}
          <div className="flex-1 flex flex-col px-2">
            <div className="mb-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-amber-500 transition-colors duration-300">
                FOY Report Generator
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed line-clamp-4">
                An internal corporate reporting tool for FOY Communications. It automatically aggregates social media intelligence and visualizes complex data sets into highly structured, automated PowerPoint charts.
              </p>
            </div>

            {/* Tech Pills */}
            <div className="flex flex-wrap gap-2 mt-auto mb-6">
              <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-amber-500/10 text-amber-400 rounded-lg">
                React
              </span>
              <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-white/5 text-neutral-400 rounded-lg">
                Data Viz
              </span>
              <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-white/5 text-neutral-400 rounded-lg">
                Reports
              </span>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4 mt-2">
              <span
                className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-500 cursor-not-allowed"
                title="Internal Project"
              >
                Internal Dashboard
              </span>
              <a
                href="https://github.com/kevinnsd1/Report_FOY_PPT"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-amber-500 transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg> View Source
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project 10: Kemenlu Report */}
        <motion.div
          variants={fadeUp}
          className="group flex flex-col gap-6 p-4 rounded-[2rem] glass hover:bg-white/[0.05] hover:border-blue-500/30 transition-all duration-500 hover:glow-cyan"
        >
          {/* Screenshot */}
          <div className="w-full h-52 sm:h-64 rounded-2xl bg-neutral-900 border border-white/5 overflow-hidden relative group-hover:border-white/10 transition-colors">
            <img src={imgKemenlu} alt="KEMENLU Report Generator" className="absolute w-full h-full object-cover object-left-top transform group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030303]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Project Info */}
          <div className="flex-1 flex flex-col px-2">
            <div className="mb-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                KEMENLU Report Generator
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed line-clamp-4">
                A highly secure internal reporting application for the Ministry of Foreign Affairs (Kementrian Luar Negeri). Produces automated presentations featuring real-time data scraping, analysis, and metric benchmarks.
              </p>
            </div>

            {/* Tech Pills */}
            <div className="flex flex-wrap gap-2 mt-auto mb-6">
              <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-blue-500/10 text-blue-400 rounded-lg">
                React
              </span>
              <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-white/5 text-neutral-400 rounded-lg">
                Scraping
              </span>
              <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-white/5 text-neutral-400 rounded-lg">
                GovTech
              </span>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4 mt-2">
              <span
                className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-500 cursor-not-allowed"
                title="Internal Project"
              >
                Internal Dashboard
              </span>
              <a
                href="https://github.com/kevinnsd1/PPT_KEMENLU"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-blue-400 transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg> View Source
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project 11: Infinite Shop */}
        <motion.div
          variants={fadeUp}
          className="group flex flex-col gap-6 p-4 rounded-[2rem] glass hover:bg-white/[0.05] hover:border-pink-500/30 transition-all duration-500 hover:glow-indigo"
        >
          {/* Screenshot */}
          <div className="w-full h-52 sm:h-64 rounded-2xl bg-neutral-900 border border-white/5 overflow-hidden relative group-hover:border-white/10 transition-colors">
            <img src={imgInfiniteShop} alt="Infinite Shop Merchandise UI" className="absolute w-full h-full object-cover object-left-top transform group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030303]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Project Info */}
          <div className="flex-1 flex flex-col px-2">
            <div className="mb-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors duration-300">
                Infinite Shop Merchandise
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed line-clamp-4">
                An internal e-commerce platform specifically developed for Infinite Learning. It facilitates the seamless purchase of official corporate merchandise and learning materials directly by internal team members.
              </p>
            </div>

            {/* Tech Pills */}
            <div className="flex flex-wrap gap-2 mt-auto mb-6">
              <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-pink-500/10 text-pink-400 rounded-lg">
                React
              </span>
              <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-white/5 text-neutral-400 rounded-lg">
                E-Commerce
              </span>
              <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-white/5 text-neutral-400 rounded-lg">
                Merch
              </span>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4 mt-2">
              <span
                className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-500 cursor-not-allowed"
                title="Internal Project"
              >
                Internal Store
              </span>
              <a
                href="https://github.com/Suandika12/Infinite_Shop/tree/main/frontend"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-pink-400 transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg> View Source
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
