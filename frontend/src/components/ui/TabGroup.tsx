import React, { memo, forwardRef } from 'react';

export interface TabGroupProps {
  className?: string;
  children?: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
}

export const TabGroup = memo(forwardRef<HTMLDivElement, TabGroupProps>(
  ({ className = '', variant = 'default', size = 'md', disabled, onClick, children }, ref) => {
    const cls = ['sr-tabgroup', `sr-tabgroup--${variant}`, `sr-tabgroup--${size}`, disabled ? 'sr-disabled' : '', className].filter(Boolean).join(' ');
    return (
      <div ref={ref} className={cls} onClick={disabled ? undefined : onClick} role="button" tabIndex={disabled ? -1 : 0} aria-disabled={disabled}>
        {children}
      </div>
    );
  }
));

TabGroup.displayName = 'TabGroup';
