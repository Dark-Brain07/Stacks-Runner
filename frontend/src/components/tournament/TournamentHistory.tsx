import React, { memo } from 'react';
export interface TournamentHistoryProps { className?: string; children?: React.ReactNode; }
export const TournamentHistory = memo(({ className, children }: TournamentHistoryProps) => (
  <div className={`sr-tournamenthistory ${className || ''}`}>{children}</div>
));
TournamentHistory.displayName = 'TournamentHistory';
