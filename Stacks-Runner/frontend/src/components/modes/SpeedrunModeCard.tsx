import React, { memo } from 'react';
export interface SpeedrunModeCardProps { className?: string; children?: React.ReactNode; }
export const SpeedrunModeCard = memo(({ className, children }: SpeedrunModeCardProps) => (
  <div className={`sr-speedrunmodecard ${className || ''}`}>{children}</div>
));
SpeedrunModeCard.displayName = 'SpeedrunModeCard';
