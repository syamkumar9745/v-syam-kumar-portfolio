import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { GraduationCap, Brain, Sparkles, Award, Calendar, MapPin, Cpu, Zap, ArrowUpRight, BookOpen, Layers } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-24 bg-[#040816] border-y border-white/10 relative">
      {/* Background ambient neon glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Personal Introduction"
          badgeIcon={<Sparkles className="w-3.5 h-3.5" />}
          title="Engineering Intelligence, Driven by Curiosity"
          subtitle="A focused profile of technical competence, continuous evolution, and passion for production-grade AI architectures."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Clear, Short, Professional Narrative & Continuous Learning */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <GlassCard className="p-6 sm:p-8 h-full flex flex-col justify-between" elevation="high">
              <div>
                <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/10">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2.5">
                    <Brain className="w-5 h-5 text-indigo-400" />
                    <span>Profile & Core Focus</span>
                  </h3>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-950/80 text-emerald-400 border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Continuous Learner
                  </span>
                </div>

                {/* Concise, impactful narrative */}
                <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                  <p>
                    I am <strong className="text-white font-semibold">{PERSONAL_INFO.name}</strong>, an AI Engineer and final-year Computer Science undergraduate (AI & Data Science) at Jeppiaar University, Chennai.
                  </p>
                  <p>
                    Passionate about architecting end-to-end intelligent systems — from foundational data modeling and feature engineering to LLM reasoning, retrieval pipelines (RAG), and scalable full-stack integration.
                  </p>
                  <p>
                    I view engineering as an iterative science: actively expanding from machine learning models into full-stack development, continually refining prompt architectures, and mastering emerging enterprise AI paradigms.
                  </p>
                </div>

                {/* Standout Personality Quote Box */}
                <div className="mt-5 p-4 rounded-2xl bg-gradient-to-r from-indigo-950/70 via-slate-900 to-cyan-950/50 border border-indigo-500/30 flex items-center gap-3.5 shadow-md">
                  <div className="w-9 h-9 rounded-xl bg-indigo-900/60 border border-indigo-400/40 flex items-center justify-center flex-shrink-0 text-cyan-300">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-slate-400 block">Personal Philosophy</span>
                    <p className="text-xs sm:text-sm font-semibold text-white tracking-tight italic">
                      "Driven by the thrill of turning 'impossible' into reality"
                    </p>
                  </div>
                </div>
              </div>

              {/* Continuous Learning Pillars */}
              <div className="mt-8 pt-5 border-t border-white/10">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-3">
                  Ongoing Learning & Craftsmanship
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <div className="p-3 rounded-xl bg-[#0b1120] border border-white/10">
                    <div className="text-xs font-bold text-white flex items-center gap-1.5 mb-1">
                      <Zap className="w-3.5 h-3.5 text-cyan-400" />
                      <span>RAG & Retrieval</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-snug">
                      Domain vector indexing, chunking & semantic search.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#0b1120] border border-white/10">
                    <div className="text-xs font-bold text-white flex items-center gap-1.5 mb-1">
                      <Layers className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Full-Stack Skills</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-snug">
                      Pairing ML backends with responsive React UI.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#0b1120] border border-white/10">
                    <div className="text-xs font-bold text-white flex items-center gap-1.5 mb-1">
                      <BookOpen className="w-3.5 h-3.5 text-purple-400" />
                      <span>Daily Problem Solving</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-snug">
                      Consistent algorithmic practice on LeetCode.
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Right Column: Verified Academic Foundation */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <GlassCard className="p-6 sm:p-8 border-indigo-500/30 h-full flex flex-col justify-between" elevation="high">
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-950/80 border border-indigo-500/40 text-indigo-400 flex items-center justify-center shadow-neon-indigo">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-emerald-950/80 text-emerald-400 border border-emerald-500/40">
                    {PERSONAL_INFO.education.cgpa} CGPA
                  </span>
                </div>

                <div className="space-y-1 mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400 font-mono">
                    Academic Foundation
                  </span>
                  <h4 className="text-lg font-bold text-white leading-snug">
                    {PERSONAL_INFO.education.degree}
                  </h4>
                  <p className="text-sm font-medium text-cyan-300">
                    Specialization: {PERSONAL_INFO.education.specialization}
                  </p>
                </div>

                <div className="space-y-2 py-3 border-y border-white/10 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                    <span className="font-semibold text-white">{PERSONAL_INFO.education.institution}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{PERSONAL_INFO.education.status}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Graduation Target: June 2027</span>
                  </div>
                </div>

                <div className="mt-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2 font-mono">
                    Key Academic Rigour
                  </span>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {PERSONAL_INFO.education.highlights.slice(0, 3).map((point, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0"></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>Verified Credentials</span>
                <a href="#contact" className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold">
                  <span>Connect</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};
