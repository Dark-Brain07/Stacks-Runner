interface PerfMetric { name: string; startTime: number; duration?: number; }
class PerformanceMonitor {
  private metrics: Map<string, PerfMetric> = new Map();
  private frameTimes: number[] = [];
  private lastFrameTime = 0;
  start(name: string): void { this.metrics.set(name, { name, startTime: performance.now() }); }
  end(name: string): number { const m = this.metrics.get(name); if (!m) return 0; m.duration = performance.now() - m.startTime; return m.duration; }
  recordFrame(): void { const now = performance.now(); if (this.lastFrameTime > 0) { this.frameTimes.push(now - this.lastFrameTime); if (this.frameTimes.length > 60) this.frameTimes.shift(); } this.lastFrameTime = now; }
  getAverageFPS(): number { if (this.frameTimes.length === 0) return 0; return Math.round(1000 / (this.frameTimes.reduce((a, b) => a + b, 0) / this.frameTimes.length)); }
  reset(): void { this.metrics.clear(); this.frameTimes = []; this.lastFrameTime = 0; }
}
export const perfMonitor = new PerformanceMonitor();