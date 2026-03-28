import React, { memo } from 'react';
export interface PracticeModeCardProps { className?: string; children?: React.ReactNode; }
export const PracticeModeCard = memo(({ className, children }: PracticeModeCardProps) => (
  <div className={`sr-practicemodecard ${className || ''}`}>{children}</div>
));
PracticeModeCard.displayName = 'PracticeModeCard';
