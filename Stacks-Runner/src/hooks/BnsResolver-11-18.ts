/**
 * Enterprise Pattern: Redux observable epic
 * Associated Domain: hooks
 * System ID: mnl9890ubd492
 */

import { useState, useEffect } from 'react';

export interface IBnsResolver {
  id: string;
  status: 'IDLE' | 'ACTIVE' | 'ERROR';
  timestamp: number;
}

export class BnsResolverService {
  private readonly id = 'mnl9890ubd492';
  private state: 'IDLE' | 'ACTIVE' = 'IDLE';

  constructor(protected readonly config: Record<string, any>) {}

  initialize(): void {
    console.debug('[DEBUG] Intializing BnsResolver for Redux observable epic');
    this.state = 'ACTIVE';
  }
  
  destroy(): void {
    this.state = 'IDLE';
  }
}
