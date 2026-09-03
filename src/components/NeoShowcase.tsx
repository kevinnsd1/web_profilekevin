import { useState } from "react";
import {
  NeoButton,
  NeoCard,
  NeoBadge,
  NeoMarquee,
  NeoModal,
  NeoInput,
  NeoTextarea,
  NeoTabs,
  NeoAccordion,
} from "./neobrutalism";
import { Sparkles, Terminal, Code2, Heart, Check, Play, Eye, Mail, Star, Layers } from "lucide-react";

export function NeoShowcase() {
  const [isTestModalOpen, setIsTestModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [inputValue, setInputValue] = useState("");

  const sampleTabs = [
    { id: "all", label: "ALL COMPONENTS", badge: "8" },
    { id: "buttons", label: "BUTTONS", badge: "9" },
    { id: "cards", label: "CARDS & MODALS", badge: "4" },
    { id: "forms", label: "FORM CONTROLS", badge: "3" },
  ];

  const accordionItems = [
    {
      id: "1",
      title: "WHAT IS NEO-BRUTALISM UI?",
      badge: "DESIGN TREND",
      icon: <Sparkles size={18} />,
      content:
        "Neo-brutalism combines retro 90s aesthetic with modern typography. It uses thick black borders (3px-4px), solid un-blurred black drop shadows, vivid contrasting pop colors, geometric layout grids, and interactive sticker-style micro-animations.",
    },
    {
      id: "2",
      title: "HOW DO I REUSE THESE COMPONENTS IN MY PROJECT?",
      badge: "DEVELOPER GUIDE",
      icon: <Code2 size={18} />,
      content:
        "All components are exported from `src/components/neobrutalism/index.ts`. You can import `NeoButton`, `NeoCard`, `NeoBadge`, `NeoModal`, `NeoInput`, `NeoTabs`, `NeoAccordion`, `NeoMarquee` directly into any React page or component with full TypeScript prop autocompletion!",
    },
    {
      id: "3",
      title: "ARE THESE COMPONENTS FULLY RESPONSIVE & ANIMATED?",
      badge: "ANIMATIONS",
      icon: <Layers size={18} />,
      content:
        "Yes! Powered by Framer Motion and Tailwind CSS, every component features hardware-accelerated spring animations, hover offsets, focus states, and mobile touch optimizations.",
    },
  ];

  return (
    <div className="space-y-12 py-6">
      {/* Banner Title */}
      <div className="border-4 border-black rounded-3xl bg-[#FFE600] p-6 sm:p-8 text-black shadow-[8px_8px_0px_0px_#FF2E93] relative overflow-hidden">
        <div className="relative z-10 space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <NeoBadge variant="pink" rotate="left" size="md" icon={<Sparkles size={14} />}>
              LIBRARY SHOWCASE
            </NeoBadge>
            <NeoBadge variant="cyan" rotate="right" size="sm">
              REACT + TAILWIND + TS
            </NeoBadge>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight">
            NEO-BRUTALISM UI COMPONENT GALLERY
          </h2>
          <p className="font-bold text-base sm:text-lg max-w-2xl leading-relaxed">
            Explore the complete suite of modular, high-contrast Neo-Brutalism components. Click any element to test interactions, active states, and modals!
          </p>
        </div>
      </div>

      {/* Marquee Banner Component Preview */}
      <div className="space-y-3">
        <h3 className="font-heading font-black text-xl uppercase tracking-wider text-white flex items-center gap-2">
          <Terminal size={20} className="text-[#FFE600]" /> 1. NEO MARQUEE TICKER
        </h3>
        <NeoMarquee
          items={[
            "NEO-BRUTALISM UI LIBRARY",
            "VIBRANT POP COLORS",
            "HARD SHADOWS & THICK BORDERS",
            "REUSABLE REACT COMPONENTS",
            "TAILWIND CSS POWERED",
          ]}
          bg="yellow"
        />
      </div>

      {/* Buttons Showcase Section */}
      <div className="space-y-4">
        <h3 className="font-heading font-black text-xl uppercase tracking-wider text-white flex items-center gap-2">
          <Star size={20} className="text-[#FF2E93]" /> 2. NEO BUTTON VARIANTS & SIZES
        </h3>

        <NeoCard bg="white" shadowSize="md" windowHeader title="COMPONENTS // NEO-BUTTON">
          <div className="space-y-6">
            <div>
              <p className="font-heading font-black text-xs uppercase tracking-wider text-neutral-500 mb-3">
                COLOR VARIANTS:
              </p>
              <div className="flex flex-wrap gap-3">
                <NeoButton variant="yellow" size="md">YELLOW</NeoButton>
                <NeoButton variant="pink" size="md">PINK</NeoButton>
                <NeoButton variant="cyan" size="md">CYAN</NeoButton>
                <NeoButton variant="green" size="md">GREEN</NeoButton>
                <NeoButton variant="orange" size="md">ORANGE</NeoButton>
                <NeoButton variant="purple" size="md">PURPLE</NeoButton>
                <NeoButton variant="white" size="md">WHITE</NeoButton>
                <NeoButton variant="dark" size="md">DARK</NeoButton>
                <NeoButton variant="danger" size="md">DANGER</NeoButton>
              </div>
            </div>

            <div className="border-t-2 border-dashed border-neutral-300 pt-4">
              <p className="font-heading font-black text-xs uppercase tracking-wider text-neutral-500 mb-3">
                BUTTON SIZES & ICONS:
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <NeoButton variant="yellow" size="sm" icon={<Play size={14} />}>
                  SMALL BUTTON
                </NeoButton>
                <NeoButton variant="pink" size="md" icon={<Heart size={16} />}>
                  MEDIUM BUTTON
                </NeoButton>
                <NeoButton variant="cyan" size="lg" icon={<Sparkles size={18} />}>
                  LARGE BUTTON
                </NeoButton>
              </div>
            </div>
          </div>
        </NeoCard>
      </div>

      {/* Badges Showcase Section */}
      <div className="space-y-4">
        <h3 className="font-heading font-black text-xl uppercase tracking-wider text-white flex items-center gap-2">
          <Code2 size={20} className="text-[#00E5FF]" /> 3. NEO BADGES & STICKERS
        </h3>

        <NeoCard bg="white" shadowSize="md" windowHeader title="COMPONENTS // NEO-BADGE">
          <div className="space-y-4">
            <p className="font-heading font-black text-xs uppercase tracking-wider text-neutral-500">
              STICKER BADGES WITH ROTATION & PULSE DOTS:
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <NeoBadge variant="yellow" rotate="left" size="md" icon={<Sparkles size={14} />}>
                NEW FEATURE
              </NeoBadge>
              <NeoBadge variant="pink" rotate="right" size="md" pulseDot>
                LIVE MONITORING
              </NeoBadge>
              <NeoBadge variant="cyan" rotate="left-lg" size="md">
                VERIFIED CODE
              </NeoBadge>
              <NeoBadge variant="green" rotate="right-lg" size="md" icon={<Check size={14} />}>
                SUCCESS 100%
              </NeoBadge>
              <NeoBadge variant="purple" rotate="none" size="md">
                HIGH CONTRAST
              </NeoBadge>
              <NeoBadge variant="orange" rotate="left" size="md">
                STICKER VIBES
              </NeoBadge>
            </div>
          </div>
        </NeoCard>
      </div>

      {/* Form Controls Showcase */}
      <div className="space-y-4">
        <h3 className="font-heading font-black text-xl uppercase tracking-wider text-white flex items-center gap-2">
          <Mail size={20} className="text-[#A3E635]" /> 4. NEO INPUTS & TEXTAREAS
        </h3>

        <NeoCard bg="white" shadowSize="md" windowHeader title="COMPONENTS // NEO-FORM-CONTROLS">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <NeoInput
              label="Interactive Input Field"
              placeholder="Type something to test focus state..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              helperText="Focuses with a high-contrast offset shadow!"
            />
            <NeoTextarea
              label="Interactive Text Area"
              placeholder="Write a message or notes here..."
              helperText="Thick 4px border with solid black drop shadow."
            />
          </div>
        </NeoCard>
      </div>

      {/* Tabs & Accordion Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <h3 className="font-heading font-black text-xl uppercase tracking-wider text-white">
            5. NEO TABS & TOGGLES
          </h3>
          <NeoCard bg="white" shadowSize="md" className="space-y-4">
            <NeoTabs
              tabs={sampleTabs}
              activeTab={activeTab}
              onChange={setActiveTab}
              activeVariant="yellow"
            />
            <div className="p-4 bg-neutral-100 border-2 border-black rounded-xl font-mono text-xs font-bold">
              ACTIVE TAB ID: <span className="text-[#FF2E93]">{activeTab}</span>
            </div>
          </NeoCard>
        </div>

        <div className="space-y-3">
          <h3 className="font-heading font-black text-xl uppercase tracking-wider text-white">
            6. NEO MODAL TRIGGER
          </h3>
          <NeoCard bg="white" shadowSize="md" className="space-y-4">
            <p className="font-semibold text-sm">
              Click the button below to launch a live demo of the NeoModal pop-up window!
            </p>
            <NeoButton
              variant="pink"
              size="md"
              shadowSize="md"
              icon={<Eye size={18} />}
              onClick={() => setIsTestModalOpen(true)}
            >
              LAUNCH TEST MODAL
            </NeoButton>
          </NeoCard>
        </div>
      </div>

      {/* Accordion Showcase */}
      <div className="space-y-4">
        <h3 className="font-heading font-black text-xl uppercase tracking-wider text-white">
          7. NEO ACCORDION / EXPANDABLE FAQ
        </h3>
        <NeoAccordion items={accordionItems} accentBg="yellow" />
      </div>

      {/* Test Modal Popup */}
      <NeoModal
        isOpen={isTestModalOpen}
        onClose={() => setIsTestModalOpen(false)}
        title="TEST MODAL WINDOW // NEO-BRUTALISM"
        headerBg="pink"
        maxWidth="md"
        footer={
          <NeoButton
            variant="yellow"
            size="sm"
            shadowSize="sm"
            onClick={() => setIsTestModalOpen(false)}
          >
            CLOSE WINDOW
          </NeoButton>
        }
      >
        <div className="space-y-4 text-black">
          <NeoBadge variant="yellow" rotate="left" size="md">
            RETRO WINDOW DESIGN
          </NeoBadge>
          <h4 className="font-heading font-black text-xl uppercase">
            Interactive Window Component
          </h4>
          <p className="font-semibold text-sm leading-relaxed">
            This modal features a retro desktop titlebar, red close button, high contrast backdrop blur, smooth spring entrance animations, and full keyboard escape key listener.
          </p>
        </div>
      </NeoModal>
    </div>
  );
}
