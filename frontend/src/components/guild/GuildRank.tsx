import React, { memo } from 'react';
export interface GuildRankProps { className?: string; children?: React.ReactNode; }
export const GuildRank = memo(({ className, children }: GuildRankProps) => (
  <div className={`sr-guildrank ${className || ''}`}>{children}</div>
));
GuildRank.displayName = 'GuildRank';
