import { describe, it, expect } from 'vitest';
import { RankedMode } from '../../../game/modes/RankedMode';
describe('RankedMode', () => {
  it('initializes', () => { const s = new RankedMode(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new RankedMode(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new RankedMode(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
