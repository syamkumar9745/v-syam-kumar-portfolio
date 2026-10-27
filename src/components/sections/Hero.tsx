import React from 'react';
import { Hero3DCore } from '../3d/Hero3DCore';
import { Button } from '../common/Button';
import { PERSONAL_INFO } from '../../data/portfolioData';

import {
  ArrowRight,
  ArrowDown,
  Sparkles,
  Brain,
  Zap,
  Activity,
  FileText,
  ShieldCheck,
} from 'lucide-react';

interface HeroProps {
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-[#111318]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* LEFT — Professional positioning */}
          <div className="lg:col-span-7 space-y-6 text-left">

            {/* Availability / identity */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#242730] border border-[#C6A86B]/35 text-[#F5F0E6] text-xs font-semibold shadow-gold-sm backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#176B55] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#176B55]" />
              </span>

              <span className="font-mono tracking-wide">AI / ML ENGINEERING · GEN-AI · RAG</span>
            </div>

            {/* Primary positioning */}
            <div className="space-y-4">

              <p className="text-sm sm:text-base font-mono font-semibold tracking-wider text-[#C6A86B] uppercase">
                {PERSONAL_INFO.name}
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-[#F5F0E6] leading-[1.05]">
                Building Intelligent Systems

                <span className="block gradient-text-gold">
                  From Data to AI Applications.
                </span>
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#D9D1C3]/90 max-w-3xl leading-snug">
                AI / ML Engineer focused on Machine Learning, Generative AI,
                Retrieval-Augmented Generation, and intelligent application development.
              </p>
            </div>

            {/* Engineering narrative */}
            <p className="text-base sm:text-lg text-[#9699A3] max-w-2xl leading-relaxed">
              I build end-to-end intelligent systems by connecting data,
              machine learning models, retrieval pipelines, and application
              interfaces into practical software.
            </p>

            {/* Engineering focus */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl">

              {/* Machine Learning */}
              <div className="p-3.5 rounded-xl bg-[#242730]/90 border border-[#C6A86B]/20 hover:border-[#C6A86B]/60 transition-colors shadow-sm">
                <Brain className="w-4 h-4 text-[#C6A86B] mb-2" />

                <p className="text-xs font-bold text-[#F5F0E6]">
                  Machine Learning
                </p>

                <p className="text-[11px] text-[#9699A3] mt-1">
                  Modeling, evaluation & feature engineering
                </p>
              </div>

              {/* Generative AI */}
              <div className="p-3.5 rounded-xl bg-[#242730]/90 border border-[#C6A86B]/20 hover:border-[#176B55]/60 transition-colors shadow-sm">
                <Zap className="w-4 h-4 text-[#176B55] mb-2" />

                <p className="text-xs font-bold text-[#F5F0E6]">
                  Generative AI
                </p>

                <p className="text-[11px] text-[#9699A3] mt-1">
                  LLMs, prompting & RAG workflows
                </p>
              </div>

              {/* AI Applications */}
              <div className="p-3.5 rounded-xl bg-[#242730]/90 border border-[#C6A86B]/20 hover:border-[#E0C58E]/60 transition-colors shadow-sm">
                <Activity className="w-4 h-4 text-[#E0C58E] mb-2" />

                <p className="text-xs font-bold text-[#F5F0E6]">
                  AI Applications
                </p>

                <p className="text-[11px] text-[#9699A3] mt-1">
                  Data, APIs & interactive interfaces
                </p>
              </div>
            </div>

            {/* Evidence / academic foundation */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 py-2 max-w-lg">

              {/* Education */}
              <div className="p-3.5 rounded-xl bg-[#242730]/90 border border-[#C6A86B]/20 shadow-obsidian-card">
                <div className="text-xs text-[#9699A3] font-medium font-mono">
                  B.Tech AI & DS
                </div>

                <div className="text-lg sm:text-xl font-bold text-[#F5F0E6] mt-0.5">
                  8.00{' '}
                  <span className="text-xs font-normal text-[#C6A86B]">
                    CGPA
                  </span>
                </div>
              </div>

              {/* Projects */}
              <div className="p-3.5 rounded-xl bg-[#242730]/90 border border-[#C6A86B]/20 shadow-obsidian-card">
                <div className="text-xs text-[#9699A3] font-medium font-mono">
                  ML & Data
                </div>

                <div className="text-lg sm:text-xl font-bold text-[#F5F0E6] mt-0.5">
                  4{' '}
                  <span className="text-xs font-normal text-[#176B55]">
                    Projects
                  </span>
                </div>
              </div>

              {/* Credentials */}
              <div className="p-3.5 rounded-xl bg-[#242730]/90 border border-[#C6A86B]/20 shadow-obsidian-card">
                <div className="text-xs text-[#9699A3] font-medium font-mono">
                  Verified
                </div>

                <div className="text-lg sm:text-xl font-bold text-[#F5F0E6] mt-0.5">
                  4{' '}
                  <span className="text-xs font-normal text-[#E0C58E]">
                    Credentials
                  </span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">

              <Button
                href="#projects"
                size="lg"
                variant="primary"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Explore Selected Work
              </Button>

              <Button
                href="#contact"
                size="lg"
                variant="outline"
                icon={<Sparkles className="w-4 h-4 text-[#C6A86B]" />}
              >
                Let's Connect
              </Button>

              {onOpenResume && (
                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl text-sm font-semibold text-[#F5F0E6] hover:text-[#E0C58E] bg-[#242730]/90 hover:bg-[#2E323E] transition-all border border-[#C6A86B]/30 cursor-pointer font-mono"
                >
                  <FileText className="w-4 h-4 text-[#C6A86B]" />
                  <span>Resume</span>
                </button>
              )}
            </div>

            {/* Credibility */}
            <div className="flex items-center gap-2 pt-2 text-xs text-[#9699A3]">
              <ShieldCheck className="w-4 h-4 text-[#176B55] flex-shrink-0" />

              <span>
                Final Year CSE (AI & Data Science) · Jeppiaar University, Chennai · 2027
              </span>
            </div>
          </div>

          {/* RIGHT — 3D visualization */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="w-full max-w-xl lg:max-w-none relative">

              <div className="absolute inset-0 bg-gradient-to-b from-[#242730]/40 via-[#181B22]/60 to-[#111318] rounded-3xl border border-[#C6A86B]/20 shadow-obsidian-card -z-10" />

              <Hero3DCore />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 lg:mt-16 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-1 text-[#C6A86B]/80 hover:text-[#E0C58E] transition-colors group"
            aria-label="Scroll to about section"
          >
            <span className="text-[11px] font-semibold tracking-wider uppercase font-mono">
              Explore Architecture
            </span>

            <ArrowDown className="w-4 h-4 animate-bounce text-[#C6A86B] group-hover:text-[#E0C58E]" />
          </a>
        </div>
      </div>
    </section>
  );
};
