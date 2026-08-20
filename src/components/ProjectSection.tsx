import React from 'react';
import { motion } from 'motion/react';
import {
  Target,
  AlertCircle,
  Lightbulb,
  CheckCircle2,
  Circle,
  Github,
} from 'lucide-react';
import appMockupImage from '../assets/images/app_dual_phones_mockup_1787162515491.jpg';
import { EASE_SMOOTH } from '../lib/motion';

export const ProjectSection: React.FC = () => {
  const techStack = [
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'AI / LLM',
    'Firebase',
    'Vercel',
  ];

  const roadmapSteps = [
    { label: 'Planejamento', completed: true },
    { label: 'Desenvolvimento', active: true },
    { label: 'Testes', completed: false },
    { label: 'Integração IA', completed: false },
    { label: 'Lançamento', completed: false },
  ];

  return (
    <section
      id="projetos"
      className="py-24 sm:py-32 bg-[#0D0F12] border-b border-[rgba(255,255,255,0.08)] relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.75, ease: EASE_SMOOTH }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs text-[#D4A017] tracking-widest uppercase font-bold">
                03 — PROJETOS
              </span>
              <div className="w-8 h-[1px] bg-[#D4A017]/60" />
            </div>
            <h2 className="font-condensed text-4xl sm:text-6xl font-bold tracking-tight uppercase text-[#F5F7FA] mb-2">
              PROJETOS EM DESTAQUE
            </h2>
            <p className="text-sm sm:text-base text-[#B0B5BB] font-body max-w-xl">
              Projetos em desenvolvimento que unem tecnologia, dados e esporte para criar soluções com propósito.
            </p>
          </div>

          <a
            href="https://github.com/caina-kng"
            target="_blank"
            rel="noopener noreferrer"
            className="interactive-btn group inline-flex items-center gap-2 border border-[rgba(255,255,255,0.15)] hover:border-[#D4A017] px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-[#F5F7FA] hover:text-[#D4A017] cursor-pointer self-start md:self-auto"
          >
            <span>VER TODOS OS PROJETOS</span>
            <span className="interactive-arrow">↗</span>
          </a>
        </motion.div>

        {/* Main Project Feature Container */}
        <motion.div
          id="projeto-app-destaque"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, ease: EASE_SMOOTH }}
          className="relative bg-[#121519] border border-[rgba(255,255,255,0.08)] p-6 sm:p-8 lg:p-10 shadow-2xl scroll-mt-24"
        >
          
          {/* Top Left Number Index */}
          <div className="mb-4">
            <span className="font-mono text-lg font-bold text-[#D4A017]">
              01
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Mobile App Showcase (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              
              <motion.div
                initial={{ opacity: 0, scale: 1.01 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.8, ease: EASE_SMOOTH }}
                className="relative w-full overflow-hidden border border-[rgba(255,255,255,0.08)] bg-[#0D0F12] p-4 sm:p-6 group"
              >
                <img
                  src={appMockupImage}
                  alt="App de Treinamento de Basquete com IA Mockup"
                  className="w-full h-auto object-cover rounded-md group-hover:scale-102 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-2xl"
                  referrerPolicy="no-referrer"
                />

                {/* Status Badge */}
                <div className="mt-4 pt-3 border-t border-[rgba(255,255,255,0.08)] flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[#7C8793] uppercase tracking-wider">STATUS</span>
                  <span className="flex items-center gap-1.5 text-[#D4A017] font-bold tracking-wide">
                    <span className="w-2 h-2 rounded-full bg-[#D4A017] animate-pulse" />
                    EM DESENVOLVIMENTO
                  </span>
                </div>
              </motion.div>

            </div>

            {/* Right Column: Project Architectural Breakdown (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              
              {/* Category & Badge */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-mono text-[#D4A017] uppercase tracking-[0.2em] font-semibold">
                  SPORTSTECH • IA • BASQUETE
                </span>
                <span className="px-2.5 py-0.5 border border-[#D4A017] text-[#D4A017] text-[10px] font-mono uppercase font-bold tracking-wider">
                  EM DESENVOLVIMENTO
                </span>
              </div>

              {/* Title */}
              <h3 className="font-condensed text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#F5F7FA] leading-tight">
                APP DE TREINAMENTO DE BASQUETE COM IA
              </h3>

              {/* Narrative Description */}
              <p className="text-sm sm:text-base text-[#B0B5BB] leading-relaxed font-body">
                Aplicação em desenvolvimento que utiliza Inteligência Artificial para ajudar jogadores a estruturar treinos personalizados, acompanhar evolução e melhorar desempenho.
              </p>

              {/* 3 Pillar Cards with gentle stagger */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                
                {/* OBJETIVO */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.08, ease: EASE_SMOOTH }}
                  className="interactive-card bg-[#161A20] border border-[rgba(255,255,255,0.08)] p-4 space-y-2 hover:border-[#D4A017]/40"
                >
                  <div className="flex items-center gap-2 text-[#D4A017]">
                    <Target className="w-4 h-4" />
                    <span className="font-mono text-xs font-bold tracking-wider uppercase">
                      OBJETIVO
                    </span>
                  </div>
                  <p className="text-xs text-[#B0B5BB] leading-relaxed font-body">
                    Criar uma plataforma inteligente que auxilie atletas a treinarem melhor com mais organização, dados e acompanhamento.
                  </p>
                </motion.div>

                {/* PROBLEMA */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.16, ease: EASE_SMOOTH }}
                  className="interactive-card bg-[#161A20] border border-[rgba(255,255,255,0.08)] p-4 space-y-2 hover:border-[#D4A017]/40"
                >
                  <div className="flex items-center gap-2 text-[#D4A017]">
                    <AlertCircle className="w-4 h-4" />
                    <span className="font-mono text-xs font-bold tracking-wider uppercase">
                      PROBLEMA
                    </span>
                  </div>
                  <p className="text-xs text-[#B0B5BB] leading-relaxed font-body">
                    Falta de ferramentas acessíveis e personalizadas que unam treino, dados e evolução de forma simples e eficiente.
                  </p>
                </motion.div>

                {/* IDEIA */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.24, ease: EASE_SMOOTH }}
                  className="interactive-card bg-[#161A20] border border-[rgba(255,255,255,0.08)] p-4 space-y-2 hover:border-[#D4A017]/40"
                >
                  <div className="flex items-center gap-2 text-[#D4A017]">
                    <Lightbulb className="w-4 h-4" />
                    <span className="font-mono text-xs font-bold tracking-wider uppercase">
                      IDEIA
                    </span>
                  </div>
                  <p className="text-xs text-[#B0B5BB] leading-relaxed font-body">
                    Usar IA para gerar treinos personalizados, analisar desempenho e transformar dados em evolução real.
                  </p>
                </motion.div>

              </div>

              {/* PRÓXIMOS PASSOS Roadmap */}
              <div className="pt-3 border-t border-[rgba(255,255,255,0.08)] space-y-3">
                <span className="text-xs font-mono text-[#D4A017] tracking-widest uppercase font-bold block">
                  PRÓXIMOS PASSOS
                </span>

                <div className="flex flex-wrap items-center gap-3 sm:gap-4 font-mono text-[11px]">
                  {roadmapSteps.map((step, idx) => (
                    <React.Fragment key={step.label}>
                      <div className="flex items-center gap-1.5">
                        {step.completed ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D4A017]" />
                        ) : step.active ? (
                          <div className="w-3.5 h-3.5 rounded-full border-2 border-[#D4A017] bg-[#D4A017]/30 flex items-center justify-center animate-pulse">
                            <div className="w-1.5 h-1.5 bg-[#D4A017] rounded-full" />
                          </div>
                        ) : (
                          <Circle className="w-3.5 h-3.5 text-[#7C8793]" />
                        )}
                        <span
                          className={`${
                            step.completed || step.active
                              ? 'text-[#F5F7FA] font-semibold'
                              : 'text-[#7C8793]'
                          }`}
                        >
                          {step.label}
                        </span>
                      </div>
                      {idx < roadmapSteps.length - 1 && (
                        <span className="text-[rgba(255,255,255,0.2)] hidden sm:inline">
                          ───
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Technologies & Repository Bar */}
              <div className="pt-4 border-t border-[rgba(255,255,255,0.08)] grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                
                {/* Techs (8 cols) */}
                <div className="sm:col-span-8 space-y-1.5">
                  <span className="text-[10px] font-mono text-[#7C8793] tracking-widest uppercase block">
                    TECNOLOGIAS
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-[#161A20] border border-[rgba(255,255,255,0.12)] text-[10px] font-mono text-[#F5F7FA] hover:border-[#D4A017]/50 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Repo (4 cols) */}
                <div className="sm:col-span-4 space-y-1.5 sm:text-right">
                  <span className="text-[10px] font-mono text-[#7C8793] tracking-widest uppercase block">
                    REPOSITÓRIO
                  </span>
                  <a
                    href="https://github.com/caina-kng"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="interactive-btn group inline-flex items-center gap-1.5 text-xs font-mono text-[#F5F7FA] hover:text-[#D4A017]"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Em breve</span>
                    <span className="interactive-arrow">↗</span>
                  </a>
                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
