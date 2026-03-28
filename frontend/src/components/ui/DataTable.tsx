import React, { memo, forwardRef } from 'react';

export interface DataTableProps {
  className?: string;
  children?: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
}

export const DataTable = memo(forwardRef<HTMLDivElement, DataTableProps>(
  ({ className = '', variant = 'default', size = 'md', disabled, onClick, children }, ref) => {
    const cls = ['sr-datatable', `sr-datatable--${variant}`, `sr-datatable--${size}`, disabled ? 'sr-disabled' : '', className].filter(Boolean).join(' ');
    return (
      <div ref={ref} className={cls} onClick={disabled ? undefined : onClick} role="button" tabIndex={disabled ? -1 : 0} aria-disabled={disabled}>
        {children}
      </div>
    );
  }
));

DataTable.displayName = 'DataTable';
