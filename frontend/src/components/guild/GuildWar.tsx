import React, { memo } from 'react';
export interface GuildWarProps { className?: string; children?: React.ReactNode; }
export const GuildWar = memo(({ className, children }: GuildWarProps) => (
  <div className={`sr-guildwar ${className || ''}`}>{children}</div>
));
GuildWar.displayName = 'GuildWar';
