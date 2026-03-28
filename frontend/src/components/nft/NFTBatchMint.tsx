import React, { memo } from 'react';
export interface NFTBatchMintProps { className?: string; children?: React.ReactNode; }
export const NFTBatchMint = memo(({ className, children }: NFTBatchMintProps) => (
  <div className={`sr-nftbatchmint ${className || ''}`}>{children}</div>
));
NFTBatchMint.displayName = 'NFTBatchMint';
