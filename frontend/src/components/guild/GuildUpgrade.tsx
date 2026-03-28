import React, { memo } from 'react';
export interface GuildUpgradeProps { className?: string; children?: React.ReactNode; }
export const GuildUpgrade = memo(({ className, children }: GuildUpgradeProps) => (
  <div className={`sr-guildupgrade ${className || ''}`}>{children}</div>
));
GuildUpgrade.displayName = 'GuildUpgrade';
