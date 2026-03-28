import React, { memo } from 'react';
export interface GuildDisbanderProps { className?: string; children?: React.ReactNode; }
export const GuildDisbander = memo(({ className, children }: GuildDisbanderProps) => (
  <div className={`sr-guilddisbander ${className || ''}`}>{children}</div>
));
GuildDisbander.displayName = 'GuildDisbander';
