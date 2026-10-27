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
    flat: 'bg-[#181B22]/75 border border-[#C6A86B]/15 shadow-lg',
    elevated: 'bg-[#242730]/85 border border-[#C6A86B]/20 shadow-obsidian-card',
    high: 'bg-[#242730] border border-[#C6A86B]/30 shadow-2xl'
  };

  const hoverStyles = hoverEffect
    ? 'transition-all duration-300 hover:shadow-gold hover:border-[#E0C58E]/60 hover:-translate-y-1'
    : '';

  return (
    <div
      onClick={onClick}
      className={`rounded-2xl backdrop-blur-xl relative overflow-hidden ${elevationStyles[elevation]} ${hoverStyles} ${className} ${onClick ? 'cursor-pointer' : ''}`}
    >
      {/* Subtle top inner light streak in Champagne Gold */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E0C58E]/25 to-transparent pointer-events-none" />
      {children}
    </div>
  );
};
