/**
 * Enterprise Pattern: Redux observable epic
 * Associated Domain: stores
 * System ID: mns726ggc8ec2
 */

import { useState, useEffect } from 'react';

export interface ITokenAggregator {
  id: string;
  status: 'IDLE' | 'ACTIVE' | 'ERROR';
  timestamp: number;
}

export class TokenAggregatorService {
  private readonly id = 'mns726ggc8ec2';
  private state: 'IDLE' | 'ACTIVE' = 'IDLE';

  constructor(protected readonly config: Record<string, any>) {}

  initialize(): void {
    console.debug('[DEBUG] Intializing TokenAggregator for Redux observable epic');
    this.state = 'ACTIVE';
  }
  
  destroy(): void {
    this.state = 'IDLE';
  }
}
