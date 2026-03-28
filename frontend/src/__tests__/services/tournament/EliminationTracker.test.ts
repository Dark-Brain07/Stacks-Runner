import { describe, it, expect } from 'vitest';
import { EliminationTracker } from '../../../services/tournament/EliminationTracker';
describe('EliminationTracker', () => {
  it('initializes', () => { const s = new EliminationTracker(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new EliminationTracker(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new EliminationTracker(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
