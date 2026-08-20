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
      className="relative min-h-screen flex flex-col justify-between pt-8 sm:pt-12 md:pt-16 pb-8 sm:pb-10 overflow-hidden bg-[#0D0F12] border-b border-[rgba(255,255,255,0.08)]"
    >
      {/* Background Grid & Radar Overlay */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      {/* Hero Background Composite Imagery with calm atmospheric entry */}
      <motion.div
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 0.24, scale: 1 }}
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
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0F12] via-[#0D0F12]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F12] via-transparent to-[#0D0F12]/60" />
      </motion.div>

      {/* Main Hero Container */}
      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 w-full my-auto py-8 sm:py-12 z-10">
        
        {/* Horizontal Golden Axis Line Connecting to Right Navigation */}
        <div
          className={`hidden lg:block absolute left-0 right-24 top-[50%] h-[1px] bg-gradient-to-r from-transparent via-[#D4A017]/40 to-[#D4A017] pointer-events-none z-20 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            hoveredTarget
              ? 'opacity-100 shadow-[0_0_8px_rgba(212,160,23,0.5)] via-[#D4A017]/80'
              : 'opacity-50'
          }`}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Hero Typography & Identity (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col justify-center relative z-20">
            
            {/* Top Label */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05, ease: EASE_SMOOTH }}
              className="flex items-center gap-2.5 mb-3 sm:mb-4"
            >
              <span className="text-[10.5px] sm:text-[11px] font-mono text-[#7C8793] tracking-[0.25em] uppercase font-semibold">
                PORTFÓLIO PESSOAL
              </span>
              <div className="w-6 h-[1px] bg-[#D4A017]/50" />
            </motion.div>

            {/* Hierarchical Title Composition: JOÃO (First) + CAINÃ (~1.45x Impact) */}
            <div className="select-none mb-6">
              {/* 1. JOÃO - Upper, solid, crisp */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.12, ease: EASE_SMOOTH }}
              >
                <span className="block font-condensed text-[52px] sm:text-[76px] md:text-[96px] lg:text-[108px] xl:text-[118px] leading-[0.88] tracking-tight uppercase font-bold text-[#F5F7FA]">
                  JOÃO
                </span>
              </motion.div>

              {/* 2. CAINÃ - Protagonist signature, heavier scale (~1.45x visual presence) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.22, ease: EASE_SMOOTH }}
                className="relative"
              >
                <span className="block font-condensed text-[78px] sm:text-[112px] md:text-[144px] lg:text-[164px] xl:text-[182px] leading-[0.82] tracking-tighter uppercase font-extrabold text-[#F5F7FA]">
                  CAINÃ
                </span>
              </motion.div>
            </div>

            {/* Sub-headline Tags */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32, ease: EASE_SMOOTH }}
              className="space-y-1 mb-4"
            >
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#7C8793]">
                <span className="text-[#D4A017] font-semibold">MILITAR DO EXÉRCITO BRASILEIRO</span>
                <span>•</span>
                <span>TECNOLOGIA • IA</span>
                <span>•</span>
                <span>ESPORTE • DADOS</span>
              </div>
            </motion.div>

            {/* Signature Identity Phrase Card */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: EASE_SMOOTH }}
              className="mb-7 p-3.5 sm:p-4 bg-[#121519]/70 border-l-2 border-[#D4A017] border-y border-r border-[rgba(255,255,255,0.06)] max-w-lg"
            >
              <p className="font-condensed text-lg sm:text-xl font-bold tracking-tight text-[#F5F7FA] uppercase">
                "Disciplina para evoluir. Curiosidade para construir."
              </p>
            </motion.div>

            {/* Action CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.48, ease: EASE_SMOOTH }}
              className="flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <button
                onClick={onExploreClick}
                id="hero-btn-conhecer"
                className="interactive-btn group bg-[#D4A017] text-[#0D0F12] px-6 sm:px-7 py-3 sm:py-3.5 font-mono text-xs font-bold uppercase tracking-[0.14em] flex items-center gap-2 hover:bg-[#E5AD08] cursor-pointer shadow-[0_0_15px_rgba(212,160,23,0.25)] transition-all duration-300"
              >
                <span>EXPLORAR TRAJETÓRIA</span>
                <span className="interactive-arrow text-sm font-sans">↗</span>
              </button>

              <button
                onClick={onContactClick}
                id="hero-btn-falar"
                className="interactive-btn group border border-[#D4A017]/80 text-[#D4A017] px-5 sm:px-6 py-3 sm:py-3.5 font-mono text-xs font-bold uppercase tracking-[0.14em] flex items-center gap-2 hover:bg-[#D4A017] hover:text-[#0D0F12] cursor-pointer transition-all duration-300"
              >
                <span>FALAR COM JOÃO</span>
                <span className="interactive-arrow text-sm font-sans">↗</span>
              </button>
            </motion.div>

          </div>

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
          className="flex items-center gap-2 text-[10px] font-mono text-[#7C8793] hover:text-[#D4A017] transition-colors duration-300 uppercase tracking-[0.2em] cursor-pointer"
        >
          <span>SCROLL</span>
          <div className="flex items-center gap-1">
            <div className="w-4 h-[1px] bg-[#D4A017]" />
            <div className="w-1.5 h-1.5 bg-[#D4A017] rounded-full" />
          </div>
        </button>

        <div className="hidden sm:flex items-center gap-4 text-[9px] font-mono text-[#7C8793] tracking-widest uppercase">
          <span>BSB // 15°47'38"S 47°52'01"W</span>
          <span>•</span>
          <span>SISTEMA: ATIVO</span>
        </div>
      </div>
    </section>
  );
};
