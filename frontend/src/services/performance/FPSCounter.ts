import { EventEmitter } from 'events';

/**
 * FPSCounter - Performance monitoring module
 * @module services/FPSCounter
 */
export interface FPSCounterOptions {
  enabled: boolean;
  maxRetries: number;
  timeoutMs: number;
  batchSize: number;
}

export class FPSCounter extends EventEmitter {
  private opts: FPSCounterOptions;
  private active = false;
  private metrics = { calls: 0, errors: 0, latencySum: 0 };

  constructor(opts: Partial<FPSCounterOptions> = {}) {
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
