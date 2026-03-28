import React, { memo } from 'react';
export interface StreamIntegrationProps { className?: string; children?: React.ReactNode; }
export const StreamIntegration = memo(({ className, children }: StreamIntegrationProps) => (
  <div className={`sr-streamintegration ${className || ''}`}>{children}</div>
));
StreamIntegration.displayName = 'StreamIntegration';
