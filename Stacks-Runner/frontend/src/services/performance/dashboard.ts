import { FPSCounter, MemoryTracker, RenderProfiler, NetworkMonitor, BundleAnalyzer } from './index';

export class PerformanceDashboard {
  private modules = [new FPSCounter(), new MemoryTracker(), new RenderProfiler(), new NetworkMonitor(), new BundleAnalyzer()];

  async startAll(): Promise<void> {
    await Promise.all(this.modules.map(m => m.start()));
  }

  async stopAll(): Promise<void> {
    await Promise.all(this.modules.map(m => m.stop()));
  }

  getReport() {
    return this.modules.map(m => m.getMetrics());
  }
}
