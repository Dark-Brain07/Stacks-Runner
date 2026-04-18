import React, { memo } from 'react';
export interface EliminationTrackerProps { className?: string; children?: React.ReactNode; }
export const EliminationTracker = memo(({ className, children }: EliminationTrackerProps) => (
  <div className={`sr-eliminationtracker ${className || ''}`}>{children}</div>
));
EliminationTracker.displayName = 'EliminationTracker';
