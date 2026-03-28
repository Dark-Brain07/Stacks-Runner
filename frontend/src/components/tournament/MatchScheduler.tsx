import React, { memo } from 'react';
export interface MatchSchedulerProps { className?: string; children?: React.ReactNode; }
export const MatchScheduler = memo(({ className, children }: MatchSchedulerProps) => (
  <div className={`sr-matchscheduler ${className || ''}`}>{children}</div>
));
MatchScheduler.displayName = 'MatchScheduler';
