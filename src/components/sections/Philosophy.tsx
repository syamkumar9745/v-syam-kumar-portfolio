import React from 'react';

import { SectionHeader } from '../common/SectionHeader';

import {
  Compass,
  Search,
  PenTool,
  Code2,
  TrendingUp,
} from 'lucide-react';

const steps = [
  {
    icon: <Search className="w-5 h-5 text-indigo-400" />,
    title: 'Understand',
    desc: 'Define the problem, data, constraints, and measurable goals.',
  },
  {
    icon: <PenTool className="w-5 h-5 text-cyan-400" />,
    title: 'Design',
    desc: 'Choose the right architecture, models, data flow, and interfaces.',
  },
  {
    icon: <Code2 className="w-5 h-5 text-purple-400" />,
    title: 'Build',
    desc: 'Write modular code with validation, reproducibility, and efficiency in mind.',
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-emerald-400" />,
    title: 'Improve',
    desc: 'Evaluate results, identify gaps, and iterate using measurable feedback.',
  },
];

export const Philosophy: React.FC = () => {
  return (
    <section
      id="philosophy"
      className="py-16 lg:py-24 bg-[#040816] border-y border-white/10 relative"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Engineering Approach"
          badgeIcon={<Compass className="w-3.5 h-3.5" />}
          title="How I Build"
          subtitle="A simple approach to solving technical problems."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-[#080d1a] border border-white/10 hover:border-indigo-500/40 transition-colors group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#030712] border border-white/10 flex items-center justify-center group-hover:border-indigo-500/40 transition-colors">
                  {step.icon}
                </div>

                <span className="text-[10px] font-mono font-bold text-slate-500 tracking-widest">
                  0{index + 1}
                </span>
              </div>

              <h3 className="text-base font-bold text-white mb-2 tracking-tight">
                {step.title}
              </h3>

              <p className="text-xs text-slate-400 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};