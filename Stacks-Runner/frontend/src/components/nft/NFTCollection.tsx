import React, { memo } from 'react';
export interface NFTCollectionProps { className?: string; children?: React.ReactNode; }
export const NFTCollection = memo(({ className, children }: NFTCollectionProps) => (
  <div className={`sr-nftcollection ${className || ''}`}>{children}</div>
));
NFTCollection.displayName = 'NFTCollection';
