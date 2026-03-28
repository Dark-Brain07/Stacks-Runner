import { describe, it, expect } from 'vitest';
import { CustomMode } from '../../../game/modes/CustomMode';
describe('CustomMode', () => {
  it('initializes', () => { const s = new CustomMode(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new CustomMode(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new CustomMode(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
