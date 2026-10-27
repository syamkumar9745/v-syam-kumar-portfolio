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
    icon: <Search className="w-5 h-5 text-[#C6A86B]" />,
    title: 'Understand',
    desc: 'Define the problem, data, constraints, and measurable goals.',
  },
  {
    icon: <PenTool className="w-5 h-5 text-[#E0C58E]" />,
    title: 'Design',
    desc: 'Choose the right architecture, models, data flow, and interfaces.',
  },
  {
    icon: <Code2 className="w-5 h-5 text-[#176B55]" />,
    title: 'Build',
    desc: 'Write modular code with validation, reproducibility, and efficiency in mind.',
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-[#C6A86B]" />,
    title: 'Improve',
    desc: 'Evaluate results, identify gaps, and iterate using measurable feedback.',
  },
];

export const Philosophy: React.FC = () => {
  return (
    <section
      id="philosophy"
      className="py-16 lg:py-24 bg-[#111318] border-y border-[#242730] relative luxury-grid-dark"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Engineering Approach"
          badgeIcon={<Compass className="w-3.5 h-3.5" />}
          title="How I Build"
          subtitle="A disciplined approach to solving technical problems."
          theme="dark"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-[#242730] border border-[#C6A86B]/20 hover:border-[#E0C58E]/60 transition-all group shadow-obsidian-card relative overflow-hidden"
            >
              {/* Subtle top inner light streak */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E0C58E]/20 to-transparent pointer-events-none" />

              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#181B22] border border-[#C6A86B]/30 flex items-center justify-center group-hover:border-[#C6A86B]/70 transition-colors">
                  {step.icon}
                </div>

                <span className="text-[10px] font-mono font-bold text-[#C6A86B] tracking-widest">
                  0{index + 1}
                </span>
              </div>

              <h3 className="text-base font-bold text-[#F5F0E6] mb-2 tracking-tight">
                {step.title}
              </h3>

              <p className="text-xs text-[#9699A3] leading-relaxed group-hover:text-[#D9D1C3] transition-colors">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
