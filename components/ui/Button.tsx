import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** primary: black pill (use on white/light bg). inverse: white pill (use on blue/black bg). */
  variant?: 'primary' | 'inverse' | 'outline' | 'ghost';
  showArrow?: boolean;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  showArrow = false,
  fullWidth = false,
  className = '',
  ...props
}) => {
  const base =
    'group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-[0.95rem] font-semibold tracking-tight transition-all duration-300 ease-editorial active:scale-[0.98]';

  const variants = {
    primary: 'bg-ink text-white hover:bg-blue',
    inverse: 'bg-white text-ink hover:bg-blue-tint',
    outline: 'bg-transparent text-ink border-2 border-ink hover:bg-ink hover:text-white',
    ghost: 'bg-transparent text-ink-soft hover:text-ink',
  } as const;

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${base} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      <span className="inline-flex items-center gap-2">
        {children}
        {showArrow && (
          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </span>
    </button>
  );
};
