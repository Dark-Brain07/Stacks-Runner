import { describe, it, expect } from 'vitest';
import { StoryMode } from '../../../game/modes/StoryMode';
describe('StoryMode', () => {
  it('initializes', () => { const s = new StoryMode(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new StoryMode(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new StoryMode(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
