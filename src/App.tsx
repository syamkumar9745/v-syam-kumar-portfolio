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
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Global 3D Neural Particle Background — spans the entire page */}
      <Global3DBackground />
      
      {/* Sticky Glass Navbar */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 01: Hero with 3D Holographic AI Neural Core */}
        <Hero onOpenResume={() => setResumeModalOpen(true)} />

        {/* 02: Impressive UI Roller (Systems, ML, DL, LLM, Full-Stack) */}
        <InfiniteMarquee />

        {/* 03: Clear & Professional Personal Introduction & Education */}
        <About />

        {/* 04: Selected Engineering Projects & Case Studies */}
        <Projects />

        {/* 05: Technical Skills Ecosystem & Search */}
        <Skills />

        {/* 06: Practical Experience & Internships */}
        <Experience />

        {/* 07: Verified Professional Certifications */}
        <Certifications />

        {/* 08: How I Build / Engineering Philosophy */}
        <Philosophy />

        {/* 09: Direct Contact, Profiles & Message Dispatch */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Viewer / Print Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
};

export default App;
