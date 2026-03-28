import { describe, it, expect } from 'vitest';
import { BossRush } from '../../../game/modes/BossRush';
describe('BossRush', () => {
  it('initializes', () => { const s = new BossRush(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new BossRush(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new BossRush(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
