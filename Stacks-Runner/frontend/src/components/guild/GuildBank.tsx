import React, { memo } from 'react';
export interface GuildBankProps { className?: string; children?: React.ReactNode; }
export const GuildBank = memo(({ className, children }: GuildBankProps) => (
  <div className={`sr-guildbank ${className || ''}`}>{children}</div>
));
GuildBank.displayName = 'GuildBank';
