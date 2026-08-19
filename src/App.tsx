/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrajectorySection } from './components/TrajectorySection';
import { ProjectSection } from './components/ProjectSection';
import { SkillsSection } from './components/SkillsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('inicio');

  useEffect(() => {
    const sections = ['inicio', 'trajetoria', 'projetos', 'habilidades', 'sobre', 'contato'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 75;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#06090B] text-[#F4F4F1] selection:bg-[#E5AD08] selection:text-[#06090B]">
      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Fixed Header */}
      <Header activeSection={activeSection} />

      {/* Main Pages Flow */}
      <main>
        {/* 01 Início */}
        <Hero
          onExploreClick={() => scrollToSection('trajetoria')}
          onProjectsClick={() => scrollToSection('projetos')}
        />

        {/* 02 Trajetória */}
        <TrajectorySection />

        {/* 03 Projetos em Destaque */}
        <ProjectSection />

        {/* 04 Habilidades */}
        <SkillsSection />

        {/* 05 Sobre Mim */}
        <AboutSection />

        {/* 06 Contato */}
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
