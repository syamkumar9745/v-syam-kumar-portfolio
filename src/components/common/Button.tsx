import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'neon';
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
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-[#030712] disabled:opacity-50 disabled:cursor-not-allowed select-none group cursor-pointer";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5"
  };

  const variantStyles = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-500 shadow-neon-indigo hover:shadow-lg hover:-translate-y-0.5 border border-indigo-400/40",
    neon: "bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 shadow-neon-cyan hover:shadow-lg hover:-translate-y-0.5 border border-cyan-300/40",
    secondary: "bg-slate-800/90 text-white hover:bg-slate-700 shadow-md hover:shadow-lg hover:-translate-y-0.5 border border-white/10",
    outline: "bg-slate-900/60 backdrop-blur-md text-slate-200 border border-white/15 hover:border-indigo-400 hover:bg-indigo-500/10 hover:text-white shadow-sm hover:-translate-y-0.5",
    ghost: "text-slate-300 hover:text-white hover:bg-white/10"
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
