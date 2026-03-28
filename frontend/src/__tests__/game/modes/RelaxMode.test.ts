import { describe, it, expect } from 'vitest';
import { RelaxMode } from '../../../game/modes/RelaxMode';
describe('RelaxMode', () => {
  it('initializes', () => { const s = new RelaxMode(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new RelaxMode(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new RelaxMode(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
