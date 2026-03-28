import React, { memo } from 'react';
export interface NFTFilterProps { className?: string; children?: React.ReactNode; }
export const NFTFilter = memo(({ className, children }: NFTFilterProps) => (
  <div className={`sr-nftfilter ${className || ''}`}>{children}</div>
));
NFTFilter.displayName = 'NFTFilter';
