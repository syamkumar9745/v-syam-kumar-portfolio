import React from 'react';

interface SectionHeaderProps {
  badge: string;
  badgeIcon?: React.ReactNode;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  theme?: 'dark' | 'light';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  badgeIcon,
  title,
  subtitle,
  align = 'center',
  theme = 'dark',
  className = ''
}) => {
  const isLight = theme === 'light';

  return (
    <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center mx-auto max-w-3xl' : 'text-left max-w-2xl'} ${className}`}>
      {/* Badge */}
      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase shadow-sm backdrop-blur-md mb-4 ${
        align === 'center' ? 'mx-auto' : ''
      } ${
        isLight
          ? 'bg-white border border-[#C6A86B]/40 text-[#111318]'
          : 'bg-[#242730]/90 border border-[#C6A86B]/30 text-[#E0C58E]'
      }`}>
        {badgeIcon && <span className={isLight ? 'text-[#176B55]' : 'text-[#C6A86B]'}>{badgeIcon}</span>}
        <span>{badge}</span>
      </div>

      {/* Main Title */}
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] ${
        isLight ? 'text-[#111318]' : 'text-[#F5F0E6]'
      }`}>
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed font-normal ${
          isLight ? 'text-[#242730]/80' : 'text-[#9699A3]'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
