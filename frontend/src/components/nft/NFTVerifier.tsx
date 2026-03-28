import React, { memo } from 'react';
export interface NFTVerifierProps { className?: string; children?: React.ReactNode; }
export const NFTVerifier = memo(({ className, children }: NFTVerifierProps) => (
  <div className={`sr-nftverifier ${className || ''}`}>{children}</div>
));
NFTVerifier.displayName = 'NFTVerifier';
