import React from 'react';

export interface JourneyNavItem {
  number: string;
  label: string;
  target: string;
  ariaLabel: string;
}

export const JOURNEY_NAV_ITEMS: JourneyNavItem[] = [
  {
    number: '01',
    label: 'ESPORTE',
    target: 'esporte',
    ariaLabel: 'Ir para etapa Esporte (Basquete Federado — 2018 a 2020)',
  },
  {
    number: '02',
    label: 'DADOS',
    target: 'dados',
    ariaLabel: 'Ir para etapa Dados (Curso de Estatística FBDF)',
  },
  {
    number: '03',
    label: 'DISCIPLINA',
    target: 'disciplina',
    ariaLabel: 'Ir para etapa Disciplina (Exército Brasileiro — 2022 até atualmente)',
  },
  {
    number: '04',
    label: 'TECNOLOGIA',
    target: 'tecnologia',
    ariaLabel: 'Ir para etapa Tecnologia & Inteligência Artificial',
  },
  {
    number: '05',
    label: 'CONSTRUÇÃO',
    target: 'construcao',
    ariaLabel: 'Ir para etapa Construção (App de Treinamento de Basquete com IA)',
  },
];

interface JourneyNavigationProps {
  activeTarget: string;
  onSelect: (target: string) => void;
  hoveredTarget: string | null;
  setHoveredTarget: (target: string | null) => void;
}

export const JourneyNavigation: React.FC<JourneyNavigationProps> = ({
  activeTarget,
  onSelect,
  hoveredTarget,
  setHoveredTarget,
}) => {
  const activeIndex = JOURNEY_NAV_ITEMS.findIndex(
    (item) => item.target === activeTarget
  );
  // Default to 03 DISCIPLINA (index 2) if not found
  const effectiveIndex = activeIndex >= 0 ? activeIndex : 2;

  // Each button row is 36px tall, with 12px gap between rows => step is 48px
  const STEP_HEIGHT = 48;
  const indicatorOffsetY = effectiveIndex * STEP_HEIGHT + 6;

  return (
    <div className="relative flex flex-col z-30 select-none" id="hero-journey-nav">
      
      {/* ─── DESKTOP VERTICAL NAVIGATION ─── */}
      <div className="hidden lg:flex items-center gap-6 relative">
        
        {/* Track Column for the Smoothly Moving Golden Radar Node */}
        <div className="relative w-7 h-[230px] flex items-start justify-center flex-shrink-0">
          
          {/* Subtle Vertical Connector Guide */}
          <div className="absolute top-3 bottom-3 w-[1px] bg-gradient-to-b from-[#E5AD08]/15 via-[#E5AD08]/40 to-[#E5AD08]/15" />

          {/* Smoothly Sliding Active Radar Target Node via pure GPU transform */}
          <div
            className="absolute top-0 left-0 w-7 h-7 flex items-center justify-center pointer-events-none transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              transform: `translate3d(0, ${indicatorOffsetY}px, 0)`,
            }}
          >
            {/* Outer Golden Target Ring */}
            <div
              className={`w-6 h-6 border border-[#E5AD08] rounded-full flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                hoveredTarget
                  ? 'scale-115 border-[#F5BD18] shadow-[0_0_10px_rgba(229,173,8,0.7),0_0_24px_rgba(229,173,8,0.25)]'
                  : 'shadow-[0_0_8px_rgba(229,173,8,0.6),0_0_20px_rgba(229,173,8,0.15)]'
              }`}
            >
              {/* Inner Solid Target Dot */}
              <div
                className={`w-2 h-2 bg-[#E5AD08] rounded-full transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  hoveredTarget ? 'scale-125 bg-[#F5BD18]' : ''
                }`}
              />
            </div>
          </div>
        </div>

        {/* Vertical List of Interactive Nav Buttons */}
        <nav
          className="flex flex-col space-y-3 font-mono text-xs uppercase tracking-[0.18em]"
          aria-label="Navegação da Jornada João Cainã"
        >
          {JOURNEY_NAV_ITEMS.map((item) => {
            const isActive = activeTarget === item.target;
            const isHovered = hoveredTarget === item.target;

            return (
              <button
                key={item.target}
                id={`hero-nav-btn-${item.target}`}
                onClick={() => onSelect(item.target)}
                onMouseEnter={() => setHoveredTarget(item.target)}
                onMouseLeave={() => setHoveredTarget(null)}
                aria-label={item.ariaLabel}
                aria-current={isActive ? 'true' : undefined}
                className={`h-[36px] flex items-center gap-3 text-left transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer select-none rounded-sm px-2.5 py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E5AD08] ${
                  isActive
                    ? 'opacity-100'
                    : 'opacity-65 hover:opacity-100 hover:translate-x-1'
                }`}
              >
                {/* Number */}
                <span
                  className={`font-bold transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isActive || isHovered
                      ? 'text-[#E5AD08]'
                      : 'text-[#E5AD08]/70'
                  }`}
                >
                  {item.number}
                </span>

                {/* Label */}
                <span
                  className={`font-semibold tracking-[0.18em] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isActive
                      ? 'text-[#F4F4F1] drop-shadow-[0_0_8px_rgba(244,244,241,0.25)]'
                      : isHovered
                      ? 'text-[#F4F4F1]'
                      : 'text-[#B0B5BB]'
                  }`}
                >
                  {item.label}
                </span>

                {/* Micro indicator dot when active */}
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E5AD08] animate-pulse ml-1" />
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* ─── MOBILE / TABLET COMPACT HORIZONTAL BAR ─── */}
      <div className="lg:hidden w-full pt-4">
        <div className="text-[10px] font-mono text-[#737C85] tracking-widest uppercase mb-2">
          JORNADA INTERATIVA // EXPLORAR
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {JOURNEY_NAV_ITEMS.map((item) => {
            const isActive = activeTarget === item.target;
            return (
              <button
                key={item.target}
                onClick={() => onSelect(item.target)}
                aria-label={item.ariaLabel}
                className={`flex-shrink-0 px-3 py-1.5 border text-[11px] font-mono tracking-wider flex items-center gap-1.5 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer ${
                  isActive
                    ? 'border-[#E5AD08] bg-[#0C1014] text-[#F4F4F1] shadow-[0_0_10px_rgba(229,173,8,0.2)]'
                    : 'border-[rgba(255,255,255,0.10)] bg-[#06090B] text-[#737C85] hover:text-[#F4F4F1] hover:border-[rgba(255,255,255,0.25)]'
                }`}
              >
                <span className="text-[#E5AD08] font-bold">{item.number}</span>
                <span className="font-semibold">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
};
