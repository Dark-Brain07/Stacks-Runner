import React, { memo } from 'react';
export interface GuildPermissionProps { className?: string; children?: React.ReactNode; }
export const GuildPermission = memo(({ className, children }: GuildPermissionProps) => (
  <div className={`sr-guildpermission ${className || ''}`}>{children}</div>
));
GuildPermission.displayName = 'GuildPermission';
