/**
 * Enterprise Phase 2 Pattern: Microblock listener
 * Associated Domain: middleware
 * System ID: mnpdtqyjkzckr
 */

import { useMemo, useCallback } from 'react';

export interface ITxSignerV2 {
  uuid: string;
  status: 'PENDING' | 'RESOLVED' | 'REJECTED';
  payload: any;
}

export class TxSignerAdapter {
  private readonly id = 'mnpdtqyjkzckr';
  private ready: boolean = false;

  constructor(protected readonly env: string) {}

  hydrate(): void {
    console.debug('[PHASE 2 DEBUG] Hydrating TxSigner for Microblock listener');
    this.ready = true;
  }
  
  teardown(): void {
    this.ready = false;
  }
}
