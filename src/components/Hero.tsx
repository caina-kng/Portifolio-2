import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import heroBgImage from '../assets/images/hero_bg_composite_1787162425801.jpg';
import { JourneyNavigation } from './JourneyNavigation';
import { EASE_SMOOTH } from '../lib/motion';
import { smoothScrollToElement } from '../lib/smoothScroll';

interface HeroProps {
  onExploreClick: () => void;
  onProjectsClick: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onContactClick }) => {
  const [activeTarget, setActiveTarget] = useState<string>('disciplina');
  const [hoveredTarget, setHoveredTarget] = useState<string>('');

  // Scroll spy via IntersectionObserver with non-blocking checks
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
    smoothScrollToElement(target, {
      alignment: 'center',
      offset: 40,
    });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-between pt-8 sm:pt-12 md:pt-16 pb-8 sm:pb-10 overflow-hidden bg-[#06090B] border-b border-[rgba(255,255,255,0.10)]"
    >
      {/* Background Grid & Radar Overlay */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      {/* Hero Background Composite Imagery with calm entry */}
      <motion.div
        initial={{ opacity: 0, scale: 1.03 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1.2, ease: EASE_SMOOTH }}
        className="absolute inset-0 pointer-events-none overflow-hidden select-none"
      >
        <img
          src={heroBgImage}
          alt="Composição João Cainã"
          className="w-full h-full object-cover object-center mix-blend-screen"
          referrerPolicy="no-referrer"
        />
        {/* Subtle Dark Vignette & Gradients to guarantee 100% text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#06090B] via-[#06090B]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06090B] via-transparent to-[#06090B]/60" />
      </motion.div>

      {/* Main Hero Container */}
      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 w-full my-auto py-8 sm:py-12 z-10">
        
        {/* Horizontal Golden Axis Line Connecting to Right Navigation */}
        <div
          className={`hidden lg:block absolute left-0 right-20 top-[50%] h-[1px] bg-gradient-to-r from-transparent via-[#E5AD08]/60 to-[#E5AD08] pointer-events-none z-20 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            hoveredTarget
              ? 'opacity-100 shadow-[0_0_8px_rgba(229,173,8,0.6),0_0_20px_rgba(229,173,8,0.15)] via-[#E5AD08]/90'
              : 'opacity-70'
          }`}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Hero Typography & Identity (7 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: EASE_SMOOTH }}
            className="lg:col-span-7 flex flex-col justify-center relative z-20"
          >
            
            {/* Top Label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE_SMOOTH }}
              className="mb-4"
            >
              <span className="text-[11px] font-mono text-[#737C85] tracking-[0.25em] uppercase">
                PORTFÓLIO PESSOAL
              </span>
            </motion.div>

            {/* Massive Bold Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: EASE_SMOOTH }}
              className="font-condensed text-[84px] sm:text-[120px] md:text-[145px] lg:text-[160px] leading-[0.82] tracking-tighter uppercase font-bold text-[#F4F4F1] select-none mb-6"
            >
              JOÃO<br />
              CAINÃ
            </motion.h1>

            {/* Sub-headline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.25, ease: EASE_SMOOTH }}
              className="space-y-1 mb-5"
            >
              <p className="font-condensed text-2xl sm:text-3xl font-bold tracking-tight text-[#F4F4F1] uppercase">
                EXPERIÊNCIAS DIFERENTES.
              </p>
              <p className="font-condensed text-2xl sm:text-3xl font-bold tracking-tight text-[#E5AD08] uppercase">
                UMA MESMA FORMA DE PENSAR.
              </p>
            </motion.div>

            {/* Narrative Description */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: EASE_SMOOTH }}
              className="text-[#B0B5BB] text-sm sm:text-base leading-relaxed max-w-lg mb-8 font-body"
            >
              Militar, ex-jogador federado e entusiasta de tecnologia explorando Inteligência Artificial, dados e esporte para transformar ideias em projetos.
            </motion.p>

            {/* Action CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: EASE_SMOOTH }}
              className="flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <button
                onClick={onExploreClick}
                id="hero-btn-conhecer"
                className="interactive-btn group bg-[#E5AD08] text-[#06090B] px-6 sm:px-7 py-3 sm:py-3.5 font-mono text-xs font-bold uppercase tracking-[0.14em] flex items-center gap-2 hover:bg-[#F5BD18] cursor-pointer shadow-[0_0_15px_rgba(229,173,8,0.25)] transition-all duration-300"
              >
                <span>EXPLORAR TRAJETÓRIA</span>
                <span className="interactive-arrow text-sm font-sans">↗</span>
              </button>

              <button
                onClick={onContactClick}
                id="hero-btn-falar"
                className="interactive-btn group border border-[#E5AD08]/80 text-[#E5AD08] px-5 sm:px-6 py-3 sm:py-3.5 font-mono text-xs font-bold uppercase tracking-[0.14em] flex items-center gap-2 hover:bg-[#E5AD08] hover:text-[#06090B] cursor-pointer transition-all duration-300"
              >
                <span>FALAR COM JOÃO</span>
                <span className="interactive-arrow text-sm font-sans">↗</span>
              </button>
            </motion.div>

          </motion.div>

          {/* Right Column: Visual Stage & Interactive Journey Navigation (5 Columns) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.25, ease: EASE_SMOOTH }}
            className="lg:col-span-5 flex items-center justify-end relative z-20"
          >
            <JourneyNavigation
              activeTarget={activeTarget}
              onSelect={handleSelectJourneyTarget}
              hoveredTarget={hoveredTarget || null}
              setHoveredTarget={(t) => setHoveredTarget(t || '')}
            />
          </motion.div>

        </div>
      </div>

      {/* Bottom Technical Bar & Scroll Indicator */}
      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 w-full flex items-center justify-between z-10">
        <button
          onClick={onExploreClick}
          className="flex items-center gap-2 text-[10px] font-mono text-[#737C85] hover:text-[#E5AD08] transition-colors duration-300 uppercase tracking-[0.2em] cursor-pointer"
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
