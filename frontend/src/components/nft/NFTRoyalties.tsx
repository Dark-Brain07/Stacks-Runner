import React, { memo } from 'react';
export interface NFTRoyaltiesProps { className?: string; children?: React.ReactNode; }
export const NFTRoyalties = memo(({ className, children }: NFTRoyaltiesProps) => (
  <div className={`sr-nftroyalties ${className || ''}`}>{children}</div>
));
NFTRoyalties.displayName = 'NFTRoyalties';
