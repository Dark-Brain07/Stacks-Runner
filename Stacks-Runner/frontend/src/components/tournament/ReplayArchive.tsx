import React, { memo } from 'react';
export interface ReplayArchiveProps { className?: string; children?: React.ReactNode; }
export const ReplayArchive = memo(({ className, children }: ReplayArchiveProps) => (
  <div className={`sr-replayarchive ${className || ''}`}>{children}</div>
));
ReplayArchive.displayName = 'ReplayArchive';
