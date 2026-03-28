import React, { memo } from 'react';
export interface GuildAllianceProps { className?: string; children?: React.ReactNode; }
export const GuildAlliance = memo(({ className, children }: GuildAllianceProps) => (
  <div className={`sr-guildalliance ${className || ''}`}>{children}</div>
));
GuildAlliance.displayName = 'GuildAlliance';
