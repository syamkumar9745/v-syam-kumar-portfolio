import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import { SKILL_CATEGORIES } from '../../data/portfolioData';
import { Wrench, Code2, Brain, Database, BarChart3, Terminal, Search, Sparkles, Activity, Info } from 'lucide-react';

export const Skills: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('All');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5 text-indigo-400" />;
      case 'Brain': return <Brain className="w-5 h-5 text-purple-400" />;
      case 'Activity': return <Activity className="w-5 h-5 text-cyan-400" />;
      case 'Database': return <Database className="w-5 h-5 text-sky-400" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5 text-amber-400" />;
      default: return <Terminal className="w-5 h-5 text-emerald-400" />;
    }
  };

  const filteredCategories = SKILL_CATEGORIES.map((category) => {
    const matchingSkills = category.skills.filter((skill) => {
      return (
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (skill.tag && skill.tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    });
    return { ...category, skills: matchingSkills };
  }).filter((category) => {
    const matchesFilter = activeCategoryFilter === 'All' || category.title === activeCategoryFilter;
    return matchesFilter && category.skills.length > 0;
  });

  return (
    <section id="skills" className="py-20 lg:py-28 bg-[#030712] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Technical Stack"
          badgeIcon={<Wrench className="w-3.5 h-3.5" />}
          title="Technical Skills Ecosystem"
          subtitle="A structured overview of programming languages, machine learning frameworks, data science tools, and development environments."
        />

        {/* Full-Stack Callout Banner */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#0d1527] border border-indigo-500/30 text-sm">
            <Info className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              <strong className="text-white">Note:</strong> I have recently started working on{' '}
              <strong className="text-indigo-300">Full-Stack Development</strong> — currently deepening proficiency
              in React, Node.js, and REST API design alongside my primary AI & ML engineering focus.
            </p>
          </div>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="max-w-3xl mx-auto mb-12 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g. Python, XGBoost, SQL, Power BI, React)..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-[#0b1120] border border-white/15 text-sm text-white focus:outline-none focus:border-indigo-500 shadow-glass-dark placeholder:text-slate-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
            {['All', ...SKILL_CATEGORIES.map((c) => c.title)].map((title) => {
              const isActive = activeCategoryFilter === title;
              return (
                <button
                  key={title}
                  onClick={() => setActiveCategoryFilter(title)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-neon-indigo'
                      : 'bg-slate-900/80 text-slate-400 hover:text-white border border-white/10'
                  }`}
                >
                  {title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skill Bento Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, index) => (
            <GlassCard
              key={index}
              className="p-6 sm:p-7 border-white/10 flex flex-col justify-between hover:border-indigo-500/40"
              elevation="high"
            >
              <div>
                {/* Card Header */}
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {category.subtitle}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center shadow-lg flex-shrink-0">
                    {getCategoryIcon(category.icon)}
                  </div>
                </div>

                {/* Skills Tags — clean, no level badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="px-3 py-1.5 rounded-xl bg-[#0b1120]/80 border border-white/10 hover:border-indigo-500/40 transition-colors"
                    >
                      <span className="text-xs font-semibold text-white">{skill.name}</span>
                      {skill.tag && (
                        <span className="block text-[10px] text-slate-500 mt-0.5 leading-tight">{skill.tag}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-white/10 text-[11px] text-slate-500 font-mono flex items-center justify-between">
                <span>{category.skills.length} technologies</span>
                <span className="text-cyan-400 font-semibold flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Active Focus
                </span>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
