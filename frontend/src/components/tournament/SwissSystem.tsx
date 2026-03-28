import React, { memo } from 'react';
export interface SwissSystemProps { className?: string; children?: React.ReactNode; }
export const SwissSystem = memo(({ className, children }: SwissSystemProps) => (
  <div className={`sr-swisssystem ${className || ''}`}>{children}</div>
));
SwissSystem.displayName = 'SwissSystem';
