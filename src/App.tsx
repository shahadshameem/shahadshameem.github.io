import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectSection } from './components/ProjectSection';
import { ProjectModal } from './components/ProjectModal';
import { TerminalWidget } from './components/TerminalWidget';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Project } from './data/portfolioData';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [terminalOpen, setTerminalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#090a0f] text-neutral-100 selection:bg-sky-500/20 selection:text-sky-300">
      <Navbar onOpenTerminal={() => setTerminalOpen(true)} />
      
      <main>
        <Hero onOpenTerminal={() => setTerminalOpen(true)} />
        <ProjectSection onSelectProject={(p) => setSelectedProject(p)} />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      <Footer />

      {/* Interactive Project Lightbox Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Interactive Hardware Terminal Widget */}
      <TerminalWidget
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
    </div>
  );
}

export default App;
