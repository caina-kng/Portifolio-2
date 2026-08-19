import React from 'react';
import {
  Github,
  Linkedin,
  Instagram,
  MapPin,
  ArrowUpRight,
  Crosshair,
  Radio,
} from 'lucide-react';

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
      className="py-24 sm:py-32 bg-[#06090B] relative overflow-hidden border-b border-[rgba(255,255,255,0.08)]"
    >
      {/* Background Subtle Radar Concentric Rings & Tech Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />
      
      {/* Concentric Radar Graphics centered behind the section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[840px] h-[840px] pointer-events-none opacity-20 select-none">
        <div className="absolute inset-0 rounded-full border border-[#E5AD08]/40" />
        <div className="absolute inset-20 rounded-full border border-[#E5AD08]/30 border-dashed" />
        <div className="absolute inset-40 rounded-full border border-[#E5AD08]/20" />
        <div className="absolute inset-60 rounded-full border border-[#E5AD08]/15" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#E5AD08] rounded-full shadow-[0_0_15px_#E5AD08]" />
      </div>

      {/* Main Wide Container */}
      <div className="max-w-[1640px] mx-auto px-5 sm:px-10 lg:px-16 relative z-10 w-full">
        
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs sm:text-sm text-[#E5AD08] tracking-[0.25em] uppercase font-bold">
            07 — CONTATO
          </span>
          <div className="w-24 sm:w-36 h-[1px] bg-gradient-to-r from-[#E5AD08]/70 via-[#E5AD08]/40 to-transparent relative">
            <span className="absolute right-0 -top-[3px] text-[#E5AD08]/60 text-[8px] font-sans">
              &gt;
            </span>
          </div>
        </div>

        {/* 2-Column Editorial & Channels Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-20">
          
          {/* ─── LEFT COLUMN: EDITORIAL STATEMENT & NARRATIVE (approx. 50% = 6 cols) ─── */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            <div>
              {/* Massive Editorial Headline */}
              <h2 className="font-condensed text-[64px] sm:text-[84px] md:text-[96px] lg:text-[108px] leading-[0.88] tracking-tighter uppercase font-bold text-[#F4F4F1] select-none mb-6">
                VAMOS<br />
                <span className="text-[#E5AD08]">CONVERSAR?</span>
              </h2>

              {/* Narrative Subtitle */}
              <p className="text-[17px] sm:text-[19px] lg:text-[20px] text-[#B0B5BB] font-body leading-[1.65] max-w-xl mb-4">
                Se quiser trocar uma ideia sobre basquete, tecnologia, Inteligência Artificial, projetos ou oportunidades, entre em contato.{' '}
                <strong className="text-[#E5AD08] font-bold block sm:inline mt-1 sm:mt-0">
                  Vai ser um prazer conversar.
                </strong>
              </p>
            </div>

            {/* Visual Technical Panel (Brasília Telemetry + Radar Crosshair) */}
            <div className="pt-6 border-t border-[rgba(255,255,255,0.10)] space-y-5">
              <div className="flex flex-wrap items-center gap-4">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-[#0C1014] border border-[#E5AD08]/50 text-[#E5AD08] font-mono text-xs uppercase tracking-[0.18em] shadow-[0_0_15px_rgba(229,173,8,0.12)]">
                  <Radio className="w-3.5 h-3.5 animate-pulse text-[#E5AD08]" />
                  <span>ENCONTRE-ME NAS REDES ↗</span>
                </div>

                <div className="font-mono text-[11px] text-[#737C85] tracking-widest uppercase">
                  CONEXÕES DIRETAS // RESPOSTA RÁPIDA
                </div>
              </div>

              {/* Technical Location Coords Box */}
              <div className="p-4 bg-[#080B0E] border border-[rgba(255,255,255,0.08)] flex items-center justify-between font-mono text-[11px] text-[#737C85] tracking-wider">
                <div className="flex items-center gap-2">
                  <Crosshair className="w-4 h-4 text-[#E5AD08]" />
                  <span>BSB // 15° 47′ 38″ S  47° 52′ 01″ W</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E5AD08] animate-pulse" />
                  <span className="text-[#B0B5BB] font-semibold">ATIVO</span>
                </div>
              </div>
            </div>
          </div>

          {/* ─── RIGHT COLUMN: 4 EXPANDED CONTACT CARDS (approx. 50% = 6 cols) ─── */}
          <div className="lg:col-span-6 space-y-4">
            {contactChannels.map((channel) => {
              const IconComponent = channel.icon;
              const isClickable = !!channel.url;
              const Component = isClickable ? 'a' : 'div';
              const componentProps = isClickable
                ? {
                    href: channel.url!,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    className:
                      'bg-[#080B0E] border border-[rgba(255,255,255,0.10)] hover:border-[#E5AD08] hover:bg-[#0C1014] p-5 sm:p-6 flex items-center justify-between transition-all duration-300 group cursor-pointer shadow-lg hover:shadow-[0_0_20px_rgba(229,173,8,0.12)]',
                  }
                : {
                    className:
                      'bg-[#080B0E] border border-[rgba(255,255,255,0.10)] p-5 sm:p-6 flex items-center justify-between select-none',
                  };

              return (
                <Component key={channel.title} {...(componentProps as any)}>
                  <div className="flex items-center gap-4 sm:gap-5">
                    {/* Index Number & Icon */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-none bg-[#10151A] border border-[rgba(255,255,255,0.10)] group-hover:border-[#E5AD08] flex items-center justify-center text-[#E5AD08] transition-colors flex-shrink-0">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    {/* Channel Text Info */}
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-[#E5AD08] tracking-widest">
                          {channel.number}
                        </span>
                        <span className="text-[10px] font-mono text-[#737C85] uppercase tracking-wider">
                          // {channel.subtitle}
                        </span>
                      </div>
                      <h3 className="font-condensed text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F4F4F1] group-hover:text-white transition-colors">
                        {channel.title}
                      </h3>
                      <p className="font-mono text-xs sm:text-sm text-[#737C85] group-hover:text-[#B0B5BB] transition-colors">
                        {channel.handle}
                      </p>
                    </div>
                  </div>

                  {/* External Link Arrow Indicator */}
                  {isClickable ? (
                    <div className="w-10 h-10 border border-[rgba(255,255,255,0.10)] group-hover:border-[#E5AD08] bg-[#10151A] flex items-center justify-center text-[#737C85] group-hover:text-[#E5AD08] transition-all flex-shrink-0">
                      <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  ) : (
                    <div className="px-2.5 py-1 border border-[rgba(255,255,255,0.08)] bg-[#10151A] font-mono text-[9px] text-[#737C85] uppercase tracking-widest">
                      FIXO
                    </div>
                  )}
                </Component>
              );
            })}
          </div>

        </div>

        {/* ─── SECTION BOTTOM TECHNICAL BAR ─── */}
        <div className="pt-8 border-t border-[rgba(255,255,255,0.10)] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#737C85] tracking-[0.2em] uppercase">
          <div className="flex items-center gap-2">
            <Crosshair className="w-4 h-4 text-[#E5AD08]" />
            <span>
              <strong className="text-[#E5AD08]">07</strong> / 07
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
