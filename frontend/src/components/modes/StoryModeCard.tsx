import React, { memo } from 'react';
export interface StoryModeCardProps { className?: string; children?: React.ReactNode; }
export const StoryModeCard = memo(({ className, children }: StoryModeCardProps) => (
  <div className={`sr-storymodecard ${className || ''}`}>{children}</div>
));
StoryModeCard.displayName = 'StoryModeCard';
