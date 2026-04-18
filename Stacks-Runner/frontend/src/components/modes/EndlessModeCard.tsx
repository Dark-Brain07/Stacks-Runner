import React, { memo } from 'react';
export interface EndlessModeCardProps { className?: string; children?: React.ReactNode; }
export const EndlessModeCard = memo(({ className, children }: EndlessModeCardProps) => (
  <div className={`sr-endlessmodecard ${className || ''}`}>{children}</div>
));
EndlessModeCard.displayName = 'EndlessModeCard';
