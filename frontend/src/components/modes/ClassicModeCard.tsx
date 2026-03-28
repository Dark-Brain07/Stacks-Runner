import React, { memo } from 'react';
export interface ClassicModeCardProps { className?: string; children?: React.ReactNode; }
export const ClassicModeCard = memo(({ className, children }: ClassicModeCardProps) => (
  <div className={`sr-classicmodecard ${className || ''}`}>{children}</div>
));
ClassicModeCard.displayName = 'ClassicModeCard';
