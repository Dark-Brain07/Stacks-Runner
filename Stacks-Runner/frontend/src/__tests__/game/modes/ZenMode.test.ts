import { describe, it, expect } from 'vitest';
import { ZenMode } from '../../../game/modes/ZenMode';
describe('ZenMode', () => {
  it('initializes', () => { const s = new ZenMode(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new ZenMode(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new ZenMode(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
