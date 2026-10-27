import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
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
      className="py-20 lg:py-28 bg-[#F5F0E6] text-[#111318] border-y border-[#D9D1C3] relative luxury-grid-light"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <SectionHeader
          badge="About"
          badgeIcon={<Sparkles className="w-3.5 h-3.5" />}
          title="AI / ML Engineer"
          subtitle="Building intelligent systems across Machine Learning, Generative AI, RAG, and data-driven applications."
          theme="light"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Core Profile */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 h-full bg-white rounded-2xl border border-[#D9D1C3] shadow-ivory-card hover:border-[#C6A86B]/70 transition-all">

              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#FAF6EE] border border-[#C6A86B]/40 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-[#176B55]" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-[#C6A86B] font-mono font-bold">
                    Core Profile
                  </p>

                  <h3 className="text-xl font-bold text-[#111318]">
                    {PERSONAL_INFO.name}
                  </h3>
                </div>
              </div>

              {/* Skill highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                <div className="p-4 rounded-xl bg-[#FAF6EE] border border-[#D9D1C3]/80 hover:border-[#C6A86B]/50 transition-colors">
                  <Code2 className="w-4 h-4 text-[#C6A86B] mb-3" />

                  <p className="text-sm font-bold text-[#111318]">
                    Machine Learning
                  </p>

                  <p className="text-xs text-[#242730]/75 mt-1">
                    Modeling, feature engineering & evaluation
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#FAF6EE] border border-[#D9D1C3]/80 hover:border-[#176B55]/50 transition-colors">
                  <Sparkles className="w-4 h-4 text-[#176B55] mb-3" />

                  <p className="text-sm font-bold text-[#111318]">
                    Generative AI
                  </p>

                  <p className="text-xs text-[#242730]/75 mt-1">
                    LLMs, prompting & AI workflows
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#FAF6EE] border border-[#D9D1C3]/80 hover:border-[#C6A86B]/50 transition-colors">
                  <Layers3 className="w-4 h-4 text-[#C6A86B] mb-3" />

                  <p className="text-sm font-bold text-[#111318]">
                    RAG & Retrieval
                  </p>

                  <p className="text-xs text-[#242730]/75 mt-1">
                    Chunking, embeddings & semantic search
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#FAF6EE] border border-[#D9D1C3]/80 hover:border-[#176B55]/50 transition-colors">
                  <Database className="w-4 h-4 text-[#176B55] mb-3" />

                  <p className="text-sm font-bold text-[#111318]">
                    Data Analytics
                  </p>

                  <p className="text-xs text-[#242730]/75 mt-1">
                    SQL, ETL, feature engineering & BI
                  </p>
                </div>

              </div>

              {/* Narrative */}
              <div className="mt-6 space-y-3 text-sm text-[#242730]/90 leading-relaxed border-t border-[#D9D1C3] pt-5">
                <p>
                  I am a final-year Computer Science Engineering student specializing
                  in Artificial Intelligence and Data Science at Jeppiaar University, Chennai.
                </p>

                <p>
                  My engineering journey centers around making machine learning and
                  Generative AI practically useful. I build systems that connect raw data,
                  predictive models, vector retrieval pipelines, and interactive web interfaces
                  into end-to-end intelligent software.
                </p>

                <p>
                  Whether implementing multi-agent research tools, evaluation-driven RAG systems,
                  or high-accuracy prediction models, I focus on clean architecture, verifiable performance,
                  and production quality.
                </p>
              </div>

              {/* Meta information */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6 pt-5 border-t border-[#D9D1C3]">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#9699A3]">
                    Location
                  </span>
                  <p className="text-xs font-semibold text-[#111318] mt-0.5 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#176B55]" />
                    {PERSONAL_INFO.location}
                  </p>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#9699A3]">
                    Status
                  </span>
                  <p className="text-xs font-semibold text-[#176B55] mt-0.5 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#176B55]" />
                    Open to Roles
                  </p>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#9699A3]">
                    Graduation
                  </span>
                  <p className="text-xs font-semibold text-[#111318] mt-0.5 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#C6A86B]" />
                    Expected 2027
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Education & Academic Rigor */}
          <div className="lg:col-span-5 space-y-6">

            {/* University Card */}
            <div className="p-6 sm:p-7 bg-white rounded-2xl border border-[#D9D1C3] shadow-ivory-card hover:border-[#C6A86B]/70 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#FAF6EE] border border-[#C6A86B]/40 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-[#C6A86B]" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-[#C6A86B] font-mono font-bold">
                    Formal Education
                  </p>

                  <h4 className="text-base font-bold text-[#111318]">
                    B.Tech in CSE (AI & Data Science)
                  </h4>
                </div>
              </div>

              <div className="space-y-3 mt-4">
                <div className="flex justify-between items-start text-xs border-b border-[#D9D1C3]/80 pb-2.5">
                  <span className="text-[#9699A3]">Institution</span>
                  <span className="text-right font-semibold text-[#111318]">
                    Jeppiaar University, Chennai
                  </span>
                </div>

                <div className="flex justify-between items-start text-xs border-b border-[#D9D1C3]/80 pb-2.5">
                  <span className="text-[#9699A3]">Academic Standing</span>
                  <span className="text-right font-bold text-[#176B55] font-mono">
                    8.00 CGPA
                  </span>
                </div>

                <div className="flex justify-between items-start text-xs border-b border-[#D9D1C3]/80 pb-2.5">
                  <span className="text-[#9699A3]">Duration</span>
                  <span className="text-right text-[#242730]">
                    2023 — 2027
                  </span>
                </div>

                <div className="flex justify-between items-start text-xs pb-1">
                  <span className="text-[#9699A3]">Focus</span>
                  <span className="text-right text-[#242730]">
                    Machine Learning, Neural Networks, Deep Learning, Algorithms
                  </span>
                </div>
              </div>

              {/* Coursework pill list */}
              <div className="mt-5 pt-4 border-t border-[#D9D1C3]">
                <p className="text-[10px] uppercase tracking-wider text-[#9699A3] font-mono mb-2.5">
                  Key Coursework
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Machine Learning',
                    'Deep Learning',
                    'Natural Language Processing',
                    'Data Structures & Algorithms',
                    'Database Management Systems',
                    'Big Data Analytics',
                    'Probability & Statistics',
                  ].map((course, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-[10px] font-mono font-medium text-[#111318] bg-[#FAF6EE] border border-[#D9D1C3]"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications Quick Highlight */}
            <div className="p-6 bg-white rounded-2xl border border-[#D9D1C3] shadow-ivory-card hover:border-[#C6A86B]/70 transition-all">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-bold text-[#111318] tracking-tight">
                  Verified Industry Credentials
                </h4>

                <a
                  href="#certifications"
                  className="text-xs text-[#176B55] hover:text-[#104638] font-semibold inline-flex items-center gap-1 font-mono"
                >
                  View All
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <p className="text-xs text-[#242730]/80 leading-relaxed">
                Credentials from Google, IBM, DeepLearning.AI, and HackerRank
                demonstrating continuous learning and verified skills in ML, Python, and SQL.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
