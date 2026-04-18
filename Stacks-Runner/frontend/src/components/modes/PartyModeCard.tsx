import React, { memo } from 'react';
export interface PartyModeCardProps { className?: string; children?: React.ReactNode; }
export const PartyModeCard = memo(({ className, children }: PartyModeCardProps) => (
  <div className={`sr-partymodecard ${className || ''}`}>{children}</div>
));
PartyModeCard.displayName = 'PartyModeCard';
