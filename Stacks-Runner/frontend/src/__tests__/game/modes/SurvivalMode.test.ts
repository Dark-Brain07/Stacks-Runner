import { describe, it, expect } from 'vitest';
import { SurvivalMode } from '../../../game/modes/SurvivalMode';
describe('SurvivalMode', () => {
  it('initializes', () => { const s = new SurvivalMode(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new SurvivalMode(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new SurvivalMode(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
