import React, { memo } from 'react';
export interface GuildCreatorProps { className?: string; children?: React.ReactNode; }
export const GuildCreator = memo(({ className, children }: GuildCreatorProps) => (
  <div className={`sr-guildcreator ${className || ''}`}>{children}</div>
));
GuildCreator.displayName = 'GuildCreator';
