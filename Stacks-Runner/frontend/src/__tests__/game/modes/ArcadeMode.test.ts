import { describe, it, expect } from 'vitest';
import { ArcadeMode } from '../../../game/modes/ArcadeMode';
describe('ArcadeMode', () => {
  it('initializes', () => { const s = new ArcadeMode(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new ArcadeMode(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new ArcadeMode(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
