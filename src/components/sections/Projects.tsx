import React, { useState } from 'react';

import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import { ProjectModal } from '../modals/ProjectModal';
import { PROJECTS } from '../../data/portfolioData';
import { Project } from '../../types';

import {
  FolderGit2,
  ArrowRight,
  Github,
  Sparkles,
  Database,
  BarChart3,
  Brain,
  Layers,
  CheckCircle2,
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    'All',
    'AI / ML',
    'Data Science',
    'Data Analytics / BI',
    'Full-Stack',
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI / ML':
        return <Brain className="w-3.5 h-3.5" />;
      case 'Data Science':
        return <Database className="w-3.5 h-3.5" />;
      case 'Data Analytics / BI':
        return <BarChart3 className="w-3.5 h-3.5" />;
      default:
        return <Layers className="w-3.5 h-3.5" />;
    }
  };

  return (
    <section
      id="projects"
      className="py-20 lg:py-28 bg-[#040816] border-y border-white/10 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeader
          badge="Selected Work"
          badgeIcon={<FolderGit2 className="w-3.5 h-3.5" />}
          title="Projects That Show What I Build"
          subtitle="Machine learning, Generative AI, data analytics, and application development."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((category) => {
            const isActive = selectedCategory === category;

            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-neon-indigo border border-indigo-400/40'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-white/10'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {filteredProjects.map((project) => (
            <GlassCard
              key={project.id}
              className="p-5 sm:p-6 flex flex-col group border-white/10 hover:border-indigo-500/50 transition-all duration-300"
              elevation="high"
            >
              {/* Category */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-bold bg-indigo-950/80 text-indigo-300 border border-indigo-500/40 font-mono">
                  {getCategoryIcon(project.category)}
                  {project.badge}
                </span>

                <span className="text-[10px] text-slate-600 font-mono">
                  PROJECT
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-white leading-snug group-hover:text-cyan-300 transition-colors">
                {project.title}
              </h3>

              {/* Short description */}
              <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed line-clamp-2">
                {project.description}
              </p>

              {/* Key highlights */}
              <div className="mt-4 space-y-2">
                {project.highlights.slice(0, 2).map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 text-xs text-slate-300"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 flex-shrink-0" />

                    <span className="line-clamp-2">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>

              {/* Metrics */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="grid grid-cols-3 gap-2 mt-4 py-3 border-y border-white/10">
                  {project.metrics.slice(0, 3).map((metric, index) => (
                    <div key={index} className="text-center">
                      <p className="text-[9px] text-slate-500 uppercase tracking-wide truncate">
                        {metric.label}
                      </p>

                      <p className="text-xs font-bold text-white mt-1 truncate">
                        {metric.value}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Technology Stack */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.technologies.slice(0, 5).map((technology, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 rounded-md text-[10px] font-mono font-medium text-slate-300 bg-slate-900 border border-white/10"
                  >
                    {technology}
                  </span>
                ))}

                {project.technologies.length > 5 && (
                  <span className="px-2 py-1 text-[10px] font-mono text-slate-500">
                    +{project.technologies.length - 5}
                  </span>
                )}
              </div>

              {/* Actions */}
              <div className="mt-auto pt-5 flex items-center justify-between border-t border-white/10 mt-5">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-400 hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  View Details
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs transition-colors"
                      aria-label={`Open ${project.title} live demo`}
                    >
                      Live Demo
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github className="w-3.5 h-3.5" />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Current Focus */}
        <div className="mt-10 max-w-4xl mx-auto">
          <div className="relative p-5 sm:p-6 rounded-2xl bg-[#0d1527] border border-dashed border-indigo-500/40 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 via-cyan-600/5 to-purple-600/5 pointer-events-none" />

            <div className="relative flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-950 border border-indigo-500/50 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5 text-indigo-400" />
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="text-[10px] font-mono font-bold text-amber-400 bg-amber-950/60 border border-amber-500/40 px-2 py-1 rounded-full">
                    IN PROGRESS
                  </span>

                  <span className="text-[10px] font-mono text-slate-500">
                    Generative AI • RAG
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-white">
                  Domain-Specific RAG System
                </h4>

                <p className="text-xs sm:text-sm text-slate-400 mt-1.5 leading-relaxed">
                  Building a knowledge-grounded AI application focused on
                  document ingestion, semantic chunking, embeddings, retrieval,
                  and LLM-based response generation.
                </p>

                <div className="flex flex-wrap gap-1.5 mt-3">
                  {[
                    'RAG',
                    'Embeddings',
                    'Vector Search',
                    'LLMs',
                    'Python',
                  ].map((technology) => (
                    <span
                      key={technology}
                      className="px-2 py-1 rounded-md text-[10px] font-mono text-indigo-300 bg-indigo-950 border border-indigo-500/30"
                    >
                      {technology}
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
