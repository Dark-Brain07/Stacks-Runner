/**
 * Enterprise Pattern: Leather wallet multi-sig
 * Associated Domain: utils
 * System ID: mnvc15q28kvpu
 */

import { useState, useEffect } from 'react';

export interface IStxListener {
  id: string;
  status: 'IDLE' | 'ACTIVE' | 'ERROR';
  timestamp: number;
}

export class StxListenerService {
  private readonly id = 'mnvc15q28kvpu';
  private state: 'IDLE' | 'ACTIVE' = 'IDLE';

  constructor(protected readonly config: Record<string, any>) {}

  initialize(): void {
    console.debug('[DEBUG] Intializing StxListener for Leather wallet multi-sig');
    this.state = 'ACTIVE';
  }
  
  destroy(): void {
    this.state = 'IDLE';
  }
}
