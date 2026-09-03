import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export interface NeoAccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
  badge?: string;
  icon?: React.ReactNode;
}

export interface NeoAccordionProps {
  items: NeoAccordionItem[];
  allowMultiple?: boolean;
  accentBg?: "yellow" | "pink" | "cyan" | "green" | "purple";
  className?: string;
}

const accentHeaderStyles = {
  yellow: "bg-[#FFE600] text-black",
  pink: "bg-[#FF2E93] text-white",
  cyan: "bg-[#00E5FF] text-black",
  green: "bg-[#A3E635] text-black",
  purple: "bg-[#9D4EDD] text-white",
};

export const NeoAccordion: React.FC<NeoAccordionProps> = ({
  items,
  allowMultiple = false,
  accentBg = "yellow",
  className = "",
}) => {
  const [openIds, setOpenIds] = useState<string[]>([items[0]?.id || ""]);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div
            key={item.id}
            className="border-3 sm:border-4 border-black rounded-2xl bg-white shadow-[5px_5px_0px_0px_#000000] overflow-hidden transition-all duration-200"
          >
            <button
              onClick={() => toggleItem(item.id)}
              className={`
                w-full px-6 py-4 flex items-center justify-between gap-4 font-heading text-left cursor-pointer
                transition-colors duration-150 select-none
                ${isOpen ? accentHeaderStyles[accentBg] : "bg-white text-black hover:bg-neutral-50"}
              `}
            >
              <div className="flex items-center gap-3">
                {item.icon && <span className="shrink-0">{item.icon}</span>}
                <span className="font-extrabold text-base sm:text-lg uppercase tracking-tight">
                  {item.title}
                </span>
                {item.badge && (
                  <span className="px-2 py-0.5 text-xs font-black uppercase border-2 border-black rounded bg-white text-black shadow-[1px_1px_0px_0px_#000]">
                    {item.badge}
                  </span>
                )}
              </div>

              <div
                className={`w-8 h-8 rounded-lg border-2 border-black flex items-center justify-center font-black shrink-0 transition-transform ${
                  isOpen ? "bg-black text-white" : "bg-white text-black shadow-[2px_2px_0px_0px_#000]"
                }`}
              >
                {isOpen ? <Minus size={18} strokeWidth={3} /> : <Plus size={18} strokeWidth={3} />}
              </div>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="border-t-3 border-black bg-white"
                >
                  <div className="p-6 text-black text-sm leading-relaxed">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
