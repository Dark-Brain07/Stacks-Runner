import { describe, it, expect } from 'vitest';
import { TutorialMode } from '../../../game/modes/TutorialMode';
describe('TutorialMode', () => {
  it('initializes', () => { const s = new TutorialMode(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new TutorialMode(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new TutorialMode(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
