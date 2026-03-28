import React, { memo } from 'react';
export interface GuildRosterProps { className?: string; children?: React.ReactNode; }
export const GuildRoster = memo(({ className, children }: GuildRosterProps) => (
  <div className={`sr-guildroster ${className || ''}`}>{children}</div>
));
GuildRoster.displayName = 'GuildRoster';
