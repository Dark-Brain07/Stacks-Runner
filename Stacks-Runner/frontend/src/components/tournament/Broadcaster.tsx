import React, { memo } from 'react';
export interface BroadcasterProps { className?: string; children?: React.ReactNode; }
export const Broadcaster = memo(({ className, children }: BroadcasterProps) => (
  <div className={`sr-broadcaster ${className || ''}`}>{children}</div>
));
Broadcaster.displayName = 'Broadcaster';
