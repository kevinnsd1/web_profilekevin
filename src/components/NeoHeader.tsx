import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Download, Terminal, Code2 } from "lucide-react";
import { NeoButton, NeoBadge } from "./neobrutalism";
import { NeoContactModal } from "./NeoContactModal";
import { GithubIcon, LinkedinIcon } from "./icons/SocialIcons";
import imgKevin from "../assets/image/foto_kevin.jpg";
import cvFile from "../assets/file/CV.KevinSD.pdf";

export function NeoHeader() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="relative pt-6 pb-12">
      {/* Decorative Floating Stickers */}
      <div className="hidden lg:block absolute top-0 -right-4 z-10 pointer-events-none">
        <NeoBadge variant="pink" rotate="right-lg" size="lg" icon={<Code2 size={16} />}>
          CREATIVE DEVELOPER
        </NeoBadge>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-10 md:gap-14 w-full">
        {/* Bio Text & Actions */}
        <div className="space-y-6 flex-1 text-center md:text-left">
          {/* Status Badge */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
            <NeoBadge variant="green" rotate="left" size="md">
              AVAILABLE FOR NEW PROJECTS
            </NeoBadge>
            <NeoBadge variant="yellow" rotate="right" size="md" icon={<Terminal size={14} />}>
              FRONTEND ENGINEER
            </NeoBadge>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black tracking-tight text-white uppercase leading-[1.05]"
            >
              HI, I'M <span className="inline-block bg-[#FFE600] text-black px-4 py-1 rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_#FF2E93] rotate-[-2deg]">KEVIN.</span>
            </motion.h1>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-2xl sm:text-3xl font-heading font-extrabold text-[#00E5FF] tracking-tight uppercase"
            >
              I CRAFT BOLD & HIGH-PERFORMING SOFTWARE.
            </motion.div>
          </div>

          {/* Description */}
          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-xl font-medium mx-auto md:mx-0">
            A software engineer focused on crafting clean, high-performance
            web applications, real-time analytics dashboards, and scalable digital experiences.
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
              SAY HELLO!
            </NeoButton>

            <NeoButton
              href={cvFile}
              download="CV_KevinSD.pdf"
              variant="white"
              size="lg"
              shadowSize="lg"
              icon={<Download size={20} />}
            >
              DOWNLOAD CV
            </NeoButton>

            {/* Social Icons as Neo Badges */}
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
          className="shrink-0 relative group"
        >
          {/* Sticker background frame */}
          <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-3xl border-4 border-black bg-[#FF2E93] p-2 shadow-[10px_10px_0px_0px_#FFE600] relative rotate-2 transition-transform duration-300 group-hover:rotate-0">
            <div className="w-full h-full rounded-2xl overflow-hidden border-3 border-black bg-black relative">
              <img
                src={imgKevin}
                alt="Kevin Satria"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Sticker Badge Tag */}
            <div className="absolute -bottom-4 -left-4 z-20">
              <NeoBadge variant="cyan" rotate="left-lg" size="md" icon={<Code2 size={14} />}>
                100% CLEAN CODE
              </NeoBadge>
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
