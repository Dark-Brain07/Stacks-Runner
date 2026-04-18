import React, { memo } from 'react';
export interface TimeTrialModeCardProps { className?: string; children?: React.ReactNode; }
export const TimeTrialModeCard = memo(({ className, children }: TimeTrialModeCardProps) => (
  <div className={`sr-timetrialmodecard ${className || ''}`}>{children}</div>
));
TimeTrialModeCard.displayName = 'TimeTrialModeCard';
