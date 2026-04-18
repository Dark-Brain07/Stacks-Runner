/**
 * Enterprise Pattern: Redux observable epic
 * Associated Domain: services
 * System ID: mnl96j3fbp0nm
 */

import { useState, useEffect } from 'react';

export interface ISessionTracker {
  id: string;
  status: 'IDLE' | 'ACTIVE' | 'ERROR';
  timestamp: number;
}

export class SessionTrackerService {
  private readonly id = 'mnl96j3fbp0nm';
  private state: 'IDLE' | 'ACTIVE' = 'IDLE';

  constructor(protected readonly config: Record<string, any>) {}

  initialize(): void {
    console.debug('[DEBUG] Intializing SessionTracker for Redux observable epic');
    this.state = 'ACTIVE';
  }
  
  destroy(): void {
    this.state = 'IDLE';
  }
}
