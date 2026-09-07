import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { Compass, Search, PenTool, Code2, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: <Search className="w-5 h-5 text-indigo-400" />,
    title: "Understand",
    desc: "Dissect the problem domain, audit data quality, and define measurable success criteria before writing a single line of code."
  },
  {
    icon: <PenTool className="w-5 h-5 text-cyan-400" />,
    title: "Design",
    desc: "Architect clean, decoupled pipelines with the right ML model, data schema, and user-facing API surface."
  },
  {
    icon: <Code2 className="w-5 h-5 text-purple-400" />,
    title: "Build",
    desc: "Implement with modular, type-safe code — prioritising defensive validation, reproducibility, and computational efficiency."
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-emerald-400" />,
    title: "Improve",
    desc: "Evaluate outputs against real benchmarks, refine prompts and embeddings, and iterate based on quantitative feedback."
  },
];

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-16 lg:py-24 bg-[#040816] border-y border-white/10 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Engineering Methodology"
          badgeIcon={<Compass className="w-3.5 h-3.5" />}
          title="How I Build"
          subtitle="Four principles. Consistent, rigorous, and repeatable."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-[#080d1a] border border-white/10 hover:border-indigo-500/40 transition-colors group"
            >
              <div className="w-9 h-9 rounded-xl bg-[#030712] border border-white/10 flex items-center justify-center mb-4 group-hover:border-indigo-500/40 transition-colors">
                {step.icon}
              </div>
              <span className="text-[10px] font-mono font-bold text-slate-500 tracking-widest">0{i + 1}</span>
              <h3 className="text-base font-bold text-white mt-0.5 mb-2 tracking-tight">{step.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
