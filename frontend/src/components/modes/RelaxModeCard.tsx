import React, { memo } from 'react';
export interface RelaxModeCardProps { className?: string; children?: React.ReactNode; }
export const RelaxModeCard = memo(({ className, children }: RelaxModeCardProps) => (
  <div className={`sr-relaxmodecard ${className || ''}`}>{children}</div>
));
RelaxModeCard.displayName = 'RelaxModeCard';
