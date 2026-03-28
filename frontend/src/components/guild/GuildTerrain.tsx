import React, { memo } from 'react';
export interface GuildTerrainProps { className?: string; children?: React.ReactNode; }
export const GuildTerrain = memo(({ className, children }: GuildTerrainProps) => (
  <div className={`sr-guildterrain ${className || ''}`}>{children}</div>
));
GuildTerrain.displayName = 'GuildTerrain';
