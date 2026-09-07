import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import { ProjectModal } from '../modals/ProjectModal';
import { PROJECTS } from '../../data/portfolioData';
import { Project } from '../../types';
import { FolderGit2, ArrowRight, Github, Sparkles, Database, BarChart3, Brain, Layers, CheckCircle2 } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'AI / ML', 'Data Science', 'Data Analytics / BI', 'Full-Stack'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'AI / ML': return <Brain className="w-3.5 h-3.5" />;
      case 'Data Science': return <Database className="w-3.5 h-3.5" />;
      case 'Data Analytics / BI': return <BarChart3 className="w-3.5 h-3.5" />;
      default: return <Layers className="w-3.5 h-3.5" />;
    }
  };

  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#040816] border-y border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Selected Work"
          badgeIcon={<FolderGit2 className="w-3.5 h-3.5" />}
          title="Engineering Projects & Case Studies"
          subtitle="Real-world machine learning systems, statistical exploratory analyses, business intelligence pipelines, and full-stack applications."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-neon-indigo scale-105 border border-indigo-400/40'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-white/10'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <GlassCard
              key={project.id}
              className="flex flex-col justify-between p-6 sm:p-7 border-white/10 group hover:border-indigo-500/50"
              elevation="high"
            >
              <div>
                {/* Top Meta Bar */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold bg-indigo-950/80 text-indigo-300 border border-indigo-500/40 font-mono">
                    {getCategoryIcon(project.category)}
                    <span>{project.badge}</span>
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">
                    Case Study
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-bold text-white tracking-tight leading-snug group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-2 mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Highlights Preview */}
                <div className="space-y-1.5 mb-5">
                  {project.highlights.slice(0, 2).map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="line-clamp-1">{h}</span>
                    </div>
                  ))}
                </div>

                {/* Metrics Pill Row if available */}
                {project.metrics && (
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-white/10 mb-5 bg-black/20 rounded-lg">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="text-center">
                        <div className="text-[10px] text-slate-500 font-medium truncate">{metric.label}</div>
                        <div className="text-xs font-bold text-white mt-0.5">{metric.value}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-slate-900 text-slate-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-500">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between gap-2 pt-2 border-t border-white/10">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-indigo-400 hover:text-cyan-300 cursor-pointer group/btn"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Work In Progress — RAG System */}
        <div className="mt-10 max-w-3xl mx-auto">
          <div className="relative p-6 sm:p-7 rounded-2xl bg-[#0d1527] border border-dashed border-indigo-500/50 overflow-hidden">
            {/* Animated glow pulse */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 via-cyan-600/5 to-purple-600/5 rounded-2xl pointer-events-none" />

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-950 border border-indigo-500/50 flex items-center justify-center flex-shrink-0 shadow-neon-indigo">
                <Sparkles className="w-5 h-5 text-indigo-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="text-xs font-mono font-bold text-amber-400 bg-amber-950/60 border border-amber-500/40 px-2 py-0.5 rounded-full animate-pulse">
                    ⚡ In Progress
                  </span>
                  <span className="text-xs font-mono text-slate-500">RAG Systems · Generative AI</span>
                </div>
                <h4 className="text-lg font-bold text-white tracking-tight mb-1.5">
                  Domain-Specific RAG System
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Currently building a <strong className="text-cyan-300">domain-specific Retrieval-Augmented Generation (RAG) system</strong> — a knowledge-grounded LLM application engineered for precise, contextually faithful responses within a targeted subject domain. Focused on vector indexing, semantic chunking, embedding optimisation, and hallucination mitigation.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {["RAG Architecture", "Vector Embeddings", "LLM Integration", "Semantic Chunking", "Python"].map((t, i) => (
                    <span key={i} className="px-2 py-0.5 rounded text-[10px] font-mono text-indigo-300 bg-indigo-950 border border-indigo-500/30">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
