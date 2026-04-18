import React, { memo } from 'react';
export interface BracketGeneratorProps { className?: string; children?: React.ReactNode; }
export const BracketGenerator = memo(({ className, children }: BracketGeneratorProps) => (
  <div className={`sr-bracketgenerator ${className || ''}`}>{children}</div>
));
BracketGenerator.displayName = 'BracketGenerator';
