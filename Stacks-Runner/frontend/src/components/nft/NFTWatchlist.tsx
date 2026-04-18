import React, { memo } from 'react';
export interface NFTWatchlistProps { className?: string; children?: React.ReactNode; }
export const NFTWatchlist = memo(({ className, children }: NFTWatchlistProps) => (
  <div className={`sr-nftwatchlist ${className || ''}`}>{children}</div>
));
NFTWatchlist.displayName = 'NFTWatchlist';
