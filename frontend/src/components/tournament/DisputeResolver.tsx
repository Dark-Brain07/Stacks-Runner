import React, { memo } from 'react';
export interface DisputeResolverProps { className?: string; children?: React.ReactNode; }
export const DisputeResolver = memo(({ className, children }: DisputeResolverProps) => (
  <div className={`sr-disputeresolver ${className || ''}`}>{children}</div>
));
DisputeResolver.displayName = 'DisputeResolver';
