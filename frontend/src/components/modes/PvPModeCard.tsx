import React, { memo } from 'react';
export interface PvPModeCardProps { className?: string; children?: React.ReactNode; }
export const PvPModeCard = memo(({ className, children }: PvPModeCardProps) => (
  <div className={`sr-pvpmodecard ${className || ''}`}>{children}</div>
));
PvPModeCard.displayName = 'PvPModeCard';
