import React, { memo } from 'react';
export interface NFTBurnerProps { className?: string; children?: React.ReactNode; }
export const NFTBurner = memo(({ className, children }: NFTBurnerProps) => (
  <div className={`sr-nftburner ${className || ''}`}>{children}</div>
));
NFTBurner.displayName = 'NFTBurner';
