import React, { memo, forwardRef } from 'react';

export interface LastSeenTrackerProps {
  className?: string;
  children?: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
}

export const LastSeenTracker = memo(forwardRef<HTMLDivElement, LastSeenTrackerProps>(
  ({ className = '', variant = 'default', size = 'md', disabled, onClick, children }, ref) => {
    const cls = ['sr-lastseentracker', `sr-lastseentracker--${variant}`, `sr-lastseentracker--${size}`, disabled ? 'sr-disabled' : '', className].filter(Boolean).join(' ');
    return (
      <div ref={ref} className={cls} onClick={disabled ? undefined : onClick} role="button" tabIndex={disabled ? -1 : 0} aria-disabled={disabled}>
        {children}
      </div>
    );
  }
));

LastSeenTracker.displayName = 'LastSeenTracker';
