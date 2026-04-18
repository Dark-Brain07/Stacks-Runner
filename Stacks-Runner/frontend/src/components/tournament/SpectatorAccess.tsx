import React, { memo } from 'react';
export interface SpectatorAccessProps { className?: string; children?: React.ReactNode; }
export const SpectatorAccess = memo(({ className, children }: SpectatorAccessProps) => (
  <div className={`sr-spectatoraccess ${className || ''}`}>{children}</div>
));
SpectatorAccess.displayName = 'SpectatorAccess';
