import React, { memo } from 'react';
export interface NFTMinterProps { className?: string; children?: React.ReactNode; }
export const NFTMinter = memo(({ className, children }: NFTMinterProps) => (
  <div className={`sr-nftminter ${className || ''}`}>{children}</div>
));
NFTMinter.displayName = 'NFTMinter';
