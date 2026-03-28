import React, { memo } from 'react';
export interface NFTPreviewProps { className?: string; children?: React.ReactNode; }
export const NFTPreview = memo(({ className, children }: NFTPreviewProps) => (
  <div className={`sr-nftpreview ${className || ''}`}>{children}</div>
));
NFTPreview.displayName = 'NFTPreview';
