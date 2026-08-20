import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/portfolioData';
import { smoothScrollToY } from '../lib/smoothScroll';

export const Footer: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'America/Sao_Paulo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setCurrentTime(new Intl.DateTimeFormat('pt-BR', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    smoothScrollToY(0);
  };

  return (
    <footer className="relative bg-[#0D0F12] border-t border-[rgba(255,255,255,0.08)] py-12 text-[#7C8793] font-mono text-xs overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[rgba(255,255,255,0.08)] items-center justify-between">
          
          {/* Identity with Monogram */}
          <div className="md:col-span-4 flex items-center gap-3.5">
            <div className="border border-[#D4A017]/80 px-2.5 py-1 bg-[#121519]">
              <span className="font-condensed text-xl font-bold tracking-tight text-[#D4A017]">
                JC
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-[0.18em] uppercase text-[#F5F7FA] font-body text-sm">
                JOÃO CAINÃ
              </span>
              <p className="text-[10px] text-[#7C8793] font-mono tracking-wider">
                “EXPERIÊNCIAS DIFERENTES. UMA MESMA FORMA DE PENSAR.”
              </p>
            </div>
          </div>

          {/* Social Links Row with High-Tracking */}
          <div className="md:col-span-4 flex flex-wrap items-center gap-6 text-[11px] font-mono uppercase tracking-[0.16em] text-[#B0B5BB]">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target={link.type === 'email' ? undefined : '_blank'}
                rel={link.type === 'email' ? undefined : 'noopener noreferrer'}
                className="group hover:text-[#D4A017] transition-colors duration-300 flex items-center gap-1"
              >
                <span>{link.label}</span>
                <span className="interactive-arrow text-xs">↗</span>
              </a>
            ))}
          </div>

          {/* Real-Time Brasília Telemetry & Back to Top */}
          <div className="md:col-span-4 flex items-center justify-start md:justify-end gap-4">
            <div className="p-2.5 bg-[#121519] border border-[rgba(255,255,255,0.08)] text-[10px] font-mono">
              <span className="text-[#7C8793] block text-[9px] uppercase tracking-wider">
                HORA DE BRASÍLIA
              </span>
              <span className="text-[#D4A017] font-semibold tracking-wider">
                {currentTime || '12:00:00'} BRT
              </span>
            </div>

            <button
              onClick={scrollToTop}
              className="interactive-btn inline-flex items-center gap-2 px-4 py-2.5 bg-[#121519] hover:bg-[#D4A017] text-[#F5F7FA] hover:text-[#0D0F12] border border-[rgba(255,255,255,0.08)] group cursor-pointer text-[10px] font-mono font-bold uppercase tracking-widest transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
              title="Voltar ao topo"
            >
              <span>TOPO</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5" />
            </button>
          </div>

        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] font-mono text-[#7C8793]">
          <div>
            © 2026 JOÃO CAINÃ — BRASÍLIA / DF — TODOS OS DIREITOS RESERVADOS
          </div>

          <div className="flex items-center gap-2 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A017] animate-pulse" />
            <span>DISCIPLINA // TECNOLOGIA // IA</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
