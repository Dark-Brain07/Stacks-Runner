import { describe, it, expect } from 'vitest';
import { MatchScheduler } from '../../../services/tournament/MatchScheduler';
describe('MatchScheduler', () => {
  it('initializes', () => { const s = new MatchScheduler(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new MatchScheduler(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new MatchScheduler(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
