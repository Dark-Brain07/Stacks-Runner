import React, { memo } from 'react';
export interface GuildAchievementProps { className?: string; children?: React.ReactNode; }
export const GuildAchievement = memo(({ className, children }: GuildAchievementProps) => (
  <div className={`sr-guildachievement ${className || ''}`}>{children}</div>
));
GuildAchievement.displayName = 'GuildAchievement';
