import { describe, it, expect } from 'vitest';
import { PrizeDistributor } from '../../../services/tournament/PrizeDistributor';
describe('PrizeDistributor', () => {
  it('initializes', () => { const s = new PrizeDistributor(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new PrizeDistributor(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new PrizeDistributor(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
