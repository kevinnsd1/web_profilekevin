import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

export type NeoButtonVariant =
  | "yellow"
  | "pink"
  | "cyan"
  | "green"
  | "orange"
  | "purple"
  | "white"
  | "dark"
  | "danger";

export type NeoButtonSize = "sm" | "md" | "lg";

export interface NeoButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: NeoButtonVariant;
  size?: NeoButtonSize;
  shadowSize?: "sm" | "md" | "lg" | "none";
  fullWidth?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  download?: string;
  asAnchor?: boolean;
  className?: string;
}

const variantStyles: Record<NeoButtonVariant, string> = {
  yellow: "bg-[#FFE600] text-black hover:bg-[#FFF066]",
  pink: "bg-[#FF2E93] text-white hover:bg-[#FF60B2]",
  cyan: "bg-[#00E5FF] text-black hover:bg-[#66F0FF]",
  green: "bg-[#A3E635] text-black hover:bg-[#B8EC66]",
  orange: "bg-[#FF6B00] text-white hover:bg-[#FF8B33]",
  purple: "bg-[#9D4EDD] text-white hover:bg-[#B577E5]",
  white: "bg-white text-black hover:bg-neutral-100",
  dark: "bg-[#18181b] text-white hover:bg-[#27272a]",
  danger: "bg-[#FF4757] text-white hover:bg-[#FF6B7A]",
};

const sizeStyles: Record<NeoButtonSize, string> = {
  sm: "px-3 py-1.5 text-xs font-bold gap-1.5 rounded-lg border-2",
  md: "px-5 py-2.5 text-sm font-extrabold gap-2 rounded-xl border-3",
  lg: "px-7 py-3.5 text-base font-black tracking-wide gap-3 rounded-2xl border-4",
};

const shadowStyles = {
  none: "shadow-none",
  sm: "shadow-[3px_3px_0px_0px_#000000] hover:shadow-[5px_5px_0px_0px_#000000]",
  md: "shadow-[5px_5px_0px_0px_#000000] hover:shadow-[7px_7px_0px_0px_#000000]",
  lg: "shadow-[8px_8px_0px_0px_#000000] hover:shadow-[10px_10px_0px_0px_#000000]",
};

export const NeoButton: React.FC<NeoButtonProps> = ({
  variant = "yellow",
  size = "md",
  shadowSize = "md",
  fullWidth = false,
  icon,
  children,
  href,
  target,
  rel,
  download,
  asAnchor = false,
  className = "",
  disabled = false,
  onClick,
  ...props
}) => {
  const baseClasses = `
    inline-flex items-center justify-center
    border-black text-center font-heading tracking-tight uppercase cursor-pointer select-none
    transition-all duration-150 ease-out
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${shadowStyles[shadowSize]}
    ${fullWidth ? "w-full" : ""}
    ${disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}
    hover:-translate-x-0.5 hover:-translate-y-0.5
    active:translate-x-1 active:translate-y-1 active:shadow-none
    ${className}
  `;

  if (asAnchor || href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        download={download}
        className={baseClasses}
        whileTap={{ scale: 0.98 }}
      >
        {icon && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </motion.button>
  );
};
