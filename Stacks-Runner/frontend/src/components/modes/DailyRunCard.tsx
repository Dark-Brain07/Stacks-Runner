import React, { memo } from 'react';
export interface DailyRunCardProps { className?: string; children?: React.ReactNode; }
export const DailyRunCard = memo(({ className, children }: DailyRunCardProps) => (
  <div className={`sr-dailyruncard ${className || ''}`}>{children}</div>
));
DailyRunCard.displayName = 'DailyRunCard';
