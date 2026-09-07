import React from 'react';

interface SectionHeaderProps {
  badge: string;
  badgeIcon?: React.ReactNode;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  badgeIcon,
  title,
  subtitle,
  align = 'center',
  className = ''
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center mx-auto max-w-3xl' : 'text-left max-w-2xl'} ${className}`}>
      {/* Dark Neon Badge */}
      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 shadow-sm backdrop-blur-md mb-4 ${align === 'center' ? 'mx-auto' : ''}`}>
        {badgeIcon && <span className="text-cyan-400">{badgeIcon}</span>}
        <span>{badge}</span>
      </div>

      {/* Main Title with Gradient Accents */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};
