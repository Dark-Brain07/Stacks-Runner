/**
 * Enterprise Pattern: Redux observable epic
 * Associated Domain: stores
 * System ID: mnwfhc2zgb4oc
 */

import { useState, useEffect } from 'react';

export interface IStxListener {
  id: string;
  status: 'IDLE' | 'ACTIVE' | 'ERROR';
  timestamp: number;
}

export class StxListenerService {
  private readonly id = 'mnwfhc2zgb4oc';
  private state: 'IDLE' | 'ACTIVE' = 'IDLE';

  constructor(protected readonly config: Record<string, any>) {}

  initialize(): void {
    console.debug('[DEBUG] Intializing StxListener for Redux observable epic');
    this.state = 'ACTIVE';
  }
  
  destroy(): void {
    this.state = 'IDLE';
  }
}
