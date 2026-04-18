import React, { memo } from 'react';
export interface CustomModeCardProps { className?: string; children?: React.ReactNode; }
export const CustomModeCard = memo(({ className, children }: CustomModeCardProps) => (
  <div className={`sr-custommodecard ${className || ''}`}>{children}</div>
));
CustomModeCard.displayName = 'CustomModeCard';
