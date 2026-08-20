import React from 'react';
import { motion } from 'motion/react';
import cathedralImage from '../assets/images/brasilia_cathedral_night_1787162498360.jpg';
import { EASE_SMOOTH } from '../lib/motion';

export const AboutSection: React.FC = () => {
  const coreValues = [
    {
      title: 'FOCO',
      text: 'Transformar curiosidade em construção.',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="3" />
          <line x1="12" y1="1" x2="12" y2="5" />
          <line x1="12" y1="19" x2="12" y2="23" />
          <line x1="1" y1="12" x2="5" y2="12" />
          <line x1="19" y1="12" x2="23" y2="12" />
        </svg>
      ),
    },
    {
      title: 'DISCIPLINA',
      text: 'Aprendi que consistência sempre vence talento.',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <rect x="3" y="14" width="3.5" height="7" rx="0.5" />
          <rect x="8.5" y="10" width="3.5" height="11" rx="0.5" />
          <rect x="14" y="6" width="3.5" height="15" rx="0.5" />
          <rect x="19.5" y="2" width="3.5" height="19" rx="0.5" />
        </svg>
      ),
    },
    {
      title: 'PAIXÃO',
      text: 'O basquete me ensinou sobre leitura de jogo e tomada de decisão.',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M5.6 5.6C8 8 9.5 11 9.5 14.5" />
          <path d="M18.4 5.6C16 8 14.5 11 14.5 14.5" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="12" y1="3" x2="12" y2="21" />
        </svg>
      ),
    },
    {
      title: 'PROPÓSITO',
      text: 'Usar tecnologia e IA para gerar impacto no esporte.',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      ),
    },
    {
      title: 'FUTURO',
      text: 'Continuar evoluindo e construindo algo maior.',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M10 14.66V17c0 .55-.45 1-1 1H7" />
          <path d="M14 14.66V17c0 .55.45 1 1 1h2" />
          <path d="M12 18v4" />
          <path d="M6 4h12v6c0 3.31-2.69 6-6 6s-6-2.69-6-6V4Z" />
        </svg>
      ),
    },
  ];

  const milestones = [
    {
      period: '2018 — 2020',
      label: 'JOGADOR FEDERADO',
      sub: 'BRASÍLIA',
    },
    {
      period: 'FBDF',
      label: 'CURSO DE ESTATÍSTICA',
      sub: 'DE BASQUETE',
    },
    {
      period: '2022 — ATUAL',
      label: 'EXÉRCITO BRASILEIRO',
      sub: '',
    },
    {
      period: 'HOJE',
      label: 'TECNOLOGIA • IA • DADOS',
      sub: 'PROJETOS',
    },
  ];

  return (
    <section
      id="sobre"
      className="py-24 sm:py-32 bg-[#06090B] border-b border-[rgba(255,255,255,0.10)] relative overflow-hidden"
    >
      {/* Background Technical Grid & Subtle Radar Overlays */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      
      {/* Faint Technical Crosshairs & Radar Coordinates */}
      <div className="absolute top-20 right-1/3 text-[9px] font-mono text-[#E5AD08]/20 select-none pointer-events-none">
        +
      </div>
      <div className="absolute top-44 right-1/4 text-[9px] font-mono text-[#E5AD08]/20 select-none pointer-events-none">
        +
      </div>
      <div className="absolute bottom-32 left-1/3 text-[9px] font-mono text-[#E5AD08]/20 select-none pointer-events-none">
        +
      </div>
      <div className="absolute top-1/3 right-12 w-64 h-64 border border-[#E5AD08]/[0.04] rounded-full pointer-events-none" />

      {/* Main Wide Container (Scale 1600px) */}
      <div className="max-w-[1640px] mx-auto px-5 sm:px-10 lg:px-16 relative z-10 w-full">
        
        {/* Section Header with Horizontal Line */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: EASE_SMOOTH }}
          className="mb-14 sm:mb-18"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs sm:text-sm text-[#E5AD08] tracking-[0.25em] uppercase font-bold">
              06 — SOBRE MIM
            </span>
            <div className="w-24 sm:w-40 h-[1px] bg-gradient-to-r from-[#E5AD08]/70 via-[#E5AD08]/40 to-transparent relative">
              <span className="absolute right-0 -top-[3px] text-[#E5AD08]/60 text-[8px] font-sans">
                &gt;
              </span>
            </div>
          </div>

          {/* Massive Editorial Headline */}
          <h2 className="font-condensed text-[68px] sm:text-[88px] md:text-[104px] lg:text-[118px] leading-[0.88] tracking-tighter uppercase font-bold text-[#F4F4F1] select-none mb-4">
            SOBRE MIM
          </h2>

          {/* Subtitle */}
          <p className="font-mono text-xs sm:text-sm md:text-base text-[#84909D] tracking-[0.2em] uppercase font-medium">
            EXPERIÊNCIAS QUE CONSTROEM QUEM EU SOU.
          </p>
        </motion.div>

        {/* ─── 3-COLUMN MAIN COMPOSITION ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-stretch mb-16">
          
          {/* ─── COLUMN 1: BIOGRAFIA & QUOTE (approx. 43% width = 5 cols lg / 5 cols xl) ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: EASE_SMOOTH }}
            className="lg:col-span-5 flex flex-col justify-between space-y-8"
          >
            
            {/* Paragraphs with generous font-size and line-height */}
            <div className="space-y-6 text-[16px] sm:text-[17.5px] lg:text-[18.5px] text-[#B0B5BB] leading-[1.72] font-body">
              <p>
                Sou <strong className="text-[#E5AD08] font-bold">João Cainã</strong>, de Brasília, militar do Exército Brasileiro <strong className="text-[#F4F4F1] font-semibold">e ex-jogador federado de basquete</strong>.
              </p>
              <p>
                Minha trajetória começou dentro do esporte, mas foi através de um curso de <strong className="text-[#E5AD08] font-bold">Estatística de Basquete</strong> pela <strong className="text-[#E5AD08] font-bold">FBDF</strong> que comecei a enxergar novas possibilidades além da quadra.
              </p>
              <p>
                A partir daí, passei a me interessar cada vez mais por <strong className="text-[#E5AD08] font-bold">tecnologia, dados</strong> e <strong className="text-[#E5AD08] font-bold">Inteligência Artificial</strong>.
              </p>
              <p>
                Hoje estou <strong className="text-[#E5AD08] font-bold">construindo projetos</strong> e ampliando meus conhecimentos com o objetivo de entender como essas ferramentas podem contribuir com atletas, treinadores e organizações esportivas.
              </p>
              <p>
                No futuro, espero conseguir complementar essa experiência ainda mais dentro do basquete e, caso surja oportunidade, contribuir também com a <strong className="text-[#E5AD08] font-bold">FBDF</strong> utilizando tecnologia e inovação.
              </p>
            </div>

            {/* High-Impact Editorial Golden Quote Box */}
            <div className="mt-4 p-7 sm:p-9 bg-[#080B0E] border border-[#E5AD08] relative flex items-start gap-6 shadow-[0_0_25px_rgba(229,173,8,0.12)] group">
              {/* Giant Stylized Quotation Mark */}
              <div className="flex-shrink-0 text-[#E5AD08] select-none pt-1">
                <svg
                  className="w-10 h-10 lg:w-12 lg:h-12 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                </svg>
              </div>

              {/* Quote Text */}
              <p className="text-[17px] sm:text-[19px] lg:text-[21px] text-[#F4F4F1] font-body font-medium leading-[1.45] my-auto">
                Quero transformar minha experiência com o esporte em soluções para o próprio esporte.
              </p>
            </div>

          </motion.div>

          {/* ─── COLUMN 2: PRINCÍPIOS (approx. 22% width = 3 cols lg / 3 cols xl) ─── */}
          <div className="lg:col-span-3 flex flex-col justify-between py-2 space-y-6 lg:space-y-0">
            {coreValues.map((val, idx) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.65,
                  delay: idx * 0.08,
                  ease: EASE_SMOOTH,
                }}
                className="flex items-start gap-4 group transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:translate-x-1"
              >
                {/* Large Golden Circular Icon */}
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#E5AD08] bg-[#0C1014] flex items-center justify-center text-[#E5AD08] flex-shrink-0 shadow-[0_0_12px_rgba(229,173,8,0.22)] group-hover:scale-105 group-hover:border-[#F5BD18] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]">
                  {val.icon}
                </div>

                {/* Content */}
                <div className="space-y-1 pt-0.5">
                  <h4 className="font-mono text-xs sm:text-[13px] font-bold text-[#E5AD08] tracking-[0.2em] uppercase">
                    {val.title}
                  </h4>
                  <p className="text-xs sm:text-[13.5px] text-[#B0B5BB] leading-snug font-body max-w-[240px]">
                    {val.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ─── COLUMN 3: CATEDRAL DOMINANTE & MENTALIDADE (approx. 35% width = 4 cols lg / 4 cols xl) ─── */}
          <motion.div
            initial={{ opacity: 0, scale: 1.02 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.95, ease: EASE_SMOOTH }}
            className="lg:col-span-4 relative flex flex-col justify-center min-h-[520px] lg:min-h-[640px]"
          >
            
            {/* Cinematic Cathedral Container */}
            <div className="relative w-full h-full min-h-[520px] lg:min-h-[640px] border border-[rgba(255,255,255,0.12)] bg-[#080B0E] overflow-hidden group shadow-2xl">
              
              {/* Background Cathedral Night Photo */}
              <img
                src={cathedralImage}
                alt="Catedral Metropolitana de Brasília — Símbolo de Visão e Construção"
                className="w-full h-full object-cover object-center opacity-85 group-hover:opacity-95 group-hover:scale-103 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] select-none"
                referrerPolicy="no-referrer"
              />

              {/* Cinematic Vignette & Edge Blending */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#06090B] via-transparent to-transparent opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#06090B]/60 via-transparent to-[#06090B]/30" />

              {/* Subtle Tech Grid Overlay */}
              <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />

              {/* Floating MENTALIDADE Card */}
              <div className="absolute top-8 right-6 bg-[#06090B]/92 border border-[rgba(255,255,255,0.15)] p-4 sm:p-5 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#B0B5BB] space-y-2 backdrop-blur-md shadow-2xl transition-transform duration-300 hover:-translate-y-1">
                <span className="text-[#E5AD08] font-bold block pb-1.5 border-b border-[rgba(255,255,255,0.12)]">
                  MENTALIDADE
                </span>
                <div className="hover:text-[#F4F4F1] transition-colors duration-200">— DISCIPLINA</div>
                <div className="hover:text-[#F4F4F1] transition-colors duration-200">— ESTRATÉGIA</div>
                <div className="hover:text-[#F4F4F1] transition-colors duration-200">— CONSISTÊNCIA</div>
                <div className="hover:text-[#F4F4F1] transition-colors duration-200">— EVOLUÇÃO</div>
              </div>

              {/* Subtle Bottom Right Radar Mark */}
              <div className="absolute bottom-4 left-4 font-mono text-[9px] text-[#737C85] tracking-widest uppercase">
                COORD: 15°47'38"S 47°52'01"W // BSB
              </div>

            </div>

          </motion.div>

        </div>

        {/* ─── TIMELINE INFERIOR (Ampla, 4 Colunas com Divisores Verticais) ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE_SMOOTH }}
          className="bg-[#080B0E] border border-[rgba(255,255,255,0.10)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 shadow-xl"
        >
          {milestones.map((m, idx) => (
            <div
              key={m.period}
              className={`p-6 sm:p-8 flex flex-col justify-center ${
                idx < milestones.length - 1
                  ? 'border-b sm:border-b-0 lg:border-r border-[rgba(255,255,255,0.10)]'
                  : ''
              } hover:bg-[#0C1014] transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]`}
            >
              <span className="font-mono text-xl sm:text-2xl lg:text-[26px] font-bold text-[#E5AD08] tracking-wider block mb-1">
                {m.period}
              </span>
              <p className="font-condensed text-base sm:text-lg lg:text-xl font-bold uppercase tracking-tight text-[#F4F4F1]">
                {m.label}
              </p>
              {m.sub && (
                <span className="text-[11px] font-mono text-[#737C85] uppercase tracking-widest block mt-0.5">
                  {m.sub}
                </span>
              )}
            </div>
          ))}
        </motion.div>

        {/* ─── FOOTER TÉCNICO DA SEÇÃO ─── */}
        <div className="mt-12 pt-6 border-t border-[rgba(255,255,255,0.08)] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#737C85] tracking-[0.2em] uppercase">
          
          {/* Left Index & Micro-graphic */}
          <div className="flex items-center gap-4">
            <div>
              <span className="text-[#E5AD08] font-bold">06</span> / 07
            </div>
            <div className="hidden sm:flex items-center gap-1 opacity-50">
              <div className="w-12 h-[1px] bg-[#E5AD08]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#E5AD08]" />
              <div className="w-6 h-[1px] bg-[#E5AD08]/40" />
            </div>
          </div>

          {/* Center Manifesto */}
          <div className="text-center text-[#B0B5BB]">
            DISCIPLINA PARA EVOLUIR. CURIOSIDADE PARA CONSTRUIR.
          </div>

          {/* Right Radar & Alignment dots */}
          <div className="flex items-center gap-3 text-[#E5AD08]">
            <div className="w-4 h-4 rounded-full border border-[#E5AD08] flex items-center justify-center">
              <div className="w-1 h-1 bg-[#E5AD08] rounded-full" />
            </div>
            <div className="flex items-center gap-1 opacity-60">
              <span className="w-1 h-1 rounded-full bg-[#737C85]" />
              <span className="w-1 h-1 rounded-full bg-[#737C85]" />
              <span className="w-1 h-1 rounded-full bg-[#737C85]" />
              <span className="w-1 h-1 rounded-full bg-[#737C85]" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
