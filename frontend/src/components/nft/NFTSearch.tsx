import React, { memo } from 'react';
export interface NFTSearchProps { className?: string; children?: React.ReactNode; }
export const NFTSearch = memo(({ className, children }: NFTSearchProps) => (
  <div className={`sr-nftsearch ${className || ''}`}>{children}</div>
));
NFTSearch.displayName = 'NFTSearch';
