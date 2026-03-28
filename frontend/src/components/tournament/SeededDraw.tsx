import React, { memo } from 'react';
export interface SeededDrawProps { className?: string; children?: React.ReactNode; }
export const SeededDraw = memo(({ className, children }: SeededDrawProps) => (
  <div className={`sr-seededdraw ${className || ''}`}>{children}</div>
));
SeededDraw.displayName = 'SeededDraw';
