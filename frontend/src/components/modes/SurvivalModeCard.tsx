import React, { memo } from 'react';
export interface SurvivalModeCardProps { className?: string; children?: React.ReactNode; }
export const SurvivalModeCard = memo(({ className, children }: SurvivalModeCardProps) => (
  <div className={`sr-survivalmodecard ${className || ''}`}>{children}</div>
));
SurvivalModeCard.displayName = 'SurvivalModeCard';
