import React, { memo } from 'react';
export interface GuildAuditProps { className?: string; children?: React.ReactNode; }
export const GuildAudit = memo(({ className, children }: GuildAuditProps) => (
  <div className={`sr-guildaudit ${className || ''}`}>{children}</div>
));
GuildAudit.displayName = 'GuildAudit';
