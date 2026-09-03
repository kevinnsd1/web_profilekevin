import { motion } from "framer-motion";

export interface NeoTabItem {
  id: string;
  label: string;
  badge?: string;
  icon?: React.ReactNode;
}

export interface NeoTabsProps {
  tabs: NeoTabItem[];
  activeTab: string;
  onChange: (id: string) => void;
  activeVariant?: "yellow" | "pink" | "cyan" | "green" | "orange" | "purple";
  className?: string;
}

const activeVariantStyles = {
  yellow: "bg-[#FFE600] text-black shadow-[3px_3px_0px_0px_#000000]",
  pink: "bg-[#FF2E93] text-white shadow-[3px_3px_0px_0px_#000000]",
  cyan: "bg-[#00E5FF] text-black shadow-[3px_3px_0px_0px_#000000]",
  green: "bg-[#A3E635] text-black shadow-[3px_3px_0px_0px_#000000]",
  orange: "bg-[#FF6B00] text-white shadow-[3px_3px_0px_0px_#000000]",
  purple: "bg-[#9D4EDD] text-white shadow-[3px_3px_0px_0px_#000000]",
};

export const NeoTabs: React.FC<NeoTabsProps> = ({
  tabs,
  activeTab,
  onChange,
  activeVariant = "yellow",
  className = "",
}) => {
  return (
    <div className={`flex items-center gap-2 overflow-x-auto pb-2 pt-1 max-w-full no-scrollbar sm:flex-wrap ${className}`}>
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;
        return (
          <motion.button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            whileTap={{ scale: 0.95 }}
            className={`
              relative px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl border-2 sm:border-3 border-black font-heading font-black text-[11px] sm:text-sm uppercase tracking-wider
              flex items-center gap-1.5 sm:gap-2 cursor-pointer transition-all duration-150 select-none shrink-0
              ${
                isActive
                  ? activeVariantStyles[activeVariant]
                  : "bg-white text-black hover:bg-neutral-100 shadow-[2px_2px_0px_0px_#000000]"
              }
            `}
          >
            {tab.icon && <span className="shrink-0">{tab.icon}</span>}
            <span className="whitespace-nowrap">{tab.label}</span>
            {tab.badge && (
              <span className="px-1.5 py-0.5 text-[9px] sm:text-[10px] rounded bg-black text-white font-bold ml-0.5">
                {tab.badge}
              </span>
            )}
          </motion.button>
        );
      })}
    </div>
  );
};
