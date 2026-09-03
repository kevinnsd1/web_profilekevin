import { NeoMarquee, NeoBadge, NeoButton } from "./neobrutalism";
import { Mail, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/SocialIcons";

export function NeoFooter() {
  return (
    <footer className="space-y-12 pt-16 pb-12 border-t-4 border-black">
      {/* Ticker Banner focused on Kevin */}
      <NeoMarquee
        items={[
          "FRONTEND ENGINEER & WEB DEVELOPER",
          "REACT, TYPESCRIPT & NEXT.JS SPECIALIST",
          "BUILDING HIGH-PERFORMANCE DASHBOARDS & WEB APPS",
          "AVAILABLE FOR FREELANCE & FULLTIME ROLES",
          "CRAFTING CLEAN & RELIABLE CODE",
        ]}
        bg="yellow"
      />

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div className="space-y-2">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <h3 className="font-heading font-black text-2xl uppercase tracking-tight text-white">
              KEVIN SATRIA
            </h3>
            <NeoBadge variant="pink" rotate="right" size="sm">
              PRO
            </NeoBadge>
          </div>
          <p className="text-sm font-bold text-neutral-400">
            Frontend Engineer & Web Developer based in Indonesia.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <NeoButton
            href="mailto:kevinsatrd01@gmail.com"
            variant="yellow"
            size="sm"
            shadowSize="sm"
            icon={<Mail size={16} />}
          >
            EMAIL ME
          </NeoButton>
          <NeoButton
            href="https://github.com/kevinnsd1"
            target="_blank"
            rel="noreferrer"
            variant="white"
            size="sm"
            shadowSize="sm"
            icon={<GithubIcon size={16} />}
          >
            GITHUB
          </NeoButton>
          <NeoButton
            href="https://linkedin.com/in/kevinsatriad"
            target="_blank"
            rel="noreferrer"
            variant="cyan"
            size="sm"
            shadowSize="sm"
            icon={<LinkedinIcon size={16} />}
          >
            LINKEDIN
          </NeoButton>
        </div>
      </div>

      <div className="text-center font-bold text-xs text-neutral-500 uppercase tracking-widest flex items-center justify-center gap-2">
        <span>© {new Date().getFullYear()} KEVIN SATRIA</span>
        <span>•</span>
        <span className="flex items-center gap-1 text-[#FFE600]">
          CRAFTED WITH PASSION & CODE <Sparkles size={12} />
        </span>
      </div>
    </footer>
  );
}
