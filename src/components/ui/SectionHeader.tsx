import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  tag?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  variant?: 'light' | 'dark';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  className,
  tag,
  title,
  description,
  align = 'left',
  variant = 'light',
  ...props
}) => {
  const isDark = variant === 'dark';

  return (
    <div
      className={twMerge(
        clsx(
          'mb-12',
          align === 'center' ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl',
          className
        )
      )}
      {...props}
    >
      {tag && (
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 bg-signal rounded-none" />
          <span
            className={clsx(
              'font-mono text-xs uppercase tracking-widest',
              isDark ? 'text-dark-border text-neutral-400' : 'text-ink-muted'
            )}
          >
            {tag}
          </span>
        </div>
      )}
      <h2
        className={clsx(
          'text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight',
          isDark ? 'text-white' : 'text-ink'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            'mt-3 text-base sm:text-lg font-normal leading-relaxed',
            isDark ? 'text-neutral-400' : 'text-ink-muted'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};
