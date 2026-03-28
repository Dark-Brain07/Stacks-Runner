import { describe, it, expect } from 'vitest';
import { PracticeMode } from '../../../game/modes/PracticeMode';
describe('PracticeMode', () => {
  it('initializes', () => { const s = new PracticeMode(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new PracticeMode(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new PracticeMode(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
