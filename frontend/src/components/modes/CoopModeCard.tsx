import React, { memo } from 'react';
export interface CoopModeCardProps { className?: string; children?: React.ReactNode; }
export const CoopModeCard = memo(({ className, children }: CoopModeCardProps) => (
  <div className={`sr-coopmodecard ${className || ''}`}>{children}</div>
));
CoopModeCard.displayName = 'CoopModeCard';
