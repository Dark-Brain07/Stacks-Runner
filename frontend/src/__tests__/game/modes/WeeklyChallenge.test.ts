import { describe, it, expect } from 'vitest';
import { WeeklyChallenge } from '../../../game/modes/WeeklyChallenge';
describe('WeeklyChallenge', () => {
  it('initializes', () => { const s = new WeeklyChallenge(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new WeeklyChallenge(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new WeeklyChallenge(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
