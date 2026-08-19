import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import heroBgImage from '../assets/images/hero_bg_composite_1787162425801.jpg';
import { JourneyNavigation } from './JourneyNavigation';

interface HeroProps {
  onExploreClick: () => void;
  onProjectsClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  const [activeTarget, setActiveTarget] = useState<string>('disciplina');
  const [hoveredTarget, setHoveredTarget] = useState<string>('');

  // Scroll spy via IntersectionObserver
  useEffect(() => {
    const targetIds = ['esporte', 'dados', 'disciplina', 'tecnologia', 'construcao'];
    const elements = targetIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const heroElement = document.getElementById('inicio');

    const observer = new IntersectionObserver(
      (entries) => {
        // Check if hero is prominently in view
        if (heroElement) {
          const heroEntry = entries.find((e) => e.target.id === 'inicio');
          if (heroEntry && heroEntry.isIntersecting && heroEntry.intersectionRatio > 0.4) {
            // When back in Hero and none of the specific items are intersecting, default to 03 DISCIPLINA
            const isAnyOtherIntersecting = entries.some(
              (e) => e.target.id !== 'inicio' && e.isIntersecting
            );
            if (!isAnyOtherIntersecting) {
              setActiveTarget('disciplina');
              return;
            }
          }
        }

        // Find the most visible target
        const visibleEntries = entries.filter(
          (entry) => entry.isIntersecting && entry.target.id !== 'inicio'
        );

        if (visibleEntries.length > 0) {
          // Sort by intersection ratio to pick the most prominent
          visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          setActiveTarget(visibleEntries[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: '-20% 0px -25% 0px',
        threshold: [0.1, 0.3, 0.6],
      }
    );

    elements.forEach((el) => observer.observe(el));
    if (heroElement) observer.observe(heroElement);

    return () => observer.disconnect();
  }, []);

  const handleSelectJourneyTarget = (target: string) => {
    setActiveTarget(target);
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-between pt-24 pb-10 overflow-hidden bg-[#06090B] border-b border-[rgba(255,255,255,0.10)]"
    >
      {/* Background Grid & Radar Overlay */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      {/* Hero Background Composite Imagery */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <img
          src={heroBgImage}
          alt="Composição João Cainã"
          className="w-full h-full object-cover object-center opacity-40 mix-blend-screen scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Subtle Dark Vignette & Gradients to guarantee 100% text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#06090B] via-[#06090B]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06090B] via-transparent to-[#06090B]/60" />
      </div>

      {/* Main Hero Container */}
      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 w-full my-auto py-8 sm:py-12 z-10">
        
        {/* Horizontal Golden Axis Line Connecting to Right Navigation */}
        <div
          className={`hidden lg:block absolute left-0 right-20 top-[50%] h-[1px] bg-gradient-to-r from-transparent via-[#E5AD08]/60 to-[#E5AD08] pointer-events-none z-20 transition-all duration-300 ${
            hoveredTarget
              ? 'opacity-100 shadow-[0_0_8px_rgba(229,173,8,0.6),0_0_20px_rgba(229,173,8,0.15)] via-[#E5AD08]/90'
              : 'opacity-70'
          }`}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Hero Typography & Identity (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col justify-center relative z-20">
            
            {/* Top Label */}
            <div className="mb-4">
              <span className="text-[11px] font-mono text-[#737C85] tracking-[0.25em] uppercase">
                PORTFÓLIO PESSOAL
              </span>
            </div>

            {/* Massive Bold Title */}
            <h1 className="font-condensed text-[84px] sm:text-[120px] md:text-[145px] lg:text-[160px] leading-[0.82] tracking-tighter uppercase font-bold text-[#F4F4F1] select-none mb-6">
              JOÃO<br />
              CAINÃ
            </h1>

            {/* Sub-headline */}
            <div className="space-y-1 mb-5">
              <p className="font-condensed text-2xl sm:text-3xl font-bold tracking-tight text-[#F4F4F1] uppercase">
                EXPERIÊNCIAS DIFERENTES.
              </p>
              <p className="font-condensed text-2xl sm:text-3xl font-bold tracking-tight text-[#E5AD08] uppercase">
                UMA MESMA FORMA DE PENSAR.
              </p>
            </div>

            {/* Narrative Description */}
            <p className="text-[#B0B5BB] text-sm sm:text-base leading-relaxed max-w-lg mb-8 font-body">
              Militar, ex-jogador federado e entusiasta de tecnologia explorando Inteligência Artificial, dados e esporte para transformar ideias em projetos.
            </p>

            {/* Action CTA Button */}
            <div>
              <button
                onClick={onExploreClick}
                id="hero-btn-conhecer"
                className="border border-[#E5AD08] text-[#E5AD08] px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.16em] flex items-center gap-2 hover:bg-[#E5AD08] hover:text-[#06090B] transition-all duration-200 cursor-pointer shadow-[0_0_15px_rgba(229,173,8,0.2)] active:scale-95"
              >
                <span>CONHECER MINHA JORNADA</span>
                <span className="text-sm font-sans">↗</span>
              </button>
            </div>

          </div>

          {/* Right Column: Visual Stage & Interactive Journey Navigation (5 Columns) */}
          <div className="lg:col-span-5 flex items-center justify-end relative z-20">
            
            <JourneyNavigation
              activeTarget={activeTarget}
              onSelect={handleSelectJourneyTarget}
              hoveredTarget={hoveredTarget || null}
              setHoveredTarget={(t) => setHoveredTarget(t || '')}
            />

          </div>

        </div>
      </div>

      {/* Bottom Technical Bar & Scroll Indicator */}
      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 w-full flex items-center justify-between z-10">
        <button
          onClick={onExploreClick}
          className="flex items-center gap-2 text-[10px] font-mono text-[#737C85] hover:text-[#E5AD08] transition-colors uppercase tracking-[0.2em] cursor-pointer"
        >
          <span>SCROLL</span>
          <div className="flex items-center gap-1">
            <div className="w-4 h-[1px] bg-[#E5AD08]" />
            <div className="w-1.5 h-1.5 bg-[#E5AD08] rounded-full" />
          </div>
        </button>

        <div className="hidden sm:flex items-center gap-4 text-[9px] font-mono text-[#737C85] tracking-widest uppercase">
          <span>BSB // 15°47'38"S 47°52'01"W</span>
          <span>•</span>
          <span>SISTEMA: ATIVO</span>
        </div>
      </div>
    </section>
  );
};
