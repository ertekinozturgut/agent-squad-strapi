import React, { forwardRef } from 'react';
import { Loader2 } from 'lucide-react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'signal' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      disabled,
      children,
      leftIcon,
      rightIcon,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all duration-150 select-none ' +
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark focus-visible:ring-offset-2 ' +
      'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none active:scale-[0.99] rounded-[2px]';

    const sizeStyles = {
      sm: 'text-xs px-3 py-1.5 gap-1.5 font-mono',
      md: 'text-sm px-4 py-2.5 gap-2',
      lg: 'text-base px-6 py-3.5 gap-2.5 font-semibold',
    };

    const variantStyles = {
      primary:
        'bg-dark text-white hover:bg-black border border-dark shadow-sm',
      secondary:
        'bg-white text-ink hover:bg-canvas border border-border-light shadow-sm',
      signal:
        'bg-signal text-dark hover:bg-signal-hover border border-signal font-mono font-semibold shadow-sm',
      dark:
        'bg-dark text-white hover:bg-black border border-dark/90 font-mono tracking-wider shadow-sm',
      outline:
        'bg-transparent text-ink hover:text-dark border border-ink/20 hover:border-ink hover:bg-canvas-subtle/50',
      ghost:
        'bg-transparent text-ink-muted hover:text-ink hover:bg-canvas-subtle/60',
      danger:
        'bg-brand-crimson text-white hover:bg-brand-crimson-hover border border-brand-crimson shadow-sm',
    };

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || isLoading}
        aria-busy={isLoading}
        className={twMerge(
          clsx(
            baseStyles,
            sizeStyles[size],
            variantStyles[variant],
            isLoading && 'cursor-wait opacity-80',
            className
          )
        )}
        {...props}
      >
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
            <span>{children}</span>
          </>
        ) : (
          <>
            {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
