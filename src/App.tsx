/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { TrajectorySection } from './components/TrajectorySection';
import { ProjectSection } from './components/ProjectSection';
import { SkillsSection } from './components/SkillsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { smoothScrollToElement } from './lib/smoothScroll';

export default function App() {
  const [, setActiveSection] = useState<string>('inicio');

  // Lightweight 60FPS scroll spy using IntersectionObserver instead of heavy scroll listener
  useEffect(() => {
    const sections = ['inicio', 'trajetoria', 'projetos', 'habilidades', 'sobre', 'contato'];
    const elements = sections
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          // Select the entry with greatest intersection visibility
          visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: '-20% 0px -30% 0px',
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    smoothScrollToElement(id, {
      offset: 35,
      alignment: 'top',
    });
  };

  return (
    <div className="min-h-screen bg-[#0D0F12] text-[#F5F7FA] selection:bg-[#D4A017] selection:text-[#0D0F12]">
      {/* Desktop Custom Cursor with 60FPS lerp */}
      <CustomCursor />

      {/* Main Pages Flow */}
      <main>
        {/* 01 Início */}
        <Hero
          onExploreClick={() => scrollToSection('trajetoria')}
          onProjectsClick={() => scrollToSection('projetos')}
          onContactClick={() => scrollToSection('contato')}
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
