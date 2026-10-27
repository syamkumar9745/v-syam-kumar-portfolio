import React, { useState } from 'react';

import { SectionHeader } from '../common/SectionHeader';
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
  ExternalLink,
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
        return <Brain className="w-3.5 h-3.5 text-[#C6A86B]" />;
      case 'Data Science':
        return <Database className="w-3.5 h-3.5 text-[#176B55]" />;
      case 'Data Analytics / BI':
        return <BarChart3 className="w-3.5 h-3.5 text-[#E0C58E]" />;
      default:
        return <Layers className="w-3.5 h-3.5 text-[#C6A86B]" />;
    }
  };

  return (
    <section
      id="projects"
      className="py-20 lg:py-28 bg-[#111318] border-y border-[#242730] relative luxury-grid-dark"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeader
          badge="Selected Work"
          badgeIcon={<FolderGit2 className="w-3.5 h-3.5" />}
          title="Projects That Show What I Build"
          subtitle="Machine learning, Generative AI, data analytics, and application development."
          theme="dark"
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
                    ? 'bg-[#C6A86B] text-[#111318] shadow-gold border border-[#E0C58E]/60 font-bold'
                    : 'bg-[#242730] text-[#9699A3] hover:text-[#F5F0E6] hover:bg-[#2E323E] border border-[#C6A86B]/20'
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
            <div
              key={project.id}
              className="p-5 sm:p-6 flex flex-col group bg-[#242730] rounded-2xl border border-[#C6A86B]/20 hover:border-[#E0C58E]/60 transition-all duration-300 shadow-obsidian-card relative overflow-hidden"
            >
              {/* Subtle top inner light streak in gold */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E0C58E]/25 to-transparent pointer-events-none" />

              {/* Category */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-bold bg-[#181B22] text-[#E0C58E] border border-[#C6A86B]/30 font-mono">
                  {getCategoryIcon(project.category)}
                  {project.badge}
                </span>

                {project.liveDemoUrl && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[#176B55] bg-[#176B55]/15 px-2 py-0.5 rounded-full border border-[#176B55]/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#176B55] animate-pulse" />
                    Live Demo
                  </span>
                )}
              </div>

              {/* Title & Tagline */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-[#F5F0E6] group-hover:text-[#E0C58E] transition-colors leading-tight">
                  {project.title}
                </h3>

                <p className="text-xs font-semibold text-[#C6A86B] mt-1 font-mono">
                  {project.tagline}
                </p>

                <p className="text-xs text-[#9699A3] mt-2.5 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Metrics */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="grid grid-cols-2 gap-2 mb-4 p-2.5 rounded-xl bg-[#181B22]/80 border border-[#C6A86B]/15">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="text-left">
                      <span className="text-[10px] uppercase font-mono text-[#9699A3]">
                        {m.label}
                      </span>
                      <p className="text-xs font-bold text-[#F5F0E6]">
                        {m.value}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Architecture Summary (Pill Flow) */}
              {project.architectureSummary && project.architectureSummary.length > 0 && (
                <div className="mb-4">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#9699A3] block mb-1.5">
                    Pipeline Flow
                  </span>
                  <div className="flex flex-wrap items-center gap-1 text-[10px] font-mono text-[#D9D1C3]">
                    {project.architectureSummary.map((step, idx) => (
                      <React.Fragment key={idx}>
                        <span className="px-2 py-0.5 rounded bg-[#181B22] border border-[#C6A86B]/20">
                          {step}
                        </span>
                        {idx < project.architectureSummary.length - 1 && (
                          <span className="text-[#C6A86B]">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 mb-5 mt-auto pt-2">
                {project.technologies.slice(0, 4).map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#181B22] text-[#D9D1C3] border border-[#242730]"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-[#9699A3]">
                    +{project.technologies.length - 4}
                  </span>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-3 border-t border-[#C6A86B]/15 gap-2">
                <div className="flex items-center gap-2">
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#176B55] hover:bg-[#104638] text-white text-xs font-semibold shadow-emerald transition-all border border-[#176B55]/50 font-mono"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#181B22] hover:bg-[#2E323E] border border-[#C6A86B]/30 text-[#F5F0E6] text-xs font-semibold transition-all font-mono"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setActiveModalProject(project)}
                  className="text-xs font-semibold text-[#C6A86B] hover:text-[#E0C58E] inline-flex items-center gap-1 cursor-pointer font-mono ml-auto"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Deep Dive */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      </div>
    </section>
  );
};
