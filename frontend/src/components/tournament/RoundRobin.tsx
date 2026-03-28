import React, { memo } from 'react';
export interface RoundRobinProps { className?: string; children?: React.ReactNode; }
export const RoundRobin = memo(({ className, children }: RoundRobinProps) => (
  <div className={`sr-roundrobin ${className || ''}`}>{children}</div>
));
RoundRobin.displayName = 'RoundRobin';
