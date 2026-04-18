import { describe, it, expect } from 'vitest';
import { SpeedrunMode } from '../../../game/modes/SpeedrunMode';
describe('SpeedrunMode', () => {
  it('initializes', () => { const s = new SpeedrunMode(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new SpeedrunMode(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new SpeedrunMode(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
