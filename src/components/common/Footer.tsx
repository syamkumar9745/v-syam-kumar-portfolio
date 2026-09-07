import React from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Github, Linkedin, Code2, Terminal, ArrowUp, Sparkles, Brain } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#02050e] border-t border-white/10 pt-16 pb-12 relative overflow-hidden text-slate-400">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-indigo-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-sm tracking-wider shadow-neon-indigo border border-indigo-400/40">
                VSK
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              AI Engineer & Machine Learning Practitioner specializing in neural networks, RAG architectures, autonomous agent workflows, and data-driven systems.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-600/20 shadow-sm transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-600/20 shadow-sm transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.leetcode}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-600/20 shadow-sm transition-all"
                aria-label="LeetCode"
              >
                <Code2 className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.hackerrank}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-600/20 shadow-sm transition-all"
                aria-label="HackerRank"
              >
                <Terminal className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#home" className="hover:text-indigo-400 transition-colors">Overview</a></li>
              <li><a href="#about" className="hover:text-indigo-400 transition-colors">About & Education</a></li>
              <li><a href="#ai-focus" className="hover:text-indigo-400 transition-colors">AI Specialization</a></li>
              <li><a href="#projects" className="hover:text-indigo-400 transition-colors">Case Studies</a></li>
              <li><a href="#skills" className="hover:text-indigo-400 transition-colors">Technical Skills</a></li>
              <li><a href="#playground" className="hover:text-indigo-400 transition-colors">AI Lab Simulator</a></li>
            </ul>
          </div>

          {/* Quick Info */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Core AI Disciplines
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><span className="text-slate-200 font-medium">Machine Learning:</span> XGBoost, Anomaly Detection</li>
              <li><span className="text-slate-200 font-medium">Generative AI:</span> RAG & Prompt Systems</li>
              <li><span className="text-slate-200 font-medium">Data Science:</span> Statistical EDA & Pandas</li>
              <li><span className="text-slate-200 font-medium">Analytics & BI:</span> SQL & Power BI</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React, TypeScript, Three.js & Tailwind CSS.</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-slate-400 hover:text-indigo-400 font-medium cursor-pointer transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
