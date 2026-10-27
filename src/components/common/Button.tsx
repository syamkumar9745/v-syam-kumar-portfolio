import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'neon' | 'emerald' | 'light-outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  href,
  target,
  rel,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#C6A86B] focus:ring-offset-2 focus:ring-offset-[#111318] disabled:opacity-50 disabled:cursor-not-allowed select-none group cursor-pointer";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5"
  };

  const variantStyles = {
    primary: "bg-[#C6A86B] text-[#111318] font-bold hover:bg-[#E0C58E] shadow-gold hover:shadow-gold hover:-translate-y-0.5 border border-[#E0C58E]/60",
    emerald: "bg-[#176B55] text-white font-semibold hover:bg-[#104638] shadow-emerald hover:shadow-emerald hover:-translate-y-0.5 border border-[#176B55]/50",
    neon: "bg-[#176B55] text-white font-bold hover:bg-[#104638] shadow-emerald hover:-translate-y-0.5 border border-[#228B70]/50",
    secondary: "bg-[#242730] text-[#F5F0E6] hover:bg-[#2E323E] shadow-md hover:shadow-lg hover:-translate-y-0.5 border border-[#C6A86B]/25",
    outline: "bg-[#181B22]/80 backdrop-blur-md text-[#F5F0E6] border border-[#C6A86B]/35 hover:border-[#C6A86B] hover:bg-[#C6A86B]/15 hover:text-[#E0C58E] shadow-sm hover:-translate-y-0.5",
    'light-outline': "bg-white text-[#111318] border border-[#D9D1C3] hover:border-[#C6A86B] hover:bg-[#FAF6EE] shadow-sm hover:-translate-y-0.5",
    ghost: "text-[#9699A3] hover:text-[#F5F0E6] hover:bg-white/5"
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={combinedClasses}>
        {icon && iconPosition === 'left' && <span className="transition-transform group-hover:-translate-x-0.5">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span className="transition-transform group-hover:translate-x-0.5">{icon}</span>}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {icon && iconPosition === 'left' && <span className="transition-transform group-hover:-translate-x-0.5">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="transition-transform group-hover:translate-x-0.5">{icon}</span>}
    </button>
  );
};
