import { describe, it, expect } from 'vitest';
import { EndlessMode } from '../../../game/modes/EndlessMode';
describe('EndlessMode', () => {
  it('initializes', () => { const s = new EndlessMode(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new EndlessMode(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new EndlessMode(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
