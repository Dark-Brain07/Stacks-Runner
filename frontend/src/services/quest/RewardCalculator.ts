import { EventEmitter } from 'events';

/**
 * RewardCalculator - Quest and progression service
 * @module services/RewardCalculator
 */
export interface RewardCalculatorOptions {
  enabled: boolean;
  maxRetries: number;
  timeoutMs: number;
  batchSize: number;
}

export class RewardCalculator extends EventEmitter {
  private opts: RewardCalculatorOptions;
  private active = false;
  private metrics = { calls: 0, errors: 0, latencySum: 0 };

  constructor(opts: Partial<RewardCalculatorOptions> = {}) {
    super();
    this.opts = { enabled: true, maxRetries: 3, timeoutMs: 5000, batchSize: 50, ...opts };
  }

  async start(): Promise<void> {
    if (this.active) return;
    this.active = true;
    this.emit('started');
  }

  async stop(): Promise<void> {
    this.active = false;
    this.emit('stopped');
  }

  isActive(): boolean { return this.active && this.opts.enabled; }

  getMetrics() { return { ...this.metrics, avgLatency: this.metrics.calls ? this.metrics.latencySum / this.metrics.calls : 0 }; }

  resetMetrics(): void { this.metrics = { calls: 0, errors: 0, latencySum: 0 }; }
}
