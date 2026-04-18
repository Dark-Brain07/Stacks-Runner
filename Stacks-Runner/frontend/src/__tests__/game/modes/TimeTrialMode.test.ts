import { describe, it, expect } from 'vitest';
import { TimeTrialMode } from '../../../game/modes/TimeTrialMode';
describe('TimeTrialMode', () => {
  it('initializes', () => { const s = new TimeTrialMode(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new TimeTrialMode(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new TimeTrialMode(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
