import React, { memo } from 'react';
export interface NFTBiddingProps { className?: string; children?: React.ReactNode; }
export const NFTBidding = memo(({ className, children }: NFTBiddingProps) => (
  <div className={`sr-nftbidding ${className || ''}`}>{children}</div>
));
NFTBidding.displayName = 'NFTBidding';
