import React, { memo } from 'react';
export interface BossRushCardProps { className?: string; children?: React.ReactNode; }
export const BossRushCard = memo(({ className, children }: BossRushCardProps) => (
  <div className={`sr-bossrushcard ${className || ''}`}>{children}</div>
));
BossRushCard.displayName = 'BossRushCard';
