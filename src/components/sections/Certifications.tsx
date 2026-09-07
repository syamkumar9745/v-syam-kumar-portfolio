import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import { CERTIFICATIONS } from '../../data/portfolioData';
import { Award, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 lg:py-28 bg-[#030712] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Verified Accreditations"
          badgeIcon={<Award className="w-3.5 h-3.5" />}
          title="Professional Certifications"
          subtitle="Validated certifications across Prompt Engineering, Machine Learning, Python Data Science, and core IT architectures."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <GlassCard
              key={index}
              className="p-6 border-white/10 flex flex-col justify-between hover:border-indigo-500/50"
              elevation="high"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-950/80 border border-indigo-500/40 text-indigo-400 flex items-center justify-center shadow-neon-indigo">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-500/40 font-mono">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Verified</span>
                  </span>
                </div>

                <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 block mb-1 font-mono">
                  {cert.issuer}
                </span>

                <h3 className="text-base font-bold text-white leading-snug tracking-tight mb-2">
                  {cert.title}
                </h3>

                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-slate-900 text-slate-300 border border-white/10 mb-4">
                  {cert.category}
                </span>
              </div>

              <div>
                <div className="pt-3 border-t border-white/10">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-2 font-mono">
                    Skills Validated:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {cert.skillsCovered.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-black/40 text-slate-300 border border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
