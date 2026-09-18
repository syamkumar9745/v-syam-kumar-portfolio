import React from 'react';

import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import { CERTIFICATIONS } from '../../data/portfolioData';

import {
  Award,
  ShieldCheck,
} from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section
      id="certifications"
      className="py-20 lg:py-28 bg-[#030712] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeader
          badge="Certifications"
          badgeIcon={<Award className="w-3.5 h-3.5" />}
          title="Certifications & Credentials"
          subtitle="Credentials supporting my focus across AI, machine learning, Python, and data science."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CERTIFICATIONS.map((cert, index) => (
            <GlassCard
              key={index}
              className="p-5 sm:p-6 border-white/10 hover:border-indigo-500/40 transition-colors"
              elevation="high"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-indigo-950/80 border border-indigo-500/40 text-indigo-400 flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>

                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-500/40 font-mono">
                  <ShieldCheck className="w-3 h-3" />
                  Verified
                </span>
              </div>

              {/* Certification */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 font-mono mb-1.5">
                  {cert.issuer}
                </p>

                <h3 className="text-base font-bold text-white leading-snug tracking-tight">
                  {cert.title}
                </h3>

                <span className="inline-block mt-3 px-2 py-1 rounded-md text-[10px] font-mono font-medium bg-slate-900 text-slate-300 border border-white/10">
                  {cert.category}
                </span>
              </div>

              {/* Skills */}
              <div className="mt-5 pt-4 border-t border-white/10">
                <p className="text-[10px] uppercase tracking-wider text-slate-500 font-mono mb-2">
                  Covered Skills
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {cert.skillsCovered.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 rounded-md text-[10px] font-mono font-medium bg-black/40 text-slate-300 border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
};