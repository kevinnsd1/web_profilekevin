import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

export type NeoCardBg =
  | "white"
  | "yellow"
  | "pink"
  | "cyan"
  | "green"
  | "orange"
  | "purple"
  | "dark"
  | "dark-card";

export interface NeoCardProps extends HTMLMotionProps<"div"> {
  bg?: NeoCardBg;
  title?: string;
  subtitle?: string;
  badge?: string;
  badgeBg?: NeoCardBg;
  windowHeader?: boolean;
  shadowSize?: "sm" | "md" | "lg" | "xl" | "white";
  hoverEffect?: boolean;
  children?: React.ReactNode;
  className?: string;
  headerIcon?: React.ReactNode;
  headerAction?: React.ReactNode;
}

const bgStyles: Record<NeoCardBg, string> = {
  white: "bg-white text-black",
  yellow: "bg-[#FFE600] text-black",
  pink: "bg-[#FF2E93] text-white",
  cyan: "bg-[#00E5FF] text-black",
  green: "bg-[#A3E635] text-black",
  orange: "bg-[#FF6B00] text-white",
  purple: "bg-[#9D4EDD] text-white",
  dark: "bg-[#121212] text-white",
  "dark-card": "bg-[#1c1c21] text-white border-white",
};

const shadowStyles = {
  sm: "shadow-[3px_3px_0px_0px_#000000] sm:shadow-[4px_4px_0px_0px_#000000]",
  md: "shadow-[4px_4px_0px_0px_#000000] sm:shadow-[6px_6px_0px_0px_#000000]",
  lg: "shadow-[5px_5px_0px_0px_#000000] sm:shadow-[8px_8px_0px_0px_#000000]",
  xl: "shadow-[6px_6px_0px_0px_#000000] sm:shadow-[12px_12px_0px_0px_#000000]",
  white: "shadow-[4px_4px_0px_0px_#ffffff] sm:shadow-[6px_6px_0px_0px_#ffffff] border-white",
};

export const NeoCard: React.FC<NeoCardProps> = ({
  bg = "white",
  title,
  subtitle,
  badge,
  badgeBg = "yellow",
  windowHeader = false,
  shadowSize = "md",
  hoverEffect = true,
  children,
  className = "",
  headerIcon,
  headerAction,
  ...props
}) => {
  const isDarkCard = bg === "dark" || bg === "dark-card";
  const borderClass = isDarkCard && shadowSize === "white" ? "border-3 sm:border-4 border-white" : "border-3 sm:border-4 border-black";

  return (
    <motion.div
      className={`
        rounded-2xl overflow-hidden max-w-full
        ${borderClass}
        ${bgStyles[bg]}
        ${shadowStyles[shadowSize]}
        ${hoverEffect ? "transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#000000] sm:hover:shadow-[10px_10px_0px_0px_#000000]" : ""}
        ${className}
      `}
      {...props}
    >
      {/* Retro Window Header Bar */}
      {windowHeader && (
        <div className={`px-3 sm:px-4 py-2 sm:py-2.5 flex items-center justify-between border-b-3 border-black gap-2 ${isDarkCard ? "bg-[#27272a] border-white text-white" : "bg-[#f4f4f5] text-black"}`}>
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0 flex-1">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FF4757] border border-black shrink-0" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FFE600] border border-black shrink-0" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#A3E635] border border-black shrink-0" />
            {title && (
              <span className="ml-1 sm:ml-2 font-heading text-[10px] sm:text-xs font-black uppercase tracking-wider truncate min-w-0 flex-1">
                {title}
              </span>
            )}
          </div>
          {headerAction && <div className="shrink-0">{headerAction}</div>}
        </div>
      )}

      {/* Standard Header (if no windowHeader) */}
      {!windowHeader && (title || badge || headerIcon) && (
        <div className="px-4 sm:px-6 pt-4 sm:pt-6 pb-2 flex flex-wrap items-start justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
            {headerIcon && <div className="shrink-0">{headerIcon}</div>}
            <div className="min-w-0">
              {title && (
                <h3 className="font-heading font-black text-lg sm:text-2xl tracking-tight leading-tight truncate">
                  {title}
                </h3>
              )}
              {subtitle && (
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider opacity-80 mt-0.5">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
          {badge && (
            <span
              className={`px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-black uppercase border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_#000] shrink-0 ${
                badgeBg === "yellow"
                  ? "bg-[#FFE600] text-black"
                  : badgeBg === "pink"
                  ? "bg-[#FF2E93] text-white"
                  : badgeBg === "cyan"
                  ? "bg-[#00E5FF] text-black"
                  : badgeBg === "green"
                  ? "bg-[#A3E635] text-black"
                  : badgeBg === "orange"
                  ? "bg-[#FF6B00] text-white"
                  : "bg-white text-black"
              }`}
            >
              {badge}
            </span>
          )}
        </div>
      )}

      {/* Card Content Body */}
      <div className="p-4 sm:p-6">{children}</div>
    </motion.div>
  );
};
