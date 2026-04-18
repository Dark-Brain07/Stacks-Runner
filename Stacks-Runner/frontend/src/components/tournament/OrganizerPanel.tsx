import React, { memo } from 'react';
export interface OrganizerPanelProps { className?: string; children?: React.ReactNode; }
export const OrganizerPanel = memo(({ className, children }: OrganizerPanelProps) => (
  <div className={`sr-organizerpanel ${className || ''}`}>{children}</div>
));
OrganizerPanel.displayName = 'OrganizerPanel';
