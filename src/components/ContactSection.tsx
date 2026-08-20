import React from 'react';
import { motion } from 'motion/react';
import {
  Github,
  Linkedin,
  Instagram,
  MapPin,
  Crosshair,
  Radio,
} from 'lucide-react';
import { EASE_SMOOTH } from '../lib/motion';

export const ContactSection: React.FC = () => {
  const contactChannels = [
    {
      number: '01',
      title: 'GITHUB',
      subtitle: 'Projetos e código',
      handle: 'github.com/caina-kngg',
      url: 'https://github.com/caina-kngg',
      icon: Github,
    },
    {
      number: '02',
      title: 'LINKEDIN',
      subtitle: 'Perfil profissional',
      handle: 'João Cainã',
      url: 'https://www.linkedin.com/in/jo%C3%A3o-cain%C3%A3-',
      icon: Linkedin,
    },
    {
      number: '03',
      title: 'INSTAGRAM',
      subtitle: 'Conteúdo e contato social',
      handle: '@og_castrin',
      url: 'https://instagram.com/og_castrin',
      icon: Instagram,
    },
    {
      number: '04',
      title: 'LOCALIZAÇÃO',
      subtitle: 'Base atual',
      handle: 'Brasília — DF, Brasil',
      url: null,
      icon: MapPin,
    },
  ];

  return (
    <section
      id="contato"
      className="py-24 sm:py-32 bg-[#0D0F12] relative overflow-hidden border-b border-[rgba(255,255,255,0.08)]"
    >
      {/* Background Subtle Radar Concentric Rings & Tech Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />
      
      {/* Concentric Radar Graphics centered behind the section with gentle fade */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[840px] h-[840px] pointer-events-none opacity-20 select-none">
        <div className="absolute inset-0 rounded-full border border-[#D4A017]/40" />
        <div className="absolute inset-20 rounded-full border border-[#D4A017]/30 border-dashed" />
        <div className="absolute inset-40 rounded-full border border-[#D4A017]/20" />
        <div className="absolute inset-60 rounded-full border border-[#D4A017]/15" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#D4A017] rounded-full shadow-[0_0_15px_#D4A017]" />
      </div>

      {/* Main Wide Container */}
      <div className="max-w-[1640px] mx-auto px-5 sm:px-10 lg:px-16 relative z-10 w-full">
        
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.75, ease: EASE_SMOOTH }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="font-mono text-xs sm:text-sm text-[#D4A017] tracking-[0.25em] uppercase font-bold">
            07 — CONTATO
          </span>
          <div className="w-24 sm:w-36 h-[1px] bg-gradient-to-r from-[#D4A017]/70 via-[#D4A017]/40 to-transparent relative">
            <span className="absolute right-0 -top-[3px] text-[#D4A017]/60 text-[8px] font-sans">
              &gt;
            </span>
          </div>
        </motion.div>

        {/* 2-Column Editorial & Channels Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-20">
          
          {/* ─── LEFT COLUMN: EDITORIAL STATEMENT & NARRATIVE (approx. 50% = 6 cols) ─── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.75, ease: EASE_SMOOTH }}
            className="lg:col-span-6 flex flex-col justify-between space-y-8"
          >
            <div>
              {/* Massive Editorial Headline */}
              <h2 className="font-condensed text-[64px] sm:text-[84px] md:text-[96px] lg:text-[108px] leading-[0.88] tracking-tighter uppercase font-bold text-[#F5F7FA] select-none mb-6">
                VAMOS<br />
                <span className="text-[#D4A017]">CONVERSAR?</span>
              </h2>

              {/* Narrative Subtitle */}
              <p className="text-[17px] sm:text-[19px] lg:text-[20px] text-[#B0B5BB] font-body leading-[1.65] max-w-xl mb-4">
                Se quiser trocar uma ideia sobre basquete, tecnologia, Inteligência Artificial, projetos ou oportunidades, entre em contato.{' '}
                <strong className="text-[#D4A017] font-bold block sm:inline mt-1 sm:mt-0">
                  Vai ser um prazer conversar.
                </strong>
              </p>
            </div>

            {/* Visual Technical Panel (Brasília Telemetry + Radar Crosshair) */}
            <div className="pt-6 border-t border-[rgba(255,255,255,0.08)] space-y-5">
              <div className="flex flex-wrap items-center gap-4">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-[#121519] border border-[#D4A017]/50 text-[#D4A017] font-mono text-xs uppercase tracking-[0.18em] shadow-[0_0_15px_rgba(212,160,23,0.12)]">
                  <Radio className="w-3.5 h-3.5 animate-pulse text-[#D4A017]" />
                  <span>ENCONTRE-ME NAS REDES ↗</span>
                </div>

                <div className="font-mono text-[11px] text-[#7C8793] tracking-widest uppercase">
                  CONEXÕES DIRETAS // RESPOSTA RÁPIDA
                </div>
              </div>

              {/* Technical Location Coords Box */}
              <div className="p-4 bg-[#121519] border border-[rgba(255,255,255,0.08)] flex items-center justify-between font-mono text-[11px] text-[#7C8793] tracking-wider">
                <div className="flex items-center gap-2">
                  <Crosshair className="w-4 h-4 text-[#D4A017]" />
                  <span>BSB // 15° 47′ 38″ S  47° 52′ 01″ W</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A017] animate-pulse" />
                  <span className="text-[#B0B5BB] font-semibold">ATIVO</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ─── RIGHT COLUMN: 4 EXPANDED CONTACT CARDS (approx. 50% = 6 cols) ─── */}
          <div className="lg:col-span-6 space-y-4">
            {contactChannels.map((channel, idx) => {
              const IconComponent = channel.icon;
              const isClickable = !!channel.url;

              return (
                <motion.div
                  key={channel.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.65,
                    delay: idx * 0.07,
                    ease: EASE_SMOOTH,
                  }}
                >
                  {isClickable ? (
                    <a
                      href={channel.url!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="interactive-card bg-[#121519] border border-[rgba(255,255,255,0.08)] hover:border-[#D4A017] hover:bg-[#161A20] p-5 sm:p-6 flex items-center justify-between group cursor-pointer shadow-lg hover:shadow-[0_0_20px_rgba(212,160,23,0.12)]"
                    >
                      <div className="flex items-center gap-4 sm:gap-5">
                        {/* Index Number & Icon */}
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-none bg-[#161A20] border border-[rgba(255,255,255,0.08)] group-hover:border-[#D4A017] flex items-center justify-center text-[#D4A017] transition-colors duration-300 flex-shrink-0">
                          <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105" />
                        </div>

                        {/* Channel Text Info */}
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-bold text-[#D4A017] tracking-widest">
                              {channel.number}
                            </span>
                            <span className="text-[10px] font-mono text-[#7C8793] uppercase tracking-wider">
                              // {channel.subtitle}
                            </span>
                          </div>
                          <h3 className="font-condensed text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F5F7FA] group-hover:text-white transition-colors duration-300">
                            {channel.title}
                          </h3>
                          <p className="font-mono text-xs sm:text-sm text-[#7C8793] group-hover:text-[#B0B5BB] transition-colors duration-300">
                            {channel.handle}
                          </p>
                        </div>
                      </div>

                      {/* External Link Arrow Indicator */}
                      <div className="w-10 h-10 border border-[rgba(255,255,255,0.08)] group-hover:border-[#D4A017] bg-[#161A20] flex items-center justify-center text-[#7C8793] group-hover:text-[#D4A017] transition-all duration-300 flex-shrink-0">
                        <span className="interactive-arrow text-base font-sans">↗</span>
                      </div>
                    </a>
                  ) : (
                    <div className="bg-[#121519] border border-[rgba(255,255,255,0.08)] p-5 sm:p-6 flex items-center justify-between select-none">
                      <div className="flex items-center gap-4 sm:gap-5">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-none bg-[#161A20] border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[#D4A017] flex-shrink-0">
                          <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>

                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-bold text-[#D4A017] tracking-widest">
                              {channel.number}
                            </span>
                            <span className="text-[10px] font-mono text-[#7C8793] uppercase tracking-wider">
                              // {channel.subtitle}
                            </span>
                          </div>
                          <h3 className="font-condensed text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F5F7FA]">
                            {channel.title}
                          </h3>
                          <p className="font-mono text-xs sm:text-sm text-[#7C8793]">
                            {channel.handle}
                          </p>
                        </div>
                      </div>

                      <div className="px-2.5 py-1 border border-[rgba(255,255,255,0.08)] bg-[#161A20] font-mono text-[9px] text-[#7C8793] uppercase tracking-widest">
                        FIXO
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* ─── SECTION BOTTOM TECHNICAL BAR ─── */}
        <div className="pt-8 border-t border-[rgba(255,255,255,0.08)] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#7C8793] tracking-[0.2em] uppercase">
          <div className="flex items-center gap-2">
            <Crosshair className="w-4 h-4 text-[#D4A017]" />
            <span>
              <strong className="text-[#D4A017]">07</strong> / 07
            </span>
          </div>

          <div className="text-center text-[#B0B5BB]">
            DISCIPLINA PARA EVOLUIR. CURIOSIDADE PARA CONSTRUIR.
          </div>

          <div>© 2026 • TODOS OS DIREITOS RESERVADOS</div>
        </div>

      </div>
    </section>
  );
};
