import React, { memo } from 'react';
export interface GuildDonationProps { className?: string; children?: React.ReactNode; }
export const GuildDonation = memo(({ className, children }: GuildDonationProps) => (
  <div className={`sr-guilddonation ${className || ''}`}>{children}</div>
));
GuildDonation.displayName = 'GuildDonation';
