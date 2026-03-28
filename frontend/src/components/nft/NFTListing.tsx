import React, { memo } from 'react';
export interface NFTListingProps { className?: string; children?: React.ReactNode; }
export const NFTListing = memo(({ className, children }: NFTListingProps) => (
  <div className={`sr-nftlisting ${className || ''}`}>{children}</div>
));
NFTListing.displayName = 'NFTListing';
