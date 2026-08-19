import React, { useState } from 'react';
import { Activity, BarChart2, Target, FileSpreadsheet, Dumbbell, Compass } from 'lucide-react';
import { VISION_TOPICS } from '../data/portfolioData';

export const VisionSection: React.FC = () => {
  const [activeTopicId, setActiveTopicId] = useState<string>(VISION_TOPICS[0].id);

  const getTopicIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity':
        return <Activity className="w-5 h-5 text-[#E3AD12]" />;
      case 'BarChart2':
        return <BarChart2 className="w-5 h-5 text-[#E3AD12]" />;
      case 'Target':
        return <Target className="w-5 h-5 text-[#E3AD12]" />;
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="w-5 h-5 text-[#E3AD12]" />;
      case 'Dumbbell':
        return <Dumbbell className="w-5 h-5 text-[#E3AD12]" />;
      default:
        return <Activity className="w-5 h-5 text-[#E3AD12]" />;
    }
  };

  const activeTopic = VISION_TOPICS.find((t) => t.id === activeTopicId) || VISION_TOPICS[0];

  return (
    <section
      id="visao"
      className="relative py-24 bg-[#080A0C] border-b border-[#11151A] overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 grid-overlay opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14 pb-6 border-b border-[#11151A]">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs tracking-[0.3em] text-[#E3AD12] font-semibold uppercase">
              03 // Visão Sobre Tecnologia no Esporte
            </span>
            <span className="text-[10px] font-mono text-[#84909D] uppercase tracking-widest">
              [ MANIFESTO EDITORIAL ]
            </span>
          </div>

          {/* Big Editorial Title */}
          <div className="space-y-1 max-w-4xl">
            <h2 className="font-condensed text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-[#F2F2EF] leading-[0.88]">
              E SE A TECNOLOGIA CONSEGUISSE
            </h2>
            <h2 className="font-condensed text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-[#E3AD12] leading-[0.88]">
              ENTENDER O JOGO?
            </h2>
          </div>
        </div>

        {/* Editorial Two-Column Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-center">
          
          <div className="lg:col-span-7 space-y-4 text-base sm:text-lg text-[#84909D] leading-relaxed font-body">
            <p className="text-[#F2F2EF] font-medium text-lg sm:text-xl">
              “Depois da experiência como jogador e do contato com estatísticas através da FBDF, comecei a enxergar o basquete de outra forma.”
            </p>
            <p>
              Dados ajudam a explicar o que acontece dentro da quadra. A Inteligência Artificial pode ajudar a transformar esses dados em informação, aprendizado contínuo e novas possibilidades.
            </p>
            <p className="text-sm text-[#84909D] font-mono border-l border-[#E3AD12] pl-4 py-1 text-[#E3AD12]/90">
              “Com o avanço da IA, acredito que ainda existe muito espaço para melhorar a forma como atletas, treinadores e organizações trabalham com desempenho, estatísticas e informação.”
            </p>
          </div>

          {/* Right Highlight Box */}
          <div className="lg:col-span-5 p-6 sm:p-8 bg-[#0D1013] border border-[#11151A] relative shadow-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-[#E3AD12] mb-3 uppercase tracking-wider font-semibold">
              <Compass className="w-4 h-4" />
              <span>DIRETRIZ DE EXPLORAÇÃO FUTURA</span>
            </div>
            <p className="text-sm text-[#F2F2EF] leading-relaxed font-body">
              As áreas apresentadas a seguir representam meus <strong>campos de interesse, estudo e prototipagem</strong> para o futuro do esporte, conectando o rigor estatístico ao potencial dos modelos inteligentes.
            </p>
            <div className="mt-5 pt-4 border-t border-[#11151A] flex items-center justify-between text-[10px] font-mono text-[#84909D]">
              <span>FOCO PRINCIPAL: BASQUETE</span>
              <span className="text-[#E3AD12] font-semibold">EM EVOLUÇÃO</span>
            </div>
          </div>

        </div>

        {/* 5 Topic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
          {VISION_TOPICS.map((topic) => {
            const isActive = activeTopicId === topic.id;
            return (
              <div
                key={topic.id}
                onClick={() => setActiveTopicId(topic.id)}
                id={`vision-topic-${topic.id}`}
                className={`p-5 border cursor-pointer transition-all duration-200 flex flex-col justify-between group ${
                  isActive
                    ? 'bg-[#0D1013] border-[#E3AD12] shadow-[0_0_15px_rgba(227,173,18,0.2)]'
                    : 'bg-[#080A0C] border-[#11151A] hover:border-[#84909D]/40 hover:bg-[#0D1013]/50'
                }`}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#11151A]">
                    <span className="font-mono text-xs font-bold text-[#E3AD12]">
                      {topic.number}
                    </span>
                    <div
                      className={`p-1.5 border transition-colors ${
                        isActive
                          ? 'bg-[#E3AD12]/20 border-[#E3AD12]'
                          : 'bg-[#080A0C] border-[#11151A] group-hover:border-[#84909D]'
                      }`}
                    >
                      {getTopicIcon(topic.iconName)}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-condensed text-2xl font-bold uppercase tracking-wide text-[#F2F2EF] mb-1 group-hover:text-white">
                    {topic.title}
                  </h3>
                  
                  <p className="font-mono text-[11px] text-[#E3AD12] mb-3 leading-snug">
                    {topic.tagline}
                  </p>

                  <p className="text-xs text-[#84909D] leading-relaxed font-body">
                    {topic.description}
                  </p>
                </div>

                {/* Bottom Metric Label */}
                <div className="mt-5 pt-3 border-t border-[#11151A] flex items-center justify-between text-[9px] font-mono text-[#84909D]">
                  <span className="truncate">{topic.focusArea}</span>
                  <span className="text-[#E3AD12]">↗</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Vision Detail Banner */}
        <div className="mt-8 p-5 sm:p-6 bg-[#0D1013] border border-[#11151A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 bg-[#E3AD12] rounded-full animate-pulse shadow-[0_0_10px_rgba(227,173,18,0.5)]" />
            <div>
              <span className="font-mono text-xs text-[#84909D] uppercase block">
                ÁREA SELECIONADA:
              </span>
              <span className="font-condensed text-xl font-bold text-[#F2F2EF] tracking-wider uppercase">
                {activeTopic.title} — {activeTopic.focusArea}
              </span>
            </div>
          </div>
          <div className="px-3.5 py-1.5 bg-[#080A0C] border border-[#11151A] font-mono text-xs text-[#E3AD12]">
            CONCEITO: {activeTopic.metricConcept}
          </div>
        </div>

      </div>
    </section>
  );
};
