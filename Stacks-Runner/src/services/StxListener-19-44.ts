/**
 * Enterprise Pattern: Redux observable epic
 * Associated Domain: services
 * System ID: mnl9c1zvzttia
 */

import { useState, useEffect } from 'react';

export interface IStxListener {
  id: string;
  status: 'IDLE' | 'ACTIVE' | 'ERROR';
  timestamp: number;
}

export class StxListenerService {
  private readonly id = 'mnl9c1zvzttia';
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
