import React, { memo } from 'react';
export interface ScoreReporterProps { className?: string; children?: React.ReactNode; }
export const ScoreReporter = memo(({ className, children }: ScoreReporterProps) => (
  <div className={`sr-scorereporter ${className || ''}`}>{children}</div>
));
ScoreReporter.displayName = 'ScoreReporter';
