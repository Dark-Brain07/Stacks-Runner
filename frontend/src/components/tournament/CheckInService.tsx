import React, { memo } from 'react';
export interface CheckInServiceProps { className?: string; children?: React.ReactNode; }
export const CheckInService = memo(({ className, children }: CheckInServiceProps) => (
  <div className={`sr-checkinservice ${className || ''}`}>{children}</div>
));
CheckInService.displayName = 'CheckInService';
