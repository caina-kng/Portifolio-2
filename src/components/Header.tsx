import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'inicio', number: '01', label: 'INÍCIO' },
    { id: 'trajetoria', number: '02', label: 'TRAJETÓRIA' },
    { id: 'projetos', number: '03', label: 'PROJETOS' },
    { id: 'habilidades', number: '04', label: 'HABILIDADES' },
    { id: 'sobre', number: '05', label: 'SOBRE' },
    { id: 'contato', number: '06', label: 'CONTATO' },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 75;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isScrolled
          ? 'bg-[#06090B]/95 backdrop-blur-md border-b border-[rgba(255,255,255,0.10)] py-3 shadow-2xl'
          : 'bg-[#06090B]/85 backdrop-blur-sm border-b border-[rgba(255,255,255,0.10)] py-4'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Left: Brand Identity with JC Monogram Box */}
        <button
          onClick={() => scrollTo('inicio')}
          className="flex items-center gap-3.5 group text-left focus:outline-none cursor-pointer"
          id="brand-logo-btn"
        >
          <div className="border border-[#E5AD08]/80 group-hover:border-[#E5AD08] px-2.5 py-1 transition-colors duration-300 bg-[#0C1014]/60">
            <span className="font-condensed text-xl sm:text-2xl font-bold tracking-tight text-[#E5AD08]">
              JC
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-[0.18em] uppercase text-[#F4F4F1] group-hover:text-white transition-colors duration-300 font-body">
              JOÃO CAINÃ
            </span>
            <span className="text-[10px] text-[#737C85] font-mono tracking-[0.2em] uppercase">
              PORTFÓLIO PESSOAL
            </span>
          </div>
        </button>

        {/* Center: Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center gap-6 xl:gap-9 text-[11px] font-mono uppercase tracking-[0.16em]"
          id="desktop-nav"
        >
          {navItems.map((item) => {
            const isActive =
              activeSection === item.id ||
              (activeSection === 'visao' && item.id === 'trajetoria');
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => scrollTo(item.id)}
                className={`py-1 flex items-center gap-1.5 cursor-pointer relative group transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isActive
                    ? 'text-[#F4F4F1] font-semibold'
                    : 'text-[#B0B5BB] hover:text-[#F4F4F1]'
                }`}
              >
                <span
                  className={`${
                    isActive
                      ? 'text-[#E5AD08]'
                      : 'text-[#737C85] group-hover:text-[#E5AD08]'
                  } transition-colors duration-300`}
                >
                  {item.number}
                </span>
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute bottom-[-17px] left-0 right-0 h-[2px] bg-[#E5AD08] shadow-[0_0_8px_#E5AD08] transition-all duration-300" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right: Technical Coordinates & CTA Button */}
        <div className="hidden sm:flex items-center gap-6">
          <div className="flex flex-col items-end text-right">
            <span className="text-[10px] font-mono text-[#B0B5BB] uppercase tracking-wider">
              BRASÍLIA, DF
            </span>
            <span className="text-[9px] font-mono text-[#737C85] tracking-tight">
              15° 47′ 38″ S 47° 52′ 01″ W
            </span>
          </div>

          <button
            onClick={() => scrollTo('contato')}
            id="header-cta-btn"
            className="interactive-btn group border border-[#E5AD08] px-4 py-2 text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-[#E5AD08] hover:bg-[#E5AD08] hover:text-[#06090B] cursor-pointer shadow-[0_0_12px_rgba(229,173,8,0.15)] flex items-center gap-1.5"
          >
            <span>FALAR COM JOÃO</span>
            <span className="interactive-arrow text-xs">↗</span>
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={() => scrollTo('contato')}
            className="sm:hidden border border-[#E5AD08] text-[#E5AD08] px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-widest"
          >
            FALAR ↗
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 bg-[#10151A] border border-[rgba(255,255,255,0.10)] text-[#F4F4F1] hover:text-[#E5AD08] transition-colors duration-300 cursor-pointer"
            aria-label="Abrir menu"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="lg:hidden fixed inset-x-0 top-[62px] bg-[#06090B]/98 backdrop-blur-xl border-b border-[rgba(255,255,255,0.10)] px-6 py-6 shadow-2xl transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] z-50"
        >
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[rgba(255,255,255,0.10)]">
              <span className="font-mono text-[10px] text-[#737C85] tracking-[0.2em] uppercase">
                NAVEGAÇÃO // JC
              </span>
              <span className="font-mono text-[10px] text-[#E5AD08]">
                BRASÍLIA — DF
              </span>
            </div>

            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`flex items-center justify-between w-full py-2.5 px-2 text-left transition-colors duration-300 ${
                    isActive
                      ? 'text-[#E5AD08] border-l-2 border-[#E5AD08] pl-3 bg-[#0C1014]'
                      : 'text-[#F4F4F1] hover:text-[#E5AD08]'
                  }`}
                >
                  <span className="font-condensed text-xl tracking-wider uppercase font-bold">
                    {item.label}
                  </span>
                  <span className="font-mono text-xs text-[#E5AD08]">
                    {item.number}
                  </span>
                </button>
              );
            })}

            <div className="pt-4 border-t border-[rgba(255,255,255,0.10)]">
              <button
                onClick={() => scrollTo('contato')}
                className="w-full py-3 bg-[#E5AD08] text-[#06090B] font-bold text-xs uppercase tracking-widest font-mono cursor-pointer transition-transform active:scale-98"
              >
                FALAR COM JOÃO ↗
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
