import React, { memo, forwardRef } from 'react';

export interface TimelineProps {
  className?: string;
  children?: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
}

export const Timeline = memo(forwardRef<HTMLDivElement, TimelineProps>(
  ({ className = '', variant = 'default', size = 'md', disabled, onClick, children }, ref) => {
    const cls = ['sr-timeline', `sr-timeline--${variant}`, `sr-timeline--${size}`, disabled ? 'sr-disabled' : '', className].filter(Boolean).join(' ');
    return (
      <div ref={ref} className={cls} onClick={disabled ? undefined : onClick} role="button" tabIndex={disabled ? -1 : 0} aria-disabled={disabled}>
        {children}
      </div>
    );
  }
));

Timeline.displayName = 'Timeline';
