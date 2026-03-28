import React, { memo } from 'react';
export interface NFTTransferProps { className?: string; children?: React.ReactNode; }
export const NFTTransfer = memo(({ className, children }: NFTTransferProps) => (
  <div className={`sr-nfttransfer ${className || ''}`}>{children}</div>
));
NFTTransfer.displayName = 'NFTTransfer';
