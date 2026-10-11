import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'crimson' | 'cobalt' | 'emerald' | 'amber' | 'neutral' | 'signal' | 'dark' | 'outline';
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'default',
  size = 'md',
  children,
  ...props
}) => {
  const sizeStyles = {
    sm: 'text-[10px] px-2 py-0.5 rounded-[2px] font-mono tracking-wider',
    md: 'text-xs px-2.5 py-0.5 rounded-[2px] font-mono tracking-wider',
  };

  const variantStyles = {
    default: 'bg-canvas-subtle text-ink border border-border-light',
    signal: 'bg-signal text-dark border border-signal font-semibold',
    dark: 'bg-dark text-white border border-dark/80',
    outline: 'bg-transparent text-ink border border-border-light',
    crimson: 'bg-brand-crimson-subtle text-red-700 border border-brand-crimson/30',
    cobalt: 'bg-brand-cobalt-subtle text-blue-700 border border-brand-cobalt/30',
    emerald: 'bg-emerald-100 text-emerald-800 border border-emerald-300',
    amber: 'bg-amber-100 text-amber-800 border border-amber-300',
    neutral: 'bg-white text-ink border border-border-light',
  };

  return (
    <span
      className={twMerge(
        clsx(
          'inline-flex items-center gap-1 font-medium select-none uppercase tracking-wider',
          sizeStyles[size],
          variantStyles[variant],
          className
        )
      )}
      {...props}
    >
      {children}
    </span>
  );
};
