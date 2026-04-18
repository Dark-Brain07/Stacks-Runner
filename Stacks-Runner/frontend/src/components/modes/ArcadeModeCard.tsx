import React, { memo } from 'react';
export interface ArcadeModeCardProps { className?: string; children?: React.ReactNode; }
export const ArcadeModeCard = memo(({ className, children }: ArcadeModeCardProps) => (
  <div className={`sr-arcademodecard ${className || ''}`}>{children}</div>
));
ArcadeModeCard.displayName = 'ArcadeModeCard';
