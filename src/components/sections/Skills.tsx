import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import { SKILL_CATEGORIES } from '../../data/portfolioData';

import {
  Wrench,
  Code2,
  Brain,
  Database,
  BarChart3,
  Terminal,
  Search,
  Sparkles,
  Activity,
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategoryFilter, setActiveCategoryFilter] =
    useState<string>('All');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-indigo-400" />;
      case 'Brain':
        return <Brain className="w-5 h-5 text-purple-400" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-cyan-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-sky-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-amber-400" />;
      default:
        return <Terminal className="w-5 h-5 text-emerald-400" />;
    }
  };

  const filteredCategories = SKILL_CATEGORIES
    .map((category) => {
      const matchingSkills = category.skills.filter((skill) => {
        const query = searchQuery.toLowerCase();

        return (
          skill.name.toLowerCase().includes(query) ||
          (skill.tag && skill.tag.toLowerCase().includes(query))
        );
      });

      return {
        ...category,
        skills: matchingSkills,
      };
    })
    .filter((category) => {
      const matchesFilter =
        activeCategoryFilter === 'All' ||
        category.title === activeCategoryFilter;

      return matchesFilter && category.skills.length > 0;
    });

  return (
    <section
      id="skills"
      className="py-20 lg:py-28 bg-[#030712] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeader
          badge="Technical Skills"
          badgeIcon={<Wrench className="w-3.5 h-3.5" />}
          title="Skills & Technologies"
          subtitle="A focused technical stack across AI, machine learning, data, and application development."
        />

        {/* Search + Filters */}
        <div className="max-w-3xl mx-auto mb-10 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Python, ML, RAG, SQL, Power BI, React..."
              className="w-full pl-11 pr-12 py-3 rounded-2xl bg-[#0b1120] border border-white/15 text-sm text-white focus:outline-none focus:border-indigo-500 shadow-glass-dark placeholder:text-slate-500"
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

          <div className="flex flex-wrap items-center justify-center gap-2">
            {['All', ...SKILL_CATEGORIES.map((category) => category.title)].map(
              (title) => {
                const isActive = activeCategoryFilter === title;

                return (
                  <button
                    key={title}
                    onClick={() => setActiveCategoryFilter(title)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-indigo-600 text-white shadow-neon-indigo'
                        : 'bg-slate-900/80 text-slate-400 hover:text-white border border-white/10'
                    }`}
                  >
                    {title}
                  </button>
                );
              }
            )}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCategories.map((category, index) => (
            <GlassCard
              key={index}
              className="p-5 sm:p-6 border-white/10 hover:border-indigo-500/40 transition-colors"
              elevation="high"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between gap-3 mb-5">
                <div>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {category.title}
                  </h3>

                  <p className="text-xs text-slate-400 mt-1">
                    {category.subtitle}
                  </p>
                </div>

                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center shadow-lg flex-shrink-0">
                  {getCategoryIcon(category.icon)}
                </div>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="px-3 py-1.5 rounded-xl bg-[#0b1120]/80 border border-white/10 hover:border-indigo-500/40 transition-colors"
                  >
                    <span className="text-xs font-semibold text-white">
                      {skill.name}
                    </span>

                    {skill.tag && (
                      <span className="block text-[10px] text-slate-500 mt-0.5 leading-tight">
                        {skill.tag}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Card Footer */}
              <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-mono">
                  {category.skills.length} skills
                </span>

                <span className="text-[11px] text-cyan-400 font-semibold flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Technical Focus
                </span>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Empty Search State */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-sm text-slate-400">
              No matching skills found.
            </p>

            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategoryFilter('All');
              }}
              className="mt-3 text-sm text-indigo-400 hover:text-indigo-300"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};