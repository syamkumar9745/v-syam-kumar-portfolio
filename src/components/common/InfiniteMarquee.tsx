import React from 'react';
import { Sparkles, Brain, Cpu, Database, Layers, Network, Terminal, Zap } from 'lucide-react';

export const InfiniteMarquee: React.FC = () => {
  const rollerItems = [
    { label: "Obsessed with Systems", icon: <Network className="w-4 h-4 text-[#C6A86B]" />, glow: "border-[#C6A86B]/30 text-[#F5F0E6]" },
    { label: "Driven by turning 'impossible' into reality", icon: <Sparkles className="w-4 h-4 text-[#E0C58E]" />, glow: "border-[#C6A86B]/50 text-[#F5F0E6] bg-gradient-to-r from-[#242730] via-[#181B22] to-[#111318]" },
    { label: "Machine Learning (ML)", icon: <Brain className="w-4 h-4 text-[#176B55]" />, glow: "border-[#C6A86B]/30 text-[#F5F0E6]" },
    { label: "Deep Learning (DL)", icon: <Cpu className="w-4 h-4 text-[#C6A86B]" />, glow: "border-[#C6A86B]/40 text-[#F5F0E6]" },
    { label: "Large Language Models (LLM)", icon: <Sparkles className="w-4 h-4 text-[#E0C58E]" />, glow: "border-[#C6A86B]/40 text-[#F5F0E6]" },
    { label: "Full-Stack Engineering", icon: <Layers className="w-4 h-4 text-[#C6A86B]" />, glow: "border-[#C6A86B]/30 text-[#F5F0E6]" },
    { label: "Vector RAG & Embeddings", icon: <Database className="w-4 h-4 text-[#176B55]" />, glow: "border-[#C6A86B]/30 text-[#F5F0E6]" },
    { label: "Autonomous AI Agents", icon: <Zap className="w-4 h-4 text-[#E0C58E]" />, glow: "border-[#C6A86B]/40 text-[#F5F0E6]" },
    { label: "Scalable Production Code", icon: <Terminal className="w-4 h-4 text-[#C6A86B]" />, glow: "border-[#C6A86B]/30 text-[#F5F0E6]" },
  ];

  const allItems = [...rollerItems, ...rollerItems];

  return (
    <div className="relative w-full overflow-hidden py-6 border-y border-[#C6A86B]/20 bg-[#181B22]/95 backdrop-blur-xl z-20">
      {/* Edge gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#111318] via-[#111318]/90 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#111318] via-[#111318]/90 to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="flex w-max animate-marquee space-x-4 items-center">
        {allItems.map((item, idx) => (
          <div
            key={idx}
            className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#242730] border ${item.glow} shadow-sm backdrop-blur-md transition-transform hover:scale-105 select-none`}
          >
            {item.icon}
            <span className="text-xs sm:text-sm font-mono font-bold tracking-tight text-[#F5F0E6] whitespace-nowrap">
              {item.label}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#176B55] animate-pulse ml-1" />
          </div>
        ))}
      </div>
    </div>
  );
};
