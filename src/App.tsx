import React, { useState } from 'react';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { Hero } from './components/sections/Hero';
import { InfiniteMarquee } from './components/common/InfiniteMarquee';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Certifications } from './components/sections/Certifications';
import { Philosophy } from './components/sections/Philosophy';
import { Contact } from './components/sections/Contact';
import { ResumeModal } from './components/modals/ResumeModal';
import { Global3DBackground } from './components/3d/Global3DBackground';

export const App: React.FC = () => {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#111318] text-[#F5F0E6] flex flex-col font-sans selection:bg-[#C6A86B] selection:text-[#111318]">
      {/* Global 3D Particle Background — Champagne Gold & Obsidian */}
      <Global3DBackground />
      
      {/* Translucent Obsidian Sticky Navbar with Gold Trim */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      {/* Main Content Flow — Mixed Dark/Light Luxury Rhythm */}
      <main className="flex-1">
        {/* 01: Hero (Dark Midnight Obsidian) */}
        <Hero onOpenResume={() => setResumeModalOpen(true)} />

        {/* 02: Marquee Divider (Graphite & Gold) */}
        <InfiniteMarquee />

        {/* 03: About Section (Warm Champagne Ivory) */}
        <About />

        {/* 04: Projects Section (Dark Midnight Obsidian with Graphite Cards) */}
        <Projects />

        {/* 05: Skills Section (Warm Champagne Ivory with Warm Stone Cards) */}
        <Skills />

        {/* 06: Experience Section (Warm Champagne Ivory with Gold Connector) */}
        <Experience />

        {/* 07: Certifications Section (Warm Stone / Ivory) */}
        <Certifications />

        {/* 08: Engineering Philosophy (Dark Midnight Obsidian) */}
        <Philosophy />

        {/* 09: Contact Section (Dark Graphite & Obsidian with Emerald Call-to-Action) */}
        <Contact />
      </main>

      {/* Footer (Dark Midnight Obsidian) */}
      <Footer />

      {/* Resume Viewer / Print Modal (Bespoke Champagne Ivory Paper View) */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
};

export default App;
