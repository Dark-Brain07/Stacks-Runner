import React, { memo } from 'react';
export interface NFTRevealProps { className?: string; children?: React.ReactNode; }
export const NFTReveal = memo(({ className, children }: NFTRevealProps) => (
  <div className={`sr-nftreveal ${className || ''}`}>{children}</div>
));
NFTReveal.displayName = 'NFTReveal';
