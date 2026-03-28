import { describe, it, expect } from 'vitest';
import { GuildMerger } from '../../../services/guild/GuildMerger';
describe('GuildMerger', () => {
  it('initializes', () => { const s = new GuildMerger(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new GuildMerger(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new GuildMerger(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
