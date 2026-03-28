import { describe, it, expect } from 'vitest';
import { HardcoreMode } from '../../../game/modes/HardcoreMode';
describe('HardcoreMode', () => {
  it('initializes', () => { const s = new HardcoreMode(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new HardcoreMode(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new HardcoreMode(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
