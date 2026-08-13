import React from 'react';
import { ArrowRight } from 'lucide-react';

type CommonProps = {
  /** primary: black pill (use on white/light bg). inverse: white pill (use on blue/black bg). */
  variant?: 'primary' | 'inverse' | 'outline' | 'ghost';
  showArrow?: boolean;
  fullWidth?: boolean;
  /**
   * Real, JS-independent destination. When set, renders an `<a>` instead of a
   * `<button>` so the click still goes somewhere if the Cal.com embed script
   * (which normally intercepts the click and opens the modal) fails to load.
   */
  href?: string;
};

type ButtonProps = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement> & React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps>;

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  showArrow = false,
  fullWidth = false,
  href,
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
  const classes = `${base} ${variants[variant]} ${widthClass} ${className}`;

  const content = (
    <span className="inline-flex items-center gap-2">
      {children}
      {showArrow && (
        <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </span>
  );

  if (href) {
    return (
      <a href={href} className={classes} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
};
