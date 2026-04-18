import React, { memo } from 'react';
export interface TutorialModeCardProps { className?: string; children?: React.ReactNode; }
export const TutorialModeCard = memo(({ className, children }: TutorialModeCardProps) => (
  <div className={`sr-tutorialmodecard ${className || ''}`}>{children}</div>
));
TutorialModeCard.displayName = 'TutorialModeCard';
