import React, { memo } from 'react';
export interface NFTGalleryProps { className?: string; children?: React.ReactNode; }
export const NFTGallery = memo(({ className, children }: NFTGalleryProps) => (
  <div className={`sr-nftgallery ${className || ''}`}>{children}</div>
));
NFTGallery.displayName = 'NFTGallery';
