import React, { memo } from 'react';
export interface NFTSortProps { className?: string; children?: React.ReactNode; }
export const NFTSort = memo(({ className, children }: NFTSortProps) => (
  <div className={`sr-nftsort ${className || ''}`}>{children}</div>
));
NFTSort.displayName = 'NFTSort';
