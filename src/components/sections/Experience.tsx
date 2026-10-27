import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
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
      className="py-20 lg:py-28 bg-[#F5F0E6] text-[#111318] border-y border-[#D9D1C3] relative luxury-grid-light"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Experience"
          badgeIcon={<Briefcase className="w-3.5 h-3.5" />}
          title="Experience & Internships"
          subtitle="Internship experience across data science, analytics, and industry-focused projects."
          theme="light"
        />

        <div className="max-w-4xl mx-auto space-y-5">
          {EXPERIENCES.map((exp, index) => (
            <div
              key={index}
              className="p-5 sm:p-7 bg-white rounded-2xl border border-[#D9D1C3] hover:border-[#C6A86B]/70 transition-all shadow-ivory-card"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5">
                    <span className="w-9 h-9 rounded-lg bg-[#FAF6EE] border border-[#C6A86B]/40 text-[#176B55] flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-4 h-4" />
                    </span>

                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#111318] tracking-tight">
                        {exp.company}
                      </h3>

                      <p className="text-sm font-semibold text-[#176B55] font-mono">
                        {exp.role}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium bg-[#FAF6EE] text-[#111318] border border-[#D9D1C3]">
                    <Calendar className="w-3.5 h-3.5 text-[#C6A86B]" />
                    {exp.period}
                  </span>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-[#104638] border border-[#176B55]/30">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#176B55]" />
                    {exp.type}
                  </span>
                </div>
              </div>

              {/* Experience Highlights */}
              <div className="mt-5 space-y-2.5">
                {exp.description.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-[#242730]/90 leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#176B55] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              {exp.skills.length > 0 && (
                <div className="mt-5 pt-4 border-t border-[#D9D1C3]">
                  <p className="text-[10px] uppercase tracking-wider text-[#9699A3] font-mono mb-2.5">
                    Technologies
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2.5 py-1 rounded-md text-[10px] font-mono font-medium text-[#111318] bg-[#FAF6EE] border border-[#D9D1C3]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
