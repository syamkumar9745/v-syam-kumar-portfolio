import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { SKILL_CATEGORIES } from '../../data/portfolioData';

import {
  Wrench,
  Code2,
  Brain,
  Database,
  BarChart3,
  Terminal,
  Search,
  Activity,
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategoryFilter, setActiveCategoryFilter] =
    useState<string>('All');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-[#C6A86B]" />;
      case 'Brain':
        return <Brain className="w-5 h-5 text-[#176B55]" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-[#C6A86B]" />;
      case 'Database':
        return <Database className="w-5 h-5 text-[#176B55]" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-[#C6A86B]" />;
      default:
        return <Terminal className="w-5 h-5 text-[#E0C58E]" />;
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

  const categories = [
    'All',
    ...SKILL_CATEGORIES.map((c) => c.title),
  ];

  return (
    <section
      id="skills"
      className="py-20 lg:py-28 bg-[#F5F0E6] text-[#111318] border-y border-[#D9D1C3] relative luxury-grid-light"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Capabilities"
          badgeIcon={<Wrench className="w-3.5 h-3.5" />}
          title="Technical Skills & Stack"
          subtitle="The languages, libraries, models, databases, and tools I use to build AI applications."
          theme="light"
        />

        {/* Search & Category Filter Controls */}
        <div className="max-w-4xl mx-auto mb-12 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-[#176B55] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter skills (e.g., Python, PyTorch, LangChain, SQL, RAG)..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-[#D9D1C3] text-sm text-[#111318] placeholder-[#9699A3] focus:outline-none focus:border-[#C6A86B] focus:ring-1 focus:ring-[#C6A86B] transition-all shadow-sm"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
            {categories.map((cat) => {
              const isActive = activeCategoryFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategoryFilter(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#111318] text-[#F5F0E6] shadow-sm border border-[#111318] font-bold'
                      : 'bg-white text-[#242730] hover:text-[#111318] hover:bg-[#FAF6EE] border border-[#D9D1C3]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl border border-[#D9D1C3] hover:border-[#C6A86B]/70 transition-all shadow-ivory-card flex flex-col"
            >
              <div className="flex items-center gap-3 mb-5 pb-3 border-b border-[#D9D1C3]">
                <div className="w-10 h-10 rounded-xl bg-[#FAF6EE] border border-[#C6A86B]/40 flex items-center justify-center flex-shrink-0">
                  {getCategoryIcon(category.icon)}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#111318]">
                    {category.title}
                  </h3>
                  <span className="text-[10px] font-mono text-[#9699A3]">
                    {category.skills.length} competencies
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-auto">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-2.5 rounded-xl bg-[#FAF6EE] border border-[#D9D1C3] hover:border-[#C6A86B]/60 transition-all flex items-center justify-between group"
                  >
                    <span className="text-xs font-semibold text-[#111318] group-hover:text-[#176B55] truncate">
                      {skill.name}
                    </span>
                    {skill.tag && (
                      <span className="text-[9px] font-mono text-[#104638] bg-emerald-50 px-1.5 py-0.5 rounded border border-[#176B55]/30 flex-shrink-0 ml-1">
                        {skill.tag}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
