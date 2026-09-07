import React from 'react';
import { Sparkles, Brain, Cpu, Database, Layers, Network, Terminal, Code2, Zap } from 'lucide-react';

export const InfiniteMarquee: React.FC = () => {
  const rollerItems = [
    { label: "Obsessed with Systems", icon: <Network className="w-4 h-4 text-cyan-400" />, glow: "border-cyan-500/30 text-cyan-300" },
    { label: "Driven by turning 'impossible' into reality", icon: <Sparkles className="w-4 h-4 text-amber-300" />, glow: "border-amber-400/50 text-amber-200 bg-gradient-to-r from-amber-950/40 via-indigo-950/40 to-cyan-950/40" },
    { label: "Machine Learning (ML)", icon: <Brain className="w-4 h-4 text-indigo-400" />, glow: "border-indigo-500/30 text-indigo-300" },
    { label: "Deep Learning (DL)", icon: <Cpu className="w-4 h-4 text-purple-400" />, glow: "border-purple-500/30 text-purple-300" },
    { label: "Large Language Models (LLM)", icon: <Sparkles className="w-4 h-4 text-amber-400" />, glow: "border-amber-500/30 text-amber-300" },
    { label: "Full-Stack Engineering", icon: <Layers className="w-4 h-4 text-emerald-400" />, glow: "border-emerald-500/30 text-emerald-300" },
    { label: "Vector RAG & Embeddings", icon: <Database className="w-4 h-4 text-sky-400" />, glow: "border-sky-500/30 text-sky-300" },
    { label: "Autonomous AI Agents", icon: <Zap className="w-4 h-4 text-pink-400" />, glow: "border-pink-500/30 text-pink-300" },
    { label: "Scalable Production Code", icon: <Terminal className="w-4 h-4 text-teal-400" />, glow: "border-teal-500/30 text-teal-300" },
  ];

  // Duplicate for seamless infinite loop
  const allItems = [...rollerItems, ...rollerItems];

  return (
    <div className="relative w-full overflow-hidden py-6 border-y border-white/10 bg-[#030712]/90 backdrop-blur-xl z-20">
      {/* Edge gradient masks for smooth fade in/out */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#030712] via-[#030712]/90 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#030712] via-[#030712]/90 to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="flex w-max animate-marquee space-x-4 items-center">
        {allItems.map((item, idx) => (
          <div
            key={idx}
            className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#080d1a] border ${item.glow} shadow-lg backdrop-blur-md transition-transform hover:scale-105 select-none`}
          >
            {item.icon}
            <span className="text-xs sm:text-sm font-mono font-bold tracking-tight text-white whitespace-nowrap">
              {item.label}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse ml-1"></span>
          </div>
        ))}
      </div>
    </div>
  );
};
