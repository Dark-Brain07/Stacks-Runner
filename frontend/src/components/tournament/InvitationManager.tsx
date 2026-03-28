import React, { memo } from 'react';
export interface InvitationManagerProps { className?: string; children?: React.ReactNode; }
export const InvitationManager = memo(({ className, children }: InvitationManagerProps) => (
  <div className={`sr-invitationmanager ${className || ''}`}>{children}</div>
));
InvitationManager.displayName = 'InvitationManager';
