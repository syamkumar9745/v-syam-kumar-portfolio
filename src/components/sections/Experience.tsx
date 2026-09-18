import React from 'react';

import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import { EXPERIENCES } from '../../data/portfolioData';

import {
  Briefcase,
  Calendar,
  CheckCircle2,
  ShieldCheck,
  Building2,
} from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-20 lg:py-28 bg-[#040816] border-y border-white/10 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Experience"
          badgeIcon={<Briefcase className="w-3.5 h-3.5" />}
          title="Experience & Internships"
          subtitle="Internship experience across data science, analytics, and industry-focused projects."
        />

        <div className="max-w-4xl mx-auto space-y-5">
          {EXPERIENCES.map((exp, index) => (
            <GlassCard
              key={index}
              className="p-5 sm:p-7 border-white/10 hover:border-indigo-500/40 transition-colors"
              elevation="high"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5">
                    <span className="w-9 h-9 rounded-lg bg-indigo-950/80 border border-indigo-500/40 text-indigo-400 flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-4 h-4" />
                    </span>

                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                        {exp.company}
                      </h3>

                      <p className="text-sm font-semibold text-cyan-400">
                        {exp.role}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium bg-slate-900 text-slate-300 border border-white/10">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    {exp.period}
                  </span>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-500/40">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {exp.type}
                  </span>
                </div>
              </div>

              {/* Experience Highlights */}
              <div className="mt-5 space-y-2.5">
                {exp.description.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              {exp.skills.length > 0 && (
                <div className="mt-5 pt-4 border-t border-white/10">
                  <p className="text-[10px] uppercase tracking-wider text-slate-500 font-mono mb-2.5">
                    Technologies
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-900 text-slate-200 border border-white/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};