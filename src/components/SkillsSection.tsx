import React from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  GitBranch,
  Triangle,
  MessageSquareCode,
  PenTool,
  Github,
  Crosshair,
} from 'lucide-react';
import { EASE_SMOOTH } from '../lib/motion';

export const SkillsSection: React.FC = () => {
  const competencies = [
    {
      number: '01',
      title: 'GOOGLE AI STUDIO',
      description:
        'Exploro a criação de aplicações e protótipos utilizando Inteligência Artificial.',
      icon: Sparkles,
    },
    {
      number: '02',
      title: 'GITHUB',
      description:
        'Organizo, versiono e armazeno meus projetos de forma colaborativa e segura.',
      icon: GitBranch,
    },
    {
      number: '03',
      title: 'VERCEL',
      description:
        'Utilizo para hospedar e publicar projetos web com performance e escalabilidade.',
      icon: Triangle,
    },
    {
      number: '04',
      title: 'ENGENHARIA DE PROMPT',
      description:
        'Crio, testo e aprimoro instruções para modelos de IA gerando resultados melhores e mais úteis.',
      icon: MessageSquareCode,
    },
    {
      number: '05',
      title: 'DESIGN GRÁFICO',
      description:
        'Desenvolvo conceitos visuais, identidades e materiais digitais com propósito.',
      icon: PenTool,
    },
  ];

  const primaryTools = [
    {
      name: 'GOOGLE AI STUDIO',
      description:
        'Uso para explorar modelos de IA, criar protótipos e desenvolver soluções inteligentes.',
      icon: Sparkles,
      link: 'https://aistudio.google.com/',
    },
    {
      name: 'GITHUB',
      description:
        'Utilizo para versionamento de código, organização de projetos e colaboração contínua.',
      icon: Github,
      link: 'https://github.com/caina-kng',
    },
    {
      name: 'VERCEL',
      description:
        'Plataforma que utilizo para deploy e hospedagem de aplicações web de forma rápida e eficiente.',
      icon: Triangle,
      link: 'https://vercel.com/',
    },
  ];

  return (
    <section
      id="habilidades"
      className="py-24 sm:py-32 bg-[#06090B] border-b border-[rgba(255,255,255,0.10)] relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: EASE_SMOOTH }}
          className="mb-14 sm:mb-16"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs text-[#E5AD08] tracking-widest uppercase font-bold">
              04 — HABILIDADES
            </span>
            <div className="w-8 h-[1px] bg-[#E5AD08]/60" />
          </div>
          <h2 className="font-condensed text-4xl sm:text-6xl font-bold tracking-tight uppercase text-[#F4F4F1] mb-2">
            HABILIDADES
          </h2>
          <p className="text-sm sm:text-base text-[#B0B5BB] font-body max-w-xl">
            Conhecimentos e ferramentas que utilizo atualmente para criar, explorar e construir soluções.
          </p>
        </motion.div>

        {/* 1. COMPETÊNCIAS (5 Vertical Cards) */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: EASE_SMOOTH }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="font-mono text-xs text-[#E5AD08] font-bold tracking-widest uppercase">
              COMPETÊNCIAS
            </span>
            <div className="w-12 h-[1px] bg-[#E5AD08]/50" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {competencies.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.65,
                    delay: idx * 0.07,
                    ease: EASE_SMOOTH,
                  }}
                  className="interactive-card bg-[#0C1014] border border-[rgba(255,255,255,0.10)] hover:border-[#E5AD08] p-5 flex flex-col justify-between group"
                >
                  <div>
                    {/* Number + Circular Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs text-[#E5AD08] font-bold">
                        {item.number}
                      </span>
                      <div className="w-9 h-9 rounded-full border border-[#E5AD08]/60 bg-[#10151A] flex items-center justify-center text-[#E5AD08] group-hover:border-[#E5AD08] group-hover:scale-105 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]">
                        <IconComp className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-condensed text-lg sm:text-xl font-bold uppercase tracking-tight text-[#F4F4F1] mb-2 group-hover:text-[#E5AD08] transition-colors duration-300">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-[#B0B5BB] leading-relaxed font-body">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Golden Line + Cross Accent */}
                  <div className="pt-6 mt-4 border-t border-[rgba(255,255,255,0.06)] flex items-center justify-between">
                    <div className="w-8 h-[2px] bg-[#E5AD08] opacity-70 group-hover:w-12 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                    <span className="font-mono text-xs text-[#E5AD08]">+</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 2. FERRAMENTAS QUE UTILIZO (3 Large Horizontal Cards) */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: EASE_SMOOTH }}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6"
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#E5AD08] font-bold tracking-widest uppercase">
                FERRAMENTAS QUE UTILIZO
              </span>
              <div className="w-12 h-[1px] bg-[#E5AD08]/50" />
            </div>
            <span className="font-mono text-[10px] text-[#737C85] tracking-widest uppercase">
              TECNOLOGIAS PRINCIPAIS DO MEU FLUXO DE TRABALHO
            </span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {primaryTools.map((tool, idx) => {
              const ToolIcon = tool.icon;
              return (
                <motion.a
                  key={tool.name}
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.65,
                    delay: idx * 0.09,
                    ease: EASE_SMOOTH,
                  }}
                  className="interactive-card bg-[#0C1014] border border-[rgba(255,255,255,0.10)] hover:border-[#E5AD08] p-5 sm:p-6 flex items-start gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded bg-[#10151A] border border-[rgba(255,255,255,0.12)] flex items-center justify-center text-[#E5AD08] flex-shrink-0 group-hover:border-[#E5AD08] transition-colors duration-300">
                    <ToolIcon className="w-6 h-6" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="font-condensed text-lg sm:text-xl font-bold uppercase tracking-tight text-[#F4F4F1] group-hover:text-[#E5AD08] transition-colors duration-300 truncate">
                        {tool.name}
                      </h4>
                      <span className="interactive-arrow text-sm font-sans text-[#737C85] group-hover:text-[#E5AD08]">↗</span>
                    </div>
                    <p className="text-xs text-[#B0B5BB] leading-relaxed font-body">
                      {tool.description}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* 3. Bottom Quote & Core Philosophy Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE_SMOOTH }}
          className="p-4 sm:p-5 bg-[#0C1014] border border-[rgba(255,255,255,0.10)] flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-xl text-[#E5AD08] font-bold">“</span>
            <p className="text-xs sm:text-sm text-[#F4F4F1] font-body">
              Ferramentas são importantes, mas é a disciplina e a curiosidade que constroem resultados.
            </p>
          </div>

          <div className="flex items-center gap-3 font-mono text-[10px] text-[#737C85] tracking-widest uppercase flex-shrink-0">
            <span>FOCO • APRENDIZADO • EXECUÇÃO</span>
            <Crosshair className="w-4 h-4 text-[#E5AD08]" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};
