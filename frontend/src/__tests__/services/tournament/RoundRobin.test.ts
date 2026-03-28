import { describe, it, expect } from 'vitest';
import { RoundRobin } from '../../../services/tournament/RoundRobin';
describe('RoundRobin', () => {
  it('initializes', () => { const s = new RoundRobin(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new RoundRobin(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new RoundRobin(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
