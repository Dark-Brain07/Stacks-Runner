import React, { memo } from 'react';
export interface GuildStatisticsProps { className?: string; children?: React.ReactNode; }
export const GuildStatistics = memo(({ className, children }: GuildStatisticsProps) => (
  <div className={`sr-guildstatistics ${className || ''}`}>{children}</div>
));
GuildStatistics.displayName = 'GuildStatistics';
