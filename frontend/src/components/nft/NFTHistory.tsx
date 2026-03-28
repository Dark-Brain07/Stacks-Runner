import React, { memo } from 'react';
export interface NFTHistoryProps { className?: string; children?: React.ReactNode; }
export const NFTHistory = memo(({ className, children }: NFTHistoryProps) => (
  <div className={`sr-nfthistory ${className || ''}`}>{children}</div>
));
NFTHistory.displayName = 'NFTHistory';
