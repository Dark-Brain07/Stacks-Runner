import React, { memo } from 'react';
export interface GuildRecruitmentProps { className?: string; children?: React.ReactNode; }
export const GuildRecruitment = memo(({ className, children }: GuildRecruitmentProps) => (
  <div className={`sr-guildrecruitment ${className || ''}`}>{children}</div>
));
GuildRecruitment.displayName = 'GuildRecruitment';
