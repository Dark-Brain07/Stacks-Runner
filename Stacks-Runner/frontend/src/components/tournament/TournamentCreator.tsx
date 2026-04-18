import React, { memo } from 'react';
export interface TournamentCreatorProps { className?: string; children?: React.ReactNode; }
export const TournamentCreator = memo(({ className, children }: TournamentCreatorProps) => (
  <div className={`sr-tournamentcreator ${className || ''}`}>{children}</div>
));
TournamentCreator.displayName = 'TournamentCreator';
