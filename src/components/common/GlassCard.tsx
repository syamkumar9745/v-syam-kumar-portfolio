import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  elevation?: 'flat' | 'elevated' | 'high';
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  hoverEffect = true,
  elevation = 'elevated',
  onClick
}) => {
  const elevationStyles = {
    flat: 'bg-[#0b1120]/70 border border-white/10 shadow-lg',
    elevated: 'bg-[#0d1527]/80 border border-white/10 shadow-glass-dark',
    high: 'bg-[#0f172a]/90 border border-white/15 shadow-2xl'
  };

  const hoverStyles = hoverEffect
    ? 'transition-all duration-300 hover:shadow-glass-dark-hover hover:border-indigo-500/50 hover:-translate-y-1'
    : '';

  return (
    <div
      onClick={onClick}
      className={`rounded-2xl backdrop-blur-xl relative overflow-hidden ${elevationStyles[elevation]} ${hoverStyles} ${className} ${onClick ? 'cursor-pointer' : ''}`}
    >
      {/* Subtle top inner light streak */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
      {children}
    </div>
  );
};
