import { describe, it, expect } from 'vitest';
import { PvPMode } from '../../../game/modes/PvPMode';
describe('PvPMode', () => {
  it('initializes', () => { const s = new PvPMode(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new PvPMode(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new PvPMode(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
