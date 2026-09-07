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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-xl overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#090d16] text-white rounded-3xl shadow-2xl border border-white/15 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header Bar */}
        <div className="px-6 py-5 bg-[#0b1120] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-indigo-950/80 text-indigo-300 border border-indigo-500/40">
              {project.category}
            </span>
            <span className="text-xs font-semibold text-slate-400 font-mono">
              Engineering Case Study Deep Dive
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
              {project.title}
            </h3>
            <p className="text-base text-cyan-400 font-medium mt-1">
              {project.tagline}
            </p>
          </div>

          {/* Project Metrics Grid */}
          {project.metrics && (
            <div className="grid grid-cols-3 gap-3">
              {project.metrics.map((metric, i) => (
                <div key={i} className="p-3 rounded-xl bg-[#0d1527] border border-white/10 text-center">
                  <div className="text-xs text-slate-400 font-medium">{metric.label}</div>
                  <div className="text-lg sm:text-xl font-bold text-white mt-0.5">{metric.value}</div>
                </div>
              ))}
            </div>
          )}

          {/* Overview Narrative */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
              Problem Statement & System Objectives
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.fullOverview}
            </p>
          </div>

          {/* Key Contributions & Highlights */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
              Key Engineering Highlights & Implementation
            </h4>
            <div className="space-y-2">
              {project.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#0d1527] border border-white/10 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Pipeline */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
              Technical Pipeline Flow
            </h4>
            <div className="flex flex-wrap items-center gap-2">
              {project.architectureSummary.map((step, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="px-3 py-1.5 rounded-lg bg-slate-850 bg-slate-900 border border-white/10 text-xs font-mono font-medium text-indigo-300">
                    {i + 1}. {step}
                  </span>
                  {i < project.architectureSummary.length - 1 && (
                    <span className="text-slate-500 text-xs">➔</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Key Contribution Quote */}
          <div className="p-4 rounded-2xl bg-indigo-950/50 border border-indigo-500/40 shadow-neon-indigo">
            <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-300 block mb-1 font-mono">
              Personal Engineering Contribution
            </span>
            <p className="text-xs text-slate-200 font-medium leading-relaxed">
              "{project.keyContribution}"
            </p>
          </div>

          {/* Technology Stack */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2 font-mono">
              Technology Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span key={i} className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-800 text-slate-200 border border-white/10">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 py-4 bg-[#0b1120] border-t border-white/10 flex items-center justify-between">
          <div className="text-xs text-slate-400">
            Engineered by <strong className="text-white">V. Syam Kumar</strong>
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-all shadow-neon-indigo"
              >
                <Github className="w-3.5 h-3.5" />
                <span>View on GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
