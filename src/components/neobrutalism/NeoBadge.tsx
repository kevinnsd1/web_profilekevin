import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

export type NeoBadgeVariant =
  | "yellow"
  | "pink"
  | "cyan"
  | "green"
  | "orange"
  | "purple"
  | "white"
  | "dark"
  | "danger";

export interface NeoBadgeProps extends Omit<HTMLMotionProps<"span">, "children"> {
  variant?: NeoBadgeVariant;
  rotate?: "left" | "right" | "left-lg" | "right-lg" | "none";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  pulseDot?: boolean;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<NeoBadgeVariant, string> = {
  yellow: "bg-[#FFE600] text-black border-black shadow-[2px_2px_0px_0px_#000000]",
  pink: "bg-[#FF2E93] text-white border-black shadow-[2px_2px_0px_0px_#000000]",
  cyan: "bg-[#00E5FF] text-black border-black shadow-[2px_2px_0px_0px_#000000]",
  green: "bg-[#A3E635] text-black border-black shadow-[2px_2px_0px_0px_#000000]",
  orange: "bg-[#FF6B00] text-white border-black shadow-[2px_2px_0px_0px_#000000]",
  purple: "bg-[#9D4EDD] text-white border-black shadow-[2px_2px_0px_0px_#000000]",
  white: "bg-white text-black border-black shadow-[2px_2px_0px_0px_#000000]",
  dark: "bg-[#18181b] text-white border-black shadow-[2px_2px_0px_0px_#FFE600]",
  danger: "bg-[#FF4757] text-white border-black shadow-[2px_2px_0px_0px_#000000]",
};

const rotateStyles = {
  none: "rotate-0",
  left: "-rotate-2",
  right: "rotate-2",
  "left-lg": "-rotate-6",
  "right-lg": "rotate-6",
};

const sizeStyles = {
  sm: "px-2.5 py-0.5 text-[11px] font-extrabold border-2 rounded-md gap-1",
  md: "px-3.5 py-1 text-xs font-black border-2 rounded-lg gap-1.5",
  lg: "px-4 py-1.5 text-sm font-black border-3 rounded-xl gap-2",
};

export const NeoBadge: React.FC<NeoBadgeProps> = ({
  variant = "yellow",
  rotate = "none",
  size = "md",
  icon,
  pulseDot = false,
  children,
  className = "",
  ...props
}) => {
  return (
    <motion.span
      className={`
        inline-flex items-center tracking-wider uppercase font-heading select-none
        transition-transform duration-200 hover:scale-105 hover:rotate-0
        ${variantStyles[variant]}
        ${rotateStyles[rotate]}
        ${sizeStyles[size]}
        ${className}
      `}
      {...props}
    >
      {pulseDot && (
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-current"></span>
        </span>
      )}
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </motion.span>
  );
};
