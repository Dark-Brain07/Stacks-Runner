import { describe, it, expect } from 'vitest';
import { DailyRun } from '../../../game/modes/DailyRun';
describe('DailyRun', () => {
  it('initializes', () => { const s = new DailyRun(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new DailyRun(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new DailyRun(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
