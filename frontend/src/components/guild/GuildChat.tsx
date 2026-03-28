import React, { memo } from 'react';
export interface GuildChatProps { className?: string; children?: React.ReactNode; }
export const GuildChat = memo(({ className, children }: GuildChatProps) => (
  <div className={`sr-guildchat ${className || ''}`}>{children}</div>
));
GuildChat.displayName = 'GuildChat';
