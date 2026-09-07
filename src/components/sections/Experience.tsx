import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import { EXPERIENCES } from '../../data/portfolioData';
import { Briefcase, Calendar, CheckCircle2, ShieldCheck, Building2 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 lg:py-28 bg-[#040816] border-y border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Career Progression"
          badgeIcon={<Briefcase className="w-3.5 h-3.5" />}
          title="Practical Experience & Internships"
          subtitle="Hands-on internship roles, virtual analytics programs, and industry data simulations."
        />

        <div className="max-w-4xl mx-auto space-y-6">
          {EXPERIENCES.map((exp, index) => (
            <GlassCard
              key={index}
              className="p-6 sm:p-8 border-white/10 relative hover:border-indigo-500/50"
              elevation="high"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-indigo-950/80 border border-indigo-500/40 text-indigo-400 flex items-center justify-center font-bold text-xs">
                      <Building2 className="w-4 h-4" />
                    </span>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {exp.company}
                    </h3>
                  </div>
                  <p className="text-sm font-semibold text-cyan-400">
                    {exp.role}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-900 text-slate-300 border border-white/10">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{exp.period}</span>
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-500/40 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{exp.type}</span>
                  </span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-2.5 pt-2 mb-5">
                {exp.description.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Tech Badges */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2 font-mono">
                  Applied Stack:
                </span>
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-900 text-slate-200 border border-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
