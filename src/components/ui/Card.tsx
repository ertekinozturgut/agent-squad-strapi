import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
  bordered?: boolean;
  variant?: 'light' | 'dark';
}

export const Card: React.FC<CardProps> = ({
  className,
  hoverable = false,
  bordered = true,
  variant = 'light',
  children,
  ...props
}) => {
  const variantStyles = {
    light: 'bg-white text-ink border-border-light',
    dark: 'bg-dark-card text-white border-border-dark',
  };

  return (
    <div
      className={twMerge(
        clsx(
          'rounded-[2px] p-6 transition-all duration-200',
          variantStyles[variant],
          bordered && 'border',
          hoverable &&
            'hover:-translate-y-[1px] hover:shadow-sm',
          className
        )
      )}
      {...props}
    >
      {children}
    </div>
  );
};
