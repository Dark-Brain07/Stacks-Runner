import React, { memo } from 'react';
export interface GuildInviteProps { className?: string; children?: React.ReactNode; }
export const GuildInvite = memo(({ className, children }: GuildInviteProps) => (
  <div className={`sr-guildinvite ${className || ''}`}>{children}</div>
));
GuildInvite.displayName = 'GuildInvite';
