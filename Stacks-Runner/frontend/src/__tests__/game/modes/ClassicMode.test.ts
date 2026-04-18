import { describe, it, expect } from 'vitest';
import { ClassicMode } from '../../../game/modes/ClassicMode';
describe('ClassicMode', () => {
  it('initializes', () => { const s = new ClassicMode(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new ClassicMode(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new ClassicMode(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
