import { describe, it, expect } from 'vitest';
import { PartyMode } from '../../../game/modes/PartyMode';
describe('PartyMode', () => {
  it('initializes', () => { const s = new PartyMode(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new PartyMode(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new PartyMode(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
