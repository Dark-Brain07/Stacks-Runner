import React, { memo } from 'react';
export interface NFTFavoriteProps { className?: string; children?: React.ReactNode; }
export const NFTFavorite = memo(({ className, children }: NFTFavoriteProps) => (
  <div className={`sr-nftfavorite ${className || ''}`}>{children}</div>
));
NFTFavorite.displayName = 'NFTFavorite';
