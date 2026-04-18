import React, { memo } from 'react';
export interface GuildEventProps { className?: string; children?: React.ReactNode; }
export const GuildEvent = memo(({ className, children }: GuildEventProps) => (
  <div className={`sr-guildevent ${className || ''}`}>{children}</div>
));
GuildEvent.displayName = 'GuildEvent';
