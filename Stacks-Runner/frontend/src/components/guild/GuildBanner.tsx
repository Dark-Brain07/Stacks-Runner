import React, { memo } from 'react';
export interface GuildBannerProps { className?: string; children?: React.ReactNode; }
export const GuildBanner = memo(({ className, children }: GuildBannerProps) => (
  <div className={`sr-guildbanner ${className || ''}`}>{children}</div>
));
GuildBanner.displayName = 'GuildBanner';
