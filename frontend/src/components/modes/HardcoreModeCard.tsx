import React, { memo } from 'react';
export interface HardcoreModeCardProps { className?: string; children?: React.ReactNode; }
export const HardcoreModeCard = memo(({ className, children }: HardcoreModeCardProps) => (
  <div className={`sr-hardcoremodecard ${className || ''}`}>{children}</div>
));
HardcoreModeCard.displayName = 'HardcoreModeCard';
