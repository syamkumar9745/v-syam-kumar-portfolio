import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import { PERSONAL_INFO } from '../../data/portfolioData';
import {
  GraduationCap,
  Brain,
  Sparkles,
  Calendar,
  MapPin,
  Database,
  Code2,
  Layers3,
  ArrowUpRight,
} from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 lg:py-24 bg-[#040816] border-y border-white/10 relative"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <SectionHeader
          badge="About"
          badgeIcon={<Sparkles className="w-3.5 h-3.5" />}
          title="AI / ML Engineer"
          subtitle="Building intelligent systems across Machine Learning, Generative AI, RAG, and data-driven applications."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Core Profile */}
          <div className="lg:col-span-7">
            <GlassCard className="p-6 sm:p-8 h-full" elevation="high">

              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-indigo-950/80 border border-indigo-500/40 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-indigo-400" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-indigo-400 font-mono font-bold">
                    Core Profile
                  </p>

                  <h3 className="text-xl font-bold text-white">
                    {PERSONAL_INFO.name}
                  </h3>
                </div>
              </div>

              {/* Skill highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                <div className="p-4 rounded-xl bg-[#0b1120] border border-white/10">
                  <Code2 className="w-4 h-4 text-cyan-400 mb-3" />

                  <p className="text-sm font-bold text-white">
                    Machine Learning
                  </p>

                  <p className="text-xs text-slate-400 mt-1">
                    Modeling, feature engineering & evaluation
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0b1120] border border-white/10">
                  <Sparkles className="w-4 h-4 text-indigo-400 mb-3" />

                  <p className="text-sm font-bold text-white">
                    Generative AI
                  </p>

                  <p className="text-xs text-slate-400 mt-1">
                    LLMs, prompting & AI workflows
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0b1120] border border-white/10">
                  <Layers3 className="w-4 h-4 text-purple-400 mb-3" />

                  <p className="text-sm font-bold text-white">
                    RAG & Retrieval
                  </p>

                  <p className="text-xs text-slate-400 mt-1">
                    Chunking, embeddings & semantic search
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0b1120] border border-white/10">
                  <Database className="w-4 h-4 text-emerald-400 mb-3" />

                  <p className="text-sm font-bold text-white">
                    Data & Applications
                  </p>

                  <p className="text-xs text-slate-400 mt-1">
                    Python, SQL, APIs & interactive interfaces
                  </p>
                </div>

              </div>

              {/* Technical keywords */}
              <div className="mt-6 pt-5 border-t border-white/10">
                <p className="text-xs uppercase tracking-wider text-slate-500 font-mono font-bold mb-3">
                  Technical Focus
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    'Python',
                    'Machine Learning',
                    'Generative AI',
                    'RAG',
                    'LLMs',
                    'Embeddings',
                    'Vector Search',
                    'SQL',
                    'React',
                    'Data Science',
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium text-slate-300 bg-white/5 border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </GlassCard>
          </div>

          {/* Education */}
          <div className="lg:col-span-5">
            <GlassCard
              className="p-6 sm:p-8 h-full border-indigo-500/30"
              elevation="high"
            >

              <div className="flex items-start justify-between gap-4 mb-6">

                <div className="w-11 h-11 rounded-xl bg-indigo-950/80 border border-indigo-500/40 text-indigo-400 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>

                <div className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-950/80 text-emerald-400 border border-emerald-500/40">
                  {PERSONAL_INFO.education.cgpa} CGPA
                </div>

              </div>

              <p className="text-xs uppercase tracking-wider text-indigo-400 font-mono font-bold">
                Education
              </p>

              <h3 className="text-xl font-bold text-white mt-2 leading-snug">
                {PERSONAL_INFO.education.degree}
              </h3>

              <p className="text-sm font-medium text-cyan-300 mt-1">
                {PERSONAL_INFO.education.specialization}
              </p>

              <div className="mt-6 space-y-3">

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />

                  <div>
                    <p className="text-sm font-semibold text-white">
                      {PERSONAL_INFO.education.institution}
                    </p>

                    <p className="text-xs text-slate-500">
                      Chennai, India
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-indigo-400 flex-shrink-0" />

                  <p className="text-sm text-slate-300">
                    Final Year • Graduation 2027
                  </p>
                </div>

              </div>

              {/* Academic areas */}
              <div className="mt-6 pt-5 border-t border-white/10">

                <p className="text-xs uppercase tracking-wider text-slate-500 font-mono font-bold mb-3">
                  Academic Foundation
                </p>

                <div className="space-y-2">
                  {PERSONAL_INFO.education.highlights
                    .slice(0, 3)
                    .map((point, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />

                        <p className="text-xs text-slate-300 leading-relaxed">
                          {point}
                        </p>
                      </div>
                    ))}
                </div>

              </div>

              {/* Connect */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">

                <span className="text-xs text-slate-500 font-mono">
                  Open to AI / ML opportunities
                </span>

                <a
                  href="#contact"
                  className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 text-xs font-semibold transition-colors"
                >
                  Connect
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