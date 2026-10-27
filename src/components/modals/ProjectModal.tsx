import React from 'react';
import { Project } from '../../types';
import { X, Github, ExternalLink, CheckCircle2, Layers, Cpu, Database, BarChart3, Code2, ArrowUpRight } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-xl overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#111318] text-[#F5F0E6] rounded-3xl shadow-2xl border border-[#C6A86B]/30 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header Bar */}
        <div className="px-6 py-5 bg-[#181B22] border-b border-[#C6A86B]/20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#242730] text-[#E0C58E] border border-[#C6A86B]/40">
              {project.category}
            </span>
            <span className="text-xs font-semibold text-[#9699A3] font-mono">
              Engineering Deep Dive
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#242730] hover:bg-[#2E323E] border border-[#C6A86B]/30 flex items-center justify-center text-[#F5F0E6] hover:text-[#E0C58E] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F5F0E6] tracking-tight leading-tight">
              {project.title}
            </h3>
            <p className="text-base text-[#C6A86B] font-medium mt-1 font-mono">
              {project.tagline}
            </p>
          </div>

          {/* Project Metrics Grid */}
          {project.metrics && (
            <div className="grid grid-cols-3 gap-3">
              {project.metrics.map((metric, i) => (
                <div key={i} className="p-3 rounded-xl bg-[#181B22] border border-[#C6A86B]/20 text-center">
                  <div className="text-xs text-[#9699A3] font-medium font-mono">{metric.label}</div>
                  <div className="text-lg sm:text-xl font-bold text-[#F5F0E6] mt-0.5">{metric.value}</div>
                </div>
              ))}
            </div>
          )}

          {/* Overview Narrative */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C6A86B] font-mono">
              Problem Statement & System Objectives
            </h4>
            <p className="text-sm text-[#D9D1C3]/90 leading-relaxed">
              {project.fullOverview}
            </p>
          </div>

          {/* Key Contributions & Highlights */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C6A86B] font-mono">
              Key Engineering Highlights & Implementation
            </h4>
            <div className="space-y-2">
              {project.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#181B22] border border-[#242730] text-xs text-[#D9D1C3]">
                  <CheckCircle2 className="w-4 h-4 text-[#176B55] flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Pipeline */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C6A86B] font-mono">
              Technical Pipeline Flow
            </h4>
            <div className="flex flex-wrap items-center gap-2">
              {project.architectureSummary.map((step, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="px-3 py-1.5 rounded-lg bg-[#181B22] border border-[#C6A86B]/25 text-xs font-mono font-medium text-[#F5F0E6]">
                    {i + 1}. {step}
                  </span>
                  {i < project.architectureSummary.length - 1 && (
                    <span className="text-[#C6A86B] text-xs">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C6A86B] font-mono">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-lg bg-[#181B22] border border-[#242730] text-xs font-mono font-semibold text-[#D9D1C3]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Bar */}
        <div className="px-6 py-4 bg-[#181B22] border-t border-[#C6A86B]/20 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#176B55] hover:bg-[#104638] text-white text-xs font-semibold shadow-emerald transition-all border border-[#176B55]/50 font-mono"
              >
                <span>Live Interactive Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#242730] hover:bg-[#2E323E] border border-[#C6A86B]/30 text-[#F5F0E6] hover:text-[#E0C58E] text-xs font-semibold transition-all font-mono"
              >
                <Github className="w-4 h-4 text-[#C6A86B]" />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-[#9699A3] hover:text-[#F5F0E6] transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
