import React, { memo } from 'react';
export interface ZenModeCardProps { className?: string; children?: React.ReactNode; }
export const ZenModeCard = memo(({ className, children }: ZenModeCardProps) => (
  <div className={`sr-zenmodecard ${className || ''}`}>{children}</div>
));
ZenModeCard.displayName = 'ZenModeCard';
