import React, { memo } from 'react';
export interface RankedModeCardProps { className?: string; children?: React.ReactNode; }
export const RankedModeCard = memo(({ className, children }: RankedModeCardProps) => (
  <div className={`sr-rankedmodecard ${className || ''}`}>{children}</div>
));
RankedModeCard.displayName = 'RankedModeCard';
