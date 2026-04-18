import React, { memo } from 'react';
export interface WeeklyChallengeCardProps { className?: string; children?: React.ReactNode; }
export const WeeklyChallengeCard = memo(({ className, children }: WeeklyChallengeCardProps) => (
  <div className={`sr-weeklychallengecard ${className || ''}`}>{children}</div>
));
WeeklyChallengeCard.displayName = 'WeeklyChallengeCard';
