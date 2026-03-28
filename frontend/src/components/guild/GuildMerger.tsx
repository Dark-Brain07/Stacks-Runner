import React, { memo } from 'react';
export interface GuildMergerProps { className?: string; children?: React.ReactNode; }
export const GuildMerger = memo(({ className, children }: GuildMergerProps) => (
  <div className={`sr-guildmerger ${className || ''}`}>{children}</div>
));
GuildMerger.displayName = 'GuildMerger';
