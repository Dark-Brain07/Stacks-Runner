import React, { memo } from 'react';
export interface NFTMetadataProps { className?: string; children?: React.ReactNode; }
export const NFTMetadata = memo(({ className, children }: NFTMetadataProps) => (
  <div className={`sr-nftmetadata ${className || ''}`}>{children}</div>
));
NFTMetadata.displayName = 'NFTMetadata';
