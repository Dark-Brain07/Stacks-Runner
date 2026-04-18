import { describe, it, expect } from 'vitest';
import { CoopMode } from '../../../game/modes/CoopMode';
describe('CoopMode', () => {
  it('initializes', () => { const s = new CoopMode(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new CoopMode(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new CoopMode(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
