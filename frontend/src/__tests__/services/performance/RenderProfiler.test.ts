import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { RenderProfiler } from '../../../services/performance/RenderProfiler';

describe('RenderProfiler', () => {
  let svc: RenderProfiler;
  beforeEach(() => { svc = new RenderProfiler(); });
  afterEach(async () => { await svc.stop(); });

  it('initializes with defaults', () => {
    expect(svc).toBeDefined();
    expect(svc.isActive()).toBe(false);
  });

  it('starts and stops', async () => {
    await svc.start();
    expect(svc.isActive()).toBe(true);
    await svc.stop();
    expect(svc.isActive()).toBe(false);
  });

  it('tracks metrics', () => {
    const m = svc.getMetrics();
    expect(m.calls).toBe(0);
    svc.resetMetrics();
    expect(svc.getMetrics().errors).toBe(0);
  });

  it('emits lifecycle events', async () => {
    const ev = [];
    svc.on('started', () => ev.push('started'));
    svc.on('stopped', () => ev.push('stopped'));
    await svc.start();
    await svc.stop();
    expect(ev).toEqual(['started', 'stopped']);
  });
});
