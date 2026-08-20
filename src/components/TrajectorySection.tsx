import React from 'react';
import { motion } from 'motion/react';
import {
  Dribbble,
  Award,
  Shield,
  Laptop,
  Crosshair,
} from 'lucide-react';

import dunkImg from '../assets/images/dunk_action_shot_1787162440566.jpg';
import statsImg from '../assets/images/stats_scout_board_1787162454170.jpg';
import soldierImg from '../assets/images/tactical_soldier_1787162467153.jpg';
import techImg from '../assets/images/tech_neural_network_1787162482067.jpg';
import brasiliaImg from '../assets/images/brasilia_cathedral_night_1787162498360.jpg';
import { EASE_SMOOTH } from '../lib/motion';

export const TrajectorySection: React.FC = () => {
  const steps = [
    {
      id: 'esporte',
      number: '01',
      period: '2018 — 2020',
      title: 'BASQUETE FEDERADO',
      description:
        'Jogador federado de basquete em Brasília. Anos de aprendizado, competição e evolução dentro e fora das quadras.',
      icon: Dribbble,
      image: dunkImg,
      tags: ['DISCIPLINA • COMPETIÇÃO', 'TRABALHO EM EQUIPE', 'FOCO • EVOLUÇÃO'],
    },
    {
      id: 'dados',
      number: '02',
      period: 'FBDF',
      title: 'FBDF — ESTATÍSTICA',
      description:
        'Curso de Estatística de Basquete pela Federação de Basquetebol do Distrito Federal. Foi quando comecei a enxergar o jogo através dos dados.',
      badge: 'JOGADOR ↗ ANÁLISE',
      icon: Award,
      image: statsImg,
      tags: ['ESTATÍSTICA • ANÁLISE', 'SCOUT • DADOS', 'DO JOGO À INFORMAÇÃO'],
    },
    {
      id: 'disciplina',
      number: '03',
      period: '2022 — ATUAL',
      title: 'EXÉRCITO BRASILEIRO',
      description:
        'Atuação profissional atual, fortalecendo disciplina, responsabilidade, estratégia e capacidade de execução.',
      icon: Shield,
      image: soldierImg,
      tags: [
        'DISCIPLINA • LIDERANÇA',
        'ESTRATÉGIA • RESILIÊNCIA',
        'RESPONSABILIDADE',
      ],
    },
    {
      id: 'tecnologia',
      number: '04',
      period: 'PRESENTE',
      title: 'TECNOLOGIA & IA',
      description:
        'Explorando tecnologia, Inteligência Artificial, dados e desenvolvimento de projetos para resolver problemas reais.',
      icon: Laptop,
      image: techImg,
      tags: [
        'TECNOLOGIA • IA',
        'AUTOMAÇÃO • PROJETOS',
        'CONSTRUÇÃO • APRENDIZADO',
      ],
    },
    {
      id: 'construcao',
      number: '05',
      period: 'FUTURO',
      title: 'SPORTSTECH',
      description:
        'Unir esporte, dados e IA para criar soluções que elevem o desempenho e transformem a forma como o basquete é analisado, treinado e gerido.',
      icon: Crosshair,
      image: brasiliaImg,
      tags: [
        'IMPACTO • INOVAÇÃO',
        'PERFORMANCE • FUTURO',
        'SOLUÇÕES PARA O ESPORTE',
      ],
    },
  ];

  return (
    <section
      id="trajetoria"
      className="py-24 sm:py-32 bg-[#0D0F12] border-b border-[rgba(255,255,255,0.08)] relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.75, ease: EASE_SMOOTH }}
          className="mb-14 sm:mb-16"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs text-[#D4A017] tracking-widest uppercase font-bold">
              02 — TRAJETÓRIA
            </span>
            <div className="w-8 h-[1px] bg-[#D4A017]/60" />
          </div>
          <h2 className="font-condensed text-4xl sm:text-6xl font-bold tracking-tight uppercase text-[#F5F7FA] mb-2">
            MINHA TRAJETÓRIA
          </h2>
          <p className="text-sm sm:text-base text-[#B0B5BB] font-body max-w-xl">
            Uma jornada entre esporte, disciplina, dados e tecnologia.
          </p>
        </motion.div>

        {/* Timeline Rows */}
        <div className="relative space-y-6 sm:space-y-8">
          
          {/* Vertical Golden Connecting Line with Progressive Grow Animation */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.1, ease: EASE_SMOOTH }}
            style={{ transformOrigin: 'top' }}
            className="hidden md:block absolute left-[56px] top-6 bottom-6 w-[1px] bg-gradient-to-b from-[#D4A017] via-[#D4A017]/70 to-[#D4A017]/30 pointer-events-none z-0"
          />

          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.number}
                id={step.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.65,
                  delay: idx * 0.07,
                  ease: EASE_SMOOTH,
                }}
                className="interactive-card relative bg-[#121519] border border-[rgba(255,255,255,0.08)] hover:border-[#D4A017]/70 p-5 sm:p-6 lg:p-7 group z-10 scroll-mt-24"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center">
                  
                  {/* Left Column: Number + Node Icon + Text (5 cols) */}
                  <div className="md:col-span-5 flex items-start gap-4 sm:gap-5">
                    {/* Golden Circle Icon with Number */}
                    <div className="flex-shrink-0 flex items-center gap-3">
                      <span className="font-mono text-sm font-bold text-[#D4A017]">
                        {step.number}
                      </span>
                      <div className="w-10 h-10 rounded-full border border-[#D4A017] bg-[#0D0F12] flex items-center justify-center text-[#D4A017] shadow-[0_0_10px_rgba(212,160,23,0.2)] group-hover:scale-105 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]">
                        <IconComponent className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Content Details */}
                    <div className="flex-1">
                      {step.period && (
                        <span className="text-[10px] font-mono text-[#D4A017] tracking-widest uppercase block mb-1">
                          {step.period}
                        </span>
                      )}
                      <h3 className="font-condensed text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#F5F7FA] mb-2 group-hover:text-[#D4A017] transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#B0B5BB] leading-relaxed font-body">
                        {step.description}
                      </p>

                      {/* Badge if present */}
                      {step.badge && (
                        <div className="mt-3">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#161A20] border border-[#D4A017] text-[10px] font-mono font-bold uppercase tracking-wider text-[#D4A017]">
                            {step.badge}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Center Column: Wide Cinematic Imagery (4 cols) */}
                  <div className="md:col-span-4 overflow-hidden border border-[rgba(255,255,255,0.08)] bg-[#0D0F12] h-28 sm:h-32 relative">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover object-center opacity-75 group-hover:opacity-95 group-hover:scale-103 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121519] via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Right Column: Key Takeaway Labels (3 cols) */}
                  <div className="md:col-span-3 flex flex-col justify-center space-y-1.5 border-l-0 md:border-l border-[rgba(255,255,255,0.08)] md:pl-6 text-[10px] sm:text-[11px] font-mono tracking-wider text-[#7C8793]">
                    {step.tags.map((tag, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="text-[#D4A017]">•</span>
                        <span className="group-hover:text-[#F5F7FA] transition-colors duration-300">
                          {tag}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>
              </motion.div>
            );
          })}

        </div>

        {/* Bottom Banner Quote & Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE_SMOOTH }}
          className="mt-8 p-4 sm:p-5 bg-[#121519] border border-[rgba(255,255,255,0.08)] flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-xl text-[#D4A017] font-bold">“</span>
            <p className="text-xs sm:text-sm text-[#F5F7FA] font-body italic">
              Cada fase me trouxe uma habilidade. Hoje uso tudo isso para construir o que vem pela frente.
            </p>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs text-[#D4A017] tracking-widest uppercase flex-shrink-0">
            <span>EM CONSTRUÇÃO</span>
            <div className="w-16 h-[2px] bg-[#D4A017]/30 relative overflow-hidden">
              <div className="absolute inset-0 w-[60%] bg-[#D4A017]" />
            </div>
            <span className="font-bold">60%</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
