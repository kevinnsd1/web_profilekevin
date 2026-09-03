import React from "react";

export interface NeoMarqueeProps {
  items: string[];
  bg?: "yellow" | "pink" | "cyan" | "green" | "dark" | "purple";
  speed?: number; // seconds
  separator?: string;
  className?: string;
}

const bgClasses = {
  yellow: "bg-[#FFE600] text-black border-black",
  pink: "bg-[#FF2E93] text-white border-black",
  cyan: "bg-[#00E5FF] text-black border-black",
  green: "bg-[#A3E635] text-black border-black",
  dark: "bg-[#121212] text-white border-white",
  purple: "bg-[#9D4EDD] text-white border-black",
};

export const NeoMarquee: React.FC<NeoMarqueeProps> = ({
  items,
  bg = "yellow",
  separator = "★",
  className = "",
}) => {
  // Duplicate items array multiple times to ensure smooth infinite looping
  const marqueeContent = Array(6).fill(items).flat();

  return (
    <div
      className={`
        w-full overflow-hidden border-y-4 font-heading font-black uppercase text-sm sm:text-base tracking-wider py-3 select-none
        ${bgClasses[bg]}
        ${className}
      `}
    >
      <div className="animate-marquee flex whitespace-nowrap gap-8 items-center">
        {marqueeContent.map((item, index) => (
          <div key={index} className="flex items-center gap-8 shrink-0">
            <span>{item}</span>
            <span className="text-xl opacity-70">{separator}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
