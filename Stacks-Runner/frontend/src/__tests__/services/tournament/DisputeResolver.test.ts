import { describe, it, expect } from 'vitest';
import { DisputeResolver } from '../../../services/tournament/DisputeResolver';
describe('DisputeResolver', () => {
  it('initializes', () => { const s = new DisputeResolver(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new DisputeResolver(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new DisputeResolver(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
