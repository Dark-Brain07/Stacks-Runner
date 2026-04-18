import React, { memo } from 'react';
export interface TeamRegistrationProps { className?: string; children?: React.ReactNode; }
export const TeamRegistration = memo(({ className, children }: TeamRegistrationProps) => (
  <div className={`sr-teamregistration ${className || ''}`}>{children}</div>
));
TeamRegistration.displayName = 'TeamRegistration';
