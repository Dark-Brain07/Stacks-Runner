import React, { memo } from 'react';
export interface NFTAuctionProps { className?: string; children?: React.ReactNode; }
export const NFTAuction = memo(({ className, children }: NFTAuctionProps) => (
  <div className={`sr-nftauction ${className || ''}`}>{children}</div>
));
NFTAuction.displayName = 'NFTAuction';
