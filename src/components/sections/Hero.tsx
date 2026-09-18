import React from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Hero3DCore } from '../3d/Hero3DCore';
import { Button } from '../common/Button';
import {
  ArrowRight,
  Sparkles,
  FileText,
  ArrowDown,
  ShieldCheck,
  Zap,
  Activity,
  Brain,
} from 'lucide-react';

interface HeroProps {
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden flex flex-col justify-center bg-[#030712]"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-60 pointer-events-none" />

      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[650px] h-[650px] bg-indigo-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* LEFT — Professional positioning */}
          <div className="lg:col-span-7 space-y-6 text-left">

            {/* Availability / identity */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d1527] border border-indigo-500/30 text-indigo-300 text-xs font-semibold shadow-neon-indigo backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>

              <span>AI / ML ENGINEERING • GEN-AI • RAG</span>
            </div>

            {/* Primary positioning */}
            <div className="space-y-4">

              <p className="text-sm sm:text-base font-mono font-semibold tracking-wider text-cyan-400 uppercase">
                {PERSONAL_INFO.name}
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
                Building Intelligent Systems

                <span className="block gradient-text-neon">
                  From Data to AI Applications.
                </span>
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-200 max-w-3xl leading-snug">
                AI / ML Engineer focused on Machine Learning, Generative AI,
                Retrieval-Augmented Generation, and intelligent application development.
              </p>
            </div>

            {/* Engineering narrative */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              I build end-to-end intelligent systems by connecting data,
              machine learning models, retrieval pipelines, and application
              interfaces into practical software.
            </p>

            {/* Engineering focus */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl">

              {/* Machine Learning */}
              <div className="p-3.5 rounded-xl bg-[#0b1120]/80 border border-white/10">
                <Brain className="w-4 h-4 text-indigo-400 mb-2" />

                <p className="text-xs font-bold text-white">
                  Machine Learning
                </p>

                <p className="text-[11px] text-slate-500 mt-1">
                  Modeling, evaluation & feature engineering
                </p>
              </div>

              {/* Generative AI */}
              <div className="p-3.5 rounded-xl bg-[#0b1120]/80 border border-white/10">
                <Zap className="w-4 h-4 text-cyan-400 mb-2" />

                <p className="text-xs font-bold text-white">
                  Generative AI
                </p>

                <p className="text-[11px] text-slate-500 mt-1">
                  LLMs, prompting & RAG workflows
                </p>
              </div>

              {/* AI Applications */}
              <div className="p-3.5 rounded-xl bg-[#0b1120]/80 border border-white/10">
                <Activity className="w-4 h-4 text-emerald-400 mb-2" />

                <p className="text-xs font-bold text-white">
                  AI Applications
                </p>

                <p className="text-[11px] text-slate-500 mt-1">
                  Data, APIs & interactive interfaces
                </p>
              </div>
            </div>

            {/* Evidence / academic foundation */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 py-2 max-w-lg">

              {/* Education */}
              <div className="p-3.5 rounded-xl bg-[#0b1120]/80 border border-white/10 shadow-lg">
                <div className="text-xs text-slate-400 font-medium">
                  B.Tech AI & DS
                </div>

                <div className="text-lg sm:text-xl font-bold text-white mt-0.5">
                  8.00{' '}
                  <span className="text-xs font-normal text-slate-400">
                    CGPA
                  </span>
                </div>
              </div>

              {/* Projects */}
              <div className="p-3.5 rounded-xl bg-[#0b1120]/80 border border-white/10 shadow-lg">
                <div className="text-xs text-slate-400 font-medium">
                  ML & Data
                </div>

                <div className="text-lg sm:text-xl font-bold text-white mt-0.5">
                  4{' '}
                  <span className="text-xs font-normal text-slate-400">
                    Projects
                  </span>
                </div>
              </div>

              {/* Credentials */}
              <div className="p-3.5 rounded-xl bg-[#0b1120]/80 border border-white/10 shadow-lg">
                <div className="text-xs text-slate-400 font-medium">
                  Verified
                </div>

                <div className="text-lg sm:text-xl font-bold text-white mt-0.5">
                  4{' '}
                  <span className="text-xs font-normal text-slate-400">
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
                icon={<Sparkles className="w-4 h-4 text-cyan-400" />}
              >
                Let's Connect
              </Button>

              {onOpenResume && (
                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 transition-all border border-white/15 cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-indigo-400" />

                  <span>Resume</span>
                </button>
              )}
            </div>

            {/* Credibility */}
            <div className="flex items-center gap-2 pt-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />

              <span>
                Final Year CSE (AI & Data Science) • Jeppiaar University, Chennai • 2027
              </span>
            </div>
          </div>

          {/* RIGHT — 3D visualization */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="w-full max-w-xl lg:max-w-none relative">

              <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/30 via-slate-900/40 to-[#030712] rounded-3xl border border-white/10 shadow-2xl -z-10" />

              <Hero3DCore />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 lg:mt-16 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-1 text-slate-500 hover:text-indigo-400 transition-colors group"
            aria-label="Scroll to about section"
          >
            <span className="text-[11px] font-semibold tracking-wider uppercase font-mono">
              Explore Architecture
            </span>

            <ArrowDown className="w-4 h-4 animate-bounce text-slate-500 group-hover:text-indigo-400" />
          </a>
        </div>
      </div>
    </section>
  );
};