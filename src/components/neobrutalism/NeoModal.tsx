import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export interface NeoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  headerBg?: "yellow" | "pink" | "cyan" | "green" | "dark" | "purple" | "orange";
  children: React.ReactNode;
  footer?: React.ReactNode;
  maxWidth?: "sm" | "md" | "lg" | "xl";
}

const headerBgStyles = {
  yellow: "bg-[#FFE600] text-black",
  pink: "bg-[#FF2E93] text-white",
  cyan: "bg-[#00E5FF] text-black",
  green: "bg-[#A3E635] text-black",
  orange: "bg-[#FF6B00] text-white",
  dark: "bg-[#18181b] text-white",
  purple: "bg-[#9D4EDD] text-white",
};

const maxWidthStyles = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-2xl",
};

export const NeoModal: React.FC<NeoModalProps> = ({
  isOpen,
  onClose,
  title = "Modal Window",
  headerBg = "yellow",
  children,
  footer,
  maxWidth = "lg",
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className={`
              relative w-full ${maxWidthStyles[maxWidth]} bg-white text-black
              border-4 border-black rounded-2xl shadow-[10px_10px_0px_0px_#000000]
              overflow-hidden z-10
            `}
          >
            {/* Titlebar */}
            <div className={`px-5 py-3 border-b-4 border-black flex items-center justify-between ${headerBgStyles[headerBg]}`}>
              <div className="flex items-center gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-[#FF4757] border-2 border-black" />
                <div className="w-3.5 h-3.5 rounded-full bg-[#FFE600] border-2 border-black" />
                <div className="w-3.5 h-3.5 rounded-full bg-[#A3E635] border-2 border-black" />
                <h4 className="ml-2 font-heading font-black uppercase text-sm sm:text-base tracking-tight truncate max-w-[200px] sm:max-w-xs">
                  {title}
                </h4>
              </div>

              <button
                onClick={onClose}
                className="w-7 h-7 rounded-lg bg-[#FF4757] text-white border-2 border-black flex items-center justify-center font-bold hover:scale-110 active:scale-95 shadow-[2px_2px_0px_0px_#000] transition-transform cursor-pointer"
                aria-label="Close modal"
              >
                <X size={16} strokeWidth={3} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 max-h-[75vh] overflow-y-auto">{children}</div>

            {/* Modal Footer (Optional) */}
            {footer && (
              <div className="px-6 py-4 bg-neutral-100 border-t-4 border-black flex items-center justify-end gap-3">
                {footer}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
